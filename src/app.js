console.log("Merhaba Kodlama.io");

let dolarDun = 9.20;
let dolarBugun = 9.30;

{
    let dolarDun = 9.10
}

console.log(dolarDun)

let konutKredileri = ["konut kredisi","emlak konut kredisi","kamu konut kredisi"]
console.log("<ul>")
    for (let index = 0; index < konutKredileri.length; index++) {
        console.log("<li>"+konutKredileri[index]+"</li>");
        
    }
console.log("</ul>")