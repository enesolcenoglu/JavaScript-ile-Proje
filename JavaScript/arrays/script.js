let sayilar = [1,5,7,15,3,25];
/*
for (let i = 0; i < sayilar.length ; i++) {
    console.log(sayilar[i]*sayilar[i]);
}
*/
/*
for (let i = 0; i < sayilar.length; i++) {
    if (sayilar[i] %5===0){
        console.log(sayilar[i]);
    }
}
 */
/*
sayilar.push(10,4,8);
let toplam=0;
for (let i = 0; i <sayilar.length ; i++) {
    if (sayilar[i] %2===0){
        toplam += sayilar[i]
    }
}
console.log(toplam);
 */
/*
let urunler = ["iphone 12", "iphone 13" , "iphone 14" , "samsung a52", "samsung a5" , "samsung a5","samsung a5"];
for (let i = 0; i < urunler.length; i++) {
    console.log(urunler[i].toUpperCase());
}
let adet=0
for (let i = 0; i < urunler.length; i++) {
    if (urunler[i].includes("samsung")){
        adet ++;
    }
}
console.log(adet);
*/

let ogrenciler = [
    {"name":"yigit", "surname":"bilgi" , "notes":[50,60,70]},
    {"name":"ada", "surname":"bilgili" , "notes":[30,80,70]},
    {"name":"cinar", "surname":"bilge" , "notes":[90,60,80]}
];

for (let ogrenci of ogrenciler){
    let not_toplam=0;
    let ortalama = 0;
    let adet=0;

    for (let not of ogrenci.notes){
        not_toplam+=not;
        adet++;
    }
    ortalama=not_toplam/adet;
    console.log(`${ogrenci.name} ${ogrenci.surname} isimli öğrencimizin not ortalaması ${ortalama} . `);

    if (ortalama >= 50){
        console.log("Öğrenci Başarılı");
    }
    else {
        console.log("Öğrenci Başarısız");
    }
}
