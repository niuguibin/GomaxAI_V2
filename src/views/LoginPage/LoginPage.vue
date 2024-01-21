<script setup lang="ts">
import { reactive,ref } from "vue";
import {useRouter} from "vue-router";
import type { FormInstance, FormRules } from 'element-plus'
import {ElMessage} from "element-plus";
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
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.push('/')
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
const registerSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      isShow_1.value = !isShow_1.value
      isShow_2.value = !isShow_2.value
      ElMessage({
        message: '注册成功!',
        type: 'success',
      })
      console.log('register success!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
const register_rules = reactive<FormRules<registerForm>>({
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
  code: [
    {
      required: true,message: '请输入验证码',trigger: 'blur'
    }
  ]
})
const isShow_1 = ref(true)
const isShow_2 = ref(false)
</script>

<template>
  <div class="background">
    <div class="container" v-show="isShow_1">
      <div class="top">
        <div class="top-inner">
          <div class="inner-item">
            <img src="../../assets/img/logo_2.png" alt="" loading="lazy">
          </div>
          <div class="inner-item-2">GOMAX AI</div>
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
          <el-form-item label="用户名:" prop="username">
            <el-input clearable placeholder="请输入用户名" v-model="login.username"/>
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
          <div class="inner-item-2">GOMAX AI</div>
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
          <el-form-item label="用户名:" prop="username">
            <el-input clearable placeholder="请输入用户名" v-model="Register.username"/>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input clearable placeholder="请输入密码" type="password" v-model="Register.password" show-password/>
          </el-form-item>
          <el-form-item prop="code" style="margin-bottom: 10px">
            <el-input clearable v-model="Register.code" placeholder="请输入验证码"/>
          </el-form-item>
          <el-button style="width: 80px;" class="el-button-2">获取验证码</el-button>
          <el-button class="el-button-1" round @click="registerSubmit(registerFormRef)">注册</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "Login.css";
</style>