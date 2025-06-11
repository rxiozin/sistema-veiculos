document
  .getElementById("form-veiculo")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const dados = {
      modelo: form.modelo.value,
      marca: form.marca.value,
      ano: form.ano.value,
      cor: form.cor.value,
      preco: form.preco.value,
      quilometragem: form.quilometragem.value,
      status: form.status.value,
    };

    try {
      const response = await fetch("/api/veiculos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      const mensagem = document.getElementById("mensagem");
      if (response.ok) {
        mensagem.innerHTML = `<div class="alert alert-success">Veículo cadastrado com sucesso!</div>`;
        form.reset();
      } else {
        mensagem.innerHTML = `<div class="alert alert-danger">Erro ao cadastrar veículo.</div>`;
      }
    } catch (error) {
      console.error("Erro:", error);
      document.getElementById(
        "mensagem"
      ).innerHTML = `<div class="alert alert-danger">Erro de rede.</div>`;
    }
  });
