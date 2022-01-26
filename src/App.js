import './App.css';
import './timeline.css';
import Header from "./components/Header";
import Projects from "./components/Projects";
import {Container} from "@mui/material";
import Diplomes from "./components/Diplomes";
import Experiences from "./components/Experiences";
import Competances from "./components/Competances";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<About/>*/}

            <div className="bg-white" >
                <Experiences/>
            </div>

            <Container>
                <Competances/>
            </Container>
            <Container  maxWidth="xl">
                {/*<Projects/>*/}
                <Diplomes/>
            </Container>
        </div>
    );
}

export default App;
