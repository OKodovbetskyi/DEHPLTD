const messageinfo={};
$(window).on('scroll', function() {
    var windowHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    var aboutSection = $('.about');
    var aboutSectionOffset = aboutSection.offset().top;
  
    if (scrollHeight + windowHeight > aboutSectionOffset) {
      aboutSection.find('.fade-in').addClass('show');
    }
  });
const sendEmail = (data) => {
    axios
      .post("http://softwarehub.uk:3001/contact-me",data)
      .then((response) => {
        $(".feedback").addClass("show");
        $("#name").val("");
        $("#contactdetail").val("");
        $("#message").val("");

      })
      .catch((error) => false);
  };
$('form').on('submit',async (e)=>{
  e.preventDefault();
  var name = $("#name").val();
  var contactdetail = $("#contactdetail").val();
  var message = $("#message").val();
  var isChecked = $("#consent").prop("checked");
  messageinfo.name = name;
  messageinfo.contact = contactdetail;
  messageinfo.message= message;
  messageinfo.consent = "I am happy to be contacted regarding my request"
  sendEmail(messageinfo);
})

