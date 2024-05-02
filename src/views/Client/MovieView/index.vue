<template>
    <div>
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="18">
                <!-- <div class="container">
                    <el-image style="width: 100%; height: 400px"
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill" />
                </div>
            </el-col> -->
                <el-card class="container">
                    <el-row>
                        <el-col :span="10">
                            <el-image style="width: 100%; height: 400px"
                                src="https://img2.baidu.com/it/u=2285734326,1100980560&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=623"
                                fit="fill" />
                        </el-col>
                        <el-col :span="14" class="content">
                            <h2 style="text-align: center; font-size: 35px;">破墓</h2>、
                            <p>导演： 张在现</p>
                            <p>评分： <el-rate v-model="rate" disabled show-score text-color="#ff9900"
                                    score-template="{value} points" size="large" /></p>
                            <p>类型： <el-tag type="danger" size="large">悬疑</el-tag></p>

                            <p>电影简介：在美国生活的某个富裕家庭身上持续发生奇怪的超自然现象，因此他们请来了在巫师之中著名的年轻巫师花林（金高银 饰）和奉吉（李到晛 饰）。
                                　　花林和奉吉到达那个地方后救助了刚刚出生的婴儿，明白了他们祖先黑暗的影子正在降临于那家人身上的事实。
                                　　花林和奉吉持续调查，为了驱除祖先向最棒的风水师尚德（崔岷植 饰）和入殓师荣根（柳海真
                                饰）请求帮助。惊讶的是那块墓地在韩国的某个偏僻村庄的阴凉之处被发现，最终进行破墓。但是破墓的同时，坟墓下方的不吉之气开始爆发……</p>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
    </div>

</template>
<script>
import { ref } from 'vue'
export default {
    setup(props, context) {
        const rate = ref(6.9 / 2)
        return {
            rate
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 80vh;
    margin: 30px 0;
    padding: 20px;
    background-color: #f0efe4;
}

.content {
    padding: 0 20px;
    font-size: 18px;
}
</style>