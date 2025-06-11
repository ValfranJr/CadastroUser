document.getElementById("cep").addEventListener("blur", (evento) => {
  const elemento = evento.target;
  const cepInformado = elemento.value;

  if (!(cepInformado.length === 8))
    return;

  fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(response => response.json())
    .then(data => {
      if (!data.erro) {
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('estado').value = data.uf;

      } else {
        alert("CEP não encontrado.")
      }

    })
    .catch(error => console.error("Erro ao buscar o CEP: ", error));
})
  document.getElementById("nome").addEventListener("input", () => {
    localStorage.setItem("nome", document.getElementById("nome").value);
  })
  document.getElementById("cep").addEventListener("input", () => {
    localStorage.setItem("cep", document.getElementById("cep").value);
  })
  document.getElementById('logradouro').addEventListener("input", () => {
    localStorage.setItem("logradouro", document.getElementById("logradouro").value);
  })
  document.getElementById('bairro').addEventListener("input", () => {
    localStorage.setItem("bairro", document.getElementById("bairro").value);
  })
  document.getElementById('cidade').addEventListener("input", () => {
    localStorage.setItem("cidade", document.getElementById("cidade").value);
  })
  document.getElementById('estado').addEventListener("input", () => {
    localStorage.setItem("estado", document.getElementById("estado").value);
  })
  document.getElementById('numero').addEventListener("input", () => {
    localStorage.setItem("numero", document.getElementById("numero").value);
  })
  document.addEventListener('DOMContentLoaded', () => {
  const nomeSalvo = localStorage.getItem("nome");

  if (nomeSalvo) {
    document.getElementById("nome").value = nomeSalvo;
  }
  const cepSalvo = localStorage.getItem("cep");
  if (cepSalvo) {
    document.getElementById("cep").value = cepSalvo;
  }
  const logradouroSalvo = localStorage.getItem("logradouro");
  if (logradouroSalvo) {
    document.getElementById("logradouro").value = logradouroSalvo;
  }
  const bairroSalvo = localStorage.getItem("bairro");
  if (bairroSalvo) {
    document.getElementById("bairro").value = bairroSalvo;
  }
  const cidadeSalvo = localStorage.getItem("cidade");
  if (cidadeSalvo) {
    document.getElementById("cidade").value = cidadeSalvo;
  }
  const estadoSalvo = localStorage.getItem("estado");
  if (estadoSalvo) {
    document.getElementById("estado").value = estadoSalvo;
  }
})