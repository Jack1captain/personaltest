// 获取按钮和欢迎消息元素
const welcomeButton = document.getElementById('welcomeButton');
const welcomeMessage = document.getElementById('welcomeMessage');

// 给按钮添加点击事件
welcomeButton.addEventListener('click', function() {
    // 当按钮被点击时，显示欢迎消息
    welcomeMessage.textContent = '欢迎来到我的个人网页！';
    welcomeMessage.classList.remove('hidden');
});
