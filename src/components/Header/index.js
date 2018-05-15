import React, { Component } from 'react';
import './header.css';
class Header extends Component {
  render() {
    return (
      <div className="header">

        {/* 历史记录 */}
        <div>
          <div>
            <span className="iconfont icon-icon-test3"></span>
            <span className="iconfont icon-icon-test7"></span>
            <span className="iconfont icon-icon-test8"></span>
          </div>
        </div>

        {/* 搜索 */}
        <div>
          <input type="text" value="" placeholder="搜索音乐/歌手/歌词/专辑" />
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