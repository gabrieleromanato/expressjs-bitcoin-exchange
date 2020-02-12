"use strict";

$(function() {
    $( "#change-form" ).on( "submit", function( e ) {
        e.preventDefault();
        $.post( "/value", { currency: $( "#currency" ).val() }, function( response ) {
            if( response.error ) {
                $( "#response" ).text( response.error );
            } else if( response.price ) {
                $( "#response" ).text( response.price );
            }
        });
    });
});