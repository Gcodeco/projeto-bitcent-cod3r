import Grade from '@/components/examples/filhos/Grade'
import Caixa from '@/components/examples/filhos/Caixa'
import Pagina from '@/components/template/Pagina'

export default function PaginaFilhos() {
  return (
    <Pagina>
      <Grade>
        <Caixa>#1</Caixa>
        <Caixa>#2</Caixa>
        <Caixa>#3</Caixa>
        <Caixa>#1</Caixa>
        <Caixa>#2</Caixa>
        <Caixa>#3</Caixa>
        <Caixa>#1</Caixa>
        <Caixa>#2</Caixa>
        <Caixa>#3</Caixa>
      </Grade>
    </Pagina>
  )
}
