import { useState } from "react";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import Loading from "./Loading";

const GetListPassenger = gql`
    query MyQuery {
        user {
        id
        nama
        umur
        jenis_kelamin
        }
    }
  `
const GetListPassengerById = gql`
    query MyQuery($id: Int!) {
        user(where: {id: {_eq: $id}}) {
        nama
        umur
        jenis_kelamin
        }
    }
  `

function Home () {
    const [getPassenger,{data, loading, error}] = useLazyQuery(GetListPassengerById)
    // const {data, loading, error} = useQuery(GetListPassenger)
    const [passengerId, setPassengerId] = useState(0)
    const [list, setList] = useState([]);
    // const [data, setData] = useState(initialValue);
    if(loading) {
        return <Loading/>
    }

    if(error) {
        console.log(error)
        return null
    }
    
    /* const hapusPengunjung = id => {
        setData((oldData) => oldData.filter(item => {        
            return item.id !== id;
        }))
    };
    
    const tambahPengunjung = newUser => {
        const newData = {
            id: uuidv4(),
            ...newUser
        }; 
        setData((oldData) => [...oldData, newData]);
    };*/
    
    const onGetData = () => {
        getPassenger({variables: {
            id:passengerId
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
                <input value={passengerId} onChange={onChangePassengerId}/>
                <button onClick={onGetData}>Get Data</button>
                <ListPassenger 
                    data={data}
                    // hapusPengunjung={hapusPengunjung}
                />
                <PassengerInput
                   //  tambahPengunjung={tambahPengunjung}
                />
            </div>
        )
    }

export default Home;