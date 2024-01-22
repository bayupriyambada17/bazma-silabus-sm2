// const names = "Bayu Priyambada";
// console.log(names);

// const age = 20;
// const year = 2022

// const pengurangan = year - age;

// function dataDiri(nama) {
//   return `Halo nama saya adalah ${nama}`;
// }


// console.log(dataDiri("Bayu Priyambada"))

const { namaRelasi, namaDaerah, sekolah, abjadArr } = require("./relasi")
const { angkaHari, bintangPersegiPanjang, nilaiRapor, nilaiUlangan } = require("./tugas")

console.log(namaRelasi("Bayu Priyambada"))
console.log(namaDaerah("Kabupaten Bekasi"))

console.log('--- ---')
console.log(sekolah("SMK TI BAZMA", "Teknik Informatika"))

console.log('--- ---')
console.log(abjadArr()); // tidak dipanggil e, maka tetep sama
console.log(abjadArr(1)); // tidak dipanggil e, maka tetep sama
console.log(abjadArr(2)); // tidak dipanggil e, maka tetep sama
// bagaimana jika abjadArr tambah dengan e? ada abcde hasilnya

console.log('--- ---')
console.log(angkaHari(5))
console.log(angkaHari(6))

console.log('--- ---')
bintangPersegiPanjang(10, 5)

console.log('--- ---')
console.log(nilaiRapor(95))

console.log('--- ---')
console.log(nilaiUlangan(100))
