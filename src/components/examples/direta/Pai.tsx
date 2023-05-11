import Filho from './Filho'

export interface PaiProps {
  nome: string
  sobrenome: string
}

export default function Pai(props: PaiProps) {
  return (
    <div>
      <h1 className="text-xl font-bold">
        {props.nome} {props.sobrenome}
      </h1>
      <ul className="list-disc ml-12">
        <Filho nome="Andreia" sobrenome={props.sobrenome} />
        <Filho nome="Any" sobrenome={props.sobrenome} />
        <Filho nome="Gustavo" sobrenome={props.sobrenome} />
        <Filho nome="Brian" sobrenome={props.sobrenome} />
        <Filho nome="Sherman" sobrenome={props.sobrenome} />
        <Filho nome="Izadora" sobrenome={props.sobrenome} />
        <Filho nome="Altair" sobrenome={props.sobrenome} />
        <Filho nome="Marly" sobrenome={props.sobrenome} />
      </ul>
    </div>
  )
}
