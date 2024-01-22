const getKelas = (kodeId) => {
  const kelas = kodeId === 1 ? "SIJA" : "RPL";
  return { kodeId, kelas }

}
console.log(getKelas(1))
console.log(getKelas(2));
console.log(getKelas(3));
console.log(getKelas(4));

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
console.log(getKelasDeskripsi(1))
console.log(getGameItem(1));





