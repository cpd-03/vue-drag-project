# libawall-oa-pc-new

篱笆墙人事平台PC管理端重构版（2022）

# 技术栈
vue3 + ant-design-vue、css统一采用less写法、js统一采用es6写法


# 目录结构
|——node_modules                    # 所有的项目依赖包都放在这个目录下
|——public                          # 公共文件夹
|  |——favicon.ico                  # 网站的显示图标
|  |——index.html                   # 入口的html文件
|——src                             # 源文件目录，编写的代码基本都在这个目录下
|  |——api                          # 配置接口请求的文件
|  |——assets                       # 放置静态文件的目录，比如 图片、公共样式
|  |——components                   # 全局组件的配置文件
|  |——directive                    # vue指令的配置文件
|  |——layout                       # 项目排版布局的配置文件
|  |——router                       # vue路由的配置文件
|  |——store                        # 存放 vuex, 管理所有的全局变量
|  |——utils                        # 配置项目的全局公共方法
|  |——views                        # 所有的视图文件都放在这个目录下
|  |——App.vue                      # 根组件，入口文件 ，所有页面都是在App.vue下进行切换的
|  |——main.js                      # 入口文件，初始化vue实例，并加载各种公共组件
|  |——permission.js                # 全局的路由守卫
|——env.development                 # 配置项目的开发环境
|——env.production                  # 配置项目的正式环境
|——.gitignore                      # 用来配置那些文件不归git管理
|——babel.config.js                 # 转换ECMAScript 2015+ 版本的代码，向下兼容
|——idea.config.js                  # 配置文件引入路径（import @格式）
|——package.json                    # 命令配置和包管理文件
|——README.md                       # 项目的说明文件，使用markdown语法进行编写
|——vue.config.js                   # 请求代理, webpack 配置, 打包输出等都会在这里配置
|——yarn.lock                       # yarn自动生成的文件，生成依赖包时存储相关的重要信息


**插件信息**

| 插件            | 版本号       | 功能                       
| --------------  | ----------  | -------------------------- 
| vue             | 3.0.0       | 项目框架                    
| vue-router      | 4.0.1       | 配置项目路由                 
| vuex            | 4.0.0-rc.2  | 数据缓存                                  
| ant design vue  | 2.2.8       | admin-UI                   
| echarts         | 5.0.2       | 提供admin图表               
| axios           | 0.24.0      | 前后端通信                   
| echarts         | 5.3.0       | 提供admin图表                
| md5             | 2.2.1       | 信息加密                     
| moment          | 2.29.1      | 时间库，处理时间                
| vue-pdf         | 4.3.0       | 处理pdf格式的文件                
| wangeditor      | 2.24.3      | 自由拖拽                
| vuedraggable    | 5.0.2       | 提供admin图表                
| vue-video-player| 5.0.2       | 视频播放器                
| v-viewer        | 1.6.4       | 图片预览                
| html2canvas     | 1.4.1       | 处理图片                




**常用指令**

# 安装 yarn
npm install -g yarn

# 安装 node_modules
yarn install

# 启动项目
yarn serve

# 打包正式环境
yarn build

# 打包测试环境
yarn test


# 安装插件
yarn add packagename

# 更新插件
yarn upgrade packagename

# 删除插件
yarn remove packagename