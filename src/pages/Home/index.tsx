import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../container/BarraLateral'
import ListaDeTarefas from '../../container/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltro />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)
export default Home
