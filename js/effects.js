var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  
  myFunction()

  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("backBtn").style.top = "55px";
        document.getElementById("mobile_backBtn").style.top = "50px";
    } else {
        document.getElementById("backBtn").style.top = "-100px";
        document.getElementById("mobile_backBtn").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
};

function myFunction() {
    var currentScrollPos = window.pageYOffset;
    var winScroll = document.body.scrollTop ||
    document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("bar").style.width = scrolled + "%";
}
