import { Avatar, Button } from "@material-tailwind/react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UserRow = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleRole = (id, role) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user admin.",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/toAdmin/${id}`, role).then((res) => {
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
        <p className="text-red-600 font-bold">{item.email}</p>
      </td>

      {/* <td>
                  <Avatar src={item.image} alt="avatar" variant="rounded" />
                </td> */}
      <td className="p-1 border-b border-blue-gray-500">
        <div className="flex justify-center items-center gap-3">
          <Avatar src={item?.image} alt={name} size="sm" />
          <div className="flex flex-col"></div>
        </div>
      </td>

      <td className=" p-1 border-b border-blue-gray-500   ">
        {item.role !== "admin" ? (
          <Button
            onClick={() => handleRole(item._id, { role: "admin" })}
            size="sm"
          >
            make admin
          </Button>
        ) : (
          <Button
            className="uppercase rounded-full disabled:bg-green-900   font-bold p-2 "
            disabled
          >
            Admin
          </Button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
