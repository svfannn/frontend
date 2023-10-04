//IFEE

const output =(function(cek){
    return  cek % 2 === 0 ? "ganjil":"genap";
})(4);
console.log(output)


//callback
function cekAngka(angka, callback) {
    const hasil = angka % 2 === 0 ? "genap" : "ganjil";
    callback(hasil);
}

cekAngka(4, function(output) {
    console.log(output);
});

