import logo from './logo.svg'
import './App.css'
import NavabarPage from './Component/Navbar/NavabarPage'
import Footer from './Component/footer/Footer'
import Home from './Home/Home'
import AllRouter from './AllRouter/AllRouter'

function App() {
  
  return (
    <div className="app">
      <NavabarPage />
      <AllRouter/>
      {/* <Home/> */}
      <Footer/>
    </div>
  )
}

export default App
