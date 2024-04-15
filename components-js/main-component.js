// main-component.js
export default {
    // data() {
    //     return { count: 0 }
    // },
    template: `
        <div>main-component</div>
        <router-link to="/home">홈</router-link>
        <router-link to="/about">소개</router-link>
        <router-link to="/nested">중첩 레이아웃</router-link>
        <router-link to="/named-router">네임드 라우터</router-link>

        <router-view name="appHeader"></router-view>
        <router-view></router-view>
        <router-view name="appFooter"></router-view>
        `
}