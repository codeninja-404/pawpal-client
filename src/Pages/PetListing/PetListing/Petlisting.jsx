import { Button } from "@material-tailwind/react";
import Container from "../../../Components/Shared/Container/Container";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PetCard from "./PetCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Petlisting = () => {
  const { user } = useAuth();
  const categoryP = useParams();

  const [category, setCategory] = useState("dogs");

  const axiosSecure = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: ["allPets", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allPets`);
      return res.data;
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.category.value;
    setCategory(search);
  };
  useEffect(() => {
    if (categoryP?.category === undefined) {
      setCategory("dogs");
    } else {
      setCategory(categoryP?.category.toLowerCase());
    }
  }, []);
  const filteredData = data.filter((item) => item.category === category);
  return (
    <div className="mt-10">
      <Container>
        <SectionTitle heading={"Pet Listing"}></SectionTitle>
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center gap-3"
        >
          <select
            name="category"
            className=" p-2 border border-gray-300 rounded-md"
          >
            <option value="dogs">Dogs</option>
            <option value="birds">Birds</option>
            <option value="fish">Fish</option>
            <option value="cats">Cats</option>
            <option value="mammals">Mammals</option>
            <option value="reptiles">Reptiles</option>
          </select>
          <Button type="submit"> Search</Button>
        </form>
        {filteredData.length === 0 ? (
          <div className=" text-center my-40 md:my-96">
            
            <h1 className="text-4xl">No data Available....</h1>
          </div>
        ) : (
          <div className="my-6 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredData?.map((item) => (
              <>
                <PetCard item={item}></PetCard>
              </>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Petlisting;
