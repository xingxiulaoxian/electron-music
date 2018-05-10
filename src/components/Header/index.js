import React, { Component } from 'react';
import './header.css';
class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="header-logo">
          <div class="header-logo-icon"></div>
          <span>网易云音乐</span>
        </div>

        {/* 历史记录 */}
        <div>
          <button><span>prev</span></button>
          <button><span>next</span></button>
        </div>

        {/* 搜索 */}
        <div>
          <input type="search" value="" placeholder="搜索音乐/歌手/歌词/专辑" />
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
        <div class="header-tool">
          关闭/最小化/最大化/关闭窗口进入后台
        </div>


        







      </div>
    )
  }
}
export default Header