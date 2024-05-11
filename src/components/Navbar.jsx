import React,{useState} from "react";
import {   Outlet } from 'react-router-dom';
import { ScheduleButton } from "./Button";
import './Navbar.css'


const Navbar=()=>{

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };
   


  return(
    <>
    <nav className="bg-white font-DM "  >
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-bold">
        <img src="/images/cloudnav.png" className="h-14" alt="Nav Logo" />




        <div className=" hidden lg:flex md:order-2 lg:order-2 lg:space-x-1 md:space-x-0 rtl:space-x-reverse font-medium" id="schedule-btn">
            <ScheduleButton/>
        </div>

    

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1  font-bold">
            <ul className="hidden lg:flex flex-col font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orangee-600 md:p-0  md:hover:text-orangee"
              >
                Products
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <ul className="absolute top-full left-0 z-10 mt-2 py-2 w-32 bg-white rounded-lg shadow-2xl">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:text-orangee"
                    >
                      Finance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:text-orangee"
                    >
                      Sales
                    </a>
                  </li> <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:text-orangee"
                    >
                      Websites

                    </a>
                  </li> <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:text-orangee"
                    >
                    Inventory & MRP

                    </a>
                  </li> <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:text-orangee"
                    >
                      HR

                    </a>
                  </li><li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Marketing

                    </a>
                  </li>
               
                </ul>
              )}



            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown2}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orangee-600 md:p-0  md:hover:text-orangee"
              >
                Solutions
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

                    {isDropdownOpen2 && (
                <ul className="absolute top-full left-0 z-10 mt-2 py-2 w-32 bg-white rounded-lg shadow-2xl">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:text-orangee"
                    >
                      FinSols
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:text-orangee"
                    >
                      SalSols
                    </a>
                  </li> <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 md:hover:text-orangee"
                    >
                      WebSols

                    </a>
                  </li> 
                
               
                </ul>
              )}


                 </li>

               
               
               
               
               
                <li>
                    <a href="#" className="block py-2 px-3 md:p-0 rounded md:bg-transparent md:text-black-700  md:hover:text-orangee">Customer stories</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-orangee">Support & Resources</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-orangee">Services</a>
                </li>
                <li>
                    <a href="#" className="block py-2 ml-20 md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-orangee">Log in</a>
                </li>
            </ul>
        </div>




        <section className="MOBILE-MENU flex lg:hidden">
                                <div
                                    className="HAMBURGER-ICON space-y-2"
                                    onClick={() => setIsNavOpen((prev) => !prev)}
                                >
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                </div>

                                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                                    <div
                                        className="absolute top-0 right-0 px-8 py-8"
                                        onClick={() => setIsNavOpen(false)}
                                    >
                                        <svg
                                            className="h-8 w-8 text-gray-600"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <div className="lg:hidden">
  <ul className="flex flex-col font-bold p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 space-y-4">
    <li>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-orangee"
      >
        Products
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <ul className="mt-2 py-2 bg-white rounded-lg shadow-2xl">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orangee"
            >
              Finance
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orangee"
            >
              Sales
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orangee"
            >
              Websites
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orangee"
            >
              Inventory & MRP
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orangee"
            >
              HR
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Marketing
            </a>
          </li>
        </ul>
      )}
    </li>
    <li>
      <button
        onClick={toggleDropdown2}
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-orangee"
      >
        Solutions
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isDropdownOpen2 && (
        <ul className="mt-2 py-2 bg-white rounded-lg shadow-2xl">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orangee"
            >
              FinSols
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orangee"
            >
              SalSols
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-orangee"
            >
              WebSols
            </a>
          </li>
        </ul>
      )}
    </li>
    <li>
      <a href="#" className="block py-2 px-3 rounded text-left hover:bg-transparent hover:text-orangee">
        Customer stories
      </a>
    </li>
    <li>
      <a href="#" className="block py-2 px-3 rounded text-left hover:bg-transparent hover:text-orangee">
        Support & Resources
      </a>
    </li>
    <li>
      <a href="#" className="block py-2 px-3 rounded text-left hover:bg-transparent hover:text-orangee">
        Services
      </a>
    </li>
    <li>
      <a href="#" className="block py-2  rounded text-left ml-4 hover:bg-transparent hover:text-orangee">
        Log in
      </a>
    </li>
  </ul>
</div>

</div>
</section>














    </div>


















</nav>


<div className={`mt-[100px] overflow-y-auto hidden  ${isNavOpen ? "hidden" : "block"}`}>
<Outlet />
</div>



<style>{`
.hideMenuNav {
display: none;
}
.showMenuNav {
display: block;
position: absolute;
width: 100%;
height: 100vh;
top: 0;
left: 0;
background: white;
z-index: 10;
display: flex;
flex-direction: column;
justify-content: space-evenly;


}
`}</style>


</>

  )
}

export default Navbar;