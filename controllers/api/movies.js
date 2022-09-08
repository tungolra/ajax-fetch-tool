const token = process.env.GITHUB_TOKEN;
const rootURL = "http://www.omdbapi.com";

async function index(req, res) {
  let titleInput = req.query.title;
  let requestTURL = `${rootURL}/?apikey=6ddd10d3&t=${titleInput}`;
  let resultsT;

  try {
    await fetch(requestTURL).then((res) =>
      res.json().then((data) => (resultsT = data))
    );
  } catch (error) {
    console.log(error);
  }
  res.render("index", {
    title: "Movies with OMBd",
    resultsT,
    titleInput,
  });
}

module.exports = {
  index,
};
