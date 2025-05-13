/**
 * 应用初始化脚本
 * 负责初始化各个组件并处理它们之间的交互
 */

// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    initializeComponents();
});

/**
 * 初始化所有组件
 */
function initializeComponents() {
    // 初始化文字输入组件
    const textInputComponent = new TextInput('text-input-container');
    
    // 监听文字生成事件
    document.getElementById('text-input-container').addEventListener('textGenerate', (event) => {
        handleTextGeneration(event.detail.text);
    });
}

/**
 * 处理文字生成图片的请求
 * @param {string} text - 用户输入的文字描述
 */
function handleTextGeneration(text) {
    // 在这里添加发送到后端的逻辑
    // 目前只是简单地显示一个提示
    console.log(`准备使用文字生成图片: "${text}"`);
    alert(`您的请求已提交！\n描述: ${text}\n\n（后端处理逻辑将在后续任务中实现）`);
} 