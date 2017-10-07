// Motion Bars
// ** jQuery

$(document).ready(function(){

	// jQuery Selectors
	// var header = $("#header"),    // jQuery ID
	//     h1 = $("h1"),             // jQuery tag
	//     intro = $(".intro"),      // jQuery class
	//     firstItem = $("li:first-child"),    // jQuery first item
	//     secondItem = $("li:nth-child(2)"),    // jQuery second item
	//     lastItem = $("li:last-child");      // jQuery last item

  // Motion Bars
	var leftGreyBars = document.getElementById('leftGreyBars'),
	    rightGreyBars = document.getElementById('rightGreyBars'),
	    leftColorBars = document.getElementById('leftColorBars'),
	    rightColorBars = document.getElementById('rightColorBars'),
      text = $('.subheading'),
      pics = $('.services-icon .circle'),
      loader = $('.services-icon'),
      barsTl,
      loaderTl,
      i = 0;


	//barsTlmax = new TimelineMax();

	barsTl = new TimelineLite( {paused: true} );
  barsTl
    .to(leftGreyBars, 0.5, {opacity:1.0, ease:Power3.easeOut, delay:0 })
    .to(rightGreyBars, 0.5, {opacity:1.0, ease:Power3.easeOut}, '+=1' )
    .add('text')

    .from(leftGreyBars, 2, {x:-315, ease:Back.easeOut.config(2)}, '+=1' )
    .from(rightGreyBars, 3, {x:1277, ease:Back.easeOut.config(2), onStart: onStart }, '+=1' )
    .from(leftColorBars, 1.5, {x:40, y:95, autoAlpha:0.0, delay:1.75, ease:Back.easeOut.config(1.4)}, '+=1' )
    .from(rightColorBars, 2, {x:668, y:-80, autoAlpha:0.0, delay:1.25, ease:Back.easeOut.config(1.7)}, '+=1' )
    .from(text, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=1' )

  ;

  loaderTl = new TimelineLite( {onComplete: loadContent} );
  loaderTl
		.staggerFrom(
      pics, 1, {cycle: {
        x: [50, -50],
        scale: [2, 0.5]},
        autoAlpha: 0, ease:Power1.easeOut},
    2 )
		.fromTo(loader, 0.3,
			{autoAlpha: 0, scale: 1.3},
			{autoAlpha: 1, scale: 1, ease:Power0.easeNone},
			0.9
		)
  ;



  //barsTl.pause();


  // Start MotionBars
	var controller = new ScrollMagic.Controller();

	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.anim-bars',
		//triggerElement: this.children[0]
		triggerHook: 0,
    reverse: false
	})
	//.setTween(barsTl)
  .addIndicators({
    name: 'anim scene',
    colorTrigger: 'black'
  })
	.addTo(controller);


  var pinHeaderScene = new ScrollMagic.Scene({
		triggerElement: '.anim-bars',
    duration: '160',
		triggerHook: 0
	})
	.setClassToggle('.anim-bars', 'parallax')
  .setPin('.anim-bars', {pushFollowers: false} )
	.addTo(controller);


  /*$(.project).each(function() {

  });*/

	function onStart(){
		console.log('animation started');
	}

	function onUpdate(){
		//console.log('animation is in progress');
		//h2.text(i++);
	}

	function onComplete(){
		console.log('animation completed');
	}

	function loadContent(){
		console.log('bring on the content');
		var tlLoaderOut = new TimelineLite( {onComplete: contentIn} );
		tlLoaderOut
			.set(pics, {backgroundColor: '#2b4d66'})
			.to(loader, 0.3, {autoAlpha: 1, scale: 1.3, ease:Power0.easeNone})
			.staggerFromTo(pics, 0.3,
				{y: 0, autoAlpha: 0},
				{y: 20, autoAlpha: 1, ease:Back.easeInOut},
				0.05, 0
			)
			.to(loader, 0.3, {y: -150, autoAlpha: 0, ease:Back.easeIn}, '+=0.3')
			;

	}

  function contentIn() {
    barsTl.play();
  }

});
