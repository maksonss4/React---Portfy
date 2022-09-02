import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --white:          #FFFFFF;
    --whitesmoke:     #f1f3f5;
    --black:          #1A1A1A;
    --green-black:    #005C57;
    --ligth-green:    #0CBABA;
    --ligth-blue:     #19CAE5;
    --medium-blue:    #09AAC5;
    --disabled-blue:  #A9CAE5;
    --success:        #6FD551;
    --color-negative: #EA5345;
    --ligth-grey:     #D9DADE;
    --medium-grey:    #91959A;
    --dark-grey:      #5A5A5A;

    --gradient: linear-gradient(115.77deg, #47DAC5 10.59%, #19CAE5 87.7%);
    --boxshadow: rgba(0, 0, 0, 0.25);
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section, label {
    display: block;
  }

  body {
    line-height: 1;
    font-family: 'Poppins';
  }

  input , button, textarea {
    font-family: inherit ;
  }

  ol, ul {
    list-style: none;
  }

  html,body, #root{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4 ,h5 ,h6 , p  {
    margin:0px
  }

  button {
    cursor: pointer;
  }
`;
