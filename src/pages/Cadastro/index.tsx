import { flattenDiagnosticMessageText } from 'typescript'
import BarraLateral from '../../container/BarraLateral'
import Formulario from '../../container/Formulario'

const Cadastro = () => (
  <>
    <BarraLateral mostrarFiltro={false} />
    <Formulario />
  </>
)

export default Cadastro
