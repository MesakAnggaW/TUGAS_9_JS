let dataMahasiswa = {
    nama: "Mesak Angga Wibisono",
    umur: 23,
    alamat: "Philadelphia, PA",
}

for (const x in dataMahasiswa) {
    console.log(dataMahasiswa[x]);
}

for (const key in dataMahasiswa) {
    console.log(key);
}