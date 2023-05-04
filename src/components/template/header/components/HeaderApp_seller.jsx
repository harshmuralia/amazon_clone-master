// import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";

// import AmazonLogo from "@/assets/media/logo/Amazon-logo.png";

// import { MdOutlinePlace, MdSearch } from "react-icons/md";

// import { useGlobalContext } from "@/context/useContext";

// import { Link } from "react-router-dom";

// import { auth } from "../../../../firebase";

// function HeaderApp_seller() {

// const user = auth.currentUser;
//   const { cart } = useGlobalContext();
//   return (
//     <>
//       <header>
//         <main>
//           <Link to={"/"}>
//             <div className='main-logo'>
//               <img
//                 src={AmazonLogo}
//                 alt='Amazon-logo'
//               />
//             </div>
//           </Link>
//           <div className='header-search'>
//             <div>
//               <select
//                 name='category'
//                 id='category'>
//                 <option value='All'>All</option>
//                 <option value='Books'>Books</option>
//                 <option value='Movies'>Movies</option>
//                 <option value='Series'>Series</option>
//                 <option value='Sport'>Sport</option>
//                 <option value='Music'>Music</option>
//                 <option value='Gaming'>Gaming</option>
//               </select>
//             </div>
//             <div>
//               <input
//                 type='text'
//                 name='search'
//                 id='search'
//               />
//             </div>
//             <div>
//               <button>
//                 <MdSearch size={25}></MdSearch>
//               </button>
//             </div>
//           </div>
        


//           <div className='header-signin'>
//             <p>
//               <h4>{user ? `Hello, ${user.displayName}`: "Hello, sign in"}</h4>
//             </p>

//             <div className='header-signin-bottom-article'>
//               <h5></h5>
//               <BsFillCaretDownFill size={10}></BsFillCaretDownFill>
//             </div>
//             {/* Signin Hover */}
//             <div className='header-signin-card'>
//               {!user && (
//                 <>
//                   <div className='signin-btn'>
//                     <Link to={"/login"}>
//                       <button>Sign in</button>
//                     </Link>
//                   </div>
//                 </>
//               )}
//             </div>
            
//           </div>
//           <div className='header-r-o'>
//             <Link to={"/add_product"}>
//               <h4>Add Product</h4>
//             </Link>
//           </div>
          
//         </main>
//       </header>
//     </>
//   );
// }

// export default HeaderApp_seller;


import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";

import AmazonLogo from "@/assets/media/logo/Amazon-logo.png";

import { MdOutlinePlace, MdSearch } from "react-icons/md";

import { useGlobalContext } from "@/context/useContext";

import { Link } from "react-router-dom";

import { auth } from "../../../../firebase";

function HeaderApp_seller() {

  const user = auth.currentUser;
  const { sign_out_user } = useGlobalContext();

  return (
    <>
      <header>
        <main>
          <Link to={"/dashboard"}>
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
              <h4>{user ? `Hello, ${user.displayName}`: "Hello, seller"}</h4>
            </p>

            <div className='header-signin-bottom-article'>
              <h5></h5>
              <BsFillCaretDownFill size={10}></BsFillCaretDownFill>
            </div>
            {/* Signin Hover */}
            {user ? (<div className='header-signin-card'>
                <div className='signin-btn'>
                    <button onClick={() => sign_out_user()}>Sign Out</button>
                </div>
              </div>) : (
              <div className='header-signin-card'>
                <div className='signin-btn'>
                  <Link to={"/Seller_login"}>
                    <button>Sign in</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          { user ? (<div className='header-r-o'>
            <Link to={"/add_product"}>
              <h4>Add Product</h4>
            </Link>
          </div>): null }
          
          
        </main>
      </header>
    </>
  );
}

export default HeaderApp_seller;
