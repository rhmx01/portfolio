import './App.css';
import './timeline.css';
import Header from "./components/Header";
import Projects from "./components/Projects";
import {Container} from "@mui/material";
import Diplomes from "./components/Diplomes";
import Experiences from "./components/Experiences";
import Competances from "./components/Competances";
import About from "./components/About";

function App() {
    return (
        <div className="App mb-8">
            <Header/>

            <About/>
            <Container>
                <Competances/>
            </Container>
            <div className="bg-white" >
                <Experiences/>
            </div>

            <Container  maxWidth="xl">
                <Diplomes/>
            </Container>

            <Container  maxWidth="xl">
                <Projects/>
            </Container>
        </div>
    );
}

export default App;
