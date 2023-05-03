import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";

import AmazonLogo from "@/assets/media/logo/Amazon-logo.png";

import { MdOutlinePlace, MdSearch } from "react-icons/md";

import { useGlobalContext } from "@/context/useContext";

import { Link } from "react-router-dom";

function HeaderApp() {
  const { cart, user } = useGlobalContext();
  return (
    <>
      <header>
        <main>
          <Link to={"/"}>
            <div className='main-logo'>
              <img
                src={AmazonLogo}
                alt='Amazon-logo'
              />
            </div>
          </Link>
          <div className='header-search'>
            <div>
              <select
                name='category'
                id='category'>
                <option value='All'>All</option>
                <option value='Books'>Books</option>
                <option value='Movies'>Movies</option>
                <option value='Series'>Series</option>
                <option value='Sport'>Sport</option>
                <option value='Music'>Music</option>
                <option value='Gaming'>Gaming</option>
              </select>
            </div>
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
          </div>
        


          <div className='header-signin'>
            <p>
              {user.auth ? `Hello, ${user.name}`: "Hello, sign in"}
            </p>
            <div className='header-signin-bottom-article'>
              <h5>Account & Lists</h5>
              <BsFillCaretDownFill size={10}></BsFillCaretDownFill>
            </div>
            {/* Signin Hover */}
            <div className='header-signin-card'>
              {!user.auth && (
                <>
                  <div className='signin-btn'>
                    <Link to={"/login"}>
                      <button>Sign in</button>
                    </Link>
                  </div>
                </>
              )}
              <div className='login-content'>
              
                <div>
                  <h5>Your Accounts</h5>
                  <p>
                    {user.auth ? (
                      <Link to={"/account"}>Account</Link>
                    ) : (
                      <Link to={"/login"}>Account</Link>
                    )}
                  </p>
                  <p>
                    {user.auth ? (
                      <Link to={"/orders"}>Orders</Link>
                    ) : (
                      <Link to={"/login"}>Orders</Link>
                    )}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          <div className='header-r-o'>
            <Link to={"/orders"}>
              <p>Returns</p>
              <h5>& Orders</h5>
            </Link>
          </div>
          <Link
            to={"/checkout"}
            className='header-basket-link'>
            <div className='header-basket'>
              <BsCart2 size={30}></BsCart2>
              <span className='product-count'>{cart.length}</span>
              <h5>Cart</h5>
            </div>
          </Link>
        </main>
      </header>
    </>
  );
}

export default HeaderApp;
