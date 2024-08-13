import { shoe8 } from "../assets/images";
import { Button } from "../components/Button";

const SuperQuality = () => {
  return (
    <section id="about-us"
     className="flex justify-between items-center max-lg:flex-col w-full max-container gap-10">
      <div className="flex flex-col justify-start flex-1 ">
        <h2 className="text-4xl font-palanquin font-bold leading-normal pb-12 pt-8 capitalize lg:max-lg">
          We Provide You <span className="text-coral-red">Super </span>
          <br />
          <span className="text-coral-red"> Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style , our meticulously crafted footwear
          is designed to elevate your experience , providing you with unmatched
          quality , innovation , and a touch of elegant.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 ">
          <Button label="view details" className="w-[150px]" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
