<center>

# Summary Testing

</center>

## Testing

### Pengertian

Testing adalah proses memverifikasi bahwa test assertion kita benar dan code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah boolean yang returnya adalah true kecuali ada bug di kode kita

### Manfaat

* Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita.
* Mengurangi bug pada aplikasi.

### Kategori

* Environment Test
* End to end Test

### Rekomendasi Tools

* Jest
* React Testing Library


## React Testing Library

### Fungsi

React Testing Libray digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai outpur dari fungsi render.

### Kategori Testing

* Text : `getByText('Search')`
* LabelText:` getByLabelText: <label for="search"/>`
* PlaceholderText: `getByPlaceholderText: <input placeholder="Search"/>`
* AltText: `getByAltText: <img alt="profile"/>`
* DisplayValue: `getByDisplayValue: <input value="JavaScript"/>`

### Handle Event

Handle Event menggunakan fireEvent

### Handle Async

Pertama Perlu membuat mock untuk axios.
Kedua perlu membuat mock promise hasilya ketika resolve atau reject. Ini dikembalikan kepada skenario kita.

## Testing Custom Hook

### Libray yang digunakan

Menggunakan React Hooks Testing Library

### Install

`npm i -D @testing-library/react-hooks`