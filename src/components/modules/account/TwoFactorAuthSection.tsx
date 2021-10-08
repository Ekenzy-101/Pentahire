import { AxiosError } from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import QRCode from "qrcode.react";

import CustomAlert from "src/components/common/alert";
import LoadingPage from "src/components/common/LoadingPage";
import { confirmOTPKey, deleteOTPKey, getOTPKey } from "src/services/api";
import { logger } from "src/services/logger";
import { isObject } from "src/utils/helpers";
import { useAuthUser } from "src/hooks";
import { User } from "src/utils/types";
import { validateCode } from "src/services/validations";
import AccountSection from "./AccountSection";
import { useDialogStyles, useSectionStyles } from "./styles";

const TwoFactorAuthSection: React.FC = () => {
  const [modal, setModal] = useState<"enable" | "disable" | "none">("none");
  const classes = useSectionStyles();

  const { user } = useAuthUser() as { user: User };
  return (
    <AccountSection
      description={
        <>
          <Typography className={classes.title} color="primary" variant="h6">
            Two-Factor Authentication
          </Typography>
          <Typography className={classes.title}>
            Add an extra layer of security to block unauthorized access and
            protect your account.
          </Typography>
        </>
      }
      content={
        <>
          {user.is_2fa_enabled ? (
            <Button
              className={classes.closeAccountBtn}
              onClick={() => setModal("enable")}
            >
              Disable
            </Button>
          ) : (
            <Button
              className={classes.twoFactorBtn}
              color="primary"
              disableElevation
              variant="contained"
              onClick={() => setModal("enable")}
            >
              Enable
            </Button>
          )}
          {modal === "enable" ? (
            <Enable2FADialog
              open={modal === "enable"}
              onClose={() => setModal("none")}
            />
          ) : (
            <Disable2FADialog
              open={modal === "disable"}
              onClose={() => setModal("none")}
            />
          )}
        </>
      }
    />
  );
};

interface DialogProps {
  open: boolean;
  onClose: () => void;
}

type DisplayType = "qrcode" | "secretkey";

const Enable2FADialog: React.FC<DialogProps> = ({ open, onClose }) => {
  const [code, setCode] = useState("");
  const [displayType, setDisplayType] = useState<DisplayType>("qrcode");
  const [finalStep, setFinalStep] = useState(false);
  const [message, setMessage] = useState("");

  const { data, isLoading: isFetchingOTPKey } = useQuery("otp-key", getOTPKey, {
    refetchOnMount: true,
    staleTime: 0,
  });
  const { mutateAsync, isLoading } = useMutation(confirmOTPKey);
  const classes = useDialogStyles();
  const log = logger(Enable2FADialog.name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCode = event.target.value;
    const isValidCode = newCode ? true : validateCode(newCode);
    log({ isValidCode, newCode });
    setCode((prevCode) => (isValidCode ? newCode : prevCode));
  };

  const handleDisable2FA = async () => {
    try {
      await deleteOTPKey();
      handleClose();
    } catch (error) {
      log({ error });
    }
  };

  const handleEnable2FA = async () => {
    try {
      await mutateAsync({ code });
      handleClose();
    } catch (ex) {
      const error = ex as AxiosError;
      const errors = error.response?.data;
      if (isObject(errors)) {
        setMessage(errors.message);
        return;
      }

      setMessage(error.message);
    }
  };

  const handleNext = () => {
    setFinalStep(true);
  };

  const handlePrevious = () => {
    setFinalStep(false);
  };

  const handleClose = () => {
    onClose();
    setCode("");
    setDisplayType("qrcode");
    setFinalStep(false);
    setMessage("");
  };

  return (
    <Dialog maxWidth="xs" open={open} onClose={handleDisable2FA}>
      <Typography className={classes.padding} variant="h6">
        Add authenticator app
      </Typography>
      <DialogContent dividers>
        <CustomAlert
          message={message}
          open={Boolean(message)}
          onClose={() => setMessage("")}
          severity="error"
        />
        {isFetchingOTPKey ? (
          <LoadingPage
            spinnerProps={{ size: 30 }}
            rootProps={{
              style: { border: "none", minHeight: 70, width: 396 },
            }}
          />
        ) : (
          <>
            <Typography gutterBottom>
              {finalStep
                ? "Please enter your 6-digit authentication code from the Google Authenticator app."
                : "Download the free Google Authenticator app, add a new account, then scan this QRcode to set up your account."}
            </Typography>
            {finalStep ? (
              <TextField
                className={classes.center}
                onChange={handleChange}
                size="small"
                style={{ width: "fit-content" }}
                value={code}
                variant="outlined"
              />
            ) : displayType === "qrcode" ? (
              <>
                <QRCode
                  className={classes.center}
                  value={data?.url!}
                  size={164}
                />
                <Typography
                  className={classes.actionText}
                  color="primary"
                  gutterBottom
                  onClick={() => setDisplayType("secretkey")}
                >
                  Enter secret key manually
                </Typography>
              </>
            ) : (
              <>
                <TextField
                  className={classes.center}
                  defaultValue={data?.secret}
                  fullWidth
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  size="small"
                />
                <Typography
                  className={classes.actionText}
                  color="primary"
                  gutterBottom
                  onClick={() => setDisplayType("qrcode")}
                >
                  Scan QRcode instead
                </Typography>
              </>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions className={classes.padding}>
        <Button
          variant="contained"
          disableElevation
          onClick={finalStep ? handlePrevious : handleDisable2FA}
        >
          {finalStep ? "Back" : "Cancel"}
        </Button>
        <Button
          variant="contained"
          disabled={(finalStep && code.length < 6) || isLoading}
          disableElevation
          color="primary"
          onClick={finalStep ? handleEnable2FA : handleNext}
        >
          {finalStep ? "Confirm" : "Continue"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Disable2FADialog: React.FC<DialogProps> = ({ open, onClose }) => {
  const classes = useDialogStyles();
  const { mutateAsync, isLoading } = useMutation(deleteOTPKey);
  const log = logger(Disable2FADialog.name);

  const handleDisable2FA = async () => {
    try {
      await mutateAsync();
      onClose();
    } catch (error) {
      log({ error });
    }
  };

  return (
    <Dialog maxWidth="xs" open={open} onClose={onClose}>
      <Typography className={classes.padding} variant="h6">
        Delete authenticator app
      </Typography>
      <DialogContent dividers>
        <Typography gutterBottom>
          Are you sure? Deleting your authenticator app will disable
          authenticator verification and remove the extra security on your
          account.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.padding}>
        <Button variant="contained" disableElevation onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={isLoading}
          disableElevation
          color="primary"
          onClick={handleDisable2FA}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default TwoFactorAuthSection;
