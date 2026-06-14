// Importa a biblioteca readline-sync para permitir entrada de dados pelo terminal
import entrada from "readline-sync";

/*
  Array com os valores do salário mínimo no Brasil entre 2010 e 2020.

  Cada item do array é um objeto com:
  - ano: ano de referência
  - valor: valor do salário mínimo naquele ano
*/
let salariosMinimos = [
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
  { ano: 2021, valor: 1100.0 },
  { ano: 2022, valor: 1212.0 },
  { ano: 2023, valor: 1320.0 },
  { ano: 2024, valor: 1412.0 },
  { ano: 2025, valor: 1518.0 },
  { ano: 2026, valor: 1621.0 },
];

/*
  Array com os índices de inflação IPCA entre 2010 e 2020.

  Cada item do array é um objeto com:
  - ano: ano de referência
  - valor: percentual do IPCA naquele ano
*/
let ipcaArray = [
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
  { ano: 2021, valor: 10.06 },
  { ano: 2022, valor: 5.79 },
  { ano: 2023, valor: 4.62 },
  { ano: 2024, valor: 4.83 },
  { ano: 2025, valor: 4.26 },
  { ano: 2026, valor: 4.72 }, // IPCA acumulado em 12 meses até maio/2026, não é fechamento anual
];

// Variável responsável por armazenar a opção escolhida pelo usuário no menu
let escolha;

/*
  Estrutura de repetição do...while.

  O menu será exibido pelo menos uma vez.
  Depois disso, continuará aparecendo enquanto o usuário não escolher a opção 4.
*/
do {
  // Exibição do menu principal
  console.log("Escolha uma das alternativas:");
  console.log("1 - Listar os salários mínimos de 2010 a 2026");
  console.log("2 - Listar índice IPCA de 2010 a 2026");
  console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
  console.log("4 - Sair");

  // Recebe a opção escolhida pelo usuário
  escolha = entrada.questionInt("\nDigite o número da alternativa escolhida: ");

  /*
    Estrutura switch usada para executar uma ação diferente
    de acordo com a opção escolhida pelo usuário.
  */
  switch (escolha) {
    case 1:
      /*
        Caso 1:
        Lista todos os salários mínimos cadastrados no array salariosMinimos.
      */
      console.log("\n>>> Salários mínimos de 2010 a 2026: <<<\n");

      /*
        O for...of percorre diretamente cada objeto dentro do array.

        A cada volta do laço, a variável salario recebe um objeto como:
        { ano: 2010, valor: 510.0 }
      */
      for (let salario of salariosMinimos) {
        let ano = salario.ano;
        let salarioMinimo = salario.valor;

        // Exibe o ano formatado
        console.log("Ano: ".padEnd(30, ".") + ano);

        // Exibe o salário mínimo formatado com duas casas decimais e vírgula
        console.log(
          "Salário mínimo: ".padEnd(30, ".") +
            "R$ " +
            salarioMinimo.toFixed(2).replace(".", ","),
        );

        // Linha separadora para melhorar a visualização no terminal
        console.log("\n".padEnd(50, "-") + "\n");
      }

      // Encerra o case 1
      break;

    case 2:
      /*
        Caso 2:
        Lista todos os índices IPCA cadastrados no array ipcaArray.
      */
      console.log("\n>>> Índice IPCA de 2010 a 2026: <<<\n");

      /*
        O for...of percorre cada objeto do array ipcaArray.
      */
      for (let ipca of ipcaArray) {
        let anoIpca = ipca.ano;
        let inflacao = ipca.valor;

        // Exibe o ano
        console.log("Ano: ".padEnd(30, ".") + anoIpca);

        // Exibe o IPCA formatado com duas casas decimais e símbolo de porcentagem
        console.log(
          "Inflação IPCA: ".padEnd(30, ".") +
            inflacao.toFixed(2).replace(".", ",") +
            "%",
        );

        // Linha separadora
        console.log("\n".padEnd(50, "-") + "\n");
      }

      // Encerra o case 2
      break;

    case 3:
      /*
        Caso 3:
        Compara o percentual de crescimento do salário mínimo
        com o índice IPCA de cada ano.

        Para calcular o crescimento salarial, é necessário comparar
        o salário do ano atual com o salário do ano anterior.

        Por isso, aqui usamos o for tradicional com índice.
      */
      console.log(
        "\n>>> Comparação entre o percentual de aumento salarial e o IPCA: <<<\n",
      );

      /*
        O laço começa em i = 0 para incluir o ano de 2010.

        Usamos i < salariosMinimos.length porque o último índice válido
        do array é sempre length - 1.
      */
      for (let i = 0; i < salariosMinimos.length; i++) {
        let ano = salariosMinimos[i].ano;
        let salario = salariosMinimos[i].valor;
        let ipca = ipcaArray[i].valor;

        /*
          Variável que irá armazenar o crescimento salarial formatado.

          No primeiro ano, 2010, não existe ano anterior para comparar.
          Por isso, o crescimento será exibido como "-".
        */
        let crescimentoFormatado;

        /*
          Se i for maior que 0, significa que não estamos mais no primeiro item.

          Então podemos acessar o salário do ano anterior usando:
          salariosMinimos[i - 1]
        */
        if (i > 0) {
          // Salário do ano anterior
          let salarioAnterior = salariosMinimos[i - 1].valor;

          // Diferença entre o salário atual e o salário anterior
          let diferenca = salario - salarioAnterior;

          /*
            Fórmula do percentual de crescimento:

            crescimento = (diferença / salário anterior) * 100
          */
          let percentualCrescimento = (diferenca / salarioAnterior) * 100;

          // Formata o crescimento com duas casas decimais, vírgula e símbolo de %
          crescimentoFormatado =
            percentualCrescimento.toFixed(2).replace(".", ",") + "%";
        } else {
          /*
            Para o primeiro ano, não há crescimento calculável,
            pois não existe salário anterior no array.
          */
          crescimentoFormatado = " - ";
        }

        // Exibe os dados do ano atual
        console.log("Ano: ".padEnd(30, ".") + ano);

        // Exibe o salário mínimo formatado
        console.log(
          "Salário mínimo: ".padEnd(30, ".") +
            "R$ " +
            salario.toFixed(2).replace(".", ","),
        );

        // Exibe o crescimento salarial calculado
        console.log(
          "Crescimento salarial: ".padEnd(30, ".") + crescimentoFormatado,
        );

        // Exibe o IPCA correspondente ao mesmo ano
        console.log(
          "Inflação IPCA: ".padEnd(30, ".") +
            ipca.toFixed(2).replace(".", ",") +
            "%",
        );

        // Linha separadora
        console.log("\n".padEnd(50, "-") + "\n");
      }

      // Encerra o case 3
      break;

    case 4:
      /*
        Caso 4:
        Encerra o programa.

        Como a condição do while é escolha != 4,
        ao escolher 4 o loop termina.
      */
      console.log("\n::: PROGRAMA ENCERRADO :::");
      break;

    default:
      /*
        Caso o usuário digite uma opção que não existe no menu,
        uma mensagem de erro é exibida.
      */
      console.log("\n>>> Opção inválida! Escolha uma alternativa entre 1 e 4. <<<\n");
      break;
  }

  /*
    O programa continua repetindo enquanto a escolha for diferente de 4.
  */
} while (escolha != 4);