import React from "react";
import { Avatar, Typography } from "@material-ui/core";

import {
  SectionAvatarWithBadge,
  SectionContainer,
  SectionHeading,
} from "src/components/common/section";
import { useVehicle } from "src/hooks";
import { DEFAULT_USER_IMAGE_URL, TO_DRIVERS_PAGE } from "src/utils/constants";
import { useOwnerStyles } from "./styles";
import EnhancedLink from "src/components/common/Link";

const VehicleOwner: React.FC = () => {
  const classes = useOwnerStyles();
  const { data } = useVehicle();

  const user = data?.vehicle.user!;
  const avatarElement = (
    <Avatar
      alt={user?.firstname}
      className={classes.avatar}
      src={user?.image || DEFAULT_USER_IMAGE_URL}
    />
  );

  return (
    <SectionContainer>
      <SectionHeading>HOSTED BY</SectionHeading>
      <EnhancedLink href={`${TO_DRIVERS_PAGE}/${user.id}`}>
        <div className={classes.flexWrapper}>
          {user?.reviews_count ? (
            <SectionAvatarWithBadge
              rating={user.averate_rating!}
              avatar={avatarElement}
            />
          ) : (
            avatarElement
          )}

          <div>
            <Typography className={classes.title} variant="h6">
              {user?.firstname}
            </Typography>
            <Typography>
              {user?.trips_count} trips -
              <span className={classes.memberSince}>
                Joined{" "}
                {new Date(user.created_at).toLocaleDateString(undefined, {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Typically responds within 1 minute
            </Typography>
          </div>
        </div>
      </EnhancedLink>
    </SectionContainer>
  );
};

export default VehicleOwner;
