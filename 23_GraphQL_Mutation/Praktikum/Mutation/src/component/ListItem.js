import { useState } from "react";
import "./Home.css"

const ListItem = (props) => {

    const { id, nama, umur, jenis_kelamin } = props.data

    const [edit,setEdit] = useState(false);
    const [data,setData] = useState({
        nama: nama,
        umur: umur,
        jenis_kelamin: jenis_kelamin,
        editing: true
    })

    const updateData = () => {
        const newData = {id, ...data}
        props.updatePengunjung(newData)
    }
    const handleTutupInput = () => {
        setData({
          ...data,
          editing: true,
        })
      }
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value})
    }

    return (
        <tr>
            <td>{edit ? <input type="text" name="nama" value={data.nama} onChange={handleChange} /> : nama}</td>
            <td>{edit ? <input type="number" name="umur" value={data.umur} onChange={handleChange} /> : umur}</td>
            <td>{edit ? (
            <select defaultValue={data.jenis_kelamin} name="jenis_kelamin" onChange={handleChange}>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
            </select>
           ) : (jenis_kelamin)}</td>
            <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
            <td className="removeBorder" onClick={() => setEdit(!edit)}>
                { edit ? 
                <div>
                    <button onClick={updateData}>Selesai</button> 
                    <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
                    Batal
                    </button>
                </div>
                : <button>Edit</button> }
            </td>
        </tr>
    )
}

export default ListItem;