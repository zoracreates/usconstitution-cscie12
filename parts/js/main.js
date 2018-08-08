$(document).ready(function(){
    var bodyId = $(document.body).attr("id");
    var navId = "#nav" + bodyId;
    var mainTitle = "The United States Constitution: Article ";

    // change default title
    if(bodyId == "Amendments") {
        mainTitle = "The United States Constitution: ";
    }
    document.title = mainTitle + bodyId;

    // set current page nav style
    $(navId).attr('id', 'iamhere');
}
);