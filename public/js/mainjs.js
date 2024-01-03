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

    $('.btnReadMore').on("click",function(){
        $.ajax({
            url: "/read-more",
            type: "get",
            success: function() {
                location.href='/read-more';
            }
        });
    })

    
    
});
