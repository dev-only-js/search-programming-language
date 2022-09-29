const API_END_POINT = `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev`;

const request = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error("요청에 실패했습니다.");
};

export const Fetch = async (input) =>
  request(`${API_END_POINT}/languages?keyword=${input}`).catch((Error) =>
    console.log(Error.message)
  );
