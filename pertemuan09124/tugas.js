// 1. Hari senin - jum'at

function angkaHari(hari) {
  switch (hari) {
    case 1:
      return "Hari Senin";
      break;
    case 2:
      return "Hari Selasa";
      break;
    case 3:
      return "Hari Rabu";
      break;
    case 4:
      return "Hari Kamis";
      break;
    case 5:
      return "Hari Jumat";
      break;
    default:
      return "Hari Sabtu & Minggu Libur";
      break;
  }
}

function bintangPersegiPanjang(panjang, lebar) {
  for (let i = 0; i < lebar; i++) {
    let baris = ' '
    for (let j = 0; j < panjang; j++) {
      baris += '*';
    }
    console.log(baris);
  }
}

function nilaiRapor(nilai) {
  switch (nilai) {
    case 100:
      return 'Nilai Terbaik'
      break;
    case 90:
      return 'Cukup Baik'
      break;
    case 80:
      return 'Baik'
      break;
    case 60:
      return 'Harus Semangat'
      break;
    case 50:
      return 'Remedial'
      break;
    default:
      return 'Nilai tidak spesifik'
      break;
  }
}

// 100 = Terbaik
// 90 - 99 = Baik
// 80 - 89 = Cukup Baik
// 60 - 79 = Kurang Baik
// 10 - 59 = Belajar Dek

function nilaiUlangan(nilai) {
  if (nilai === 100) {
    return 'Terbaik'
  } else if (nilai >= 90 && nilai <= 99) {
    return 'Baik';
  } else if (nilai >= 80 && nilai <= 89) {
    return 'Cukup Baik';
  } else if (nilai >= 60 && nilai <= 79) {
    return 'Kurang Baik';
  } else if (nilai >= 10 && nilai <= 59) {
    return 'Kurang Belajar';
  } else {
    return 'Tidak Belajar'
  }
}

module.exports = { angkaHari, bintangPersegiPanjang, bintangPersegiPanjang, nilaiRapor, nilaiUlangan }