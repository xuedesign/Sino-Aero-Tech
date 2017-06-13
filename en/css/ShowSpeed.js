var slideShowSpeed = 500 
var xOp7=false,xOp5or6=false,xIE4Up=false,xNN4=false,xUA=navigator.userAgent.toLowerCase(); 
if(window.opera){ 
  xOp7=(xUA.indexOf('opera 7')!=-1 || xUA.indexOf('opera/7')!=-1); 
  if (!xOp7) xOp5or6=(xUA.indexOf('opera 5')!=-1 || xUA.indexOf('opera/5')!=-1 || xUA.indexOf('opera 6')!=-1 || xUA.indexOf('opera/6')!=-1); 
} 
else if(document.layers) xNN4=true; 
else {xIE4Up=document.all && xUA.indexOf('msie')!=-1 && parseInt(navigator.appVersion)>=4;} 
 
var crossFadeDuration = 3 
 
var Pic = new Array() 
Pic[0] = 'img/0.png' 
Pic[1] = 'img/1.png' 
Pic[2] = 'img/2.png' 
Pic[3] = 'img/3.png' 
Pic[4] = 'img/4.png' 
Pic[5] = 'img/5.png' 
Pic[6] = 'img/6.png' 
Pic[7] = 'img/7.png' 
Pic[8] = 'img/8.png' 
Pic[9] = 'img/9.png' 
Pic[10] = 'img/10.png' 
Pic[11] = 'img/11.png' 



var t 
var j = 0 
var p = Pic.length 
var pos = j 
 
var preLoad = new Array() 
 
function preLoadPic(index) 
{ 
        if (Pic[index] != ''){ 
                window.status='Loading : '+Pic[index] 
                preLoad[index] = new Image() 
                preLoad[index].src = Pic[index] 
                Pic[index] = '' 
                window.status='' 
        } 
} 
 
function runSlideShow(){ 
   if (xIE4Up){ 
            document.images.SlideShow.style.filter="blendTrans(duration=2)" 
                document.images.SlideShow.style.filter= "blendTrans(duration=crossFadeDuration)" 
      document.images.SlideShow.filters.blendTrans.Apply() 
        } 
        document.images.SlideShow.src = preLoad[j].src 
        if (xIE4Up){ 
           document.images.SlideShow.filters.blendTrans.Play() 
        } 
 
        pos = j 
 
        j = j + 1 
        if (j > (p-1)) j=0 
        t = setTimeout('runSlideShow()', slideShowSpeed) 
        preLoadPic(j) 
} 
preLoadPic(j) 


