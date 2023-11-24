import { Button } from "@material-tailwind/react";
import cat from "../../assets/caterror.png";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col  items-center justify-center h-screen text-center">
      <div className=" p-6 rounded-xl md:p-20 bg-gray-200">
        <figure className="w-1/2 mx-auto">
          <img className="mx-auto" src={cat} alt="" />
        </figure>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-orange-600 uppercase">
          Oops! Something went wrong.
        </h1>
        <p className="pb-5 text-l md:text-2xl uppercase">Page not found</p>
        <Link to="/">
          <Button>go home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
