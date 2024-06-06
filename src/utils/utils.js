
const isAuthentication = () => {
    const getUser = JSON.parse(localStorage.getItem('loginData'));

    if (getUser) {
        const findUser = getUser.find((user) => user.isLogin);
        if (findUser?.isLogin) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}
exports.isAuthentication = isAuthentication;

