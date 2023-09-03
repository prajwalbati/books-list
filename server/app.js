const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const schema = require("./schema/schema");

const app = express();

app.use('/graphql', graphqlHTTP({
    schema
}));

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server listening in the port: ${PORT}`)
});
