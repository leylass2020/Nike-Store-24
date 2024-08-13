import { Button } from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex justify-between max-container items-center 
    max-lg:flex-col gap-10"
    >
      <h3 className="leading-[68px] lg:max-w-md text-4xl font-bold font-palanquin ">
        Sign Up from <span className="text-coral-red">Updates</span> &
        Newsletter
      </h3>
      <div
        className="flex gap-5 p-2.5 lg:max-w-[40%]
      items-center w-full rounded-full max-sm:flex-col
      sm:border sm:border-slate-gray"
      >
        <input
          type="text"
          placeholder="subscribre@nike.com"
          className="input"
        />
        <div
          className="flex items-center 
        max-sm:justify-end max-sm:w-full"
        >
          <Button
            label="Sign Up"
            fullWidth
            stylish="bg-coral-red
      border-coral-red text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
