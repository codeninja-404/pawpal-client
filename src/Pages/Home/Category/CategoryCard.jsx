import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className="relative  grid hover:border-4 hover:border-black   flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
      <div
        style={{
          backgroundImage: `url(${category?.img})`,
        }}
        className="absolute  inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
      >
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative  px-4 p-10 md:px-12">
        <h2 className="mb-6 block font-sans text-4xl font-bold  text-green-100 uppercase ">
          {category?.category}
        </h2>
        <Link>
          <Button className=" bg-green-500"> VIEW PETS</Button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
