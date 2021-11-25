
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Categories from './components/categories/categories';
import { Route, Switch } from "react-router-dom"
import BlogData from './context/contextData';
import ViewArticles from "./components/articles/articles"
import pageNotFound from './components/notFound/pageNotFound';
import BlogPost from './components/blogPost/blogPost';



// import Cate from './components/categories/cate'


function App() {
  return (<div>
    {/* <BlogData> */}
    <Header />
    {/* </BlogData> */}

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles/:id" component={ViewArticles} />


      <Route exact path="/category/:cat/blog/:path" component={BlogPost} />
      {/* <Route exact path="/category/hollywood/blog/:path" component={BlogPost} />
      <Route exact path="/category/fitness/blog/:path" component={BlogPost} />
      <Route exact path="/category/food/blog/:path" component={BlogPost} />
      <Route exact path="/category/technology/blog/:path" component={BlogPost} /> */}


      <BlogData>
        <Route exact path="/category/:cat" component={Categories} >

        </Route>
      </BlogData>

      <Route component={pageNotFound} />
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