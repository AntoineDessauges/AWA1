$( document ).ready(function() {
	
	//set slide start position in y axe
	y = 0;
	$( ".slide" ).each(function(i) {
		$(this).addClass('slide-'+i);
		$(this).css('top', y);
		y += $( window ).height();
	});


	//animate arrow on hover
	started_up = false; //state of the animation
	$( ".up" ).hover(function() {

		// if already in animation
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
	started_down = false; //state of the animation
	$( ".down" ).hover(function() {

		// if already in animation
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
	diff_height = $( window ).height() + $('.slide').height(); // get space between slide

	//click up arrow
	$( ".up" ).click(function() {

		//if first return
		if(current == 1)
			return;

		current -= 1;
		old_translate += diff_height;
		//animate transition
		dynamics.animate(slides, {
			translateY: old_translate
		}, {
			type: dynamics.spring,
			duration: 2800,
			frequency: 380,
			friction: 475
		})
	});

	//click down arrow
	$( ".down" ).click(function() {

		// if last return
		if(current == nb_slides)
			return;

		current += 1;
		old_translate -= diff_height;
		//animate transition
		dynamics.animate(slides, {
			translateY: old_translate
		}, {
			type: dynamics.spring,
			duration: 2800,
			frequency: 380,
			friction: 475
		})
	});

	//click on buy button
	$( ".buy" ).click(function() {

		slide = document.getElementsByClassName('slide-'+(current-1).toString())[0]; //get current slide
		slide.style.zIndex  = "99999";
		
		//create background
		bgd = document.createElement('div');
		bgd.classList.add('bgd');
		slide.appendChild(bgd);

		//animate background
		dynamics.animate(bgd, {
			scale: 10,
		}, {
			type: dynamics.linear,
			duration: 1000
		})

		//animate guitar
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

		//create name
		big_name = document.createElement('div');
		big_name.classList.add('big-name');
		big_name.innerHTML = slide.getElementsByClassName('name')[0].innerText;
		slide.appendChild(big_name);

		//animate name
		dynamics.animate(big_name, {
			translateY: 530
		}, {
			type: dynamics.spring,
			delay: 500,
			friction: 500,
			duration: 2000
		})

		//create div with price and add to cart button
		bottom_infos = document.createElement('div');
		bottom_infos.classList.add('bottom-infos');
		bottom_infos.innerHTML = "<div class='big-price'>"+slide.getElementsByClassName('price')[0].innerText+"</div><div class='add-cart'>Ajouter au panier</div>";
		slide.appendChild(bottom_infos);

		//animate price and add to cart button
		dynamics.animate(bottom_infos, {
			translateY: -530
		}, {
			type: dynamics.spring,
			delay: 500,
			friction: 500,
			duration: 2000
		})

		//create the close button
		close_btn = document.createElement('i');
		close_btn.classList.add('fa-times');
		close_btn.classList.add('fa');
		slide.appendChild(close_btn);

		//add event on click on the close button
		close_btn.onclick = function() {
			
			//animate background closing
			dynamics.animate(bgd, {
				scale: 0,
			}, {
				type: dynamics.linear,
				duration: 1000,
				//remove usless element
				complete: function(){ 
					bgd.remove();
					big_name.remove();
					close_btn.remove();
					bottom_infos.remove();
					slide.style.zIndex  = "1";
				}
			})

			//animate image return to original state
			dynamics.animate(img, {
				translateX: 0,
				rotateZ: 0,
				scale: 1,
			}, {
				type: dynamics.spring,
				duration: 2800
			})

			//animate name disapear
			dynamics.animate(big_name, {
				translateY: -530
			}, {
				type: dynamics.spring,
				friction: 500,
				duration: 2000
			})

			//animate price and add to cart button disapear
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