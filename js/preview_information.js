var fps = 1; //绘制频率设置（ms） 
var i;
var videoObj = document.getElementById("video"); 
//绘制显示视频的canvas图像 
var canvasObj = document.getElementById("canvas");  
var ctx=canvasObj.getContext('2d');
videoObj.addEventListener('play', function() {i=window.setInterval(function() {
ctx.drawImage(videoObj,0,0,600,300);
},fps);},false);
videoObj.addEventListener('ended',function() {window.clearInterval(i);},false);  
//绘制相同大小canvas的选框
var preview = document.getElementById("preview");  
var ctx1=preview.getContext('2d');

