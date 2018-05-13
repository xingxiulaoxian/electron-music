import React, { Component } from 'react';
import './footer.css';
import mp3  from './music.mp3'
export default class Footer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            currentTime : '00:00',
            duration: '00:00',
            progress: 0
        }
        this.play  = this.play.bind(this)
    }
    play () {

        function PrefixInteger(num, length) {  
            return num > Math.pow(10, length) ? num : ( '0000000000000000' + num ).substr( -length );  
        }
        function resultFormat(result) {
            var h = PrefixInteger(Math.floor(result/3600%24), 2);
            var m = PrefixInteger(Math.floor(result/60%60), 2);
            var s = PrefixInteger(Math.floor(result%60), 2);
            return h === '00' ? `${m}:${s}` : `${m}:${m}:${s}`
        }

        let audio = this.refs.audio
        if(audio.paused){
            audio.play();
        }else{
            audio.pause()
            clearInterval( this.timerID);
            return false;
        }
        let currentTime = (audio.currentTime / 60).toFixed(2)
        let duration = (audio.duration / 60).toFixed(2)

        console.log(currentTime)
        console.log(duration)
        this.setState({
            currentTime : resultFormat(audio.currentTime),
            duration: resultFormat(audio.duration)
        })

        // 
        this.timerID = setInterval(() => {
            let progress = Math.floor((audio.currentTime / audio.duration)*1000)/10;
            console.log(progress)
            this.setState({
                progress: progress,
                currentTime : resultFormat(audio.currentTime)
            })
        }, 1000)

    }
    render () {
        return (
            <div className="footer">
                <audio ref="audio" src={mp3} />
                <div>
                    <button>&lt;&lt;</button>
                    <button onClick={this.play}>II</button>
                    <button>&gt;&gt;</button>
                </div>
                <div>
                    <span>{this.state.currentTime}</span>
                    <div className="progress">
                        <span className="progress-bar" style={{width:  this.state.progress + '%'}}></span>
                    </div>
                    <span>{this.state.duration}</span>
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
