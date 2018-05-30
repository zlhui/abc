var menu=$('.menu');
var main=$('.main');
var left=$('.left');
var right=$('.rigth');
var riJl=right.css('left');
var head=$('header');
var foot=$('footer');
var img=$('.centent');
var cenMenu=$('.cen_menu');
var cenRig=cenMenu.css('right');
var mainHei=$(window).height();
main.css('height',mainHei);
right.css('height',mainHei);
left.css('height',right.css('height'));
img.click(function() {
	var index=$(this).index();
	cenMenu.animate({
					right:'-2.3rem'
					},
					100, function() {
					});
	if (cenRig=='0px') {
		cenMenu.eq(index-1).animate({
		right:'-2.3rem'
		},
		50, function() {
			cenRig=cenMenu.eq(index-1).css('right');
	});
	}else{
		cenMenu.eq(index-1).animate({
			right: '0px'},
			100, function() {
			cenRig=cenMenu.eq(index-1).css('right');
			
		});
	}	
});
menu.click(function() {
	if (riJl>='192px') {
		left.animate({
		left:'-12rem'},
		500, function() {
			riJl=right.css('left');
			main.css('overflow','auto');
		});
		right.animate({
			left:0},
			500, function() {
			/* stuff to do after animation is complete */
		});
		head.animate({
			left:0},
			500, function() {
			/* stuff to do after animation is complete */
		});
		foot.animate({
			left:0},
			500, function() {
			/* stuff to do after animation is complete */
		});
	}else{
		left.animate({
		left:'0rem'},
		500, function() {
			riJl=right.css('left');
			main.css('overflow','hidden');
		});
		right.animate({
			left:'12rem'},
			500, function() {
			/* stuff to do after animation is complete */
		});
		head.animate({
			left:'12rem'},
			500, function() {
			/* stuff to do after animation is complete */
		});
		foot.animate({
			left:'12rem'},
			500, function() {
			/* stuff to do after animation is complete */
		});
	}
});
  