import { SetStateAction, useEffect, useState } from "react";
import { IPessoaCore, IDados, IEndereço } from '.././../interfaces/pessoas';
import Loader from '../assets/loader.gif';



export function Home() {

  const [pessoa, setPessoa] = useState('Luci')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const allDados = _.cloneDeep([...dados.nome])

      }, [IPessoaCore.dados.nome]
  }

  return Loader ? <img src={Loader} alt='Loading' /> :

    <>

      {nomes.map((item, index) =>
        <div key={index}>
          <div>{item.nome}</div>
          <button onClick={() => trocarNome(item.nome, index)}>
            TROCAR NOME
          </button>
          <br />
        </div>
      )}
      <div>
        NOME ATUAL: {variavel}
      </div>
    </>
}