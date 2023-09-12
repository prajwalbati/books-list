import {ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import BookList from "./components/BookList";
import AddItemForm from './components/AddItemForm';

const client = new ApolloClient({
  uri: process.env.API_URL || "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading list</h1>
        <BookList />
        <AddItemForm />
      </div>
    </ApolloProvider>
  );
}

export default App;
