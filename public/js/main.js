// 1
let x = 1
if (x = 1) {
    console.log('ex1');
}
// 2
if (x == 1) {
    console.log('ex2');
} 

// 3 
let quest = prompt('Comment vous appelez-vous?')
if (`${quest}`.length<5) {
    alert('Votre prénom est trop court')
}

// 4
let math1 = prompt("What's 9 + 10?")
if (math1==21) {
    alert('Bv')
}
else {
    alert("Bête type t'as pas la ref")
}

// 5
let math2 = prompt('5x5?')
if (math2 == 25) {
    alert('Bv')
}
else {
    alert(`Tu étais à ${Math.abs(25-math2)} de la bonne réponse`)
}

// 6
let tab = ['hot cheetos']

if (tab.length != 3) {
    tab.push(prompt("Quoi d'autre?"))
    tab.push(prompt("Mais encore"))
} else if (tab.length == 3)
    alert(`Trop miam tout ça : ${tab}`)

console.log(tab);

// 7
let bac1 = ['Bac 1 :'] 
let bac2 = ['Bac 2 :']

let chiffre = prompt('Veuillez écrire un chiffre')
if (chiffre <= 12) {
    bac1.push(chiffre)
}
else {
    bac2.push(chiffre)
}
let chiffre2 = prompt('Veuillez écrire un chiffre')
if (chiffre2 <= 12) {
    bac1.push(chiffre2)
}
else {
    bac2.push(chiffre2)
}
let chiffre3 = prompt('Veuillez écrire un chiffre')
if (chiffre3 <= 12) {
    bac1.push(chiffre3)
}
else {
    bac2.push(chiffre3)
}


alert(bac1 + bac2)

// 9 

let jour = prompt('Quel jour?')
if (jour == 'Lundi' || jour =='Mardi' || jour =='Mercredi') {
    alert(`Tu as cours en e-learning le ${jour}`)
}
else if (jour == 'jeudi' || jour == 'vendredi') {
    alert(`Tu as cours en présentiel le ${jour}`)
}
else {
    alert('Ta demande est erronnée bruv')
}