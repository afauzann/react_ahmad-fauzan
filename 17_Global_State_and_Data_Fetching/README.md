<center>

# Summary Global State & Data Fetching

</center>

## Redux

### Kapan menggunakan Redux?

* Banyak state yang perlu ditaruh dibanyak tempat
* State pada app sering berubah
* Logic untuk mengubah state kompleks
* Ukuran codebase yang sedang hingga besar, dan dikerjakan oleh banyak orang
* Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

### Redux Libraries dan Tools

* React-Redux
* Redux Toolkit
* Redux DevTools Extension

### Komponen Penting di Redux

* Action

    Digunakan untuk memberikan informasi dari aplikasi ke store

* Reducer

    Pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru

* Store

    Objek sentral yang menyimpan state pada aplikasi 

### Memakai dan mengubah state

* Hooks
* Connect

    * `mapStateToProps?: Function`
    * `mapDispatchToProps?: Function | Object`
    * `mergeProps?: Function`
    * `options?: Object`

### Kesimpulan Tentang Redux

* Redux adalah library untuk manajemen state global
* Redux menggunakan struktur "one-way data flow"
* Redux menggunakan beberapa tipe code

## Redux Thunk

### Thunk Middleware

Thunks Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action

### Kenapa Perlu?

Untuk menghandle side effect logic seperti logic sync kompleks yang perlu mengakses store dan juga logic async seperti request data

### Install Redux Thunk dan Redux Persist

`npm i redux-thunk`

`npm i redux-persist`

## Hasura

### Apa itu

Hasura  adalah sebuah server GraphQL ultra-cepat yang menyediakan API GraphQL instan dan real-time diatas Postgres, dengan pemicu webhook pada event basis data, dan skema jarak jauh untuk mengimplementasi logika bisnis.

### Create REST API at Hasura

* Create
* Read
* Update
* Delete

## Postman

### Apa itu

Postman adalah sebuah aplikasi yang berfungsi sebagai REST CLIENT untuk uji coba REST API. Postman biasa digunakan oleh developer pembuat API sebagai tools untuk menguji API yang telah mereka buat.

### Kenapa menggunakan Postman

* Mudah untuk collab dengan auto sync dengan anggota lain
* Simple UI
* Postman gratis untuk 3 member dan unlimited collection

## React REST API

### Install Axios

`npm install axios`

