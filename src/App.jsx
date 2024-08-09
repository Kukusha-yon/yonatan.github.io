import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Main from "./Components/Main/Main"
import Mywork from "./Components/MyWork/Mywork"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"


const App = () => {
  return (
    <div>
       <Navbar /> 
       <Main />
       <About />
       <Services />
       <Mywork />
       <Contact />
       <Footer />
    </div>
  )
}

export default App