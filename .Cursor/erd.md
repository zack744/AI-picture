id: erd
name: 工程结构和数据结构设计文档
type: markdown
content: |-
  # 工程结构和数据结构设计文档 (ERD)

  ## 工程结构

  ```
  /project-root
  ├── /frontend
  │   ├── /components
  │   ├── /styles
  │   └── /utils
  ├── /backend
  │   ├── /api
  │   ├── /models
  │   └── /services
  └── /assets
  ```

  ## 数据结构

  ### 用户输入
  - **文字描述**：string
  - **上传图片**：file (JPG/PNG)
  - **风格选择**：enum (预设风格列表)
  - **相似度**：float (0.0 - 1.0)

  ### 输出图片
  - **图片文件**：file
  - **生成时间**：datetime
  - **风格**：string
