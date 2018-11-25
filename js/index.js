$(document).ready(function() {
	$('#myFullpage').fullpage({
		fixedElements:'.header',
		css3:'true',
		sectionsColor: ['#0075D1', '#C2E5FF', '#FDF6E1', '#E9E9E9', '#F3F3F3', '#F9F3DC'], //背景色
		anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'], 	//锚链接
		menu: '#menu',	//导航菜单
		navigation:'true', 
		navigationPosition:'right',
		navigationTooltips:['首页','关于我','求职意向','专业技能','作品展示','联系我'],
		paddingTop:'40px'
	});
});