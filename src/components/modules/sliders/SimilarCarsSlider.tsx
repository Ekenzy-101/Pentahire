import { Settings } from "@ant-design/react-slick";
import { Typography, makeStyles } from "@material-ui/core";
import React from "react";

import EnhancedSlider from "src/components/common/slider";
import VehicleCard from "src/components/common/vehicle-card";
import { BREAKPOINTS } from "src/components/foundation";

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: BREAKPOINTS.lg,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const vehicle = {
  id: "60c232cec04ea165125ff654",
  created_at: "2021-06-18T07:12:33.024Z",
  image: "https://pentahire.s3.amazonaws.com/vehicles/60c232cec04ea165125ff654",
  experience: "",
  make: "bmw",
  name: "BMZ 7 Series 2016",
  rental_fee: 190,
  startDate: "2021-06-10T15:42:06.586Z",
  endDate: "2021-06-10T15:42:06.586Z",
  user_id: "60b88c2042d499ba9b65958f",
};

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    container: {
      maxWidth: "none",
      "& .slick-slide": {
        margin: "0.1rem 1rem !important",
        width: `400px !important`,
        [breakpoints.down("xs")]: {
          margin: "0.1rem 0.5rem !important",
          width: `300px !important`,
        },
        [breakpoints.down(400)]: {
          width: `250px !important`,
        },
      },
    },
  }),
  { index: 1 }
);

const SimilarCarsSlider: React.FC = () => {
  const classes = useStyles();

  return (
    <EnhancedSlider
      removeArrowsOnMobile
      rootProps={{ className: classes.container }}
      rootChildren={<Typography variant="h6">You might also like</Typography>}
      settings={settings}
    >
      {[0, 1, 2, 3].map((no) => (
        <VehicleCard key={no} vehicle={vehicle} />
      ))}
    </EnhancedSlider>
  );
};

export default SimilarCarsSlider;
