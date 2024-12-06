document.getElementById('contact-link').addEventListener('click', function () {
    // 显示弹出图片和遮罩
    document.getElementById('contact-popup').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function () {
    // 关闭弹出图片和遮罩
    document.getElementById('contact-popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
});

document.getElementById('popup-overlay').addEventListener('click', function () {
    // 点击遮罩时关闭弹窗
    document.getElementById('contact-popup').style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
});
