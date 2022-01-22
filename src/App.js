import './App.css';
import './timeline.css';
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import {Container} from "@mui/material";
import {School} from "@mui/icons-material";
import Diplomes from "./components/Diplomes";
import Experiences from "./components/Experiences";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<About/>*/}
            <Container  maxWidth="xl">

                <Diplomes/>
                {/*<Projects/>*/}
            </Container>
            <div className="bg-white" >
                <Experiences/>
            </div>

        </div>
    );
}

export default App;
