import {
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
  createHttpLink,
} from "@apollo/client";
import ApolloConfig from "../config/apollo-config";
import fetch from "cross-fetch";

function errorHandler(object) {
  console.log(object);
  return (object.graphQLErrors)?object.graphQLErrors.length != 0
    ? object.graphQLErrors[0].message
    : object.networkError && object.networkError.result
    ? object.networkError.result.errors.join(" ; ")
    : object.networkError
    ? object.networkError[Object.keys(object.networkError)[0]].toString()
    : object.graphQLError.toString()
    : "Fetch failed";
}

function initApollo(token) {
  const httpLink = createHttpLink({
    uri: ApolloConfig.graphql_uri,
    fetch: fetch,
    headers:
      token != ""
        ? {
            Authorization: `Bearer ${token}`,
          }
        : null,
  });
  return new ApolloClient({
    ssrMode: false,
    cache: new InMemoryCache({
      addTypename: false,
    }),
    link: httpLink,
  });
}

async function query(query, token = "", variables = {}, cache = false) {
  const client = initApollo(token);
  var res;
  try {
    var sql = await client.query({
      query: gql`
        ${query}
      `,
      variables: variables,
      fetchPolicy: cache ? "cache-first" : "no-cache",
    });
    res = { STATUS: 1, DATA: sql.data };
  } catch (e) {
    res = { STATUS: 0, DATA: errorHandler(e) };
  }
  return res;
}

async function mutation(mutation, token = "", variables = {}) {
  const client = initApollo(token);
  var res;
  try {
    var sql = await client.mutate({
      mutation: gql`
        ${mutation}
      `,
      variables: variables,
    });
    res = { STATUS: 1, DATA: sql.data };
  } catch (e) {
    console.log(e.networkError.result);
    res = { STATUS: 0, DATA: errorHandler(e) };
  }
  return res;
}

module.exports = {
  query: query,
  mutation: mutation,
};
