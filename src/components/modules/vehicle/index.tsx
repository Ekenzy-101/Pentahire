import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Grid,
  IconButton,
} from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import React from "react";

import SimilarCarsSlider from "../sliders/SimilarCarsSlider";
import VehicleBooking from "./Booking";
import VehicleDetails from "./Details";
import VehicleLocation from "./Location";
import VehicleOwner from "./Owner";
import VehicleReviews from "./Reviews";
import { useStyles } from "./styles";

const VehicleBody: React.FC = () => {
  const classes = useStyles();
  const isTogglingFavourite = false;
  const isFavourite = true;

  const favouriteIconElement = isTogglingFavourite ? (
    <CircularProgress size={15} />
  ) : isFavourite ? (
    <Favorite className={classes.favourite} />
  ) : (
    <FavoriteBorder className={classes.favouriteBorder} />
  );

  const favouriteBtnText = isTogglingFavourite
    ? ""
    : isFavourite
    ? "Remove from  Favourites"
    : "Add to Favourites";

  return (
    <>
      <Box position="relative">
        <Avatar
          alt="Banner"
          className={classes.banner}
          src={"/images/vehicle.jpg"}
          variant="square"
        />
        <IconButton className={classes.likeBtn}>
          {favouriteIconElement}
        </IconButton>
      </Box>

      <Container style={{ marginBottom: 40 }} maxWidth="lg">
        <Grid className={classes.gridContainer} container spacing={2}>
          <Grid item xs={12} md={7}>
            <VehicleDetails />
            <VehicleOwner />
            <VehicleLocation />
            <VehicleReviews />
          </Grid>
          <Grid item xs={12} md={5}>
            <VehicleBooking
              btnIcon={favouriteIconElement}
              btnText={favouriteBtnText}
            />
          </Grid>
        </Grid>
      </Container>

      <SimilarCarsSlider />
    </>
  );
};

export default VehicleBody;
