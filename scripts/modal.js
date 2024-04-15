$(document).ready(function(){
    $('.feedback_button').click(function(event){
        $('.feedback_popup').toggleClass('open');
    });
    
    $('.blanc_field, .fa-xmark').click(function(event){
        $('.feedback_popup').toggleClass('open');
    });

});


