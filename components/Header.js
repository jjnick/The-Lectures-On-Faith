import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

class Header extends React.Component {
    render () {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">Lectures on Faith</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to="/Preface">Preface</NavLink></li>
                                <li><NavLink to="/Lecture1">Lecture 1st</NavLink></li>
                                <li><NavLink to="/Lecture2">Lecture 2nd</NavLink></li>
                                <li><NavLink to="/Lecture3">Lecture 3rd</NavLink></li>
                                <li><NavLink to="/Lecture4">Lecture 4th</NavLink></li>
                                <li><NavLink to="/Lecture5">Lecture 5th</NavLink></li>
                                <li><NavLink to="/Lecture6">Lecture 6th</NavLink></li>
                                <li><NavLink to="/Lecture7">Lecture 7th</NavLink></li>    
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
};

export default Header;