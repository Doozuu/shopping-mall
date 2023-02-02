import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../firebase/firebase.utills";
import SignUpForm from "../../ components/sign-up-form/sign-up-form.component";
import SignInForm from "../../ components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  // 페이지 이동해서 로그인 진행하고 자동으로 원래 페이지로 돌아옴
  // 페이지를 이동하게 되면 정보들이 initialize 되기 때문에 pop up과는 다른 방식으로 처리 해야함
  // useEffect, getRedirectResult, auth 이용.
  // useEffect(() => {
  //   async function getResult() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   getResult();
  // }, []);

  //   <button onClick={signInWithGoogleRedirect}>
  //   Sign in With Google Redirect
  // </button>

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
