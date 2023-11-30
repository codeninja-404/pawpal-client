import { Typography } from "@material-tailwind/react";
import AllDonationRow from "./AllDonationRow";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";


const AllDonationTable = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { refetch, data = [] } = useQuery({
      queryKey: ["allCampaigns"],
      queryFn: async () => {
        const res = await axiosSecure.get(
          `/allCampaigns`
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
                <AllDonationRow
                  key={item._id}
                  item={item}
                  
                  refetch={refetch}
                ></AllDonationRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllDonationTable;