<template>
    <div id="nav-wrap">
        <div class="demo-image">
            <div class="block">
                <el-image :class="[isCollapse ? 'image_close' : 'image_open']" :src="imageUrl" fit="cover" />
            </div>
        </div>
        <div id="nav-menu">
            <el-menu default-active="2" class="el-menu-vertical-demo" router="true" :collapse="isCollapse"
                background-color="#344a5f" text-color="#ffffff">
                <template v-for="(item, index) in routers">
                    <!-- 判断路由是否显示 -->
                    <el-sub-menu v-if="!item.hidden" :key="item.id" :index="index">
                        <!-- 一级菜单 -->
                        <template #title>
                            <!-- <SvgIcon :iconName="item.meta.icon" /> -->
                            <span>{{ item.meta.name }}</span>
                        </template>
                        <!-- 子菜单 -->
                        <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">

                            {{ subItem.meta.name }}
                        </el-menu-item>
                    </el-sub-menu>
                </template>
            </el-menu>

        </div>

    </div>

</template>
<script>
import { ref, getCurrentInstance, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
    name: 'navMenu',
    setup(props, context) {
        const router = useRouter()//useRouter 钩子被用来获取路由实例
        const route = useRoute()
        // 访问当前路由
        // console.log(route);
        // 在组件加载时打印当前路由信息
        // console.log(router.options.routes)//打印出当前项目所有路由
        // 将所有路由赋值给变量
        const routers = reactive(router.options.routes)
        // const imageUrl = require('@/assets/images/logo.png');//引入网站logo
        const store = useStore();
        //判断是否折叠的标志
        const isCollapse = computed(() => {
            // computed检测数据变化更新
            return store.state.app.isCollapse;
        });
        return {

            routers,
            // imageUrl,
            isCollapse
        };
    }
};
</script>
<style lang="scss" scoped>
@import '../../../../styles/config.scss';

#nav-wrap {
    position: fixed; // 设置元素的定位方式为固定定位
    top: 0; // 元素距离视口上边的距离为0
    left: 0; // 元素距离视口左边的距离为0
    // width: $navMenu;               // 设置元素的宽度为250像素
    height: 100vh; // 设置元素的高度为视口的100%（即全屏高度）
    background-color: #344a5f; // 设置元素的背景颜色为#345333（一种深绿色）
    @include webkit(transition, all .6s ease 0s)
}

.open {
    #nav-wrap {
        width: $navMenu_open;
    }
}

.close {
    #nav-wrap {
        width: $navMenu_close;
    }
}

// #nav-menu{
//     padding: 75px 0 0 0;
// }
// element Plus
.demo-image .block {
    // position: fixed;
    padding: 30px 0;
    text-align: center;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    vertical-align: top;
}

// 图片大小
.image_open {
    width: 100px;
    height: 100px;
    // -webkit-transition: all .3s ease 0s;
    @include webkit(transition, all .6s ease 0s)
}

.image_close {
    width: 25px;
    height: 25px;
    // -webkit-transition: all .3s ease 0s;
    @include webkit(transition, all .6s ease 0s)
}
</style>