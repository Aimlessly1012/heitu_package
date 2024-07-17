// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/peco/Documents/Peco/TestProjects/heitu_package/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/peco/Documents/Peco/TestProjects/heitu_package/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/peco/Documents/Peco/TestProjects/heitu_package/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1721182508000,
          "hero": {
            "title": "前端公共资源",
            "desc": "<div class=\"markdown\"><p>高效、稳定、便捷</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/pro/table"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "@heitu_package/ui",
              "desc": "<div class=\"markdown\"><p>业务沉淀通用组件，涉及部分视觉规范或业务逻辑</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "@heitu_package/hook",
              "desc": "<div class=\"markdown\"><p>通用hooks，无业务逻辑</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Powered by Peco</p></div>",
          "slugs": [],
          "title": "Index"
        },
        "title": "Index - heitu_package"
      },
      {
        "path": "/zh-CN/hook/",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/packages/hook/src/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hook/src/index.zh-CN.md",
          "updatedTime": 1721182508000,
          "title": "快速开始",
          "order": 1,
          "nav": {
            "order": 2,
            "title": "Hook",
            "path": "/zh-CN/hook"
          },
          "group": {
            "path": "/zh-CN/hook/",
            "title": "Hook"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "依赖安装",
              "heading": "依赖安装"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "快速开始 - heitu_package"
      },
      {
        "path": "/zh-CN/hook/use-test",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/packages/hook/src/useTest/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hook/src/useTest/index.zh-CN.md",
          "updatedTime": 1721182508000,
          "title": "useTest",
          "order": 1,
          "nav": {
            "order": 2,
            "title": "Hook",
            "path": "/zh-CN/hook"
          },
          "group": {
            "path": "/zh-CN/hook/",
            "title": "Hook"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "依赖安装",
              "heading": "依赖安装"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "useTest - heitu_package"
      },
      {
        "path": "/zh-CN/hook/use-update-effect",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/packages/hook/src/useUpdateEffect/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hook/src/useUpdateEffect/index.zh-CN.md",
          "updatedTime": 1721182508000,
          "title": "useUpdateEffect",
          "order": 1,
          "nav": {
            "order": 2,
            "title": "Hook",
            "path": "/zh-CN/hook"
          },
          "group": {
            "path": "/zh-CN/hook/",
            "title": "Hook"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUpdateEffect",
              "heading": "useupdateeffect"
            },
            {
              "depth": 2,
              "value": "描述",
              "heading": "描述"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "useUpdateEffect - heitu_package"
      },
      {
        "path": "/zh-CN/pro/",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/packages/ui/src/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/ui/src/index.zh-CN.md",
          "updatedTime": 1721182508000,
          "title": "快速开始",
          "order": 1,
          "nav": {
            "order": 2,
            "title": "通用组件",
            "path": "/zh-CN/pro"
          },
          "group": {
            "path": "/zh-CN/pro/",
            "title": "通用组件"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "依赖安装",
              "heading": "依赖安装"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "快速开始 - heitu_package"
      },
      {
        "path": "/zh-CN/pro/tree-select",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/packages/ui/src/TreeSelect/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/ui/src/TreeSelect/index.zh-CN.md",
          "updatedTime": 1721182508000,
          "componentName": "TreeSelect",
          "title": "TreeSelect - 高级树结构选择",
          "order": 2,
          "nav": {
            "order": 1,
            "title": "通用组件",
            "path": "/zh-CN/pro"
          },
          "group": {
            "path": "/zh-CN/pro/",
            "title": "通用组件"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "中文文档 TreeSelect",
              "heading": "中文文档-treeselect"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "TreeSelect - 高级树结构选择 - heitu_package"
      },
      {
        "path": "/zh-CN",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1721182508000,
          "hero": {
            "title": "前端公共资源",
            "desc": "<div class=\"markdown\"><p>高效、稳定、便捷</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/pro/table"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "@heitu_package/ui",
              "desc": "<div class=\"markdown\"><p>业务沉淀通用组件，涉及部分视觉规范或业务逻辑</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "@heitu_package/hook",
              "desc": "<div class=\"markdown\"><p>通用hooks，无业务逻辑</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Powered by Peco</p></div>",
          "slugs": [],
          "title": "Index",
          "locale": "zh-CN"
        },
        "title": "Index - heitu_package"
      },
      {
        "path": "/zh-CN/hook",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/zh-CN/hook/"
      },
      {
        "path": "/zh-CN/pro",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/zh-CN/pro/"
      }
    ],
    "title": "heitu_package",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
