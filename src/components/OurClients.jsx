import Clients from "./Clients";

const OurClients = () => {
  return (
    <section id="Customers" className="bg-white">
      <div className="container flex flex-col items-center justify-center gap-10">
        <div className="section-heading">
          <h2 className="section-title mt-5">Our Clients</h2>
          <p className="section-description  mt-5">
            We don't just build softwares, we build your solution.
          </p>
        </div>
        <div className="flex items-center justify-center lg:w-[1190px] w-full">
          <Clients />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
