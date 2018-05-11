import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
    constructor (props){
        super(props)
        console.log(this)
        console.log(this.refs.audio)
    }
    play () {
        debugger
        let audio = this.refs.audio
        debugger
        audio.play()
        console.log(audio)
    }
    render () {
        return (
            <div className="footer">
                <audio ref="audio" src="./juejiang.mp3" />
                <div>
                    <button>&lt;&lt;</button>
                    <button onClick={this.play}>II</button>
                    <button>&gt;&gt;</button>
                </div>
                <div>
                    <span>2:30</span>
                    <div>
                        <span>---------</span>
                    </div>
                    <span>4:54</span>
                </div>
                <div>
                    <span>icon-sound</span>
                    <div>-------</div>
                </div>
                <div>
                    <span>xunhuan</span>
                    <div>-------</div>
                </div>
                <div>
                    <span>list</span>
                    <div>-------</div>
                </div>
                <div>
                    <span>ci</span>
                </div>
            </div>
        )
    }
}
export default Footer