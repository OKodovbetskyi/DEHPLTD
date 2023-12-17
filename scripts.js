const messageinfo = {};
$(window).on("scroll", function () {
  var windowHeight = $(window).height();
  var scrollHeight = $(window).scrollTop();
  var aboutSection = $(".about");
  var aboutSectionOffset = aboutSection.offset().top;

  if (scrollHeight + windowHeight > aboutSectionOffset) {
    aboutSection.find(".fade-in").addClass("show");
  }
});
const sendEmail = (data) => {
  axios
    .post("https://softwarehub.uk/emailservice/contact-me", data)
    .then((response) => {
      $(".feedback").addClass("show");
      $("#name").val("");
      $("#contactdetail").val("");
      $("#message").val("");
    })
    .catch((error) => false);
};
$("form").on("submit", async (e) => {
  e.preventDefault();
  var name = $("#name").val();
  var contactdetail = $("#contactdetail").val();
  var message = $("#message").val();
  var isChecked = $("#consent").prop("checked");
  messageinfo.name = name;
  messageinfo.email = contactdetail;
  messageinfo.text =
    "Someone contacted you from DEHPUK said: " + `"${message}"`;
  messageinfo.receiverEmail = "dmytro@dehp.uk";
  sendEmail(messageinfo);
});

$(() => {
  const logo = $("#main-logo");
  const targetSection = $("#company-name");
  if ($(window).width() <= 767) {
    $(window).scroll(() => {
      const scrollPosition = $(window).scrollTop();
      const targetOffset = targetSection.offset().top;
      if (scrollPosition >= targetOffset) {
        logo.fadeOut(300);
      } else {
        logo.fadeIn(300);
      }
    });
  }
});
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const video = card.querySelector("video");
    if (video) {
      video.play();
    }
  });

  card.addEventListener("mouseleave", () => {
    const video = card.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});
