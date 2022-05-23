$( document ).ready(function(){

    var bl_menu_open = false;

    $("header nav button").on("click", function(){
        if (!bl_menu_open){
            $("header nav ul").css("top","0px");
            $("header form").css("bottom","-120px");
            bl_menu_open = true;
        } else {
            $("header nav ul").css("top","-120px");
            $("header form").css("bottom","25%");
            bl_menu_open = false;
        }
    });

    $(document).scroll(function(){
        if (window.scrollY > 20){
            $("header nav").addClass("fix_menu");
            $("header .content").css("margin-top", "225px");
        } else {
            $("header nav").removeClass("fix_menu");
            $("header .content").css("margin-top", "95px");
        }
    });
});