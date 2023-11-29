import { useParams } from "react-router-dom";
import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useAuth from "../../../../Hooks/useAuth";
import { useState } from "react";
import { imageUpload } from "../../../../api/utils";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";

const UpdatePet = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);
  const [imgURL, setImgURL] = useState("");

  const { data: pet } = useQuery({
    queryKey: ["pet"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/pet/${id}`);
      return res.data;
    },
  });

  const initialValues = {
    name: pet?.name,
    age: pet?.age,
    category: pet?.category,
    location: pet?.location,
    shortDescription: pet?.shortDescription,
    longDescription: pet?.longDescription,
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
    const pet = {
      ...values,
      image: imgURL,
    };
    console.log(pet);
    const menuRes = await axiosSecure.patch(`/update/${id}`, pet);

    if (menuRes.data.modifiedCount > 0) {
      Swal.fire("Your pet is Updated.", "", "success");
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.age) {
      errors.age = "Age is required";
    }
    if (!values.category) {
      errors.category = "Category is required";
    }
    if (!values.location) {
      errors.location = "Location is required";
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
      <SectionTitle heading={"update pet"}></SectionTitle>
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
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name:
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
            </div>
            <div className="md:flex gap-2">
              <div className="mb-4 flex-1">
                <label
                  htmlFor="age"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Age:
                </label>
                <Field
                  type="number"
                  id="age"
                  name="age"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-4 flex-1">
                <label
                  htmlFor="category"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Category:
                </label>
                <Field
                  id="category"
                  name="category"
                  as="select"
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="dogs">Dogs</option>
                  <option value="birds">Birds</option>
                  <option value="fish">Fish</option>
                  <option value="cats">Cats</option>
                  <option value="mammals">Mammals</option>
                  <option value="reptiles">Reptiles</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Location:
              </label>
              <Field
                type="text"
                id="location"
                name="location"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="location"
                component="div"
                className="text-red-500 text-sm"
              />
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
              Update pet
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UpdatePet;
