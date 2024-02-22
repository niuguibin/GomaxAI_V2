//用于注册的工具类
import axios from "axios";
import {reactive } from "vue";
import {req} from '../utils/request'
const requestInstance = req
interface registerForm {
    phone: string,
    pass: string,
    code: string
}
const Reg = reactive<registerForm>({
    phone: '',
    pass: '',
    code: ''
})
class RegisterUtil {
    public phone = ''
    public pass = ''
    public code = ''
    //验证码发送
    sendMes = () => {
        axios.get(`http://localhost:9090/user/register/sendMs?phoneNumber=${this.phone}`).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err,'错误')
        })
    }
    //注册
    submit = () => {
        requestInstance.post(`/user/register`,{
            phone: `${this.phone}`,
            password: `${this.pass}`,
            code: `${this.code}`
        },{
            headers: {"Content-Type": "application/json"}
        }).then((res) => {
            console.log('注册成功',res)
        }).catch((err) => {
            console.log('错误',err)
        })
    }
}
const registerUtil = new RegisterUtil()
export default registerUtil