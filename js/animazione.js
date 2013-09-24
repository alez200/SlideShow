$(function(){
	init();
	var timer = null;	
	$(window).bind('resize', function() {  
		if (timer) clearTimeout(timer);  
		timer = setTimeout(init, 100);  
	});
	$('.controler').click(function() {
		animazione();
	});
});

/*SETTAGGIO DELLA GRAFICA DEL CAROUSEL*/
function init() {
	width_finestra=$(window).width();
	width_img=$(".detail").width();
	width_visore=$(".content-visore").width();
	width_box_button=$(".vivi-santena").width();
	width_content_img=($(".detail").length*width_img)+width_box_button;
	marginFirst=((width_img-((width_finestra-width_visore)/2))*-1);
	$(".content-copertina").css( "width",width_content_img+"px");	
	if (marginFirst < 0) {
		var marginFirstElement=marginFirst+"px";
	}
	else {
		var marginFirstElement=0;
	}
	$(".detail").each(function (i,el) {
		id = el.id; 
		indice=i;
		if (i == 0) {
			$(this).css( "margin-left",marginFirstElement);
		}	
		if (i == 1) {
			$(this).children("div").css( "display","block");
			
			if ($(".controler").length == 0) {
				comandi($(this).children("div"));
			}	
		}	
		if (i == 2) {
			$(this).css( "margin-left",width_box_button+"px");
		}		
	});
};

function animazione() {
	$(".testo").fadeOut( "slow");
	$(".detail").each(function (i,el) {
		if (i == 0) {
		    var margin_left=(marginFirst+(width_img*-1))+"px";
			alert (margin_left);
			$(this).animate({"margin-left":margin_left},1500);
		}	
	});
}

function comandi(el) {
	$("<p class='controler'>avanti</p>").appendTo(el);
}
 


$(function(){
	sezione=0;
	$('.freccia').click(function(){
	    if (this.id=='freccia_d') {
			margin_value='-16.7%'
			sezione=sezione+1;
		}
        else {
			margin_value='0'
		}		
		$('#'+sezione).animate({"margin-left": margin_value}, 1500, callback);

		if (this.id=='freccia_s') { 
			sezione=sezione-1;
			if (sezione==3){
				$(".and").fadeOut("fast");
			}
		}	
		changeArrow();
	});
});

function callback(){
	if (sezione==4) {
		$(".and").fadeIn("fast");
	}
	else {
		$(".and").hide();
	}
}

function changeArrow(){ 
	if (sezione==5){
		$('#freccia_d').hide("fade");
		$('.underscore').animate({"margin-left": '-100%'}, 1500);
	}
	else if  (sezione==4){
		$('.underscore').animate({"top": '50%'}, 1000);
		$('.underscore').animate({"left": '0'}, 1000);
	}
	else {
		$('#freccia_d').show("fade");
		$('.underscore').animate({"margin-left": '0'}, 1500);
		$('.underscore').animate({"top": '40%'}, 500);
		if  (sezione==1){
			$('#freccia_s').show("fade");
		}
		else if  (sezione==0){
			$('#freccia_s').hide("fade");
		}
	} 
};			    
			


