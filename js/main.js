'use strict';$(document).ready(function(){$('.technology-item').hover(function(){$('.technology-item').removeClass('active');$(this).addClass('active');var imageUrl=$(this).attr('data-image'),title=$(this).attr('data-title'),description=$(this).attr('data-description');$('.technology-image-wrapper').css('background-image','url('+imageUrl+')');$('.technology-details-wrapper .title').text(title);$('.technology-details-wrapper .description').text(description)});$('.product-item').hover(function(){$('.product-item').removeClass('active');$(this).addClass('active');var imageUrl=$(this).attr('data-image'),title=$(this).attr('data-title'),description=$(this).attr('data-description');$('.product-image-url').css('background-image','url('+imageUrl+')');$('.product-text .title').text(title);$('.product-text .description').text(description)})});console.log('%cWoah! We have got a hacker here.','color: red; font-size:36px; font-weight: 600;');