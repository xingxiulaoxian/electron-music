import React, { Component } from 'react';
import './header.css';
import logo from '../../images/sound-img.png'
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <div className="header-logo-icon">
            <img src={logo} alt=""/>
          </div>
          <span>网易云音乐</span>
        </div>

        {/* 历史记录 */}
        <div>
          <button><span>prev</span></button>
          <button><span>next</span></button>
        </div>

        {/* 搜索 */}
        <div>
          <input type="text" value="" placeholder="搜索音乐/歌手/歌词/专辑" />
        </div>

        {/* user */}
        <div>
          user
        </div>

        {/* 皮肤 */}
        <div>
          皮肤
        </div>

        {/* 设置 */}
        <div>
          设置
        </div>

        {/* 关闭按钮 */}
        <div className="header-tool">
          关闭/最小化/最大化/关闭窗口进入后台
        </div>



      </div>
    )
  }
}
export default Header