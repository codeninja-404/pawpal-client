import { Formik, Form, Field, ErrorMessage } from "formik";
import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { imageUpload } from "../../../../api/utils";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const CreateDonationCampaign = () => {
  const { user } = useAuth();
  const [imageData, setImageData] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const axiosSecure = useAxiosSecure();

  const initialValues = {
    maxAmount: "",
    name: "",
    lastDate: "",
    shortDescription: "",
    longDescription: "",
  };
  const handleUploadImage = async (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = async () => {
        setImageData(selectedImage);
        const imageUp = await imageUpload(imageData);
        if (imageUp?.data?.display_url) {
          setImgURL(imageUp?.data?.display_url);
        }
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImageData(null);
    }
  };

  const onSubmit = async (values) => {
    const addedOn = new Date();

    const donation = {
      ...values,
      image: imgURL,
      addedOn,
      status: true,
      email: user?.email,
      donated: 0,
    };

    const res = await axiosSecure.post("/createDonation", donation);

    if (res.data.insertedId) {
      Swal.fire("Donation Campaign is created.", "", "success");
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.maxAmount) {
      errors.maxAmount = "Maximun donation is required";
    }
    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.lastDate) {
      errors.age = "Last Date is required";
    }
    if (!values.shortDescription) {
      errors.shortDescription = "Short Description is required";
    }
    if (!values.longDescription) {
      errors.longDescription = "Long Description is required";
    }

    return errors;
  };
  return (
    <div className="mt-10 p-4">
      <SectionTitle heading={"Create donation campaign"}></SectionTitle>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          <Form className=" mx-auto  p-6  rounded-md ">
            <div className="md:flex gap-2 ">
              <div className="mb-4 flex-1">
                <label
                  htmlFor="image"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Image:
                </label>
                <input
                  onChange={handleUploadImage}
                  required
                  type="file"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4 flex-1">
                <label
                  htmlFor="maxAmount"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Maximum Donation:
                </label>
                <Field
                  type="number"
                  id="maxAmount"
                  name="maxAmount"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="maxAmount"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="md:flex gap-2">
              <div className="mb-4 flex-1">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name :
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4 flex-1">
                <label
                  htmlFor="lastDate"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Last Donatoin Date:
                </label>
                <Field
                  type="date"
                  id="lastDate"
                  name="lastDate"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="lastDate"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="shortDescription"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Short Description:
              </label>
              <Field
                type="text"
                id="shortDescription"
                name="shortDescription"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="shortDescription"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="shortDescription"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Long Description:
              </label>
              <Field
                as="textarea"
                id="longDescription"
                name="longDescription"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="longDescription"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <Button
              type="submit"
              className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
            >
              Create donation campaign
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CreateDonationCampaign;
