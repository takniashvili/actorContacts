// https://randomuser.me
const baseUrl =  'https://randomuser.me/api';
const baseUrlResult = `${baseUrl}/?results=10`;

const mainHtml = document.querySelector("main");

const getUrl = async () => {
  await axios
  .get(baseUrlResult)
  .then((response) => {
    const urlInfo = response.data.results;
    console.log(urlInfo);

    if (urlInfo && urlInfo.length > 0) {
        showElements(urlInfo);
      } else {
        mainHtml.innerHTML = `<h1 class="no-results">No Results Found</h1>`;
      }

  })
  .catch((error) => {
    console.error(`Error : ${error}`);
  });
};

const showElements = (urlInfo) => {
  mainHtml.innerHTML = urlInfo.map((gio) => {
     return `<main id="main">
   <div class="profile">
    <div class="imagebox">
    <img src="${gio.picture.large}" class="image">
    </div>
      <div class="info">
        <p class="distance1">${gio.name.first} ${gio.name.last} </p>
        <p> AGE: ${gio.dob.age} FROM: ${gio.location.country} </p>
        <p> PHONE: ${gio.phone} </p>
        <p> EMAIL: ${gio.email} </p>
      </div>
    </div>
  </main>`
  }).join(""); // Join the array to form a single string to set as innerHTML.
}

getUrl();
