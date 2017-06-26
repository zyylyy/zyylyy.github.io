// 系统提示框
import hud from './hud/hud.vue'







const install = Vue => {
	Vue.component(hud.name, hud) // 系统提示信息

}

export default install