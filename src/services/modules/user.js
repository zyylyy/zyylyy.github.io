// 用户相关
import ajax from '../fetch'

export default {
    /**
     * 获取登陆者信息
     * @param  {Boolean} auth 是否需要登录
     * @return {[type]}       [description]
     */
    getAccount(auth = true) {
        return ajax({
            url: '/Account/GetAccount',
            method: 'get',
            auth
        })
    },
    /**
     * 获取分销客户详情
     * @param  {string}  id   分销客户id
     * @param  {Boolean} auth 是否需要登录
     * @return {[type]}       [description]
     */
    getDistributionAccount(id, auth = true) {
        return ajax({
            url: '/Customer/GetDistributionAccount?DistributorLinkID=' + id,
            method: 'get',
            auth
        })
    },
    /**
     * 查询当前登陆用户未读消息
     * @param  {[type]}  id   [description]
     */
    selectMsgUnReadList(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Message/SelectMsgUnReadList',
            method: 'get',
            auth,
            isShowFullLoading,
            body: data
        })
    },
}