import { Spinner } from "@material-tailwind/react";


const Loader = () => {
    return (
        <div className="flex  justify-center my-40">
            <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
    );
};

export default Loader;