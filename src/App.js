import Header from "./Component/header"
import './App.css';
import Greeting from "./Component/Greeting";
import AboutMe from "./Component/About_me";
import Projects from "./Component/Projects"

function App() {
  return (
   <>
   <Header />
   <Greeting />
   <AboutMe />
   <Projects />
   </>
  );
}

export default App;
