$(function() {
	smoothScroll(300);
	clientStuff();
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function clientStuff() {

  // $('.testimony-logo, .testimony-button').click(function() {
  //   var $this = $(this),
  //       position = $this.parent().children().index($this);

  //   $('.testimony').removeClass('active-testimony').eq(position).addClass('active-testimony');
  //   // $('.testimony-logo').removeClass('active-testimony').eq(position).addClass('active-testimony');
  //   // $('.testimony-button').removeClass('active-testimony').eq(position).addClass('active-testimony');
  // });

  $('.testimony').first().addClass('active-testimony')


  $('.testimonial-control-next, .testimonial-control-prev').click(function() {
		
    var $this = $(this),
        curActivetestimony = $('.testimonials').find('.active-testimony'),
        position = $('.testimonials').children().index(curActivetestimony),
        testimonyNum = $('.testimony').length;

      if($this.hasClass('testimonial-control-next'))
	  {

        if(position < testimonyNum -1)
		{
          $('.active-testimony').removeClass('active-testimony').next().addClass('active-testimony');
        } 
		else 
		{
          $('.testimony').removeClass('active-testimony').first().addClass('active-testimony');
        //   $('.testimony-logo').removeClass('active-testimony').first().addClass('active-testimony');
        //   $('.testimony-button').removeClass('active-testimony').first().addClass('active-testimony');
        }

      } 
	  else
	  {

        if (position === 0)
		{
          $('.testimony').removeClass('active-testimony').last().addClass('active-testimony');
        //   $('.testimony-logo').removeClass('active-testimony').last().addClass('active-testimony');
        //   $('.testimony-button').removeClass('active-testimony').last().addClass('active-testimony');
		} 
		else 
		{
          $('.active-testimony').removeClass('active-testimony').prev().addClass('active-testimony');
        }

      }

  });

  $('.project').first().addClass('active-project')

  $('.project-control-next, .project-control-prev').click(function() {
		
    var $this = $(this),
        curActiveproject = $('.projects').find('.active-project'),
        position = $('.projects').children().index(curActiveproject),
        projectNum = $('.project').length;

      if($this.hasClass('project-control-next'))
	  {

        if(position < projectNum -1)
		{
          $('.active-project').removeClass('active-project').next().addClass('active-project');
        } 
		else 
		{
          $('.project').removeClass('active-project').first().addClass('active-project');
        //   $('.project-logo').removeClass('active-project').first().addClass('active-project');
        //   $('.project-button').removeClass('active-project').first().addClass('active-project');
        }

      } 
	  else
	  {

        if (position === 0)
		{
          $('.project').removeClass('active-project').last().addClass('active-project');
        //   $('.project-logo').removeClass('active-project').last().addClass('active-project');
        //   $('.project-button').removeClass('active-project').last().addClass('active-project');
		} 
		else 
		{
          $('.active-project').removeClass('active-project').prev().addClass('active-project');
        }

      }

  });

}