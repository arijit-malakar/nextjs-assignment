import Link from "next/link";
import React from "react";
import styles from "../styles/Register.module.css";

export const getStaticProps = () => {
    return {
      props: {
        headerStatus: true,
        footerStatus: true
      }
    }
};

const Register = () => {
    return (
      <div className={styles.center}>
        <h1>Register</h1>
        <form method="post">
          <div className={styles.txt_field}>
            <input type="text" required />
            <span></span>
            <label>Please enter an email to continue</label>
          </div>
          <div className={styles.txt_field}>
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" className={styles.login_btn} value="Register" />
          <div className={styles.signup_link}>
            Already an existing user?
            <Link href="/login">Login</Link>
          </div>
        </form>
      </div>
    );
}

export default Register;