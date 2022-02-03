
export interface IPessoaCore {
  title: string
  dados: IDados[]
  endereço: IEndereço[]
}

export interface IDados {
  id: string
  nome: string
  dataNascimento: string
  email: string
}

export interface IEndereço {
  id: string
  logradouro: string
  numero: string
  bairro: string
  estado: string
  cep: string
}

export const pessoa: IPessoaCore[] = [
  {
    title: 'dadosPessoas',
    dados: [
      {
        id: 'dadosPessoais',
        nome: 'nome',
        dataNascimento: 'dataNascimento',
        email: 'email'
      }
    ],
    endereço: [
      {
        id: 'endereço',
        logradouro: 'Rua',
        numero: 'numero',
        bairro: 'bairro',
        estado: 'uf',
        cep: 'cep',
      }
    ]
  }
]