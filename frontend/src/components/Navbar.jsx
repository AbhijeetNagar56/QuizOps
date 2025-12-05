import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm relative z-50">
      {/* Left - Mobile Menu + Brand */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Mobile Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/quiz">Quizzes</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/create">Create Quiz</Link>
            </li>
          </ul>
        </div>

        {/* Logo + Brand */}
        <a className="mx-2 font-bold text-2xl">Quiz App</a>
      </div>

      {/* Center - Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/quiz">Quizzes</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
          <li>
            <Link to="/create">Create Quiz</Link>
          </li>
        </ul>
      </div>

      {/* Right - Profile Button */}
      <div className="navbar-end">
        <div className="btn">
          <Link to="/auth">My Profile</Link>
        </div>
      </div>
    </div>
  );
}
