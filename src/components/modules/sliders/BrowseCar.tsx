import { Settings } from "@ant-design/react-slick";
import { Avatar, Button, Grid, Typography } from "@mui/material";

import EnhancedLink from "src/components/common/Link";
import EnhancedSlider from "src/components/common/slider";
import { useCarStyles } from "./styles";

const data = [
  {
    body: `Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.`,
    primaryTitle: `for scenic corners & curves`,
  },
  {
    body: `Make sure your future wheels work well with your lifestyle by taking your time in the driver's seat`,
    primaryTitle: `to try before you buy`,
  },
  {
    body: `Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.`,
    primaryTitle: `to make errand day easier`,
  },
  {
    body: `Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees`,
    primaryTitle: `to conquer the great outdoors`,
  },
  {
    body: `From daily drivers to spirited sports cars ditch the grind with convenient nearby cars`,
    primaryTitle: `to unwind for the weekend`,
  },
  {
    body: `Skip the rental car counter and find the perfect car to complement your vacation vibe.`,
    primaryTitle: `to upgrade your vacation plans`,
  },
];

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const BrowseCarSlider: React.FC = () => {
  const { classes } = useCarStyles();
  return (
    <EnhancedSlider rootProps={{ maxWidth: "lg" }} settings={settings}>
      {data.map(({ body, primaryTitle }, index) => (
        <Grid
          alignItems="center"
          className={classes.root}
          container
          key={index}
          spacing={2}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Avatar
              className={classes.image}
              src={`/images/car/${index}.jpg`}
              alt="Car rental Image"
              variant="square"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography component="h2">
              <Typography component="span" className={classes.title}>
                Find the perfect car{" "}
              </Typography>
              <Typography
                className={classes.title}
                component="span"
                color="primary"
              >
                {primaryTitle}
              </Typography>
            </Typography>

            <Typography className={classes.body}>{body}</Typography>
            <EnhancedLink className={classes.link} href={"/brows"}>
              <Button
                className={classes.button}
                color="primary"
                disableElevation
                size="large"
                variant="contained"
              >
                Browse cars
              </Button>
            </EnhancedLink>
          </Grid>
        </Grid>
      ))}
    </EnhancedSlider>
  );
};

export default BrowseCarSlider;
