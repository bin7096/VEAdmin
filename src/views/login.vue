<template class="box">
  <div class="login-box">
      <div class="login-form">
          <div class="login-head">
              <span class="login-head-tab" v-for="(item, index) in tabs" :key="index" :class="index === tabIndex ? 'login-head-tab-show' : ''" @click="tabIndex = index;">{{item.context}}</span>
          </div>
          <div class="login-body">
              <div class="login-body-tab" v-for="(item, index) in tabs" :key="index" :class="index === tabIndex ? 'login-body-tab-show' : ''">
                <div class="login-body-input" v-for="(val, key) in item.inputs" :key="key" :class="val.isError ? 'login-body-input-error' : ''">
                  <input :placeholder="val.prompt" :type="val.type" @input="checkInput(index, key, $event.currentTarget.value);" @keyup.enter="next(val.next)" :ref="val.field"/>
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
import md5 from 'js-md5';
export default {
  data() {
    return {
      tabIndex: 0,
      tabs: [
        {
          type: 'login',
          context: '登录',
          inputs: [
            {field: 'username', value: '', reg: /^[A-Z|a-z|0-9|_]+$/, isError: false, eMsg: '昵称必须是字母数字_', type: 'text', prompt: '账号/手机号/邮箱', next: 'password'},
            {field: 'password', value: '', reg: /^[0-9]+$/, isError: false, eMsg: '密码必须是纯数字', type: 'password', prompt: '请输入密码', next: 'submit'}
          ]
        },
        {
          type: 'register',
          context: '注册',
          inputs: [
            {field: 'tel', value: '', reg: null, isError: false, eMsg: '手机号必须是11位数字', type: 'text', prompt: '请输入手机号', next: 'pwd'},
            {field: 'pwd', value: '', reg: null, isError: false, eMsg: '密码必须是纯数字', type: 'password', prompt: '请输入密码', next: 'code'},
            {field: 'code', value: '', reg: null, isError: false, eMsg: '验证码必须是纯数字', type: 'text', prompt: '请输入短信验证码', next: 'submit'}
          ]
        }
      ]
    }
  },
  methods: {
    checkInput(tabId, inputId, newVal) {
      let inputObj = this.tabs[tabId].inputs[inputId];
      if (newVal !== '') {
        inputObj.isError = !inputObj.reg.test(newVal);
        inputObj.reg.lastIndex = 0;
      } else {
        inputObj.isError = false;
      }
      inputObj.value = newVal;
    },
    next(type) {
      console.log(type);
      if (type === 'submit') {
        if (this.tabIndex === 0) { // 登录
          this.login();
        } else { // 注册
          this.register();
        }
      } else {
        this.$nextTick(() => {
          if (this.$refs[type] && this.$refs[type][0]) {
            this.$refs[type][0].focus();
          }
        });
      }
    },
    login() {
      let inputs = this.tabs[0].inputs;
      let toSubmit = true;
      inputs.forEach(item => {
        if (!item.reg.test(item.value)) {
          item.isError = true;
          toSubmit = false;
        }
      });
      if (toSubmit) {
        const username = inputs[0].value;
        const password = inputs[1].value;
        console.log(username, password);
        if (username === 'admin' && password === '12345678') {
          // 模拟后端生成token
          let time = new Date().valueOf();
          const token = md5(String(time));
          time += 86400000;
          const info = JSON.stringify({
            expireTime: time,
            token: token
          });
          // 写入localStrong
          window.localStorage.setItem('login_info', info);
          // 跳转到index页面
          this.$router.push('/');
        }
      }
    },
    register() {
      console.log('暂无注册功能');
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
