import { useState } from "react";
// import userImage1 from "/images/user-home-1.jpg";
// import userImage2 from "/images/user-home-2.jpg";
// import mechanicImage1 from "/images/mechanic-home-1.jpg";
// import mechanicImage2 from "/images/mechanic-home-2.jpg";
// import About from "./pages/About";
// import logo from "/images/car-2.png";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePageService from "./pages/HomePageService";
// import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { NavLink, Navigate } from "react-router-dom";
import MechanicRegister from "./components/mechanic/MechanicRegister";
import { useStateContext } from "./contexts/UserContext";

function Home() {
  const [count, setCount] = useState(0);
  const [isMechanicRegisterVisible, setIsMechanicRegisterVisible] =
    useState(false);
  const [isUserRegisterVisible, setIsUserRegisterVisible] = useState(false);
  const [user, setUser] = useState(null);

  const handleMechanicRegisterPopup = () => {
    setIsMechanicRegisterVisible(true);
  };
  const handleMechanicRegisterClose = () => {
    setIsMechanicRegisterVisible(false);
  };

  const handleUserRegisterPopup = () => {
    setIsUserRegisterVisible(true);
  };
  const handleUserRegisterClose = () => {
    setIsUserRegisterVisible(false);
  };

  const { currentUser, setCurrentUser, userToken, setUserToken } =
    useStateContext();

  if (userToken) {
    return <Navigate to="/user_dashboard" />;
  }

  return (
    <>
      <div class="w-full min-h-screen">
        <Navbar />

        <header className="App-header bg-cover bg-center w-full h-screen  ">
          <picture className="relative top-0 left-0 w-full h-full">
            <source srcSet="./images/car-1.jpg" media="(min-width: 1024px)" />
            <source srcSet="./images/car-1.jpg" media="(min-width: 640px)" />
            <img
              src="./images/car-1.jpg"
              className="w-full h-screen object-cover relative"
              alt="car"
            />
          </picture>
          <div className=" bg-gray-200 bg-opacity-40 text-slate-950 absolute -top-0 lg:-top-2 mx-2 h-[80%] lg:h-auto lg:mx-12 my-80 lg:my-60 justify-center items-center text-center lg:text-left lg:justify-start lg:items-start w-auto lg:w-[40%] px-8 py-4 rounded-lg place-self-center">
            <h5 className=" text-sm text-slate-950 tracking-widest mb-4 font-semibold">
              QUALITY SERVICE
            </h5>
            <h1 className="text-4xl mb-4 font-bold tracking-wide">
              ON ROAD VEHICLE BREAKDOWN ASSISTANCE
            </h1>
            <p className="mb-4 text-2xl font-semibold">
              Our service is designed to provide you with the best possible
              solutions for your vehicle maintenance needs. It aims to reduce
              time and cost for our users to find mechanics during breakdowns.
            </p>
          </div>
        </header>
        <main className="  flex flex-col py-8 px-6 my-2  lg:my-4 bg-cover bg-center border-t-8 border-slate-950 w-full ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-4 lg:mb-6 gap-6 lg:gap-4 items-center  justify-center h-full  lg:mx-8 rounded-md ">
            <>
              <div className="bg-slate-950 mx-4 lg:mx-0 rounded-lg  lg:w-full lg:h-full p-4  flex flex-col justify-center lg:justify-start items-center lg:items-left text-center lg:text-left lg:top-48 lg:left-32 text-gray-100 ">
                <h3 className="text-4xl mb-4 font-bold tracking-wide ">
                  Register as a user
                </h3>
                <p className="mb-4 text-2xl">
                  Our service is designed to provide you with the best possible
                  solutions for your vehicle maintenance needs. It aims to
                  reduce time and cost for our users to find mechanics during
                  breakdowns. <br />
                </p>

                <Link to="/user_register">
                  <button
                    className=" bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-4 left-0 "
                    // onClick={handleUserRegisterPopup}
                  >
                    Register as a user
                  </button>
                </Link>
              </div>
              <div className=" bg-slate-950 mx-4 lg:mx-0 lg:w-full lg:h-full rounded-lg p-4 flex flex-col  items-center lg:items-left text-center lg:text-left lg:top-48 lg:left-32 text-gray-100 ">
                <h3 className="text-4xl mb-4 font-bold tracking-wide ">
                  Register as a mechanic
                </h3>
                <p className="mb-4 text-2xl">
                  Level up your business with multiple customers around your
                  area. <br />
                  Create an account with us and stay connected with vehicle
                  owners nationwide.
                </p>

                <Link to="/mechanic_register">
                  <button className=" bg-red-700 hover:bg-red-400 text-white font-bold p-2 rounded mt-4 left-0 ">
                    Register as a mechanic
                  </button>
                </Link>
              </div>
            </>
          </div>
        </main>

        {/* <Services /> */}
        {/* <Element name="services" className="element"> */}
        <section>
          <HomePageService />
        </section>
        {/* </Element> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
