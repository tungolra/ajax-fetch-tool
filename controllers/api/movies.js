const token = process.env.GITHUB_TOKEN;
const rootURL = "http://www.omdbapi.com";

async function index(req, res) {
  let titleInput = req.query.title;
  let requestTURL = `${rootURL}/?apikey=6ddd10d3&t=${titleInput}`;
//   let requestSURL = `${rootURL}/?apikey=6ddd10d3&s=${titleInput}`;
  let resultsT;
//   let resultsS;

  try {
    // await fetch(requestSURL).then((res) =>
    //   res.json().then((data) => (resultsS = data))
    // );
    await fetch(requestTURL).then((res) =>
      res.json().then((data) => (resultsT = data))
    );
  } catch (error) {
    console.log(error);
  }
//   let movieMatch;
//   if (resultsS.Response == "False" || resultsT.Response == "False") {
//     movieMatch = "";
//   } else {
//     movieMatch = resultsS.Search.find((r) => r.imdbID == resultsT.imdbID);
//   }
//   let promises = [];

//   if (resultsS.Response == "False") {
//     _;
//   } else {
//     resultsS.Search.forEach((movie) => {
//       promises.push(fetch(requestByIdURL + movie.imdbID));
//     });
//     return Promise.all(promises);
//   }
//   const awaitJson = (promise) =>
//     Promise.all(
//       promises.map((promise) => {
//         if (promise.ok) return promise.json();
//         throw new Error(promise.statusText);
//       })
//     );
//   console.log(promises);
  res.render("index", {
    title: "Movies with OMBd",
    resultsT,
    titleInput,
    // movieMatch,
  });
}

module.exports = {
  index,
};
