# 一 React
### 1. 概念
>React 是一个用于构建用户界面的 [javascript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript) 库。
React主要用于构建UI，是 MVC 中的 V（视图）。
React 起源于 Facebook 的内部项目，用来架设 [Instagram](https://www.instagram.com/) 的网站，并于 2013 年 5 月开源。
React 拥有较高的性能，代码逻辑非常简单。

### 2. 特点
* `高效` −React通过对DOM的模拟，最大限度地减少与DOM的交互。

* `灵活` −React可以与已知的库或框架很好地配合。

* `JSX` − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但建议使用它。

* `组件` − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。

* `单向响应的数据流` − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。(`Redux`)
 
### 3. [安装] (https://doc.react-china.org/docs/installation.html)
```
yarn init
yarn add react react-dom react-scripts
```
package.json

```js
{
  "name": "test",
  "version": "1.0.0",
  "description": "zzz",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "^1.0.17"
  },
  "scripts": {
    "start": "react-scripts start"
  }
}

```

### 4. 组件
#### 1. ES6 class
```js
class Welcome extends React.Component {
    render() {
        return (
            <h1> Hello, {this.props.name} </h1>
        )
    }
} 

class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name = "zhz1" />
                <Welcome name = "zhz2" />
                <Welcome name = "zhz3" />
            </div>
        )
    }
}

```

#### 2. 函数式 (无状态组件)
```js
function Welcome(props) {
    return <h1> Hello, {props.name} </h1>
}

function App() {
    return (
        <div>
            <Welcome name = "zhz1" />
            <Welcome name = "zhz2" />
            <Welcome name = "zhz3" />
        </div>
    )
}
```

#### 3. ES5-写法 React.createClass(仅做参考)
React.createClass会自绑定函数方法（不像React.Component只绑定需要关心的函数）导致不必要的性能开销，增加代码过时的可能性。

```js
const Welcome = (props) => {
    return <h1> Hello, {this.props.name} </h1>
}

const App = React.createClass ({
    render() {
        return (
            <div>
                <Welcome name1 = "ss" />
                <Welcome name1 = "zhz2" />
                <Welcome name1 = "zhz3" />
            </div>
        )
    }
});
```

导出(提供接口)
`export default App`

### 5. Props 属性
<h5 color:#769abb >`无论是使用函数或是类来声明一个组件，它决不能修改它自己的props`<h5>

### 6. State 状态
React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）

```js
class Welcome extends React.Component {
    render() {
        return (
            <h1 onClick={this.props.onClick} > Hello, {this.props.name} </h1>
        )
    }
} 
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false
        }
    }

    changeText() {
        this.setState((preState, props) => ({
            selected: !preState.selected
        }))
    }
    
    render() {
        return (
            <div> 
                <Welcome name= {this.state.selected ? "zhz3-selected" : "zhz3" } onClick={() => this.changeText()} />
                <h1 onClick={() => this.changeText()}> {this.state.selected ? "zhz3-selected" : "zhz3" } </h1>
            </div>
        )
    }
}

export default App;
```


### 6. 注意
* class 属性变为 `className`
* tabindex 属性变为 `tabIndex`
* for 属性变为 `htmlFor`
* textarea 的值通过需要通过 `value` 属性来指定
* style 属性的值接收一个对象，css 的属性变为`驼峰`写法，如：backgroundColor。

# 二 React Native
### 1. 了解
- 为什么要学

>What we really want is the **user experience** of the **native mobile** platforms, combined with the **developer experience** we have when building with React on the web.

摘自2015.3.26 React Native的发布稿（[Introducing React Native](http://facebook.github.io/react/blog/2015/03/26/introducing-react-native.html)），加粗的关键字传达了React Native的设计理念：`既拥有Native的用户体验、又保留React的开发效率。`

- `Learn once, write anywhere`

`Learn once, write anywhere`同样出自[Occhino的文章](https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/)。因为不同Native平台上的用户体验是不同的，React Native不强求一份原生代码支持多个平台，所以不提`Write once, run anywhere`（Java），提出了`Learn once, write anywhere`。
### 2. 安装
####1. 使用Homebrew来安装Node.js.

```
brew install node
```
可以使用镜像, 加速其他包的安装

```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

####2. Yarn、React Native的命令行工具（react-native-cli）
Yarn是Facebook提供的替代npm的工具，可以加速node模块的下载。React Native的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

```
npm install -g yarn
npm install -g react-native-cli
```
安装完yarn后同理也要设置镜像源：

```
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

安装完yarn之后就可以用`yarn`代替`npm`了，例如用yarn代替npm install命令，用yarn add 某第三方库名代替`npm install --save` 某第三方库名。

####3.  Watchman
Watchman是由Facebook提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager可以快速捕捉文件的变化从而实现实时刷新）

```
brew install watchman
```

**注意**: 
 最新的0.45及以上版本需要下载boost等几个第三方库编译, 下载地址: [iOS RN 0.45以上版本所需的第三方编译库(boost等)](http://bbs.reactnative.cn/topic/4301/ios-rn-0-45%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E6%89%80%E9%9C%80%E7%9A%84%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BC%96%E8%AF%91%E5%BA%93-boost%E7%AD%89)

####4. 创建(你可以使用--version参数创建指定版本的项目。如react-native init MyApp --version 0.49.5。注意版本号必须精确到两个小数点)
 
```
react-native init AwesomeProject
cd AwesomeProject
react-native run-ios
```
####5. 集成到现有项目中
1. 在项目根目录下创建一个名为`package.json`

```
{
  "name": "Demo",
  "version": "0.0.1",
  "private": true,
  "scripts": {
     "start": "node node_modules/react-native/local-cli/cli.js start"
  },
  "dependencies": {
      "react": "16.0.0-beta.5",
      "react-native": "0.49.5"
  }
}

```
`version`字段没有太大意义（除非你要把你的项目发布到npm仓库）。
`scripts`中是用于启动packager服务的命令。
`dependencies`中的react和react-native的版本取决于你的具体需求。你可以使用`npm info react`和`npm info react-native`来查看当前的最新版本。另外，`react-native`对react的版本有严格要求，高于或低于某个范围都不可以。注意观察安装过程中的报错信息，例如require react@某.某.某版本, but none was installed，然后根据这样的提示，执行`npm i -S react@某.某.某版本`。
如果你使用多个第三方依赖，可能这些第三方各自要求的react版本有所冲突，此时应优先满足react-native所需要的react版本。其他第三方能用则用，不能用则只能考虑选择其他库。
`npm install`

2. Podfile中以subspec的形式填写所有你要集成的React Native的组件。

```
  pod 'React', :path => 'ReactNative/node_modules/react-native', :subspecs => [
    'Core',
    'BatchedBridge', # 如果RN版本 >= 0.45则加入此行(CxxBridge)
    'DevSupport',
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket',
    'RCTImage'
  ]
  # 如果你的RN版本 >= 0.42.0，则加入下面这行
  pod "Yoga", :path => "ReactNative/node_modules/react-native/ReactCommon/yoga"
  # 如果RN版本 >= 0.45则加入下面三个第三方编译依赖
  pod 'DoubleConversion', :podspec => 'ReactNative/node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'GLog', :podspec => 'ReactNative/node_modules/react-native/third-party-podspecs/GLog.podspec'
  pod 'Folly', :podspec => 'ReactNative/node_modules/react-native/third-party-podspecs/Folly.podspec'

```
`pod install`

3. 创建一个`RCTRootView`。这个RCTRootView正是用来承载你的React Native组件的，而且它必须对应你在`index.js`中使用AppRegistry注册的模块名字
4. 启动React Native的Packager服务，运行应用。
5. 准备部署发布 （可以使用`node_modules/react-native/scripts/react-native-xcode.sh`脚本）

