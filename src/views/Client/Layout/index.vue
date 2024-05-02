<template>
    <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>

</template>
<script>
import Footer from './Components/Footer.vue'
import Header from './Components/Header.vue'
import Main from './Components/Main.vue'
export default {
    name: 'layout',
    components: { Footer, Header, Main }

}
</script>
<style lang="scss" scoped></style>