import NoReviews from "src/components/common/NoReviews";
import ReviewCard from "src/components/common/review-card";
import {
  SectionHeading,
  SectionRating,
  SectionButton,
  SectionContainer,
} from "src/components/common/section";
import { useReviewsStyles } from "./styles";

interface Props {
  firstname: string;
  reviews: any[];
  title: string;
}

const DriverReviews: React.FC<Props> = ({ reviews, title, firstname }) => {
  const { classes } = useReviewsStyles();

  return (
    <SectionContainer>
      <SectionHeading>{title}</SectionHeading>
      {reviews.length ? (
        <>
          <SectionRating rating={5.0} text={`(${reviews.length} reviews)`} />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <SectionButton className={classes.button}>
            View all feedbacks
          </SectionButton>
        </>
      ) : (
        <NoReviews
          info={`${firstname} hasn't receieved a review on Turo yet.`}
        />
      )}
    </SectionContainer>
  );
};

export default DriverReviews;
