function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const pi = 3.14;

const mahasiswa = {
    nama: 'Josh',
    umur: 20,
    cetakMhs() {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun`;
    },
};

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat');
    }
};

module.exports = { cetakNama, pi, mahasiswa, Orang };