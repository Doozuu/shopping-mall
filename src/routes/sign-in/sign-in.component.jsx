import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../firebase/firebase.utills";
import SignUpForm from "../../ components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // 페이지 이동해서 로그인 진행하고 자동으로 원래 페이지로 돌아옴
  // 페이지를 이동하게 되면 정보들이 initialize 되기 때문에 pop up과는 다른 방식으로 처리 해야함
  // useEffect, getRedirectResult, auth 이용.
  useEffect(() => {
    async function getResult() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getResult();
  }, []);

  // 페이지 이동없이 팝업창으로 로그인 진행
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in With Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
