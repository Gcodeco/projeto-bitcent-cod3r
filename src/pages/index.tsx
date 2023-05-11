import Linha from '@/components/layout/Linhas'
import Menu from '@/components/template/Menu'
import MenuItem from '@/components/template/MenuItem'
import Pagina from '@/components/template/Pagina'
import { IconTable } from '@tabler/icons-react'
import { IconArrowsDiff } from '@tabler/icons-react'
import { IconComponents } from '@tabler/icons-react'
import { IconH1 } from '@tabler/icons-react'
import { IconClick } from '@tabler/icons-react'
import { IconSitemap } from '@tabler/icons-react'
import { IconArrowMoveDown } from '@tabler/icons-react'
import { IconArrowMoveUp } from '@tabler/icons-react'

import { IconClock, IconSourceCode } from '@tabler/icons-react'

export default function Home() {
  return (
    <Pagina>
      <Menu>
        <Linha>
          <MenuItem
            icone={<IconSourceCode />}
            url="/hora.html"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Hora (Estático){' '}
          </MenuItem>
          <MenuItem
            icone={<IconSourceCode />}
            url="/horaAtual.html"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Hora com JS (Estático){' '}
          </MenuItem>
          <MenuItem
            icone={<IconClock />}
            url="/api/hora"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Hora (Dinâmico){' '}
          </MenuItem>

          <MenuItem
            icone={<IconTable />}
            url="/api/tabela?colunas=5&linhas=7"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            Tabela (Dinâmico){' '}
          </MenuItem>

          <MenuItem
            icone={<IconArrowsDiff />}
            url="/api/usuarios"
            className="bg-gradient-to-r from-red-500 to-yellow-500"
          >
            API de Usuários
          </MenuItem>
        </Linha>
        <Linha>
          <MenuItem
            icone={<IconComponents />}
            url="/examples/simples"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Componente Simples
          </MenuItem>

          <MenuItem
            icone={<IconH1 />}
            url="/examples/basico"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Componente Básico
          </MenuItem>
          <MenuItem
            icone={<IconClick />}
            url="/examples/evento"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Eventos
          </MenuItem>
          <MenuItem
            icone={<IconSitemap />}
            url="/examples/filhos"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Filhos
          </MenuItem>
          <MenuItem
            icone={<IconArrowMoveDown />}
            url="/examples/direta"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Comunicação Direta
          </MenuItem>
          <MenuItem
            icone={<IconArrowMoveUp />}
            url="/examples/indireta"
            className="bg-gradient-to-r from-cyan-500 to-red-500"
          >
            Comunicação Indireta
          </MenuItem>
        </Linha>
      </Menu>
    </Pagina>
  )
}
