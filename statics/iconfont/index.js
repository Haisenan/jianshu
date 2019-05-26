import { createGlobalStyle } from 'styled-components'

export const GlobalStyle=createGlobalStyle
`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1558798667691'); /* IE9 */
  src: url('./iconfont.eot?t=1558798667691#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1558798667691') format('woff'),
  url('./iconfont.ttf?t=1558798667691') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1558798667691#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`