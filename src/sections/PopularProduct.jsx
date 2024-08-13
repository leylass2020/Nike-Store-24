import { PopularProductCard } from "../components/PopularProductCard";
import { products } from "../constants";
const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-5 justify-start">
        <h2 className="leading-8 text-4xl font-palanquin">
          Our <span className="text-coral-red">Popular </span> Products
        </h2>
        <p className="font-montserrat text-slate-gray mt-2 lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections.Discover a world of comfort , design ,and value
        </p>
      </div>
      <div
        className="grid lg:grid-cols-4 md:grid-cols-3
      sm:grid-cols-2 grid-cols-1 mt-16 gap-14 sm:gap-4"
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
