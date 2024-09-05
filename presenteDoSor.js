/*
▄▄▄ .▐▄• ▄ ▄▄▄ .▄▄▄   ▄▄· ▪   ▄▄· ▪        .▄▄ ·     ·▄▄▄▄  ▄▄▄ .
▀▄.▀· █▌█▌▪▀▄.▀·▀▄ █·▐█ ▌▪██ ▐█ ▌▪██ ▪     ▐█ ▀.     ██▪ ██ ▀▄.▀·
▐▀▀▪▄ ·██· ▐▀▀▪▄▐▀▀▄ ██ ▄▄▐█·██ ▄▄▐█· ▄█▀▄ ▄▀▀▀█▄    ▐█· ▐█▌▐▀▀▪▄
▐█▄▄▌▪▐█·█▌▐█▄▄▌▐█•█▌▐███▌▐█▌▐███▌▐█▌▐█▌.▐▌▐█▄▪▐█    ██. ██ ▐█▄▄▌
 ▀▀▀ •▀▀ ▀▀ ▀▀▀ .▀  ▀·▀▀▀ ▀▀▀·▀▀▀ ▀▀▀ ▀█▄▀▪ ▀▀▀▀     ▀▀▀▀▀•  ▀▀▀ 

  ██████ ▄▄▄█████▓ ██▀███   ██▓ ███▄    █   ▄████   ██████ 
▒██    ▒ ▓  ██▒ ▓▒▓██ ▒ ██▒▓██▒ ██ ▀█   █  ██▒ ▀█▒▒██    ▒ 
░ ▓██▄   ▒ ▓██░ ▒░▓██ ░▄█ ▒▒██▒▓██  ▀█ ██▒▒██░▄▄▄░░ ▓██▄   
  ▒   ██▒░ ▓██▓ ░ ▒██▀▀█▄  ░██░▓██▒  ▐▌██▒░▓█  ██▓  ▒   ██▒
▒██████▒▒  ▒██▒ ░ ░██▓ ▒██▒░██░▒██░   ▓██░░▒▓███▀▒▒██████▒▒
▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒▓ ░▒▓░░▓  ░ ▒░   ▒ ▒  ░▒   ▒ ▒ ▒▓▒ ▒ ░
░ ░▒  ░ ░    ░      ░▒ ░ ▒░ ▒ ░░ ░░   ░ ▒░  ░   ░ ░ ░▒  ░ ░
░  ░  ░    ░        ░░   ░  ▒ ░   ░   ░ ░ ░ ░   ░ ░  ░  ░  
      ░              ░      ░           ░       ░       ░  
                                                           
*/

// 1. Crie uma variável chamada `fruta1` que contenha a string "MORANGO" e a converta para letras minúsculas.
let fruta1 = "MORANGO"
let convFruta = fruta1.toLowerCase()
console.log(convFruta)
// 2. Crie uma constante chamada `animal1` que contenha a string "elefante" e a converta para letras maiúsculas.
const animal1 = "elefante"
let convAnimal = animal1.toUpperCase()
console.log(convAnimal)
// 3. Crie uma variável chamada `fruta2` com a string "   banana   ", remova os espaços em branco no início e no fim da string.
let fruta2 = "   banana   "
let remove = fruta2.trim()
console.log(remove)
// 4. Crie uma constante chamada `animal2` com a string "gato, macaco, leão, jabuti, tiramissu", e verifique se a palavra "leão" está incluída nesta string.
const animal2 = "gato, macaco, leão, jabuti, tiramissu"
let inclui = animal2.includes("leão")
console.log(inclui)
// 5. Crie uma variável chamada `fruta3` que contenha a string "abacaxi", substitua todas as letras "a" por "o".
let fruta3 = "abacaxi"
convFruta = fruta3.replaceAll("a", "o")
console.log(convFruta)
// 6. Crie uma constante chamada `animal3` que contenha a string "cachorro", e verifique se a palavra "carro" está incluída nela.
const animal3 = "cachorro"
inclui = animal3.includes("carro")
console.log(inclui)
// 7. Crie uma variável chamada `fruta4` com a string "laranja", e descubra quantos caracteres existem nesta string.
let fruta4 = "laranja"
let caract = fruta4.length
console.log(caract)
// 8. Crie uma constante chamada `animal4` com a string "papagaio", e converta toda a string para letras minúsculas e depois para letras maiúsculas. Imprima a constante no console em cada uma destas etapas.
const animal4 = "Papagaio"
convAnimal = animal4.toLowerCase()
console.log(convAnimal)
convAnimal = animal4.toUpperCase()
console.log(convAnimal)
// 9. Crie uma variável chamada `fruta5` com a string "melancia" e substitua todas as letras "i" por "a".
let fruta5 = "melancia"
convFruta = fruta5.replaceAll("i", "a")
console.log(convFruta)
// 10. Crie uma constante chamada `animal5` que contenha a string "tigre siberiano de bengala dentes de sabre bionico decepticom ultrawide ergonomico antiderrapante", e verifique se a palavra "sabre" está incluída nesta string.
const animal5 = "tigre siberiano de bengala dentes de sabre bionico decepticom ultrawide ergonomico antiderrapante"
inclui = animal5.includes("sabre")
console.log(inclui)
/*
▄▄▄ .▐▄• ▄ ▄▄▄ .▄▄▄   ▄▄· ▪   ▄▄· ▪        .▄▄ ·     ·▄▄▄▄  ▄▄▄ .
▀▄.▀· █▌█▌▪▀▄.▀·▀▄ █·▐█ ▌▪██ ▐█ ▌▪██ ▪     ▐█ ▀.     ██▪ ██ ▀▄.▀·
▐▀▀▪▄ ·██· ▐▀▀▪▄▐▀▀▄ ██ ▄▄▐█·██ ▄▄▐█· ▄█▀▄ ▄▀▀▀█▄    ▐█· ▐█▌▐▀▀▪▄
▐█▄▄▌▪▐█·█▌▐█▄▄▌▐█•█▌▐███▌▐█▌▐███▌▐█▌▐█▌.▐▌▐█▄▪▐█    ██. ██ ▐█▄▄▌
 ▀▀▀ •▀▀ ▀▀ ▀▀▀ .▀  ▀·▀▀▀ ▀▀▀·▀▀▀ ▀▀▀ ▀█▄▀▪ ▀▀▀▀     ▀▀▀▀▀•  ▀▀▀ 

   ▄████████    ▄████████    ▄████████    ▄████████ ▄██   ▄      ▄████████ 
  ███    ███   ███    ███   ███    ███   ███    ███ ███   ██▄   ███    ███ 
  ███    ███   ███    ███   ███    ███   ███    ███ ███▄▄▄███   ███    █▀  
  ███    ███  ▄███▄▄▄▄██▀  ▄███▄▄▄▄██▀   ███    ███ ▀▀▀▀▀▀███   ███        
▀███████████ ▀▀███▀▀▀▀▀   ▀▀███▀▀▀▀▀   ▀███████████ ▄██   ███ ▀███████████ 
  ███    ███ ▀███████████ ▀███████████   ███    ███ ███   ███          ███ 
  ███    ███   ███    ███   ███    ███   ███    ███ ███   ███    ▄█    ███ 
  ███    █▀    ███    ███   ███    ███   ███    █▀   ▀█████▀   ▄████████▀  
               ███    ███   ███    ███                                     
*/

// 11. Crie um array chamado `frutas` contendo as frutas "maçã", "banana", "morango". Adicione a fruta "laranja" ao final do array.
let frutas = ["maçã", "banana", "morango"]
let add = frutas.push("laranja")
console.log(frutas)
// 12. Crie um array chamado `animais` contendo os animais "cachorro", "golfinho do irrawady", "leão". Remova o último animal do array.
let animais = ["cachorro", "golfinho do irrawady", "leão"]
remove = animais.pop()
console.log(animais)
// 13. Crie um array chamado `frutas2` contendo as frutas "abacaxi", "butia", "pera". Adicione "melancia" ao início do array.
let frutas2 = ["abacaxi", "butia", "pera"]
add = frutas2.push("melancia")
console.log(frutas2)
// 14. Crie um array chamado `animais2` contendo os animais "cavalo", "vaca", "ovelha". Remova o primeiro animal do array.
let animais2 = ["cavalo", "vaca", "ovelha"]
remove = animais2.splice(0, 1)
console.log(animais2)
//15. Crie um array chamado `frutas3` contendo as frutas "goiaba", "kiwi", "laranja". Use o método `splice` para substituir "kiwi" por "ameixa".
let frutas3 = ["goiaba", "kiwi", "laranja"]
remove = frutas3.splice(1, 1, "ameixa")
console.log(frutas3)
// 16. Crie um array chamado `animais3` contendo os animais "canguru", "panda", "urso". Use o método `splice` para remover o segundo elemento.
let animais3 = ["canguru", "panda", "urso"]
remove = animais3.splice(1, 1)
console.log(animais3)
// 17. Crie um array chamado `frutas4` contendo as frutas "limão", "manga", "jabuticaba". Adicione "abacate" ao final do array e remova "limão".
let frutas4 = ["limão", "manga", "jabuticaba"]
add = frutas4.push("abacate")
remove = frutas4.splice(0, 1)
console.log(frutas4)
// 18. Crie um array chamado `animais4` contendo os animais "tartaruga", "jacaré", "tamburutaca". Remova o último animal e adicione "capivara" ao final do array.
let animais4 = ["tartaruga", "jacaré", "tamburutaca"]
remove = animais4.pop()
add = animais4.push("capivara")
console.log(animais4)
// 19. Crie um array chamado `frutas5` contendo as frutas "mamão", "caju", "figo". Use `push` para adicionar "graviola" ao array.

// 20. Crie um array chamado `animais5` contendo os animais "lhama", "pinguim", "foca". Use `pop` para remover o último animal do array.