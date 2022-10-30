<center>

# Summary Mutataion

</center>

## Mutation

Mutation is basically functionality to update, insert, delete data. We need to define what operation that we want to do (based on available operation on your graphl server) and then define what data GraphQL need return.

```
mutation MyMutation
($jenis_kelamin: String!, $nama: String!, $umur: numeric!) {
    insert_user_one(object: 
    {
        jenis_kelamin: $jenis_kelamin, 
        nama: $nama, 
        umur: $umur
    }) {
        id
    }
  }
```    

## Mutation with Apollo CLient

1. Import `useMutation` hooks from apollo client and define mutation
2. Invoke `useMutation` and using array destruction define mutation handler (insertTodo) and use it.

    `refetchQueries`: An array (or a function that returns an array) that spesifies which queries you want to refetch after the mutation occurs.

3. Call insertTodo with variables

## Mutation Update Data

1. Define update query
2. Create Mutation handler for update todo
3. Call update query

## Mutation Delete Data

1. Define delete query
2. Create Mutation handler for delete todo
3. Call delete query