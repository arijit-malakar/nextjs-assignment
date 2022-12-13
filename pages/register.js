import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Register.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticProps = () => {
  return {
    props: {
      headerStatus: true,
      footerStatus: true,
    },
  };
};

const Register = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  // };
  const [formdata, setFormdata] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  const router = useRouter();

  const registerUser = async () => {
    //const baseURL = process.env.BASE_URL;
    const url = "http://localhost:3000/" + "api/users/register";
    const response = await axios.post(url, formdata);
    if (response.status == 201) {
      setSubmitStatus(true);
      setInterval(() => {
        router.push("/login");
      }, 5000);
    }
  };

  const handleChange = (e) => {
    let tempObj = {};
    tempObj[e.target.name] = e.target.value;
    setFormdata({ ...formdata, ...tempObj });
  };

  return (
    <div className={styles.center}>
      {submitStatus && (
        <div className="alert alert-success" role="alert">
          You have successfully registered! Redirecting in 5 seconds...
        </div>
      )}
      <h1>Register</h1>
      <div className={styles.txt_field}>
        <input type="text" name="name" onChange={handleChange} />
        <span></span>
        <label>Name</label>
      </div>
      <div className={styles.txt_field}>
        <input type="text" name="email" onChange={handleChange} />
        <span></span>
        <label>Email</label>
      </div>
      <div className={styles.txt_field}>
        <input type="text" name="mobile" onChange={handleChange} />
        <span></span>
        <label>Mobile Number</label>
      </div>
      <div className={styles.txt_field}>
        <input type="text" name="password" onChange={handleChange} />
        <span></span>
        <label>Password</label>
      </div>
      <button onClick={registerUser} className={styles.login_btn}>
        Register
      </button>
      <div className={styles.signup_link}>
        Already an existing user?
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
