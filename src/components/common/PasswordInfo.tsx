import { Box, Typography } from "@material-ui/core";
import React from "react";

const PasswordInfo: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gridGap="5px"
      marginBottom="0.5rem"
      marginTop="-0.5rem"
    >
      <Typography color="textSecondary" variant="caption">
        Password should be between 8 and 128 characters
      </Typography>
      <Typography color="textSecondary" variant="caption">
        Password should be a mix of uppercase, lowercase, numeric and special
        characters
      </Typography>
    </Box>
  );
};

export default PasswordInfo;
