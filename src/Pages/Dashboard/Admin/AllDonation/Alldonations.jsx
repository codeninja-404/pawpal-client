import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";
import AllDonationTable from "./AllDonationTable";

const Alldonations = () => {
  return (
    <div className="mt-10 p-4">
      <SectionTitle heading={"All Donation Campaigns"}></SectionTitle>
      <AllDonationTable></AllDonationTable>
    </div>
  );
};

export default Alldonations;
