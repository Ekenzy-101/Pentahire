import { Alert, AlertColor, Collapse, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

interface Props {
  message: string;
  open: boolean;
  onClose: () => void;
  severity: AlertColor;
}

const CustomAlert: React.FC<Props> = ({ message, open, onClose, severity }) => {
  return (
    <Collapse
      style={{
        margin: "0.5rem auto",
        width: "fit-content",
      }}
      in={open}
    >
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <Close fontSize="inherit" />
          </IconButton>
        }
        severity={severity}
      >
        {message}
      </Alert>
    </Collapse>
  );
};

export default CustomAlert;
