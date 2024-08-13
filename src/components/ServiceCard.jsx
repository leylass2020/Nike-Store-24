const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="w-full sm:w-[350px] sm:min-w-[350px] justify-start
     flex-1 shadow-3xl rounded-[20px] px-10 py-16"
    >
      <div
        className="flex justify-center items-center
       bg-coral-red w-11 h-11 rounded-full mb-2"
      >
        <img src={imgURL} alt={label} width={24} height={24} className="" />
      </div>
      <h3
        className="text-3xl font-bold font-palanquin 
      mt-5 leading-normal"
      >
        {label}
      </h3>
      <p
        className="text-lg break-words font-montserrat 
      leading-normal mt-3 text-slate-gray"
      >
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
