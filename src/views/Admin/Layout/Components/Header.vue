<template>
    <div id="header-wrap">
        <div class="pull-left header-icon" @click="isCollapseState">
            <el-icon>
                <SvgIcon :iconName="(CollapseState ? 'Fold' : 'Expand')" />
            </el-icon>
        </div>
        <div class="pull-right">
            <div class="user-info pull-left">{{ username }}</div>
            <div class="header-icon" @click="closeApp"><el-icon>
                    <SwitchButton />
                </el-icon> </div>
        </div>

    </div>

</template>
<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
    setup(props, context) {

        const store = useStore()
        const router = useRouter()
        const username = computed(() => store.state.app.username)
        const CollapseState = computed(() => {
            return store.state.app.isCollapse
        })
        const isCollapseState = () => {
            store.commit('app/SET_isCollapse')

        }
        const closeApp = () => {
            store.dispatch('app/exit').then(() => {
                router.push('/merchantlogin')
            })

        }
        return {
            isCollapseState,
            username,
            closeApp,
            CollapseState
        }

    }

}
</script>
<style lang="scss" scoped>
@import '../../../../styles/config.scss';

#header-wrap {
    position: fixed; // 设置元素的定位方式为固定定位
    top: 0; // 元素距离视口上边的距离为0
    // left: $navMenu;                    // 元素距离视口左边的距离为0
    right: 0; // 设置元素的宽度为100%
    height: 75px; // 设置元素的高度为视口的100%（即全屏高度）
    background-color: #ffffff; // 设置元素的背景颜色为#345333（一种深绿色）
    -webkit-box-shadow: 0 3px 16px rgba(0, 0, 0, .1);
    -moz-box-shadow: 0 3px 16px rgba(0, 0, 0, .1);
    box-shadow: 0 3px 16px rgba(0, 0, 0, .1);
    line-height: 75px;
    font-size: 25px;
    @include webkit(transition, all .6s ease 0s)
}

.open {
    #header-wrap {
        left: $navMenu_open;
    }
}

.close {
    #header-wrap {
        left: $navMenu_close;
    }
}

.header-icon {
    padding: 0 32px;

    //   <!-- 图标大小继承父元素字体大小 -->
    // el-icon{
    cursor: pointer; //改为手势
    // }

}

.user-info,
.header-icon {
    display: inline-block;
    /* 或者 float: left; 如果你更喜欢浮动 */
    vertical-align: middle;
    /* 如果你想要它们垂直居中对齐 */
}

.user-info {
    height: 100%;
    padding: 0 32px;
    border-right: 1px solid #ededed;
    font-size: 14px;

}

.pull-right {
    float: right;
}
</style>