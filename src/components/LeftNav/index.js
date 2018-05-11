import React, { Component } from 'react';
import './leftnav.css';

class LeftNav extends Component {
    render () {
        return (
            <div className="left-nav">
                <h3>发现音乐</h3>
                <ul>
                    <li> 推荐</li>
                    <li> 排行</li>
                    <li> 歌单</li>
                    <li> 主播电台</li>
                    <li> 歌手</li>
                    <li> 新歌上架</li>
                </ul>
                <h3>我的音乐</h3>
                <ul>
                    <li> 本地音乐</li>
                    <li> 下载管理</li>
                    <li> 我的音乐云盘</li>
                    <li> 我的歌手</li>
                </ul>
                <h3>我的歌单<span>+</span></h3>
                <ul>
                    <li> 本地音乐</li>
                    <li> 下载管理</li>
                    <li> 我的音乐云盘</li>
                    <li> 我的歌手</li>
                </ul>
            </div>

        )
    }
}
export default LeftNav;