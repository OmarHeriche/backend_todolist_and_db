const notFound = (req, res) => {
  res.status(404).send(`<h1>page not found</h1>`);
};
module.exports=notFound;