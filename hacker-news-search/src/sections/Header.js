import React, { Component } from 'react';
import logo from './logo.webp';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="Header">
                    <img className="logo" src={logo}></img>
                    <div className="logo-text">
                        <p>Search Hacker News</p>
                    </div>
                    <input className="search" type="search" placeholder="Search..."></input>
                </header>
            </div>
        )
    }
}