import Logo from "../../../assets/LogoSandiKami.jpg"
import "../CSS/index.css"

const Header = () => {
  const navMenu = () => {
    const nav = document.querySelector(".sidebar")
    nav.classList.toggle("on")
  }
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <div className="relative mx-4 lg:mx-0 flex items-center">
          <div>
            <img src={Logo} alt="" width="200px" />
          </div>
        </div>
      </div>
      <button className="text-gray-500 focus:outline-none lg:hidden z-10 hamburger" onClick={navMenu}>
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M4 6H20M4 12H20M4 18H11"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          />
        </svg>
      </button>
          {/* <div className="flex items-center">
            <div className="relative">
              <button className="flex mx-4 text-gray-600 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                className="fixed inset-0 z-10 w-full h-full"
                style={{ display: "none" }}
              />
            </div>
            <div>
              <button className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                  alt="Your avatar"
                />
              </button>
              <div
                className="fixed inset-0 z-10 w-full h-full"
                style={{ display: "none" }}
              />
              <div
                className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl"
                style={{ display: "none" }}
              >
                <Link
                  
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >
                  Profile
                </Link>
                <Link
                  
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >
                  Products
                </Link>
                <Link
                  
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div> */}
        </header>
  );
};

export default Header;
