localStorage.setItem('fob', 'select');

$('#fob').on('change', function() {
   var val = $(this).val();
   localStorage.setItem('fob', val);
   $('select#type>option').each(function () {
     var filter = $(this).data();
     var elem = $(this);
     if((filter.filter.food_or_beverage != val) && filter.filter.food_or_beverage !="")  {
       elem.hide();
     } else if(filter.filter.food_or_beverage !="") {
       elem.show();
     } else {
       elem.show();
     }
   });