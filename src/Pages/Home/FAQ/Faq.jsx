import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import Container from "../../../Components/Shared/Container/Container";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";

const Faq = () => {
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="pb-14 px-2">
      <Container>
        <SectionTitle heading={"Frequently Asked Questions"}></SectionTitle>
        <div>
          <Accordion
            className="border-2 my-2 border-gray-500 px-4 rounded-xl"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 text-2xl transition-colors ${
                open === 1 ? "text-green-500 hover:!text-green-700" : ""
              }`}
            >
              How does the pet adoption process work?
            </AccordionHeader>
            <AccordionBody className="text-black text-lg">
              The pet adoption process typically involves filling out an
              adoption application, meeting the pet, and completing an adoption
              interview. If approved, there may be an adoption fee, and the new
              pet owner takes their furry friend home.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="border-2 my-2 border-gray-500 px-4 rounded-xl"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 text-2xl transition-colors ${
                open === 2 ? "text-green-500 hover:!text-green-700" : ""
              }`}
            >
              Can I meet the pet before deciding to adopt?
            </AccordionHeader>
            <AccordionBody className="text-black text-lg">
              Yes, most adoption agencies encourage potential adopters to spend
              time with the pet before making a decision. It's essential to
              ensure a good match between the pet and their new family.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="border-2 my-2 border-gray-500 px-4 rounded-xl"
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 text-2xl transition-colors ${
                open === 3 ? "text-green-500 hover:!text-green-700" : ""
              }`}
            >
              Are the pets up-to-date on vaccinations?
            </AccordionHeader>
            <AccordionBody className="text-black text-lg">
              Yes, all pets available for adoption are up-to-date on
              vaccinations. Their medical records will be provided to the new
              owner upon adoption.
            </AccordionBody>
          </Accordion>
          <Accordion
            className="border-2 my-2 border-gray-500 px-4 rounded-xl"
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 text-2xl transition-colors ${
                open === 4 ? "text-green-500 hover:!text-green-700" : ""
              }`}
            >
              How can I support the pet adoption organization?
            </AccordionHeader>
            <AccordionBody className="text-black text-lg">
              There are several ways to support the organization, including
              making a donation, volunteering your time, participating in
              fundraising events, and spreading the word about pet adoption.
            </AccordionBody>
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
