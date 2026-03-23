import {Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ProductViewPage from './pages/productViewPage';
import CategoriasPage from './pages/CategoriasPage';
import MeusPedidosPage from './pages/MeusPedidosPage';
import ProductPage from './pages/productPage'; 
import CompletarCadastro from './pages/CompletarCadastro';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App(){
  return (
    <Routes>
      <Route path="/" element= {<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="produtos" element={<ProductPage/>}/>
        <Route path="produto/:id" element={<ProductViewPage/>}/>
        <Route path="categorias"element={<CategoriasPage/>}/>
        <Route path="pedidos" element={<MeusPedidosPage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Cadastro/>}/>
        <Route path="completar-cadastro" element={<CompletarCadastro/>}/>
      </Route>
    </Routes>
  );
}
export default App;