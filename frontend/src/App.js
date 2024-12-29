import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from './screens/Layout';
import Home from './screens/Home';
import About from "./screens/About";
import Contact from "./screens/Contact";
import Shop from "./screens/Shop";
import ProfileIcon from "./components/ProfileIcon";
import UserProfile from "./screens/UserProfile";
import Category from "./screens/Category";
import RegistrationForm from "./components/Product/RegistrationForm";
import ShoppingCart from "./components/Product/ShoppingCart";
import FoodCategory1 from "./components/FoodCategory1";
import DessertsCategory2 from "./components/DessertsCategory2";
import BeveragesCategory3 from "./components/BeveragesCategory3";
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/user" element={<UserProfile/>}/>
            <Route path="/category/:id" element={<Category/>}/>
            <Route path="/registrationForm" element={<RegistrationForm />} />
             <Route path="/ProfileIcon" element={<ProfileIcon />} />
             <Route path="/user" element={<UserProfile/>}/>
              <Route path="/shopping-cart" element={<ShoppingCart/>}/>
              <Route path="/category/1" element={<FoodCategory1/>}/>
             <Route path="/category/2" element={<DessertsCategory2/>}/>
             <Route path="/category/3" element={<BeveragesCategory3/>}/>

             

        </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;

