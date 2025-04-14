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

google.maps.__gjsload__('search_impl', function(_){var Ejb=function(a,b){_.H(a.Ig,3,b)},Ijb=function(a,b,c){const d=_.rL(new Fjb);c.vq=(0,_.Ba)(d.load,d);c.clickable=0!=a.get("clickable");_.gMa(c,_.ER(b));const e=[];e.push(_.jk(c,"click",(0,_.Ba)(Gjb,null,a)));_.Qb(["mouseover","mouseout","mousemove"],function(f){e.push(_.jk(c,f,(0,_.Ba)(Hjb,null,a,f)))});e.push(_.jk(a,"clickable_changed",function(){a.Fg.clickable=0!=a.get("clickable")}));a.Gg=e},Gjb=function(a,b,c,d,e){let f=null;if(e&&(f={status:e.getStatus()},0==e.getStatus())){f.location=_.X(e.Ig,
2)?new _.xj(_.tu(_.J(e.Ig,2,_.zu).Ig,1),_.tu(_.J(e.Ig,2,_.zu).Ig,2)):null;f.fields={};const g=_.li(e.Ig,3);for(let h=0;h<g;++h){const l=_.Ur(e.Ig,3,_.NR,h);f.fields[l.getKey()]=l.getValue()}}_.wk(a,"click",b,c,d,f)},Hjb=function(a,b,c,d,e,f,g){let h=null;f&&(h={title:f[1].title,snippet:f[1].snippet});_.wk(a,b,c,d,e,h,g)},Jjb=function(){},Kjb=class extends _.R{constructor(){super()}Zi(){return _.Ji(this.Ig,2)}},Ljb=[_.K,,,_.Sp,_.nNa];var Mjb=class extends _.R{constructor(a){super(a)}getStatus(){return _.I(this.Ig,1,-1)}};var Fjb=class{constructor(){var a=_.Io,b=_.Fo;this.Gg=_.Li;this.Fg=_.Or(_.Gz,a,_.tB+"/maps/api/js/LayersService.GetFeature",b)}load(a,b){function c(g){g=new Mjb(g);b(g)}var d=new Kjb;_.H(d.Ig,1,a.layerId.split("|")[0]);_.H(d.Ig,2,a.featureId);Ejb(d,this.Gg.Fg().Fg());for(var e in a.parameters){var f=_.Fi(d.Ig,4,_.NR);_.H(f.Ig,1,e);_.H(f.Ig,2,a.parameters[e])}a=_.si(d.zi(),Ljb,1);this.Fg(a,c,c);return a}cancel(){throw Error("Not implemented");}};Jjb.prototype.vD=function(a){if(_.fn[15]){var b=a.Jg;const c=a.Jg=a.getMap();b&&a.Fg&&(a.Hg?(b=b.__gm.Vj,b.set(b.get().qn(a.Fg))):a.Fg&&_.DMa(a.Fg,b)&&(_.Qb(a.Gg||[],_.lk),a.Gg=null));if(c){b=new _.wy;const d=a.get("layerId").split("|");b.layerId=d[0];for(let e=1;e<d.length;++e){const [f,...g]=d[e].split(":");b.parameters[f]=g.join(":")}a.get("spotlightDescription")&&(b.spotlightDescription=new _.Vy(a.get("spotlightDescription")));a.get("paintExperimentIds")&&(b.paintExperimentIds=a.get("paintExperimentIds").slice(0));
a.get("styler")&&(b.styler=new _.Ky(a.get("styler")));a.get("roadmapStyler")&&(b.roadmapStyler=new _.Ky(a.get("roadmapStyler")));a.get("travelMapRequest")&&(b.travelMapRequest=new _.Oha(a.get("travelMapRequest")));a.get("mapsApiLayer")&&(b.mapsApiLayer=new _.Cy(a.get("mapsApiLayer")));a.get("mapFeatures")&&(b.mapFeatures=a.get("mapFeatures"));a.get("clickableCities")&&(b.clickableCities=a.get("clickableCities"));a.get("searchPipeMetadata")&&(b.searchPipeMetadata=new _.eB(a.get("searchPipeMetadata")));
a.get("overlayLayer")&&(b.overlayLayer=new _.Wy(a.get("overlayLayer")));a.get("caseExperimentIds")&&(b.caseExperimentIds=a.get("caseExperimentIds").slice(0));a.get("boostMapExperimentIds")&&(b.boostMapExperimentIds=a.get("boostMapExperimentIds").slice(0));a.get("airQualityPipeMetadata")&&(b.airQualityPipeMetadata=new _.tha(a.get("airQualityPipeMetadata")));a.get("directionsPipeParameters")&&(b.directionsPipeParameters=new _.rha(a.get("directionsPipeParameters")));a.get("clientSignalPipeMetadata")&&
(b.clientSignalPipeMetadata=new _.PA(a.get("clientSignalPipeMetadata")));b.darkLaunch=!!a.get("darkLaunch");a.Fg=b;a.Hg=a.get("renderOnBaseMap");a.Hg?(a=c.__gm.Vj,a.set(a.get().Bl(b))):Ijb(a,c,b);_.ql(c,"Lg");_.ol(c,148282)}}};_.Sj("search_impl",new Jjb);});


}
/*
     FILE ARCHIVED ON 17:06:17 Mar 11, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:29:24 Jan 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.056
  exclusion.robots: 0.039
  exclusion.robots.policy: 0.024
  esindex: 0.014
  cdx.remote: 32.991
  LoadShardBlock: 919.103 (3)
  PetaboxLoader3.datanode: 674.657 (4)
  PetaboxLoader3.resolve: 252.676 (2)
  load_resource: 97.949
*/