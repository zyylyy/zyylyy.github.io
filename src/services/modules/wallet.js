// 我的团队
import ajax from '../fetch'

export default {
	
    /*
    **获取待返佣金列表 
    @params groupId  团队id [describute]
    */
    getWaitReturnCommissionList(groupId, auth = true,isShowFullLoading = true){
        return ajax({
            url: '/Commission/GetWaitReturnCommissionList?groupId='+groupId,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /*
    **获取待付佣金列表 
    @params groupId  团队id [describute]
    */
    getWaitPayCommissionList(groupId, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Commission/GetWaitPayCommissionList?groupId='+groupId,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /*
    **获取待返佣金列表明细 
    @params groupId  团队id [describute]
    */
    getWaitReturnCommissionDetailPageList(condition, page, pageSize, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Commission/GetWaitReturnCommissionDetailPageList',
            method: 'post',
            auth,
            isShowFullLoading,
            body: {
                condition: condition,
                pageSize: pageSize,
                page: page
            }
        })
    },
    /*
    **获取待付佣金列表明细 
    @params groupId  团队id [describute]
    */
    getWaitPayCommissionDetailPageList(condition, page, pageSize, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Commission/GetWaitPayCommissionDetailPageList',
            method: 'post',
            auth,
            isShowFullLoading,
            body: {
                condition: condition,
                pageSize: pageSize,
                page: page
            }
        })
    },
    /*
    **获取提现申请待审核总数 
    @params groupId  团队id [describute]
    */
    getWithdrawalWaitAuditCount(groupId, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Commission/GetWithdrawalWaitAuditCount?groupId='+groupId,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /*
    **获取提现申请-分页列表
    @params condition  query [describute]
    */
    getWithdrawalAuditPageList(condition, page, pageSize, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Commission/GetWithdrawalAuditPageList',
            method: 'post',
            auth,
            isShowFullLoading,
            body: {
                condition: condition,
                pageSize: pageSize,
                page: page
            }
        })
    },
    /*
    **获取提现信息
    @params groupId payCustomerId  团队id 分销商id [describute]
    */
    getWithdrawalInfo(groupId, payCustomerId, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Commission/GetWithdrawalInfo?groupId='+groupId+'&payCustomerId='+payCustomerId,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /*
    **获取提现记录-分页列表
    @params groupId  团队id [describute]
    */
    getDetailPageList(groupId, page, pageSize, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Commission/GetWithdrawalRecordDetailPageList',
            method: 'post',
            auth,
            isShowFullLoading,
            body: {
                condition: groupId,
                pageSize: pageSize,
                page: page
            }
        })
    },
    /*
    **申请提现
    @params condition  提价内容 [describute]
    */
    applyWithdrawal(condition, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Commission/ApplyWithdrawal',
            method: 'post',
            auth,
            isShowFullLoading,
            body: condition
        })
    },
    /*
    **审核提现申请
    @params condition  提价内容 [describute]
    */
    superiorAuditWithdrawCash(condition, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/DistributorApplyAudit/SuperiorAuditWithdrawCash',
            method: 'post',
            auth,
            isShowFullLoading,
            body: condition
        })
    },
}