import { Typography } from "@material-tailwind/react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import DonationRow from "./DonationRow";

const DonationTable = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data = [] } = useQuery({
    queryKey: ["myAddedPets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/myAddedCampaigns?email=${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <table className=" w-full   ">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Name
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Max Donation
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Progress
                </Typography>
              </th>
             
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Status
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Action
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((item) => (
              <DonationRow
                key={item._id}
                item={item}
                
                refetch={refetch}
              ></DonationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationTable;
