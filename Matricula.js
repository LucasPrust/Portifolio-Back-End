let naopossuidebitos = true
let naoestatrancado = true    
let matriculapermitida = naopossuidebitos && naoestatrancado

if (matriculapermitida) {
    console.log("Matrícula Permitida!")
} else {
    console.log("Matrícula Não Permitida")
}