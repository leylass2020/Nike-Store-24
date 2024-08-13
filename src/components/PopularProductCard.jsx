import { star } from "../assets/icons";

export const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div
      className="flex flex-col flex-1 
    w-full max-sm:w-full"
    >
      <img src={imgURL} alt={name} className=" w-[280px] h-[280px]" />
      <div className="flex justify-start gap-2.5 mt-8 ">
        <img src={star} alt="star" width={24} height={24} />
        <p
          className="font-montserrat leading-normal
         text-slate-gray text-xl "
        >
          4.5
        </p>
      </div>
      <h3
        className="mt-2 text-2xl leading-normal
      font-semibold font-palanquin"
      >
        {name}
      </h3>
      <p
        className="mt-2 font-semibold font-montserrat
      text-21x leading-normal text-coral-red"
      >
        {price}
      </p>
    </div>
  );
};
