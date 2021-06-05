import "./App.css";
import { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Banner from "./Banner";
import Nav from "./Nav";
import Details from "./Details";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
function App() {
  const [items, setItems] = useState(Details);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const Location = useLocation();
  console.log(name);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser.email);
      if (authUser) {
        setName(authUser.email);
      }
    });
  }, []);
  return (
    <Switch location={Location} key={Location.pathname}>
      <Route path="/" exact>
        <Nav
          name={name}
          setName={setName}
          cart={cart}
          user={user}
          setUser={setUser}
        />
        <Banner
          cart={cart}
          setCart={setCart}
          items={items}
          setItems={setItems}
        />
      </Route>
      <Route path="/login">
        <Nav
          cart={cart}
          name={name}
          setName={setName}
         
          user={user}
          setUser={setUser}
        />
        <Login user={user} setUser={setUser} />
      </Route>
      <Route path="/checkout">
        <Nav
          name={name}
          setName={setName}
          cart={cart}
          user={user}
          setUser={setUser}
          
        />
        <Checkout cart={cart} setCart={setCart} />
      </Route>
    </Switch>
  );
}

export default App;
