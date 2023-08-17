import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
    <Navbar title="Project" aboutText="About Project"/>
    <div className="container my-3">
    <TextForm heading ="Enter text to analyze"/>
    </div>
    
    </>
  );
}

export default App;
