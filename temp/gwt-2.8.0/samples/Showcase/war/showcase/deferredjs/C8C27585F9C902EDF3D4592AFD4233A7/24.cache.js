$wnd.showcase.runAsyncCallback24("function qqb(a){this.a=a}\nfunction sqb(a){this.a=a}\nfunction uqb(a){this.a=a}\nfunction zqb(a,b){this.a=a;this.b=b}\nfunction eUb(a){return JIb(),a.hb}\nfunction iUb(a,b){bUb(a,b);ep((JIb(),a.hb),b)}\nfunction AIb(){var a;if(!xIb||DIb()){a=new yfc;CIb(a);xIb=a}return xIb}\nfunction DIb(){var a=$doc.cookie;if(a!=yIb){yIb=a;return true}else{return false}}\nfunction ep(b,c){try{b.remove(c)}catch(a){b.removeChild(b.childNodes[c])}}\nfunction EIb(a){zIb&&(a=encodeURIComponent(a));$doc.cookie=a+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}\nfunction nqb(a){var b,c,d,e;if(eUb(a.c).options.length<1){nWb(a.a,'');nWb(a.b,'');return}e=eUb(a.c).selectedIndex;b=fUb(a.c,e);c=(d=AIb(),BO(b==null?Gac(Qfc(d.d,null)):egc(d.e,b)));nWb(a.a,b);nWb(a.b,c)}\nfunction mqb(a,b){var c,d,e,f,g,h;eh(a.c).options.length=0;h=0;e=new Vbc(AIb());for(d=(g=e.a.Vh().fc(),new $bc(g));d.a.Og();){c=(f=xO(d.a.Pg(),36),BO(f._h()));aUb(a.c,c);k8b(c,b)&&(h=eh(a.c).options.length-1)}sm((lm(),km),new zqb(a,h))}\nfunction CIb(b){var c=$doc.cookie;if(c&&c!=''){var d=c.split('; ');for(var e=d.length-1;e>=0;--e){var f,g;var h=d[e].indexOf('=');if(h==-1){f=d[e];g=''}else{f=d[e].substring(0,h);g=d[e].substring(h+1)}if(zIb){try{f=decodeURIComponent(f)}catch(a){}try{g=decodeURIComponent(g)}catch(a){}}b.Xh(f,g)}}}\nfunction lqb(a){var b,c,d;c=new iSb(3,3);a.c=new kUb;b=new SLb('Supprimer');Dh((JIb(),b.hb),Poc,true);DRb(c,0,0,'<b><b>Cookies existants:<\\/b><\\/b>');GRb(c,0,1,a.c);GRb(c,0,2,b);a.a=new wWb;DRb(c,1,0,'<b><b>Nom:<\\/b><\\/b>');GRb(c,1,1,a.a);a.b=new wWb;d=new SLb('Sauvegarder Cookie');Dh(d.hb,Poc,true);DRb(c,2,0,'<b><b>Valeur:<\\/b><\\/b>');GRb(c,2,1,a.b);GRb(c,2,2,d);Kh(d,new qqb(a),(Gt(),Gt(),Ft));Kh(a.c,new sqb(a),(zt(),zt(),yt));Kh(b,new uqb(a),(null,Ft));mqb(a,null);return c}\nn8(466,1,Hlc,qqb);_.Sc=function rqb(a){var b,c,d;c=jWb(this.a.a);d=jWb(this.a.b);b=new nN(L7(R7((new lN).q.getTime()),Wpc));if(c.length<1){$wnd.alert('Vous devez indiquer un nom de cookie');return}FIb(c,d,b);mqb(this.a,c)};var EZ=s7b(Vlc,'CwCookies/1',466);n8(467,1,Ilc,sqb);_.Rc=function tqb(a){nqb(this.a)};var FZ=s7b(Vlc,'CwCookies/2',467);n8(468,1,Hlc,uqb);_.Sc=function vqb(a){var b,c;c=eh(this.a.c).selectedIndex;if(c>-1&&c<eh(this.a.c).options.length){b=fUb(this.a.c,c);EIb(b);iUb(this.a.c,c);nqb(this.a)}};var GZ=s7b(Vlc,'CwCookies/3',468);n8(469,1,Qlc);_.Bc=function yqb(){Hab(this.b,lqb(this.a))};n8(470,1,{},zqb);_.Dc=function Aqb(){this.b<eh(this.a.c).options.length&&jUb(this.a.c,this.b);nqb(this.a)};_.b=0;var IZ=s7b(Vlc,'CwCookies/5',470);var xIb=null,yIb;Kic(zl)(24);\n//# sourceURL=showcase-24.js\n")