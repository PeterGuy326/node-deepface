from flask import Flask, request, jsonify
from deepface import DeepFace
import os

app = Flask(__name__)

@app.route('/verify', methods=['POST'])
def verify():
    # 检查img1和img2是否在请求中
    if 'login_img' not in request.files or 'account_img' not in request.files:
        return jsonify({"error": "Missing images"}), 400
    
    login_img = request.files['login_img']
    account_img = request.files['account_img']

    # 为保存文件设置目录
    save_dir = 'uploaded_images'
    os.makedirs(save_dir, exist_ok=True)

    # 为两个图像文件生成路径
    login_img_path = os.path.join(save_dir, login_img.filename)
    account_img_path = os.path.join(save_dir, account_img.filename)


    # 使用DeepFace进行验证
    result = DeepFace.verify(login_img_path, account_img_path)
    return jsonify(result)

if __name__ == '__main__':
    result = DeepFace.verify('./uploaded_images/WechatIMG647.jpg', './uploaded_images/WechatIMG648.jpg')
    print(result)
    app.run(port=5000)