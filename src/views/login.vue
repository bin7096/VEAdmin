<template class="box">
    <div class="login-box">
        <div class="login-form">
            <div class="login-head">
                <span class="login-head-tab" v-for="(item, index) in tabs" :key="index" :class="index === tabIndex ? 'login-head-tab-show' : ''" @click="tabIndex = index;">{{item.context}}</span>
            </div>
            <div class="login-body">
                <div class="login-body-tab" v-for="(item, index) in tabs" :key="index" :class="index === tabIndex ? 'login-body-tab-show' : ''">
                  <div class="login-body-input" v-for="(val, key) in item.inputs" :key="key" :class="val.isError ? 'login-body-input-error' : ''">
                    <input :placeholder="val.prompt" :type="val.type" @input="checkInput(index, key, $event.currentTarget.value);"/>
                    <span class="login-body-error-msg">{{val.eMsg}}</span>
                  </div>
                    <div class="login-body-other-means" v-if="item.type === 'login'">
                      <i @click="loginByOther(1)" class="login-body-other-means-icon layui-icon layui-icon-login-wechat"></i>
                      <i @click="loginByOther(2)" class="login-body-other-means-icon layui-icon layui-icon-login-qq"></i>
                      <i @click="loginByOther(3)" class="login-body-other-means-icon layui-icon layui-icon-login-weibo"></i>
                    </div>
                </div>
            </div>
            <div class="login-foot"></div>
        </div>
        <a href="javascript:void(0);" class="login-btn" @click="login();"><i class="el-icon-right"></i></a>
    </div>
</template>
<style>
    @import '../assets/css/login.css';
</style>
<script>
// import md5 from 'js-md5';
export default {
  data() {
    return {
      tabIndex: 0,
      tabs: [
        {
          type: 'login',
          context: '登录',
          inputs: [
            {field: 'username', value: null, reg: /[A-Za-z0-9_]/g, isError: false, eMsg: '昵称必须是字母数字_', type: 'text', prompt: '账号/手机号/邮箱'},
            {field: 'password', value: null, reg: /[0-9]/g, isError: false, eMsg: '密码必须是纯数字', type: 'password', prompt: '请输入密码'}
          ]
        },
        {
          type: 'register',
          context: '注册',
          inputs: [
            {field: 'telphone', value: null, reg: null, isError: false, eMsg: '手机号必须是11位数字', type: 'text', prompt: '请输入手机号'},
            {field: 'password', value: null, reg: null, isError: false, eMsg: '密码必须是纯数字', type: 'password', prompt: '请输入密码'},
            {field: 'authcode', value: null, reg: null, isError: false, eMsg: '验证码必须是纯数字', type: 'text', prompt: '请输入短信验证码'}
          ]
        }
      ]
    }
  },
  methods: {
    checkInput(tabId, inputId, value) {
      console.log(tabId, inputId, value);
      let inputObj = this.tabs[tabId].inputs[inputId];
      let regExp = inputObj.reg;
      if (regExp !== null) {
        inputObj.isError = !regExp.test(value);
      }
      inputObj.value = value;
    },
    login() {
      let inputs = this.tabs[0].inputs;
      const username = inputs[0].value;
      const password = inputs[1].value;
      console.log(username, password);
      // if (username === 'admin' && password === '12345678') {
      //   // 模拟后端生成token
      //   let time = new Date().valueOf();
      //   const token = md5(time);
      //   time += 86400000;
      //   const info = JSON.stringify({
      //     expireTime: time,
      //     token: token
      //   })
      //   // 写入localStrong
      //   localStorage.setItem('VEAdmin', info);
      // }
    },
    loginByOther(type) {
      let mean = '微博';
      switch (type) {
        case 1:
          mean = '微信';
          break;
        case 2:
          mean = 'QQ';
          break;
        default:
          break;
      }
      alert(`暂不支持${mean}登录`);
    }
  }
}
</script>
