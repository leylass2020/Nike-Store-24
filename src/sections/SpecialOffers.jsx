import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section
      className="flex max-xl:flex-col-reverse justify-wrap 
    items-start  max-container gap-10 "
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col items-start flex-1 ">
        <h2
          className="text-4xl font-palanquin font-bold 
        leading-normal pb-12 pt-8 capitalize lg:max-lg"
        >
          <span className="text-coral-red">Specila</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journy that redefines your experience with
          unbeatable . from premier selection to incredible savings, we offer
          unparalleled value that that set us a part.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate e realm of possibillities designed to fulfill your unique
          desiers , surpassing the lofties expectations . Your journey with us
          is nothing short of exception
        </p>
        <div className="mt-11 flex flex-wrap gap-4 ">
          <Button
            label="Shop now"
            iconURL={arrowRight}
            stylish=" bg-coral-red
      border-coral-red text-white"
          />
          <Button
            label="Learn more"
            stylish=" bg-white
      border-slate-gary text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
