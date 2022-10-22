// Core Module
// File System
const fs = require('fs');
const readline = require('readline');
const { json } = require('stream/consumers');

// menuliskan string ke file secara synchronous
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!');
// } catch(error) {
//     console.log(error);
// }

// menuliskan string ke file secara asynchronous
// fs.writeFile('data/test.txt', 'Hello world secara asynchronous', (err) => {
//     console.log(err);
// })

// membaca isi file secara synchronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data.toString()); //kalo pake decoding utf-8 gausah pake toString

// membaca isi file secara asynchronous
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) return err;
//     console.log(data);
// });

// Readline
// const rl = readline.Interface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Masukkan nama anda: ', (nama) => {
//     console.log(`Terimakasih ${nama}`);
//     rl.close()
// })

// Readline question dua pertanyaan
// const rl = readline.Interface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Masukkan nama anda: ', (nama) => {
//     rl.question('Masukkan umur anda: ', (umur) => {
//         console.log(`Terimakasih ${nama}, umur anda ${umur}`);
//         rl.close();
//     })
// })

// Input data user ke contact.json
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan no hp anda: ', (noHp) => {
        console.log(`Terimakasih ${nama} telah memasukkan data ${noHp}`);
        const contact = { nama, noHp };
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));

        rl.close();
    })
})