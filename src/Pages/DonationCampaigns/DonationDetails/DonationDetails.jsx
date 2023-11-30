import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Container from "../../../Components/Shared/Container/Container";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import DonationModal from "./DonationModal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const DonationDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { data: singleDonation } = useQuery({
    queryKey: ["singleDonation"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/singleDonation/${id}`);
      return res.data;
    },
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="mt-10">
      <Container>
        <SectionTitle heading={"donation details"}></SectionTitle>
        <div className="px-2 md:h-screen">
          <Card className="w-full my-16 md:flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 md:w-2/5 shrink-0 rounded-b-none md:rounded-l-2xl md:rounded-r-none"
            >
              <img
                src={singleDonation?.image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Name : {singleDonation?.name}
              </Typography>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Maximun donation : $ {singleDonation?.maxAmount}
              </Typography>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                Donated: $ {singleDonation?.donated}
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {singleDonation?.shortDescription?.slice(0, 50)}...
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                {singleDonation?.longDescription?.slice(0, 400)}....
              </Typography>

              <Button onClick={handleOpen} className="w-full">
                Donate now
              </Button>
            </CardBody>
          </Card>
        </div>
      </Container>
      <DonationModal
        handleOpen={handleOpen}
        open={open}
        singleDonationId={id}
      ></DonationModal>
    </div>
  );
};

export default DonationDetails;
