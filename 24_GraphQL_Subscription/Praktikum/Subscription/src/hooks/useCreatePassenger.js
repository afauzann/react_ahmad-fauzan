import { useMutation } from "@apollo/client";
import { CreatePassenger, GetListPassenger } from "../config/typeDefs"

export default function useCreatePassenger() {
    const [createPassenger,{loading: loadingCreate}] = useMutation(CreatePassenger, {
        refetchQueries: [GetListPassenger]
    })
    return{
        createPassenger,
        loadingCreate,
    }
}