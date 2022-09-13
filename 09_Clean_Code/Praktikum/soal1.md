* Berapa Banyak kekurangan dalam kode berikut ?

    3

* Bagian mana saja terjadi kekurangan tersebut ?

    * Penulisan Class harus menggunakan Pascal Case

    `class User` `class UserService` `getAllUser` `getUserById`

    * setelah Class dapat menggunakan constructor dan this.properties

    ```
    class User {
    constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
    } 
    }
    ```
    * Pada class UserService lebih baik menggunakan extends

    ```
    class UserService extends User{
    constructor(id, username, password, users) {
        super(id, username, password)
        this.users = users
    }
    ```

* Tuliskan alasan dari kekurangan berikut!

    * Alasan Kenapa Herus Pascal Case karena mengikuti convention js
    * Dikarenakan dengan this dapat meng-attach contructor parameter pada class
    * Dikarenakan dengan extends kita dapat menurunkan User kepada UserService


