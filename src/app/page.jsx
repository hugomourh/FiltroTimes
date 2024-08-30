
"use client";
import { useState } from "react";
import estilo from './page.module.css';
import { times } from "./Componentes/Dados_Time/Dados_time";
import ItemJogos from "./Componentes/Dados_Time/Item";

export default function Home() {
  const [divisao, setDivisao] = useState(times); 
  const [textoBusca, setTextoBusca] = useState('');

  
  const filtrardivisao = (divisaoFiltro) => {
    const filtrados = times.filter(clube => clube.divisao === divisaoFiltro);
    setDivisao(filtrados);
  };

  
  const limpar = () => {
    setDivisao(times);
    setTextoBusca('');
  };

  const handleBuscarJogo = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setDivisao(times.filter((clube) =>
      clube.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      clube.divisao.toLowerCase().includes(textoDigitado.toUpperCase()))
    );
  };

  return (
    <>

    <div className={estilo.fundo}></div>

      <div className={estilo.bloco}>
        <h1 className={estilo.titulo}>ACHE SEU TIME</h1>
        <div >
          <button className={estilo.button} onClick={() => filtrardivisao("Primeira")}>PRIMEIRA DIVISÃO</button>
          <button className={estilo.button} onClick={() => filtrardivisao("Segunda")}>SEGUNDA DIVISÃO</button>
          <button className={estilo.button}onClick={() => filtrardivisao("Terceira")}>TERCEIRA DIVISÃO</button>
          <button className={estilo.button} onClick={limpar}>LIMPAR PESQUISA</button> 
        </div>
        <input className={estilo.input}
          type="text"
          value={textoBusca}
          onChange={(event) => handleBuscarJogo(event.target.value)}
          placeholder="Nome do clube que deseja procurar."
        />
          
      

      
  
    
      <div>
        {divisao.length > 0 ? (
          divisao.map((clube) => (
            <ItemJogos
              key={clube.id}
              nome={clube.nome}
              
            />
          ))
        ) : (
          <p>Nenhum time encontrado.</p>
        )}
      </div>


      </div>
    </>
  );
}
  
  

