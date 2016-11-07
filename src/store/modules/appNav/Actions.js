/**
 * src/store/modules/appNav/Actions.js
 * 项目导航action文件---->以appNav_开头的方法名
 * @author xurenhe
 * @date      2016-11-07
 * @copyright 城云科技
 * @version   0.0.1
 */
import * as TYPES from './Types'

/**
 * 点击导航按钮
 * @param     {[type]}   commit  [description]
 * @param     {[type]}   navName [description]
 * @return    {[type]}           [description]
 * @author xurenhe
 * @date      2016-11-07
 * @copyright 城云科技
 * @version   0.0.1
 */
export const appNav_clickNavItem = ({ commit }, navName) => {
  commit(TYPES.APPNAV_CLICKNAVITEM, {
    navName
  })
}
