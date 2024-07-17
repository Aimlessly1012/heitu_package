import _slicedToArray from "@babel/runtime-corejs3/helpers/slicedToArray";
import { useState } from 'react';
function useTest(initialState) {
  var _useState = useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    test = _useState2[0],
    setTest = _useState2[1];
  return [test, setTest];
}
export default useTest;