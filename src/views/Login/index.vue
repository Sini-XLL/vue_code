<template>
    <div class="background-container ">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
            background-color="rgba(255, 255, 255, 0.5)" text-color="#fff" active-text-color="#ffd04b"
            @select="handleSelect"></el-menu>
        <div class="card">
            <el-tabs type="border-card" stretch="true" style="width: 350px;height: 350px;">
                <el-tab-pane label="登录">
                    <el-form :model="form" label-width="auto" label-position="left" style="padding: 35px 0;">
                        <el-form-item label="用户名" size="large">
                            <el-input v-model="form.username" />
                        </el-form-item>
                        <el-form-item label="密码" size="large" style="margin-top: 30px;">
                            <el-input v-model="form.password" />
                        </el-form-item>

                    </el-form>
                    <div class="flex-container">
                        <el-button type="primary" @click="Login" style="width: 30%;" size="large">登录</el-button>
                        <el-button type="success" style="width: 30%;" size="large">重置</el-button>
                    </div>
                    <div style="text-align: center; font-size: 13px; color: aliceblue; padding: 20px 0;"><router-link
                            to="/">返回首页</router-link></div>
                </el-tab-pane>
                <el-tab-pane label="注册">
                    <el-form :model="registerform" label-width="auto" label-position="left" style="padding: 10px 0;">
                        <el-form-item label="用户名" size="large">
                            <el-input v-model="registerform.username" />
                        </el-form-item>
                        <el-form-item label="密码" size="large">
                            <el-input v-model="registerform.password" />
                        </el-form-item>
                        <el-form-item label="重复密码" size="large">
                            <el-input v-model="registerform.repassword" />
                        </el-form-item>

                    </el-form>
                    <div class="flex-container">
                        <el-button type="primary" @click="Register" style="width: 30%;" size="large">注册</el-button>
                        <el-button type="success" style="width: 30%;" size="large">重置</el-button>
                    </div>
                    <div style="text-align: center; font-size: 13px; color: aliceblue; padding: 20px 0;"><router-link
                            to="/">返回首页</router-link></div>
                </el-tab-pane>

            </el-tabs>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import { ElMessage } from 'element-plus'

export default {
    name: "Login",
    setup(props, context) {
        const form = reactive({
            username: "",
            password: ""
        })
        const registerform = reactive({
            username: "",
            password: "",
            repassword: "",

        })
        const route = useRoute()
        const store = useStore()
        const router = useRouter()

        const Register = () => {
            if (route.path == "/login") {
                const data = {
                    "username": registerform.username,
                    "password": registerform.password
                }
                // 走用户
                store.dispatch('login/Clientregister', data).then(Response => {
                    console.log(Response);
                    if (Response.code == 200) {
                        ElNotification({
                            title: '提示',
                            message: h('i', { style: 'color: teal' }, '注册成功，请登录'),
                        })
                    } else {
                        ElNotification({
                            title: '提示',
                            message: h('i', { style: 'color: teal' }, '用户名已被注册'),
                        })
                    }


                }).catch(error => {
                    console.log(error);
                })

            } else if (route.path == "/merchantlogin") {
                const data = {
                    "merchant_name": registerform.username,
                    "password": registerform.password
                }
                // 走商家
                store.dispatch('login/Merchantregister', JSON.stringify(data)).then(Response => {

                    if (Response.code == 200) {
                        ElNotification({
                            title: '提示',
                            message: h('i', { style: 'color: teal' }, '注册成功，请登录'),
                        })
                    } else {
                        ElNotification({
                            title: '提示',
                            message: h('i', { style: 'color: teal' }, '用户名已被注册'),
                        })
                    }

                    console.log(Response.code);

                }).catch(error => {
                    console.log(error);
                })

            }
        }
        const Login = () => {
            if (route.path == "/login") {
                const data = {
                    "username": form.username,
                    "password": form.password
                }
                // 走用户
                store.dispatch('login/ClientLogin', data).then(Response => {
                    if (Response.code == 200) {
                        ElMessage({
                            message: '登录成功',
                            type: 'success',
                        })
                        router.push("/home")
                    }

                    console.log(Response);


                }).catch(error => {
                    console.log(error);
                })

            } else if (route.path == "/merchantlogin") {
                const data = {
                    "merchant_name": form.username,
                    "password": form.password
                }
                // 走商家
                store.dispatch('login/MerchantLogin', JSON.stringify(data)).then(Response => {
                    if (Response.code == 200) {
                        ElMessage({
                            message: '登录成功',
                            type: 'success',
                        })
                        router.push("/admin")
                    }

                    console.log(Response);

                }).catch(error => {
                    console.log(error);
                })

            }

        }


        return {
            form,
            registerform,
            Register,
            Login
        }

    }

}
</script>
<style lang="scss" scoped>
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin: 0;


}


.flex-container {
    text-align: center;

}



.background-container {
    background-image: url("~@/assets/bg.png") !important;

    /* 替换成你想要设置的背景图片路径 */
    background-size: cover;
    height: 100vh;
    /* 可以根据需要调整背景图片的尺寸适应 */
    /* 可以添加其他样式属性，比如背景重复、定位等 */
}
</style>
<style>
.el-tabs {
    background-color: rgba(255, 255, 255, 0.5) !important;
    /* 设置背景颜色为白色，透明度为0.5 */
}
</style>