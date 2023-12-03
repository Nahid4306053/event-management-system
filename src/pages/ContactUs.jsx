import React from "react";
import Pagetitle from "../Hooks/Pagetitle";
import Input from "../components/Input";
export default function ContactUs() {
  return (
    <>
      
      <Pagetitle>Contact us - TourGudance</Pagetitle>
      
      <div className="mt-20 pt-20 container gap-10 mx-auto flex flex-col md:flex-row">
        <div className="flex-1 conatct_info my-5">
          <div className="meadia">
            <div className="meadia-body grid gap-2">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <h1 className="text-xl font-semibold">
                Let us know what you think
              </h1>
              <p className="text-lg">
                We are here to help you with any questions you may have.
              </p>
            </div>
          </div>
          {/* contact  numebr*/}
          <div className="flex flex-col  gap-10 mt-8">
            <div className="flex items-center gap-4">
              <div className="icon rounded-full  items-center flex justify-center  text-4xl h-20 w-20 border-neutral-900 border-2">
                <i className="fa-regular fa-phone-volume"></i>
              </div>
              <div className="det">
                <h3 className="text-xl font-semibold">Call us directly</h3>
                <p className="text-lg"> (+88) 01954849695</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="icon rounded-full  items-center flex justify-center  text-4xl h-20 w-20 border-neutral-900 border-2">
                <i className="fa-regular fa-fax"></i>
              </div>
              <div className="det">
                <h3 className="text-xl font-semibold">Fax us </h3>
                <p className="text-lg"> (+88) 1757 555 1234</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="icon rounded-full  items-center flex justify-center  text-4xl h-20 w-20 border-neutral-900 border-2">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="det">
                <h3 className="text-xl font-semibold">Mail us </h3>
                <p className="text-lg"> ku4306053@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="icon rounded-full  items-center flex justify-center  text-4xl h-20 w-20 border-neutral-900 border-2">
                <i className="fa-sharp fa-regular fa-location-dot"></i>
              </div>
              <div className="det">
                <h3 className="text-xl font-semibold">Vist our place</h3>
                <p className="text-lg">
                  Jln Cempaka Wangi No 22 <br /> Dhaka , Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-sky-200 p-14 rounded-lg">
          <div className="header">
            <div className="text-4xl my-5 flex gap-5 flex-wrap justify-between font-bold">
              <p>Let's Meet</p>
            </div>
          </div>
          <div className="card  flex-shrink-0 w-full ">
            <form className="grid  lg:grid-cols-2  gap-4">
              <Input
                placeholder="Name"
                label="Name"
                type="text"
                customcss="border-sky-300 border-2  focus:outline-none"
              />

              <Input
                placeholder="Phone"
                label="Phone"
                type="tel"
                customcss="border-sky-300 border-2 focus:outline-none "
              />

              <div className="col-span-full">
                <Input
                  placeholder="Email"
                  label="Email"
                  type="email"
                  customcss=" border-sky-300 border-2  focus:outline-none"
                />
              </div>

              <div className="form-control col-span-full">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  rows={5}
                  className="border-sky-300 h-full border-2 textarea textarea-bordered"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="form-control mt-3 col-span-full ">
                <button className="btn btn-info text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
