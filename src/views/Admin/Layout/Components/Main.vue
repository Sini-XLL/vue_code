<template>
    <div id="main-wrap">
        <div class="main-content">
            <div class="content">
                <router-view />
            </div>
        </div>
    </div>

</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import '../../../../styles/config.scss';

#main-wrap {
    // position: fixed;            // 设置元素的定位方式为固定定位
    // top: 75px;                     // 元素距离视口上边的距离为75px
    // left: 250px;                    // 元素距离视口左边的距离为250px    
    // right: 0;
    // bottom: 0;
    // border: 30px solid #f7f7f7;
    // border-bottom: none;   
    height: 100vh;
    @include webkit(transition, all .6s ease 0s)
}

.main-content {
    height: 100%;
    width: 100%;
    padding-top: $layoutHeader+30;
    // padding-left: $navMenu_open+30;
    // padding-right: 30px;
    -webkit-box-sizing: border-box;
}

.open {
    .main-content {
        padding-left: $navMenu_open+30;
    }
}

.close {
    .main-content {
        padding-left: $navMenu_close+30;
    }
}

.content {
    height: 100%;
    width: 100%;
    padding: 30px 30px 0 30px;
    -webkit-box-sizing: border-box;
    background-color: #fff;
}
</style>