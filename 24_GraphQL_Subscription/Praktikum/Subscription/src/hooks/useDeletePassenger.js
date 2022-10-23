import { useMutation } from "@apollo/client";
import { DeletePassenger, GetListPassenger } from "../config/typeDefs"

export default function useDeletePassenger() {
    const [deletePassenger,{loading: loadingDelete}] = useMutation(DeletePassenger, {
        refetchQueries: [GetListPassenger]
    })
    return{
        deletePassenger,
        loadingDelete,
    }
}