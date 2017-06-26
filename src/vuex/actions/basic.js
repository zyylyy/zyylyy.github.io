import * as types from '../mutationTypes'
import { basic as ajax } from 'services'
// 基础数据
export default {
    // 获取省
    getRegionStates: ({ state, commit }) => {
        const stateList = state.basic.stateList
        if (stateList.length === 0) {
            ajax.selectRegionList({
                LevelID: 1,
                ParentID: '',
                Status: 1
            }).then((result) => {
                commit(types.GET_REGIONS, result)
            })
        }
    }
}