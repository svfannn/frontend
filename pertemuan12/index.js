// // class in js 
// //--------

// // object literal
// const mobil = {
//     transmisi: "manual",
//     bahanBakar: "bensin",
//     mesin: 1500,
//     nyalakanMesin: function(){
//         console.log(`Mobil $(this.transmisi) dinyalakan`)
//     },
// }


class Mobil {
    constructor(transmisi,bahanBakar,mesin){
        this.transmisi = transmisi
        this.bahanBakar = bahanBakar
        this.mesin = mesin
    }
    nyalakanMesin(){
        console.log(`Mobil $(this.transmisi) dinyalakan`)
    }

}


// const mobil1 = new Mobil ("manual","Bensin",1500)
// const mobil2 = new Mobil ("Automatic","solar",3500)
// mobil2.nyalakanMesin()
// console.log(mobil1,mobil2)


class Toyota extends Mobil{
    constructor(merek,warna,transmisi,bahanBakar,mesin){
        super(transmisi,bahanBakar,mesin)
        this.merek =merek
        this.warna =warna
    }
    nyalakanMesin(){
        console.log(`Mobil merek $(this.merek) dinyalakan`)
    }
}
const agya = new Toyota("agya","putih","automatic","bensin",1000)
agya.nyalakanMesin()
console.log(agya)
