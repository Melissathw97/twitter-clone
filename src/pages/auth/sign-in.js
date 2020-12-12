import React, { useState } from 'react';
import styleClasses from '../../styles/auth.module.scss';
import { useAuth } from '../../utils/Firebase/auth';
import AuthForm from '../../components/forms/authForm';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const SignIn = () => {

  const { userSignIn } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = ({ email, password }) => {
    setIsSubmitting(true);
    userSignIn(email, password)
      .then(res => {
        if (res.code === "successfully-signed-in") {
          console.log("Signed in!")
        }

        if (res.code === "auth/user-not-found") {
          console.log("Your e-mail does not match any account in our records. Please sign up as a new user.")
        }

        if (res.code === "auth/wrong-password") {
          console.log("E-mail and password do not match")
        }
        setIsSubmitting(false);
      })
  };

  return (
    <div className={styleClasses.page}>
      <div className={styleClasses.formWrapper}>
        <img
          src="assets/images/flitter-logo.png"
          alt="Flitter logo"
          className={styleClasses.logo}
        />
        <h2 className={styleClasses.title}>
          Sign in to Flitter
        </h2>
        <AuthForm
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
        <Link
          to={routes.SIGN_UP}
          className={styleClasses.link}
        >
          New to Flitter? Sign up!
        </Link>
      </div>
    </div>
  );
}

export default SignIn;