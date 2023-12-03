import React, { useEffect } from "react";
import bg_home from "/images/bg-home.png";
import Banner from "../components/Home/BannerSection";
import useLoadServics from "../Hooks/LoadServics";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AboutUs from "../components/Home/AboutUssection";
import OurCountDown from "../components/Home/OurCountDown";
import Services from "../components/Home/ServicesSection";
import ClientTestimonial from "../components/Home/ClientTestimonial";
import Team from "../components/Home/Teamsection";
import GallerySection from "../components/Home/GallerySection";
import useLoadGallery from "../Hooks/LoadGallery";
import { Link } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import Pagetitle from "../Hooks/Pagetitle";

export default function Home() {
  const { services } = useLoadServics();
  const { Gallerys } = useLoadGallery();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Pagetitle>Home - Birthday Planner</Pagetitle>

      <div
        style={{ background: `url(${bg_home})` }}
        className="flex justify-center items-center banner_section min-h-screen w-full py-20 px-0 box-border"
      >
        {services.length > 0 ? (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            grabCursor={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper container mx-auto overflow-hidden  h-full"
          >
            {services.slice(0, 6).map((ele, ind) => (
              <SwiperSlide key={ind}>
                <Banner datas={ele} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ThreeCircles
            height="200"
            width="200"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperclassName=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#3498db"
            innerCircleColor="#e67e22"
            middleCircleColor="#e74c3c"
          />
        )}
      </div>

      <AboutUs />

      <Services />
      <div className="container mx-auto  mt-20 flex justify-end">
        <Link to="/services">
          <button
            data-aos="fade-right"
            className="btn btn-info text-white btn-lg"
          >
            View all services <i className="fa-solid fa-arrow-right "></i>
          </button>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <Team />
      <div className="container mx-auto  mt-20 flex justify-end">
        <Link to="/team">
          {" "}
          <button
            data-aos="fade-right"
            className="btn btn-info text-white btn-lg"
          >
            See all team members <i className="fa-solid fa-arrow-right "></i>
          </button>
        </Link>
      </div>
      <OurCountDown />

      <ClientTestimonial />

      <div
        data-aos="fade-down"
        className="section_title  container mx-auto mt-10  grid gap-4 text-center mb-20"
      >
        <h1 className="sub_tile text-3xl text-sky-400">
          Some memorable Momments
        </h1>
        <h1 className="sub_tile text-5xl font-bold"> Our Gallrey</h1>
        <p className="text-lg">
          Some memrobale Momments capture in frame with our client and his
          familly member
        </p>
      </div>

      {Gallerys.length > 0 && (
        <GallerySection elements={Gallerys.slice(0, 9)} />
      )}
      <div className="container mx-auto  mt-20 flex justify-end">
        <Link data-aos="fade-right" to="/gallery">
          {" "}
          <button className="btn btn-info text-white btn-lg">
            View More Capture<i className="fa-solid fa-arrow-right "></i>
          </button>
        </Link>
      </div>
    </>
  );
}
