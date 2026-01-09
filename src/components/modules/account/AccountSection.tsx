import { Box, Grid } from "@mui/material";
import { useScreenSizeDown } from "src/hooks";

interface Props {
  content: React.ReactNode;
  description: React.ReactNode;
}

const AccountSection: React.FC<Props> = ({ content, description }) => {
  const isSmallScreen = useScreenSizeDown("sm");
  return (
    <Grid spacing={isSmallScreen ? 1 : 3} container>
      <Grid size={{ xs: 12, sm: 4, md: 5 }}>
        <Box component="div" maxWidth={isSmallScreen ? "none" : "350px"}>
          {description}
        </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 8, md: 7 }}>
        <Box component="div" maxWidth={isSmallScreen ? "none" : "375px"}>
          {content}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AccountSection;
