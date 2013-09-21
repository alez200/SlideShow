$(function(){
	init();
	var timer = null;	
	$(window).bind('resize', function() {  
		if (timer) clearTimeout(timer);  
		timer = setTimeout(init, 100);  
	});
	$('.controler').click(function() {
		alert ("attiva animazione");
	});
});

/*SETTAGGIO DELLA GRAFICA DEL CAROUSEL*/
function init() {
	var width_finestra=$(window).width();
	alert (width_finestra);
	var width_img=$(".detail").width();
	var width_visore=$(".content-visore").width();
	var width_box_button=$(".vivi-santena").width();
	var width_content_img=($(".detail").length*width_img)+width_box_button;
	var marginFirstElement=((width_img-((width_finestra-width_visore)/2))*-1);
	$(".content-copertina").css( "width",width_content_img+"px");	
	if (marginFirstElement < 0) {
		var marginFirstElement=marginFirstElement+"px";
	}
	else {
		var marginFirstElement=0;
	}
	$(".detail").each(function (i,el) {
		var id = el.id; 
		var indice=i;
		if (i == 0) {
			$(this).css( "margin-left",marginFirstElement);
		}	
		if (i == 1) {
			$(this).children("div").css( "display","block");
			if ($(".controler")) {alert('pippo')};
			comandi($(this).children("div"));
		}	
		if (i == 2) {
			$(this).css( "margin-left",width_box_button+"px");
		}		
	});
};


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
			


