/*const meuTitulo = document.querySelector("h1")
meuTitulo.textContent = "Olá, Mundo"*/
/*document.querySelector("button").addEventListener("mouseout" , function () {
    alert("Você clicou aqui")
})*/

const imagem = document.querySelector("img")
imagem.onclick = () => {
    const src = imagem.getAttribute("src")
    if(src === "images/logo-senai.jpg"){
        imagem.setAttribute("src", "images/logo-senai2.png")
    } else {
        imagem.setAttribute("src" , "images/logo-senai.jpg")
    }
};

let button = document.querySelector("button")
let heading = document.querySelector("h1")

function setUserName() {
    const nome = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", nome);
    heading.textContent = `Bem-vindo ao SENAI, ${nome}`;

        if (!localStorage.getItem("name")) {
            setUserName();
        } else{
            const storedName = localStorage.getItem("name"); 
            heading.textContent = `Bem-vindo ao SENAI, ${storedName}`
        }
}

button.onclick = () => {
    setUserName();
};