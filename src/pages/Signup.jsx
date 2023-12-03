import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthnicationContext";
import Pagetitle from "../Hooks/Pagetitle";
import Auth_Banner from '/images/Auth_Banner.jpg'

export default function Signup() {
  const [Errors, setErrors] = useState([]);
  const {
    continueWithGoogle,
    continueWithGithub,
    sendeVerificationmail,
    auth,
    Signup,
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { Vpath } = state || {};

  const handleWithGoogle = async () => {
    try {
      await continueWithGoogle();
      toast.success(`${auth.currentUser?.displayName} Registration SuccessFully` );
      navigate(`${Vpath ? Vpath : "/"}`);
    } catch (err) {
      console.log(err);
    }
  };

  //  const handleWithGithub = async () =>{
  //   try{
  //       await continueWithGithub()
  //       navigate("/")
  //   }
  //   catch(err){
  //    console.log(err);
  //   }
  //  }

  const handelesubmit = async (form) => {
    form.preventDefault();
    let username = form.target.username.value;
    let email = form.target.email.value;
    let password = form.target.password.value;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    const err = [];

    if (username.trim() === "" || typeof username !== "string") {
      err.push("Username is requred");
    } else if (username.trim().length < 3 || username.trim().length > 25) {
      err.push("Username should max 25 and min 3 charecter");
    }

    if (password.trim() === "") {
      err.push("Password is required");
    } else if (!passwordPattern.test(password)) {
      err.push(
        "Password should include one uppercase , one lowercase , one special  character and length should 6 character"
      );
    }
    if (email.trim() === "") {
      err.push("Email is required");
    } else if (!emailPattern.test(email)) {
      err.push("Please provide a verified email");
    }

    setErrors(err);

    if (err.length === 0) {
      try {
        await Signup(username, email, password);
        toast.success(
          `${auth.currentUser?.displayName} Registration SuccessFully`
        );
        navigate(`${Vpath ? Vpath : "/"}`);
        // await sendeVerificationmail()
        // alert("Cheak your mail for verifucation your Email")
      } catch (err) {
        setErrors((old) => [
          ...old,
          err.message.split("/")[1].replace(/-\)|-/g, " ").replace(").", " "),
        ]);
      }
    }
  };

  return (
    <>
      <Pagetitle>Sign up - Birthday Planner</Pagetitle>
      <div
        style={{
          backgroundImage:
            `url(${Auth_Banner})`,
        }}
        className="hero pb-40 md:min-h-[1200px] min-h-[1000px] bg-base-200"
      >
        <div className="hero-content">
          <div className="card  flex justify-stretch md:w-[500px]  min-w-full max-w-2xl shadow-2xl bg-base-100">
            <div className="card-body ">
              <form onSubmit={handelesubmit}>
                {Errors.length > 0 && (
                  <div className="erorrs text-red-600 bg-red-200 p-4 rounded-lg">
                    <ul className="list-disc grid gap-2">
                      {Errors.map((ele, ind) => {
                        return (
                          <li key={ind} className="capitalize  ml-4">
                            {ele}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="w-full input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="w-full input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    className="w-full input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-neutral">
                    Sign up
                  </button>
                </div>

                <div className="form-control text-center ">
                  <p className="py-2 mt-5 ">
                    Alraedy have an account?{" "}
                    <Link  state={{ Vpath: Vpath ? Vpath : null }} to="/login" className="text-sky-600">
                      Log in
                    </Link>
                  </p>
                </div>
              </form>
              <div className=" flex md:flex-row flex-col  gap-4  md:mt-6">
                <button
                  onClick={handleWithGoogle}
                  className="flex-1 btn btn-neutral"
                >
                  Sign up with <i className="text-xl fa-brands fa-google"></i>
                </button>
                {/* onClick={handleWithGithub} */}
                <button disabled className="flex-1 btn btn-neutral">
                  Sign up with <i className="text-xl fa-brands fa-github"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
