$(document).ready(function(){

	function start(counter){
	  if(counter < 12){
	    setTimeout(function(){
	    	console.log(counter);
		    $('.step-'+counter).removeClass('show');
		    $('.step-'+(counter+1)).addClass('show');
	      	counter++;
	      	start(counter);
	    }, 150);
	  } else {
	    $('.step-12').removeClass('show');
	    $('.step-1').addClass('show');
		start(1);
	  }
	}
	start(1);
})