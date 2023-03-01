(function ($) {
    $(function () {
        // $(".jq--show-more-btn").click(function(){
        //     $(".forjqphotos").slideToggle(200)
        // });

        $('.jq--show-more-btn').click(function($e) {
            $e.preventDefault();
            $(".forjqphotos").slideToggle(200);
        });
 });
})(jQuery);