import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import UserTable from "./UserTable";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const {refetch, data: users } = useQuery({
    queryKey: ["categorys"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div className="mt-10 p-4">
      <SectionTitle heading={"all users"}></SectionTitle>
      <UserTable users={users} refetch={refetch}></UserTable>
    </div>
  );
};

export default Users;
