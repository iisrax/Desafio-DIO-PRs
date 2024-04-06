// Calculadora de Partidas Ranqueadas

//Partidas Ganhas
let wins = 486
let losses = 64

function matchesWon(wins, losses){
    return wins - losses
}

let rank = matchesWon(wins, losses)

//Classificalçao de Rank
let calculo = function (level){
    if (level <= 10){
        return "Ferro";

    }   else if (level <= 11 && level >= 20){
        return "Bronze";

        }   else if (level <= 21 && level >= 50){
            return "Prata";

            }   else if (level <= 51 && level >= 80){
                return "Ouro";

                }   else if (level <= 81 && level >= 90){
                    return "Diamante";

                    }   else if (level <= 91 && level >= 100){
                        return "Lendário";

                        }   else if (level >= 101){
                            return "Imortal";

                            }   else{
                                return "Não Classificado, por favor jogue suas partidas classficatórias =)";

                                }
}

let result = calculo(rank);

console.log("O Herói tem saldo de " + rank + " vitórias e está no nível " + result)