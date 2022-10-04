import Header from '../Header';
import './page.css';
import './home.scss'
import { Home } from "./homeblog";
import { Content } from "./content";
import Footer from '../Footer';

function SukumarBlog() {
  return (
    <div className="App">
    <Header />
     <Home />
      <Content /> 
      <Footer />
    </div>
  );
}

export default SukumarBlog;
