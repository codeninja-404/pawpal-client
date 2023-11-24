import Container from "../../../Components/Shared/Container/Container";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <section id="aboutus" className="mb-14 p-2">
      <Container>
        <SectionTitle heading={"about us"}></SectionTitle>

        <div className=" bg-gray-200 rounded-xl py-10  p-4 text-center  text-black">
          <div className="max-w-4xl mx-auto ">
            <p className="text-2xl mb-8">
              THIS website is based on animels, user can add pet for adoption ,
              adopt pet , rise funds for pets that needs help. and admin can
              control users activity , put fundrising on hold and more. It's a
              <b> MERN STACK</b> base site
            </p>
            <p className="text-xl mb-8">
              This site is the final task from current course I'm Taking from
              <b> Programming HERO.</b>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
