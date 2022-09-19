<center>

# Summary React Hook

</center>

## Pengertian React Hook dan Kenapa React Hook ada

### Pengertian

    React Hook merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah class.

### Kenapa

* Kesulitan untuk menggunakan kembali stateful logic antar komponen
* Komponen kompleks menjadi sulit dimengerti
* Class membingungkan manusia dan mesin

## Hooks pada React

### Hooks Dasar

* useState

    * useState di panggil dalam function component untuk menambahkan suatu state lokal. React akan menyimpan state antar render. useState memberikan dua hal: nilai state saat ini dan fungsi untuk memperbarui nilai tersebut. Anda dapat memanggil fungsi ini dari sebuah event handler atau dimanapun.

* useEffect

    *  useEffect, menambahkan kemampuan untuk melakukan “efek samping” dari sebuah function component. Hook ini memiliki fungsi yang sama dengan componentDidMount, componentDidUpdate, dan componentWillUnmount pada kelas React, tetapi disatukan menjadi satu API. 

* useContext

### Hooks Tambahan

* useReducer
* useCallback
* useMemo
* useRef
* useImperativeHandle
* useLayoutEffect
* useDebugValue

## Aturan pada Hooks

### Hanya Panggil Hooks di Tingkat Atas

    Jangan memanggil Hooks dari dalam loops, conditions, atau nested functions

### Hanya Panggil Hooks dari Fungsi-Fungsi React

    Jangan memanggil Hooks dari fungsi-fungsi JavaScript biasa.

Kita dapat memanggil pada:
* Memanggil Hooks dari komponen-komponen fungsi React
* Memanggil Hooks dari custom Hooks

## Custom Hooks

    Membuat Hook kita sendiri memungkinkan kita mengekstark komponen logika ke fungsi yang dapat digunakan lagi.