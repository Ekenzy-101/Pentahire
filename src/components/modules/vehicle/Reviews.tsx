import NoReviews from "src/components/common/NoReviews";
import ReviewCard from "src/components/common/review-card";
import {
  SectionHeading,
  SectionRating,
  SectionButton,
  SectionContainer,
} from "src/components/common/section";
import { useVehicle } from "src/hooks";
import { useReviewsStyles } from "./styles";

const VehicleReviews = () => {
  const { classes } = useReviewsStyles();
  const { data } = useVehicle();
  const vehicle = data?.vehicle!;

  return (
    <SectionContainer>
      <SectionHeading>RATINGS AND REVIEWS</SectionHeading>
      {vehicle.reviews_count ? (
        <>
          <SectionRating
            rating={vehicle.average_rating}
            text={`(${vehicle.trips_count} trips)`}
          />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <SectionButton className={classes.button}>
            View all feedbacks
          </SectionButton>
        </>
      ) : (
        <NoReviews info="This vehicle hasn't receieved a review on Turo yet." />
      )}
    </SectionContainer>
  );
};

export default VehicleReviews;
