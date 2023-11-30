import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Shared/Container/Container";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DonationCard from "./DonationCard";

const DonationCampaigns = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data = [] } = useQuery({
    queryKey: ["allCampaigns"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allCampaigns`);
      return res.data;
    },
  });
  return (
    <div className="mt-10">
      <Container>
        <SectionTitle heading={"donation campaigns"}></SectionTitle>
        <div className="my-6 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((item) => (
            <>
              <DonationCard item={item}></DonationCard>
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DonationCampaigns;
