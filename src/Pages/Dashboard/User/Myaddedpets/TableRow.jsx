import { Avatar, IconButton } from "@material-tailwind/react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const TableRow = ({ item, idx, refetch }) => {
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
  return (
    <tr>
      <td className="p-1 border-b border-blue-gray-500">{idx + 1}</td>
      <td className="p-1 border-b border-blue-gray-500">{item.name}</td>
      <td className="p-1 border-b border-blue-gray-500">{item.category}</td>
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
        <td className="p-1 border-b border-blue-gray-500">Not adopted</td>
      ) : (
        <td className="p-1 border-b border-blue-gray-500">Adopted</td>
      )}
      <td className=" p-1 border-b border-blue-gray-500   ">
        <IconButton size="sm" className="m-1 bg-blue-500">
          <GrUpdate className="text-l" />
        </IconButton>
        <IconButton
          onClick={() => handleDelete(item._id)}
          size="sm"
          className="m-1 bg-red-600"
        >
          <MdDeleteSweep className="text-l" />
        </IconButton>
        <IconButton size="sm" className="m-1 bg-green-500">
          <TiTick className="text-l" />
        </IconButton>
      </td>
    </tr>
  );
};

export default TableRow;
