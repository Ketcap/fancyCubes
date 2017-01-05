(function() {

  this.fancyCubes = function(){

    var defaults = {
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
      // Animation Types there are 10 types [1,2,3,4,5,6,7,8,9,10] usage is array
      animations: "",
      // Color Counts optimal is 9 for non repeat colors nearby, add colors on css
      colorCount: 13,
      // Delay between each animation
      delay: 300,
      // Box Class for animation can be change but need to be unique for boxes
      boxClass:"cube"
    }

    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    var parent = el(this.options.element);

    if(!parent){
      console.log('Definition of element is wrong check it again');
      return false
    }
    var width = parent.offsetWidth;
    var height = parent.offsetHeight;
    console.log(width);

    var rowCount = this.options.rowCount || Math.floor(height / this.options.boxHeight);
    var colCount = this.options.colCount || Math.floor(width / this.options.boxWidth);

    var cubeWidth = rowCount ? width / rowCount : this.options.boxWidth;
    var cubeHeight = colCount ? height / colCount : this.options.boxHeight;
    var x, y = 0;
    for(var i = 1; i <= colCount; i++){
      x = 0;
      for(var j = 1; j <= rowCount; j++){
        //Cube Created
        var cube = document.createElement("div");
        cube.setAttribute("id",i+'-'+j);
        cube.style.width = cubeWidth+'px';
        cube.style.height = cubeHeight+'px';
        cube.style.left = x + "px";
        cube.style.top = y + "px";
        cube.style.zIndex = this.options.zIndex;
        cube.className += this.options.boxClass;
        // Cube Colored
        color(cube,i,j,this.options.colorCount);
        // Adding Cubes On Element
        parent.appendChild(cube);
        x += cubeWidth;
      }
      y += cubeHeight;
    }

    if(this.options.closeElement){
      // if click element is assigned
      var clickElement = el(this.options.closeElement);
      var options = this.options;

      clickElement.addEventListener('click',function(){
        open(rowCount,colCount,options.animations,options.element,options.delay);
      });
    }else if(this.options.autoStart){
      // if autostart is true start after page rendered
      open(rowCount,colCount,this.options.animations,this.options.element,this.options.delay);
    }
  }
  fancyCubes.prototype.open = function() {
    var parent = el(this.options.element);
    if(!parent){
      console.log('Definition of element is wrong check it again');
    }
    var width = parent.offsetWidth;
    var height = parent.offsetHeight;

    var rowCount = rowCount || Math.floor(height / this.options.boxHeight);
    var colCount = colCount || Math.floor(width / this.options.boxWidth);
    var cubeWidth = rowCount ? Math.floor(width / rowCount ) : this.options.boxWidth;
    var cubeHeight = colCount ? Math.floor(height / colCount) : this.options.boxHeight;
  }
  // Private Method
    // Opening Box
    open = function(row,col,animations,parent,delay){
      var parent = el(parent);
      var nodes = document.getElementsByClassName('cube');
      var arrayOfNodes = [];
      for (var i = 0; i < nodes.length; i++) {
        arrayOfNodes.push(nodes[i].getAttribute('id'))
      }

      for(var i = 0; i < arrayOfNodes.length; i++ ){
        setTimeout(function(){
          var randomIndex = Math.floor(Math.random() * arrayOfNodes.length)
          var randomChild = el('#'+arrayOfNodes[randomIndex])
          arrayOfNodes.splice(randomIndex,1);
          var animation = animations[Math.floor(Math.random() * animations.length)];
          close(randomChild,animation,delay,parent)
        },
        i*delay );
      }
    }
    // Close animations
    close = function(element,animation,delay,parent){
      switch (animation) {
        case 1:
          element.style.width = 0;
          break;
        case 2:
          element.style.height = 0;
          break;
        case 3:
          element.style.width = 0;
          element.style.marginLeft = element.style.width;
          break;
        case 4:
          element.style.height = 0;
          element.style.marginTop = element.style.height;
          break;
        case 5:
          element.style.width = 0;
          element.style.height = 0;
          break;
        case 6:
          element.style.marginLeft = element.style.width;
          element.style.width = 0;
          element.style.height = 0;
          break;
        case 7:
          element.style.marginTop = element.style.height;
          element.style.width = 0;
          element.style.height = 0;
          break;
        case 8:
          element.style.marginLeft = element.style.width;
          element.style.marginTop = element.style.height;
          element.style.width = 0;
          element.style.height = 0;
          break;
        case 9:
          element.style.marginLeft = parseInt(element.style.width,10)/2 +'px';
          element.style.marginTop = parseInt(element.style.height,10)/2 +'px';
          element.style.width = 0;
          element.style.height = 0;
          break;
        case 10:
          element.style.opacity = 0;
          break;
      }
    }
    // Color Algorithm will be improved
    color = function(cube,x,y,colors){
      var colorArray = [];
      for(var a = 1; a <= colors;a++){
        colorArray.push(a);
      }

      var xStart = x - 1;
      var xEnd = x;
      var yStart = y - 1;
      var yEnd = y + 1;

      if(el('#'+xStart+'-'+yStart)){
        var oldColor = el('#'+xStart+"-"+yStart).getAttribute('color');
        var index = colorArray.findIndex(function(e){ return e == oldColor})
        colorArray.splice( index, 1 );
      }
      if(el('#'+xStart+'-'+y)){
        var oldColor = el('#'+xStart+"-"+y).getAttribute('color');
        var index = colorArray.findIndex(function(e){ return e == oldColor})
        colorArray.splice( index, 1 );
      }
      if(el('#'+xStart+'-'+yEnd)){
        var oldColor = el('#'+xStart+"-"+yEnd).getAttribute('color');
        var index = colorArray.findIndex(function(e){ return e == oldColor})
        colorArray.splice( index, 1 );
      }
      if(el('#'+xEnd+'-'+yStart)){
        var oldColor = el('#'+xEnd+"-"+yStart).getAttribute('color');
        var index = colorArray.findIndex(function(e){ return e == oldColor})
        colorArray.splice( index, 1 );
      }


      var color = colorArray[Math.floor(Math.random() * colorArray.length)];
      cube.setAttribute('color',color)

    }

    // Basic Select Element like Jquery
    el = function(element){
      if(element.charAt(0) == "#"){
        return document.getElementById(element.substring(1,element.length));
      }
      else if(element.charAt(0) == '.'){
        return document.getElementByClass(el.substring(1,element.length));
      }else{
        return document.getElementsByTagName(element)[0];
      }
    }
    // Extending Defaults
    extendDefaults = function(source, properties) {
      var property;
      for (property in properties) {
        if (properties.hasOwnProperty(property)) {
          source[property] = properties[property];
        }
      }
      return source;
    }

}());
