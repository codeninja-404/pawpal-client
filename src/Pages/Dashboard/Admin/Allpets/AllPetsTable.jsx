import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

import AllpetsRow from "./AllpetsRow";
import { Typography } from "@material-tailwind/react";


const AllPetsTable = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data = [] } = useQuery({
    queryKey: ["allPets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allPets`);
      return res.data;
    },
  });


  return (
    <div className="overflow-x-scroll">
      <div>
        <table className=" w-full ">
          <thead>
            <tr>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Serial{" "}
                </Typography>
              </th>
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
                  Category{" "}
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Image{" "}
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Status{" "}
                </Typography>
              </th>
              <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Action{" "}
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((item, idx) => (
              <AllpetsRow
                key={item._id}
                item={item}
                idx={idx}
                refetch={refetch}
              ></AllpetsRow>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  );
};

export default AllPetsTable;
