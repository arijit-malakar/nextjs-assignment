import Link from "next/link";
import React from "react";
import styles from "../styles/Login.module.css";

export const getStaticProps = () => {
  return {
    props: {
      headerStatus: true,
      footerStatus: true
    }
  }
};

const LoginUser = () => {
  return (
    <div className={styles.center}>
      <h1>Login</h1>
      <form method="post">
        <div className={styles.txt_field}>
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className={styles.txt_field}>
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className={styles.pass}>Forgot Password?</div>
        <input type="submit" className={styles.login_btn} value="Login" />
        <div className={styles.signup_link}>
          Not a member?
          <Link href="/register">Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
