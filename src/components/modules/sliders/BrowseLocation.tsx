import { Settings } from "@ant-design/react-slick";
import { Card, CardMedia, CardActions, Typography } from "@material-ui/core";
import React from "react";

import EnhancedLink from "src/components/common/Link";
import EnhancedSlider from "src/components/common/slider";
import { vehicleLocations } from "src/utils/data";
import { BREAKPOINTS } from "src/components/foundation";
import { useMakeOrLocationStyles } from "./styles";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: BREAKPOINTS.lg,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: BREAKPOINTS.md,
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

const BrowseLocationSlider: React.FC = () => {
  const classes = useMakeOrLocationStyles({ variant: "location" });
  return (
    <EnhancedSlider
      removeArrowsOnMobile
      rootProps={{ maxWidth: "lg", className: classes.container }}
      rootChildren={
        <Typography className={classes.title} variant="h6">
          Browse by destination
        </Typography>
      }
      settings={settings}
    >
      {React.Children.toArray(
        vehicleLocations.map(({ label, value }, index) => (
          <EnhancedLink className={classes.link} href="/" key={index}>
            <Card className={classes.root}>
              <CardMedia
                image={`/images/destination/${value}.png`}
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

export default BrowseLocationSlider;
