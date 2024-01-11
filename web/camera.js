document.addEventListener("DOMContentLoaded", function () {
    // 获取页面元素
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var snapButton = document.getElementById('snap');

    // 设置媒体属性
    var constraints = { video: { width: 640, height: 480 } };

    // 请求摄像头访问权限
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.error("摄像头访问出错: ", error);
            });
    }

    // 拍照功能
    snapButton.addEventListener('click', function () {
        context.drawImage(video, 0, 0, 640, 480);
        // 你可以在这里添加额外的代码来处理或保存图像
    });
});