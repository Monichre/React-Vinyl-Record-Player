import React, {Component} from 'react'
import {Header} from './Partials/Header'



export default class Home extends Component {
    render() {

        return (
            <div id="wrapper" className="animsition">
                
                <Header />
                <div id="inner">
                    <section className="behind-header">
                        <div id="home-slider" className="titanSlider fh fw">
                            <ul className="slides">
                                {this.props.sections.map((section) => (
                                    <li className="slide dark active">
                                        <div className="hero fs">
                                            <div className="bg faded"></div>
                                            <div className="vcenter">
                                            <div className="container">
                                                <div className="grid">
                                                <div className="col-1">2017</div>
                                                <div className="col-7">
                                                    <div className="label">January</div><a className="project-link">
                                                    <h1 className="stripe animatedText">{section.fields.sectionTitle}</h1></a>
                                                    <div className="label">Retouching</div>
                                                    <div className="label">Art Direction</div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
          
        )
    }
}