import calculadora from 'readline-sync';

let nome = calculadora.question("\n\nQual seu nome? ");

console.log("\nóla "+nome);
console.log("Bem vindo a Plataforma de cálculos!\n\n");
let continua = calculadora.question(nome+" Sé você deseja calcular digite 1\n"+"Senão digite qualquer tecla\n");

if(continua == "1"){
    while(continua){
                let numero1 = calculadora.question("\nDigite o primeiro número que você deseja calcular: ");
                if(numero1 != Number(numero1)){
                    console.log("Somente numeros por gentileza.")
                }else{

                    let numero2 = calculadora.question("\nDígite o segundo número que você desesa calcular: ");

                    if(numero2 != Number(numero2)){
                        console.log("\nSomente números por gentileza.\n")
                    }else{
                        console.log("\nQual dos cálculos abaixo você gostaria de fazer?...");
                        console.log("+ - Adição");
                        console.log("- - Subtração");
                        console.log("* - Multiplicação");
                        console.log("/ - Divisão\n");
    
                        let calculo = calculadora.question(" ");
    
                        if(calculo){
                            switch(calculo){
                                case "+": {
                                    let soma = Number(numero1) + Number(numero2);
                                    console.log("\nResultado: "+numero1+" + "+numero2+" = "+soma+"\n");
                                    break;
                                }
                                case "-": {
                                    let subtracao = numero1 - numero2
                                    console.log("\nResultado: "+numero1+" - "+numero2+" = "+subtracao+"\n");
                                    break;
                                }
                                case "*": {
                                    let multiplicacao = numero1 * numero2
                                    console.log("\nResultado: "+numero1+" * "+numero2+" = "+multiplicacao+"\n");
                                    break;
                                }
                                case "/": {
                                    if(numero1 == "0" || numero2 == "0"){
                                        console.log("\nNão tem como dividir por 0!")
                                        break;
                                    }else{
                                        let multiplicacao = numero1 * numero2
                                        console.log("\nResultado: "+numero1+" * "+numero2+" = "+multiplicacao+"\n");
                                    };
                                    break;
                                };
                                default:{
                                    console.log("\nOpção invalida")
                                    break;
                                }
    
                            }
                        }
                    }
                }
                    let continuar =  calculadora.question("\nSé você deseja calcular digite 1 "+"\n"+"Sé você deseja encerar digite 2\n");
                    if(numero1 != Number(numero1)){
                        console.log("\nSomente números por gentileza.")
                    }else{
                        if(continuar == 1){
                            console.log("\n"+nome+", você optou por continuar.")
                        }else if(continuar == 2) {
                        console.log("\nObrigador por participar "+nome)
                        break;
                    } 
                }
            }
    }else{
        console.log("\n"+nome+" você optou por finalizar a plataforma.");
}
