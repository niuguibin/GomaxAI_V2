//登录用的工具类
import axios from "axios";
import {req} from '../utils/request'
import { useCounterStore } from '../stores/counter'
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
        //const store = useCounterStore();
        requestInstance.post(`/user/login`,{
            phone: `${this.username}`,
            password: `${this.password}`
        },{
            headers: {"Content-Type": "application/json;charset=utf-8"}
        }).then((res) => {
            console.log('登陆成功',res)
            //store.token = res.data.data.token
        }).catch((err) => {
            console.log('登录错误',err)
        })
    }
}
const loginUtil = new LoginUtil()
export default loginUtil