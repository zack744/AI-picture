/**
 * 文字输入组件
 * 支持中英文输入的文字描述框，用于自然语言生成图片
 */
class TextInput {
    /**
     * 构造函数
     * @param {string} containerId - 文字输入组件的容器ID
     * @param {number} maxLength - 最大字符数限制
     */
    constructor(containerId, maxLength = 500) {
        this.container = document.getElementById(containerId);
        this.maxLength = maxLength;
        
        if (!this.container) {
            console.error(`容器 ${containerId} 不存在`);
            return;
        }
        
        this.render();
        this.setupEventListeners();
    }
    
    /**
     * 渲染组件
     */
    render() {
        this.container.innerHTML = `
            <div class="text-input-component">
                <h2>文字描述</h2>
                <p>请输入您想要生成图片的文字描述（支持中英文）</p>
                <textarea 
                    class="text-input-area" 
                    placeholder="例如：一只橙色的猫坐在蓝色的沙发上，窗外是明媚的阳光"
                    maxlength="${this.maxLength}"
                ></textarea>
                <div class="character-counter">0/${this.maxLength}</div>
                <button class="generate-button">生成图片</button>
            </div>
        `;
        
        // 保存对DOM元素的引用
        this.textArea = this.container.querySelector('.text-input-area');
        this.charCounter = this.container.querySelector('.character-counter');
        this.generateButton = this.container.querySelector('.generate-button');
    }
    
    /**
     * 设置事件监听器
     */
    setupEventListeners() {
        // 输入监听，更新字符计数
        this.textArea.addEventListener('input', () => {
            const currentLength = this.textArea.value.length;
            this.charCounter.textContent = `${currentLength}/${this.maxLength}`;
            
            // 如果超过90%，显示警告颜色
            if (currentLength > this.maxLength * 0.9) {
                this.charCounter.style.color = '#e74c3c';
            } else {
                this.charCounter.style.color = '#7f8c8d';
            }
        });
        
        // 生成按钮点击事件
        this.generateButton.addEventListener('click', () => {
            this.handleGenerate();
        });
    }
    
    /**
     * 处理生成按钮点击事件
     */
    handleGenerate() {
        const textInput = this.textArea.value.trim();
        
        if (!textInput) {
            alert('请输入文字描述');
            return;
        }
        
        // 在这里添加生成图片的逻辑，或触发自定义事件
        console.log('生成图片请求:', textInput);
        
        // 示例：触发自定义事件，以便外部代码可以监听和处理
        const event = new CustomEvent('textGenerate', { 
            detail: { text: textInput } 
        });
        this.container.dispatchEvent(event);
    }
    
    /**
     * 获取当前输入的文本
     * @returns {string} 文本内容
     */
    getText() {
        return this.textArea.value;
    }
    
    /**
     * 清空输入框
     */
    clear() {
        this.textArea.value = '';
        this.charCounter.textContent = `0/${this.maxLength}`;
        this.charCounter.style.color = '#7f8c8d';
    }
} 