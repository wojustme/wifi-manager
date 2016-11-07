/**
 * src/store/modules/appNav/States.js
 * 项目导航模块的状态初始信息、mutation操作
 * @author xurenhe
 * @date      2016-11-07
 * @copyright 城云科技
 * @version   0.0.1
 */
import * as TYPES from './Types'


const state = {
  navItems: {
    "租户导航": true,
    "用户导航": false,
    "权限导航": false,
    "角色导航": false
  },
  selectNav: "租户导航"
}


const mutations = {

  // 点击导航按钮，触发状态变化，navName是点击的导航名称
  [TYPES.APPNAV_CLICKNAVITEM] (state, { navName }) {
    state.navItems[state.selectNav] = false
    state.navItems[navName] = true
    state.selectNav = navName
  }
}


export default {
  state,
  mutations
}
