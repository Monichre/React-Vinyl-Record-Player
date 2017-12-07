import React, { Component } from 'react'


export default class Songs extends Component {
    render() {
        return (
            <div className="hero fs">
                    <div className="bg faded"></div>
                    <div className="vcenter">
                        <div className="container">
                            <div className="grid">
                                <div className="col-1">2017</div>
                                <div className="col-7">
                                    <div className="label">January</div>
                                    <a className="project-link">
                                    <h1 className="stripe animatedText">{this.props.section.fields.sectionTitle}</h1>
                                    </a>
                                    <div className="label">Pye Luis</div>
                                    <div className="label">Official</div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}