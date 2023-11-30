import { useParams } from "react-router-dom";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Container from "../../../Components/Shared/Container/Container";
import AdoptionModal from "./AdoptionModal";
import { useState } from "react";

const PetDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { data: pet } = useQuery({
    queryKey: ["pet"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/pet/${id}`);
      return res.data;
    },
  });
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <div className="">
      <Container>
        <SectionTitle heading={"pet details"}></SectionTitle>
        <div className="px-2 md:h-screen">
          <Card className="w-full my-16 md:flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 md:w-2/5 shrink-0 rounded-b-none md:rounded-l-2xl md:rounded-r-none"
            >
              <img
                src={pet.image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Name : {pet.name}
              </Typography>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Age : {pet.age}
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {pet.shortDescription.slice(0, 50)}...
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                {pet.longDescription.slice(0, 400)}....
              </Typography>

              <Button onClick={handleOpen} className="w-full">Adopt</Button>
            </CardBody>
          </Card>
        </div>
      </Container>
      <AdoptionModal handleOpen={handleOpen} open={open} petId = {id}></AdoptionModal>
    </div>
  );
};

export default PetDetails;
