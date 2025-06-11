document
  .getElementById("filtro-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const params = new URLSearchParams();

    // Pega os valores e adiciona na URL se não estiverem vazios
    ["marca", "modelo", "ano", "status"].forEach((campo) => {
      const valor = form[campo].value.trim();
      if (valor) params.append(campo, valor);
    });

    const url = `/api/veiculos?${params.toString()}`;
    try {
      const response = await fetch(url);
      const veiculos = await response.json();

      const tbody = document.querySelector("#tabela-veiculos tbody");
      tbody.innerHTML = "";

      if (veiculos.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center">Nenhum veículo encontrado.</td></tr>`;
        return;
      }

      veiculos.forEach((v) => {
        const row = `
        <tr>
          <td>${v.id ?? ""}</td>
          <td>${v.modelo ?? ""}</td>
          <td>${v.marca ?? ""}</td>
          <td>${v.ano ?? ""}</td>
          <td>${v.cor ?? ""}</td>
          <td>R$ ${v.preco?.toLocaleString("pt-BR") ?? ""}</td>
          <td>${v.quilometragem ?? ""} km</td>
          <td>${v.status ?? ""}</td>
        </tr>
      `;
        tbody.innerHTML += row;
      });
    } catch (error) {
      console.error("Erro ao buscar veículos:", error);
      alert("Erro ao buscar veículos. Verifique o console.");
    }
  });
