


	$(".tilted").click(function() {
    $(".springs").hide();
    $(".tilted").hide();
    $(".park").hide();
    $(".story").hide();
    $(".chest").show();
    $(".guns").hide();
    $(".died").hide();
    $(".victory").hide();
    });

    $(".springs").click(function() {
    $(".springs").hide();
    $(".tilted").hide();
    $(".park").hide();
    $(".story").hide();
    $(".chest").show();
    $(".guns").hide();  
    $(".died").hide();
    $(".victory").hide();
    });

	$(".park").click(function() {
    $(".springs").hide();
    $(".tilted").hide();
    $(".park").hide();
    $(".story").hide();
    $(".chest").show();
    $(".guns").hide();    
    $(".died").hide();
    $(".victory").hide();
    });



	$(".chest").dblclick(function() {
        $(".springs").hide();
        $(".tilted").hide();
        $(".park").hide();
        $(".story").hide();
        $(".guns").show(); 
        $(".died").hide();
        $(".victory").hide();
});
       
    

	$(".pistol").dblclick(function() {
    $(".springs").hide();
    $(".tilted").hide();
    $(".park").hide();
    $("#story").hide();
    $(".chest").hide();
    $(".guns").hide();
    $(".died").show();
    $(".victory").hide();
    });

	$(".pump").dblclick(function() {
    $(".springs").hide();
    $(".tilted").hide();
    $(".park").hide();
    $("#story").hide();
    $(".chest").hide();
    $(".guns").hide();
    $(".died").hide();
    $(".victory").show();
    });
$(".restart").click(function() {
    $(".springs").show();
    $(".tilted").show();
    $(".park").show();
    $("#story").show();
    $(".chest").hide();
    $(".guns").hide();
    $(".died").hide();
    $(".victory").hide();
    });



