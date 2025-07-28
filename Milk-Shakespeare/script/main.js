let button = document.querySelector("button")
let heading = document.querySelector("h1")

function setUserName() {
    const nome = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", nome);
    heading.textContent = `Olá ${nome}, bem vindo ao Milk Shakespeare`;

        if (!localStorage.getItem("name")) {
            setUserName();
        } else{
            const storedName = localStorage.getItem("name"); 
            heading.textContent = `Olá ${storedName}, bem vindo ao Milk Shakespeare`
        }
}

button.onclick = () => {
    setUserName();
};