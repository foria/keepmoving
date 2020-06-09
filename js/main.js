$(document).ready(function(){

	function manWalking(counter){
	  if(counter < 12){
	    setTimeout(function(){
	    	//console.log(counter);
		    $('.step-'+counter).removeClass('show');
		    $('.step-'+(counter+1)).addClass('show');
	      	counter++;
	      	manWalking(counter);
	    }, 150);
	  } else {
	    $('.step-12').removeClass('show');
	    $('.step-1').addClass('show');
		manWalking(1);
	  }
	}
	manWalking(1);

	function dj(){
	   setTimeout(function(){
		    $('.service-dj').addClass('animation');
	    }, 1500);
	   setTimeout(function(){
		    $('.service-dj').removeClass('animation');
			dj();
	    }, 2000);
	}
	dj();

	function mix(){
	   setTimeout(function(){
		    $('.service-mix').addClass('animation');
	    }, 1000);
	   setTimeout(function(){
		    $('.service-mix').removeClass('animation');
			mix();
	    }, 2000);
	}
	mix();

	function events(){
	   setTimeout(function(){
		    $('.service-events').addClass('animation');
	    }, 1500);
	   setTimeout(function(){
		    $('.service-events').removeClass('animation');
			events();
	    }, 2000);
	}
	events();

	function comm(){
	   setTimeout(function(){
		    $('.service-comm').addClass('animation');
	    }, 1000);
	   setTimeout(function(){
		    $('.service-comm').removeClass('animation');
			comm();
	    }, 1500);
	}
	comm();
})