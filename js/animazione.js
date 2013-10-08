$(function(){
	tempo=1;
	init();
	var timer = null;	
	$(window).bind('resize', function() {  
		if (timer) clearTimeout(timer);  
		timer = setTimeout(init, 100);  
	});	
});


/*SETTAGGIO DELLA GRAFICA DEL CAROUSEL*/
function init() {
	width_finestra=$(window).width();
	width_img=$(".detail").width();
	width_visore=$(".content-visore").width();
	width_box_button=$(".vivi-santena").width();
	width_content_img=($(".detail").length*width_img)+width_box_button;
	margin=(width_finestra-width_visore)/2;
	marginFirst=((width_img-margin)*-1);
	marginPreFirst=marginFirst-width_img;
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
	if (tempo==1) {
		timeout = setTimeout('animazione_on();', 5000, function(){clearTimeout(timeout);});
		
	}	
};

function animazione_on() {
	$(".testo").fadeOut( "fast",function(){$(".controler").remove()});
	var details = $('.detail');
    var margin_left=(width_img*-1)+"px";
	$(details[2]).animate({"margin-left":0},10 ,function(){
		$(details[0]).animate({"margin-left":margin_left},500);
		$(details[1]).animate({"margin-left":marginFirstElement},1500,function(){
			$('.content-copertina .detail:first').css("margin-left",0).appendTo('.content-copertina');
			init();
		});
	});
};

function animazione_back() {
	$(".testo").fadeOut( "slow",function(){$(".controler").remove()});
    var margin_left=(width_img*-1)+"px";
	$('.content-copertina .detail:last-child').css("margin-left",marginPreFirst+"px").prependTo('.content-copertina');
	var details = $('.detail');
	$(details[0]).animate({"margin-left":marginFirstElement},1500);
    $(details[1]).animate({"margin-left":0},1000, function(){
		$(details[2]).animate({"margin-left":width_box_button+"px"},1000);
		init();
	});
};

function comandi(el) {
	$("<p class='controler'><span class='auto'> > </span><span class='on'>Avanti</span></p>").appendTo(el);
	
	$('span.on').click(function() {
		animazione_on();
	});
	$('span.back').click(function() {
		animazione_back();
	});
	$('span.auto').click(function() {
		//animazione_auto();
		alert ('pauso');
		tempo=0;
		clearTimeout(timeout);
	});	
	$('span.pausa').click(function() {
		//animazione_auto();
		alert ('Automatizzo');
	});	
}
 


