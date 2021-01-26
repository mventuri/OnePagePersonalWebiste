$("#social").hide();
$(".img-fluid").hide();

$.ajax({
  type: "GET",
  url:
    "https://www.marcoventuritest.it/wooTest/wp-json/wp/v2/pages/1691?password=vlCzQGW2Ln",
  dataType: "json",
  success: function(respJson) {
    var article = respJson.content.rendered;
    var title = respJson.title.rendered;
    $(".spinner-grow").remove();
    $("#title").append(title);
    $(".lead").append(article);
    $("#social").show();
    $(".img-fluid").show();
  },
  error: function() {
    $(".lead").append(
      "<div class='alert alert-danger' role='alert'>Ops! Something went wrong. Please try again.</div>"
    );
    $(".spinner-grow").remove();
  }
});
