<template>
  <div class="main">
    <!-- login pop -->
    <div class="login-pop">
      <!-- log -->
      <img
        src="../../assets/login_images/login_log.png"
        alt=""
        class="login-log"
      />
      <!-- from -->
      <el-form
        label-width="80px"
        :model="formLabelAlign"
        ref="loginForm"
        :rules="rules"
      >
        <el-form-item label-width="0px" prop="loginName">
          <el-input
            v-model="formLabelAlign.loginName"
            class="inputs"
            prefix-icon="el-icon-mobile-phone"
            placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item label-width="0px" prop="password">
          <el-input
            v-model="formLabelAlign.password"
            class="inputs"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            :type="inputType ? 'text' : 'password'"
          >
            <template #suffix>
              <svg-icon
                v-if="!inputType"
                class="svgIcon"
                iconClass="eye"
                @click="isShowEye"
              ></svg-icon>

              <svg-icon
                v-else
                class="svgIcon"
                @click="isShowEye"
                iconClass="eye-open"
              ></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label-width="0px" prop="code">
          <el-input
            v-model="formLabelAlign.code"
            class="inputs"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <span class="login-verification-icon">
                <i class="ded dkd-dunpai"></i>
              </span>
            </template>
          </el-input>
          <div class="pic-verification" @click="getLoginPic">
            <img :src="imgs" alt="" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :plain="true"
            class="login-btn"
            @click="onSubmit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { imageCode } from "@/api";
export default {
  data() {
    return {
      formLabelAlign: {
        loginName: "admin",
        password: "admin",
        code: "",
        clientToken: "",
        loginType: 0,
      },
      inputType: false,
      imgs: "",
      rules: {
        loginName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "长度为 4 个字符", trigger: "blur" },
        ],
      },
    };
  },

  created() {
    this.getLoginPic();
  },

  methods: {
    // 登录
    async onSubmit() {
      try {
        await this.$refs.loginForm.validate();
        console.log("校验成功！");
        // console.log(this.formLabelAlign);
        this.$store.dispatch("user/getToken", this.formLabelAlign).then(() => {
          if (!this.$store.state.user.loginInfo.success) {
            this.$message({
              showClose: true,
              message: this.$store.state.user.loginInfo.msg,
              type: "error",
            });
          } else {
            this.$message({
              showClose: true,
              message: this.$store.state.user.loginInfo.msg,
              type: "success",
            });
            this.$router.push({ path: "/" });
          }
        });
      } catch (error) {
        console.log("校验失败!");
      }
    },
    // 显示密码
    isShowEye() {
      this.inputType = !this.inputType;
    },
    // 获取验证码
    async getLoginPic() {
      this.formLabelAlign.clientToken = Math.floor(Math.random() * 10001);
      // console.log(this.formLabelAlign.clientToken);
      try {
        const res = await imageCode(this.formLabelAlign.clientToken);
        const captchaImg = window.URL.createObjectURL(res.data);
        this.imgs = captchaImg;
        // console.log(this.imgs);
        // console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  background: url("../../assets/login_images/login_bg.png") no-repeat;
  background-size: cover;
  position: relative;
}

.login-pop {
  width: 518px;
  height: 388px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -194px;
  margin-left: -259px;
  padding: 76px 35px 0;
  border-radius: 10px;
  box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
}

.login-log {
  width: 96px;
  height: 96px;
  position: absolute;
  left: 50%;
  top: -46px;
  margin-left: -48px;
  z-index: 1;
}

.pic-verification {
  position: absolute;
  right: 0px;
  top: 1px;
  width: 130px;
  height: 50px;
  // background-color: pink;
}

.inputs {
  height: 52px;
  line-height: 40px;
}
/deep/.el-input__inner {
  height: 52px;
}

/deep/.el-input__icon {
  padding-top: 5px;
  font-size: 16px;
}
/deep/.el-form-item__content {
  margin-left: 0 !important;
}
.login-btn {
  width: 100%;
  height: 52px;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
  opacity: 0.91;
  border-radius: 8px;
  color: #fff;
  text-shadow: 0 7px 22px #cfcfcf;
}

.dkd-dunpai {
  display: inline-block;
  margin-top: 6px;
  padding-left: 5px;
  font-size: 16px;
  z-index: 999;
  color: #c0c4cc;
}
.svgIcon {
  display: inline-block;
  margin-top: 20px;
  margin-right: 8px;
}
</style>
