/* Jquery Alert
	Thalles Mendes Valeriano 16:58 27/05/2014
 */
(function($){	
	$.Alert = function(msg,settings){		
		 var config = {
				'style': 'info', /* Padrao bootstrap */
				'tipo' : 'A', /* A = Alert,  C = Confirm */
				'OK' : 'Ok',
				'Cancelar': 'Cancelar',
				'acOK': function(div){
							return true;
						},
				'acCancelar': function() {
							return false;
						}
				
		   };
		if ( settings ){$.extend(config, settings);}
		
		var alturaTela = $(document).height();
		var larguraTela = $(window).width();
		var mensagem = msg;

		if(config.tipo == 'C'){
			var cancelar = '<a class="btn btn-'+ config.style +'" href="#" id="alert-cancel">'+ config.Cancelar +'</a></p>';								
		}else {
			var cancelar = '';
		}
		var html = '<div class="alert alert-'+ config.style +' alerta" id="alerta" align="center">' + 
					'<p>'+ mensagem +'</p>' +							  
					'<br>' +								
					'<p><a class="btn btn-'+ config.style +'" href="#" id="alert-ok">'+ config.OK +'</a> ' + cancelar + '</div>';
		$('body').append(html);
		var left = ($(window).width() /2) - ( $("#alerta").width() / 2 );
		var top = ($(window).height() / 2) - ( $("#alerta").height() / 2 );
							
		$("#alerta").css({'top':top,'left':left});
		$("#alerta").show();	
		$("#alert-ok").click(function(){
			config.acOK();	
			$('#alerta').hide();
			$('#alerta').remove();			
		});
		$('#alert-cancel').click(function() {
			config.acCancelar();
			$('#alerta').hide();
			$('#alerta').remove();			
		});	
	};
})(jQuery);

