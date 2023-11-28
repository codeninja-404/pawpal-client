import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Avatar, Button, CardBody, Typography } from "@material-tailwind/react";
import { useState } from "react";
import TableRow from "./TableRow";

const Table = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data = [] } = useQuery({
    queryKey: ["myAddedPets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myAddedPets?email=${user?.email}`);
      return res.data;
    },
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentPageItems = data.slice(firstIndex, lastIndex);
  const pages = [];
  for (let i = 1; i < data.length / itemPerPage + 1; i++) {
    pages.push(i);
  }

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
            {currentPageItems.map((item, idx) => (
              <TableRow
                key={item._id}
                item={item}
                idx={idx}
                refetch={refetch}
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
      {data.length > 10 ? (
        <>
          {" "}
          <nav className="text-center">
            {pages.map((page, index) => (
              <>
                <Button
                  className={`${
                    currentPage === page ? "bg-green-400" : ""
                  } m-2`}
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                  key={index}
                >
                  {page}
                </Button>
              </>
            ))}
          </nav>{" "}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Table;
