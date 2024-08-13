import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-1 flex-col gap-5 justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="info-text text-center max-w-sm">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="text-3xl font-bold font-palanquin mt-1 text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
