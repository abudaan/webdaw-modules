const status = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};

export const fetchJSON = (url: string): Promise<JSON> =>
  // fetch(url, {
  //   mode: 'no-cors'
  // })
  fetch(url)
    .then(status)
    .then(response => response.json());

export const fetchXML = (url: string): Promise<XMLDocument> =>
  fetch(url)
    .then(status)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"));

export const fetchArraybuffer = (url: string): Promise<ArrayBuffer> =>
  fetch(url)
    .then(status)
    .then(response => response.arrayBuffer());
