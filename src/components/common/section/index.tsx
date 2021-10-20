import {
  Badge,
  Button,
  ButtonProps,
  Chip,
  Typography,
  TypographyProps,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";

import { useStyles } from "./styles";

interface AvatarWithBadgeProps {
  avatar: React.ReactNode;
  rating: number;
}

export const SectionAvatarWithBadge: React.FC<AvatarWithBadgeProps> = ({
  avatar,
  rating,
}) => {
  const classes = useStyles();
  return (
    <Badge
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      badgeContent={
        <Chip
          classes={{
            icon: classes.chipIcon,
            label: classes.chipLabel,
            root: classes.chip,
          }}
          icon={<Rating max={1} precision={0.1} readOnly value={rating / 5} />}
          label={`${rating}`}
        />
      }
      children={avatar}
      classes={{
        anchorOriginBottomLeftRectangle: classes.badgeAnchor,
      }}
      component="div"
    />
  );
};

export const SectionButton: React.FC<ButtonProps> = ({
  style,
  ...otherProps
}) => {
  return (
    <Button
      color="primary"
      disableElevation
      size="large"
      variant="contained"
      {...otherProps}
    />
  );
};

export const SectionHeading: React.FC<TypographyProps> = ({
  style,
  ...otherProps
}) => {
  return (
    <Typography
      color="textSecondary"
      style={{ fontWeight: "bold", marginBottom: "1rem", ...style }}
      {...otherProps}
    />
  );
};

interface RatingProps {
  rating: number;
  text: string;
}

export const SectionRating: React.FC<RatingProps> = ({ rating, text }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.root}>
      <strong className={classes.ratingText}>4.8</strong>
      <Rating
        className={classes.ratingIcon}
        max={1}
        precision={0.1}
        readOnly
        value={rating / 5}
      />
      <span className={classes.ratingInfo}>{text}</span>
    </Typography>
  );
};

export const SectionContainer: React.FC = ({ children }) => (
  <div style={{ marginTop: 40 }} children={children} />
);
