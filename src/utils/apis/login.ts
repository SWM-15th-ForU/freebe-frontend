import { nextFetch } from "./core";

// async function getPhotographerKakaoLogin() {
//   const response = await nextFetch("/oauth2/authorization/kakao", {
//     method: "GET",
//     mode: "no-cors",
//   });
//   return response;
// }

async function postPhotographerKakaoLogin(userType: string) {
  const requestBody = {
    userType,
  };
  const response = await nextFetch("/api/login", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  return response;
}

export async function loginKakao(userType: string) {
  const response = await postPhotographerKakaoLogin(userType);
  console.dir(response);
  return response;
}
