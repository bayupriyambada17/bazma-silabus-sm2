const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// cek folder, ada atau tidak, jik tidak maka buatkan foldernya
const directory = './db';
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

// cek file, ada atau tidak, jik tidak maka buatkan filenya
const checkFile = './db/data.json';
if (!fs.existsSync(checkFile)) {
  fs.writeFileSync(checkFile, '[]', 'utf-8');
}

const questionExample = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
}

const addData = async () => {
  const nama = await questionExample("Masukan nama anda: ");
  const umur = await questionExample("Masukan umur sekarang: ");
  const hobi = await questionExample("Masukan 1 hobi: ");

  const data = { nama, umur, hobi };
  const fileDb = fs.readFileSync('./db/data.json', 'utf-8');
  const dataDiri = JSON.parse(fileDb);

  dataDiri.push(data);
  fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri));
  console.log("Terima kasih sudah memperkenalkan dirinya 🤞");
  rl.close();
}

addData();

