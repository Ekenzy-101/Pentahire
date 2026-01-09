import { Settings } from "@ant-design/react-slick";
import { Card, CardActions, CardMedia, Typography } from "@mui/material";

import EnhancedSlider from "src/components/common/slider";
import EnhancedLink from "src/components/common/Link";
import { useMakeOrLocationStyles } from "./styles";
import { TO_VEHICLES_PAGE } from "src/utils/constants";
import { vehicleMakes } from "src/utils/data";
import { BREAKPOINTS } from "src/components/foundation";
import React from "react";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: BREAKPOINTS.lg,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: BREAKPOINTS.sm,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BrowseMakeSlider: React.FC = () => {
  const { classes } = useMakeOrLocationStyles({ variant: "make" });
  return (
    <EnhancedSlider
      removeArrowsOnMobile
      rootProps={{ maxWidth: "lg", className: classes.container }}
      rootChildren={
        <Typography className={classes.title} variant="h6">
          Browse by make
        </Typography>
      }
      settings={settings}
    >
      {React.Children.toArray(
        vehicleMakes.map(({ label, value }) => (
          <EnhancedLink
            className={classes.link}
            href={`${TO_VEHICLES_PAGE}?make=${value}`}
          >
            <Card className={classes.root}>
              <CardMedia
                image={`/images/make/${value}.jpg`}
                className={classes.image}
              />
              <CardActions className={classes.cardActions}>
                <Typography>{label}</Typography>
              </CardActions>
            </Card>
          </EnhancedLink>
        ))
      )}
    </EnhancedSlider>
  );
};

export default BrowseMakeSlider;
