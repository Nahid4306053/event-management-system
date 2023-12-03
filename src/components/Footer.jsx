import React from "react";
import { Link, useLocation } from "react-router-dom";
import bg_footer from "/images/bg-home.png";
import foterwave from "/images/foterwave.png";
export default function Footer() {
  const { pathname } = useLocation();
  const pathnames = ["/login", "/signup"];

  return (
    <footer
      className={`flex flex-col   p-0   overflow-hidden   top-0 relative ${
        pathnames.includes(pathname) ? "-mt-72" : "mt-20"
      } `}
    >
      <img
        draggable={false}
        className="w-full     
      h-full"
        src={foterwave}
        alt=""
      />
      <div className="bg-sky-300 ">
        <div
          className="footer_backgorund"
          style={{
            background: `url(${bg_footer})`,
            backgroundPosition: "bottom center",
          }}
        >
          <div className="container    w-full p-10   z-50  mx-auto ">
            <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
              {/* get in touch */}

              <div className=" flex flex-col gap-3    ">
                <h1 className="sub_tile text-4xl font-bold">Get in touch</h1>
                <h1 className="sub_tile text-xl font-semibold">
                  Jln Cempaka Wangi No 22 Dhaka , Bangladesh
                </h1>
                <p className="text-lg">
                  <i className="fa-solid fa-envelope"></i> ku4306053@gmail.com
                </p>
                <p className="text-lg">
                  <i className="fa-regular fa-phone-volume"></i> (+88)
                  01954849695
                </p>
              </div>

              <div className="flex flex-col gap-3    ">
                <h1 className="sub_tile text-4xl font-bold">Quick links</h1>
                <Link className="text-lg hover:underline">About us</Link>
                <Link className="text-lg hover:underline">Gallery</Link>
                <Link className="text-lg hover:underline">Services</Link>
                <Link className="text-lg hover:underline">BLogs</Link>
                <Link className="text-lg hover:underline">
                  Our Team members
                </Link>
                <Link className="text-lg hover:underline">Tetimonial</Link>
              </div>

              <div className="flex flex-col gap-3   ">
                <h1 className="sub_tile text-4xl font-bold">Inportant links</h1>
                <Link className="text-lg hover:underline">About us</Link>
                <Link className="text-lg hover:underline">
                  Terms and Services
                </Link>
                <Link className="text-lg hover:underline">Privacy Policay</Link>
                <Link className="text-lg hover:underline">
                  Help and support
                </Link>
                <Link className="text-lg hover:underline">Contact us</Link>
              </div>

              <div className="flex flex-col gap-3    ">
                <h1 className="sub_tile text-4xl font-bold">Newsletter.</h1>
                <h1 className="sub_tile text-xl font-semibold">
                  Signup for our newsletter to get updated information, insight,
                  or promotions.
                </h1>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Type here Your Email"
                    className="input input-bordered w-full "
                  />
                  <button className="btn btn-neutral w-full mt-4">
                    sign up
                  </button>
                </div>
              </div>
            </div>

            <div className="copywright">
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-10" />
              <span className="block  sm:text-center ">
                © {new Date().getFullYear()}
                <a
                  href="NahidBirthdayPartyPlanner.com"
                  className="hover:underline"
                >
                  NahidBirthdayPartyPlanner™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
