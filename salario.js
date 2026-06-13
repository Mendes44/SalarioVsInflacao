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

let ipca = [
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
        console.log();
      }

      break;

    case 2:
      console.log("\n>>> Índice IPCA de 2010 a 2020: <<<");
      break;

    case 3:
      console.log(
        "\n>>> Comparação entre o percentual de aumento salarial e o IPCA: <<<",
      );
      break;

    case 4:
      console.log("\nSaindo...");
      break;

    default:
      console.log("\nOpção inválida! Escolha uma alternativa entre 1 e 4.\n");
      break;
  }
} while (escolha != 4);
