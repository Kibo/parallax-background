/*
 * Create parallax background a la https://github.com/404
 * @param {String} containerId - DOM id of parallax container
 * @param {number} depth - distance between the layers in space
 */
(function(containerId, depth) {
	
	var lastX, lastY;
	var isMoving = false;
	
	images = document.querySelectorAll("#" + containerId + " img");
	for (var idx = 0, len = images.length; idx < len; idx++) {
		images[idx].parallax = {x:0, y:0, depth: images[idx].dataset.depth || (len - idx) * depth};	
		console.log( images[idx].parallax );	
	}
			
	var transforms = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];	
	var transformProperty = getSupportedPropertyName(transforms);
	
	window.addEventListener("mousemove", moveHandler, false);
	
	animationLoop();
	
	function moveHandler(e){
		 
		 if(lastX){
		 	var deltaX = lastX - e.screenX;
		 	var deltaY = lastY - e.screenY;
		 	
		 	for (var idx = 0, len = images.length; idx < len; idx++) {
				images[idx].parallax.x += deltaX / images[idx].parallax.depth;
				images[idx].parallax.y += deltaY / images[idx].parallax.depth;				
			}
		 		
		 	isMoving = true;
		 }

	 	lastX = e.screenX;
	 	lastY = e.screenY;
	 }
	 	 
	 function animationLoop(){
	 	if(isMoving){
	 		for (var idx = 0, len = images.length; idx < len; idx++) {
	 			images[idx].style[transformProperty] = "translate3d(" + images[idx].parallax.x + "px" + ", " + images[idx].parallax.y + "px, 0)";	
	 		}	 			
	 		isMoving = false;
	 	}

	 	requestAnimationFrame(animationLoop);
	 }
	 
	/*
	 * Vendor prefix management
	 */
	function getSupportedPropertyName(properties) {
	    for (var i = 0; i < properties.length; i++) {
	        if (typeof document.body.style[properties[i]] != "undefined") {
	            return properties[i];
	        }
	    }
	    return null;
	}

})( "parallax-layers", 20);
