import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="w-full flex max-container gap-9 flex-wrap justify-center">
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};
export default Services;
