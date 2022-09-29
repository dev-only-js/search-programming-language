const baseUrl =
  "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev"; // 나중에 env로 빼면 좋을듯

const request = async (url) => {
  const res = await fetch(url);

  if (res.ok) {
    const json = await res.json();
    return json;
  }

  throw new Error("에러 발생!!");
};

export const fetchLaguages = (keyword) => {
  return request(`${baseUrl}/languages?keyword=${keyword}`);
};
