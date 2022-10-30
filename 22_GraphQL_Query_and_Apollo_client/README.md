<center>

# Summary GraphQL – Query and Apollo client

</center>

## Apa itu Apollo Client ?

Apollo Client adalah sebuah library Javascript untuk mempermudah menggunakan GraphlQL di sisi Frontend. 

## Fitur

* State Management
* Pagination
* Caching
* Error handling

## Install Apollo

`npm install @apollo/client graphql`

## Query with Apollo

1. import gql and useQuarry then write your query
2. Get initial data by doing query on the server
3. Consume data in your jsx code

## LazyQuery

When React renders a component that calls `useQuery`, Apollo Client automatically executes the corresponding query. But what if you want to execute a query in response to a different event, such as a user clicking a button?

The `useLazyQuery` hook is perfect for executing queries in response to events besides component rendering. Unlike with `useQuery`, when you call `useLazyQuery`, it does not immediately execute its associated query. Instead, it returns a query function in its result tuple that you call whenever you're ready to execute the query.

## Refetching

Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval.

Let's add a button to our `DogPhoto` component that calls our query's `refetch` function whenever it's clicked.

You can optionally provide a new `variables` object to the `refetch` function. If you avoid passing a `variables` object and use only `refetch()`, the query uses the same `variables` that it used in its previous execution.