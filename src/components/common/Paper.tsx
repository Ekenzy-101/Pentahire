import { Paper, PaperProps } from "@mui/material";

const EnhancedPaper: React.FC<PaperProps> = (props) => {
  return (
    <Paper
      style={{ maxWidth: "100vw", minHeight: "100vh", width: "100%" }}
      square
      variant="outlined"
      {...props}
    />
  );
};

export default EnhancedPaper;
