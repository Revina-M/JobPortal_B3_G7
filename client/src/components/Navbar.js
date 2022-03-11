import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../redux/actions/userActions";

function Navbar(props) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Gohome = ({ navigate }) => {
    useEffect(() => {
      if (userInfo) {
        if (userInfo.role === "Admin") {
          navigate("/admindashboard");
        } else if (userInfo.role === "JobSeeker") {
          navigate("/alumnidashboard");
        } else if (userInfo.role === "Employer") {
          navigate("/employerdashboard");
        } else if (userInfo.role === "Faculty") {
          navigate("/facultydashboard");
        }
      }
    }, [navigate, userInfo]);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  useEffect(() => {}, [userInfo]);

  return (
    <div>
      <Button onClick={Gohome}>Home</Button>
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  );
}

export default Navbar;
