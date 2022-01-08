import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import {Container} from "@mui/material";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<About/>*/}
            <Container>
                <div className=" mt-5 mb-5">
                    <h4 className="about-titles ">compétences</h4>
                    <hr className="about-divider mb-5"/>
                </div>
                <Projects/>
            </Container>
        </div>
    );
}

export default App;
