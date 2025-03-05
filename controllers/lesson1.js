
const brunoRoute = (req, res) => {
    res.send("Bruno Santos");
};

const nicolasRoute = (req, res) => {
    res.send("Nicolas meu filho");
};

const richardRoute = (req, res) => {

    res.send("Richard Alves");
};
module.exports = {
    brunoRoute,
    nicolasRoute,
    richardRoute
};