
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Categories from './components/categories/categories';
import { Route, Switch } from "react-router-dom"
import BlogData from './context/contextData';
// import Cate from './components/categories/cate'
function App() {
  return (<div>
    <BlogData>
      <Header />
    </BlogData>

    <Switch>
      <Route exact path="/" component={Home} />
      <BlogData>
        <Route exact path="/:cat" component={Categories} />
      </BlogData>
    </Switch>

  </div>
  );
}

export default App;



  // {/*
  //   <switch>
  //   <route path="/bollywood"  component={Bollywood} exact  />
  //   </switch> 
  //    */}