const fs = require('fs'); //Core Module
const coba = require('./coba'); //Local Module
// const moment = require('moment'); //third party module / npm module / node_modules

console.log(
    coba.cetakNama('Joshua'), 
    coba.pi, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);