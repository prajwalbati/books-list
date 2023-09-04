const graphql = require('graphql');

const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLString } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // code to get data from data source
                return {name: 'Sample', genre: 'test', id: '1'};
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return { id: '1', name: 'Prajwal Bati', age: '25'};
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
