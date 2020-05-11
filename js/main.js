$(document).ready(function(){

	function start(counter){
	  if(counter < 14){
	    setTimeout(function(){
	    	console.log(counter);
		    $('.step-'+counter).removeClass('show');
		    $('.step-'+(counter+1)).addClass('show');
	      	counter++;
	      	start(counter);
	    }, 1000);
	  } else {
	    $('.step-14').removeClass('show');
	    $('.step-1').addClass('show');
		start(1);
	  }
	}
	start(1);
})