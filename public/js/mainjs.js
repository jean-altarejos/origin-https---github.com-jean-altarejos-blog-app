$('#mainclass').on("click", function(){
    $.ajax({
        url: "/create",
        success: function (result){
            $('div').html("success")
        }
    });
});