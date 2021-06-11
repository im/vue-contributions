import Contributions from './Contributions.vue' // 导入组件
Contributions.install = function (Vue: any) {
    Vue.component('VueContributions', Contributions)
    if (typeof window !== 'undefined' && (window as any).Vue) {
        ;(window as any).Vue.use(Contributions)
    }
}
export default Contributions
