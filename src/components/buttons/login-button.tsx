"use client";

const LoginButton = () => {
  function handleKakaoLogin() {
    window.Kakao.Auth.authorize({
      // [TODO] redirect to backend
      redirectUri: "http://localhost:8080/login/oauth2/code/kakao",
    });
  }

  return (
    <button type="button" onClick={() => handleKakaoLogin()}>
      login with kakao
    </button>
  );
};

export default LoginButton;
