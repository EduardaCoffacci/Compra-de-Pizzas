const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
pizzaJson.map((item, index) => {
  let pizzaItem = c(".models .pizza-item").cloneNode(true); // clonando o item e tudo que tem dentro dele

  pizzaItem.setAttribute("data-key", index); // vai setar um atributo chamado data-key com o valor do index em pizza item
  pizzaItem.querySelector(".pizza-item--img img").src = item.img; // dentro de pizzaItem seleciona a imagem e substitui por item.img
  pizzaItem.querySelector(
    ".pizza-item--price"
  ).innerHTML = `R$ ${item.price.toFixed(2)}`; // dentro de pizzaItem seleciona o preço e substitui por item.price toFixed método para
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name; // dentro de pizzaItem seleciona o nome e substitui por item.name
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description; // dentro de pizzaItem seleciona a descrição e substitui por item.descrição
  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault(); // previna o comportamento padrão
    let key = e.target.closest(".pizza-item").getAttribute("data-key"); // ache o elemento .pizza-item e pegue o atributo data-key
    c(".pizzaBig img").src = pizzaJson[key].img;  // em '.pizzaInfo img' inseir imagem da pizza
    c(".pizzaInfo h1").innerHTML = pizzaJson[key].name; // em '.pizzaInfo h1' inseir o nome da pizza
    c(".pizzaInfo--desc").innerHTML = pizzaJson[key].description; //em '.pizzaInfo--desc' inseir a descrição da pizza

    c(".pizzaWindowArea").style.opacity = "0"; // seleciona o elemento .pizzaWindowArea adiciona visibilidade 0
    c(".pizzaWindowArea").style.display = "flex"; // seleciona o elemento .pizzaWindowArea mostra ne tela
    setTimeout(() => {
      c(".pizzaWindowArea").style.opacity = 1; // apos 200 miliseguntos vai mostrar na tela o .pizzaWindowArea
    }, 200);
  });

  //preencher as informaçoes em pizzaitem

  c(".pizza-area").append(pizzaItem); // vai pegar o conteudo que tem em .pizza-area e vai adiconar adicionar mais um conteudo
});
