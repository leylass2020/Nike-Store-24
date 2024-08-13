import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="hero"
      className="w-full flex flex-col xl:flex-row
     justify-center max-container min-h-screen gap-10"
    >
      <div
        className="flex relative flex-col xl:w-2/5 items-start 
      w-full justify-center pt-28 max-xl:padding-x"
      >
        <p className="font-montserrat text-coral-red text-xl ">
          Our Summer Collection
        </p>
        <h1 className="relative z-10 text-8xl">
          <span
            className="xl:bg-white xl:whitespace-nowrap
           font-palanquin "
          >
            The New Arrival
          </span>
          <br />
          <span className="font-montserrat text-coral-red leading-8">
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p className="text-slate-gray font-montserrat text-lg leading-8 sm:max-w-sm mt-6 mb-14">
          Discover stylish Nike arrivals , quality comfort , and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} stylish=" bg-coral-red
      border-coral-red text-white" />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex justify-center items-center flex-1
       xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="big show Image"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div
          className="flex gap-4 sm:gap-6 absolute 
        -bottom-[5%] sm:left-[10%] max-sm:px-6"
        >
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => setbigShoeImg(shoe)}
                BigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
