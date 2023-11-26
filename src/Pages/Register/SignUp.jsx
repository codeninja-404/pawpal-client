import { Avatar, Button } from "@material-tailwind/react";
import Container from "../../Components/Shared/Container/Container";
import { useState } from "react";
import { Link } from "react-router-dom";
import { imageUpload } from "../../api/utils";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } =
    useAuth();
  const [imagePre, setImagePre] = useState(null);
  const [photo, setPhoto ] = useState("");

  const handleImageChange = async (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePre(reader.result);
        setPhoto(selectedImage);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImagePre(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const imageData = await imageUpload(photo);
      const result = await createUser(email, password);
      await updateUserProfile(name, imageData?.data?.display_url);
      console.log(result);
    } catch (err) {
      console.log(err);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${err}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    const info = { name, email, password };
    console.log(info);
  };

  return (
    <div className="">
      <Container>
        <div className="my-20 ">
          <div className="bg-gray-300 mx-auto flex flex-col items-center p-16 max-w-xl">
            <h1 className="font-bold uppercase mb-5 text-5xl">sign up !</h1>
            <div className="bg-white rounded-lg shadow-md p-4 w-full ">
              <div className="flex flex-col justify-evenly items-center my-4">
                {imagePre && (
                  <div>
                    <figure className=" my-2 w-28 rounded-full overflow-hidden">
                      <Avatar src={imagePre} alt="avatar" size="xxl" />
                    </figure>
                  </div>
                )}
                <label>
                  <input
                    // onChange={(e) => handleImageChange(e.target.files[0])}
                    onChange={handleImageChange}
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                  />

                  <div className=" align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-6 rounded-lg   border border-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none  cursor-pointer ">
                    Select profile photo
                  </div>
                </label>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Enter Your Email Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm mb-2">
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      autoComplete="new-password"
                      id="password"
                      required
                      placeholder="*******"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full my-2">
                    Create Account
                  </Button>
                </div>
              </form>
              <div className="flex justify-center gap-4 items-center">
                <p>Already a user?</p>
                <Link to="/signin">
                  <Button size="sm" className="bg-green-500">
                    SIGN IN
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
