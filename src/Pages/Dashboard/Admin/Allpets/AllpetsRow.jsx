import { Avatar, IconButton } from "@material-tailwind/react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const AllpetsRow = ({ item, idx, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Your pet has been deleted.", "", "success");
          }
        });
      }
    });
  };

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
        axiosSecure.patch(`/statusAdmin/${id}`, status).then((res) => {
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
        <p className="font-bold">{idx + 1}</p>
      </td>
      <td className="p-1 border-b border-blue-gray-500">
        <p className="uppercase font-bold">{item.name}</p>
      </td>
      <td className="p-1 border-b border-blue-gray-500">
        <p className="uppercase font-bold text-blue-800">{item.category}</p>
      </td>
      {/* <td>
                  <Avatar src={item.image} alt="avatar" variant="rounded" />
                </td> */}
      <td className="p-1 border-b border-blue-gray-500">
        <div className="flex justify-center items-center gap-3">
          <Avatar src={item.image} alt={name} size="sm" />
          <div className="flex flex-col"></div>
        </div>
      </td>
      {item.adopted === false ? (
        <td className="p-1 border-b border-blue-gray-500">
          <p className="rounded-xl bg-red-100 p-1">Not Adopted</p>
        </td>
      ) : (
        <td className="p-1 border-b  border-blue-gray-500">
          <p className="rounded-xl bg-green-100 p-1">Adopted</p>
        </td>
      )}
      <td className=" p-1 border-b border-blue-gray-500   ">
        <Link to={`/dashboard/updatePet/${item._id}`} item={item}>
          <IconButton size="sm" className="m-1 bg-blue-500">
            <GrUpdate className="text-l" />
          </IconButton>
        </Link>
        <IconButton
          onClick={() => handleDelete(item._id)}
          size="sm"
          className="m-1 bg-red-600"
        >
          <MdDeleteSweep className="text-l" />
        </IconButton>
        {item.adopted === false ? (
          <IconButton
            onClick={() => handleStatus(item._id, { adopted: true })}
            size="sm"
            className="m-1 bg-green-500"
          >
            <TiTick className="text-l" />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => handleStatus(item._id, { adopted: false })}
            size="sm"
            className="m-1 "
          >
            <IoClose className="text-l" />
          </IconButton>
        )}
      </td>
    </tr>
  );
};

export default AllpetsRow;
