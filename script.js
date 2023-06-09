(function() {
	
	var Progress = function( element ) {
		
		this.context = element.getContext( "2d" );
		this.refElement = element.parentNode;
		this.loaded = 0;
		this.start = 4.72;
		this.width = this.context.canvas.width;
		this.height = this.context.canvas.height;
		this.total = parseInt( this.refElement.dataset.percent, 10 );
		this.timer = null;
		
		this.diff = 0;
		
		this.init();	
	};
	
	Progress.prototype = {
		init: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.run();	
			}, 25);
		},
		run: function() {
			var self = this;
			
			self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 2 );	
			self.context.clearRect( 0, 0, self.width, self.height );
			self.context.lineWidth = 4;
			self.context.fillStyle = "#000";
			self.context.strokeStyle = "#D6AC4B";
			self.context.textAlign = "center";
			
			self.context.fillText( self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width );
			self.context.beginPath();
			self.context.arc( 35, 35, 30, self.start, self.diff / 10 + self.start, false );
			self.context.stroke();
			
			if( self.loaded >= self.total ) {
				clearInterval( self.timer );
			}
			
			self.loaded++;
		}
	};
	
	var CircularSkillBar = function( elements ) {
		this.bars = document.querySelectorAll( elements );
		if( this.bars.length > 0 ) {
			this.init();
		}	
	};
	
	CircularSkillBar.prototype = {
		init: function() {
			this.tick = 25;
			this.progress();
			
		},
		progress: function() {
			var self = this;
			var index = 0;
			var firstCanvas = self.bars[0].querySelector( "canvas" );
			var firstProg = new Progress( firstCanvas );
			
			
			
			var timer = setInterval(function() {
				index++;
					
				var canvas = self.bars[index].querySelector( "canvas" );
				var prog = new Progress( canvas );
				
				if( index == self.bars.length ) {
						clearInterval( timer );
				} 
				
			}, self.tick * 10);
				
		}
	};
var button = document.getElementById("softs");
  
		document.addEventListener( "DOMContentLoaded", function() {
		var circularBars = new CircularSkillBar( "#hbars .hbar" );
	});
})();


$(document).ready(function () { 
	$("#hards").click(function(){
		$(".sbar")
            .filter(function(){ return ! $(this).is(":active"); })
            .fadeOut(200, function(){
				$('.hbar,.hbars').fadeIn(300);
			});
			$('#softs').removeClass("bactive");
			$('#hards').addClass("bactive");		
	});
});


function myBtn(e){
	document.getElementById("btn").style.display = "flex";
	document.getElementById("close").style.display = "flex";
	document.getElementById("open").style.display = "none";
  }
  function myBtne(e){
	document.getElementById("btn").style.display = "none";
	document.getElementById("close").style.display = "none";
	document.getElementById("open").style.display = "flex";
  }
  function myLi(e){
	let a = document.getElementById("btn");
	a.style.display = "none";
	document.getElementById("close").style.display = "none";
	document.getElementById("open").style.display = "flex";
  }
