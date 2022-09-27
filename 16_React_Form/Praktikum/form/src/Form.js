import React, { useState, useRef } from 'react';
import './Form.css';

function Form() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
    fotoSurat: ""
  }

  const initialErrorMsgs = {
    nama: "",
    email: "",
    noHandphone: ""
  }

  const [data, setData] = useState(baseData);
  const [errorMsgs, setErrorMsgs] = useState(initialErrorMsgs);
  const regexName = /^[A-Za-z ]*$/;
  const regexEmail =  /^\w+([\].-]?\w+)*@\w+([\].-]?\w+)*(\.\w{2,3})+$/;
  const regexPhone = /^[\d-]{9,14}$/;
  const fotoSurat = useRef(null)

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
        ...data,
        [name]: value
    })
    
    if (name === "nama") {
    if (regexName.test(value)) {
      setErrorMsgs({
        ...errorMsgs,
        nama: ""})
    } else {
      setErrorMsgs({
        ...errorMsgs,
        nama: "Nama Lengkap Harus Berupa Huruf"})
    }
  }
  if (name === "email") {
    if (regexEmail.test(value)) {
      setErrorMsgs({
        ...errorMsgs,
        email: ""})
    } else {
      setErrorMsgs({
        ...errorMsgs,
        email: "Email Tidak Sesuai"})
    }
  }
  if (name === "noHandphone") {
    if (regexPhone.test(value)) {
      setErrorMsgs({
        ...errorMsgs,
        noHandphone: ""})
    } else {
      setErrorMsgs({
        ...errorMsgs,
        noHandphone: "Nomor Handphone Tidak Sesuai"})
    }
  }
}

  const handleSubmit = (e) => {
    if (!errorMsgs.nama && !errorMsgs.email && !errorMsgs.noHandphone) {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
    } else {
      alert("Data Pendaftar Tidak Sesuai")
    }
    resetData()
    e.preventDefault()
  }

  const resetData = () => {
    setData(baseData);
    setErrorMsgs(initialErrorMsgs);
    fotoSurat.current.value = "";
  }

  return (
    <div className='form'>
      <h1 style={{textAlign:"center"}}>Pendaftaran Peserta Coding Bootcamp</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Lengkap:
          <input
            type="text"
            name="nama"
            required
            onChange={handleInput}
            value={data.nama}
            className="input"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            onChange={handleInput}
            value={data.email}
            className="input"
          />
        </label>
        <label>
          No Handphone:
          <input
            type="number"
            name="noHandphone"
            required
            onChange={handleInput}
            value={data.noHandphone}
            className="input"
          />
        </label>
        <label>
          Latar Belakang Pendidikan:
        </label>
          <span className="input">
            <label>
              <input 
              type="radio"
              name="pendidikan"
              required
              value={data.pendidikan}
              onChange={handleInput}
              />
              IT
            </label>
            <label>
              <input
              type="radio"
              name="pendidikan"
              required
              value={data.pendidikan}
              onChange={handleInput}
              />
              Non IT
            </label>
          </span>
        <label>
          Kelas Coding yang Dipilih:
          <select 
            className="select" 
            name="kelas" 
            value={data.kelas}
            required 
            onChange={handleInput}>
            <option  value="">Pilih Salah Satu Program</option>
            <option  value="golang">Coding Backend with Golang</option>
            <option  value="react">Coding Frontend with ReactJS</option>
            <option  value="full">Fullstack Developer</option>
          </select>
        </label>
        <label>
          Foto Surat Kesungguhan:
          <input
            type="file"
            ref={fotoSurat}
            required
            className="file"
          />
        </label>
        <label >
          Harapan Untuk Coding Bootcamp Ini:
          <textarea className="textarea" name="harapan" value={data.harapan} onChange={handleInput}/>
        </label>
        <span className="error-message">
          <li>{errorMsgs.nama}</li>
          <li>{errorMsgs.email}</li>
          <li>{errorMsgs.noHandphone}</li>
        </span>
        <input type="submit" className="submit"/>
        <button onClick={resetData} className="reset">Reset</button>
      </form>
    </div>
  );
}


export default Form;
