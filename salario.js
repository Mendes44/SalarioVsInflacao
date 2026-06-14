import entrada from "readline-sync";

let salarios_minimos = [
  { ano: 2010, valor: 510.0 },
  { ano: 2011, valor: 545.0 },
  { ano: 2012, valor: 622.0 },
  { ano: 2013, valor: 678.0 },
  { ano: 2014, valor: 724.0 },
  { ano: 2015, valor: 780.0 },
  { ano: 2016, valor: 880.0 },
  { ano: 2017, valor: 937.0 },
  { ano: 2018, valor: 954.0 },
  { ano: 2019, valor: 998.0 },
  { ano: 2020, valor: 1045.0 },
];

let ipca_array = [
  { ano: 2010, valor: 5.91 },
  { ano: 2011, valor: 6.5 },
  { ano: 2012, valor: 5.84 },
  { ano: 2013, valor: 5.91 },
  { ano: 2014, valor: 6.41 },
  { ano: 2015, valor: 10.67 },
  { ano: 2016, valor: 6.29 },
  { ano: 2017, valor: 2.95 },
  { ano: 2018, valor: 3.75 },
  { ano: 2019, valor: 4.31 },
  { ano: 2020, valor: 4.52 },
];

let escolha;

do {
  console.log("Escolha uma das alternativas:");
  console.log("1 - Listar os salários mínimos de 2010 a 2020");
  console.log("2 - Listar índice IPCA de 2010 a 2020");
  console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
  console.log("4 - Sair");

  escolha = entrada.questionInt("\nDigite o número da alternativa escolhida: ");

  switch (escolha) {
    case 1:
      console.log("\n>>> Salários mínimos de 2010 a 2020: <<<\n");

      for (let salario of salarios_minimos) {
        let salario_minimo = salario.valor;
        let ano = salario.ano;

        console.log("Ano: ".padEnd(30, ".") + ano);
        console.log(
          "Salário mínimo: ".padEnd(30, ".") +
            "R$ " +
            salario_minimo.toFixed(2).replace(".", ","),
        );
        console.log("\n".padEnd(50, "-") + "\n");
      }

      break;

    case 2:
      console.log("\n>>> Índice IPCA de 2010 a 2020: <<<\n");

      for(let ipca of ipca_array){

        let ano_ipca = ipca.ano;
        let inflacao = ipca.valor;

        console.log("Ano: " .padEnd(30, ".") + ano_ipca);
        console.log("Inflacao IPCA: " .padEnd(30, ".") + inflacao.toFixed(2).replace(".", ",") + "%");
        console.log("\n".padEnd(50, "-") + "\n");

      }

      break;

    case 3:
      console.log("\n>>> Comparação entre o percentual de aumento salarial e o IPCA: <<<");

      for (let i=0; i <= salarios_minimos.length - 1; i++){
        let ano = salarios_minimos[i].ano;
        let salario = salarios_minimos[i].valor;
        let ipca = ipca_array[i].valor;
        let percentualCrescimento;
        let crescimentoFormatado;

        if (i > 0){
            let salario_anterior = salarios_minimos[i-1].valor;
            let diferenca = salario - salario_anterior;

            percentualCrescimento = (diferenca / salario_anterior) * 100;
            crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".",",") + "%";
        }else {
            crescimentoFormatado = " - "
        }
        

        console.log("Ano: " .padEnd(30, ".") + ano);
        console.log("Salario Minimo: ".padEnd(30, ".") + "R$ " + salario.toFixed(2).replace(".",","));
        console.log("Crescimento Salarial: " .padEnd(30, ".") + crescimentoFormatado);
        console.log("Inflação IPCA: ".padEnd(30, ".") + ipca.toFixed(2).replace(".",",") + "%");
        console.log("\n".padEnd(50, "-") + "\n");

      }
      break;

    case 4:
      console.log("\n::: PROGRAMA ENCERRADO :::");
      break;

    default:
      console.log("\n>>> Opção inválida! Escolha uma alternativa entre 1 e 4. <<< \n");
      break;
  }
} while (escolha != 4);
