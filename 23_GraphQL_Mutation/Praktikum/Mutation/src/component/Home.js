import { useState } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GetListPassenger, UpdatePassenger, DeletePassenger, CreatePassenger, GetListPassengerById } from "../config/typeDefs"
import Header from './Header';
import Loading from "./Loading";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';

function Home () {
    const [getPassenger,{data: dataId, loading: loadingId, error: errorId}] = useLazyQuery(GetListPassengerById)
    const {data, loading, error} = useQuery(GetListPassenger)
    const [updatePassenger,{loading: loadingUpdate}] = useMutation(UpdatePassenger, {
        refetchQueries: [GetListPassenger]
    })
    const [deletePassenger,{loading: loadingDelete}] = useMutation(DeletePassenger, {
        refetchQueries: [GetListPassenger]
    })
    const [createPassenger,{loading: loadingCreate}] = useMutation(CreatePassenger, {
        refetchQueries: [GetListPassenger]
    })
    const [passengerId, setPassengerId] = useState('')
    const [list, setList] = useState([]);


    if(loading || loadingUpdate || loadingDelete || loadingCreate  || loadingId) {
        return <Loading/>
    }

    if(error) {
        console.log(error || errorId)
        return null
    }
    
    const hapusPengunjung = (idx) => {
       deletePassenger({variables: {
        id: idx
    }})
    };
    
    const tambahPengunjung = (newData) => {
        createPassenger({variables: newData})
    };

    const updatePengunjung = (newPassenger) => {
        updatePassenger({variables: newPassenger
        })
    }
    
    const onGetData = () => {
        getPassenger({variables: {
            nama: passengerId
        }}
        );
        setList(data?.user);
    }
    
    const onChangePassengerId = (e) => {
        if(e.target) {
            setPassengerId(e.target.value)
        }
    }
    
        return (
            <div>
                <Header/>
                <ListPassenger 
                    data={data}
                    hapusPengunjung={hapusPengunjung}
                    updatePengunjung={updatePengunjung}
                />
                <PassengerInput
                    tambahPengunjung={tambahPengunjung}
                />
                <p>
                    <input placeholder="Cari Nama Anda..." value={passengerId} onChange={onChangePassengerId}/>
                    <button onClick={onGetData}>Cari</button>
                </p>
                <p>
                    <ListPassenger 
                        data={dataId}
                        hapusPengunjung={hapusPengunjung}
                        updatePengunjung={updatePengunjung}
                />    
                </p>
            </div>
        )
    }
   
export default Home;