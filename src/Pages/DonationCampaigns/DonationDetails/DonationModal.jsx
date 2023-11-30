import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import Swal from "sweetalert2";

const DonationModal = ({ handleOpen, open, donationId }) => {




  const handleSubmit = async (e) => {
    e.preventDefault();

  
      handleOpen();
    
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={handleSubmit}>
        <DialogHeader>Donation Form</DialogHeader>
          <DialogBody>
            
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

export default DonationModal;
