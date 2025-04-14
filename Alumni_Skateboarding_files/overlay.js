var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

google.maps.__gjsload__('overlay', function(_){var MD=function(a){this.Fg=a},Fma=function(){},ND=function(a){a.Rx=a.Rx||new Fma;return a.Rx},Gma=function(a){this.Eh=new _.Qm(()=>{const b=a.Rx;if(a.getPanes()){if(a.getProjection()){if(!b.mw&&a.onAdd)a.onAdd();b.mw=!0;a.draw()}}else{if(b.mw)if(a.onRemove)a.onRemove();else a.remove();b.mw=!1}},0)},Hma=function(a,b){const c=ND(a);let d=c.wv;d||(d=c.wv=new Gma(a));_.Qb(c.Rh||[],_.lk);var e=c.ki=c.ki||new _.lia;const f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");
e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);e=c.GB=c.GB||new MD(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=()=>_.Rm(d.Eh);c.Rh=[_.jk(a,"panes_changed",e),_.jk(f,"zoom_changed",e),_.jk(f,"offset_changed",e),_.jk(b,"projection_changed",e),_.jk(f,"projectioncenterq_changed",e)];_.Rm(d.Eh);b instanceof _.Gk?(_.ql(b,"Ox"),_.ol(b,148440)):b instanceof _.Ml&&(_.ql(b,"Oxs"),
_.ol(b,181451))},Mma=function(a){if(a){var b=a.getMap();if(Ima(a)!==b&&b&&b instanceof _.Gk){const c=b.__gm;c.overlayLayer?a.__gmop=new Jma(b,a,c.overlayLayer):c.Gg.then(({lh:d})=>{const e=new Kma(b,d);d.Ai(e);c.overlayLayer=e;Lma(a);Mma(a)})}}},Lma=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.Fg.unbindAll(),b.Fg.set("panes",null),b.Fg.set("projection",null),b.Hg.rl(b),b.Gg&&(b.Gg=!1,b.Fg.onRemove?b.Fg.onRemove():b.Fg.remove()))}},Ima=function(a){return(a=a.__gmop)?a.map:null},Nma=function(a,
b){a.Fg.get("projection")!=b&&(a.Fg.bindTo("panes",a.map.__gm),a.Fg.set("projection",b))};_.Ia(MD,_.Ak);MD.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.Wi(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.Fg:null))};var OD={};_.Ia(Gma,_.Ak);OD.Vk=function(a){if(a){var b=a.getMap();(ND(a).pB||null)!==b&&(b&&Hma(a,b),ND(a).pB=b)}};OD.rl=function(a){const b=ND(a);var c=b.ki;c&&c.unbindAll();(c=b.GB)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Rh&&_.Qb(b.Rh,_.lk);b.Rh=null;b.wv&&(b.wv.Eh.Dj(),b.wv=null);delete ND(a).pB};var PD={},Jma=class{constructor(a,b,c){this.map=a;this.Fg=b;this.Hg=c;this.Gg=!1;_.ql(this.map,"Ox");_.ol(this.map,148440);c.Vk(this)}draw(){this.Gg||(this.Gg=!0,this.Fg.onAdd&&this.Fg.onAdd());this.Fg.draw&&this.Fg.draw()}},Kma=class{constructor(a,b){this.Jg=a;this.Hg=b;this.Fg=null;this.Gg=[]}dispose(){}Ri(a,b,c,d,e,f,g,h){const l=this.Fg=this.Fg||new _.BB(this.Jg,this.Hg,()=>{});l.Ri(a,b,c,d,e,f,g,h);for(const n of this.Gg)Nma(n,l),n.draw()}Vk(a){this.Gg.push(a);this.Fg&&Nma(a,this.Fg);this.Hg.refresh()}rl(a){_.Ub(this.Gg,
a)}};PD.Vk=Mma;PD.rl=Lma;_.Sj("overlay",{Iz:function(a){if(a){(0,OD.rl)(a);(0,PD.rl)(a);var b=a.getMap();b&&(b instanceof _.Gk?(0,PD.Vk)(a):(0,OD.Vk)(a))}},preventMapHitsFrom:a=>{_.Wv(a,{Ok:({event:b})=>{_.Dt(b.Kh)},Yj:b=>_.Fv(b),Ep:b=>_.Gv(b),Pk:b=>_.Gv(b),lk:b=>_.Hv(b)}).cr(!0)},preventMapHitsAndGesturesFrom:a=>{a.addEventListener("click",_.hk);a.addEventListener("contextmenu",_.hk);a.addEventListener("dblclick",_.hk);a.addEventListener("mousedown",_.hk);a.addEventListener("mousemove",_.hk);a.addEventListener("MSPointerDown",
_.hk);a.addEventListener("pointerdown",_.hk);a.addEventListener("touchstart",_.hk);a.addEventListener("wheel",_.hk)}});});


}
/*
     FILE ARCHIVED ON 17:06:17 Mar 11, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:29:22 Jan 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.491
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 9.195
  LoadShardBlock: 569.358 (3)
  PetaboxLoader3.datanode: 713.619 (4)
  load_resource: 295.523
  PetaboxLoader3.resolve: 136.655
*/