(self["webpackChunknest_admin"]=self["webpackChunknest_admin"]||[]).push([[585],{73689:function(e,t,i){var o=i(82109),r=Math.ceil,n=Math.floor;o({target:"Math",stat:!0},{trunc:function(e){return(e>0?n:r)(e)}})},75276:function(e,t,i){"use strict";i.d(t,{AK:function(){return c}});i(41539),i(74916),i(15306),i(18264),i(82472),i(92990),i(18927),i(33105),i(35035),i(74345),i(7174),i(32846),i(44731),i(77209),i(96319),i(58867),i(37789),i(33739),i(29368),i(14483),i(12056),i(3462),i(30678),i(27462),i(33824),i(55021),i(12974),i(15016),i(9653),i(56977),i(23123),i(24603),i(39714),i(4723),i(78783),i(33948),i(60285),i(41637),i(29253),i(92222),i(64765);var o=i(73396),r=i(87139),n=i(49242),s={getData:function(e){return new Promise((function(t,i){var o={};(function(e){var t=null;return new Promise((function(i,o){if(e.src)if(/^data\:/i.test(e.src))t=function(e){e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var t=atob(e),i=t.length,o=new ArrayBuffer(i),r=new Uint8Array(o),n=0;n<i;n++)r[n]=t.charCodeAt(n);return o}(e.src),i(t);else if(/^blob\:/i.test(e.src)){var r=new FileReader;r.onload=function(e){t=e.target.result,i(t)},function(e,t){var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="blob",i.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},i.send()}(e.src,(function(e){r.readAsArrayBuffer(e)}))}else{var n=new XMLHttpRequest;n.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";t=n.response,i(t),n=null},n.open("GET",e.src,!0),n.responseType="arraybuffer",n.send(null)}else o("img error")}))})(e).then((function(e){o.arrayBuffer=e,o.orientation=function(e){var t,i,o,r,n,s,c,a,h,p=new DataView(e),u=p.byteLength;if(255===p.getUint8(0)&&216===p.getUint8(1))for(a=2;a<u;){if(255===p.getUint8(a)&&225===p.getUint8(a+1)){s=a;break}a++}if(s&&(i=s+10,"Exif"===function(e,t,i){var o,r="";for(o=t,i+=t;o<i;o++)r+=String.fromCharCode(e.getUint8(o));return r}(p,s+4,4)&&((r=18761===(n=p.getUint16(i)))||19789===n)&&42===p.getUint16(i+2,r)&&(o=p.getUint32(i+4,r))>=8&&(c=i+o)),c)for(u=p.getUint16(c,r),h=0;h<u;h++)if(a=c+12*h+2,274===p.getUint16(a,r)){a+=8,t=p.getUint16(a,r);break}return t}(e),t(o)})).catch((function(e){i(e)}))}))}},c=(0,o.aZ)({data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:function(){return 10}}},computed:{cropInfo:function(){var e={};if(e.top=this.cropOffsertY>21?"-21px":"0px",e.width=this.cropW>0?this.cropW:0,e.height=this.cropH>0?this.cropH:0,this.infoTrue){var t=1;this.high&&!this.full&&(t=window.devicePixelRatio),1!==this.enlarge&!this.full&&(t=Math.abs(Number(this.enlarge))),e.width=e.width*t,e.height=e.height*t,this.full&&(e.width=e.width/this.scale,e.height=e.height/this.scale)}return e.width=e.width.toFixed(0),e.height=e.height.toFixed(0),e},isIE:function(){return!!window.ActiveXObject||"ActiveXObject"in window},passive:function(){return this.isIE?null:{passive:!1}}},watch:{img:function(){this.checkedImg()},imgs:function(e){""!==e&&this.reload()},cropW:function(){this.showPreview()},cropH:function(){this.showPreview()},cropOffsertX:function(){this.showPreview()},cropOffsertY:function(){this.showPreview()},scale:function(e,t){this.showPreview()},x:function(){this.showPreview()},y:function(){this.showPreview()},autoCrop:function(e){e&&this.goAutoCrop()},autoCropWidth:function(){this.autoCrop&&this.goAutoCrop()},autoCropHeight:function(){this.autoCrop&&this.goAutoCrop()},mode:function(){this.checkedImg()},rotate:function(){this.showPreview(),(this.autoCrop||this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion:function(e){for(var t=navigator.userAgent.split(" "),i="",o=0,r=new RegExp(e,"i"),n=0;n<t.length;n++)r.test(t[n])&&(i=t[n]);return o=i?i.split("/")[1].split("."):["0","0","0"],o},checkOrientationImage:function(e,t,i,o){var r=this;if(this.getVersion("chrome")[0]>=81)t=-1;else if(this.getVersion("safari")[0]>=605){var n=this.getVersion("version");n[0]>13&&n[1]>1&&(t=-1)}else{var s=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(s){var c=s[1];c=c.split("_"),(c[0]>13||c[0]>=13&&c[1]>=4)&&(t=-1)}}var a=document.createElement("canvas"),h=a.getContext("2d");switch(h.save(),t){case 2:a.width=i,a.height=o,h.translate(i,0),h.scale(-1,1);break;case 3:a.width=i,a.height=o,h.translate(i/2,o/2),h.rotate(180*Math.PI/180),h.translate(-i/2,-o/2);break;case 4:a.width=i,a.height=o,h.translate(0,o),h.scale(1,-1);break;case 5:a.height=i,a.width=o,h.rotate(.5*Math.PI),h.scale(1,-1);break;case 6:a.width=o,a.height=i,h.translate(o/2,i/2),h.rotate(90*Math.PI/180),h.translate(-i/2,-o/2);break;case 7:a.height=i,a.width=o,h.rotate(.5*Math.PI),h.translate(i,-o),h.scale(-1,1);break;case 8:a.height=i,a.width=o,h.translate(o/2,i/2),h.rotate(-90*Math.PI/180),h.translate(-i/2,-o/2);break;default:a.width=i,a.height=o}h.drawImage(e,0,0,i,o),h.restore(),a.toBlob((function(e){var t=URL.createObjectURL(e);URL.revokeObjectURL(r.imgs),r.imgs=t}),"image/"+this.outputType,1)},checkedImg:function(){var e=this;if(null===this.img||""===this.img)return this.imgs="",void this.clearCrop();this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();var t=new Image;if(t.onload=function(){if(""===e.img)return e.$emit("imgLoad","error"),e.$emit("img-load","error"),!1;var i=t.width,o=t.height;s.getData(t).then((function(r){e.orientation=r.orientation||1;var n=Number(e.maxImgSize);!e.orientation&&i<n&o<n?e.imgs=e.img:(i>n&&(o=o/i*n,i=n),o>n&&(i=i/o*n,o=n),e.checkOrientationImage(t,e.orientation,i,o))}))},t.onerror=function(){e.$emit("imgLoad","error"),e.$emit("img-load","error")},"data"!==this.img.substr(0,4)&&(t.crossOrigin=""),this.isIE){var i=new XMLHttpRequest;i.onload=function(){var e=URL.createObjectURL(this.response);t.src=e},i.open("GET",this.img,!0),i.responseType="blob",i.send()}else t.src=this.img},startMove:function(e){if(e.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=("clientX"in e?e.clientX:e.touches[0].clientX)-this.x,this.moveY=("clientY"in e?e.clientY:e.touches[0].clientY)-this.y,e.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),2==e.touches.length&&(this.touches=e.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=e.offsetX?e.offsetX:e.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=e.offsetY?e.offsetY:e.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in e?e.clientX:e.touches[0].clientX,this.cropY="clientY"in e?e.clientY:e.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale:function(e){var t=this;e.preventDefault();var i=this.scale,o=this.touches[0].clientX,r=this.touches[0].clientY,n=e.touches[0].clientX,s=e.touches[0].clientY,c=this.touches[1].clientX,a=this.touches[1].clientY,h=e.touches[1].clientX,p=e.touches[1].clientY,u=Math.sqrt(Math.pow(o-c,2)+Math.pow(r-a,2)),l=Math.sqrt(Math.pow(n-h,2)+Math.pow(s-p,2))-u,g=1,f=(g=(g=g/this.trueWidth>g/this.trueHeight?g/this.trueHeight:g/this.trueWidth)>.1?.1:g)*l;if(!this.touchNow){if(this.touchNow=!0,l>0?i+=Math.abs(f):l<0&&i>Math.abs(f)&&(i-=Math.abs(f)),this.touches=e.touches,setTimeout((function(){t.touchNow=!1}),8),!this.checkoutImgAxis(this.x,this.y,i))return!1;this.scale=i}},cancelTouchScale:function(e){window.removeEventListener("touchmove",this.touchScale)},moveImg:function(e){var t=this;if(e.preventDefault(),e.touches&&2===e.touches.length)return this.touches=e.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;var i,o,r="clientX"in e?e.clientX:e.touches[0].clientX,n="clientY"in e?e.clientY:e.touches[0].clientY;i=r-this.moveX,o=n-this.moveY,this.$nextTick((function(){if(t.centerBox){var e,r,n,s,c=t.getImgAxis(i,o,t.scale),a=t.getCropAxis(),h=t.trueHeight*t.scale,p=t.trueWidth*t.scale;switch(t.rotate){case 1:case-1:case 3:case-3:e=t.cropOffsertX-t.trueWidth*(1-t.scale)/2+(h-p)/2,r=t.cropOffsertY-t.trueHeight*(1-t.scale)/2+(p-h)/2,n=e-h+t.cropW,s=r-p+t.cropH;break;default:e=t.cropOffsertX-t.trueWidth*(1-t.scale)/2,r=t.cropOffsertY-t.trueHeight*(1-t.scale)/2,n=e-p+t.cropW,s=r-h+t.cropH}c.x1>=a.x1&&(i=e),c.y1>=a.y1&&(o=r),c.x2<=a.x2&&(i=n),c.y2<=a.y2&&(o=s)}t.x=i,t.y=o,t.$emit("imgMoving",{moving:!0,axis:t.getImgAxis()}),t.$emit("img-moving",{moving:!0,axis:t.getImgAxis()})}))},leaveImg:function(e){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("imgMoving",{moving:!1,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg:function(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale:function(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize:function(e){var t=this;e.preventDefault();var i=this.scale,o=e.deltaY||e.wheelDelta;o=navigator.userAgent.indexOf("Firefox")>0?30*o:o,this.isIE&&(o=-o);var r=this.coe,n=(r=r/this.trueWidth>r/this.trueHeight?r/this.trueHeight:r/this.trueWidth)*o;n<0?i+=Math.abs(n):i>Math.abs(n)&&(i-=Math.abs(n));var s=n<0?"add":"reduce";if(s!==this.coeStatus&&(this.coeStatus=s,this.coe=.2),this.scaling||(this.scalingSet=setTimeout((function(){t.scaling=!1,t.coe=t.coe+=.01}),50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,i))return!1;this.scale=i},changeScale:function(e){var t=this.scale;e=e||1;var i=20;if((e*=i=i/this.trueWidth>i/this.trueHeight?i/this.trueHeight:i/this.trueWidth)>0?t+=Math.abs(e):t>Math.abs(e)&&(t-=Math.abs(e)),!this.checkoutImgAxis(this.x,this.y,t))return!1;this.scale=t},createCrop:function(e){var t=this;e.preventDefault();var i="clientX"in e?e.clientX:e.touches?e.touches[0].clientX:0,o="clientY"in e?e.clientY:e.touches?e.touches[0].clientY:0;this.$nextTick((function(){var e=i-t.cropX,r=o-t.cropY;if(e>0?(t.cropW=e+t.cropChangeX>t.w?t.w-t.cropChangeX:e,t.cropOffsertX=t.cropChangeX):(t.cropW=t.w-t.cropChangeX+Math.abs(e)>t.w?t.cropChangeX:Math.abs(e),t.cropOffsertX=t.cropChangeX+e>0?t.cropChangeX+e:0),t.fixed){var n=t.cropW/t.fixedNumber[0]*t.fixedNumber[1];n+t.cropOffsertY>t.h?(t.cropH=t.h-t.cropOffsertY,t.cropW=t.cropH/t.fixedNumber[1]*t.fixedNumber[0],t.cropOffsertX=e>0?t.cropChangeX:t.cropChangeX-t.cropW):t.cropH=n,t.cropOffsertY=t.cropOffsertY}else r>0?(t.cropH=r+t.cropChangeY>t.h?t.h-t.cropChangeY:r,t.cropOffsertY=t.cropChangeY):(t.cropH=t.h-t.cropChangeY+Math.abs(r)>t.h?t.cropChangeY:Math.abs(r),t.cropOffsertY=t.cropChangeY+r>0?t.cropChangeY+r:0)}))},changeCropSize:function(e,t,i,o,r){e.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=t,this.canChangeY=i,this.changeCropTypeX=o,this.changeCropTypeY=r,this.cropX="clientX"in e?e.clientX:e.touches[0].clientX,this.cropY="clientY"in e?e.clientY:e.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow:function(e){var t=this;e.preventDefault();var i="clientX"in e?e.clientX:e.touches?e.touches[0].clientX:0,o="clientY"in e?e.clientY:e.touches?e.touches[0].clientY:0,r=this.w,n=this.h,s=0,c=0;if(this.centerBox){var a=this.getImgAxis(),h=a.x2,p=a.y2;s=a.x1>0?a.x1:0,c=a.y1>0?a.y1:0,r>h&&(r=h),n>p&&(n=p)}this.$nextTick((function(){var e=i-t.cropX,a=o-t.cropY;if(t.canChangeX&&(1===t.changeCropTypeX?t.cropOldW-e>0?(t.cropW=r-t.cropChangeX-e<=r-s?t.cropOldW-e:t.cropOldW+t.cropChangeX-s,t.cropOffsertX=r-t.cropChangeX-e<=r-s?t.cropChangeX+e:s):(t.cropW=Math.abs(e)+t.cropChangeX<=r?Math.abs(e)-t.cropOldW:r-t.cropOldW-t.cropChangeX,t.cropOffsertX=t.cropChangeX+t.cropOldW):2===t.changeCropTypeX&&(t.cropOldW+e>0?(t.cropW=t.cropOldW+e+t.cropOffsertX<=r?t.cropOldW+e:r-t.cropOffsertX,t.cropOffsertX=t.cropChangeX):(t.cropW=r-t.cropChangeX+Math.abs(e+t.cropOldW)<=r-s?Math.abs(e+t.cropOldW):t.cropChangeX-s,t.cropOffsertX=r-t.cropChangeX+Math.abs(e+t.cropOldW)<=r-s?t.cropChangeX-Math.abs(e+t.cropOldW):s))),t.canChangeY&&(1===t.changeCropTypeY?t.cropOldH-a>0?(t.cropH=n-t.cropChangeY-a<=n-c?t.cropOldH-a:t.cropOldH+t.cropChangeY-c,t.cropOffsertY=n-t.cropChangeY-a<=n-c?t.cropChangeY+a:c):(t.cropH=Math.abs(a)+t.cropChangeY<=n?Math.abs(a)-t.cropOldH:n-t.cropOldH-t.cropChangeY,t.cropOffsertY=t.cropChangeY+t.cropOldH):2===t.changeCropTypeY&&(t.cropOldH+a>0?(t.cropH=t.cropOldH+a+t.cropOffsertY<=n?t.cropOldH+a:n-t.cropOffsertY,t.cropOffsertY=t.cropChangeY):(t.cropH=n-t.cropChangeY+Math.abs(a+t.cropOldH)<=n-c?Math.abs(a+t.cropOldH):t.cropChangeY-c,t.cropOffsertY=n-t.cropChangeY+Math.abs(a+t.cropOldH)<=n-c?t.cropChangeY-Math.abs(a+t.cropOldH):c))),t.canChangeX&&t.fixed){var h=t.cropW/t.fixedNumber[0]*t.fixedNumber[1];h+t.cropOffsertY>n?(t.cropH=n-t.cropOffsertY,t.cropW=t.cropH/t.fixedNumber[1]*t.fixedNumber[0]):t.cropH=h}if(t.canChangeY&&t.fixed){var p=t.cropH/t.fixedNumber[1]*t.fixedNumber[0];p+t.cropOffsertX>r?(t.cropW=r-t.cropOffsertX,t.cropH=t.cropW/t.fixedNumber[0]*t.fixedNumber[1]):t.cropW=p}}))},checkCropLimitSize:function(){var e=this.cropW,t=this.cropH,i=this.limitMinSize,o=new Array;return o=Array.isArray[i]?i:[i,i],e=parseFloat(o[0]),t=parseFloat(o[1]),[e,t]},changeCropEnd:function(e){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},endCrop:function(){0===this.cropW&&0===this.cropH&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop:function(){this.crop=!0},stopCrop:function(){this.crop=!1},clearCrop:function(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove:function(e){if(e.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(e),!1;if(e.touches&&2===e.touches.length)return this.crop=!1,this.startMove(e),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);var t,i,o="clientX"in e?e.clientX:e.touches[0].clientX,r="clientY"in e?e.clientY:e.touches[0].clientY;t=o-this.cropOffsertX,i=r-this.cropOffsertY,this.cropX=t,this.cropY=i,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop:function(e,t){var i=this,o=0,r=0;e&&(e.preventDefault(),o="clientX"in e?e.clientX:e.touches[0].clientX,r="clientY"in e?e.clientY:e.touches[0].clientY),this.$nextTick((function(){var e,n,s=o-i.cropX,c=r-i.cropY;if(t&&(s=i.cropOffsertX,c=i.cropOffsertY),e=s<=0?0:s+i.cropW>i.w?i.w-i.cropW:s,n=c<=0?0:c+i.cropH>i.h?i.h-i.cropH:c,i.centerBox){var a=i.getImgAxis();e<=a.x1&&(e=a.x1),e+i.cropW>a.x2&&(e=a.x2-i.cropW),n<=a.y1&&(n=a.y1),n+i.cropH>a.y2&&(n=a.y2-i.cropH)}i.cropOffsertX=e,i.cropOffsertY=n,i.$emit("cropMoving",{moving:!0,axis:i.getCropAxis()}),i.$emit("crop-moving",{moving:!0,axis:i.getCropAxis()})}))},getImgAxis:function(e,t,i){e=e||this.x,t=t||this.y,i=i||this.scale;var o={x1:0,x2:0,y1:0,y2:0},r=this.trueWidth*i,n=this.trueHeight*i;switch(this.rotate){case 0:o.x1=e+this.trueWidth*(1-i)/2,o.x2=o.x1+this.trueWidth*i,o.y1=t+this.trueHeight*(1-i)/2,o.y2=o.y1+this.trueHeight*i;break;case 1:case-1:case 3:case-3:o.x1=e+this.trueWidth*(1-i)/2+(r-n)/2,o.x2=o.x1+this.trueHeight*i,o.y1=t+this.trueHeight*(1-i)/2+(n-r)/2,o.y2=o.y1+this.trueWidth*i;break;default:o.x1=e+this.trueWidth*(1-i)/2,o.x2=o.x1+this.trueWidth*i,o.y1=t+this.trueHeight*(1-i)/2,o.y2=o.y1+this.trueHeight*i}return o},getCropAxis:function(){var e={x1:0,x2:0,y1:0,y2:0};return e.x1=this.cropOffsertX,e.x2=e.x1+this.cropW,e.y1=this.cropOffsertY,e.y2=e.y1+this.cropH,e},leaveCrop:function(e){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("cropMoving",{moving:!1,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked:function(e){var t=this,i=document.createElement("canvas"),o=new Image,r=this.rotate,n=this.trueWidth,s=this.trueHeight,c=this.cropOffsertX,a=this.cropOffsertY;function h(e,t){i.width=Math.round(e),i.height=Math.round(t)}o.onload=function(){if(0!==t.cropW){var p=i.getContext("2d"),u=1;t.high&!t.full&&(u=window.devicePixelRatio),1!==t.enlarge&!t.full&&(u=Math.abs(Number(t.enlarge)));var l=t.cropW*u,g=t.cropH*u,f=n*t.scale*u,d=s*t.scale*u,m=(t.x-c+t.trueWidth*(1-t.scale)/2)*u,v=(t.y-a+t.trueHeight*(1-t.scale)/2)*u;switch(h(l,g),p.save(),r){case 0:t.full?(h(l/t.scale,g/t.scale),p.drawImage(o,m/t.scale,v/t.scale,f/t.scale,d/t.scale)):p.drawImage(o,m,v,f,d);break;case 1:case-3:t.full?(h(l/t.scale,g/t.scale),m=m/t.scale+(f/t.scale-d/t.scale)/2,v=v/t.scale+(d/t.scale-f/t.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(o,v,-m-d/t.scale,f/t.scale,d/t.scale)):(m+=(f-d)/2,v+=(d-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(o,v,-m-d,f,d));break;case 2:case-2:t.full?(h(l/t.scale,g/t.scale),p.rotate(90*r*Math.PI/180),m/=t.scale,v/=t.scale,p.drawImage(o,-m-f/t.scale,-v-d/t.scale,f/t.scale,d/t.scale)):(p.rotate(90*r*Math.PI/180),p.drawImage(o,-m-f,-v-d,f,d));break;case 3:case-1:t.full?(h(l/t.scale,g/t.scale),m=m/t.scale+(f/t.scale-d/t.scale)/2,v=v/t.scale+(d/t.scale-f/t.scale)/2,p.rotate(90*r*Math.PI/180),p.drawImage(o,-v-f/t.scale,m,f/t.scale,d/t.scale)):(m+=(f-d)/2,v+=(d-f)/2,p.rotate(90*r*Math.PI/180),p.drawImage(o,-v-f,m,f,d));break;default:t.full?(h(l/t.scale,g/t.scale),p.drawImage(o,m/t.scale,v/t.scale,f/t.scale,d/t.scale)):p.drawImage(o,m,v,f,d)}p.restore()}else{var w=n*t.scale,C=s*t.scale,x=i.getContext("2d");switch(x.save(),r){case 0:h(w,C),x.drawImage(o,0,0,w,C);break;case 1:case-3:h(C,w),x.rotate(90*r*Math.PI/180),x.drawImage(o,0,-C,w,C);break;case 2:case-2:h(w,C),x.rotate(90*r*Math.PI/180),x.drawImage(o,-w,-C,w,C);break;case 3:case-1:h(C,w),x.rotate(90*r*Math.PI/180),x.drawImage(o,-w,0,w,C);break;default:h(w,C),x.drawImage(o,0,0,w,C)}x.restore()}e(i)},"data"!==this.img.substr(0,4)&&(o.crossOrigin="Anonymous"),o.src=this.imgs},getCropData:function(e){var t=this;this.getCropChecked((function(i){e(i.toDataURL("image/"+t.outputType,t.outputSize))}))},getCropBlob:function(e){var t=this;this.getCropChecked((function(i){i.toBlob((function(t){return e(t)}),"image/"+t.outputType,t.outputSize)}))},showPreview:function(){var e=this;if(!this.isCanShow)return!1;this.isCanShow=!1,setTimeout((function(){e.isCanShow=!0}),16);var t=this.cropW,i=this.cropH,o=this.scale,r={};r.div={width:"".concat(t,"px"),height:"".concat(i,"px")};var n=(this.x-this.cropOffsertX)/o,s=(this.y-this.cropOffsertY)/o;r.w=t,r.h=i,r.url=this.imgs,r.img={width:"".concat(this.trueWidth,"px"),height:"".concat(this.trueHeight,"px"),transform:"scale(".concat(o,")translate3d(").concat(n,"px, ").concat(s,"px, 0px)rotateZ(").concat(90*this.rotate,"deg)")},r.html='\n      <div class="show-preview" style="width: '.concat(r.w,"px; height: ").concat(r.h,'px,; overflow: hidden">\n        <div style="width: ').concat(t,"px; height: ").concat(i,'px">\n          <img src=').concat(r.url,' style="width: ').concat(this.trueWidth,"px; height: ").concat(this.trueHeight,"px; transform:\n          scale(").concat(o,")translate3d(").concat(n,"px, ").concat(s,"px, 0px)rotateZ(").concat(90*this.rotate,'deg)">\n        </div>\n      </div>'),this.$emit("realTime",r),this.$emit("real-time",r)},reload:function(){var e=this,t=new Image;t.onload=function(){e.w=parseFloat(window.getComputedStyle(e.$refs.cropper).width),e.h=parseFloat(window.getComputedStyle(e.$refs.cropper).height),e.trueWidth=t.width,e.trueHeight=t.height,e.original?e.scale=1:e.scale=e.checkedMode(),e.$nextTick((function(){e.x=-(e.trueWidth-e.trueWidth*e.scale)/2+(e.w-e.trueWidth*e.scale)/2,e.y=-(e.trueHeight-e.trueHeight*e.scale)/2+(e.h-e.trueHeight*e.scale)/2,e.loading=!1,e.autoCrop&&e.goAutoCrop(),e.$emit("img-load","success"),e.$emit("imgLoad","success"),setTimeout((function(){e.showPreview()}),20)}))},t.onerror=function(){e.$emit("imgLoad","error"),e.$emit("img-load","error")},t.src=this.imgs},checkedMode:function(){var e=1,t=this.trueWidth,i=this.trueHeight,o=this.mode.split(" ");switch(o[0]){case"contain":this.trueWidth>this.w&&(e=this.w/this.trueWidth),this.trueHeight*e>this.h&&(e=this.h/this.trueHeight);break;case"cover":t=this.w,e=t/this.trueWidth,i*=e,i<this.h&&(i=this.h,e=i/this.trueHeight);break;default:try{var r=o[0];if(-1!==r.search("px")){r=r.replace("px",""),t=parseFloat(r);var n=t/this.trueWidth,s=1,c=o[1];-1!==c.search("px")&&(c=c.replace("px",""),i=parseFloat(c),s=i/this.trueHeight),e=Math.min(n,s)}if(-1!==r.search("%")&&(r=r.replace("%",""),t=parseFloat(r)/100*this.w,e=t/this.trueWidth),2===o.length&&"auto"===r){var a=o[1];-1!==a.search("px")&&(a=a.replace("px",""),i=parseFloat(a),e=i/this.trueHeight),-1!==a.search("%")&&(a=a.replace("%",""),i=parseFloat(a)/100*this.h,e=i/this.trueHeight)}}catch(h){e=1}}return e},goAutoCrop:function(e,t){if(""!==this.imgs&&null!==this.imgs){this.clearCrop(),this.cropping=!0;var i=this.w,o=this.h;if(this.centerBox){var r=Math.abs(this.rotate)%2>0,n=(r?this.trueHeight:this.trueWidth)*this.scale,s=(r?this.trueWidth:this.trueHeight)*this.scale;i=n<i?n:i,o=s<o?s:o}var c=e||parseFloat(this.autoCropWidth),a=t||parseFloat(this.autoCropHeight);0!==c&&0!==a||(c=.8*i,a=.8*o),c=c>i?i:c,a=a>o?o:a,this.fixed&&(a=c/this.fixedNumber[0]*this.fixedNumber[1]),a>this.h&&(c=(a=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(c,a)}},changeCrop:function(e,t){var i=this;if(this.centerBox){var o=this.getImgAxis();e>o.x2-o.x1&&(t=(e=o.x2-o.x1)/this.fixedNumber[0]*this.fixedNumber[1]),t>o.y2-o.y1&&(e=(t=o.y2-o.y1)/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=e,this.cropH=t,this.checkCropLimitSize(),this.$nextTick((function(){i.cropOffsertX=(i.w-i.cropW)/2,i.cropOffsertY=(i.h-i.cropH)/2,i.centerBox&&i.moveCrop(null,!0)}))},refresh:function(){var e=this;this.img,this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick((function(){e.checkedImg()}))},rotateLeft:function(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight:function(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear:function(){this.rotate=0},checkoutImgAxis:function(e,t,i){e=e||this.x,t=t||this.y,i=i||this.scale;var o=!0;if(this.centerBox){var r=this.getImgAxis(e,t,i),n=this.getCropAxis();r.x1>=n.x1&&(o=!1),r.x2<=n.x2&&(o=!1),r.y1>=n.y1&&(o=!1),r.y2<=n.y2&&(o=!1)}return o}},mounted:function(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";var e=this,t=navigator.userAgent;this.isIOS=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(t,i,o){for(var r=atob(this.toDataURL(i,o).split(",")[1]),n=r.length,s=new Uint8Array(n),c=0;c<n;c++)s[c]=r.charCodeAt(c);t(new Blob([s],{type:e.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},destroyed:function(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale()}});(0,o.dD)("data-v-48aab112");var a={key:0,class:"cropper-box"},h=["src"],p={class:"cropper-view-box"},u=["src"],l={key:1};(0,o.Cn)(),c.render=function(e,t,i,s,c,g){return(0,o.wg)(),(0,o.iD)("div",{class:"vue-cropper",ref:"cropper",onMouseover:t[28]||(t[28]=function(){return e.scaleImg&&e.scaleImg.apply(e,arguments)}),onMouseout:t[29]||(t[29]=function(){return e.cancelScale&&e.cancelScale.apply(e,arguments)})},[e.imgs?((0,o.wg)(),(0,o.iD)("div",a,[(0,o.wy)((0,o._)("div",{class:"cropper-box-canvas",style:(0,r.j5)({width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+e.x/e.scale+"px,"+e.y/e.scale+"px,0)rotateZ("+90*e.rotate+"deg)"})},[(0,o._)("img",{src:e.imgs,alt:"cropper-img",ref:"cropperImg"},null,8,h)],4),[[n.F8,!e.loading]])])):(0,o.kq)("",!0),(0,o._)("div",{class:(0,r.C_)(["cropper-drag-box",{"cropper-move":e.move&&!e.crop,"cropper-crop":e.crop,"cropper-modal":e.cropping}]),onMousedown:t[0]||(t[0]=function(){return e.startMove&&e.startMove.apply(e,arguments)}),onTouchstart:t[1]||(t[1]=function(){return e.startMove&&e.startMove.apply(e,arguments)})},null,34),(0,o.wy)((0,o._)("div",{class:"cropper-crop-box",style:(0,r.j5)({width:e.cropW+"px",height:e.cropH+"px",transform:"translate3d("+e.cropOffsertX+"px,"+e.cropOffsertY+"px,0)"})},[(0,o._)("span",p,[(0,o._)("img",{style:(0,r.j5)({width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+(e.x-e.cropOffsertX)/e.scale+"px,"+(e.y-e.cropOffsertY)/e.scale+"px,0)rotateZ("+90*e.rotate+"deg)"}),src:e.imgs,alt:"cropper-img"},null,12,u)]),(0,o._)("span",{class:"cropper-face cropper-move",onMousedown:t[2]||(t[2]=function(){return e.cropMove&&e.cropMove.apply(e,arguments)}),onTouchstart:t[3]||(t[3]=function(){return e.cropMove&&e.cropMove.apply(e,arguments)})},null,32),e.info?((0,o.wg)(),(0,o.iD)("span",{key:0,class:"crop-info",style:(0,r.j5)({top:e.cropInfo.top})},(0,r.zw)(e.cropInfo.width)+" × "+(0,r.zw)(e.cropInfo.height),5)):(0,o.kq)("",!0),e.fixedBox?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",l,[(0,o._)("span",{class:"crop-line line-w",onMousedown:t[4]||(t[4]=function(t){return e.changeCropSize(t,!1,!0,0,1)}),onTouchstart:t[5]||(t[5]=function(t){return e.changeCropSize(t,!1,!0,0,1)})},null,32),(0,o._)("span",{class:"crop-line line-a",onMousedown:t[6]||(t[6]=function(t){return e.changeCropSize(t,!0,!1,1,0)}),onTouchstart:t[7]||(t[7]=function(t){return e.changeCropSize(t,!0,!1,1,0)})},null,32),(0,o._)("span",{class:"crop-line line-s",onMousedown:t[8]||(t[8]=function(t){return e.changeCropSize(t,!1,!0,0,2)}),onTouchstart:t[9]||(t[9]=function(t){return e.changeCropSize(t,!1,!0,0,2)})},null,32),(0,o._)("span",{class:"crop-line line-d",onMousedown:t[10]||(t[10]=function(t){return e.changeCropSize(t,!0,!1,2,0)}),onTouchstart:t[11]||(t[11]=function(t){return e.changeCropSize(t,!0,!1,2,0)})},null,32),(0,o._)("span",{class:"crop-point point1",onMousedown:t[12]||(t[12]=function(t){return e.changeCropSize(t,!0,!0,1,1)}),onTouchstart:t[13]||(t[13]=function(t){return e.changeCropSize(t,!0,!0,1,1)})},null,32),(0,o._)("span",{class:"crop-point point2",onMousedown:t[14]||(t[14]=function(t){return e.changeCropSize(t,!1,!0,0,1)}),onTouchstart:t[15]||(t[15]=function(t){return e.changeCropSize(t,!1,!0,0,1)})},null,32),(0,o._)("span",{class:"crop-point point3",onMousedown:t[16]||(t[16]=function(t){return e.changeCropSize(t,!0,!0,2,1)}),onTouchstart:t[17]||(t[17]=function(t){return e.changeCropSize(t,!0,!0,2,1)})},null,32),(0,o._)("span",{class:"crop-point point4",onMousedown:t[18]||(t[18]=function(t){return e.changeCropSize(t,!0,!1,1,0)}),onTouchstart:t[19]||(t[19]=function(t){return e.changeCropSize(t,!0,!1,1,0)})},null,32),(0,o._)("span",{class:"crop-point point5",onMousedown:t[20]||(t[20]=function(t){return e.changeCropSize(t,!0,!1,2,0)}),onTouchstart:t[21]||(t[21]=function(t){return e.changeCropSize(t,!0,!1,2,0)})},null,32),(0,o._)("span",{class:"crop-point point6",onMousedown:t[22]||(t[22]=function(t){return e.changeCropSize(t,!0,!0,1,2)}),onTouchstart:t[23]||(t[23]=function(t){return e.changeCropSize(t,!0,!0,1,2)})},null,32),(0,o._)("span",{class:"crop-point point7",onMousedown:t[24]||(t[24]=function(t){return e.changeCropSize(t,!1,!0,0,2)}),onTouchstart:t[25]||(t[25]=function(t){return e.changeCropSize(t,!1,!0,0,2)})},null,32),(0,o._)("span",{class:"crop-point point8",onMousedown:t[26]||(t[26]=function(t){return e.changeCropSize(t,!0,!0,2,2)}),onTouchstart:t[27]||(t[27]=function(t){return e.changeCropSize(t,!0,!0,2,2)})},null,32)]))],4),[[n.F8,e.cropping]])],544)},c.__scopeId="data-v-48aab112","undefined"!=typeof window&&window.Vue&&window.Vue.createApp({}).component("VueCropper",c)}}]);