import { useQuery } from "@tanstack/react-query";
import Container from "../../../Components/Shared/Container/Container";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import CategoryCard from "./CategoryCard";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Category = () => {
  const axiosPublic = useAxiosPublic()
  const { data: categorys } = useQuery({
    queryKey: ["categorys"],
    queryFn: async () => {
      const res = await axiosPublic.get("/categorys");
      return res.data;
    },
  });

  return (
    <Container>
      <div className=" pt-20 md:pt-0 px-2 ">
        <SectionTitle heading={"category"} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {categorys?.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
            ></CategoryCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Category;
