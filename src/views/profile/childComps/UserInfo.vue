<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <div class="privateImage-svg left">
          <i class="iconfont icon-avatar"></i>
        </div>
      </slot>
      <div class="login-info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span class="iconfont icon-phone"></span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right">
        <use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
#user-info {
  background-color: #fff;
  padding: 15px;
  margin-top: -5px;
  margin-bottom: 10px;
}

#user-info .privateImage-svg {
  width: 60px;
  height: 60px;
  background-color: #f0f0f0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#user-info .privateImage-svg .iconfont {
  font-size: 36px;
  color: #ccc;
}

.left {
  float: left;
}

#user-info .arrow-svg {
  width: 11px;
  height: 22px;
  margin-top: 18px;
}

#user-info .login-info {
  margin: 10px 0 0 10px;
  font-size: 14px;
}

#user-info .login-info .phone {
  position: relative;
  margin-top: 5px;
  font-weight: 300;
  display: flex;
  align-items: center;
}

#user-info .login-info .phone .iconfont {
  font-size: 14px;
}
</style>
