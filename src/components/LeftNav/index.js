import React, { Component } from 'react';
import './leftnav.css';
import img from '../../images/sound-img.png'

class LeftNav extends Component {
    render () {
        return (
            <div className="left-nav">
                <div className="left-user-content">
                    <div className="left-user-img">
                        <img src={img} alt=""/>
                    </div>
                </div>

                <div className="left-menu">
                    <h3 className="left-menu-title">发现音乐</h3>
                    <ul className="left-menu-ul">
                        <li className="left-menu-item"> 推荐</li>
                        <li className="left-menu-item"> 排行</li>
                        <li className="left-menu-item"> 歌单</li>
                        <li className="left-menu-item"> 主播电台</li>
                        <li className="left-menu-item"> 歌手</li>
                        <li className="left-menu-item"> 新歌上架</li>
                    </ul>
                    <h3 className="left-menu-title">我的音乐</h3>
                    <ul className="left-menu-ul">
                        <li className="left-menu-item"> 本地音乐</li>
                        <li className="left-menu-item"> 下载管理</li>
                        <li className="left-menu-item"> 我的音乐云盘</li>
                        <li className="left-menu-item"> 我的歌手</li>
                    </ul>
                    <h3 className="left-menu-title">我的歌单<span>+</span></h3>
                    <ul className="left-menu-ul">
                        <li className="left-menu-item"> 本地音乐</li>
                        <li className="left-menu-item"> 下载管理</li>
                        <li className="left-menu-item"> 我的音乐云盘</li>
                        <li className="left-menu-item"> 我的歌手</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default LeftNav;