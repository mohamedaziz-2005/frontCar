
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavAuth from './Components/NavAuth';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Profil from './Components/Profil';
import PrivateRoute from './Components/PrivateRoute';
import AffErr from './Components/AffErr';
import ContactsList from './Components/Contact/ContactsList';
import AddContact from './Components/Contact/AddContact';
import EditeContact from './Components/Contact/EditeContact';
import ProductsListe from './Components/Product/ProductsList';
import ProductAdd from './Components/Product/ProductAdd';
import ProductEdite from './Components/Product/ProductEdite';
import CommandsList from './Components/Command/CommandsList';
import AddCommand from './Components/Command/AddCommand';
import EditeCommand from './Components/Command/EditeCommand';
import EditProfil from './Components/Contact/EditProfil';
import MyCommandesList from './Components/Command/MyCommandesList';

function App() {
  return (
    <div>
      <NavAuth/>
      <AffErr/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>} />
        <Route path='/ContactsList' element={<ContactsList/>} />
        <Route path='/AddContact' element={<AddContact/>} />
        <Route path='/EditeContact/:id' element={<EditeContact/>} />
         <Route path='/EditProfil' element={<EditProfil/>} />
        <Route path='/ProductsList' element={<ProductsListe/>} />
        <Route path='/ProductAdd' element ={<ProductAdd/>} />
        <Route path='/ProductEdite/:id' element={<ProductEdite/>} />
        <Route path='/CommandsList' element={<CommandsList/>} />
        <Route path='/MyCommandsList' element={<MyCommandesList/>} />
        <Route path='/AddCommand' element={<AddCommand/>} />
        <Route path='/EditeCommand/:id' element={<EditeCommand/>} />

      </Routes>

      
    </div>
  );
}

export default App;
