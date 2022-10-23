<center>

# Summary Subscription

</center>

## Subscription

A GraphQL subscription is essentially a query where the client receives an update whenever the value of any field changes upstream.

Subscriptions are supported for all kinds of queries. All the concepts of queries hold true for subscriptions as well.

## Example

```
subscription MySubscription {
  user {
    id
    nama
    umur
    jenis_kelamin
  }
}
```

## Setting Subscription

1. install subcriptions-transport-ws to enable websocket-connection

    `npm install subscriptions-transport-ws`
2. Import all needed modules and separate between http and websocket link
3. Split communication by operation (recommended)
4. Provide the link chain to Apollo Client
5. Authenticate over WebSocket (optional)

## Using useSubscribtion

1. Import `useSubscription` from apollo client and define subscription
2. Invoke subcription and consume data

## subscribeToMore

The `subscribeToMore` function is similar in structure to the fetchMore function that's commonly used for handling pagination. The primary difference is that fetchMore executes a followup query, whereas subscribeToMore executes a subscription.
