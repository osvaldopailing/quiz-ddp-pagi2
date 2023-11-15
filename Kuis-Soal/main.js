const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    {
        "q": "Nama bapak naruto adalah...",
        "o": [
            'Asep',
            'Supiardi',
            'Minato',
            'Rafli',
        ],
        "a": 2
    },
    {
        "q": "Pemain sepakbola yang mempunyai Ballon d'Or terbanyak adalah...",
        "o": [
            'Ronaldo',
            'Messi',
            'Puyol',
            'Neymar',
        ],
        "a": 1
    },
    {
        "q": "Nama presiden pertama indonesia adalah...",
        "o": [
            'Jokowi',
            'Habibie',
            'soeharto',
            'soekarno',
        ],
        "a": 3
    },    
    // Tambahkan 3 soal lainnya 
]

let nama = prompt('Input nama: ')

// Lengkapi code program yang belum selesai
for(let i=0;i<soal.length;i++){
    console.log('\nsoal' + (i+1)+':'+ soal[i].q);

    // Display answer choices
    for (let j = 0;j < soal [i].o.length;j++){
        console.log(j + '.' + soal[i].o[j]);
    }

    // prompt user for answer
    let jawaban = prompt('jawaban anda(masukkan angka pilihan):');

    //check if the answer is correct
    if (parseInt(jawaban)===soal[i].a){
        console.log('jawaban anda benar!');
        score += point_per_soal;
        jawaban_benar++;
    } else {
        console.log('jawaban anda salah.jawaban yang benar adalah:' + soal[i].o[soal[i].a]);
        jawaban_salah++;
    }
}

console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)
    
   