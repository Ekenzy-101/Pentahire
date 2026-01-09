import { Avatar, Typography } from "@mui/material";
import { CheckCircleOutlined } from "@mui/icons-material";

import {
  SectionAvatarWithBadge,
  SectionHeading,
} from "src/components/common/section";
import { useProfileDetailsStyles } from "./styles";
import { useUser } from "src/hooks";
import { DEFAULT_USER_IMAGE_URL } from "src/utils/constants";

const DriverProfileDetails = () => {
  const { classes } = useProfileDetailsStyles();
  const { data } = useUser();
  const user = data?.user!;

  const avatarElement = (
    <Avatar
      alt={user.firstname}
      className={classes.avatar}
      src={user.image || DEFAULT_USER_IMAGE_URL}
    />
  );

  return (
    <div style={{ marginRight: "30px" }}>
      {user.reviews_count ? (
        <div style={{ margin: "auto", width: "min-content" }}>
          <SectionAvatarWithBadge
            rating={user.averate_rating}
            avatar={avatarElement}
          />
        </div>
      ) : (
        avatarElement
      )}
      <Typography className={classes.title} variant="h4">
        {user.firstname}
      </Typography>
      <Typography className={classes.subTitle}>
        {user.trips_count} trips -
        <span className={classes.memberSince}>
          Joined{" "}
          {new Date(user.created_at).toLocaleDateString(undefined, {
            month: "long",
            year: "numeric",
          })}
        </span>
      </Typography>

      <div style={{ margin: "48px 0 32px 0" }}>
        <SectionHeading>VERIFIED INFO</SectionHeading>
        <div className={classes.infoWrapper}>
          <Typography>Approved to drive</Typography>
          <CheckCircleOutlined color="primary" />
        </div>
        <div className={classes.infoWrapper}>
          <Typography>Email address</Typography>
          {user.is_email_verified ? (
            <CheckCircleOutlined color="primary" />
          ) : null}
        </div>
        <div className={classes.infoWrapper}>
          <Typography>Phone number</Typography>
          {user.is_phone_verified ? (
            <CheckCircleOutlined color="primary" />
          ) : null}
        </div>

        <br />
        <SectionHeading>HOST STATS</SectionHeading>
        <div className={classes.infoWrapper}>
          <Typography>Response rate</Typography>
          <Typography>100%</Typography>
        </div>
        <div className={classes.infoWrapper}>
          <Typography>Response time</Typography>
          <Typography>1 minute</Typography>
        </div>
      </div>
    </div>
  );
};

export default DriverProfileDetails;
