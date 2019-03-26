$(function () {

    let finalPrice = 0;
    
    $('#productAdd').click(function (e) {
        e.preventDefault();

        let productName = $('#productName').val();
        let quantity = $('#quantity').val();
        let unitPrice = $('#price').val();
        let totalPrice = quantity * unitPrice;

        let item = '<li class="list-group-item d-flex justify-content-between lh-condensed">';
        item += '<div>';
        item += '<h6 class="my-0">' + productName + '</h6>';
        item += '<small class="text-muted mt-3">Quantity : ' + quantity + '</small>';
        item += '<small class="text-muted ml-3">Unit Price : ' + unitPrice + '</small>';
        item += '</div>';
        item += '<span class="ml-1">' + totalPrice + '</span>';
        item += '<span>'
        item += '<button type="button" class="close">';
        item += '<span>&times;</span>';
        item += '</button>';
        item += '</span>'
        item += '</li>';
       
        $('#list').append(item); 

        $('#itemsInCart').text($('#list li').length.toString());

        finalPrice += totalPrice;
        $('#finalPrice').text(finalPrice.toString());

    });

   $('body').on('click', '.close', function () {
       $(this).closest('li').remove();
       $('#itemsInCart').text($('#list li').length.toString());
       let totalPrice = parseInt($(this).parent().prev().html()); 
       console.log(totalPrice);
       finalPrice -= totalPrice
       $('#finalPrice').text(finalPrice.toString());
   });

   $('#list').change(function (e) { 
      alert("jeuu");
       
   });
});



