$(function(){
    $("button").click(function(e){
        e.preventDefault ();
        const name =$('#input-item').val();
      
        if (name !==''){
            $('#items').append('<l1>${name}<span class = "label pending">pending</span><l1>');
            $('#input-item').focus ();
        }
    })   
    
    $('#input-item').focus(function(){
        $(this).val ('');
    });


    
})