import * as C from './AppStyles'

const App = () =>{
  return(
    <C.Container>
      Olá!Tudo bem?

     <a href="www.google.com.br" className="link">Link Google</a>
     
      <span>Olá tudo bem?</span>
      <C.Button bg="#FF0000">Botão Grande</C.Button>
      <C.Button bg="#00FF00" small>Botão Pequeno</C.Button>

    </C.Container>
  )
}

export default App