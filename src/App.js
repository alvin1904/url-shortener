import './reset.css';
import './App.css';

import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Links from './components/Links.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
      <Footer/>
      <Links/>
    </div>
  )
}

export default App;
