<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/tpPix4ZmzY6dhNh7SnGSvHPH/Ketcap/fancyCubes'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/tpPix4ZmzY6dhNh7SnGSvHPH/Ketcap/fancyCubes.svg' />
</a>

# FancyCubes New Way to Reveal Elements or Pictures
[Demo Gif](https://github.com/Ketcap/fancyCubes/blob/master/fancycube.gif)

## How to use ?
- Just include fancycube.js  and cubes.css in your project and  call  this function after page rendered.
- If you are not using jquery you can write it inside `script` tag just before body in html.
- If you are using jquery just write inside document ready

new fancyCubes({
    element:'main',
    closeElement:'main',
    width:'60px',
    autoStart:true,
    delay:50
})


### fancyCubes options
``` javascript
      {
          // Element To Apply
          element : null,
          // Element To
          closeElement: null,
          // Autostart after cubes created
          autoStart: true,
          // Cubes width will be calculated if null
          boxWidth: 50,
          // Row Count will be calculated if null
          rowCount: null,
          // Cubes height will be calculated if null
          boxHeight: 50,
          // Column Count will be calculated if null
          colCount:null,
          // Z-index property for cubes
          zIndex: 100,
          // Animation Types there are 10 types [1,2,3,4,5,6,7,8,9,10] usage is array please define which animations you want in array it will be random pick
          animations: "",
          // Color Counts optimal is 9 for non repeat colors nearby, add colors on css
          colorCount: 13,
          // Delay between each animation
          delay: 300,
          // Box Class for animation can be change but need to be unique for boxes
          boxClass:"cube"
        }
```
## Free Software, Hell Yeah!
