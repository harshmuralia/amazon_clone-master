import AmazonLogo from "@/assets/media/logo/Amazon-logo.png";

import { MdSearch, MdOutlinePlace } from "react-icons/md";

import { useGlobalContext } from "@/context/useContext";

import { HiBars3CenterLeft } from "react-icons/hi2";

import { RiMapPinUserFill } from "react-icons/ri";

import { BsCart2 } from "react-icons/bs";

import { Link } from "react-router-dom";
import { auth } from "../../../../firebase"

function MobileHeaderApp() {
  const { open_nav, cart, user } = useGlobalContext();
  return (
    <>
      <nav className='mobile-header'>
        <div className='img-menu'>
          <ul>
            <li>
              <span onClick={() => open_nav()}>
                <HiBars3CenterLeft size={20}></HiBars3CenterLeft>
              </span>
            </li>
            <li>
              <Link to={"/"}>
                <div>
                  <img
                    src={AmazonLogo}
                    alt='amazon-logo'
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className='info-menu'>
          <div>
            <h4>
              {auth.currentUser ? `Hello, ${auth.displayName}` : "Hello, guest "}
            </h4>
            <Link
              to={"/login"}
              className='info-menu-link'>
              <RiMapPinUserFill size={20} />
            </Link>
          </div>
          <Link
            to={"/checkout"}
            className=''>
            <div className='header-basket'>
              <BsCart2 size={30}></BsCart2>
              <span className='product-count'>{cart.length}</span>
              <h5>Cart</h5>
            </div>
          </Link>
        </div>
      </nav>
      {/* search-bar */}
      <section className='mobile-search'>
        <div>
          <input
            type='text'
            name='search'
            id='search'
          />
        </div>
        <div>
          <button>
            <MdSearch size={25}></MdSearch>
          </button>
        </div>
      </section>
      
    </>
  );
}

export default MobileHeaderApp;
