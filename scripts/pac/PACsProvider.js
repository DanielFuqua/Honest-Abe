let pac = [];

export const usePACs = () => pac.slice();

export const getPACs = () =>
  fetch("http://localhost:8088/pacs")
    .then((res) => res.json())
    .then((data) => (pac = data));
