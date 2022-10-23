import { useMutation } from "@apollo/client";
import { UpdatePassenger, GetListPassenger } from "../config/typeDefs"

export default function useUpdatePassenger() {
    const [updatePassenger,{loading: loadingUpdate}] = useMutation(UpdatePassenger, {
        refetchQueries: [GetListPassenger]
    })
    return{
        updatePassenger,
        loadingUpdate,
    }
}