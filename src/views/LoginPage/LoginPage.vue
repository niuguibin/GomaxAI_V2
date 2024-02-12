<script setup lang="ts">
import { reactive,ref,h } from "vue";
import {useRouter} from "vue-router";
import type { FormInstance, FormRules } from 'element-plus'
import {ElMessage, ElNotification} from "element-plus";
import axios from "axios";
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
interface RuleForm {
  username: string,
  password: string,
}

const login = reactive<RuleForm>({
  username: '',
  password: '',
})
//因为没有后台校验token，临时使用localstorge存储字符的方式模拟token
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.push('/')
      let date = new Date()
      localStorage.setItem('key',date.toString())
    } else {
      console.log('error submit!', fields)
    }
  })
}
const login_rules = reactive<FormRules<RuleForm>>({
  username: [
    {
      required: true,message: '请输入用户名',trigger: 'blur'
    },
    {
      min: 5,max: 15,message: '用户名长度是5到15',trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,message: '请输入密码',trigger: 'blur'
    },
    {
      min: 8,max: 16,message: '密码的长度是8到16',trigger: 'blur'
    }
  ],
})


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
const login_statues = ref(100)
//注册函数
const registerSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    axios.get(`http://8.130.35.251:3000/captcha/verify?phone=${Register.username}&captcha=${Register.code}`).then((res) => {
      console.log(res)
      login_statues.value = res.data.code
    })
    if (valid && login_statues.value !== 503) {
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
        message: '验证码错误!',
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
      min: 8,max: 16,message: '密码的长度是8到16',trigger: 'blur'
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
const mes = ref('获取验证码')
const number = ref(60)
const captcha = () => {
  if (Register.username !== '' && Register.password !== ''){
    axios.get(`http://8.130.35.251:3000/captcha/sent?phone=${Register.username}`).then((res) => {
      console.log(res)
    })
    const timer = setInterval(() => {
      mes.value = `重新发送(${number.value})`
      number.value --
      if (number.value === 0){
        clearInterval(timer)
        mes.value = '重新发送'
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
            ref="ruleFormRef"
            label-width="80px"
            :rules="login_rules"
            :model="login"
            status-icon
            label-position="left"
        >
          <el-form-item label="手机号:" prop="username">
            <el-input clearable placeholder="请输入手机号" v-model="login.username"/>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input type="password" clearable show-password v-model="login.password" placeholder="请输入密码"/>
          </el-form-item>
          <el-button round @click="submitForm(ruleFormRef)" class="el-button-1" style="margin-bottom: 20px">登录</el-button>
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
          <el-button style="width: 80px;" class="el-button-2" @click="captcha">{{mes}}</el-button>
          <el-button class="el-button-1" round @click="registerSubmit(registerFormRef)">注册</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "Login.css";
</style>