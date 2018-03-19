var images = new Array('images/jpg1.jpg','images/jpg2.jpg','images/jpg3.jpg');
var sijak = 0;

document.getElementById("left").onclick=function(){
    alert("left");
    sijak--;
    if(sijak<0)
    sijak =0;
    document.getElementById("myImage").src=images[sijak];
}
document.getElementById("right").onclick=function(){
    alert("right");
    sijak++;
    if(sijak > images.length-1)
    sijak = images.length -1;
    document.getElementById("myImage").src=images[sijak];
}

