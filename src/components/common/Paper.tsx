import { Paper, PaperProps } from "@material-ui/core";
import React from "react";

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
