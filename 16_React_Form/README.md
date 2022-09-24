<center>

# Summary React Form

</center>

## Basic Form

### Penerapan

Form dapat digunakan untuk menghandle inputan dari user.
Form banyak dijumpai pada saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya.

### Type Elemen Input

* text(default)
* button
* color
* checkbox
* date
* datetime-local
* email 
* file
* hidden
* image
* month
* number
* password
* radio
* range
* reset
* search
* submit
* tel
* time
* url
* week

## Controlled Component

### Pengertian

Controlled Component adalah Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti berikut.

Pertama kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. 
Kemudian Komponen React yang merender sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada inputan pengguna selanjutnya.

## Uncontrolled Component

### Pengertian

Uncontrolled Component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan `useRef` untuk mendapatkan nilai form dari DOM

## Element Controlled Component

Element | Value Property | Change Callback | New Value in Callback
---------|----------|--------- |---------| 
 `<input type="text"/>` | value="string" | onChange | event.target.value
 `<input type="checkbox"/>` | checked={boolean} | onChange | event.target.checked
 `<input type="radio"/>`| checked={boolean} | onChange | event.target.checked
 `<textarea/>` | value="string" | onChange | event.target.value
 `<select/> `| value="option value" | onChange | event.target.value

 ## Uncontrolled vs Controlled
 
Fitur | unControlled | Controlled
---------|:----:|:----:
 one-time value retrievel (on submit) | :heavy_check_mark:| :heavy_check_mark:
 validating on submit | :heavy_check_mark: | :heavy_check_mark:
 instant field validation | :x: | :heavy_check_mark:
 conditionally disabling submit button | :x: | :heavy_check_mark:
 enforcing input format | :x:| :heavy_check_mark:
 several inputs for one piece of data | :x: | :heavy_check_mark:
 dynamic inputs | :x: | :heavy_check_mark:

## Basic Validation

### Kenapa Perlu Validasi?

* Mencari input data yang benar dan sesuai format
* Melindungi akun pengguna
* Melindungi sistem atau aplikasi

### Tipe Validasi

1. Client-Side Validation

    Validasi yang dilakukan pada sisi client(browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server

    Client-Side Validation dibagi dua yaitu:
    * Built-in form validation (HTML 5)

        Contohnya: required, minlenght, maxlenght, min, max, type, dan patten
    * Menggunakan Javascript

        Contohnya: onChange, onSubmit

    Client-Side Validation bersifat User Friendly


2. Server-Side Validation

    Validasi yang dilakukan pada sisi server. Sisi Server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat pengguna.

    Server-Side Validation bersifat tidak User Friendly

