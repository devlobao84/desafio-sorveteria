/* Enunciado:
Desenvolver uma aplicação  que ajude uma sorveteria a identificar de forma fácil como foram as vendas de um determinado dia, no final retorne um relatório no formato json (no console) com as seguintes informações:
* O nome da pessoa que fez o pedido de maior valor, qual o valor desse pedido e o que foi o item do pedido.
* O nome da pessoa que fez o pedido de menor valor, qual o valor desse pedido e o que foi o item do pedido.
* O número total de pedidos do dia.
* O valor médio de cada pedido.
Dicas:
-Utilize variáveis  temporárias para armazenar menor e maior valor.
Plus:
-Garanta que vai haver um padrão de nomes nesse report
-Certifique-se de que vai estar tratando 'número como número '
-Utilize callbacks
-Utize desestruturação
Entradas:
O sistema deve começar com um array contendo objetos do tipo pedidos.
O objeto do tipo pedidos deve ter:
* nome da pessoa
* valor do pedido
* item comprado
* data do pedido
*/


     //PASSO 1 
     const vendas = [];
     let somaDosValoresDoDia = 0;
     let quantidadeDeVendasDoDia = 0;
     let valorMedioDosPedidos = (_somaDosValoresDoDia, _quantidadeDeVendasDoDia) => _somaDosValoresDoDia /    _quantidadeDeVendasDoDia;
     let vendasJonas = 0;
     let vendasJoao = 0;
     let vendasRafael = 0;
     let naoEncontrado;
     
     //PASSO 2
     function pedido (vendaDoDia, vendedor, cliente, valor, sabor, data) {
         this.vendaDoDia = vendaDoDia;
         this.vendedor = vendedor;
         this.cliente = cliente;
         this.valor = valor;
         this.sabor = sabor;
         this.data = new Date().toUTCString();
     }
     
     //PASSO 3
     let vender = (vendedor, cliente, valor, sabor) => {
         quantidadeDeVendasDoDia++;
         vendas.push(new pedido(quantidadeDeVendasDoDia, vendedor, cliente, valor, sabor));
         somaDosValoresDoDia += valor;
         switch (vendedor){
             case "Jonas":
                 vendasJonas++;
                 break;
             case "Joao":
                 vendasJoao++;
                 break;
             case "Rafael":
                 vendasRafael++;
                 break;
             default:
                 naoEncontrado;
                 break;
         }
     }
     //PASSO 4
     let relatorio = () => {
         let vendasOrdenadasPorValor = vendas.sort(function (a, b) {return a.valor - b.valor;});
         let pedidoMaisCaro = vendasOrdenadasPorValor[vendasOrdenadasPorValor.length -1];
         let pedidoMaisBarato = vendasOrdenadasPorValor[0];
     
         console.log(`Olá, hoje nós vendemos ${quantidadeDeVendasDoDia} sorvetes, somando R$${somaDosValoresDoDia}. O preço  médio de cada pedido foi ${valorMedioDosPedidos(somaDosValoresDoDia, quantidadeDeVendasDoDia)}.`);
         console.log("\nPara uma análise um pouco mais detalhada, segue outras informações:");
         console.log("O pedido mais caro foi: \n");
         console.log(pedidoMaisCaro)
         console.log("O pedido mais barato foi: \n")
         console.log(pedidoMaisBarato)
         console.log("\nAqui vão todos os pedidos do dia: \n");
         console.log(vendas.sort(function (a, b) {return a.vendaDoDia - b.vendaDoDia;}))
         console.log(`O Jonas vendeu ${vendasJonas} sorvetes.`);
         console.log(`O João vendeu ${vendasJonas} sorvetes.`);
         console.log(`O Rafael vendeu ${vendasJonas} sorvetes.`);
     
     
     }
     
     vender("Jonas", "Eduardo", 4, "chocolate belga");
     vender("João", "Rafael", 10, "banana");
     vender("Rafael", "Ju", 2.50, "morango");
     
     relatorio();
