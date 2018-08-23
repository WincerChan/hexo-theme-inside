module.exports = function () {
  let id = this.theme.ga;

  return id ?

`<script>window.ga=function(e=0,t=0,n=window,a=document,i=navigator){var g=n.screen,o=encodeURIComponent,r=["ga=${id}","dt="+o(a.title),"dr="+o(a.referrer),"ul="+(i.language||i.browserLanguage||i.userLanguage),"sd="+g.colorDepth+"-bit","sr="+g.width+"x"+g.height,"vp="+Math.max(a.documentElement.clientWidth,n.innerWidth||0)+"x"+Math.max(a.documentElement.clientHeight,n.innerHeight||0),"z="+ +new Date];n.__ga_img=new Image,n.__ga_img.src="https://ga.itswincer.com?"+r.join("&")};</script>`
 : '';
}