import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import { useGlobalContext } from "@/context/useContext";

import { HiBars3CenterLeft } from "react-icons/hi2";

import { RiMapPinUserFill } from "react-icons/ri";

import ReactCountryFlag from "react-country-flag";

import { TfiWorld } from "react-icons/tfi";

import { Link } from "react-router-dom";

function MenuApp() {
  const { open_nav, close_nav, user, sign_out_user } = useGlobalContext();
  return (
    <>
      <aside id="sub-menu">
        <ul>
          <li onClick={() => open_nav()}>
            <HiBars3CenterLeft size={20}></HiBars3CenterLeft>
            <h4>All</h4>
          </li>
          
        </ul>
      </aside>
      {/* side nav */}
      <nav id="mySidenav" className="sidenav">
        <div className="side-profile-nav">
          {user.auth ? (
            <Link to={"/account"} className="side-profile-nav-link">
              <RiMapPinUserFill size={20} />
            </Link>
          ) : (
            <Link to={"/login"} className="side-profile-nav-link">
              <RiMapPinUserFill size={20} />
            </Link>
          )}
          <h4>
            {user.auth ? `Hello, ${user.name}` : "Hello, guest "}
          </h4>
        </div>
        <div className="side-profile-closeNav" onClick={() => close_nav()}>
          <button>Close Menu</button>
        </div>

        <div className="side-content-nav-with-arrow">
          <div>
            <h3>Shop By Department</h3>
            <li>
              <p>Clothing, Shoes, Jewelry & Watches</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Books</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Movies, Music & Games</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>Electronics</p> <MdKeyboardArrowRight />
            </li>
            <li>
              <p>See All</p> <MdKeyboardArrowDown />
            </li>
          </div>
        </div>

        <div className="side-content-nav">
          <div>
            <h3>Help & Setting</h3>
            <li>
              {user.auth ? (
                <Link to={"/account"}>Your Account</Link>
              ) : (
                <Link to={"/login"}>Your Account</Link>
              )}
            </li>
            <li>
              {user.auth ? (
                <Link to={"/orders"}>Returns & Orderst</Link>
              ) : (
                <Link to={"/login"}>Returns & Orderst</Link>
              )}
            </li>

            <li onClick={() => sign_out_user()}>Sign Out</li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuApp;
