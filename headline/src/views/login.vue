<template>
  <div class="login">
    <el-card shadow="always" class="login-card">
      <div class="logo">
        <img src="../assets/images/logo_index.png" alt />
      </div>
      <el-form style="margin-top: 20px" :model="loginFrom" :rules="loginRules" ref="loginForm">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入手机号" v-model="loginFrom.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row :gutter="10">
            <el-col :span="16">
              <el-input placeholder="请输入验证码" v-model="loginFrom.code"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button
                style="width :100% padding:12px 0"
                @click="send"
                :disabled="sendFlag"
              >{{sendMsg}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="loginFrom.check" ref="chk">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    const validator = function(rule, value, callback) {
      console.log(rule, "rule");
      console.log(value, "value");
      if (value) {
        callback();
      } else {
        callback(new Error("你必须同意这些条款，无条件的引用"));
      }
    };
    return {
      sendMsg: "发送验证码",
      sendFlag: false,
      loginFrom: {
        mobile: "",
        code: "",
        check: true
      },
      loginRules: {
        mobile: [
          {
            required: true,
            message: "手机号不能为空"
          },
          {
            //正则 \d代表0-9
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确"
          }
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空"
          },
          {
            pattern: /^\d{4}$/,
            message: "验证码必须是四位数字"
          }
        ],
        check: [
          {
            validator
          }
        ]
      }
    };
  },
  methods: {
    send() {
      let num = 10;
      let timer = setInterval(() => {
        if (num < 0) {
          this.sendMsg = "重新发送";
          this.sendFlag = false;
          clearInterval(timer);
          return;
        }
        this.sendMsg = num + "秒后重新发送";
        this.sendFlag = true;
        num--;
      }, 1000);
      this.$axios({
        url: "/users/getCode",
        method: "post"
      })
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error, "没加上");
        });
    },
    login() {
      this.$refs.loginForm.validate(isOK => {
        console.log(isOK, "表单验证 ");
        console.log(this.$refs);
        console.log(this.loginFrom);
        if (isOK) {
          this.$axios({
            url: "/users/login",
            method: "post",
            data: this.loginFrom
          })
            .then(result => {
              console.log(result);
              if(result){

                window.localStorage.setItem("user-token", result.token);
              this.$router.push("/");
              }
            })
            .catch(e => {
              console.log(e);
            });
        }
      });
    }
  }
};
</script>
<style lang="less">
.login {
  background-image: url(../assets/images/login_bg.jpg);
  height: 100vh;
  min-height: 400px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    .logo {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>