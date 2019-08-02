$(function(){
    var pathnameArr = location.pathname.split('/');
    switch (pathnameArr[2]) {
        case 'xxl':
            $("body").addClass('upgrade-plan');
            $('.item-cards.optgroup .row').prepend('<div class="col-lg-6"> <div class="item-wrapper disabled"> <label for="field_3_0" class="item-details"> <span class="label">Current Plan</span> <div class="item-title">Ecomey Starter</div><div class="item-price"> <div class="default-price">&nbsp;</div></div><img src="images/plan-starter.png" alt=""> <div class="item-description"> <ul> <li>Pay-as-you-go pricing</li><li>$20 per design</li><li>$10 per revision</li><li>Native source files included</li><li>No subscription or any extras</li></ul> </div></label> </div></div>');
            $(".checkout-btn .btn, .title-float").html('Upgrade to ecomey XXL');

            break;
        case 'starter':
            $("body").addClass('order-design');
            $(".title-float").html('Order A Design');
            break;
        case 'starter-revisions':
            $("body").addClass('revision-design');
            $(".title-float").html('Request A Revision');
            break;
    }
});

jQuery('.item-title:contains("1x")').closest('.item-details').prepend('<img src="https://sonjudan.github.io/ecomey/images/icons/icon-service-1.png" alt="">');
jQuery('.item-title:contains("2x")').closest('.item-details').prepend('<img src="https://sonjudan.github.io/ecomey/images/icons/icon-service-2.png" alt="">');
jQuery('.item-title:contains("3x")').closest('.item-details').prepend('<img src="https://sonjudan.github.io/ecomey/images/icons/icon-service-3.png" alt="">');
jQuery('.item-title:contains("4x")').closest('.item-details').prepend('<img src="https://sonjudan.github.io/ecomey/images/icons/icon-service-4.png" alt="">');
jQuery('.item-title:contains("5x")').closest('.item-details').prepend('<img src="https://sonjudan.github.io/ecomey/images/icons/icon-service-5.png" alt="">');
jQuery('.item-title:contains("Ecomey XXL")').next().after('<img src="https://sonjudan.github.io/ecomey/images/plan-xxl.png" alt="">');
jQuery('.item-title:contains("Ecomey XXL")').closest('.item-details').prepend('<span class="label label-primary">Upgrade</span>');

jQuery('#stripe_method + .custom-control-label .d-flex ').prepend('<div class="payment-stripe-logo"><img src="https://sonjudan.github.io/ecomey/images/logo-stripe.svg" alt=""></div>');


