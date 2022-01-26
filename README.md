# garden-ui组件库

## 快速开始
#### 1.安装组件库
```
npm install garden-ui
```
#### 2.引入组件库
```javascript
//全部引入
import "garden-ui/dist/css/index.css";
import GardenUI from 'garden-ui'
Vue.use(GardenUI)
//按需引入
import "garden-ui/dist/css/card.css";
import {Card,Alert} from 'garden-ui'
Vue.use(Card)
Vue.use(Alert)
```
#### 3.项目运行
```
npm run serve
```

#### 4.项目打包
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

/).
