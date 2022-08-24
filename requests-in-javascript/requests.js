const axios = require("axios");

//-------print out the entire array of constellations-------------
const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });


//----print out an array of only those constellations where the starsWithPlanets value is less than 10------
// const url = "http://localhost:5000/constellations";
// axios
//   .get(url)
//   .then((response) => {
//     const final = response.data.filter((constellation) => {
//       return constellation.starsWithPlanets < 10;
//     });
//     console.log(final);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });


//--------Create a new constellation on the server. Take note of the returning 'id'
// const url = "http://localhost:5000/constellations";
// axios
//   .post(url, {
//     name: "Ara",
//     meaning: "Altar",
//     starsWithPlanets: 7,
//     quadrant: "SQ3",
//   })
//   .then((response) => {
//     console.log(response.data);
//   });


//------delete the recently input constellation. REMEMBER TO CHANGE THE URL TO THE NEW 'ID'
// const url = "http://localhost:5000/constellations/-easbJ0";
// axios
//   .delete(url)
//   .then((response) => {
//     console.log(response.data)
//   })
//   .catch((error) => console.log(error.message));