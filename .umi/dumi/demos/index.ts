// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/ui/demos/TestCom.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/hook/demos/useTest.tsx?dumi-raw-code';

export default {
  'ui-testcom': {
    component: (require('/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/ui/demos/TestCom.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"18.3.1"}},"description":"<div class=\"markdown\"><p>demo1</p></div>","identifier":"ui-testcom"},
  },
  'hook-usetest': {
    component: (require('/Users/peco/Documents/Peco/TestProjects/heitu_package/docs/hook/demos/useTest.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"18.3.1"}},"description":"<div class=\"markdown\"><p>demo1</p></div>","identifier":"hook-usetest"},
  },
};
