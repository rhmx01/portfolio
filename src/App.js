import './App.css';
import './timeline.css';
import Header from "./components/Header";
import Projects from "./components/Projects";
import {Container} from "@mui/material";
import Diplomes from "./components/Diplomes";
import Experiences from "./components/Experiences";
import Competances from "./components/Competances";
import About from "./components/About";
import Certificates from "./components/Certificates";

function App() {
    return (
        <div className="App mb-16">
            <Header/>

            <div className="" >
                <About/>
            </div>
            <Container>
                <Competances/>
            </Container>
            <div className="" >
                <Experiences/>
            </div>

            <Container  maxWidth="xl">
                <Diplomes/>
            </Container>
            {/*<Container  maxWidth="xl">*/}
            {/*    <Certificates/>*/}
            {/*</Container>*/}

            <Container  maxWidth="xl">
                <Projects/>
            </Container>
        </div>
    );
}

export default App;
