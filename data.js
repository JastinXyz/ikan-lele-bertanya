let data = [
    "akar masalah tuh, pohonnya pohon apa?",
    "efek samping tuh, samping sebelah mana?",
    "gagal ginjal tuh, kapan suksesnya?",
    "kurikulum merdeka tuh, merdekanya kapan?",
    "polisi tidur tuh, kapan bangunnya?",
    "harga diri tuh, sekilonya berapa?",
    "rumah sakit tuh, kapan sembuhnya?",
    "pola pikir tuh, bentuk polanya gimana?",
    "mata kabur tuh, kaburnya lewat mana?",
    "darah keturunan tuh, turunnya dari mana?",
    "minuman keras tuh, sekeras apa?",
    "masuk angin tuh, masuknya dari mana?",
    "babak belur tuh, babak keberapa?",
    "matahari tuh, hari apa?",
    "meja sekolah tuh, kapan lulusnya?",
    "kepala sekolah tuh, badannya dimana?",
    "jam tuh, dibikinnya jam berapa?",
    "dalam hati tuh, dalamnya seberapa?",
    "baju tidur tuh, kapan bangunnya?",
    "editor berkelas tuh, kelas berapa?",
    "masuk akal tuh, masuknya lewat mana?",
    "rumah makan tuh, kapan kenyangnya?",
    "menuntut ilmu tuh, ilmu salah apa?",
    "belut listrik tuh, isi tokennya dimana?",
    "anak meme tuh, bapaknya siapa?",
    "tanggal tua tuh, umurnya berapa?",
    "anak tangga tuh, lahirnya gimana?",
]

function getRandomArrayData() {
    return data[Math.floor(Math.random() * data.length)].split(", ");
}