function particle(num) {
  var domstr = '';
  var cssstr = '';
  for (var i=0; i < num; i++) {
	var redius = parseInt(Math.random() * 15 + 5);
	domstr += '<div class="point point' + i +'"></div>'
	cssstr += '.point' + i +' {'
    	+ 'width: ' + redius + 'px;'
    	+ 'height: ' + redius + 'px;'
     	+ 'background: #fff;'
    	+ 'border-radius: ' + (redius / 2) +'px;'
    	+ 'position: absolute;'
    	+ 'animation: particle ' + ((parseInt(Math.random() * 50) / 10) + 5) + 's both ' + ((parseInt(Math.random() * 10 + 1) / 10)) +'s infinite;'
    	+ 'left: ' + (Math.random() * 100) + '%'
		+ '}';
  	}
  	cssstr += '@keyframes particle {'
		+ '0% {'
		+ 'bottom: 0%;'
		+ 'opacity: 0;'
		+ '} '
		+ '1% {'
		+ 'bottom: 0%;'
		+ 'opacity: 0.7;'
		+ '} '
		+ '100% {'
		+ 'bottom: 100%;'
		+ 'opacity: 0;'
		+ '}}';
  var cssdom = document.querySelector('.gen');
  cssdom.innerHTML = cssstr;
  var previewdom = document.querySelector('.prefview');
  previewdom.innerHTML = domstr;
}