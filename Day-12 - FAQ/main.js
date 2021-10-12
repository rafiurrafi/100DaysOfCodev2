localStorage.setItem("fob", "select");

$("#fob").on("change", function () {
  var val = $(this).val();
  localStorage.setItem("fob", val);
  $("select#type>option").each(function () {
    var filter = $(this).data();
    var elem = $(this);
    if (
      filter.filter.food_or_beverage != val &&
      filter.filter.food_or_beverage != ""
    ) {
      elem.hide();
    } else if (filter.filter.food_or_beverage != "") {
      elem.show();
    } else {
      elem.show();
    }
  });
  $("li").each(function () {
    var item_filter = $(this).data();
    var item = $(this);
    if (item_filter.filter.food_or_beverage != val && val != "select") {
      item.hide();
    } else {
      item.show();
    }
  });
  $("#type").val("select");
  if (val == "select") {
    $("select#type>option").each(function () {
      $(this).show();
    });
    $("#type").val("select");
  }
});
rage == "food") {
    $('li').each(function(){
       var item = $(this);
       var data = item.data();
          if(data.filter.food_or_beverage == "food") { 
            item.show();
          }
    });
 }
 if(storage == "beverage") {
    $('li').each(function(){ 
       var item = $(this);
       var data = item.data();
          if(data.filter.food_or_beverage == "beverage") { 
            item.show();
          }
    });
 }

$('li:visible').each(function () {
  console.log('val');
  var item_filter = $(this).data();
  var item = $(this);
  if(val == "fruit" && item_filter.filter.type != "fruit") {
    item.hide();
  }
   if(val == "vegetable" && item_filter.filter.type != "vegetable") {
    item.hide();
  }
   if(val == "juice" && item_filter.filter.type != "juice") {
    item.hide();
  }
   if(val == "nojuice" && item_filter.filter.type != "nojuice") {
    item.hide();
  }
 });
}); 
  
  