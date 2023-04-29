## 在线简历项目

#### 快速初始化

项目在线预览：

```bash
# 先克隆项目

git clone g https://github.com/212063551/Online-resume.git

# 安装依赖

npm i || yarn

# 运行项目

npm run dev || yarn dev 

# 修改查看码 在 src 目录下的 config.ts 的文件里可修改默认查看码

export const password = '你的密码';
```

#### 项目简述
* 项目基于 react 创建，使用了 Less 和 TypeScript
* 适配了移动端，使用了路由守卫，未获取查看码，无法进入简历页面
* 右上角可切换简历语言目前仅支持中英文（英文为机翻，不一定准确，请以中文为准）
* 查看码在 src 目录 config.ts 中设置或修改。
* 如果你懂技术可以自己启动一个服务来修改或生成查看码。那就可以实现更多功能。



## Online Resume Project

#### Quick Initialization

```bash
# Clone the project first

Git clone g https://github.com/212063551/Online-resume.git

# installation dependency

Npm I | | yarn

# run the project

Npm run dev | | yarn dev

# modify the view code. You can modify the default view code in the config.ts file under the src directory.

Export const password = 'your password'
```
# Project Overview
* The project is based on react and uses Less and TypeScript
* Adapted to the mobile end, used routing guards, did not get the access code, and could not enter the resume page
* Switchable resume language in the upper right corner currently supports only Chinese and English (English is machine translation, not necessarily accurate, please prevail in Chinese)
* The view code is set or modified in the src directory config.ts.
* If you know the technology, you can start a service yourself to modify or generate the lookup code. Then more functions can be achieved.