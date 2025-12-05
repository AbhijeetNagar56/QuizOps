import { useState } from "react";
import axiosInstance from "../api/axios";
import { Link } from "react-router"; // 
import { ArrowLeft } from "lucide-react"; //

const Auth = () => {
  const [su, setsu] = useState(true);
  const [rollNo, setRollNo] = useState('');
  const [facultyId, setFacultyId] = useState('');
  const [password, setPassword] = useState('');
  

  // Handle student Login
  const handleStudentLogin = async () => {
    try {
      const response = await axiosInstance.post('/auth/student', {
        rollNo,
        password
      });

      const token = response.data.token;

      // Save token in localStorage
      localStorage.setItem('token', token);

      // Use Axios for dashboard request
      const res = await axiosInstance.get("/dashBoard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;
      console.log('Login successful:', response.data);
      window.location.href = "/"; // Redirect to home
      
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
    }
  };
  
  // Handle faculty Login
  const handleFacultyLogin = async () => {
    try {
      const response = await axiosInstance.post('/auth/faculty', {
        facultyId,
        password
      });

      const token = response.data.token;

      // Save token in localStorage
      localStorage.setItem('token', token);

      // Use Axios for dashboard request
      const res = await axiosInstance.get("/dashBoard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;
      console.log('Login successful:', response.data);
      window.location.href = "/"; // Redirect to home

    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
    }
  };

  //  UI Rendering
  if (su) {
    // Student Login Form
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-sm shadow-xl bg-base-100">
          <div className="card-body">
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft size={24} />
              </Link>
              <h2 className="text-2xl font-bold text-center flex-grow">Student Account</h2>
              <div className="w-6"></div> {/* Spacer to balance the title */}
            </div>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Roll No</span>
              </div>
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                placeholder="Roll No"
                className="input input-bordered w-full"
              />
            </label>

            

            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input input-bordered w-full"
              />
            </label>

            <button onClick={handleStudentLogin} className="btn btn-primary w-full">Log In</button>
            <p className="justify-self-start cursor-pointer" onClick={() => setsu(false)}>
              Are you faculty?
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    // Faculty Login Form
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-sm shadow-xl bg-base-100">
          <div className="card-body">
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft size={24} />
              </Link>
              <h2 className="text-2xl font-bold text-center flex-grow">Faculty Account</h2>
              <div className="w-6"></div> {/* Spacer to balance the title */}
            </div>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Faculty ID</span>
              </div>
              <input
                type="text"
                value={facultyId}
                onChange={(e) => setFacultyId(e.target.value)}
                placeholder="Faculty ID"
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input input-bordered w-full"
              />
            </label>

            <button onClick={handleFacultyLogin} className="btn btn-accent w-full">Log In</button>
            <p className="justify-self-start cursor-pointer" onClick={() => setsu(true)}>
              Are you a student?
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Auth;