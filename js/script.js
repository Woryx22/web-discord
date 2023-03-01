(function ($) {
    $(function () {
        // $(".jq--show-more-btn").click(function(){
        //     $(".forjqphotos").slideToggle(200)
        // });

        $('.jq--show-more-btn').click(function ($e) {
            $e.preventDefault();
            $(".forjqphotos").slideToggle(200);
        });
        
        // $(".jq--show-more-btn").click(function(){
        //     if($(".jq--show-more-btn").text("Zobrazit všechny výhody"))    //z elementu s class jq--image-hamburger vytáhne src
        //     {
        //         $($(".jq--show-more-btn").text("Zobrazit méně"));    //src se zm2n9 na crossMenu.png
        //     }
        //     else 
        //     {
        //         $($(".jq--show-more-btn").text("Zobrazit všechny výhody"));
        //     }
        // });


        $(".jq--show-more-btn").click(function(){
            $(".jq--show-more-btn").text() === 'Zobrazit všechny výhody' ? $(this).text('Zobrazit méně') : $(this).text('Zobrazit všechny výhody');
        });


        
    });
})(jQuery);