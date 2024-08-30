import estilo from './Dados.module.css'

export default function ItemJogos ({ nome, divisao }) {
    return (

      <>
      <div className={estilo.clubes}>
    {nome}
    {divisao}
      </div>

      </>
    );
  }