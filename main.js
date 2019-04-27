$(document).ready(function(){
  $("#hide, .next").click(function(){
    $("#firstTopMainBlock").hide();
    $("#hidfirstTopMainBlock").show();
  });
});

$(document).ready(function(){
  $("#hide2, .previus").click(function(){
    $("#hidfirstTopMainBlock").hide();
    $("#firstTopMainBlock").show();
  });
});


function nextStep(){
    document.getElementById('firsthid').style.display='none';
    document.getElementById('secondhid').style.display='inline';
}
