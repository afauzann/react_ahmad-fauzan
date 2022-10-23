import { useSubscription } from "@apollo/client";
import { SubscriptionPassenger } from "../config/typeDefs"

export default function useSubscribePassenger() {
    const {data, loading, error} = useSubscription(SubscriptionPassenger)
    return{
        data,
        loading,
        error,
    }
}