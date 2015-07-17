$(document).ready(function(){
   
   var score = 0;
  
  $('input:radio[name="answer1a"]').change(function() {
   if($(this).val() == 'right') { 
     score += 1
     console.log(score);     
   } 
  }); 
  
    $('input:radio[name="answer2c"]').change(function() {
   if($(this).val() == 'right') { 
     score += 1
     console.log(score);     
   } 
  }); 
  
    $('input:radio[name="answer3d"]').change(function() {
   if($(this).val() == 'right') { 
     score += 1
     console.log(score);     
   } 
  }); 
  
    $('input:radio[name="answer4b"]').change(function() {
   if($(this).val() == 'right') { 
     score += 1
     console.log(score);     
   } 
  }); 
  
    $('input:radio[name="answer5c"]').change(function() {
   if($(this).val() == 'right') { 
     score += 1
     console.log(score);     
   } 
  }); 
  
  
  $("#submit-button").click(function(){
    console.log('You got ' + score + ' out of 5 questions right!');
    $('#submit-button').html('You got ' + score + ' out of 5 questions right!');
 
    if (score < 3) {
     
     $('.end').html("<img src='https://media1.giphy.com/media/12pwEVqUn2n5Ti/200_s.gif'");
      
    ;} else {
      
    }


     
     
//      play ('https://media1.giphy.com/media/12pwEVqUn2n5Ti/200_s.gif') 
//     } else {
// //       play a sad gif
//     }



});
		
	});




