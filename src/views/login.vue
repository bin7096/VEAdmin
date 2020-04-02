<template class="box">
    <div class="login-box">
        <div class="login-form">
            <div class="login-head">
                <span class="login-head-tab" v-for="(item, index) in tabs" :key="index" :class="index === tabIndex ? 'login-head-tab-show' : ''">{{item.context}}</span>
            </div>
            <div class="login-body">
                <div class="login-body-tab" v-for="(item, index) in tabs" :key="index" :class="index === tabIndex ? 'login-body-tab-show' : ''">
                    <input v-for="(val, key) in item.inputs" :key="key" :placeholder="val.prompt" :type="val.type"/>
                </div>
            </div>
            <div class="login-foot"></div>
        </div>
    </div>
</template>
<style>
    @import '../assets/css/login.css';
</style>
<script>
export default {
    data() {
        return {
            tabIndex: 0,
            tabs: [
                {
                    context: '登录',
                    inputs: [
                        {field: 'username', prompt: '账号/手机号/邮箱', reg: null, type: 'text'},
                        {field: 'password', prompt: '请输入密码', reg: null, type: 'password'},
                    ]
                },
                {
                    context: '注册',
                    inputs: [
                        {field: 'telphone', prompt: '请输入手机号', reg: null, type: 'text'},
                        {field: 'password', prompt: '请输入密码', reg: null, type: 'password'},
                        {field: 'authcode', prompt: '请输入验证码', reg: null, type: 'text'},
                    ]
                },
            ]
        }
    }
}
</script>