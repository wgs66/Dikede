<template>
  <div class="main">
    <!-- login pop -->
    <div class="login-pop">
      <!-- log -->
      <img src="../../assets/login_images/login_log.png" alt="" class="login-log">
      <!-- from -->
      <el-form label-width="80px" :model="formLabelAlign" :rules="rules">
        <el-form-item label-width="0px" prop="name">
          <el-input v-model="formLabelAlign.name" class="inputs" prefix-icon="el-icon-mobile-phone" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label-width="0px" prop="password">
          <el-input v-model="formLabelAlign.region" class="inputs" prefix-icon="el-icon-lock" suffix-icon="el-icon-lock" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label-width="0px" prop="verification">
          <el-input v-model="formLabelAlign.type" class="inputs" prefix-icon="el-icon-lock" placeholder="请输入验证码" />
        </el-form-item>
        <el-button type="primary" class="login-btn" @click="onSubmit">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        verification: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },

  created() {

  },

  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped  lang='less'>
.main{
  width: 100%;
  height: 100%;
  background:url('../../assets/login_images/login_bg.png') no-repeat;
  background-size: cover;
  position: relative;
}

.login-pop{
  width: 518px;
  height: 388px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -194px;
  margin-left: -259px;
  padding:76px 35px 0;
  border-radius: 10px;
  box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
}

.login-log{
  width: 96px;
  height: 96px;
  position: absolute;
  left:50%;
  top:-46px;
  margin-left:-48px;
  z-index: 1;
}

.inputs{
  height: 52px;
  line-height: 40px;
}

:deep(.el-input__inner){
  height: 52px;
}

.el-input__icon{
  font-size: 16px;
}

.login-btn{
  width: 100%;
  height: 52px;
  background: linear-gradient(262deg,#2e50e1,#6878f0);
  opacity: .91;
  border-radius: 8px;
  color: #fff;
  text-shadow: 0 7px 22px #cfcfcf;
}
</style>
