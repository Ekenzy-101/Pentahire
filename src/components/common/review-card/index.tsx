import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";

import { useStyles } from "./styles";
import EnhancedLink from "../Link";
import { TO_DRIVERS_PAGE } from "../../../utils/constants";

const ReviewCard: React.FC = () => {
  const { classes, cx } = useStyles();
  return (
    <>
      <Box component="div" display="flex" padding="24px 16px 24px 0">
        <EnhancedLink href={`${TO_DRIVERS_PAGE}/25252`}>
          <Avatar
            src="/images/user.jpg"
            alt="Onyekaba"
            className={classes.avatar}
          />
        </EnhancedLink>
        <Box component="div" paddingLeft="16px">
          <Rating
            readOnly
            value={5}
            color="primary"
            className={cx(classes.textSpacing, classes.rating)}
          />
          <Typography
            className={classes.textSpacing}
            component="p"
            variant="caption"
          >
            <strong style={{ marginRight: "0.3rem" }}>Mark L</strong>
            <Typography color="textSecondary" variant="caption">
              August 8. 2020
            </Typography>
          </Typography>
          <Typography>
            Glad to do business very responsible and caring
          </Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default ReviewCard;
