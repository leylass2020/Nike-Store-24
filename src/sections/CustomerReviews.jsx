import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="main-container">
      <h3 className="font-bold font-palanquin text-4xl text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="text-center max-w-lg info-text m-auto mt-4">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us
      </p>

      <div
        className="flex flex-1 justify-evenly items-center
      max-lg:flex-col gap-14 mt-24"
      >
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
