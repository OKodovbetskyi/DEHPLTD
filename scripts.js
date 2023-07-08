$(window).on('scroll', function() {
    var windowHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    var aboutSection = $('.about');
    var aboutSectionOffset = aboutSection.offset().top;
  
    if (scrollHeight + windowHeight > aboutSectionOffset) {
      aboutSection.find('.fade-in').addClass('show');
    }
  });
  