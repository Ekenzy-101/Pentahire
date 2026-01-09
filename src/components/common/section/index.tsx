import {
  Badge,
  Button,
  ButtonProps,
  Chip,
  Rating,
  Typography,
  TypographyProps,
} from "@mui/material";
import { FC, PropsWithChildren, ReactNode } from "react";

import { useStyles } from "./styles";

interface AvatarWithBadgeProps {
  avatar: ReactNode;
  rating: number;
}

export const SectionAvatarWithBadge: FC<AvatarWithBadgeProps> = ({
  avatar,
  rating,
}) => {
  const { classes } = useStyles();
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
        anchorOriginBottomLeftRectangular: classes.badgeAnchor,
      }}
      component="div"
    />
  );
};

export const SectionButton: FC<ButtonProps> = ({ style, ...otherProps }) => {
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

export const SectionHeading: FC<TypographyProps> = ({
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

export const SectionRating: FC<RatingProps> = ({ rating, text }) => {
  const { classes } = useStyles();
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

export const SectionContainer: FC<PropsWithChildren> = ({ children }) => (
  <div style={{ marginTop: 40 }} children={children} />
);
