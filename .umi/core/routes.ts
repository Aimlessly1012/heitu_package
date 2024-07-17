// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/peco/Documents/Peco/TestProjects/heitu_package/node_modules/umi/node_modules/@umijs/runtime';
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
        "path": "/zh-CN/ui/",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/packages/ui/src/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/ui/src/index.zh-CN.md",
          "updatedTime": 1721202459000,
          "title": "快速开始",
          "order": 1,
          "nav": {
            "order": 2,
            "title": "ui",
            "path": "/zh-CN/ui"
          },
          "group": {
            "path": "/zh-CN/ui/",
            "title": "ui"
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
        "path": "/zh-CN/ui/test-com",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/packages/ui/src/TestCom/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/ui/src/TestCom/index.zh-CN.md",
          "updatedTime": 1721202459000,
          "componentName": "TestCom",
          "title": "Text - 测试组件",
          "order": 2,
          "nav": {
            "order": 1,
            "title": "通用组件",
            "path": "/zh-CN/ui"
          },
          "group": {
            "path": "/zh-CN/ui/",
            "title": "通用组件"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "中文文档 Text",
              "heading": "中文文档-text"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Text - 测试组件 - heitu_package"
      },
      {
        "path": "/guide",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/guide.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide.md",
          "updatedTime": 1721202459000,
          "slugs": [],
          "nav": {
            "path": "/guide",
            "title": "Guide"
          },
          "title": "Guide"
        },
        "title": "Guide - heitu_package"
      },
      {
        "path": "/",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1721202459000,
          "hero": {
            "title": "Heitu_package",
            "desc": "<div class=\"markdown\"><p>heitu_package site example</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/hook"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "heitu_package/hook",
              "desc": "<div class=\"markdown\"><p>react 自定义hook</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "heitu_package/ui",
              "desc": "<div class=\"markdown\"><p>高效组件</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Powered by Peco</p></div>",
          "slugs": [],
          "title": "Index"
        },
        "title": "Index - heitu_package"
      },
      {
        "path": "/hook/use-test",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/hook/useTest.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/hook/useTest.md",
          "updatedTime": 1721202459000,
          "slugs": [
            {
              "depth": 1,
              "value": "useTest",
              "heading": "usetest"
            },
            {
              "depth": 2,
              "value": "描述",
              "heading": "描述"
            },
            {
              "depth": 2,
              "value": "Demo",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "Api",
              "heading": "api"
            }
          ],
          "title": "useTest",
          "hasPreviewer": true,
          "nav": {
            "path": "/hook",
            "title": "Hook"
          }
        },
        "title": "useTest - heitu_package"
      },
      {
        "path": "/ui/test-com",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/ui/TestCom.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/ui/TestCom.md",
          "updatedTime": 1721202459000,
          "slugs": [
            {
              "depth": 1,
              "value": "TestCom",
              "heading": "testcom"
            },
            {
              "depth": 2,
              "value": "描述",
              "heading": "描述"
            },
            {
              "depth": 2,
              "value": "Demo",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "Api",
              "heading": "api"
            }
          ],
          "title": "TestCom",
          "hasPreviewer": true,
          "nav": {
            "path": "/ui",
            "title": "Ui"
          }
        },
        "title": "TestCom - heitu_package"
      },
      {
        "path": "/zh-CN/guide",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/guide.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide.md",
          "updatedTime": 1721202459000,
          "slugs": [],
          "nav": {
            "path": "/zh-CN/guide",
            "title": "Guide"
          },
          "title": "Guide",
          "locale": "zh-CN"
        },
        "title": "Guide - heitu_package"
      },
      {
        "path": "/zh-CN",
        "component": require('/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1721202459000,
          "hero": {
            "title": "Heitu_package",
            "desc": "<div class=\"markdown\"><p>heitu_package site example</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/hook"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "heitu_package/hook",
              "desc": "<div class=\"markdown\"><p>react 自定义hook</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "heitu_package/ui",
              "desc": "<div class=\"markdown\"><p>高效组件</p></div>"
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
        "path": "/zh-CN/ui",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/zh-CN/ui/"
      },
      {
        "path": "/hook",
        "meta": {},
        "exact": true,
        "redirect": "/hook/use-test"
      },
      {
        "path": "/ui",
        "meta": {},
        "exact": true,
        "redirect": "/ui/test-com"
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
