var API_HOSTNAME = "http://localhost:8080";
export const controller = new AbortController();

const getHeaders = (extra) => {
  let headers = {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  if (typeof localStorage !== "undefined") {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      headers["X-Access-Token"] = localUser.token;
    }
  }
  headers = { ...headers, ...extra };
  return headers;
};

const API = (
  endpoint,
  method = "GET",
  body = undefined,
  extraHeaders = {},
  appendHostname = true,
  abort = false
) =>
  new Promise((resolve, reject) => {
    let signal = null;
    if (abort === true) signal = controller.signal;
    try {
      const headers = getHeaders(extraHeaders);
      const url = appendHostname ? `${API_HOSTNAME}${endpoint}` : endpoint;
      fetch(url, {
        method,
        headers,
        signal,
        body: JSON.stringify(body),
      })
        .then((r) => r.json())
        .then((res) => {
          // console.log("RES.API:", endpoint, res);
          return resolve(res);
        })
        .catch((err) => {
          // console.log("ERR.API: ", err);
          return reject(err);
        });
    } catch (err) {
      // console.log('ERR.API.CATCH:', err);
      return reject(err);
    }
  });

export default API;
