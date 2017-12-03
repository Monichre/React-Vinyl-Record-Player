import React from 'react'

export const Header = () => (
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
                        <li className="col-1 has-dropdown"><a href="projects-4-columns.html" className="nav-link undefined">Albums</a>
                            <ul className="dropdown">
                                <li><a href="projects-1-column.html" className="nav-link undefined">Grid - One column</a>
                                </li>
                                <li><a href="projects-2-columns.html" className="nav-link undefined">Grid - Two columns</a>
                                </li>
                                <li><a href="projects-4-columns.html" className="nav-link undefined">Grid - Four columns</a>
                                </li>
                                <li><a href="projects-masonry.html" className="nav-link undefined">Grid - Masonry</a>
                                </li>
                                <li><a href="project-single.html" className="nav-link undefined">Project - Single</a>
                                </li>
                            </ul>
                        </li>
                        <li className="col-1 col-offset-1"><a href="profile.html" className="nav-link undefined">Videos</a>
                        </li>
                    
                        <li className="col-1 col-offset-1"><a href="contact.html" className="nav-link undefined">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)