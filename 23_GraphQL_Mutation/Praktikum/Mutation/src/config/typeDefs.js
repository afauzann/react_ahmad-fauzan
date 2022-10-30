import { gql } from "@apollo/client";

export const GetListPassenger = gql`
    query MyQuery {
        user {
        id
        nama
        umur
        jenis_kelamin
        }
    }
  `
export const GetListPassengerById = gql`
    query MyQuery($nama: String!) {
      user(where: {nama: {_eq: $nama}}) {
      id
      nama
      umur
      jenis_kelamin
      }
    }
  `
export const UpdatePassenger = gql`
    mutation MyMutation($id: Int!, $jenis_kelamin: String, $nama: String, $umur: numeric) {
        update_user_by_pk(pk_columns: {id: $id}, _set: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
        id
        jenis_kelamin
        nama
        umur
        }
    }
`
export const DeletePassenger = gql`
    mutation MyMutation($id: Int!) {
        delete_user_by_pk(id: $id) {
        id
        }
    }
`
export const CreatePassenger = gql`
mutation MyMutation($jenis_kelamin: String!, $nama: String!, $umur: numeric!) {
    insert_user_one(object: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
      id
    }
  }
  
`