

$(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
        // cumploRequisitos();
        // requisitos();
        casaodepartamento();
        perfil();
        tipocobertura();
        $('input[name="cobertura"]').click(function () {
    	$(this).tab('show');

    	});

    	pago();
    	vermas();

    	$("#send-form").submit(function(e){
           e.preventDefault();
  		});
  		// inputtext();
  		email();
  		tel();
  		coberturas();
  		selectTable();
  		// initializeSliders();
    	activarmandato();
		mandatoActivado();
		

		$('.datepicker-input').datepicker({
			format: "dd/mm/yyyy",
			language: "es",
			orientation: "bottom auto",
			autoclose: true,
			todayHighlight: true
		  });
});

function cumploRequisitos(){
	var inputs = $('input[type=radio],select, input[type=tel]');
	$('input:radio[name="tipo-mascota"]').change(function(){
		if($(this).val() == 'GatoX'){
			$('.bs-example-modal-sm').modal('show')
			inputs.attr('disabled','disabled');
			$('#Perro').removeAttr('disabled');
		}else{
			inputs.removeAttr('disabled');
		}
	});
}



function requisitos(){

	var form = $('.form-control');

	form.on('focus', function(){
		var input =  $('input[name=tipo-mascota]:checked').val();
		if (input == 'Perro'){
			$('#requisitos-alert').addClass('hidden');
		}else if(input == 'Gato') {
			$('#requisitos-alert').addClass('hidden');
		}else if( input ==  null || input == '' || input == 'Gatox'){
			$('#requisitos-alert').removeClass('hidden');
			$('input[type=text], select, input[type=tel]').attr('disabled','disabled');
		}else {
			return;
		}
	});
	
}

function vermas(){
	var icon = $('.icon-more');

	icon.on('click',function(){
		if( $('#estructura').hasClass('in')){
			icon.html('<img src="img/btn-mas.png" role="button" data-toggle="collapse" href="#estructura" aria-expanded="false" aria-controls="estructura"/>');
		}else{
			icon.html('<img src="img/btn-menos.png" role="button" data-toggle="collapse" href="#estructura" aria-expanded="false" aria-controls="estructura"/>');
		}
	});
}

function casaodepartamento(){


	$('input:radio[name="tipo-mascota"]').change(function(){
	    var $src = "img/dog-gris.png";
	    var $src2 = "img/cat-gris.png"
	    if ($(this).val() == 'Perro'){
	        $src = "img/dog-color.png";
	    }
	    else if ($(this).val() == 'Gato') {
	        $src2 = "img/cat-color.png";
	    }

	    $('.icon-perro').attr('src',$src);
	    $('.icon-gato').attr('src', $src2);

    });
}

function perfil(){
		$('#tipo-perfil').on('change',function(){
	    var radiocontenido = $('#Contenido');
		var radioestrucon = $('#Estruc-cont');
		var radioestructura = $('#Estructura');
		var value = $(this).find(':selected').text();

		if(value != ""  || value == 'Selecciona tipo de perfil'){
			$('.tabs-sura').removeClass('hidden');

			if(value == "Arrendatario"){
				radiocontenido.attr('checked',true);
				radioestructura.attr('disabled','disabled');
				radioestrucon.attr('disabled','disabled');
			}else if(value == "Inversionista"){
				radioestructura.attr('checked', true);
				radiocontenido.attr('disabled','disabled');
				radioestrucon.attr('disabled','disabled');
			}else{
				radioestructura.attr('disabled', false );
				radiocontenido.attr('checked', true);
				radioestrucon.attr('disabled', false);
			}
		}else{
			$('.tabs-sura').addClass('hidden');
		}
	})
}

function tipocobertura(){
	$('input:radio[name="tamano"]').change(function(){
	    var $src = "img/pata-1.png";
	    var $src2 = "img/pata-2.png";
	    var $src3 = "img/pata-3.png";

	    if ($(this).val() == 'tamanoS'){
	        $src = "img/pata-color1.png";
	    }
	    else if($(this).val() == 'tamanoM'){
	        $src2 = "img/pata-color2.png";

	    }else{
	    	$src3 = "img/pata-color3.png";
	    }

	    $('.icon-tamano-s').attr('src',$src);
	    $('.icon-tamano-m').attr('src', $src2);
	    $('.icon-tamano-l').attr('src', $src3);

    });
}

function pago(){
	$('#tipo-pago').on('change',function(){
		var valor = $(this).find(':selected').text();

		if(valor == 'PAC'){
			$('#pac-payment').removeClass('hidden');
			$('#pat-payment').addClass('hidden');
		}else{
			$('#pac-payment').addClass('hidden');
			$('#pat-payment').removeClass('hidden');
		}
	})
}

function validatepaso1(){
	var elements = $('input[type=radio], select, .form-control');

	var value = elements.filter(function () {
    return this.value === '';
 	 });
	  if (value.length == 0) {

	  	window.location = "mascotas-p2.html"

  	  }else if (value.length > 0) {

  	  	elements.addClass('input-error');
  	  	$('.alert').removeClass('hidden');
  	}

}

function validatepaso2(){
	var elements = $('input[type=radio], select, .form-control');

	var value = elements.filter(function () {
    return this.value === '';
 	 });
	  if (value.length == 0) {

	  	window.location = "mascotas-p3.html"

  	  }else if (value.length > 0) {

  	  	elements.addClass('input-error');
  	  	$('.alert').removeClass('hidden');
  	}

}

function validatepaso3(){
	var elements = $('input[type=radio], select, .form-control');

	var value = elements.filter(function () {
    return this.value === '';
 	 });
	  if (value.length == 0) {

	  	window.location = "mascotas-p4.html"

  	  }else if (value.length > 0) {
  	  	$('.alert').removeClass('hidden');
  	  	elements.addClass('input-error');

  	  	if($(this).val() <= 0 || $(this).val() == null){
  	  		console.log('campos vacios');
  	  		$(this).addClass('input-error');
  	  	}
  	}
  	return false;
}

// function inputtext(){
// 	inputtext = $('input[type=text]');

// 	inputtext.on('keyup',function(){
// 		var val = $('input[type=text]').val();

// 	    if (!val.match(/^[a-zA-Z]+$/)) 
// 	    {	
// 	        inputtext.val('');
// 	        return false;
// 	    }
// 	})
// }

function tel(){
	var inputtel = $('input[type=tel]');

	inputtel.on('keyup',function(){
		var val = $('input[type=tel]').val();

	    if (!val.match(/^[0-9]|\.+$/)) 
	    {	
	        inputtel.val('');
	        return false;
	    }

	    return true;
	})
}

function email(){
	var input = $('input[type=email]');

	input.on('keyup',function(){
		var val = $('input[type=email]').val();

		if(!val.match(/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/)){
			$(this).addClass('input-error');
		}else{
			$(this).removeClass('input-error');
		}
	})
}


function perroGato(){

	if($('#Gato').is(':checked')){
		$('.gato-input').removeClass('hidden');
		$('.perro-input').addClass('hidden');
	}else if( $('#Gato').attr(':checked',false)){
		$('.gato-input').addClass('hidden');
		$('.perro-input').removeClass('hidden');
	}
}



function coberturas(){
	/*container texto */
	var containertxtr = $('.robo-td');
	var containertxts = $('.sismo-td');

	/* textos */
	var checksismo = $('#sismo');
	var checkrobo = $('#robo');

	var txtrobo = '<img src="img/not_checked.png">';
	var txtsismo = '<img src="img/not_checked.png">'; 

	/* adicional slide */
	var liadicionalr = $('.adicional-robo');
	var liadicionals = $('.adicional-sismo');

	$('#sismo').on('change',function(){
		if( $(checksismo).is(':checked')){
			containertxts.eq(0).html('UF 1.000');
			containertxts.eq(1).html('UF 2.000');
			containertxts.eq(2).html('UF 3.000');
			liadicionals.removeClass('li-no-cubre');


		}if ($('#sismo:checked').length == 0) {
			$(containertxts).html(txtsismo);
			liadicionals.addClass('li-no-cubre');
		};

	});
	$('#robo').on('change',function(){
		if ( $(checkrobo).is(':checked')){
			containertxtr.eq(0).html('UF 1.000');
			containertxtr.eq(1).html('UF 2.000');
			containertxtr.eq(2).html('UF 3.000');
			liadicionalr.removeClass('li-no-cubre');

		}if($('#robo:checked').length == 0) {
			$(containertxtr).html(txtrobo);
			liadicionalr.addClass('li-no-cubre');
		};

	});
}


function selectTable(){
   var firsttab = $('.header-table')[0];
   $(firsttab).addClass('active-plan');
   if( $(firsttab).hasClass('active-plan')){
      var index = $(firsttab).index();
      $(firsttab).closest("table").find("tr td:nth-child(" + (index + 1) + ")").not('.active-plan').addClass('table-highlight');
   }

   $(".header-table").click(function() { 
      $('.header-table').removeClass('active-plan');
      $(this).addClass('active-plan');

      var columnNo = $(this).index();
      $('td').removeClass('table-highlight');
      $(this).closest("table").find("tr td:nth-child(" + (columnNo+1) + ")").not('.active-plan').addClass('table-highlight');
      console.log(columnNo);

    }); 
}


// function initializeSliders(){

//       $('.slider-nav').slick({
//         slidesToShow: 1,
//           focusOnSelect: false,
//           slidesToScroll: 1,
//           centerMode: true,
//           arrows: false,
//           dots:false,
//           responsive: [
//             {
//               breakpoint: 990,
//               settings: {
//                 arrows: false,
//                 centerMode: false,
//                 slidesToShow: 2,
//                 focusOnSelect: true,
//                 dots:true,
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 arrows:false,
//                 centerMode: false,
//                 slidesToShow: 1,
//                 dots:true,
//               }
//             }
//           ]
//         });

// }


function activarmandato(){
    var  btn  = $('.activar-mandato');
    var btnConfirmar = $('#confirm-contract');
    btnConfirmar.attr('disabled',true);
    $(btn).on('click',function(){
        $('.mandato-input').removeClass('hidden');
    })
}

function mandatoActivado(){
    var btnConfirmar = $('#confirm-contract');
    btnConfirmar.attr('disabled',true);
    $('#modal-pat').on('hidden.bs.modal', function () {
      $('#suscripcion-pat').modal();
      $('.input-mandato').removeClass('hidden');
      btnConfirmar.attr('disabled',false);


    })
}