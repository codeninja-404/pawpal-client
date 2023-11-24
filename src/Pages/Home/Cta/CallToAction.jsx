import { Button } from "@material-tailwind/react";
import Container from "../../../Components/Shared/Container/Container";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import ctaImg from "../../../assets/cta.jpg";

const CallToAction = () => {
  return (
    <section className="my-14 p-2">
      <Container>
        <SectionTitle
          heading={"Change a Life, Adopt a Pet Today!"}
        ></SectionTitle>
        <div className=" mx-auto text-center">
          <p className="text-xl mb-8">
            Experience the joy of bringing a furry friend into your home. Give
            them love, care, and a forever family.
          </p>
          <div className="flex justify-center mb-12">
            <figure className="rounded-full  max-h-96 overflow-hidden">
              <img
                src={ctaImg}
                alt="Happy pets"
                className="w-full md:-m-40 md:mx-auto  "
              />
            </figure>
          </div>
          <Button className=" text-white   bg-green-500 font-bold   ">
            Find Your Companion
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
