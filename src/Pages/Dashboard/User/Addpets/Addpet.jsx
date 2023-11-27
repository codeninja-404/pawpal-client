import { Formik, Form, Field, ErrorMessage } from "formik";
import SectionTitle from "../../../../Components/Shared/SectionTitle/SectionTitle";
import { useState } from "react";
import { imageUpload } from "../../../../api/utils";

const Addpet = () => {
  const [imageData, setImageData] = useState(null);
  const [imgURL, setImgURL] = useState("");

  const initialValues = {
    name: "",
    age: "",
    category: "",
    location: "",
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

  const onSubmit = (values) => {
    const pet = { ...values, image: imgURL };
    console.log(pet);

    //  post data to database
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    return errors;
  };
  return (
    <div className=" mt-10 mx-auto w-full p-4 ">
      <SectionTitle heading={"Add Pet"}></SectionTitle>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          <Form className=" mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            <div className="flex gap-2">
              {/* <div className="mb-4">
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
              </div> */}

              <div className="mb-4">
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
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Age:
              </label>
              <Field
                type="text"
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

            <div className="mb-4">
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
                as="text"
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

            <button
              type="submit"
              className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Addpet;
