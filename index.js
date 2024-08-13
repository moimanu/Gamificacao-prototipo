document.getElementById('bt_login_id').addEventListener('click', function() {
    window.location.href = 'pages/ranking.html';
});

function atualizarVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('load', atualizarVH);
window.addEventListener('resize', atualizarVH);