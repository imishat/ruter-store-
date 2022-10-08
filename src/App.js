import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventorey from './components/Inventory/Inventorey';
import Main from './components/layOut/Main';
import Oder from './components/Oder/Oder';
import Shop from './components/Shop/Shop';
import { productAndcart } from './Loders/productAndCart';

function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
      { path:'/' ,element:<Shop></Shop>},

      { path:'shop' , 
      loader:()=>fetch('products.js'),
      
      element:<Shop></Shop>},

      {path:'about',element:<About></About>},

      {path:'oder',
      loader:productAndcart,
      
      element:<Oder></Oder>},

      {path:'inventory',element:<Inventorey></Inventorey>}
      
    ]}

  ])

    return ( 
      <RouterProvider router={router}></RouterProvider>

    );
}

export default App;