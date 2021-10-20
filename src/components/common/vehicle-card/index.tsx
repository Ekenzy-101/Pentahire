import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Favorite, FavoriteBorder, Star } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

import { TO_VEHICLES_PAGE } from "src/utils/constants";
import { Vehicle } from "src/utils/types";
import { useStyles } from "./styles";

interface Props {
  vehicle: Vehicle;
  mediaClassName?: string;
}

const VehicleCard: React.FC<Props> = ({ vehicle, mediaClassName }) => {
  const classes = useStyles();
  const isTogglingFavourite = false;
  const isFavourite = true;
  return (
    <Card className={classes.card}>
      <IconButton className={classes.likeBtn}>
        {isTogglingFavourite ? (
          <CircularProgress size={15} />
        ) : isFavourite ? (
          <Favorite className={classes.favourite} />
        ) : (
          <FavoriteBorder className={classes.favouriteBorder} />
        )}
      </IconButton>
      <Link href={`${TO_VEHICLES_PAGE}/${vehicle._id}`}>
        <a className={classes.link}>
          <Box overflow="hidden">
            <CardMedia
              className={mediaClassName || classes.media}
              image={"/images/vehicle.jpg" || vehicle.image}
              title={vehicle.name}
            />
          </Box>

          <CardContent className={classes.cardContent}>
            <Typography className={classes.title} variant="h6">
              {vehicle.name}
            </Typography>
            <Typography className={classes.subTitle}>
              5.0 <Star fontSize="inherit" color="primary" /> (52 trips)
            </Typography>
            <Divider className={classes.divider} />
            <Box display="flex">
              <Typography className={classes.rentalFee}>
                ${vehicle.rental_fee}/day
              </Typography>
            </Box>
          </CardContent>
        </a>
      </Link>
    </Card>
  );
};

export default VehicleCard;
