function goLogin() {
    window.location.href = "login/index.html";
}

function logout() {
    localStorage.removeItem("username");
    window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const user = localStorage.getItem("username");
    const userInfo = document.getElementById("userInfo");
    const authArea = document.getElementById("authArea");

    if (user && userInfo && authArea) {
        userInfo.innerText = "Halo, " + user;
        authArea.innerHTML = `
            <a class="nav-icon position-relative text-decoration-none" href="javascript:void(0)" onclick="logout()">
                <i class="fa fa-fw fa-user text-dark mr-3"></i> <small>(Logout)</small>
            </a>
        `;
    }
});

window.goLogin = goLogin;
window.logout = logout;
