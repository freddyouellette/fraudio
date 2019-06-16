(function($) {
	var 
		play_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" style="margin-top: -4px;"><path fill="white" stroke="white" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"/></svg>',
		pause_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" style="margin-top: -4px;"><path fill="white" stroke="white" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"/></svg>',
		player = 
		'<div class="fraudio-container">\
			<audio></audio>\
			<div class="fraudio-play-container">\
				<span class="fraudio-play">\
					' + play_icon + '\
				</span>\
			</div>\
			<div class="fraudio-text">\
				<div class="fraudio-title"></div>\
				<div class="fraudio-artist"></div>\
			</div>\
			<div class="fraudio-progress"></div>\
			<div class="fraudio-progress-click"></div>\
		</div>',
		audio_scrubbing = false;
	
	function toggleAudio(audio) {
		$('audio').each(function() {
			if(this != audio) {
				this.pause();
			}
		})
		$(audio).data('played_already', 1);
		$('.fraudio-play').html(play_icon);
		if(audio.paused) {
			$(audio).parent()
				.find('.fraudio-play')
				.html(pause_icon);
			audio.play();
		} else {
			audio.pause();
		}
	}
	
	function calculateScrub(event) {
		if(audio_scrubbing) {
			var leftOffset = audio_scrubbing.offset().left;
			var progress = $(audio_scrubbing.siblings('.fraudio-progress')[0]);
			if(event.pageX < leftOffset) {
				// left of the scrubber
				progress.css('width', 0);
			} else if (event.pageX > leftOffset + audio_scrubbing.width()) {
				// right of the scrubber
				progress.css('width', '100%');
			} else {
				// somewhere inbetween the scrubber
				progress.css('width', event.pageX - leftOffset);
			}
		}
	}
	
	$.fn.fraudio = function() {
		this.filter('audio').each(function() {
			$fraudio = $(player);
			$fraudio.find('audio').replaceWith($(this).clone());
			$fraudio.find('.fraudio-title').html($(this).attr('data-title'));
			$fraudio.find('.fraudio-artist').html($(this).attr('data-artist'));
			
			if($(this).attr('autoplay')) {
				$fraudio.find('audio').data('played_already', 1);
				$fraudio.find('.fraudio-play').html(pause_icon);
			}
			
			$(this).replaceWith($fraudio);
		});
		
		
		$('.fraudio-play').click(function() {
			toggleAudio($(this).closest('.fraudio-container').find('audio')[0]);
		});
		
		$('.fraudio').on('timeupdate', function() {
			if(!audio_scrubbing) {
				var progress = $(this).siblings('.fraudio-progress')[0];
				$(progress).css('width', this.currentTime / this.duration * 100 + '%')
			}
		});
		
		$('audio').on('ended', function() {
			$(this).parent().find('.fraudio-play').html(play_icon);
		});
		
		$('.fraudio-progress-click').on('mousedown', function() {
			var audio = $(this).siblings('audio')[0];
			if(!$(audio).data('played_already')) {
				toggleAudio(audio);
			} else {
				audio_scrubbing = $(this);
			}
		});
		
		$(document).on('mousemove', calculateScrub);
		$(document).on('mouseup mouseleave', function(event) {
			if(audio_scrubbing) {
				calculateScrub(event);
				// they clicked on an audio scrubber, now they're releasing the click
				// when the mouse comes up, set the audio offset
				var audio = audio_scrubbing.siblings('audio')[0];
				audio.currentTime = event.offsetX / audio_scrubbing.width() * audio.duration;
				audio_scrubbing = false;
			}
		});
	}
	
	$(function() {
		$('.fraudio').fraudio();
	});
	
})(jQuery);