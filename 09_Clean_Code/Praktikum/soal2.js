class Kendaraan {
    totalRoda = 0;
    kecepatanPerjam = 0;
}

class Mobil extends Kendaraan {
    berjalan() {
    this.TambahKecepatan(10);
    }

    TambahKecepatan(kecepatanBaru) {
    this.kecepatanPerjam = this.kecepatanPerjam + kecepatanBaru;
    }
}

mobilCepat = new Mobil();
mobilCepat.berjalan()
mobilCepat.berjalan()
mobilCepat.berjalan()
console.log(mobilCepat);

mobilLamban = new Mobil();
mobilLamban.berjalan();
console.log(mobilLamban)

