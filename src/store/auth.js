export default {
  namespaced: true,
  state: {
    // 登录的有效时间（毫秒）
    validTime: 86400000,
    // 登录信息过期时间
    expireTime: 0,
    // 后端生成的token
    authToken: 0
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = String(token);
    },
    setExpireTime(state, time) {
      state.expireTime = Number(time);
    }
  }
}
