export const API_END_POINT =
  "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
  const res = await fetch(url);

  if (res.ok) {
    const json = await res.json();
    console.log(json);
    return json;
  }

  throw new Error("요청에 실패함");
};

export const fetchLanguage = async (keyword) => {
  return request(`${API_END_POINT}/languages?keyword=${keyword}`); // return 이 없었지만 return 을 추가해 줌으로 값을 더해준다.
};

// 재사용성을 고려하여 fetch 를 호출하는 request 함수를 별도로 정의하고,
// 이 함수를 이용하여 언어를 조회하는 함수인 fetchLanguage를 선언합니다
