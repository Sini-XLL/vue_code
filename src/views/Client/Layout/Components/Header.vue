<template>
    <div>
        <div>
            <!-- 菜单 -->
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
                text-color="#fff" active-text-color="#ffd04b" collapse-transition="false" :ellipsis="false"
                @select="handleSelect">
                <div class="flex-grow" />
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">新上映</el-menu-item>
                <el-menu-item index="3">影片搜索</el-menu-item>
                <el-menu-item index="5">高评分</el-menu-item>
                <el-menu-item index="4">影片类别</el-menu-item>
                <el-menu-item index="6">历史足迹</el-menu-item>
                <el-menu-item index="7">猜你喜欢</el-menu-item>
            </el-menu>
        </div>


    </div>

</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.flex-grow {
    flex-grow: 1;
}
</style>