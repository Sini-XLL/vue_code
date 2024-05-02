<template>

    <el-icon>
        <component :is="iconName"></component>
        <!-- 定义组件 -->
    </el-icon>


</template>
<script>
import { computed, ref } from 'vue';

export default {
    name: 'svgIcon',
    // props:['iconClass','className'], //父组件传过来的值 简单语法不限制数据类型
    // 规定数据类型写法
    props: {
        iconName: {
            type: String,//定义接收的值类型
            // required:true
            default: ''
        },

        // className:{
        //     type:Array,
        //     default:()=>[] //对象类型
        // }
    },
    setup(props, context) {
        // console.log(props.iconName);

        const msg = ref('测试是否成功')
        const count = ref(10)
        // computed 监听属性变化并计算属性
        const plusOne = computed(() => {
            return count.value + 1
        })
        const iconClass = computed(() => `${props.iconName}`)


        return {
            msg,
            iconClass,
        }

    }
}
</script>
<style lang="scss" scoped></style>