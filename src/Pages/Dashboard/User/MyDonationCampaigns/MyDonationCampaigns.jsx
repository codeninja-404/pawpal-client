
import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";

import DonationTable from "./DonationTable";


const MyDonationCampaigns = () => {
  

  
  return (
    <div className="mt-10 p-4">
      <SectionTitle heading={"my Donation Campaigns"}></SectionTitle>
      <DonationTable></DonationTable>
    </div>
  );
};

export default MyDonationCampaigns;
