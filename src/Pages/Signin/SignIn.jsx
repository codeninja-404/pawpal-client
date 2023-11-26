import { Button } from "@material-tailwind/react";
import Container from "../../Components/Shared/Container/Container";
import { FcGoogle } from "react-icons/fc";
import { TfiGithub } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SignIn = () => {
  const { googleSignIn, gitHubSignIn } = useAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const info = { name, email, password };
    console.log(info);
  };
  return (
    <div>
      <Container>
        <div className="my-20 ">
          <div className="bg-gray-300 mx-auto flex flex-col items-center p-16 max-w-xl">
            <h1 className="font-bold uppercase mb-5 text-5xl">sign in !</h1>
            <div className="flex gap-3 my-4 items-center text-2xl uppercase font-bold">
              <p>Continue with: </p>
              <Button onClick={handleGoogleSignIn} className="rounded-full">
                <FcGoogle className="text-2xl" />
              </Button>

              <Button onClick={handleGitHubSignIn} className="rounded-full">
                <TfiGithub className="text-2xl" />
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-full ">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
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
                  <Button type="submit" className="w-full my-4">
                    Sign in
                  </Button>
                </div>
              </form>
              <div className="flex justify-center gap-4 items-center">
                <p>Not a user?</p>
                <Link to="/signup">
                  <Button size="sm" className="bg-purple-400">
                    SIGN UP
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

export default SignIn;
