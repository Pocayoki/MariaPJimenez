
$(document).ready(function(){
// Animation for Building A
	var clicked = true; 
    $("#A").click(function(){
      if(clicked == true){
      	
        $("#A").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1',
        }, 'slow'); 
                
        $("#1").hide();

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false; 
      }

      else{
        $("#A").animate({
        	left: '-=512px',
        	top: '-=245px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
            }, 'slow');
                
      
        $("#1").show();

    $('html, body').animate({
    scrollTop: 0}, 800);    
        clicked = true;
      }  
      
    });

// Animation for Building B

    var clicked = true;
    $("#B").click(function(){
      if(clicked == true){
      	
        $("#B").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow'); 

        $("#2").hide();

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#B").animate({
        	left: '300px',
        	top: '-=245px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#2").show();

    $('html, body').animate({
    scrollTop: 0}, 800);    
        clicked = true;
      }  
      
    });

// Animation for Building C// 

	var clicked = true;
    $("#C").click(function(){
      if(clicked == true){
      	
        $("#C").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#3").hide(); 

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#C").animate({
        	left: '600px',
        	top: '-=245px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#3").show();

    $('html, body').animate({
    scrollTop: 0}, 800);    
        clicked = true;
      }   
    });

// Animation for Building D// 

	var clicked = true;
    $("#D").click(function(){
      if(clicked == true){
      	
        $("#D").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#4").hide();      

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#D").animate({
        	left: '900px',
        	top: '-=245px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#4").show();

    $('html, body').animate({
    scrollTop: 0}, 800);    
        clicked = true;
      }    
    });

    // Animation for Building E// 

	var clicked = true;
    $("#E").click(function(){
      if(clicked == true){
      	
        $("#E").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#5").hide();       

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#E").animate({
        	left: '1200px',
        	top: '-=245px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#5").show();

    $('html, body').animate({
    scrollTop: 0}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building F// 

	var clicked = true;
    $("#F").click(function(){
      if(clicked == true){
      	
        $("#F").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#6").hide();       

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#F").animate({
        	left: '0px',
        	top: '215px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#6").show();

    $('html, body').animate({
    scrollTop: 215}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building G// 

	var clicked = true;
    $("#G").click(function(){
      if(clicked == true){
      	
        $("#G").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#7").hide();       

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#G").animate({
        	left: '400px',
        	top: '215px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#7").show();

    $('html, body').animate({
    scrollTop: 215}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building H// 

	var clicked = true;
    $("#H").click(function(){
      if(clicked == true){
      	
        $("#H").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#8").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#H").animate({
        	left: '800px',
        	top: '215px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#8").show();

    $('html, body').animate({
    scrollTop: 215}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building I// 

	var clicked = true;
    $("#I").click(function(){
      if(clicked == true){
      	
        $("#I").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#9").hide();      

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#I").animate({
        	left: '1200px',
        	top: '215px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#9").show();

    $('html, body').animate({
    scrollTop: 215}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building J// 

	var clicked = true;
    $("#J").click(function(){
      if(clicked == true){
      	
        $("#J").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#10").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#J").animate({
        	left: '0px',
        	top: '430px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#10").show();

    $('html, body').animate({
    scrollTop: 430}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building K// 

	var clicked = true;
    $("#K").click(function(){
      if(clicked == true){
      	
        $("#K").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#11").hide();      

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#K").animate({
        	left: '400px',
        	top: '430px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#11").show();

    $('html, body').animate({
    scrollTop: 430}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building L// 

	var clicked = true;
    $("#L").click(function(){
      if(clicked == true){
      	
        $("#L").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#12").hide();      

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#L").animate({
        	left: '800px',
        	top: '430px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#12").show();

    $('html, body').animate({
    scrollTop: 430}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building M// 

	var clicked = true;
    $("#M").click(function(){
      if(clicked == true){
      	
        $("#M").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#13").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#M").animate({
        	left: '1200px',
        	top: '430px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#13").show();

    $('html, body').animate({
    scrollTop: 430}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building N// 

	var clicked = true;
    $("#N").click(function(){
      if(clicked == true){
      	
        $("#N").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#14").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#N").animate({
        	left: '0px',
        	top: '645px',
        	width: '200px',
            height: '200px',
            zIndex: '1',
        }, 'slow');

        $("#14").show();

    $('html, body').animate({
    scrollTop: 645}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building O// 

	var clicked = true;
    $("#O").click(function(){
      if(clicked == true){
      	
        $("#O").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#15").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#O").animate({
        	left: '400px',
        	top: '645px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#15").show();

    $('html, body').animate({
    scrollTop: 645}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building P// 

	var clicked = true;
    $("#P").click(function(){
      if(clicked == true){
      	
        $("#P").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#16").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#P").animate({
        	left: '800px',
        	top: '645px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#16").show();

    $('html, body').animate({
    scrollTop: 645}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building Q// 

	var clicked = true;
    $("#Q").click(function(){
      if(clicked == true){
      	
        $("#Q").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#17").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#Q").animate({
        	left: '1200px',
        	top: '645px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#17").show();

    $('html, body').animate({
    scrollTop: 645}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building R// 

	var clicked = true;
    $("#R").click(function(){
      if(clicked == true){
      	
        $("#R").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#18").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#R").animate({
        	left: '0px',
        	top: '860px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#18").show();

    $('html, body').animate({
    scrollTop: 860}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building S// 

	var clicked = true;
    $("#S").click(function(){
      if(clicked == true){
      	
        $("#S").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#19").hide();      

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#S").animate({
        	left: '400px',
        	top: '860px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#19").show();

    $('html, body').animate({
    scrollTop: 860}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building T// 

	var clicked = true;
    $("#T").click(function(){
      if(clicked == true){
      	
        $("#T").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#20").hide();      

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#T").animate({
        	left: '800px',
        	top: '860px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#20").show();

    $('html, body').animate({
    scrollTop: 860}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building U// 

	var clicked = true;
    $("#U").click(function(){
      if(clicked == true){
      	
        $("#U").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#21").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#U").animate({
        	left: '1200px',
        	top: '860px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#21").show();

    $('html, body').animate({
    scrollTop: 860}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building V// 

	var clicked = true;
    $("#V").click(function(){
      if(clicked == true){
      	
        $("#V").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#22").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#V").animate({
        	left: '0px',
        	top: '1075px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#22").show();

    $('html, body').animate({
    scrollTop: 1075}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building W// 

	var clicked = true;
    $("#W").click(function(){
      if(clicked == true){
      	
        $("#W").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#23").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#W").animate({
        	left: '300px',
        	top: '1075px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#23").show();

    $('html, body').animate({
    scrollTop: 1075}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building X// 

	var clicked = true;
    $("#X").click(function(){
      if(clicked == true){
      	
        $("#X").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#24").hide();      

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#X").animate({
        	left: '600px',
        	top: '1075px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#24").show();

    $('html, body').animate({
    scrollTop: 1075}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building Y// 

	var clicked = true;
    $("#Y").click(function(){
      if(clicked == true){
      	
        $("#Y").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#25").hide();     

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#Y").animate({
        	left: '900px',
        	top: '1075px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#25").show();

    $('html, body').animate({
    scrollTop: 1075}, 800);    
        clicked = true;
      }  
      
    });

    // Animation for Building Z// 

	var clicked = true;
    $("#Z").click(function(){
      if(clicked == true){
      	
        $("#Z").animate({
        	left: '512px',
        	top: '245px',
        	width: '400px',
            height: '700px',
            zIndex: '100',
            opacity: '1'}, 'slow');

        $("#26").hide();        

		$('html, body').animate({
    	scrollTop: 480}, 800);
        clicked = false;
      }

      else{
        $("#Z").animate({
        	left: '1200px',
        	top: '1075px',
        	width: '200px',
            height: '200px',
            zIndex: '0',
        }, 'slow');

        $("#26").show();

    $('html, body').animate({
    scrollTop: 1075}, 800);    
        clicked = true;
      }  
      
    });

    // event.preventdefault()
});
    
    	

    	
    
