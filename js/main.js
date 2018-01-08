$( document ).ready(function() {
	
	y = 0;
	$( ".slide" ).each(function(i) {
	$(this).addClass('slide-'+i);
		$(this).css('top', y);
		y += $( window ).height();
	});


	//animate arrow
	started_up = false;
	$( ".up" ).hover(function() {
		if(started_up)
			return;
		started_up = true
		dynamics.animate(document.getElementsByClassName('up'), {
			translateY: 50
		}, {
			type: dynamics.bounce,
			duration: 2800,
			complete: function() {
				started_up = false;
			}
		})
	});
	started_down = false;
	$( ".down" ).hover(function() {
		if(started_down)
			return;
		started_down = true
		dynamics.animate(document.getElementsByClassName('down'), {
			translateY: -50
		}, {
			type: dynamics.bounce,
			duration: 2800,
			complete: function() {
			   started_down = false;
		  }
		})
	});

	//click on arrow
	var slides = document.getElementsByClassName("slide");
	current = 1;
	nb_slides = $('.slide').length;

	old_translate = 0;
	diff_height = $( window ).height() + $('.slide').height();

	$( ".up" ).click(function() {

		if(current == 1)
			return;

		current -= 1;
		old_translate += diff_height;
		dynamics.animate(slides, {
			translateY: old_translate
		}, {
			type: dynamics.spring,
			duration: 2800,
			frequency: 380,
			friction: 475
		})
	});

	$( ".down" ).click(function() {

		if(current == nb_slides)
			return;

		current += 1;
		old_translate -= diff_height;
		dynamics.animate(slides, {
			translateY: old_translate
		}, {
			type: dynamics.spring,
			duration: 2800,
			frequency: 380,
			friction: 475
		})
	});

	//click on img
	$( ".buy" ).click(function() {

		slide = document.getElementsByClassName('slide-'+(current-1).toString())[0];
		slide.style.zIndex  = "99999";
		
		bgd = document.createElement('div');
		bgd.classList.add('bgd');
		slide.appendChild(bgd);

		dynamics.animate(bgd, {
			scale: 10,
		}, {
			type: dynamics.linear,
			duration: 1000
		})

		img = slide.getElementsByTagName('img');
		dynamics.animate(img, {
			translateX: -500,
			rotateZ: -90,
			scale: 1.7,
		}, {
			type: dynamics.spring,
			duration: 2800,
			friction: 400,
		})

		big_name = document.createElement('div');
		big_name.classList.add('big-name');
		big_name.innerHTML = slide.getElementsByClassName('name')[0].innerText;
		slide.appendChild(big_name);
		dynamics.animate(big_name, {
			translateY: 530
		}, {
			type: dynamics.spring,
			delay: 500,
			friction: 500,
			duration: 2000
		})

		bottom_infos = document.createElement('div');
		bottom_infos.classList.add('bottom-infos');
		bottom_infos.innerHTML = "<div class='big-price'>"+slide.getElementsByClassName('price')[0].innerText+"</div><div class='add-cart'>Ajouter au panier</div>";
		slide.appendChild(bottom_infos);
		dynamics.animate(bottom_infos, {
			translateY: -530
		}, {
			type: dynamics.spring,
			delay: 500,
			friction: 500,
			duration: 2000
		})

		close = document.createElement('i');
		close.classList.add('fa-times');
		close.classList.add('fa');
		slide.appendChild(close);

		close.onclick = function() {
			
			dynamics.animate(bgd, {
				scale: 0,
			}, {
				type: dynamics.linear,
				duration: 1000,
				complete: function(){
					bgd.remove();
					big_name.remove();
					close.remove();
					bottom_infos.remove();
					slide.style.zIndex  = "1";
				}
			})

			dynamics.animate(img, {
				translateX: 0,
				rotateZ: 0,
				scale: 1,
			}, {
				type: dynamics.spring,
				duration: 2800
			})

			dynamics.animate(big_name, {
				translateY: -530
			}, {
				type: dynamics.spring,
				friction: 500,
				duration: 2000
			})

			dynamics.animate(bottom_infos, {
				translateY: 530
			}, {
				type: dynamics.spring,
				friction: 500,
				duration: 2000
			})

		};

	});

});