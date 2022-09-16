<center>

# Summary Event Handling

</center>

## State

### Pengertian State

    State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain

### Karakteristik State

* Data yang bisa dimodifikasi menggunakan setState
* Setiap terjadi modifikasi akan terjadi render ulang
* Bersifat Asynchronous
* Dipakai dalam class

### Props vs State

Props | State | 
---------|----------|
 props are read-only | state changes can be asynchronous | 
 props can nit be modified | state can be modified using this.setState | 

## Stateful & Stateless Component

### Pengertian

* Stateful Component adalah memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle.

* Stateless Component adalah tidak memiliki state hanya prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas

### Perbedaan


Statekess | Stateful |
---------|----------|
 Tidak tahu tentang aplikasi | Mengerti tentang aplikasi | 
 Tidak melakukan data fetching (pengambilan data) | Melakukan data fetching (pengambilan data) | 
 Tujuan utamanya adalah visualisasi | Berinteraksi dengan aplikasi |
 Dapat digunakan kembali | Tidak dapat digunakan kembali |
 Hanya berkomunikasi dengan induk langsungnya | Meneruskan status dan data ke anak-anaknya |

## Handling Event

### Pengertian

* Handling Event adalah suatu metode untuk menangani sebuah event / aksi yang diberikan penggunakan kepada suatu komponen

* Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan

### Contoh List Event

* Clipboard Event 
    * Promise terpenuhi
* Form Event
    * onChange, onSubmit
* Mouse Event
    * onClick, onDoubleClick, onMouseOver
* Generic Event
    * onError, onLoad

