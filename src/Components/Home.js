import React, {Component} from 'react'
import {Header} from './Partials/Header'

{/* <li className="col-1 col-offset-1"><a href="journal.html" className="nav-link undefined">Journal</a>
    <ul className="dropdown">
        <li><a href="journal.html" className="nav-link undefined">Journal - Overview</a>
        </li>
        <li><a href="journal-single.html" className="nav-link undefined">Journal - Article</a>
        </li>
    </ul>
</li>  */}

// const Loader = () => (
//     <div id="loader" className="fh">
//         <section className="vcenter">
//         <div className="container">
//             <div className="indicator"> <span className="number">00</span><span className="unit">%</span>
//             <div className="loadbar">
//                 <div className="inner"></div>
//             </div>
//             </div>
//             <div className="img-count"><span className="loaded"></span><span className="description">images loaded</span></div>
//         </div>
//         </section>
//     </div>
// )

export default class Home extends Component {
    render() {

        const div_style = {
            backgroundImage: "url(images/hero/03.jpg)"
        }

        return (
            <div id="wrapper" className="animsition">
                
                <Header />
                <div id="inner">
                    <section className="behind-header">
                    <div id="home-slider" className="titanSlider fh fw">
                        <ul className="slides">
                            <li className="slide dark">
                                <div className="hero fs">
                                    <div className="bg faded"></div>
                                    <div className="vcenter">
                                    <div className="container">
                                        <div className="grid">
                                        <div className="col-1">2017</div>
                                        <div className="col-7">
                                            <div className="label">January</div><a href="project-single.html" className="project-link">
                                            <h1 className="stripe animatedText">Pye Luis <br/> Official</h1></a>
                                            <div className="label">Retouching</div>
                                            <div className="label">Art Direction</div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </li>
                                        <li className="slide dark">
                                            <div className="hero fs">
                                                <div className="bg faded"></div>
                                                <div className="vcenter">
                                                <div className="container">
                                                    <div className="grid">
                                                    <div className="col-1">2016</div>
                                                    <div className="col-7">
                                                        <div className="label">November</div><a href="project-single.html" className="project-link">
                                                        <h1 className="stripe animatedText">Cardiac Arrest</h1></a>
                                                        <div className="label">Posters</div>
                                                        <div className="label">Banners</div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="slide dark">
                                            <div className="hero fs">
                                                <div style={div_style} className="bg faded"></div>
                                                <div className="vcenter">
                                                <div className="container">
                                                    <div className="grid">
                                                    <div className="col-1">2015</div>
                                                    <div className="col-7">
                                                        <div className="label">May</div><a href="project-single.html" className="project-link">
                                                        <h1 className="stripe animatedText">Indectious Expressions</h1></a>
                                                        <div className="label">Artwork</div>
                                                        <div className="label">Photography</div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="slide dark">
                                            <div className="hero fs">
                                                <div style={div_style} className="bg faded"></div>
                                                <div className="vcenter">
                                                <div className="container">
                                                    <div className="grid">
                                                    <div className="col-1">2014</div>
                                                    <div className="col-7">
                                                        <div className="label">April</div><a href="project-single.html" className="project-link">
                                                        <h1 className="stripe animatedText">Conquest</h1></a>
                                                        <div className="label">Posters</div>
                                                        <div className="label">Banners</div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </li>
                            </ul>
                        </div>
                    </section>
                </div>
                </div>
          
        )
    }
}