import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: ' Estudar Typescript',
    descricao: 'Ver a aula 1',
    prioridade: ' importante',
    status: ' pendente'
  },

  {
    titulo: 'pagar contas',
    descricao: 'telefone',
    prioridade: 'urgente',
    status: ' pendente'
  },

  {
    titulo: ' Estudar Typescript',
    descricao: 'Ver a aula 1',
    prioridade: ' importante',
    status: ' concluido'
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
