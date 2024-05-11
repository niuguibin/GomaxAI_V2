//用于注册的工具类
import axios from "axios";
import {reactive, ref} from "vue";
import req from '../utils/request'
const requestInstance = req
interface registerForm {
    phone: string,
    pass: string,
    code: string,
    statue: boolean
}
const Reg = reactive<registerForm>({
    phone: '',
    pass: '',
    code: '',
    statue: false
})
class RegisterUtil {
    public phone = ''
    public pass = ''
    public code = ''
    //这是一个标志位，如果注册成功就置为true
    public statue = false
    private res_code = ref()
    //验证码发送
    sendMes = () => {
        axios.get(`http://localhost:9090/user/register/sendMs?phone=${this.phone}`).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err,'错误')
        })
    }
    //注册
    submit = () => {
        requestInstance.post(`http://localhost:9090/user/register`,{
            phone: this.phone,
            password: this.pass,
            code: this.code
        }).then((res) => {
            this.res_code.value = res.data.code
            if (this.res_code.value === '200'){
                this.statue = true
            }else {
                this.statue = false
            }
        }).catch((err) => {
            console.log('错误',err)
        })
    }
}
const registerUtil = new RegisterUtil()
export default registerUtil