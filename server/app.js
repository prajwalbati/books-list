require('dotenv').config()
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require("./schema/schema");

const app = express();
app.use(cors());

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log("Connected to database");
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on the port: ${PORT}`);
    console.log(`Go to url for api documentation: http://localhost:${PORT}/graphql`);
});
