const baseUrl = '/api'
//登录 
const login = baseUrl + '/BackLogin/AdminUserLogin'
//登出
const BackLog = baseUrl + '/BackLogin/AdminUserLogout'
// 添加用户
const AddUser = baseUrl + '/AdminUser/GetAdminUserRole'

export default {
    login,
    AddUser,
    BackLog

}