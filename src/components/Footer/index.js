import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
    render () {
        return (
            <div class="footer">
                <audio src="./juejiang.mp3"></audio>
                <div>
                    <button>&lt;&lt;</button>
                    <button>II</button>
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