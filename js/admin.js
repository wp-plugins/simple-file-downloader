/**
 * Adding custom popup event for Simple File Download link generator
 */
jQuery(document).ready( function($){ 
	$("input#insert-download-link").prop('disabled', true);
	$("#download_term_id").on("change", function(){
		var $get_term_data = {
			'action': 'get-media-location',
			'media_location': $(this).val() 
		}
		$.post( adminParam.ajaxURL, $get_term_data, function( response ) {
			if( typeof response.message != 'undefined' )
			$( "select#download_attachment_id" ).html( response.message );
			
			if( typeof response.error != 'undefined' && (response.pass == 1) )
				$("input#insert-download-link").prop('disabled', true);
			else
				$("input#insert-download-link").prop('disabled', false);
				
		}, "json");
	});
});
	
function sfd_InsertDownloadLink(){
	var media_id = jQuery("#download_attachment_id").val();
	var downloader_texts = jQuery("#downloader_texts").val();
	
	var text_attr = ( jQuery.trim(downloader_texts) != '' ) ? ' texts="'+ downloader_texts +'"' : '';
	if( media_id != null )
	window.send_to_editor("[media-downloader media_id=\"" + media_id + "\""+text_attr+"]");
}	