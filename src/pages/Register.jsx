import React from "react";
import RegisterForm from "../components/RegisterForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRegister = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/register", formData);

    const errTxt = document.getElementById("error");

    switch (res.data.message) {
      case "Registered":
        dispatch({
          type: "authenticated",
          payload: res.data.userId,
        });
        navigate("/climbs");
        break;
      case "Username in use":
        errTxt.innerText = "Username is taken!";
        break;
      default:
        errTxt.innerText = "Something went wrong";
    }
  };
  return (
    <div>
      <RegisterForm onRegister={handleRegister} />
      <p style={{ color: "red" }} id="error"></p>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
};

export default Register;
