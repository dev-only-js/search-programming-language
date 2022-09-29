/// api 를 받아야 함 그러나 재사용성을 높이기 위해 url을 통해 fetch하는 로직 따로 만들고 url을 관리한다

const baseUrl =
  "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev"; // 나중에 env로 빼면 좋을듯

const request = async (url) => {
  const res = await fetch(url);

  if (res.ok) {
    const json = await res.json();
    return json;
  }

  throw new Error("문제 발생!!");
};

export const fetchLanguages = (keyword) => {
  return request(`${baseUrl}/languages?keyword=${keyword}`);
};

// const request = async (url) => {
//   const res = await fetch(url); // url을 통해 fetch한 값을 받아냄

//   if (res.ok) {
//     const json = res.json();
//     return json; // json을 리턴해야함
//   }

//   throw new Error("answp qkftod!!!"); // error 발생시 에러 처리 throw new Error
// };

// export const fetchLanguages = async (keyword) => {
//   return request(`${baseUrl}/languages?keyword=${keyword}`); //return 을 추가해 주어야 한다. 그래야 바로 사용가능
// };

// export const API_END_POINT =
//   "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev"; // 해당 api를 저장합니다.

// const request = async (url) => {
//   const res = await fetch(url); // fetch로 받은 url을 통해 받은 return 값을 저장합니다.

//   if (res.ok) {
//     const json = await res.json();
//     return json;
//   }

//   throw new Error("요청에 실패함");
// };

// export const fetchLanguages = async (keyword) => {
//   return request(`${API_END_POINT}/languages?keyword=${keyword}`); // return 이 없었지만 return 을 추가해 줌으로 값을 더해준다.
// };

// 재사용성을 고려하여 fetch 를 호출하는 request 함수를 별도로 정의하고,
// 이 함수를 이용하여 언어를 조회하는 함수인 fetchLanguage를 선언합니다
