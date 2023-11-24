import { Button } from "@material-tailwind/react";
import Container from "../../../Components/Shared/Container/Container";

import img2 from "../../../assets/p2.png";

const Banner = () => {
  return (
    <div className="">
      <Container>
        <section>
          <div className="bg-gray-500 text-black  ">
            <div className="  flex flex-col md:flex-row items-center my-12 md:my-24">
              <div className="flex flex-col w-full justify-center items-start p-8 flex-1">
                <h1 className="text-3xl  md:text-5xl p-2 font-bold  ">
                  Find Your Forever Friend <br />{" "}
                  <span className="pb-2  text-orange-600 drop-shadow-xl ">
                    Adopt, Love, Wag!
                  </span>
                </h1>

                <p className="text-sm md:text-base pt-4 text-gray-50 mb-4">
                Discover the joy of unconditional love! Explore our diverse range of adorable pets awaiting their forever homes. Embrace companionship, adopt a furry friend today. Your new family member is just a click away!
                </p>
                <Button>Find yours Now!</Button>
                {/* <a
                  href="#"
                  className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                >
                  Explore Now
                </a> */}
              </div>
              <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 flex-1  justify-center">
                <div className="h-48 flex flex-wrap content-center">
                  <div className=" xl:w-9/12 xl:ml-20 xl:mb-36">
                    <img
                      className="  sm:w-11/12 mt-14 p-8 w-full mx-auto "
                      src={img2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Banner;
