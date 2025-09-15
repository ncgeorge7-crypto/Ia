let produtos = JSON.parse(localStorage.getItem("estoque")) || [];

function atualizarTabela() {
  const lista = document.getElementById("lista");
    lista.innerHTML = "";
      
        produtos.forEach((p, i) => {
            let alerta = p.quantidade < 5 ? "⚠️" : "";
                lista.innerHTML += `
                      <tr>
                              <td>${p.nome}</td>
                                      <td>${p.quantidade} ${alerta}</td>
                                              <td>R$ ${p.preco.toFixed(2)}</td>
                                                      <td><button onclick="removerProduto(${i})">Remover</button></td>
                                                            </tr>
                                                                `;
                                                                  });

                                                                    localStorage.setItem("estoque", JSON.stringify(produtos));
                                                                    }

                                                                    function adicionarProduto() {
                                                                      const nome = document.getElementById("nome").value;
                                                                        const quantidade = parseInt(document.getElementById("quantidade").value);
                                                                          const preco = parseFloat(document.getElementById("preco").value);

                                                                            if (nome && quantidade && preco) {
                                                                                produtos.push({ nome, quantidade, preco });
                                                                                    atualizarTabela();
                                                                                      } else {
                                                                                          alert("Preencha todos os campos!");
                                                                                            }
                                                                                            }

                                                                                            function removerProduto(index) {
                                                                                              produtos.splice(index, 1);
                                                                                                atualizarTabela();
                                                                                                }

                                                                                                atualizarTabela();