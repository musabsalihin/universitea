export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const cookie = document.cookie;

    //get accessToken from cookie

    if (user && user.uT_token) {
        return {
            'Authorization': `Bearer ${user.uT_token}`,
            'Accept': 'application/json'
        };
    } else {
        return {};
    }
}