<center>

# Summary React Routing

</center>

## Router

    Router merupakan modul Dalam React yang berfungsi untuk melakukan proses navigasi pada Single Page Application atau SPA.

## MPA dan SPA

### Pengertian

* Multi Page Application ( MPA )

    * MPA adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru
    
* Single Page Application ( SPA )    

    * SPA adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut

### Kelebihan dan Kekurangan

#### **Kelebihan**

SPA | MPA |
---------|----------|
 Waktu loading website jauh lebih cepat | SEO website akan lebih mudah dioptimasi | 
 Tidak ada query tambahan ke server | Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda | 
 Front-end yang cepat dan responsif | Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website | 
 Meningkatkan pengalaman pengguna (user experience) |  |

 #### **Kekurangan**

SPA | MPA | 
---------|----------|
 Tidak bagus dalam hal SEO | Kecepatan download website jauh lebih lama jika dibandingkan dengan SPA | 
 Berat saat di load pertama kali | Perlu mengintegrasikan antara front-end dan back-end | 
 Kurang aman dibanding dengan Website biasa | Lebih sering membutuhkan maintenance | 
 Masalah kompatibilitas browser | Mungkin akan lebih sering menemukan masalah performa pada website |

## React Router

### Cara Install 

`npm install react-router-dom`

### Jenis React Router

* BrowserRouter
* Route
* Switch
* Link

## Parameter URL

    Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.

`this.props.match.params`

## Link vs Redirect

Link | Redirect |
---------|----------|
 Dapat digunakan pada kondisi apapun | Lebih sering digunakan pada halaman 404 | 
 Memberikan history baru pada browser | Menimpa history pada browser | 
 Bereaksi dengan click seperti `a href` | Bereaksi dengan suatu kondisi | 

## Hook Routing React

 ### useHistory

    useHistory memberi kita akses ke instance riwayat yang dapat digunakan untuk bernavigasi

Contohnya:

Property | Kegunaan |
---------|----------|
 lenght | (angka) jumlah entri dalam tumpukan riwayat | 
 go | (fungsi) Memindahkan penunjuk di tumpukan riwayat sebanyak n entri | 
 goBack | (fungsi) Setara dengan go(-1) |
 goForward | (fungsi) Setara dengan go(1) |
 push | (fungsi) Mendorong entri baru ke tumpukan riwayat |
 replace | (fungsi) Mengganti entri saat di tumpukan riwayat |

 ### useParams

    useParams mengembalikan objek pasangan kunci/nilai parameter URL.
    Gunakan untuk mengakses match params dari <Route> saat ini.

### useRouteMatch

    useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>.
    Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>