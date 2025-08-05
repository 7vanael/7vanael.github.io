// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('c3kit.wire.spec_helper');
goog.require('speclj.core');
goog.require('tic_tac_toe.core');
goog.require('tic_tac_toe.spec_helper');
goog.require('tic_tac_toe.main');
var description__18707__auto___19687 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19525_19688 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19526_19689 = description__18707__auto___19687;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19526_19689);

try{var seq__19527_19690 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,15,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null),c3kit.wire.spec_helper.select.call(null,"#root"));
});})(_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"welcome state",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19609_19694 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19610_19695 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19610_19695);

try{var seq__19611_19696 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19609_19694,_STAR_parent_description_STAR__temp_val__19610_19695,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"welcome","welcome",-578152123),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267)], null));
});})(_STAR_parent_description_STAR__orig_val__19609_19694,_STAR_parent_description_STAR__temp_val__19610_19695,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"renders welcome",((function (_STAR_parent_description_STAR__orig_val__19609_19694,_STAR_parent_description_STAR__temp_val__19610_19695,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___19700 = ".tic-tac-toe-app";
var node__19475__auto___19701 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19700);
if(cljs.core.truth_(node__19475__auto___19701)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19700;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19702 = ".welcome";
var node__19475__auto___19703 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19702);
if(cljs.core.truth_(node__19475__auto___19703)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19702;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".action-button";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19609_19694,_STAR_parent_description_STAR__temp_val__19610_19695,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"progresses from welcome to config-x-type on a click on start button",((function (_STAR_parent_description_STAR__orig_val__19609_19694,_STAR_parent_description_STAR__temp_val__19610_19695,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".action-button");

var value__19474__auto___19704 = ".config-x-type";
var node__19475__auto___19705 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19704);
if(cljs.core.truth_(node__19475__auto___19705)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19704;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".tic-tac-toe-app";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19609_19694,_STAR_parent_description_STAR__temp_val__19610_19695,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19612_19697 = null;
var count__19613_19698 = (0);
var i__19614_19699 = (0);
while(true){
if((i__19614_19699 < count__19613_19698)){
var component__18708__auto___19706 = cljs.core._nth.call(null,chunk__19612_19697,i__19614_19699);
speclj.components.install.call(null,component__18708__auto___19706,description__18707__auto____$1);


var G__19707 = seq__19611_19696;
var G__19708 = chunk__19612_19697;
var G__19709 = count__19613_19698;
var G__19710 = (i__19614_19699 + (1));
seq__19611_19696 = G__19707;
chunk__19612_19697 = G__19708;
count__19613_19698 = G__19709;
i__19614_19699 = G__19710;
continue;
} else {
var temp__5825__auto___19711 = cljs.core.seq.call(null,seq__19611_19696);
if(temp__5825__auto___19711){
var seq__19611_19712__$1 = temp__5825__auto___19711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19611_19712__$1)){
var c__5548__auto___19713 = cljs.core.chunk_first.call(null,seq__19611_19712__$1);
var G__19714 = cljs.core.chunk_rest.call(null,seq__19611_19712__$1);
var G__19715 = c__5548__auto___19713;
var G__19716 = cljs.core.count.call(null,c__5548__auto___19713);
var G__19717 = (0);
seq__19611_19696 = G__19714;
chunk__19612_19697 = G__19715;
count__19613_19698 = G__19716;
i__19614_19699 = G__19717;
continue;
} else {
var component__18708__auto___19718 = cljs.core.first.call(null,seq__19611_19712__$1);
speclj.components.install.call(null,component__18708__auto___19718,description__18707__auto____$1);


var G__19719 = cljs.core.next.call(null,seq__19611_19712__$1);
var G__19720 = null;
var G__19721 = (0);
var G__19722 = (0);
seq__19611_19696 = G__19719;
chunk__19612_19697 = G__19720;
count__19613_19698 = G__19721;
i__19614_19699 = G__19722;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19609_19694);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"config-x-type",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19615_19723 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19616_19724 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19616_19724);

try{var seq__19617_19725 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19615_19723,_STAR_parent_description_STAR__temp_val__19616_19724,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"config-x-type","config-x-type",-785668220),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19615_19723,_STAR_parent_description_STAR__temp_val__19616_19724,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"renders config-x",((function (_STAR_parent_description_STAR__orig_val__19615_19723,_STAR_parent_description_STAR__temp_val__19616_19724,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___19729 = ".config-x-type";
var node__19475__auto___19730 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19729);
if(cljs.core.truth_(node__19475__auto___19730)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19729;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19731 = "div.config-x-type button.action-button";
var node__19475__auto___19732 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19731);
if(cljs.core.truth_(node__19475__auto___19732)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19731;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19733 = ".human";
var node__19475__auto___19734 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19733);
if(cljs.core.truth_(node__19475__auto___19734)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19733;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".computer";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19615_19723,_STAR_parent_description_STAR__temp_val__19616_19724,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets x-type to human if human button clicked",((function (_STAR_parent_description_STAR__orig_val__19615_19723,_STAR_parent_description_STAR__temp_val__19616_19724,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19735 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__18850__auto___19736 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(0),new cljs.core.Keyword(null,"play-type","play-type",519061088)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___19735,actual__18850__auto___19736)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19735;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19736;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19737 = new cljs.core.Keyword(null,"config-o-type","config-o-type",127599360);
var actual__18850__auto___19738 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19737,actual__18850__auto___19738)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19737;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19738;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".config-o-type";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19615_19723,_STAR_parent_description_STAR__temp_val__19616_19724,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets x-type to computer if computer button clicked",((function (_STAR_parent_description_STAR__orig_val__19615_19723,_STAR_parent_description_STAR__temp_val__19616_19724,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".computer");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19739 = new cljs.core.Keyword(null,"computer","computer",-1035300443);
var actual__18850__auto___19740 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(0),new cljs.core.Keyword(null,"play-type","play-type",519061088)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___19739,actual__18850__auto___19740)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19739;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19740;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19741 = new cljs.core.Keyword(null,"config-x-difficulty","config-x-difficulty",-598657456);
var actual__18850__auto___19742 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19741,actual__18850__auto___19742)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19741;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19742;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".config-x-difficulty";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19615_19723,_STAR_parent_description_STAR__temp_val__19616_19724,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19618_19726 = null;
var count__19619_19727 = (0);
var i__19620_19728 = (0);
while(true){
if((i__19620_19728 < count__19619_19727)){
var component__18708__auto___19743 = cljs.core._nth.call(null,chunk__19618_19726,i__19620_19728);
speclj.components.install.call(null,component__18708__auto___19743,description__18707__auto____$1);


var G__19744 = seq__19617_19725;
var G__19745 = chunk__19618_19726;
var G__19746 = count__19619_19727;
var G__19747 = (i__19620_19728 + (1));
seq__19617_19725 = G__19744;
chunk__19618_19726 = G__19745;
count__19619_19727 = G__19746;
i__19620_19728 = G__19747;
continue;
} else {
var temp__5825__auto___19748 = cljs.core.seq.call(null,seq__19617_19725);
if(temp__5825__auto___19748){
var seq__19617_19749__$1 = temp__5825__auto___19748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19617_19749__$1)){
var c__5548__auto___19750 = cljs.core.chunk_first.call(null,seq__19617_19749__$1);
var G__19751 = cljs.core.chunk_rest.call(null,seq__19617_19749__$1);
var G__19752 = c__5548__auto___19750;
var G__19753 = cljs.core.count.call(null,c__5548__auto___19750);
var G__19754 = (0);
seq__19617_19725 = G__19751;
chunk__19618_19726 = G__19752;
count__19619_19727 = G__19753;
i__19620_19728 = G__19754;
continue;
} else {
var component__18708__auto___19755 = cljs.core.first.call(null,seq__19617_19749__$1);
speclj.components.install.call(null,component__18708__auto___19755,description__18707__auto____$1);


var G__19756 = cljs.core.next.call(null,seq__19617_19749__$1);
var G__19757 = null;
var G__19758 = (0);
var G__19759 = (0);
seq__19617_19725 = G__19756;
chunk__19618_19726 = G__19757;
count__19619_19727 = G__19758;
i__19620_19728 = G__19759;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19615_19723);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"config-o-type",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19621_19760 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19622_19761 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19622_19761);

try{var seq__19623_19762 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19621_19760,_STAR_parent_description_STAR__temp_val__19622_19761,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"config-o-type","config-o-type",127599360),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19621_19760,_STAR_parent_description_STAR__temp_val__19622_19761,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"renders config-o-type",((function (_STAR_parent_description_STAR__orig_val__19621_19760,_STAR_parent_description_STAR__temp_val__19622_19761,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___19766 = ".config-o-type";
var node__19475__auto___19767 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19766);
if(cljs.core.truth_(node__19475__auto___19767)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19766;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19768 = "div.config-o-type button.action-button";
var node__19475__auto___19769 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19768);
if(cljs.core.truth_(node__19475__auto___19769)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19768;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19770 = ".human";
var node__19475__auto___19771 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19770);
if(cljs.core.truth_(node__19475__auto___19771)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19770;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".computer";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19621_19760,_STAR_parent_description_STAR__temp_val__19622_19761,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets o-type to human if human button clicked",((function (_STAR_parent_description_STAR__orig_val__19621_19760,_STAR_parent_description_STAR__temp_val__19622_19761,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___19772 = ".human";
var node__19475__auto___19773 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19772);
if(cljs.core.truth_(node__19475__auto___19773)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19772;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19774 = ".o-type";
var node__19475__auto___19775 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19774);
if(cljs.core.truth_(node__19475__auto___19775)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19774;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,".human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto__ = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__18850__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(1),new cljs.core.Keyword(null,"play-type","play-type",519061088)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto__,actual__18850__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19621_19760,_STAR_parent_description_STAR__temp_val__19622_19761,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets x-type to computer if computer button clicked",((function (_STAR_parent_description_STAR__orig_val__19621_19760,_STAR_parent_description_STAR__temp_val__19622_19761,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".computer");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19776 = new cljs.core.Keyword(null,"computer","computer",-1035300443);
var actual__18850__auto___19777 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(1),new cljs.core.Keyword(null,"play-type","play-type",519061088)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___19776,actual__18850__auto___19777)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19776;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19777;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19778 = new cljs.core.Keyword(null,"config-o-difficulty","config-o-difficulty",-517527095);
var actual__18850__auto___19779 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19778,actual__18850__auto___19779)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19778;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19779;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".config-o-difficulty";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19621_19760,_STAR_parent_description_STAR__temp_val__19622_19761,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19624_19763 = null;
var count__19625_19764 = (0);
var i__19626_19765 = (0);
while(true){
if((i__19626_19765 < count__19625_19764)){
var component__18708__auto___19780 = cljs.core._nth.call(null,chunk__19624_19763,i__19626_19765);
speclj.components.install.call(null,component__18708__auto___19780,description__18707__auto____$1);


var G__19781 = seq__19623_19762;
var G__19782 = chunk__19624_19763;
var G__19783 = count__19625_19764;
var G__19784 = (i__19626_19765 + (1));
seq__19623_19762 = G__19781;
chunk__19624_19763 = G__19782;
count__19625_19764 = G__19783;
i__19626_19765 = G__19784;
continue;
} else {
var temp__5825__auto___19785 = cljs.core.seq.call(null,seq__19623_19762);
if(temp__5825__auto___19785){
var seq__19623_19786__$1 = temp__5825__auto___19785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19623_19786__$1)){
var c__5548__auto___19787 = cljs.core.chunk_first.call(null,seq__19623_19786__$1);
var G__19788 = cljs.core.chunk_rest.call(null,seq__19623_19786__$1);
var G__19789 = c__5548__auto___19787;
var G__19790 = cljs.core.count.call(null,c__5548__auto___19787);
var G__19791 = (0);
seq__19623_19762 = G__19788;
chunk__19624_19763 = G__19789;
count__19625_19764 = G__19790;
i__19626_19765 = G__19791;
continue;
} else {
var component__18708__auto___19792 = cljs.core.first.call(null,seq__19623_19786__$1);
speclj.components.install.call(null,component__18708__auto___19792,description__18707__auto____$1);


var G__19793 = cljs.core.next.call(null,seq__19623_19786__$1);
var G__19794 = null;
var G__19795 = (0);
var G__19796 = (0);
seq__19623_19762 = G__19793;
chunk__19624_19763 = G__19794;
count__19625_19764 = G__19795;
i__19626_19765 = G__19796;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19621_19760);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"config-x-difficulty",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19627_19797 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19628_19798 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19628_19798);

try{var seq__19629_19799 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19627_19797,_STAR_parent_description_STAR__temp_val__19628_19798,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"config-x-difficulty","config-x-difficulty",-598657456),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19627_19797,_STAR_parent_description_STAR__temp_val__19628_19798,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"renders config-x-difficulty",((function (_STAR_parent_description_STAR__orig_val__19627_19797,_STAR_parent_description_STAR__temp_val__19628_19798,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___19803 = ".config-x-difficulty";
var node__19475__auto___19804 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19803);
if(cljs.core.truth_(node__19475__auto___19804)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19803;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19805 = "div.config-x-difficulty button.action-button";
var node__19475__auto___19806 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19805);
if(cljs.core.truth_(node__19475__auto___19806)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19805;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19807 = ".easy";
var node__19475__auto___19808 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19807);
if(cljs.core.truth_(node__19475__auto___19808)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19807;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19809 = ".medium";
var node__19475__auto___19810 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19809);
if(cljs.core.truth_(node__19475__auto___19810)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19809;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".hard";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19627_19797,_STAR_parent_description_STAR__temp_val__19628_19798,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets x-difficulty to easy if easy button clicked",((function (_STAR_parent_description_STAR__orig_val__19627_19797,_STAR_parent_description_STAR__temp_val__19628_19798,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".easy");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19811 = new cljs.core.Keyword(null,"easy","easy",315769928);
var actual__18850__auto___19812 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(0),new cljs.core.Keyword(null,"difficulty","difficulty",755680807)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___19811,actual__18850__auto___19812)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19811;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19812;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19813 = new cljs.core.Keyword(null,"config-o-type","config-o-type",127599360);
var actual__18850__auto___19814 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19813,actual__18850__auto___19814)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19813;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19814;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".config-o-type";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19627_19797,_STAR_parent_description_STAR__temp_val__19628_19798,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets x-difficulty to medium if medium button clicked",((function (_STAR_parent_description_STAR__orig_val__19627_19797,_STAR_parent_description_STAR__temp_val__19628_19798,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".medium");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19815 = new cljs.core.Keyword(null,"medium","medium",-1864319384);
var actual__18850__auto___19816 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(0),new cljs.core.Keyword(null,"difficulty","difficulty",755680807)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___19815,actual__18850__auto___19816)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19815;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19816;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19817 = new cljs.core.Keyword(null,"config-o-type","config-o-type",127599360);
var actual__18850__auto___19818 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19817,actual__18850__auto___19818)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19817;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19818;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".config-o-type";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19627_19797,_STAR_parent_description_STAR__temp_val__19628_19798,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets x-difficulty to hard if hard button clicked",((function (_STAR_parent_description_STAR__orig_val__19627_19797,_STAR_parent_description_STAR__temp_val__19628_19798,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".hard");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19819 = new cljs.core.Keyword(null,"hard","hard",2068420191);
var actual__18850__auto___19820 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(0),new cljs.core.Keyword(null,"difficulty","difficulty",755680807)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___19819,actual__18850__auto___19820)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19819;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19820;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19821 = new cljs.core.Keyword(null,"config-o-type","config-o-type",127599360);
var actual__18850__auto___19822 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19821,actual__18850__auto___19822)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19821;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19822;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".config-o-type";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19627_19797,_STAR_parent_description_STAR__temp_val__19628_19798,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19630_19800 = null;
var count__19631_19801 = (0);
var i__19632_19802 = (0);
while(true){
if((i__19632_19802 < count__19631_19801)){
var component__18708__auto___19823 = cljs.core._nth.call(null,chunk__19630_19800,i__19632_19802);
speclj.components.install.call(null,component__18708__auto___19823,description__18707__auto____$1);


var G__19824 = seq__19629_19799;
var G__19825 = chunk__19630_19800;
var G__19826 = count__19631_19801;
var G__19827 = (i__19632_19802 + (1));
seq__19629_19799 = G__19824;
chunk__19630_19800 = G__19825;
count__19631_19801 = G__19826;
i__19632_19802 = G__19827;
continue;
} else {
var temp__5825__auto___19828 = cljs.core.seq.call(null,seq__19629_19799);
if(temp__5825__auto___19828){
var seq__19629_19829__$1 = temp__5825__auto___19828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19629_19829__$1)){
var c__5548__auto___19830 = cljs.core.chunk_first.call(null,seq__19629_19829__$1);
var G__19831 = cljs.core.chunk_rest.call(null,seq__19629_19829__$1);
var G__19832 = c__5548__auto___19830;
var G__19833 = cljs.core.count.call(null,c__5548__auto___19830);
var G__19834 = (0);
seq__19629_19799 = G__19831;
chunk__19630_19800 = G__19832;
count__19631_19801 = G__19833;
i__19632_19802 = G__19834;
continue;
} else {
var component__18708__auto___19835 = cljs.core.first.call(null,seq__19629_19829__$1);
speclj.components.install.call(null,component__18708__auto___19835,description__18707__auto____$1);


var G__19836 = cljs.core.next.call(null,seq__19629_19829__$1);
var G__19837 = null;
var G__19838 = (0);
var G__19839 = (0);
seq__19629_19799 = G__19836;
chunk__19630_19800 = G__19837;
count__19631_19801 = G__19838;
i__19632_19802 = G__19839;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19627_19797);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"config-o-difficulty",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19633_19840 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19634_19841 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19634_19841);

try{var seq__19635_19842 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19633_19840,_STAR_parent_description_STAR__temp_val__19634_19841,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"config-o-difficulty","config-o-difficulty",-517527095),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19633_19840,_STAR_parent_description_STAR__temp_val__19634_19841,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"renders config-o-difficulty",((function (_STAR_parent_description_STAR__orig_val__19633_19840,_STAR_parent_description_STAR__temp_val__19634_19841,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___19846 = ".config-o-difficulty";
var node__19475__auto___19847 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19846);
if(cljs.core.truth_(node__19475__auto___19847)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19846;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19848 = "div.config-o-difficulty button.action-button";
var node__19475__auto___19849 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19848);
if(cljs.core.truth_(node__19475__auto___19849)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19848;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19850 = ".easy";
var node__19475__auto___19851 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19850);
if(cljs.core.truth_(node__19475__auto___19851)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19850;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19852 = ".medium";
var node__19475__auto___19853 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19852);
if(cljs.core.truth_(node__19475__auto___19853)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19852;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".hard";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19633_19840,_STAR_parent_description_STAR__temp_val__19634_19841,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets o-difficulty to easy if easy button clicked",((function (_STAR_parent_description_STAR__orig_val__19633_19840,_STAR_parent_description_STAR__temp_val__19634_19841,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".easy");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19854 = new cljs.core.Keyword(null,"easy","easy",315769928);
var actual__18850__auto___19855 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(1),new cljs.core.Keyword(null,"difficulty","difficulty",755680807)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___19854,actual__18850__auto___19855)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19854;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19855;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19856 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18850__auto___19857 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19856,actual__18850__auto___19857)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19856;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19857;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".select-board";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19633_19840,_STAR_parent_description_STAR__temp_val__19634_19841,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets o-difficulty to medium if medium button clicked",((function (_STAR_parent_description_STAR__orig_val__19633_19840,_STAR_parent_description_STAR__temp_val__19634_19841,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".medium");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19858 = new cljs.core.Keyword(null,"medium","medium",-1864319384);
var actual__18850__auto___19859 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(1),new cljs.core.Keyword(null,"difficulty","difficulty",755680807)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___19858,actual__18850__auto___19859)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19858;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19859;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19860 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18850__auto___19861 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19860,actual__18850__auto___19861)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19860;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19861;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".select-board";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19633_19840,_STAR_parent_description_STAR__temp_val__19634_19841,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets o-difficulty to hard if hard button clicked",((function (_STAR_parent_description_STAR__orig_val__19633_19840,_STAR_parent_description_STAR__temp_val__19634_19841,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".hard");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19862 = new cljs.core.Keyword(null,"hard","hard",2068420191);
var actual__18850__auto___19863 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(1),new cljs.core.Keyword(null,"difficulty","difficulty",755680807)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___19862,actual__18850__auto___19863)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19862;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19863;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19864 = new cljs.core.Keyword(null,"select-board","select-board",-279755643);
var actual__18850__auto___19865 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19864,actual__18850__auto___19865)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19864;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19865;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".select-board";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19633_19840,_STAR_parent_description_STAR__temp_val__19634_19841,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19636_19843 = null;
var count__19637_19844 = (0);
var i__19638_19845 = (0);
while(true){
if((i__19638_19845 < count__19637_19844)){
var component__18708__auto___19866 = cljs.core._nth.call(null,chunk__19636_19843,i__19638_19845);
speclj.components.install.call(null,component__18708__auto___19866,description__18707__auto____$1);


var G__19867 = seq__19635_19842;
var G__19868 = chunk__19636_19843;
var G__19869 = count__19637_19844;
var G__19870 = (i__19638_19845 + (1));
seq__19635_19842 = G__19867;
chunk__19636_19843 = G__19868;
count__19637_19844 = G__19869;
i__19638_19845 = G__19870;
continue;
} else {
var temp__5825__auto___19871 = cljs.core.seq.call(null,seq__19635_19842);
if(temp__5825__auto___19871){
var seq__19635_19872__$1 = temp__5825__auto___19871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19635_19872__$1)){
var c__5548__auto___19873 = cljs.core.chunk_first.call(null,seq__19635_19872__$1);
var G__19874 = cljs.core.chunk_rest.call(null,seq__19635_19872__$1);
var G__19875 = c__5548__auto___19873;
var G__19876 = cljs.core.count.call(null,c__5548__auto___19873);
var G__19877 = (0);
seq__19635_19842 = G__19874;
chunk__19636_19843 = G__19875;
count__19637_19844 = G__19876;
i__19638_19845 = G__19877;
continue;
} else {
var component__18708__auto___19878 = cljs.core.first.call(null,seq__19635_19872__$1);
speclj.components.install.call(null,component__18708__auto___19878,description__18707__auto____$1);


var G__19879 = cljs.core.next.call(null,seq__19635_19872__$1);
var G__19880 = null;
var G__19881 = (0);
var G__19882 = (0);
seq__19635_19842 = G__19879;
chunk__19636_19843 = G__19880;
count__19637_19844 = G__19881;
i__19638_19845 = G__19882;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19633_19840);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"select-board",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19639_19883 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19640_19884 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19640_19884);

try{var seq__19641_19885 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19639_19883,_STAR_parent_description_STAR__temp_val__19640_19884,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655),(0),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19639_19883,_STAR_parent_description_STAR__temp_val__19640_19884,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"renders select-board",((function (_STAR_parent_description_STAR__orig_val__19639_19883,_STAR_parent_description_STAR__temp_val__19640_19884,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___19889 = ".select-board";
var node__19475__auto___19890 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19889);
if(cljs.core.truth_(node__19475__auto___19890)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19889;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19891 = "div.select-board button.action-button";
var node__19475__auto___19892 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19891);
if(cljs.core.truth_(node__19475__auto___19892)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19891;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19893 = ".board-3x3";
var node__19475__auto___19894 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19893);
if(cljs.core.truth_(node__19475__auto___19894)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19893;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".board-4x4";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19639_19883,_STAR_parent_description_STAR__temp_val__19640_19884,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets board to 3x3 if 3x3 button clicked",((function (_STAR_parent_description_STAR__orig_val__19639_19883,_STAR_parent_description_STAR__temp_val__19640_19884,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".board-3x3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19895 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
var actual__18850__auto___19896 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19895,actual__18850__auto___19896)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19895;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19896;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19897 = new cljs.core.Keyword(null,"in-progress","in-progress",2126442630);
var actual__18850__auto___19898 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19897,actual__18850__auto___19898)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19897;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19898;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".in-progress";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19639_19883,_STAR_parent_description_STAR__temp_val__19640_19884,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"sets board to 4x4 if 4x4 button clicked",((function (_STAR_parent_description_STAR__orig_val__19639_19883,_STAR_parent_description_STAR__temp_val__19640_19884,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,".board-4x4");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19899 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6),(7),(8)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11),(12)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(14),(15),(16)], null)], null);
var actual__18850__auto___19900 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19899,actual__18850__auto___19900)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19899;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19900;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19901 = new cljs.core.Keyword(null,"in-progress","in-progress",2126442630);
var actual__18850__auto___19902 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19901,actual__18850__auto___19902)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19901;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19902;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".in-progress";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19639_19883,_STAR_parent_description_STAR__temp_val__19640_19884,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19642_19886 = null;
var count__19643_19887 = (0);
var i__19644_19888 = (0);
while(true){
if((i__19644_19888 < count__19643_19887)){
var component__18708__auto___19903 = cljs.core._nth.call(null,chunk__19642_19886,i__19644_19888);
speclj.components.install.call(null,component__18708__auto___19903,description__18707__auto____$1);


var G__19904 = seq__19641_19885;
var G__19905 = chunk__19642_19886;
var G__19906 = count__19643_19887;
var G__19907 = (i__19644_19888 + (1));
seq__19641_19885 = G__19904;
chunk__19642_19886 = G__19905;
count__19643_19887 = G__19906;
i__19644_19888 = G__19907;
continue;
} else {
var temp__5825__auto___19908 = cljs.core.seq.call(null,seq__19641_19885);
if(temp__5825__auto___19908){
var seq__19641_19909__$1 = temp__5825__auto___19908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19641_19909__$1)){
var c__5548__auto___19910 = cljs.core.chunk_first.call(null,seq__19641_19909__$1);
var G__19911 = cljs.core.chunk_rest.call(null,seq__19641_19909__$1);
var G__19912 = c__5548__auto___19910;
var G__19913 = cljs.core.count.call(null,c__5548__auto___19910);
var G__19914 = (0);
seq__19641_19885 = G__19911;
chunk__19642_19886 = G__19912;
count__19643_19887 = G__19913;
i__19644_19888 = G__19914;
continue;
} else {
var component__18708__auto___19915 = cljs.core.first.call(null,seq__19641_19909__$1);
speclj.components.install.call(null,component__18708__auto___19915,description__18707__auto____$1);


var G__19916 = cljs.core.next.call(null,seq__19641_19909__$1);
var G__19917 = null;
var G__19918 = (0);
var G__19919 = (0);
seq__19641_19885 = G__19916;
chunk__19642_19886 = G__19917;
count__19643_19887 = G__19918;
i__19644_19888 = G__19919;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19639_19883);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"select-board when computer goes first:",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19645_19920 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19646_19921 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19646_19921);

try{var seq__19647_19922 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19645_19920,_STAR_parent_description_STAR__temp_val__19646_19921,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"select-board","select-board",-279755643),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655),(0),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19645_19920,_STAR_parent_description_STAR__temp_val__19646_19921,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
)],null)));
var chunk__19648_19923 = null;
var count__19649_19924 = (0);
var i__19650_19925 = (0);
while(true){
if((i__19650_19925 < count__19649_19924)){
var component__18708__auto___19926 = cljs.core._nth.call(null,chunk__19648_19923,i__19650_19925);
speclj.components.install.call(null,component__18708__auto___19926,description__18707__auto____$1);


var G__19927 = seq__19647_19922;
var G__19928 = chunk__19648_19923;
var G__19929 = count__19649_19924;
var G__19930 = (i__19650_19925 + (1));
seq__19647_19922 = G__19927;
chunk__19648_19923 = G__19928;
count__19649_19924 = G__19929;
i__19650_19925 = G__19930;
continue;
} else {
var temp__5825__auto___19931 = cljs.core.seq.call(null,seq__19647_19922);
if(temp__5825__auto___19931){
var seq__19647_19932__$1 = temp__5825__auto___19931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19647_19932__$1)){
var c__5548__auto___19933 = cljs.core.chunk_first.call(null,seq__19647_19932__$1);
var G__19934 = cljs.core.chunk_rest.call(null,seq__19647_19932__$1);
var G__19935 = c__5548__auto___19933;
var G__19936 = cljs.core.count.call(null,c__5548__auto___19933);
var G__19937 = (0);
seq__19647_19922 = G__19934;
chunk__19648_19923 = G__19935;
count__19649_19924 = G__19936;
i__19650_19925 = G__19937;
continue;
} else {
var component__18708__auto___19938 = cljs.core.first.call(null,seq__19647_19932__$1);
speclj.components.install.call(null,component__18708__auto___19938,description__18707__auto____$1);


var G__19939 = cljs.core.next.call(null,seq__19647_19932__$1);
var G__19940 = null;
var G__19941 = (0);
var G__19942 = (0);
seq__19647_19922 = G__19939;
chunk__19648_19923 = G__19940;
count__19649_19924 = G__19941;
i__19650_19925 = G__19942;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19645_19920);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"in-progress- initial-state",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19651_19943 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19652_19944 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19652_19944);

try{var seq__19653_19945 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655),(0),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"renders in-progress",((function (_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___19949 = ".in-progress";
var node__19475__auto___19950 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19949);
if(cljs.core.truth_(node__19475__auto___19950)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19949;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19951 = "table";
var node__19475__auto___19952 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19951);
if(cljs.core.truth_(node__19475__auto___19952)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19951;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___19953 = "tbody";
var node__19475__auto___19954 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19953);
if(cljs.core.truth_(node__19475__auto___19954)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19953;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19955 = (3);
var actual__18850__auto___19956 = c3kit.wire.spec_helper.count_all.call(null,"tr");
if(cljs.core._EQ_.call(null,expected__18849__auto___19955,actual__18850__auto___19956)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19955;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19956;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19957 = (9);
var actual__18850__auto___19958 = c3kit.wire.spec_helper.count_all.call(null,"td");
if(cljs.core._EQ_.call(null,expected__18849__auto___19957,actual__18850__auto___19958)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19957;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19958;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19959 = (9);
var actual__18850__auto___19960 = c3kit.wire.spec_helper.count_all.call(null,"td.empty");
if(cljs.core._EQ_.call(null,expected__18849__auto___19959,actual__18850__auto___19960)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19959;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19960;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19961 = (9);
var actual__18850__auto___19962 = c3kit.wire.spec_helper.count_all.call(null,"button.move-button");
if(cljs.core._EQ_.call(null,expected__18849__auto___19961,actual__18850__auto___19962)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19961;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19962;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = "button.move-button";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"displays current player's turn",((function (_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___19963 = "h2.current-player";
var node__19475__auto___19964 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___19963);
if(cljs.core.truth_(node__19475__auto___19964)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___19963;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18900__auto__ = "Player X's turn";
var actual__18901__auto__ = c3kit.wire.spec_helper.text.call(null,"h2.current-player");
if((actual__18901__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18900__auto__ === 'string') && (typeof actual__18901__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__18901__auto__,expected__18900__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18900__auto__)) && (typeof actual__18901__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18900__auto__,actual__18901__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18901__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18900__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18901__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__18901__auto__,expected__18900__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18901__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18901__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18899__18902__auto__){
return cljs.core._EQ_.call(null,expected__18900__auto__,p1__18899__18902__auto__);
}),actual__18901__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18828__auto__ = expected__18900__auto__;
var b__18829__auto__ = actual__18901__auto__;
var type_a__18830__auto__ = (((a__18828__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18828__auto__)));
var type_b__18831__auto__ = (((b__18829__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18829__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18830__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18831__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"allows the human player to click an active cell, then updates the board",((function (_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-5");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19965 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"X",(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
var actual__18850__auto___19966 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19965,actual__18850__auto___19966)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19965;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19966;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18900__auto___19967 = "Player O's turn";
var actual__18901__auto___19968 = c3kit.wire.spec_helper.text.call(null,"h2.current-player");
if((actual__18901__auto___19968 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19967;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18900__auto___19967 === 'string') && (typeof actual__18901__auto___19968 === 'string'))){
if((clojure.string.index_of.call(null,actual__18901__auto___19968,expected__18900__auto___19967) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19967;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19968;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18900__auto___19967)) && (typeof actual__18901__auto___19968 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18900__auto___19967,actual__18901__auto___19968))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18901__auto___19968;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18900__auto___19967;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18901__auto___19968)){
if(cljs.core.contains_QMARK_.call(null,actual__18901__auto___19968,expected__18900__auto___19967)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19967;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19968;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18901__auto___19968)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18899__18902__auto__){
return cljs.core._EQ_.call(null,expected__18900__auto___19967,p1__18899__18902__auto__);
}),actual__18901__auto___19968))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19967;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19968;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18828__auto__ = expected__18900__auto___19967;
var b__18829__auto__ = actual__18901__auto___19968;
var type_a__18830__auto__ = (((a__18828__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18828__auto__)));
var type_b__18831__auto__ = (((b__18829__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18829__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18830__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18831__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19969 = (8);
var actual__18850__auto___19970 = c3kit.wire.spec_helper.count_all.call(null,"td.empty");
if(cljs.core._EQ_.call(null,expected__18849__auto___19969,actual__18850__auto___19970)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19969;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19970;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19971 = "X";
var actual__18850__auto___19972 = c3kit.wire.spec_helper.text.call(null,"#cell-5");
if(cljs.core._EQ_.call(null,expected__18849__auto___19971,actual__18850__auto___19972)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19971;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19972;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto__ = (1);
var actual__18850__auto__ = new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto__,actual__18850__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"doesn't allow the same cell to be clicked twice",((function (_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-5");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18900__auto___19973 = "Player O's turn";
var actual__18901__auto___19974 = c3kit.wire.spec_helper.text.call(null,"h2.current-player");
if((actual__18901__auto___19974 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19973;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18900__auto___19973 === 'string') && (typeof actual__18901__auto___19974 === 'string'))){
if((clojure.string.index_of.call(null,actual__18901__auto___19974,expected__18900__auto___19973) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19973;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19974;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18900__auto___19973)) && (typeof actual__18901__auto___19974 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18900__auto___19973,actual__18901__auto___19974))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18901__auto___19974;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18900__auto___19973;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18901__auto___19974)){
if(cljs.core.contains_QMARK_.call(null,actual__18901__auto___19974,expected__18900__auto___19973)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19973;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19974;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18901__auto___19974)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18899__18902__auto__){
return cljs.core._EQ_.call(null,expected__18900__auto___19973,p1__18899__18902__auto__);
}),actual__18901__auto___19974))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19973;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19974;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18828__auto__ = expected__18900__auto___19973;
var b__18829__auto__ = actual__18901__auto___19974;
var type_a__18830__auto__ = (((a__18828__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18828__auto__)));
var type_b__18831__auto__ = (((b__18829__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18829__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18830__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18831__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19975 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"X",(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
var actual__18850__auto___19976 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19975,actual__18850__auto___19976)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19975;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19976;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-5");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18900__auto___19977 = "Player O's turn";
var actual__18901__auto___19978 = c3kit.wire.spec_helper.text.call(null,"h2.current-player");
if((actual__18901__auto___19978 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19977;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18900__auto___19977 === 'string') && (typeof actual__18901__auto___19978 === 'string'))){
if((clojure.string.index_of.call(null,actual__18901__auto___19978,expected__18900__auto___19977) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19977;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19978;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18900__auto___19977)) && (typeof actual__18901__auto___19978 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18900__auto___19977,actual__18901__auto___19978))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18901__auto___19978;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18900__auto___19977;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18901__auto___19978)){
if(cljs.core.contains_QMARK_.call(null,actual__18901__auto___19978,expected__18900__auto___19977)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19977;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19978;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18901__auto___19978)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18899__18902__auto__){
return cljs.core._EQ_.call(null,expected__18900__auto___19977,p1__18899__18902__auto__);
}),actual__18901__auto___19978))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19977;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19978;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18828__auto__ = expected__18900__auto___19977;
var b__18829__auto__ = actual__18901__auto___19978;
var type_a__18830__auto__ = (((a__18828__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18828__auto__)));
var type_b__18831__auto__ = (((b__18829__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18829__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18830__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18831__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"X",(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
var actual__18850__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto__,actual__18850__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"does allow the next player to click to claim a different square",((function (_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-5");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18900__auto___19979 = "Player O's turn";
var actual__18901__auto___19980 = c3kit.wire.spec_helper.text.call(null,"h2.current-player");
if((actual__18901__auto___19980 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19979;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18900__auto___19979 === 'string') && (typeof actual__18901__auto___19980 === 'string'))){
if((clojure.string.index_of.call(null,actual__18901__auto___19980,expected__18900__auto___19979) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19979;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19980;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18900__auto___19979)) && (typeof actual__18901__auto___19980 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18900__auto___19979,actual__18901__auto___19980))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18901__auto___19980;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18900__auto___19979;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18901__auto___19980)){
if(cljs.core.contains_QMARK_.call(null,actual__18901__auto___19980,expected__18900__auto___19979)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19979;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19980;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18901__auto___19980)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18899__18902__auto__){
return cljs.core._EQ_.call(null,expected__18900__auto___19979,p1__18899__18902__auto__);
}),actual__18901__auto___19980))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19979;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19980;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18828__auto__ = expected__18900__auto___19979;
var b__18829__auto__ = actual__18901__auto___19980;
var type_a__18830__auto__ = (((a__18828__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18828__auto__)));
var type_b__18831__auto__ = (((b__18829__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18829__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18830__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18831__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___19981 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"X",(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
var actual__18850__auto___19982 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___19981,actual__18850__auto___19982)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___19981;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___19982;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18900__auto___19983 = "Player X's turn";
var actual__18901__auto___19984 = c3kit.wire.spec_helper.text.call(null,"h2.current-player");
if((actual__18901__auto___19984 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19983;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18900__auto___19983 === 'string') && (typeof actual__18901__auto___19984 === 'string'))){
if((clojure.string.index_of.call(null,actual__18901__auto___19984,expected__18900__auto___19983) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19983;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19984;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18900__auto___19983)) && (typeof actual__18901__auto___19984 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18900__auto___19983,actual__18901__auto___19984))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18901__auto___19984;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18900__auto___19983;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18901__auto___19984)){
if(cljs.core.contains_QMARK_.call(null,actual__18901__auto___19984,expected__18900__auto___19983)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19983;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19984;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18901__auto___19984)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18899__18902__auto__){
return cljs.core._EQ_.call(null,expected__18900__auto___19983,p1__18899__18902__auto__);
}),actual__18901__auto___19984))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___19983;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___19984;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18828__auto__ = expected__18900__auto___19983;
var b__18829__auto__ = actual__18901__auto___19984;
var type_a__18830__auto__ = (((a__18828__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18828__auto__)));
var type_b__18831__auto__ = (((b__18829__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18829__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18830__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18831__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),"O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"X",(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
var actual__18850__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto__,actual__18850__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19651_19943,_STAR_parent_description_STAR__temp_val__19652_19944,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19654_19946 = null;
var count__19655_19947 = (0);
var i__19656_19948 = (0);
while(true){
if((i__19656_19948 < count__19655_19947)){
var component__18708__auto___19985 = cljs.core._nth.call(null,chunk__19654_19946,i__19656_19948);
speclj.components.install.call(null,component__18708__auto___19985,description__18707__auto____$1);


var G__19986 = seq__19653_19945;
var G__19987 = chunk__19654_19946;
var G__19988 = count__19655_19947;
var G__19989 = (i__19656_19948 + (1));
seq__19653_19945 = G__19986;
chunk__19654_19946 = G__19987;
count__19655_19947 = G__19988;
i__19656_19948 = G__19989;
continue;
} else {
var temp__5825__auto___19990 = cljs.core.seq.call(null,seq__19653_19945);
if(temp__5825__auto___19990){
var seq__19653_19991__$1 = temp__5825__auto___19990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19653_19991__$1)){
var c__5548__auto___19992 = cljs.core.chunk_first.call(null,seq__19653_19991__$1);
var G__19993 = cljs.core.chunk_rest.call(null,seq__19653_19991__$1);
var G__19994 = c__5548__auto___19992;
var G__19995 = cljs.core.count.call(null,c__5548__auto___19992);
var G__19996 = (0);
seq__19653_19945 = G__19993;
chunk__19654_19946 = G__19994;
count__19655_19947 = G__19995;
i__19656_19948 = G__19996;
continue;
} else {
var component__18708__auto___19997 = cljs.core.first.call(null,seq__19653_19991__$1);
speclj.components.install.call(null,component__18708__auto___19997,description__18707__auto____$1);


var G__19998 = cljs.core.next.call(null,seq__19653_19991__$1);
var G__19999 = null;
var G__20000 = (0);
var G__20001 = (0);
seq__19653_19945 = G__19998;
chunk__19654_19946 = G__19999;
count__19655_19947 = G__20000;
i__19656_19948 = G__20001;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19651_19943);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"in-progress to tie",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19657_20002 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19658_20003 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19658_20003);

try{var seq__19659_20004 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19657_20002,_STAR_parent_description_STAR__temp_val__19658_20003,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655),(0),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(8),"O"], null)], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19657_20002,_STAR_parent_description_STAR__temp_val__19658_20003,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"ends the game in a tie",((function (_STAR_parent_description_STAR__orig_val__19657_20002,_STAR_parent_description_STAR__temp_val__19658_20003,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-8");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20008 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O"], null)], null);
var actual__18850__auto___20009 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20008,actual__18850__auto___20009)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20008;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20009;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20010 = new cljs.core.Keyword(null,"tie","tie",-487201694);
var actual__18850__auto___20011 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20010,actual__18850__auto___20011)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20010;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20011;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20012 = (0);
var actual__18850__auto___20013 = new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20012,actual__18850__auto___20013)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20012;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20013;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".game-over";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19657_20002,_STAR_parent_description_STAR__temp_val__19658_20003,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19660_20005 = null;
var count__19661_20006 = (0);
var i__19662_20007 = (0);
while(true){
if((i__19662_20007 < count__19661_20006)){
var component__18708__auto___20014 = cljs.core._nth.call(null,chunk__19660_20005,i__19662_20007);
speclj.components.install.call(null,component__18708__auto___20014,description__18707__auto____$1);


var G__20015 = seq__19659_20004;
var G__20016 = chunk__19660_20005;
var G__20017 = count__19661_20006;
var G__20018 = (i__19662_20007 + (1));
seq__19659_20004 = G__20015;
chunk__19660_20005 = G__20016;
count__19661_20006 = G__20017;
i__19662_20007 = G__20018;
continue;
} else {
var temp__5825__auto___20019 = cljs.core.seq.call(null,seq__19659_20004);
if(temp__5825__auto___20019){
var seq__19659_20020__$1 = temp__5825__auto___20019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19659_20020__$1)){
var c__5548__auto___20021 = cljs.core.chunk_first.call(null,seq__19659_20020__$1);
var G__20022 = cljs.core.chunk_rest.call(null,seq__19659_20020__$1);
var G__20023 = c__5548__auto___20021;
var G__20024 = cljs.core.count.call(null,c__5548__auto___20021);
var G__20025 = (0);
seq__19659_20004 = G__20022;
chunk__19660_20005 = G__20023;
count__19661_20006 = G__20024;
i__19662_20007 = G__20025;
continue;
} else {
var component__18708__auto___20026 = cljs.core.first.call(null,seq__19659_20020__$1);
speclj.components.install.call(null,component__18708__auto___20026,description__18707__auto____$1);


var G__20027 = cljs.core.next.call(null,seq__19659_20020__$1);
var G__20028 = null;
var G__20029 = (0);
var G__20030 = (0);
seq__19659_20004 = G__20027;
chunk__19660_20005 = G__20028;
count__19661_20006 = G__20029;
i__19662_20007 = G__20030;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19657_20002);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"in-progress to winner",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19663_20031 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19664_20032 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19664_20032);

try{var seq__19665_20033 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19663_20031,_STAR_parent_description_STAR__temp_val__19664_20032,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655),(0),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X",(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O",(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19663_20031,_STAR_parent_description_STAR__temp_val__19664_20032,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"ends the game in a tie",((function (_STAR_parent_description_STAR__orig_val__19663_20031,_STAR_parent_description_STAR__temp_val__19664_20032,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-3");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20037 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O",(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
var actual__18850__auto___20038 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20037,actual__18850__auto___20038)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20037;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20038;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20039 = new cljs.core.Keyword(null,"winner","winner",714604679);
var actual__18850__auto___20040 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20039,actual__18850__auto___20040)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20039;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20040;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20041 = (0);
var actual__18850__auto___20042 = new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20041,actual__18850__auto___20042)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20041;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20042;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto__ = ".game-over";
var node__19475__auto__ = c3kit.wire.spec_helper.select.call(null,value__19474__auto__);
if(cljs.core.truth_(node__19475__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19663_20031,_STAR_parent_description_STAR__temp_val__19664_20032,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19666_20034 = null;
var count__19667_20035 = (0);
var i__19668_20036 = (0);
while(true){
if((i__19668_20036 < count__19667_20035)){
var component__18708__auto___20043 = cljs.core._nth.call(null,chunk__19666_20034,i__19668_20036);
speclj.components.install.call(null,component__18708__auto___20043,description__18707__auto____$1);


var G__20044 = seq__19665_20033;
var G__20045 = chunk__19666_20034;
var G__20046 = count__19667_20035;
var G__20047 = (i__19668_20036 + (1));
seq__19665_20033 = G__20044;
chunk__19666_20034 = G__20045;
count__19667_20035 = G__20046;
i__19668_20036 = G__20047;
continue;
} else {
var temp__5825__auto___20048 = cljs.core.seq.call(null,seq__19665_20033);
if(temp__5825__auto___20048){
var seq__19665_20049__$1 = temp__5825__auto___20048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19665_20049__$1)){
var c__5548__auto___20050 = cljs.core.chunk_first.call(null,seq__19665_20049__$1);
var G__20051 = cljs.core.chunk_rest.call(null,seq__19665_20049__$1);
var G__20052 = c__5548__auto___20050;
var G__20053 = cljs.core.count.call(null,c__5548__auto___20050);
var G__20054 = (0);
seq__19665_20033 = G__20051;
chunk__19666_20034 = G__20052;
count__19667_20035 = G__20053;
i__19668_20036 = G__20054;
continue;
} else {
var component__18708__auto___20055 = cljs.core.first.call(null,seq__19665_20049__$1);
speclj.components.install.call(null,component__18708__auto___20055,description__18707__auto____$1);


var G__20056 = cljs.core.next.call(null,seq__19665_20049__$1);
var G__20057 = null;
var G__20058 = (0);
var G__20059 = (0);
seq__19665_20033 = G__20056;
chunk__19666_20034 = G__20057;
count__19667_20035 = G__20058;
i__19668_20036 = G__20059;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19663_20031);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"winner",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19669_20060 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19670_20061 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19670_20061);

try{var seq__19671_20062 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19669_20060,_STAR_parent_description_STAR__temp_val__19670_20061,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655),(0),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O",(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19669_20060,_STAR_parent_description_STAR__temp_val__19670_20061,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"displays game-over state with disabled buttons",((function (_STAR_parent_description_STAR__orig_val__19669_20060,_STAR_parent_description_STAR__temp_val__19670_20061,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___20066 = ".game-over";
var node__19475__auto___20067 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20066);
if(cljs.core.truth_(node__19475__auto___20067)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20066;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___20068 = "#new-game";
var node__19475__auto___20069 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20068);
if(cljs.core.truth_(node__19475__auto___20069)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20068;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18900__auto___20070 = "Player X wins! Good game";
var actual__18901__auto___20071 = c3kit.wire.spec_helper.text.call(null,"h2.game-over");
if((actual__18901__auto___20071 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___20070;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18900__auto___20070 === 'string') && (typeof actual__18901__auto___20071 === 'string'))){
if((clojure.string.index_of.call(null,actual__18901__auto___20071,expected__18900__auto___20070) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___20070;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___20071;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18900__auto___20070)) && (typeof actual__18901__auto___20071 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18900__auto___20070,actual__18901__auto___20071))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18901__auto___20071;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18900__auto___20070;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18901__auto___20071)){
if(cljs.core.contains_QMARK_.call(null,actual__18901__auto___20071,expected__18900__auto___20070)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___20070;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18901__auto___20071;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18901__auto___20071)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18899__18902__auto__){
return cljs.core._EQ_.call(null,expected__18900__auto___20070,p1__18899__18902__auto__);
}),actual__18901__auto___20071))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___20070;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___20071;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18828__auto__ = expected__18900__auto___20070;
var b__18829__auto__ = actual__18901__auto___20071;
var type_a__18830__auto__ = (((a__18828__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18828__auto__)));
var type_b__18831__auto__ = (((b__18829__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18829__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18830__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18831__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20072 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O",(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
var actual__18850__auto___20073 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20072,actual__18850__auto___20073)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20072;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20073;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20074 = "Play Again?";
var actual__18850__auto___20075 = c3kit.wire.spec_helper.text.call(null,"#new-game");
if(cljs.core._EQ_.call(null,expected__18849__auto___20074,actual__18850__auto___20075)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20074;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20075;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20076 = (9);
var actual__18850__auto___20077 = c3kit.wire.spec_helper.count_all.call(null,"button.move-button:disabled");
if(cljs.core._EQ_.call(null,expected__18849__auto___20076,actual__18850__auto___20077)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20076;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20077;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-6");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20078 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O",(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null);
var actual__18850__auto___20079 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20078,actual__18850__auto___20079)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20078;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20079;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto__ = "Play Again?";
var actual__18850__auto__ = c3kit.wire.spec_helper.text.call(null,"#new-game");
if(cljs.core._EQ_.call(null,expected__18849__auto__,actual__18850__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19669_20060,_STAR_parent_description_STAR__temp_val__19670_20061,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"lets the player play again",((function (_STAR_parent_description_STAR__orig_val__19669_20060,_STAR_parent_description_STAR__temp_val__19670_20061,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#new-game");

var value__19474__auto___20080 = ".config-x-type";
var node__19475__auto___20081 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20080);
if(cljs.core.truth_(node__19475__auto___20081)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20080;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___20082 = "div.config-x-type button.action-button";
var node__19475__auto___20083 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20082);
if(cljs.core.truth_(node__19475__auto___20083)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20082;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___20084 = ".human";
var node__19475__auto___20085 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20084);
if(cljs.core.truth_(node__19475__auto___20085)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20084;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___20086 = ".computer";
var node__19475__auto___20087 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20086);
if(cljs.core.truth_(node__19475__auto___20087)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20086;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20088 = null;
var actual__18850__auto___20089 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(0),new cljs.core.Keyword(null,"play-type","play-type",519061088)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___20088,actual__18850__auto___20089)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20088;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20089;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20090 = null;
var actual__18850__auto___20091 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(1),new cljs.core.Keyword(null,"play-type","play-type",519061088)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___20090,actual__18850__auto___20091)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20090;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20091;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto__ = null;
var actual__18850__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto__,actual__18850__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19669_20060,_STAR_parent_description_STAR__temp_val__19670_20061,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19672_20063 = null;
var count__19673_20064 = (0);
var i__19674_20065 = (0);
while(true){
if((i__19674_20065 < count__19673_20064)){
var component__18708__auto___20092 = cljs.core._nth.call(null,chunk__19672_20063,i__19674_20065);
speclj.components.install.call(null,component__18708__auto___20092,description__18707__auto____$1);


var G__20093 = seq__19671_20062;
var G__20094 = chunk__19672_20063;
var G__20095 = count__19673_20064;
var G__20096 = (i__19674_20065 + (1));
seq__19671_20062 = G__20093;
chunk__19672_20063 = G__20094;
count__19673_20064 = G__20095;
i__19674_20065 = G__20096;
continue;
} else {
var temp__5825__auto___20097 = cljs.core.seq.call(null,seq__19671_20062);
if(temp__5825__auto___20097){
var seq__19671_20098__$1 = temp__5825__auto___20097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19671_20098__$1)){
var c__5548__auto___20099 = cljs.core.chunk_first.call(null,seq__19671_20098__$1);
var G__20100 = cljs.core.chunk_rest.call(null,seq__19671_20098__$1);
var G__20101 = c__5548__auto___20099;
var G__20102 = cljs.core.count.call(null,c__5548__auto___20099);
var G__20103 = (0);
seq__19671_20062 = G__20100;
chunk__19672_20063 = G__20101;
count__19673_20064 = G__20102;
i__19674_20065 = G__20103;
continue;
} else {
var component__18708__auto___20104 = cljs.core.first.call(null,seq__19671_20098__$1);
speclj.components.install.call(null,component__18708__auto___20104,description__18707__auto____$1);


var G__20105 = cljs.core.next.call(null,seq__19671_20098__$1);
var G__20106 = null;
var G__20107 = (0);
var G__20108 = (0);
seq__19671_20062 = G__20105;
chunk__19672_20063 = G__20106;
count__19673_20064 = G__20107;
i__19674_20065 = G__20108;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19669_20060);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"tie",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19675_20109 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19676_20110 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19676_20110);

try{var seq__19677_20111 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19675_20109,_STAR_parent_description_STAR__temp_val__19676_20110,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"tie","tie",-487201694),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655),(0),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O"], null)], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191)], null)], null)], null));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19675_20109,_STAR_parent_description_STAR__temp_val__19676_20110,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"displays game-over state",((function (_STAR_parent_description_STAR__orig_val__19675_20109,_STAR_parent_description_STAR__temp_val__19676_20110,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
var value__19474__auto___20115 = ".game-over";
var node__19475__auto___20116 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20115);
if(cljs.core.truth_(node__19475__auto___20116)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20115;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___20117 = "#new-game";
var node__19475__auto___20118 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20117);
if(cljs.core.truth_(node__19475__auto___20118)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20117;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18900__auto___20119 = "It's a tie! Good game";
var actual__18901__auto___20120 = c3kit.wire.spec_helper.text.call(null,"h2.game-over");
if((actual__18901__auto___20120 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___20119;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__18900__auto___20119 === 'string') && (typeof actual__18901__auto___20120 === 'string'))){
if((clojure.string.index_of.call(null,actual__18901__auto___20120,expected__18900__auto___20119) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___20119;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___20120;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__18900__auto___20119)) && (typeof actual__18901__auto___20120 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__18900__auto___20119,actual__18901__auto___20120))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__18901__auto___20120;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__18900__auto___20119;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__18901__auto___20120)){
if(cljs.core.contains_QMARK_.call(null,actual__18901__auto___20120,expected__18900__auto___20119)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___20119;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__18901__auto___20120;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__18901__auto___20120)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__18899__18902__auto__){
return cljs.core._EQ_.call(null,expected__18900__auto___20119,p1__18899__18902__auto__);
}),actual__18901__auto___20120))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18900__auto___20119;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__18901__auto___20120;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__18828__auto__ = expected__18900__auto___20119;
var b__18829__auto__ = actual__18901__auto___20120;
var type_a__18830__auto__ = (((a__18828__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__18828__auto__)));
var type_b__18831__auto__ = (((b__18829__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__18829__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__18830__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__18831__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20121 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O"], null)], null);
var actual__18850__auto___20122 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20121,actual__18850__auto___20122)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20121;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20122;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20123 = "Play Again?";
var actual__18850__auto___20124 = c3kit.wire.spec_helper.text.call(null,"#new-game");
if(cljs.core._EQ_.call(null,expected__18849__auto___20123,actual__18850__auto___20124)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20123;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20124;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20125 = (9);
var actual__18850__auto___20126 = c3kit.wire.spec_helper.count_all.call(null,"button.move-button:disabled");
if(cljs.core._EQ_.call(null,expected__18849__auto___20125,actual__18850__auto___20126)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20125;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20126;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-6");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20127 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["O","O","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","O"], null)], null);
var actual__18850__auto___20128 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20127,actual__18850__auto___20128)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20127;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20128;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto__ = "Play Again?";
var actual__18850__auto__ = c3kit.wire.spec_helper.text.call(null,"#new-game");
if(cljs.core._EQ_.call(null,expected__18849__auto__,actual__18850__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19675_20109,_STAR_parent_description_STAR__temp_val__19676_20110,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false),speclj.components.new_characteristic.call(null,"lets the player play again",((function (_STAR_parent_description_STAR__orig_val__19675_20109,_STAR_parent_description_STAR__temp_val__19676_20110,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#new-game");

var value__19474__auto___20129 = ".config-x-type";
var node__19475__auto___20130 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20129);
if(cljs.core.truth_(node__19475__auto___20130)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20129;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___20131 = "div.config-x-type button.action-button";
var node__19475__auto___20132 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20131);
if(cljs.core.truth_(node__19475__auto___20132)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20131;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___20133 = ".human";
var node__19475__auto___20134 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20133);
if(cljs.core.truth_(node__19475__auto___20134)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20133;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var value__19474__auto___20135 = ".computer";
var node__19475__auto___20136 = c3kit.wire.spec_helper.select.call(null,value__19474__auto___20135);
if(cljs.core.truth_(node__19475__auto___20136)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__19474__auto___20135;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20137 = null;
var actual__18850__auto___20138 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(0),new cljs.core.Keyword(null,"play-type","play-type",519061088)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___20137,actual__18850__auto___20138)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20137;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20138;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20139 = null;
var actual__18850__auto___20140 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),(1),new cljs.core.Keyword(null,"play-type","play-type",519061088)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___20139,actual__18850__auto___20140)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20139;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20140;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto__ = null;
var actual__18850__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto__,actual__18850__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19675_20109,_STAR_parent_description_STAR__temp_val__19676_20110,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19678_20112 = null;
var count__19679_20113 = (0);
var i__19680_20114 = (0);
while(true){
if((i__19680_20114 < count__19679_20113)){
var component__18708__auto___20141 = cljs.core._nth.call(null,chunk__19678_20112,i__19680_20114);
speclj.components.install.call(null,component__18708__auto___20141,description__18707__auto____$1);


var G__20142 = seq__19677_20111;
var G__20143 = chunk__19678_20112;
var G__20144 = count__19679_20113;
var G__20145 = (i__19680_20114 + (1));
seq__19677_20111 = G__20142;
chunk__19678_20112 = G__20143;
count__19679_20113 = G__20144;
i__19680_20114 = G__20145;
continue;
} else {
var temp__5825__auto___20146 = cljs.core.seq.call(null,seq__19677_20111);
if(temp__5825__auto___20146){
var seq__19677_20147__$1 = temp__5825__auto___20146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19677_20147__$1)){
var c__5548__auto___20148 = cljs.core.chunk_first.call(null,seq__19677_20147__$1);
var G__20149 = cljs.core.chunk_rest.call(null,seq__19677_20147__$1);
var G__20150 = c__5548__auto___20148;
var G__20151 = cljs.core.count.call(null,c__5548__auto___20148);
var G__20152 = (0);
seq__19677_20111 = G__20149;
chunk__19678_20112 = G__20150;
count__19679_20113 = G__20151;
i__19680_20114 = G__20152;
continue;
} else {
var component__18708__auto___20153 = cljs.core.first.call(null,seq__19677_20147__$1);
speclj.components.install.call(null,component__18708__auto___20153,description__18707__auto____$1);


var G__20154 = cljs.core.next.call(null,seq__19677_20147__$1);
var G__20155 = null;
var G__20156 = (0);
var G__20157 = (0);
seq__19677_20111 = G__20154;
chunk__19678_20112 = G__20155;
count__19679_20113 = G__20156;
i__19680_20114 = G__20157;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19675_20109);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})(),(function (){var description__18707__auto____$1 = speclj.components.new_description.call(null,"human move",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__19681_20158 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__19682_20159 = description__18707__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__19682_20159);

try{var seq__19683_20160 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__19681_20158,_STAR_parent_description_STAR__temp_val__19682_20159,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(8),(9)], null)], null),new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655),(0),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"character","character",380652989),"X",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"character","character",380652989),"O",new cljs.core.Keyword(null,"play-type","play-type",519061088),new cljs.core.Keyword(null,"computer","computer",-1035300443),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null)], null));

cljs.core.reset_BANG_.call(null,tic_tac_toe.main.status_cursor,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null));
});})(_STAR_parent_description_STAR__orig_val__19681_20158,_STAR_parent_description_STAR__temp_val__19682_20159,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
),speclj.components.new_characteristic.call(null,"human move triggers computer move",((function (_STAR_parent_description_STAR__orig_val__19681_20158,_STAR_parent_description_STAR__temp_val__19682_20159,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"#cell-5");

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20164 = "X";
var actual__18850__auto___20165 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),(1),(1)], null));
if(cljs.core._EQ_.call(null,expected__18849__auto___20164,actual__18850__auto___20165)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20164;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20165;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20166 = (0);
var actual__18850__auto___20167 = new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
if(cljs.core._EQ_.call(null,expected__18849__auto___20166,actual__18850__auto___20167)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20166;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20167;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

var board_20168 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
var o_count_20169 = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["O",null], null), null),cljs.core.flatten.call(null,board_20168)));
speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20170 = (1);
var actual__18850__auto___20171 = o_count_20169;
if(cljs.core._EQ_.call(null,expected__18849__auto___20170,actual__18850__auto___20171)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20170;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20171;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto___20172 = (7);
var actual__18850__auto___20173 = c3kit.wire.spec_helper.count_all.call(null,"td.empty");
if(cljs.core._EQ_.call(null,expected__18849__auto___20172,actual__18850__auto___20173)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto___20172;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto___20173;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__18849__auto__ = (2);
var actual__18850__auto__ = c3kit.wire.spec_helper.count_all.call(null,"td.occupied");
if(cljs.core._EQ_.call(null,expected__18849__auto__,actual__18850__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__18849__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__18850__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__18817__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__18817__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__19681_20158,_STAR_parent_description_STAR__temp_val__19682_20159,description__18707__auto____$1,_STAR_parent_description_STAR__orig_val__19525_19688,_STAR_parent_description_STAR__temp_val__19526_19689,description__18707__auto___19687))
,false)],null)));
var chunk__19684_20161 = null;
var count__19685_20162 = (0);
var i__19686_20163 = (0);
while(true){
if((i__19686_20163 < count__19685_20162)){
var component__18708__auto___20174 = cljs.core._nth.call(null,chunk__19684_20161,i__19686_20163);
speclj.components.install.call(null,component__18708__auto___20174,description__18707__auto____$1);


var G__20175 = seq__19683_20160;
var G__20176 = chunk__19684_20161;
var G__20177 = count__19685_20162;
var G__20178 = (i__19686_20163 + (1));
seq__19683_20160 = G__20175;
chunk__19684_20161 = G__20176;
count__19685_20162 = G__20177;
i__19686_20163 = G__20178;
continue;
} else {
var temp__5825__auto___20179 = cljs.core.seq.call(null,seq__19683_20160);
if(temp__5825__auto___20179){
var seq__19683_20180__$1 = temp__5825__auto___20179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19683_20180__$1)){
var c__5548__auto___20181 = cljs.core.chunk_first.call(null,seq__19683_20180__$1);
var G__20182 = cljs.core.chunk_rest.call(null,seq__19683_20180__$1);
var G__20183 = c__5548__auto___20181;
var G__20184 = cljs.core.count.call(null,c__5548__auto___20181);
var G__20185 = (0);
seq__19683_20160 = G__20182;
chunk__19684_20161 = G__20183;
count__19685_20162 = G__20184;
i__19686_20163 = G__20185;
continue;
} else {
var component__18708__auto___20186 = cljs.core.first.call(null,seq__19683_20180__$1);
speclj.components.install.call(null,component__18708__auto___20186,description__18707__auto____$1);


var G__20187 = cljs.core.next.call(null,seq__19683_20180__$1);
var G__20188 = null;
var G__20189 = (0);
var G__20190 = (0);
seq__19683_20160 = G__20187;
chunk__19684_20161 = G__20188;
count__19685_20162 = G__20189;
i__19686_20163 = G__20190;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19681_20158);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto____$1);
}

return description__18707__auto____$1;
})()],null)));
var chunk__19528_19691 = null;
var count__19529_19692 = (0);
var i__19530_19693 = (0);
while(true){
if((i__19530_19693 < count__19529_19692)){
var component__18708__auto___20191 = cljs.core._nth.call(null,chunk__19528_19691,i__19530_19693);
speclj.components.install.call(null,component__18708__auto___20191,description__18707__auto___19687);


var G__20192 = seq__19527_19690;
var G__20193 = chunk__19528_19691;
var G__20194 = count__19529_19692;
var G__20195 = (i__19530_19693 + (1));
seq__19527_19690 = G__20192;
chunk__19528_19691 = G__20193;
count__19529_19692 = G__20194;
i__19530_19693 = G__20195;
continue;
} else {
var temp__5825__auto___20196 = cljs.core.seq.call(null,seq__19527_19690);
if(temp__5825__auto___20196){
var seq__19527_20197__$1 = temp__5825__auto___20196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19527_20197__$1)){
var c__5548__auto___20198 = cljs.core.chunk_first.call(null,seq__19527_20197__$1);
var G__20199 = cljs.core.chunk_rest.call(null,seq__19527_20197__$1);
var G__20200 = c__5548__auto___20198;
var G__20201 = cljs.core.count.call(null,c__5548__auto___20198);
var G__20202 = (0);
seq__19527_19690 = G__20199;
chunk__19528_19691 = G__20200;
count__19529_19692 = G__20201;
i__19530_19693 = G__20202;
continue;
} else {
var component__18708__auto___20203 = cljs.core.first.call(null,seq__19527_20197__$1);
speclj.components.install.call(null,component__18708__auto___20203,description__18707__auto___19687);


var G__20204 = cljs.core.next.call(null,seq__19527_20197__$1);
var G__20205 = null;
var G__20206 = (0);
var G__20207 = (0);
seq__19527_19690 = G__20204;
chunk__19528_19691 = G__20205;
count__19529_19692 = G__20206;
i__19530_19693 = G__20207;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__19525_19688);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__18707__auto___19687);
}


//# sourceMappingURL=main_spec.js.map
