import './styles/App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Hobbies from './pages/Hobbies';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/clay-portfolio' exact Component={Home} />
          <Route path='/clay-portfolio/projects' exact Component={Projects}/>
          <Route path='/clay-portfolio/resume' exact Component={Resume} />
          <Route path='/clay-portfolio/hobbies' exact Component={Hobbies}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
