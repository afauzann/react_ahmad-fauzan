<center>

# Summary React Fundamental

</center>

## JSX

* Apa itu JSX ?

    JSX yaitu singkatan dari Javascript XML dan juga dia adalah ektentensi pada javascript

* Kenapa JSX ?

    * JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI.

## Komponen dan Props pada React

* Apa itu Komponen ?

    * Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behaviour, dan state sebagain UI

* Komposisi Komponen

    * Kontainmen
    * Specialisasi

* Apa itu Props ?

    * Singkatan dari properties, membuat kita dapat memberikan argumen atau data pada component.
    * Props membantu untuk membuat komponen menjadi lebih dinamis.
    * Props dioper ke component sama seperti memberikan atribut pada tag HTML
    * Props pada component adalah read-only dan tidak dapat diubah.

## React Lifecycle

Lifecyle method yang umum
* render()
* componentDidMount()
* componentDidUpdate()
* componentWillUnmount()

Lifecycle method yang lain
* shouldComponentUpdate()
* static getDerivedStateFromProps()
* getSnapshotBeforeUpdate()


## Render Bersyarat, Render List, dan Key

* Render Bersyarat

    * Pada React, Kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, Kita dapat me-render hanya beberapa bagian saja, berdasarkan sate dari aplikasi kita.

        * Menggunakan if
        * Inline if dengan operator && 
        * Inline if-else dengan ternary conditional operator
        * Mencegah komponen untuk rendering

* Render List

    * Render List dapat membangun koleksi dan beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}.

* Key

    * Key membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.

## Struktur Direktori

* Untuk struktur direktori React tidak memiliki pendapat tentang bagaimana cara memasukkan file ke folder. tetapi ada berapa saran caranya yaitu:

    * Pengelompokan berdasarkan fitur atau rute
    * Pengelompokan berdasarkan jenis file

* Dan saran Hindari terlalu banyak nesting

## Styling

* Untuk Styling pada React ada 3 yaitu:

    * Classes dan CSS
    * Atribut style
    * Modul CSS