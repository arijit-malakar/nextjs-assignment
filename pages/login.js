import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Login.module.css";
import Link from "next/link";

export const getStaticProps = () => {
  return {
    props: {
      headerStatus: true,
      footerStatus: true,
    },
  };
};

const LoginUser = () => {
  const [formdata, setFormdata] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  const router = useRouter();

  const loginUser = async () => {
    //const baseURL = process.env.BASE_URL;
    const url = "http://localhost:3000/" + "api/users/login";
    try {
      const response = await axios.post(url, formdata);
      if (response.data.userId) {
        setSubmitStatus(true);
        setInterval(() => {
          router.push("/products");
        }, 5000);
      }
    } catch {
      setSubmitStatus(false);
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
          Logged in successfully. Redirecting to products page in 5 seconds...
        </div>
      )}
      <h1>Login</h1>
      <div className={styles.txt_field}>
        <input type="text" name="email" onChange={handleChange} />
        <span></span>
        <label>Email</label>
      </div>
      <div className={styles.txt_field}>
        <input type="password" name="password" onChange={handleChange} />
        <span></span>
        <label>Password</label>
      </div>
      <button onClick={loginUser} className={styles.login_btn}>
        Login
      </button>
      <div className={styles.signup_link}>
        Not a member?
        <Link href="/register">Signup</Link>
      </div>
    </div>
  );
};

export default LoginUser;
