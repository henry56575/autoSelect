var fps = 1; //绘制频率设置（ms） 
var i;
var videoObj = document.getElementById("video");  
var canvasObj = document.getElementById("canvas");  
ctx=canvasObj.getContext('2d');
videoObj.addEventListener('play', function() {i=window.setInterval(function() {
ctx.drawImage(videoObj,0,0,600,300);
var img = document.getElementById("myImg");
img.src = canvasObj.toDataURL("image/png");  
},fps);},false);

videoObj.addEventListener('ended',function() {window.clearInterval(i);},false);  

$("#video").on('canplay',function(){
	$("#location").val(function(){	
				return $('#video')[0].src;
	});
});

$("#video").on('pause',function(){
	$("#btn1").click(function(){
		
		$("#startTime").val(function(){
			   return Math.floor($('#video')[0].currentTime);
			}  
		);

		$('#video')[0].currentTime=$("#startTime").val();
	});

	$("#btn2").click(function(){

		$("#endTime").val(function(){
			   return Math.floor($('#video')[0].currentTime);
			} 
		);

		$('#video')[0].currentTime=$("#endTime").val();
		
	});
	
});

