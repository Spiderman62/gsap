gsap.registerPlugin(ScrollTrigger);
// $('.tabs-content').eq(1).show();
$(function () {

	// trỏ tới selector cần tác động
	gsap.from('#page2 .active-show--up', {
		y: 150,
		duration: 1.2,
		clipPath: 'inset(100% 0 0 0)',
		scrollTrigger: {
			// trỏ tới view để kích hoạt -> có nghĩa là cuộn mà đụng #page2 h1 sẽ kích hoạt from ở trên
			trigger: '#page2 h1',
			toggleActions: 'restart none none none',
			// markers: true,
		}
	}
	)
	gsap.to('.line', {
		width: '100%',
		opacity: 1,
		duration: 1.2,
		scrollTrigger: {
			trigger: '#page2 h1',
			toggleActions: 'restart none none none',
		}
	});
	gsap.to('#page3-top', {
		scale: 1,
		visibility: 'visible',
		opacity: 1,
		duration: 1
		,
		scrollTrigger: {
			trigger: '#page3-top',
			toggleActions: 'restart none none none',
		}
	});

	let tl = gsap.timeline()
	tl.from("#loader h3", {
		x: 40,
		opacity: 0,
		duration: 1,
		stagger: 0.1,
	})
	tl.to("#loader h3", {
		opacity: 0,
		x: -20,
		duration: 1,
		stagger: 0.1,
	})
	tl.to("#loader", {
		opacity: 0,
	})
	tl.to("#loader", {
		display: "none",
	})
});


function sliderAnimation() {
	let swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: true,
		},
	});
}
sliderAnimation()

const lenis = new Lenis()

lenis.on('scroll', (e) => {

});

function raf(time) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function handle_cursor() {
	const cursor = $('#cursor');
	$(cursor).html("")
	$('#mega-wrapper').on('mousemove', function (e) {
		$('#mega-wrapper').css('cursor', 'none')
		gsap.to(cursor, {
			x: e.pageX - $(cursor).width() / 2,
			y: e.pageY - $(cursor).height() / 2,
			height: '2.5vw',
			width: '2.5vw',
			fontSize: '1.4vw',
			borderRadius: '50%'
		});
		$('#page1').on('mousemove', function (e) {
			gsap.to(cursor, {
				background: 'white',
				color: 'black'
			}
			)
		})
		$('#page1').on('mouseleave', function (e) {
			gsap.to(cursor, {
				background: 'white',
				color: 'black',

			}
			)
		})

		$('#page2').on('mouseenter', function () {
			gsap.to(cursor, {
				background: 'black',
				color: 'white',


			});
		});
		$('#page5').on('mouseenter', () => {
			$(cursor).html("");

		})


	});// main mouse

}
handle_cursor();

function page6() {
	gsap.to('#page6 .left', {
		duration: 2,
		width: '50%',
		ease: Power2.easeInOut,
		scrollTrigger: {
			trigger: '#page6',
			toggleActions: 'restart none none none'
		}
	});
	gsap.to('#page6 .right', {
		duration: 2,
		width: '50%',
		ease: Power3.easeInOut,
		scrollTrigger: {
			trigger: '#page6',
			toggleActions: 'restart none none none'
		}
	});
	gsap.from('#page6 .text h1', {
		duration: 3,
		delay: .6,
		x: 1000,
		ease: Circ.easeInOut,
		scrollTrigger: {
			trigger: '#page6',
			toggleActions: 'restart none none none'
		}
	});
	gsap.from('#page6 .text p', {
		duration: 2,
		delay: 2,
		x: 1000,
		ease: Circ.easeInOut,
		scrollTrigger: {
			trigger: '#page6',
			toggleActions: 'restart none none none'
		}
	});
	gsap.to('#page6 .content .img_wrapper .watches', {
		duration: 1.5,
		width: 800,
		ease: Power2.easeInOut,
		delay: 1.5,
		scrollTrigger: {
			trigger: '#page6',
			toggleActions: 'restart none none none'
		}
	});
	gsap.from('#page6 .content .bottom-nav ul li', {
		duration: 2,
		delay: 2,
		x: 1000,
		ease: Sine.easeInOut,
		stagger: 0.2,
		scrollTrigger: {
			trigger: '#page6',
			toggleActions: 'restart none none none'
		}
	});
	gsap.from('#page6 .content .info', {
		duration: 2,
		delay: 2,
		y: 100,
		opacity: 0,
		ease: Circ.easeInOut,
		scrollTrigger: {
			trigger: '#page6',
			toggleActions: 'restart none none none'
		}
	});
	gsap.from('#page6 .content .name', {
		duration: 2,
		delay: 2,
		x: -600,
		ease: Circ.easeInOut,
		scrollTrigger: {
			trigger: '#page6',
			toggleActions: 'restart none none none'
		}
	});
}

page6();
function page7() {
	gsap.from('#page7 .left-container', {
		duration: 2,
		ease: Expo.easeInOut,
		width: 0,
		scrollTrigger: {
			trigger: '#page7',
			toggleActions: 'restart none none none'
		}
	});
	gsap.from('#page7 .right-container .story', {
		duration: 2.5,
		delay: 3,
		opacity: 0,
		y: 30,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page7',
			toggleActions: 'restart none none none'
		}
	});
	gsap.to('#page7 .center-container', {
		duration: 2.5,
		delay: 3.5,
		width: '30vw',
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page7',
			toggleActions: 'restart none none none'
		}
	});
	gsap.from('#page7 .right-container .social-container', {
		duration: 2,
		opacity: 0,
		delay: 4,
		y: 30,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page7',
			toggleActions: 'restart none none none'
		}
	});
	gsap.to('#page7 .right-container .first-block', {
		duration: 2.5,
		// delay:.4,
		width: '100%',
		right: 0,
		opacity: 1,
		ease: Expo.easeInOut,
		onComplete() {
			gsap.to('#page7 .right-container .first-block', {
				duration: .75,
				width: '0%',
				right: 0,
				ease: Expo.easeInOut
			})
		},
		scrollTrigger: {
			trigger: '#page7',
			toggleActions: 'restart none none none',
		}
	})
}
page7();
// function page4() {
// 	$('#page4').on('mouseenter', function () {
// 		$('#cursor').css('pointerEvents', 'none')

// 	});
// 	let items = $('#page4 .under .wrapper-flex .item');
// 	let currentIndex = 0;

// 	items.hide();
// 	items.eq(currentIndex).show();

// 	$('#page4 .under .right-block .next').on('click', function () {
// 		items.eq(currentIndex).fadeOut(300, function () {
// 			currentIndex = (currentIndex + 1) % items.length;
// 			items.eq(currentIndex).fadeIn(300);
// 		});
// 	});
// };
// page4();
function page4() {
	$('#page4').on('mouseenter', function () {
		$('#cursor').css('pointerEvents', 'none')

	});
	let items = $('#page4 .under .wrapper-content .item');
	let imageItems = $('#page4 .under .right-block .wrapper-img');
	let currentIndex = 0;
	items.hide();
	items.eq(currentIndex).show();
	imageItems.hide();
	imageItems.eq(currentIndex).show();
	$('.page4--control-under .prev').on('click', function () {
		items.eq(currentIndex).fadeOut(300, function () {
			currentIndex = (currentIndex - 1) % items.length;
			items.eq(currentIndex).fadeIn(300);
			gsap.from(items.eq(currentIndex).find('.title'), {
				x: -100,
				ease: Power2.easeInOut,
				delay: .2,
				opacity: 0,
			});
			gsap.from(items.eq(currentIndex).find('.description'), {
				scale: 0,
				ease: Power2.easeInOut,
				delay: .5,
				opacity: 0,
			});
			gsap.from(items.eq(currentIndex).find('.price'), {
				y: 100,
				ease: Power2.easeInOut,
				delay: .8,
				opacity: 0,
			});
			gsap.from(items.eq(currentIndex).find('.buy'), {
				y: 100,
				ease: Power2.easeInOut,
				delay: 1.3,
				opacity: 0,
			});

		});
		imageItems.eq(currentIndex).hide(300, function () {
			imageItems.eq(currentIndex).show(300);
			gsap.from(imageItems.eq(currentIndex), {
				duration: 1,
				ease: Power2.easeInOut,
				// opacity:0,	
			});
		})
	});
	$('.page4--control-under .next').on('click', function () {
		items.eq(currentIndex).fadeOut(300, function () {
			currentIndex = (currentIndex + 1) % items.length;
			items.eq(currentIndex).fadeIn(300);
			gsap.from(items.eq(currentIndex).find('.title'), {
				x: -100,
				ease: Power2.easeInOut,
				delay: .2,
				opacity: 0,
			});
			gsap.from(items.eq(currentIndex).find('.description'), {
				scale: 0,
				ease: Power2.easeInOut,
				delay: .5,
				opacity: 0,
			});
			gsap.from(items.eq(currentIndex).find('.price'), {
				y: 100,
				ease: Power2.easeInOut,
				delay: .8,
				opacity: 0,
			});
			gsap.from(items.eq(currentIndex).find('.buy'), {
				y: 100,
				ease: Power2.easeInOut,
				delay: 1.3,
				opacity: 0,
			});

		});
		imageItems.eq(currentIndex).hide(300, function () {
			imageItems.eq(currentIndex).show(300);
			gsap.from(imageItems.eq(currentIndex), {
				duration: 1,
				ease: Power2.easeInOut,
				// opacity:0,	
			});
		})
	});

	gsap.from('#page4 .above .left-block .text-left', {
		y: 70,
		opacity: 0,
		duration: 1.5,
		ease: Circ.easeInOut,
		scrollTrigger: {
			trigger: '#page4',
			toggleActions: 'restart none none none',
			start: 'top 60%'
		},
		onComplete() {
			gsap.to('#page4 .above .left-block .text-left', {
				y: -120,
				duration: 1,
				ease: Circ.easeInOut,

			});
		}
	});

	gsap.from('#page4 .above .right-block .text-right', {
		y: -70,
		opacity: 0,
		duration: 1.5,
		ease: Circ.easeInOut,
		scrollTrigger: {
			trigger: '#page4',
			toggleActions: 'restart none none none',
			start: 'top 60%'
		},
		onComplete() {
			gsap.to('#page4 .above .right-block .text-right', {
				y: 120,
				duration: 1,
				ease: Circ.easeInOut,

			});
		}
	});

	gsap.to('#page4 .above .left-block', {
		delay: 2.5,
		x: '-100%',
		duration: 1.7,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page4',
			toggleActions: 'restart none none none',
			start: 'top 60%'
		}
	})
	gsap.to('#page4 .above .right-block', {
		delay: 2.5,
		x: '100%',
		duration: 1.7,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page4',
			toggleActions: 'restart none none none',
			start: 'top 60%'
		}
	})
	gsap.to('#page4 .above', {
		display: 'none',
		delay: 4.2,
		scrollTrigger: {
			trigger: '#page4',
			toggleActions: 'restart none none none',
			start: 'top 60%'
		}
	})
	gsap.from($('#page4 .under .wrapper-content'), {
		y: 100,
		delay: 3,
		opacity: 0,
		duration: 2,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page4',
			toggleActions: 'restart none none none',
			start: 'top 80%'
		}
	});
	gsap.from($('#page4 .under .right-block'), {
		width: 0,
		delay: 2.7,
		duration: 2,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page4',
			toggleActions: 'restart none none none',
			start: 'top 80%'
		}
	});
	gsap.from($('#page4 .under .right-block .wrapper-img'), {
		width: 0,
		delay: 3.5,
		duration: 1,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page4',
			toggleActions: 'restart none none none',
			start: 'top 80%'
		}
	})
	$('.page4--control-under .prev').on('mouseenter', function () {

		gsap.to($('#cursor'), {
			innerHTML: 'Prev',
			padding: '30px'
		});
	});
	$('.page4--control-under .prev').on('mouseleave', function () {

		gsap.to($('#cursor'), {
			innerHTML: '',
			padding: '0px'
		});
	});
	$('.page4--control-under .next').on('mouseenter', function () {

		gsap.to($('#cursor'), {
			innerHTML: 'Next',
			padding: '30px'
		});
	});
	$('.page4--control-under .next').on('mouseleave', function () {

		gsap.to($('#cursor'), {
			innerHTML: '',
			padding: '0px'
		});
	});

}
page4();

//PAGE 8
function page8() {
	gsap.from("#page8 .logo", {
		duration: 1.6,
		delay: 6.4,
		opacity: 0,
		y: 30,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	});

	// gsap.from("#page8 .menu", {
	// 	duration: 1.6,
	// 	delay: 6.5,
	// 	opacity: 0,
	// 	y: 30,
	// 	ease: Expo.easeInOut,
	// 	scrollTrigger: {
	// 		trigger: '#page8',
	// 		toggleActions: 'restart none none none',
	// 		start: 'top 90%'
	// 	}
	// });

	gsap.from("#page8 .heading", {
		duration: 1.6,

		delay: 6.6,
		opacity: 0,
		y: 30,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	});

	gsap.from("#page8 .desc", {
		duration: 1.6,

		delay: 6.7,
		opacity: 0,
		y: 30,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	});

	gsap.from("#page8 button", {
		duration: 1.6,

		delay: 6.8,
		opacity: 0,
		y: 30,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	});

	gsap.from("#page8 .watch", {
		duration: 1.6,
		delay: 6.9,
		opacity: 0,
		y: 30,
		rotation: 90,
		ease: Expo.easeInOut,
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	});
	gsap.to('#page8 .temp', {
		duration: 2,
		opacity: 0,
		ease: Linear.easeInOut,
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}

	})

	gsap.to('#page8 .temp', {
		duration: 1,
		opacity: 1,
		delay: 2,
		ease: Linear.easeInOut,
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}

	})
	gsap.to('#page8 .temp', {
		delay: 5,
		duration: 1,
		opacity: 1,
		ease: Linear.easeInOut,
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	})
	gsap.to('#page8 .temp', {
		delay: 5,
		duration: 1,
		opacity: 0,
		ease: Linear.easeInOut,
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	});
	gsap.to('#page8 .first-block', {
		duration: 2,
		ease: Power3.easeInOut,
		width: '100%',
		right: 0,
		onComplete() {
			gsap.to('#page8 .first-block', {
				left: 'unset',
				width: 0,
				duration: 1.5
			});
		},
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	});
	gsap.to('#page8 .second-block', {
		duration: 2,
		delay: 3.5,
		ease: Power3.easeInOut,
		width: '100%',
		right: 0,
		onComplete() {
			gsap.to('#page8 .second-block', {
				left: 'unset',
				width: '0%',
				duration: 2.5,
				ease: Expo.easeInOut,
			});
		},
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	});
	gsap.to('#page8 .third-block', {
		duration: 1.4,
		ease: Power4.easeOut,
		delay: 7.7,
		width: '64%',
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	});
	gsap.from('#page8 .img-page8', {
		duration: 1.4,
		ease: Power4.easeOut,
		opacity: 0,
		delay: 7.7,
		y: 30,
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	});
	gsap.from('#page8 .loader ul li', {
		x: 30,
		duration: 1.5,
		stagger: 0.1,
		opacity: 0,
		delay: 1,
		ease: Expo.easeInOut,
		onComplete() {
			gsap.to('#page8 .loader ul li', {
				x: -30,
				duration: 1,
				stagger: 0.1,
				opacity: 0,
				delay: 2,
				ease: Expo.easeInOut
			});
		},
		scrollTrigger: {
			trigger: '#page8',
			toggleActions: 'restart none none none',
			start: 'top 90%'
		}
	})
}
page8();

//PAGE9
function page9() {
	gsap.to(".loading-screen", 4, {
		delay: 2.6,
		right: "-110%",
		ease: Expo.easeInOut
	});

	gsap.from(".contact-page9", 3, {
		delay: 8.5,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	});

	gsap.from(".p1", 3, {
		delay: 9,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	});

	gsap.from(".p2", 3, {
		delay: 9.2,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	});

	// gsap.from("#one", 3, {
	// 	delay: 9.4,
	// 	opacity: 0,
	// 	y: 20,
	// 	ease: Expo.easeInOut
	// });
	// gsap.to("#one", 3, {
	// 	delay: 9.4,
	// 	opacity: 1,
	// 	y: 20,
	// 	ease: Expo.easeInOut
	// });

	gsap.from("#two", 3, {
		delay: 9.7,
		opacity: 0,
		y: 20,
		ease: Expo.easeInOut
	});
	gsap.to("#two", 3, {
		delay: 9.7,
		opacity: 1,
		y: 20,
		ease: Expo.easeInOut
	});

	var t1 = new TimelineMax();

	t1.from(".ringOne", 4, {
		delay: 0.4,
		opacity: 0,
		y: 40,
		ease: Expo.easeInOut
	}).from(".ringTwo", 4, {
		delay: 0.9,
		opacity: 0,
		y: 40,
		ease: Expo.easeInOut
	}, "-=5").to(".ringOne", 4, {
		delay: 0.4,
		x: 330,
		ease: Expo.easeInOut
	}).to(".ringTwo", 4, {
		delay: 0.9,
		x: 330,
		ease: Expo.easeInOut
	}, "-=5");

	var textWrapper = document.querySelector('.ml7 .letters');
	textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

	anime.timeline({ loop: false })
		.add({
			targets: '.ml7 .letter',
			translateY: ["1.1em", 0],
			translateX: ["0.55em", 0],
			translateZ: 0,
			rotateZ: [180, 0],
			duration: 750,
			easing: "easeOutExpo",
			delay: function (el, i) {
				return 9000 + 50 * i;
			}
		});

}
page9();
function handleNavagation() {
	$('#wrapper-icon-nav').on('mouseenter', function () {
		gsap.to($('#cursor'), {
			scale: 0,
			opacity: 0
		})
	});
	$('#wrapper-icon-nav').on('mouseleave', function () {
		gsap.to($('#cursor'), {
			scale: 1,
			opacity: 1
		})
	});


	$('#navigation').on('mouseenter', function () {
		gsap.to($('#cursor'), {
			scale: 0,
			opacity: 0
		})
	})
	$('#navigation').on('mouseleave', function () {
		gsap.to($('#cursor'), {
			scale: 1,
			opacity: 1,
			zIndex: 10
		})
	});
	$('#wrapper-icon-nav').on('click', function () {
		$('#wrapper-icon-nav').toggleClass('active');
		$('#wrapper-icon-nav .icon-menu').toggleClass('active');
		if ($('#wrapper-icon-nav').hasClass('active')) {

			gsap.to('#navigation', {
				borderTopLeftRadius: "100%",
				borderBottomLeftRadius: "100%",
				ease: Power4.easeIn,
				duration: 0
			})
			gsap.to('#navigation', {
				width: 500,
				right: 0,
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 0,
				ease: Power4.easeInOut,
				duration: 1.5
			})
			gsap.to('#navigation .tabs li', {
				x: 0,
				opacity: 1,
				stagger: .1,
				ease: Expo.easeInOut,
				duration: 1,
			});
		} else {

			gsap.to('#navigation', {
				borderTopLeftRadius: "100%",
				borderBottomLeftRadius: "100%",
				ease: Power1.easeInOut,
				duration: 1
			})

			gsap.to('#navigation', {
				width: 0,
				right: -250,
				duration: 2,
				borderTopLeftRadius: "50%",
				borderBottomLeftRadius: "50%",
				ease: Power4.easeInOut,
			});
			gsap.to('#navigation .tabs li', {
				x: 100,
				opacity: 0,
				stagger: .1,
				ease: Expo.easeInOut,
				duration: 1.5,
			});
		}
	});
	$('.tabs-content').hide();
	$('.tabs-content').eq(0).show();
	$('#navigation .tabs li').on('click', function () {
		const contentTabs = $(this).text();
		const indexTabs = $(this).index();
		const overlayTimeLine = gsap.timeline();
		$('.tabs-content').hide(2000);
		$('.tabs-content').eq(indexTabs).show(2000);
		$('#navigation .tabs li').removeClass('current-tab');
		$('#navigation .tabs li').eq(indexTabs).addClass('current-tab');

		overlayTimeLine
			.set('#overlay', {
				bottom: 0,
				borderRadius: "100% 100% 0 0",
			})
			.to('#overlay', {
				height: '100%',
				borderRadius: "0% 0% 0 0",
				ease: Power4.easeInOut,
				duration: 1,

			})
			.set('#overlay h1', {
				innerHTML: contentTabs
			})
			.from('#overlay h1', {
				y: 100,
				opacity: 0,
				ease: Power2.easeInOut,
				duration: .7,
				filter: 'blur(40px)',
			})
			.to('#overlay h1', {
				delay: 1,
				y: -100,
				opacity: 0,
				ease: Power2.easeInOut,
				duration: .7,
				filter: 'blur(40px)',
			})
			.set('#overlay', {
				bottom: 'unset',
				top: 0,
				borderRadius: '0% 0% 0% 0%'
			})
			.to('#overlay', {
				height: '0%',
				borderRadius: '0% 0% 100% 100%',
				ease: Power4.easeInOut,
				duration: 1,

			})
			.set('#overlay', {
				top: 'unset',
				bottom: 0
			})
			.set('#overlay h1', {
				innerHTML: "",
				y: 0,
				opacity: 1,
				ease: Power2.easeInOut,
				duration: .7,
				filter: 'blur(0px)',
			});

		setTimeout(() => {
			$('#wrapper-icon-nav').trigger('click');
		}, 2000);
		setTimeout(() => {
			gsap.set('#page10 .reveal-image', {
				opacity: 1
			});
			gsap.from('#page10 .reveal-image', {
				y: 100,
				opacity: 0,
				ease: Expo.easeInOut,
				duration: 2,
				stagger: .2,
				onComplete() {
					gsap.to('#page10 .reveal-image', {
						y: -150,
						opacity: 0,
						ease: Power4.easeInOut,
						duration: 1
					})
					gsap.set('#page10 .reveal-image', {
						delay: 1,
						y: 0,
					});

				},

			});
			gsap.set('#page10 .first-show', {
				left: '43%',
				top: '1%',
				scale: 1,
			})
			gsap.set('#page10 .last-show', {
				left: '43%',
				top: '66%',
				scale: 1,

			})
			gsap.from('#page10 .first-show', {
				y: 100,
				opacity: 0,
				ease: Expo.easeInOut,
				duration: 1.3,
				onComplete() {

					gsap.to('#page10 .first-show', {
						delay: 1,
						top: '50%',
						left: '14%',
						scale: 2.5,
						duration: 2,
						ease: Power4.easeInOut,

					});

				}
			});
			gsap.from('#page10 .last-show', {
				y: 100,
				opacity: 0,
				ease: Expo.easeInOut,
				duration: 1.7,
				onComplete() {
					gsap.to('#page10 .last-show', {
						delay: .5,
						top: '50%',
						left: '72%',
						scale: 2.5,
						duration: 2,
						ease: Power4.easeInOut
					});
				}
			});

		}, 3800);
		const dataTextLeft = "G-shock-Mega".split('');
		const dataTextRight = "G-shock-Caesar".split('');
		const htmlTextLeft = $.map(dataTextLeft, function (elementOrValue, indexOrKey) {
			return `
					<p>${elementOrValue}</p>
				`
		});
		const htmlTextRight = $.map(dataTextRight, function (elementOrValue, indexOrKey) {
			return `
					<p>${elementOrValue}</p>
				`
		});
		$('#page10 .text-left.text').html(htmlTextLeft);
		$('#page10 .text-right.text').html(htmlTextRight);
		setTimeout(() => {
			gsap.set('#page10 .text p', {
				opacity: 1
			});
			gsap.from('#page10 .text-left.text p', {
				stagger: .1,
				y: 100,
				duration: 1,
				ease: Back.easeInOut,

			});
			gsap.from('#page10 .text-right.text p', {
				stagger: .1,
				y: 100,
				duration: 1,
				ease: Back.easeInOut
			});
		}, 7500);

	});
}

handleNavagation();
function page12() {
	const projects = $('#page12 .container .projects');
	const project = $('#page12 .container .project:not(:first)');

	const preview = $('#page12 .preview');
	const previewImg = $('#page12 .preview .preview-img');
	const container = $('#page12 .container');
	container.on('mouseenter', function (e) {
		gsap.to(preview, {
			scale: 1,
			duration: .4
		})
		gsap.set('#cursor',{
			background:'white',
			color:"black"
			// scale:0
		})
	});
	container.on('mouseleave', function (e) {
		gsap.to(preview, {
			scale: 0,
			duration: .4
		})
		gsap.set('#cursor', {
			background: 'black',
			scale: 1
		})
		gsap.set('#cursor',{
			innerHTML:"",
		})
	});
	container.on('mousemove', function (e) {
		gsap.to(preview, {
			x: e.pageX - 756,
			y: e.pageY - 2000,
			scale: 1,
			duration: .4
		});

	});
	const valueImage = 101;
	project.on('mouseenter', function () {
		let currentIndex = $(this).index() - 1;
		let currentPosition = currentIndex * valueImage;
		gsap.to(previewImg, {
			duration: .5,
			y: `${-currentPosition}%`,
			ease: Power1.easeInOut
		});
		gsap.to($(this).find('.client'),{
			opacity:.5,
			x:-20,
			ease:Expo.easeInOut
		});
		gsap.to($(this).find('.year'),{
			opacity:.5,
			x:20,
			ease:Expo.easeInOut
		});
		gsap.set('#cursor',{
			innerHTML:currentIndex + 1,
		})
	})
	project.on('mouseleave', function () {
		gsap.to($(this).find('.client'),{
			opacity:1,
			x:0,
			ease:Expo.easeInOut
		});
		gsap.to($(this).find('.year'),{
			opacity:1,
			x:0,
			ease:Expo.easeInOut
		});
		
	})
}

page12();
function page11() {
	const container = $("#page11 .container");
	const page = $("#page11");
	const items = $("#page11 .container .gallery .item");
	const gallery = $("#page11 .container .gallery");
	const spans = $("#page11 .hero-coppy p span");
	const p = $("#page11 .hero-coppy p");
	const numberOfItem = items.length;
	const radius = 250;
	items.each((index, item) => {
		const angleIncrement = (2 * Math.PI * index) / numberOfItem;
		item.style.left = `${radius * Math.cos(angleIncrement) + 250}px`;
		item.style.top = `${radius * Math.sin(angleIncrement) + 250}px`;
	});
	spans.on('mouseenter', function () {
		gsap.to(items, {
			duration: .3,
			opacity: 1,
		})
		gsap.to(page, {
			duration: .5,
			background: "black"
		})
		gsap.to($('#cursor'), {
			duration: .3,
			background: "white"
		})
		gsap.to($('p'), {
			duration: .3,
			color: "white"
		})
	})
	spans.on('mousemove', function (e) {
		gsap.to(gallery, {
			x: `${(e.clientX - gallery.width() / 2) - 250}px`,
			y: `${(e.clientY - gallery.height() / 2) - 260}px`
		})


	});
	spans.on('mouseleave', function () {
		gsap.to(items, {
			duration: .3,
			opacity: 0
		})
		gsap.to(page, {
			duration: .5,
			background: "white"
		})
		gsap.to($('#cursor'), {
			duration: .3,
			background: "black"
		})
		gsap.to($('p'), {
			duration: .3,
			color: "black"
		})
	})


}
page11();
function page14() {
	
	// gsap.from("#page14 h2 div", {
	// 	duration: 1.5,
	// 	yPercent: 100,
	// 	ease: Power4.easeInOut,
	// 	stagger: {
	// 		amount: .5
	// 	}
	// })
	// gsap.to("h2", {
	// 	duration: 1.5,
	// 	clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
	// 	ease: Power4.easeInOut,
	// 	stagger: {
	// 		amount: .5
	// 	}
	// })
	$("#page14 .overlay .magneto").on('click', function () {
		gsap.to("#page14 .overlay .magneto",{
			scale:0,
		})
		gsap.to("#page14 h2 div", {
			yPercent: -100,
			duration: 1.5,
			ease: Power4.easeInOut,
			stagger: {
				amount: .5
			}
		})
		gsap.to("#page14 h2", {
			duration: 1.5,
			clipPath: "polygon(0 85%,100% 85%,100% 100%,0 100%)",
			ease: Power4.easeInOut,
			stagger: {
				amount: .5
			}
		})
		gsap.to("#page14 .overlay", {
			duration: 2,
			clipPath: "polygon(0% 0%,100% 0%,100% 0%,0 0%)",
			ease: Power4.easeInOut,
			
		})
		gsap.to("#page14 .loader .img", {
			duration: 2,
			clipPath: "polygon(0% 100%,100% 100%,100% 0%,0 0%)",
			ease: Power4.easeInOut,
			stagger: {
				amount: 1.5
			}
		})
		gsap.to("#page14 .loader", {
			duration: 2,
			clipPath: "polygon(0% 0%,100% 0%,100% 0%,0 0%)",
			ease: Power4.easeInOut,
			delay:2
		});
		
	});
	$("#page14").on('mouseenter',function(){
		gsap.to("#cursor",{
			background:"white"
		})
	})
	$("#page14").on('mouseleave',function(){
		gsap.to("#cursor",{
			background:"black"
		})
	})
}
page14();
function page20(){
	const page20 = $("#main-3");
	page20.on("mouseenter",function(){
		gsap.to("#cursor",{
			duration:1,
			background:"white"
		})
	});
	page20.on("mouseleave",function(){
		gsap.to("#cursor",{
			duration:1,
			background:"black"
		})
	});
}
page20();