import React from 'react'
import AppStore from '../../Store/AppStore'



export const Header = (props) => (
    <header id="main-header">
        <div className="container">
            <div className="grid">
                <nav className="main-nav">
                    <div className="responsive-nav">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className="nav-links">
                        <li className="col-1 col-offset-1"><a href="#Songs" className="nav-link undefined">Songs</a></li>
                        <li className="col-1 has-dropdown"><a className="nav-link">Albums</a>
                            <ul className="dropdown">
                                {props.albums.map((album) => (
                                    <li><a href="" className="nav-link undefined">{album.fields.title}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li className="col-1 col-offset-1"><a href="profile.html" className="nav-link undefined">Videos</a></li>
                        <li className="col-1 col-offset-1"><a href="contact.html" className="nav-link undefined">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)