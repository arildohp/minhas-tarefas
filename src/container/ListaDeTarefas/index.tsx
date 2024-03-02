import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import * as enums from '../../utils/enums/tarefa'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver a aula 1',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },

  {
    titulo: 'pagar contas',
    descricao: 'telefone',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  },

  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver a aula 1',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p> 2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
