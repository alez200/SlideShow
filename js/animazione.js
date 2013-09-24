$(function(){
	init();
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
		marginFirstElement=marginFirst+"px";
	}
	else {
		marginFirstElement=0;
	}
	$(".detail").each(function (i,el) {
		id = el.id; 
		indice=i;
		if (i == 0) {
			$(this).css( "margin-left",marginFirstElement);
		}	
		if (i == 1) {
			$(this).css( "margin-left",0);
			$(this).children("div").css( "display","block");
			if ($(".controler").length == 0) {
				comandi($(this).children("div"));
			}	
		}	
		if (i == 2) {
			$(this).css( "margin-left",width_box_button+"px");
		}		
	});
	
	var timer = null;	
	$(window).bind('resize', function() {  
		if (timer) clearTimeout(timer);  
		timer = setTimeout(init, 100);  
	});

	$('.controler').click(function() {
		animazione();
	});
};

function animazione() {
	$(".testo").fadeOut( "slow",function(){$(".controler").remove()});
	var details = $('.detail');
    var margin_left=(width_img*-1)+"px";
	$(details[2]).animate({"margin-left":0},1500 ,function(){
		$(details[0]).animate({"margin-left":margin_left},500);
		$(details[1]).animate({"margin-left":marginFirstElement},1500,function(){
			$('.content-copertina .detail:first').css("margin-left",0).appendTo('.content-copertina');
			init();
		});
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
			


