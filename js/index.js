$(document).ready(function() {
	$('#myFullpage').fullpage({
		slidesColor: ['#0075D1', '#C2E5FF', '#FDF6E1', '#E9E9E9', '#F3F3F3', '#F9F3DC'],
		continuousVertical:'true',
		anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
		menu: '#menu',
		navigation:'true',
		loopHorizontal:'true',
		slidesNavigation:'true',
		navigationPosition:'right',
		navigationTooltips:['首页','关于我','求职意向','专业技能','作品展示','联系我'],
		paddingTop:'40px'
	});
});