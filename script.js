const URL_API = "http://localhost:8080";

const getDataBy = url => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  console.log(xhr.readyState);

  xhr.addEventListener('readystatechange', (...args) => {
    if (xhr.readyState !== 4) return;

    console.log(xhr.readyState);
    
    let contentType = xhr.getResponseHeader('Content-Type');

    console.log(xhr.readyState);
    console.log(xhr.responseText);

    if (xhr.status === 200) {
      let users = JSON.parse(xhr.responseText);

      console.log(users);
      console.log(JSON.stringify(users));

    };
  });
};

getDataBy(URL_API);













