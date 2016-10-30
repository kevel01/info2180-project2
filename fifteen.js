window.onload = function(){
	var puzzle = document.getElementById("puzzlearea");
	var pieces = puzzle.children;
	var positionTop = 0;
	var positionLeft = 0;
	var backgroundLeft = 0;
	var backgroundTop = 0;
	var emptyTop = 300;
	var emptyLeft = 300;
	var oldTop;
	var oldLeft;
	var shufflePiece;
	var shuffles = [];
	var shuffleTimes = 1000;
	
	for(var i=0; i < pieces.length; i++){
		pieces[i].className = "puzzlepiece";
		pieces[i].style.top =  positionTop + "px";
		pieces[i].style.left = positionLeft + "px";
		pieces[i].style.backgroundPosition = backgroundLeft + "px " + backgroundTop + "px";
		pieces[i].onclick= move;
		pieces[i].onmouseover= movable;

		if(positionLeft < 300){
			positionLeft = positionLeft + 100;
			backgroundLeft = backgroundLeft - 100;
		}
		else{
			positionLeft = 0;
			backgroundLeft = 0;
			positionTop = positionTop + 100;
			backgroundTop = backgroundTop - 100;
		}	
	}

	function move(){
		oldTop = parseInt(this.style.top);
		oldLeft = parseInt(this.style.left);
		if (oldTop == emptyTop && oldLeft == (emptyLeft-100) || oldTop == emptyTop && oldLeft == (emptyLeft+100) || oldTop == (emptyTop-100) && oldLeft == emptyLeft || oldTop == (emptyTop+100) && oldLeft == emptyLeft){
			this.style.top = emptyTop + "px";
			this.style.left = emptyLeft + "px";
			emptyTop = oldTop;
			emptyLeft = oldLeft;
		}
	}

	function movable(){
		oldTop = parseInt(this.style.top);
		oldLeft = parseInt(this.style.left);
		if (oldTop == emptyTop && oldLeft == (emptyLeft-100) || oldTop == emptyTop && oldLeft == (emptyLeft+100) || oldTop == (emptyTop-100) && oldLeft == emptyLeft || oldTop == (emptyTop+100) && oldLeft == emptyLeft){
			$(this).addClass('movablepiece');	
		}
		else{
			$(this).removeClass("movablepiece");
		}
	}

	function Shuffle(){
		for(var c = 0; c < shuffleTimes; c++){
			var choice = Math.floor (Math.random () * 4);
			console.log(choice);
			if ( choice == 0) {
				(getStyle((emptyTop-100)+"px", emptyLeft+"px"))|| getStyle((emptyTop+100)+"px", emptyLeft+"px");
				oldTop = parseInt(shufflePiece.style.top);
 				oldLeft = parseInt(shufflePiece.style.left);
 				shufflePiece.style.top = emptyTop + "px";
 				shufflePiece.style.left = emptyLeft + "px";
				emptyTop = oldTop;
 				emptyLeft = oldLeft;
 			}
			else if ( choice == 1) {
 				(getStyle(emptyTop+"px", (emptyLeft-100)+"px")) || getStyle(emptyTop+"px", (emptyLeft + 100)+"px");
				oldTop = parseInt(shufflePiece.style.top);
				oldLeft = parseInt(shufflePiece.style.left);
				shufflePiece.style.top = emptyTop + "px";
				shufflePiece.style.left = emptyLeft + "px";
				emptyTop = oldTop;
				emptyLeft = oldLeft;
			}
			else if ( choice == 2) {
				getStyle((emptyTop+100)+"px", emptyLeft+"px") || (getStyle((emptyTop-100)+"px", emptyLeft+"px"));
				oldTop = parseInt(shufflePiece.style.top);
				oldLeft = parseInt(shufflePiece.style.left);
				shufflePiece.style.top = emptyTop + "px";
				shufflePiece.style.left = emptyLeft + "px";
				emptyTop = oldTop;
				emptyLeft = oldLeft;
			}
 			else {
				getStyle(emptyTop+"px", (emptyLeft + 100)+"px") || (getStyle(emptyTop+"px", (emptyLeft-100)+"px"));
				oldTop = parseInt(shufflePiece.style.top);
				oldLeft = parseInt(shufflePiece.style.left);
				shufflePiece.style.top = emptyTop + "px";
				shufflePiece.style.left = emptyLeft + "px";
				emptyTop = oldTop;
				emptyLeft = oldLeft;
			}
		}	
	}
	function getStyle(top, left){
		for(var i =0; i < pieces.length; i++){
			if(pieces[i].style.top==top && pieces[i].style.left==left){
				shufflePiece = pieces[i];
				return shufflePiece;		
			}
		}
	}
	document.getElementById("controls").onclick = Shuffle; 
}