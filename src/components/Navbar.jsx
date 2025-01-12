import { useContext, useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    if (user && user.email) {
      // Fetch the total price from the backend API
      fetch(`http://localhost:9000/price?email=${user.email}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data[0] && data[0].totalPrice !== undefined) {
            setTotalPrice(data[0].totalPrice);
          } else {
            setTotalPrice(0);
          }
        })
        .catch((error) => {
          console.error("Error fetching total price:", error);
          setTotalPrice(0);
        });
    }
  }, [user]);

  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-7" src={logo} alt="" />
          <span className="font-bold">Micro Job Website</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Blogs</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {isAdmin ? (
                <>
                  <li>
                    <Link to="/add-job" className="justify-between">
                      Add Job
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/my-posted-jobs">My Posted Jobs</Link>
                  </li>
                  <li>
                    <Link to="/bid-requests">Bid Requests</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <p>Total Price: {totalPrice !== null ? `$${totalPrice}` : 'Loading...'}</p>
                    <Link to="/my-bids">My Bids</Link>
                  </li>
                </>
              )}
              <li className="mt-2">
                <button onClick={logOut} className="bg-gray-200 block text-center">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
