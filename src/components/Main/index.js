import React, { Component } from 'react';
import LeftNav from '../LeftNav';
import RightContent from '../RightContent'
import './main.css';

class Main extends Component {
    render () {
        return (
            <div className="main">
                <LeftNav />
    
                <RightContent />
            </div>
        )
    }
}

export default Main;