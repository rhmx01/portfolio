import './App.css';
import './timeline.css';
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import {Container} from "@mui/material";
import {School} from "@mui/icons-material";
import Diplomes from "./components/Diplomes";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<About/>*/}
            <Container  maxWidth="xl">
                <div className=" mt-5 mb-5">
                    <h4 className="about-titles "> <School/> diplômes</h4>
                    <hr className="about-divider mb-5"/>
                </div>
                <Diplomes/>
                {/*<Projects/>*/}
            </Container>


            {/*<div id="workexperience" className="sectionClass">*/}
            {/*    <div className="row ">*/}
            {/*        <div className="sectiontitle">*/}
            {/*            <h2>Work experience</h2>*/}
            {/*            <span className="headerLine"></span>*/}
            {/*        </div>*/}
            {/*        <div className="fullWidth eight columns">*/}
            {/*            <ul className="cbp_tmtimeline">*/}
            {/*                <li>*/}
            {/*                    <div className="cbp_tmicon cbp_tmicon-phone">*/}
            {/*                        <School/>*/}
            {/*                    </div>*/}
            {/*                    <div className="cbp_tmlabel wow fadeInRight animated">*/}
            {/*                        <h3>Web developer</h3>*/}
            {/*                        <div className="date">*/}
            {/*                            <i className="fa fa-calendar"></i>April 2014 - Current*/}
            {/*                        </div>*/}
            {/*                        <h4><i className="fa fa-flag"></i>Davic Company, Bratislava</h4>*/}
            {/*                        <p className="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing*/}
            {/*                            elit. Fugit obcaecati ipsa quae, iusto laudantium qui, nisi eum modi*/}
            {/*                            perspiciatis quasi facilis corporis iure soluta enim incidunt itaque aspernatur*/}
            {/*                            sequi tempora.</p>*/}
            {/*                    </div>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <div className="cbp_tmicon cbp_tmicon-screen">*/}
            {/*                        <School/>*/}
            {/*                    </div>*/}
            {/*                    <div className="cbp_tmlabel wow fadeInRight animated">*/}
            {/*                        <h3>Web designer</h3>*/}
            {/*                        <h4><i className="fa fa-flag"></i>Fannous Company, Prague</h4>*/}
            {/*                        <div className="date"><i className="fa fa-calendar"></i>June 2012 - April 2014</div>*/}
            {/*                        <p className="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing*/}
            {/*                            elit. Deserunt quasi perspiciatis, aliquid sed maiores accusamus. Adipisci*/}
            {/*                            quidem nostrum quos quae doloremque esse a, ipsum earum, recusandae omnis*/}
            {/*                            dignissimos et sint.</p>*/}
            {/*                    </div>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <div className="cbp_tmicon cbp_tmicon-mail">*/}
            {/*                        <School/>*/}
            {/*                    </div>*/}
            {/*                    <div className="cbp_tmlabel wow fadeInRight animated">*/}
            {/*                        <h3>Web designer</h3>*/}
            {/*                        <h4><i className="fa fa-flag"></i>Techixs Company, London</h4>*/}
            {/*                        <div className="date"><i className="fa fa-calendar"></i>November 2009 - June 2012*/}
            {/*                        </div>*/}
            {/*                        <p className="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing*/}
            {/*                            elit. Nulla labore atque alias ipsa, nam quod rerum repellat cumque, aliquam*/}
            {/*                            sequi vitae voluptatibus cum soluta incidunt tempore accusamus eius sed*/}
            {/*                            excepturi!Lorem ipsum dolor sit amet,*/}
            {/*                            consectetur adipisicing elit. Tempora natus veritatis aperiam repellendus dolor*/}
            {/*                            vel, expedita assumenda eos, mollitia quae ullam esse voluptas vero. Dolores*/}
            {/*                            culpa eaque vitae eum quibusdam?</p>*/}

            {/*                    </div>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <div className="cbp_tmicon cbp_tmicon-phone">*/}
            {/*                        <School/>*/}
            {/*                    </div>*/}
            {/*                    <div className="cbp_tmlabel wow fadeInRight animated">*/}
            {/*                        <h3>Freelancer</h3>*/}
            {/*                        <div className="date"><i className="fa fa-calendar"></i>Januar 2006 - November 2009*/}
            {/*                        </div>*/}
            {/*                        <p className="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing*/}
            {/*                            elit. Esse iusto, possimus hic at quisquam, incidunt illo asperiores et nobis,*/}
            {/*                            qui nulla consequatur molestiae quibusdam expedita dignissimos? Iste eum velit*/}
            {/*                            quos.</p>*/}
            {/*                    </div>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
}

export default App;
