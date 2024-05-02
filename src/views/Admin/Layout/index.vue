<template>
    <div id="layout" :class="[menuState ? 'close' : 'open']">
        <Header />
        <Main />
        <Nav />
    </div>

</template>
<script>
import Nav from './Components/Nav.vue'
import Header from './Components/Header.vue'
import Main from './Components/Main.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'adminlayout',
    components: { Main, Header, Nav },
    setup(props, context) {
        const store = useStore()
        const menuState = computed(() => store.state.app.isCollapse)
        return {
            menuState
        }

    }

}
</script>
<style lang="scss" scoped>
#layout {
    background-color: #f7f7f7;
}
</style>