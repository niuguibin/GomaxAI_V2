//登录用的工具类
import axios from "axios";
import { reactive } from "vue";
interface LoginForm{
    username: string,
    password: string
}
const LoginInfo = reactive<LoginForm>({
    username: '',
    password: ''
})
class LoginUtil {
    public username = ''
    public password = ''
    submit = () => {
        axios.post(`http://localhost:9090/user/login`,{
            phone: `${this.username}`,
            password: `${this.password}`
        },{
            headers: {"Content-Type": "application/json"}
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log('成功登录',err)
        })
    }
}
const loginUtil = new LoginUtil()
export default loginUtil