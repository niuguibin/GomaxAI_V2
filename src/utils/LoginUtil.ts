//登录用的工具类
import req from '../utils/request'
import { reactive } from "vue";
interface LoginForm{
    username: string,
    password: string
}
const LoginInfo = reactive<LoginForm>({
    username: '',
    password: ''
})
const requestInstance = req
class LoginUtil {
    public username = ''
    public password = ''
    submit = () => {
        requestInstance.post(`http://localhost:9090/login`,{
            phone: this.username,
            password: this.password
        }).then((res) => {
            console.log('登陆成功',res)
        }).catch((err) => {
            console.log('登录错误',err)
        })
    }
}
const loginUtil = new LoginUtil()
export default loginUtil