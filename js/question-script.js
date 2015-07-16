$(document).ready(function(){
   
   var score = 0;
  
  $('input:radio[name="answer1"]').change(function() {
   if($(this).val() == 'right') { 
     score += 1
     console.log(score);     
   } 
  }); 
  
    $('input:radio[name="answer2"]').change(function() {
   if($(this).val() == 'right') { 
     score += 1
     console.log(score);     
   } 
  }); 
  
    $('input:radio[name="answer3"]').change(function() {
   if($(this).val() == 'right') { 
     score += 1
     console.log(score);     
   } 
  }); 
  
    $('input:radio[name="answer4"]').change(function() {
   if($(this).val() == 'right') { 
     score += 1
     console.log(score);     
   } 
  }); 
  
    $('input:radio[name="answer5"]').change(function() {
   if($(this).val() == 'right') { 
     score += 1
     console.log(score);     
   } 
  }); 
  
  
  $(".submit").click(function(){
    console.log('You got ' + score + ' out of five questions right!');
    $('.end').html('You got ' + score + ' out of five questions right!');
 
    if ('score' > 3) {
      alert ('eqbrgqerglbjhgbjgr');
    } else {
//       play a sad gif
    }



});
		
	});
  

    
     
  
  

  
