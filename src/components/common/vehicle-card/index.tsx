import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Favorite, FavoriteBorder, Star } from "@material-ui/icons";
import React from "react";

import {
  FALLBACK_VEHICLE_IMAGE_URL,
  TO_VEHICLES_PAGE,
} from "src/utils/constants";
import { Vehicle } from "src/utils/types";
import EnhancedLink from "../Link";
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

      <EnhancedLink href={`${TO_VEHICLES_PAGE}/${vehicle.id}`}>
        <div style={{ overflow: "hidden" }}>
          <CardMedia
            className={mediaClassName || classes.media}
            image={vehicle.image || FALLBACK_VEHICLE_IMAGE_URL}
            title={vehicle.name}
          />
        </div>

        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} variant="h6">
            {vehicle.name}
          </Typography>
          <Typography className={classes.subTitle}>
            {vehicle.average_rating ? (
              <>
                {vehicle.average_rating}{" "}
                <Star fontSize="inherit" color="primary" />{" "}
              </>
            ) : vehicle.trips_count ? (
              <>({vehicle.trips_count} trips)</>
            ) : (
              <p></p>
            )}
          </Typography>
          <Divider className={classes.divider} />
          <div style={{ display: "flex" }}>
            <Typography className={classes.rentalFee}>
              ${vehicle.rental_fee}/day
            </Typography>
          </div>
        </CardContent>
      </EnhancedLink>
    </Card>
  );
};

export default VehicleCard;
