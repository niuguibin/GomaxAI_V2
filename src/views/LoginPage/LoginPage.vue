<script setup lang="ts">
import { reactive,ref,h } from "vue";
import {useRouter} from "vue-router";
import registerUtil from '../../utils/RegisterUtil.js'
import { FormInstance, FormRules } from 'element-plus'
import {ElMessage, ElNotification} from "element-plus";
import loginUtil from "../../utils/LoginUtil";
import request from "../../utils/request"
const ruleFormRef = ref<FormInstance>()
const router = useRouter()

interface RuleForm {
  username: string,
  password: string,
}
//登录
const data = reactive({
  form: {}
})

const rules = reactive({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
})
// const login_rules = reactive<FormRules<RuleForm>>({
//   username: [
//     {
//       required: true,message: '请输入用户名',trigger: 'blur'
//     },
//     {
//       min: 5,max: 15,message: '用户名长度是5到15',trigger: 'blur'
//     }
//   ],
//   password: [
//     {
//       required: true,message: '请输入密码',trigger: 'blur'
//     },
//     {
//       min: 4,max: 6,message: '密码的长度是4到6',trigger: 'blur'
//     }
//   ],
// })
const formRef = ref()
//登录函数
const logins = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      request.post('http://localhost:9090/user/login',data.form).then(res => {
        if (res.code === '200') {
          localStorage.setItem('xm-user', JSON.stringify(res.data))
          ElMessage.success('登录成功')
          console.log(res.data)
          router.push('/') // 跳转到主页
        } else {
          console.log(res)
          ElMessage.error(res.msg)
        }
      })
    }
  })
}
// const submitForm = async (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//       // 验证通过
//       request.post('/login', this.login).then(res => {
//         if (res.code === '200') {
//           localStorage.setItem("xm-user", JSON.stringify(res.data))  // 存储用户数据
//           this.$router.push('/')  // 跳转主页
//           this.$message.success('登录成功')
//         } else {
//           this.$message.error(res.msg)
//         }
//       })
//     } else {
//       console.log('error submit!', fields)
//     }
//   })
// }





//注册
//表单校验
const registerFormRef = ref<FormInstance>()
const register = () => {
  isShow_1.value = !isShow_1.value
  isShow_2.value = !isShow_2.value
}
interface registerForm {
  username: string,
  password: string,
  code: string
}




const Register = reactive<registerForm>({
  username: '',
  password: '',
  code: ''
})
const notice = ref('验证码错误')
//注册函数
const registerSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    registerUtil.pass = Register.password
    registerUtil.code = Register.code
    registerUtil.submit()
    if (valid && registerUtil.statue) {
      //跳回登录页面
      isShow_1.value = !isShow_1.value
      isShow_2.value = !isShow_2.value
      ElMessage({
        message: '注册成功!',
        type: 'success',
      })
      console.log('register success!')
    } else {
      console.log('error submit!', fields)
      ElMessage({
        message: `${notice.value}!`,
        type: 'warning',
      })
    }
  })
}
const register_rules = reactive<FormRules<registerForm>>({
  username: [
    {
      required: true,message: '请输入用户名',trigger: 'blur'
    },
    {
      min: 11,max: 15,message: '用户名长度是11到15',trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,message: '请输入密码',trigger: 'blur'
    },
    {
      min: 4,max: 6,message: '密码的长度是4到6',trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,message: '请输入验证码',trigger: 'blur'
    },
    {
      min: 4,max: 6,message: '验证码的长度是4到6',trigger: 'blur'
    }
  ]
})
const isShow_1 = ref(true)
const isShow_2 = ref(false)


//验证码获取和校验
const disable = ref(false)
const mes = ref('获取验证码')
const number = ref(60)
const captcha = () => {
  if (Register.username !== '' && Register.password !== ''){
    registerUtil.phone = Register.username
    registerUtil.sendMes()
    disable.value = true
    const timer = setInterval(() => {
      mes.value = `重新发送(${number.value})`
      number.value --
      if (number.value === 0){
        clearInterval(timer)
        number.value = 60
        mes.value = '重新发送'
        disable.value = false
        notice.value = '验证码过期'
      }
    },1000)
  }
  else {
    ElNotification({
      title: '警告',
      message: h('i', { style: 'color: teal' }, '手机号和密码不能为空!'),
    })
  }
}
</script>

<template>
  <div class="background">
    <div class="container" v-show="isShow_1">
      <div class="top">
        <div class="top-inner">
          <div class="inner-item">
            <img src="../../assets/img/logo_2.png" alt="" loading="lazy">
          </div>
          <div class="inner-item-2">GO-MAX AI</div>
        </div>
      </div>
      <el-divider/>
      <div class="main">
        <el-form
            ref="formRef"
            label-width="80px"
            :rules="rules"
            :model="data.form"
            status-icon
            label-position="left"
        >
          <el-form-item label="用户名:" prop="username">
            <el-input clearable placeholder="请输入用户名" v-model="data.form.username"/>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password" clearable show-password v-model="data.form.password" placeholder="请输入密码"/>
          </el-form-item>
          <el-button round @click="logins" class="el-button-1" style="margin-bottom: 20px">登录</el-button>
          <el-button type="info" round @click="register">注册</el-button>
        </el-form>
      </div>
    </div>
    <div class="container" v-show="isShow_2">
      <div class="top">
        <div class="top-inner">
          <div class="inner-item">
            <img src="../../assets/img/logo_2.png" alt="" loading="lazy">
          </div>
          <div class="inner-item-2">GO-MAX AI</div>
        </div>
      </div>
      <el-divider/>
      <div class="main">
        <el-form
            ref="registerFormRef"
            label-width="80px"
            :model="Register"
            :rules="register_rules"
        >
          <el-form-item label="手机号:" prop="username">
            <el-input clearable placeholder="请输入手机号" v-model="Register.username"/>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input clearable placeholder="请输入密码" type="password" v-model="Register.password" show-password/>
          </el-form-item>
          <el-form-item prop="code" style="margin-bottom: 10px">
            <el-input clearable v-model="Register.code" placeholder="请输入验证码"/>
          </el-form-item>
          <el-button style="width: 80px;" class="el-button-2" @click="captcha" :disabled="disable">{{mes}}</el-button>
          <el-button class="el-button-1" round @click="registerSubmit(registerFormRef)">注册</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "Login.css";
</style>