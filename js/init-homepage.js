$(document).ready(function () {
	$('..details .details-box').ellipsis();

	$('.more-links').each(function () {
		$(this).parent().children('ul').children('li:gt(9)').css('display', 'none');

		$(this).click(function () {
			if ($(this).hasClass('show-more')) { $(this).removeClass('show-more').addClass('show-less').text('Show Less').parent().children('ul').children('li:gt(9)').css('display', ''); }
			else { $(this).removeClass('show-less').addClass('show-more').text('Show More').parent().children('ul').children('li:gt(9)').css('display', 'none'); }
		});
	});

	$('.search ul li a').click(function () {
		$('#searchTabs li').removeClass('current');
		$(this).parent().addClass('current');

		$('#searchDiv').text($(this).attr('DivText'));
		$('#searchH1').text($(this).attr('H1Text'));

		$('.search-hiddenmode').children('input[type=hidden]').val($('#searchTabs li').index($(this).parent()));

		$('.search-form typeable').attr('ServiceUrl', $(this).attr('TddURL'));

		if ($(this).parent().attr('id') == 'tab-buildings') { resetTypeableWithPrompt('Enter Building Name, City, State or Zip'); }
		else { resetTypeableWithPrompt('Enter City, State or Zip'); }


		$(this).blur();
	});

	$('#tab-for-sale').children('a').click();
});

function resetTypeableWithPrompt(val) {
	input = $('.USCXTextBox_InputBox .typeable');
	input.attr('PromptText', val);
	input.val(val);
	$('.USCXTextBox_InputBox input[type=hidden]').val('');
}


$(window).bind("load", function () {
	var preload = new Array();
	$(".slider .not-loaded").each(function () {
		s = $(this).attr("loadSrc");
		preload.push(s)
	});
	
	var img = document.createElement('img');
	$(img).bind('load', function () {
		if (this.src != '') {

			slide = $('.slider .not-loaded').first()
			slide.attr('src', this.src).removeAttr('loadSrc').removeClass('not-loaded');
			if (slide.hasClass('first-slide')) { slide.css('display', ''); }
		}

		if (preload[0]) {
			this.src = preload.shift();
		}
		else { startSlideshow(); }
	}).trigger('load');
});

function startSlideshow() {
	$('.slider').cycle({
		timeout: 5000,
		pager: '.slider-menu ul',
		next: '#next',
		prev: '#prev',
		slideExpr: 'img',
		pagerAnchorBuilder: function (idx, slide) {
			return '<li><a href="#"></a></li>';
		}
	});
}