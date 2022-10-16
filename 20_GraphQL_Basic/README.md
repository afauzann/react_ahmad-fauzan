<center>

# Summary Basic GraphQL

</center>

## Pengertian GraphQL

GraphQL adalah bahasa query dan runtime sisi server untuk Application Programming Interfaces (API) yang memprioritaskan untuk memberi klien data sesuai dengan apa yang mereka minta. Pada intinya,  GraphQL merupakan bahasa untuk query database dari aplikasi sisi klien. Di backend, GraphQL dapat akan menspesifikasikan kepada API bagaimana data disajikan kepada klien.

## Karakteristik GraphQL

* Memungkinkan klien untuk menentukan data yang dibutuhkan secara spesifik.
* Mudah untuk mengumpulkan data dari berbagai sumber.
* Menggunakan GraphQL type system untuk menggambarkan data.

## Fitur GraphQL

* Query, get data 
* Mutation, insert, update, delete data
* Subscription, get update secara realtime

## Keuntungan Menggunakan GraphQL

* Tipe data akan terdefinisi dengan baik sehingga dapat mengurangi miskomunikasi antara klien dan server.
* Memungkinkan API aplikasi untuk berkembang tanpa memecah kueri yang ada.
* Memiliki banyak ekstensi yang bersifat open source sehingga beberapa fitur yang tidak tersedia dapat ditambahkan.
* Bersifat introspective. Klien dapat melakukan permintaan list tipe data yang tersedia sehingga sangat ideal untuk auto-generating documentation.
* Klien mendapat apa yang mereka minta tanpa over fetching atau menerima lebih banyak data dari yang dibutuhkan.

## Hasura dan Heroku

### Hasura

Hasura adalah servis provider graphql dan rest api. 
Full Managed on hasura cloud or self-hosted.

### Heroku

Heroku is a cloud platform as a service supporting several programming languanges.
Heroku also provide free postgres database