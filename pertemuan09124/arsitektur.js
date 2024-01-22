const getKelas = (kodeId) => {
  const kelas = kodeId === 1 ? "SIJA" : "RPL";
  return { kodeId, kelas }

}
// cara 2 dengan menambahkan kepanjangan dari kode kelas
const functionKelas = (kode, deskripsi, kelas) => {
  return { kode, deskripsi, kelas };
}

const getKelasDeskripsi = (kodeId) => {
  const kelas = kodeId === 1 ? functionKelas("SIJA", "Sistem Jaringan dan Aplikasi", 11) : functionKelas("RPL", "Rekayasa Perangkat Lunak", 12);

  return { kodeId, kelas }
}

const getItem = (kodeItem, namaItem, cooldown, damage, type) => {
  return { kodeItem, namaItem, cooldown, damage, type };
}

const getGameItem = (gameItemId) => {
  const items = gameItemId === 1 ? getItem("imo", "imortal", "210", "hidup lagi", "tank") : getItem("hs", "hunter strike", "29", 0, "attack")
  return { gameItemId, items }
}

// menambahkan multimedia dari kelas
const classFunc = (kode, namaKelas) => {
  return { kode, namaKelas };
}

const kelasBaru = (id) => {
  if (id === 1) {
    return classFunc("SIJA", "Sistem Informasi Jaringan dan Aplikasi");
  } else if (id === 2) {
    return classFunc("RPL", "Rekayasa Perangkat Lunak");
  } else if (id === 3) {
    return classFunc("mult", "Multimedia");
  }
  return { id };
}

// async

// const getKelasAsync = async (kodeId) => {
//   const kelas = kodeId === 1 ? "SIJA" : "RPL";
//   const data = await kelas;
//   return { kodeId, data }
// }

// getKelasAsync(1).then(console.log)
// const run = async () => {
//   const result = await getKelasAsync(1)
//   console.log(result);
// }
// run();
// console.log(getKelasAsync(1));

const getKelasAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kelas = id === 1 ? "SIJA" : "RPL";
      resolve({ id, kelas });
    }, 1000)
  })
}
const getKelasBaruAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let kelas
      if (id === 1) {
        kelas = classFunc("SIJA", "Sistem Informasi Jaringan dan Aplikasi")
      } else if (id === 2) {
        kelas = classFunc("RPL", "Rekaya Perangkat Lunak")
      } else if (id === 3) {
        kelas = classFunc("mult", "Multimedia")
      }
      // const kelas = id === 1 ? "SIJA" : "RPL";
      resolve({ id, kelas });
    }, 1000)
  })
}

module.exports = {
  getKelasBaruAsync,
  getKelasAsync,
  getKelas,
  getGameItem,
  getKelasDeskripsi,
  kelasBaru
};








