let modalQt = 1; // variavel para armazenar quantidade de pizza
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// Liastagem das pizzas
pizzaJson.map((item, index) => {
  let pizzaItem = c(".models .pizza-item").cloneNode(true); // clonando o item e tudo que tem dentro dele

  pizzaItem.setAttribute("data-key", index); // vai setar um atributo chamado data-key com o valor do index em pizza item
  pizzaItem.querySelector(".pizza-item--img img").src = item.img; // dentro de pizzaItem seleciona a imagem e substitui por item.img
  pizzaItem.querySelector(
    ".pizza-item--price"
  ).innerHTML = `R$ ${item.price.toFixed(2)}`; // dentro de pizzaItem seleciona o preço e substitui por item.price toFixed método para
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name; // dentro de pizzaItem seleciona o nome e substitui por item.name
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description; // dentro de pizzaItem seleciona a descrição e substitui por item.descrição

  //Evento de click para abrir o modal
  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault(); // previna o comportamento padrão
    let key = e.target.closest(".pizza-item").getAttribute("data-key"); // ache o elemento .pizza-item e pegue o atributo data-key
    modalQt = 1;
    c(".pizzaBig img").src = pizzaJson[key].img; // em '.pizzaInfo img' inseir imagem da pizza
    c(".pizzaInfo h1").innerHTML = pizzaJson[key].name; // em '.pizzaInfo h1' inseir o nome da pizza
    c(".pizzaInfo--desc").innerHTML = pizzaJson[key].description; //em '.pizzaInfo--desc' inseir a descrição da pizza
    c(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[key].price.toFixed(
      2
    )}`; // adiciona o preço da pizza selecionada no modal
    c(".pizzaInfo--size.selected").classList.remove("selected"); // remove a classe selected do elemento
    cs(".pizzaInfo--size").forEach((size, sizeIndex) => {
      if (sizeIndex == 2) {
        size.classList.add("selected"); // se o elemento sizeIndex for igual 2 adiciona a classe selected
      }

      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex]; // preencher no modal o peso das pizzas
    });

    c(".pizzaInfo--qt").innerHTML = modalQt;

    c(".pizzaWindowArea").style.opacity = "0"; // seleciona o elemento .pizzaWindowArea adiciona visibilidade 0
    c(".pizzaWindowArea").style.display = "flex"; // seleciona o elemento .pizzaWindowArea mostra ne tela
    setTimeout(() => {
      c(".pizzaWindowArea").style.opacity = 1; // apos 200 miliseguntos vai mostrar na tela o .pizzaWindowArea
    }, 200);
  });

  //preencher as informaçoes em pizzaitem

  c(".pizza-area").append(pizzaItem); // vai pegar o conteudo que tem em .pizza-area e vai adiconar adicionar mais um conteudo
});

// Eventos do modal
function closeModal() {
  c(".pizzaWindowArea").style.opacity = 0;
  setTimeout(() => {
    c(".pizzaWindowArea").style.display = "none";
  }, 500);
}
cs(".pizzaWindowArea, .pizzaInfo--cancelMobileButton").forEach((item) => {
  item.addEventListener("click", closeModal);
});
