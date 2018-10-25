/**
 * @file 入口文件
 * @description
 * 是否有必要拆分 Layout, 值得商量， 我这么做是为了文件结构清晰
 * Redux 在这里注入
 *
 * @author Leo Hui <leohxj@gmail.com>
 *
 * Created Date: Tue, 2018-01-09 17:12:51
 *
 * Last Modified: Thu, 2018-10-25 20:59:26
 * Last Modified By: 寻镜 <xuejie.hxj@alibaba-inc.com>
 *
 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configStore from './redux/configStore';
import Layout from './layouts';

// global style
import './styles/theme.less';

// Mount ReactDOM
const MOUNT_POINT_ID = 'mount-point';
const MOUNT_NODE = document.getElementById(MOUNT_POINT_ID);

// Create store
const store = configStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    MOUNT_NODE
  );
};

render();

if (process.env.NODE_ENV === 'development') {
  console.warn('注意: 正在使用本地开发环境代码!');
}
