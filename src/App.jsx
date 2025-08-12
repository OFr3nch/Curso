import './style/styles.css'

import imgLog from './assets/login.svg' 

function MyButton() {

  return (
    <button className="botao">Cadastrar</button>
  )
}

function Formulario() {

  return (
    <>
      <form className='questionario'>
        <div className='image-form'>
          <img src={imgLog} alt="imagem de login" srcset='' />
        </div>
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" required></input>

        <label for="senha">Senha</label>
        <input type="password" id="senha" name="senha" required></input>
        <MyButton />
      </form>
    </>
  )
}

function App() {

  return (
    <>
      <h1>Olá, mundo</h1>
      <Formulario/>
    </>

  )
}

export default App
