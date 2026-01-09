import { Avatar, Container, Grid } from "@mui/material";

import DriverFavourites from "./Favourites";
import DriverProfileDetails from "./ProfileDetails";
import DriverReviews from "./Reviews";
import DriverVehicles from "./Vehicles";
import { useStyles } from "./styles";
import { useUser } from "src/hooks";

const DriverBody: React.FC = () => {
  const { classes } = useStyles();
  const { data } = useUser();
  const user = data?.user!;

  return (
    <>
      <Avatar
        alt="Banner"
        className={classes.banner}
        src={"/images/driver-banner.png"}
        variant="square"
      />
      <Container className={classes.container} maxWidth="lg">
        <Grid className={classes.gridContainer} container spacing={2}>
          <Grid size={{ xs: 12, lg: 5 }} className={classes.gridItemOverflow}>
            <DriverProfileDetails />
          </Grid>
          <Grid size={{ xs: 12, lg: 7 }}>
            <DriverFavourites />
            <DriverVehicles />
            <DriverReviews
              firstname={user.firstname}
              reviews={[1, 2, 3]}
              title="REVIEWS FROM GUESTS"
            />
            <DriverReviews
              firstname={user.firstname}
              reviews={[]}
              title="REVIEWS FROM HOSTS"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DriverBody;
