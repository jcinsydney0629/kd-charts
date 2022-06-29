import React, { FC, useRef } from 'react';
import classnames from 'classnames';
import usePopper from '@kdcloudjs/kdesign/es/_utils/usePopper';

import '@kdcloudjs/kdesign/dist/kdesign.css';
import './Menus.less';

const menus = [
  {
    name: 'KDesign',
    url: 'https://kingdee.design',
  },
  {
    name: '全局规则',
    url: 'https://kingdee.design/rule/guide/introduce',
  },
  {
    name: '设计规范',
    children: [
      {
        name: 'PC组件',
        url: 'https://kingdee.design/pc/components',
      },
      {
        name: 'PC典型页面',
        url: 'https://kingdee.design/pc/page/workbench/workbench',
      },
      {
        name: '移动组件',
        url: 'https://kingdee.design/mobile/components',
      },
      {
        name: '移动典型页面',
        url: 'https://kingdee.design/mobile/page/home',
      },
      {
        name: '可视化概览',
        url: 'https://kingdee.design/charts/guide',
      },
      {
        name: '可视化组件',
        url: 'https://kingdee.design/charts/standard/charts',
      },
    ],
  },
  {
    name: '前端组件',
    children: [
      {
        name: 'React',
        url: 'https://react.kingdee.design',
      },
      {
        name: 'Charts',
        url: 'https://charts.kingdee.design/tutorial',
      },
    ],
  },
  {
    name: '生态产品',
    children: [
      {
        name: 'Pro',
        url: 'https://pro.kingdee.design',
      },
    ],
  },
  {
    name: '资源',
    url: 'https://kingdee.design/resource',
  },
];

const Navbar: FC<{ hiddenInPc: boolean }> = ({ hiddenInPc }) => {
  const switchRef = useRef<any>();

  const switchHandle = (
    <div className={classnames('__dumi-kdesign-menus-handle', { hiddenInPc })}>
      <img
        src={require('../images/switch-app.svg')}
        ref={switchRef}
        alt="Kingdee Design"
      />
      <span className="__dumi-kdesign-menus-handle-split"></span>
    </div>
  );

  const switchMenu = (
    <ul className="__dumi-kdesign-menus-dropdown-menu">
      {menus.map(({ name, url, children }) => (
        <li key={name}>
          {children ? (
            <>
              <h3>{name}</h3>
              <ul className="__dumi-kdesign-menus-dropdown-menu-sub">
                {children.map(({ name, url }) => (
                  <li key={name}>
                    <a href={url}>{name}</a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <a href={url}>{name}</a>
          )}
        </li>
      ))}
    </ul>
  );

  return usePopper(switchHandle, switchMenu, {
    gap: 0,
    trigger: 'hover',
    placement: 'bottomLeft',
    prefixCls: '__dumi-kdesign-menus-dropdown',
    getTriggerElement: () => switchRef.current,
  });
};

export default Navbar;
