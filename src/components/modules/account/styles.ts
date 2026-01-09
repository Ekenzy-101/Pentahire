import { makeStyles } from "tss-react/mui";

export const useSectionStyles = makeStyles()(({ palette }) => ({
  avatar: {
    height: 50,
    width: 50,
  },
  closeAccountBtn: {
    border: `1px solid ${palette.error.main} !important`,
    color: palette.error.main,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    textTransform: "none",
  },
  textField: {
    display: "block",
    margin: "0 0 1rem 0 !important",
  },
  title: {
    marginBottom: 10,
  },
  twoFactorBtn: {
    textTransform: "none",
  },
}));

export const useDialogStyles = makeStyles()(() => ({
  actionText: {
    textAlign: "center",
    cursor: "pointer",
  },
  center: {
    margin: "auto auto 0.5rem auto",
    display: "block",
  },
  padding: {
    padding: "12px 24px",
  },
}));
