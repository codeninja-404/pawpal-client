import { Link } from "react-router-dom";
import Progress from "./Progress";
import { Button, IconButton } from "@material-tailwind/react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const DonationRow = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleStatus = (id, status) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to update this status",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/donationStatus/${id}`, status).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire("Status updated.", "", "success");
          }
        });
      }
    });
  };
  return (
    <tr>
      <td className="p-1 border-b border-blue-gray-500">
        <p className="uppercase font-bold">{item.name}</p>
      </td>
      <td className="p-1 border-b border-blue-gray-500">
        <p className="uppercase font-bold"> $ {item.maxAmount}</p>
      </td>
      <td className="p-1 border-b border-blue-gray-500">
        <Progress
          maxDonation={item.maxAmount}
          currentDonation={item?.donated}
        ></Progress>
      </td>
      <td className="p-1 border-b border-blue-gray-500">
        {item?.status ? (
          <IconButton
            onClick={() => {
              handleStatus(item._id, { status: false });
            }}
            size="sm"
          >
            <FaPause />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              handleStatus(item._id, { status: true });
            }}
            size="sm"
          >
            <FaPlay />
          </IconButton>
        )}
        
      </td>
      <td className="p-1 border-b border-blue-gray-500  flex justify-center gap-2">
      <Link to={`/dashboard/editDonation/${item._id}`}>
          <IconButton size="sm" className="bg-blue-500 ">
            <GrUpdate />
          </IconButton>
        </Link>
        <Button size="sm"> View</Button>
      </td>
    </tr>
  );
};

export default DonationRow;
