import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AdoptionModal = ({ handleOpen, open, petId }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.displayName,
    email: user?.email,
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adoptionInfo = { ...formData, petId };

    const res = await axiosSecure.post("/adoptionReq", adoptionInfo);

    if (res.data.insertedId) {
      handleOpen();
      Swal.fire("Your request is Submited.", "", "success");
    }
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <div className="flex gap-2 ">
              <div className="flex-1">
                <label className="block mb-2">
                  <span className="text-gray-700">Name:</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input mt-1 block w-full border-2 border-gray-600 p-1 rounded-xl"
                    readOnly
                  />
                </label>
              </div>

              <div className="flex-1">
                <label className="block mb-2">
                  <span className="text-gray-700">Email:</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input mt-1 block w-full border-2 border-gray-600 p-1 rounded-xl"
                    readOnly
                  />
                </label>
              </div>
            </div>

            <label className="block mb-2">
              <span className="text-gray-700">Phone Number:</span>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-input mt-1 block w-full border-2 border-gray-600 p-1 rounded-xl"
                required
              />
            </label>

            <label className="block mb-2">
              <span className="text-gray-700">Address:</span>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-input mt-1 block w-full border-2 border-gray-600 p-1 rounded-xl"
                required
              />
            </label>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Close</span>
            </Button>
            <Button type="submit" variant="gradient" color="green">
              <span>Submit</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default AdoptionModal;
