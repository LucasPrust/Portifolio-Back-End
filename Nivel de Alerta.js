function mostrarAlerta(nivel){
    switch (nivel){
        case 1 :
         return "Alerta: informação!"
         case 2 :
            return "Alerta: Atenção!"
            case 3 :
                return "Alerta: Perigo!"
                default :
                return "Nivel de alerta desconhecido"
    }
}

console.log(mostrarAlerta(1));
console.log(mostrarAlerta(2));
console.log(mostrarAlerta(3));
console.log(mostrarAlerta(5));