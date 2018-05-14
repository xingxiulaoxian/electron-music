import React, { Component } from 'react';
import './footer.css';
import mp3  from './music.mp3'
import img from '../../images/sound-img.png'
function PrefixInteger(num, length) {  
    return num > Math.pow(10, length) ? num : ( '0000000000000000' + num ).substr( -length );  
}
function resultFormat(result) {
    var h = PrefixInteger(Math.floor(result/3600%24), 2);
    var m = PrefixInteger(Math.floor(result/60%60), 2);
    var s = PrefixInteger(Math.floor(result%60), 2);
    return h === '00' ? `${m}:${s}` : `${m}:${m}:${s}`
}
export default class Footer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            musicName: 'music-name',

            audio: null,
            btnPlay: 'II',
            currentTime : '00:00',
            duration: '00:00',
            progress: 0,

            isMouseDown:false
        }
        this.play  = this.play.bind(this)
        this.ended = this.ended.bind(this)
        this.setAudioProgress = this.setAudioProgress.bind(this)
        this.setCurrentTime = this.setCurrentTime.bind(this)
        this.getMousePos = this.getMousePos.bind(this)
        this.mouseMoveBar = this.mouseMoveBar.bind(this)
        this.mouseDownBtn = this.mouseDownBtn.bind(this)
        this.mouseUpBtn = this.mouseUpBtn.bind(this)
    }
    componentDidMount () {
        this.setState({
            audio: this.refs.audio
        })
        console.log('willllllllllllllll')
    }
    play () {
        let audio = this.state.audio
        if(audio.paused){
            audio.play();
            this.setState({
                btnPlay: 'I>'
            })
            this.setAudioProgress()
        }else{
            audio.pause()
            this.setState({
                btnPlay: 'II'
            })
            clearInterval( this.timerID);
        }
    }

    setAudioProgress () {
        let audio = this.state.audio
        let progress = Math.floor((audio.currentTime / audio.duration)*1000)/10;
        this.setState({
            currentTime : resultFormat(audio.currentTime),
            duration: resultFormat(audio.duration),
            progress: progress
        })
        
        this.timerID = setInterval(() => {
            progress = Math.floor((audio.currentTime / audio.duration)*1000)/10;
            console.log(progress)
            this.setState({
                currentTime : resultFormat(audio.currentTime),
                progress: progress
            })
        }, 1000)

    }
    ended () {
        let audio = this.refs.audio
        this.setState({
            btnPlay: 'II'
        })
        this.setAudioProgress(audio)
        clearInterval( this.timerID)
    }
    getMousePos (e){
        let progress = this.refs.progress;
        let audio = this.refs.audio
        let pos = (e.clientX - progress.offsetLeft) / progress.clientWidth
        let second = audio.duration * pos

        this.setCurrentTime (second)
        this.play()
        console.log(pos)
    }
    // 移动拖块
    mouseMoveBar (e) {
        if(this.state.isMouseDown){
            this.getMousePos (e)
        }
    }
    // 按住拖快 
    mouseDownBtn (){
        this.setState({
            isMouseDown: true
        })
    }
    mouseUpBtn (){
        this.setState({
            isMouseDown: false
        })
    }


    setCurrentTime (second) {
        let audio = this.refs.audio
        audio.currentTime = second
    }
    render () {
        return (
            <div className="footer">
                <audio ref="audio" src={mp3} onEnded={this.ended} />
                <div className="footer-btn-group">
                    <button className="footer-btn-play footer-btn-small">&lt;&lt;</button>
                    <button className="footer-btn-play" onClick={this.play}>{this.state.btnPlay}</button>
                    <button className="footer-btn-play footer-btn-small">&gt;&gt;</button>
                </div>
                <div className="footer-image-content">
                    <img src={img} alt=""/>
                </div>
                <div className="footer-progress-content">
                    <div className="footer-progress-top">
                        <div><span className="music-name">{this.state.musicName}</span></div>
                        <div>
                            <span>{this.state.currentTime}</span>
                            <span>/</span>
                            <span>{this.state.duration}</span>
                        </div>
                    </div>
                    <div className="progress" ref="progress" 
                        onClick={this.getMousePos} 
                        onMouseMove={this.mouseMoveBar} 
                        onMouseUp={this.mouseUpBtn}
                        onMouseLeave={this.mouseUpBtn}>
                        <div className="progress-bg"></div>
                        <div className="progress-bar" style={{width:  this.state.progress + '%'}}>
                            <span className="progress-btn" onMouseDown={this.mouseDownBtn} ></span>
                        </div>
                    </div>
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
