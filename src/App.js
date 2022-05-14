import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import AddItem from "./components/pages/AddItem/AddItem";
import Blogs from "./components/pages/Blogs/Blogs";
import Home from "./components/pages/Home/Home";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";
import ManageItems from "./components/pages/ManageItems/ManageItems";
import MyItems from "./components/pages/MyItems/MyItems";
import NotFound from "./components/pages/NotFound/NotFound";
import RequireAuth from "./components/pages/RequireAuth/RequireAuth";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route
          path="manageitems"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        />
        <Route
          path="item/:itemId"
          element={
            <RequireAuth>
              <ItemDetail></ItemDetail>
            </RequireAuth>
          }
        />
        <Route path="additem" element={<AddItem></AddItem>} />
        <Route path="myitems" element={<MyItems></MyItems>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="aboutus" element={<AboutUs></AboutUs>} />
        <Route path="signin" element={<SignIn></SignIn>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
