$(document).ready(function(){
    
    
    $('.cta').on("click", function(){
        console.log("I am clicked!");
        $.ajax({
            url: "/create",
            type : "get",
            success : function() {
                location.href='/create';
            }
        });
    });
});
