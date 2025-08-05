// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.components');
goog.require('cljs.core');

/**
 * @interface
 */
speclj.components.SpecComponent = function(){};

var speclj$components$SpecComponent$install$dyn_13615 = (function (this$,description){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.components.install[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,description);
} else {
var m__5372__auto__ = (speclj.components.install["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"SpecComponent.install",this$);
}
}
});
speclj.components.install = (function speclj$components$install(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$components$SpecComponent$install$arity$2 == null)))))){
return this$.speclj$components$SpecComponent$install$arity$2(this$,description);
} else {
return speclj$components$SpecComponent$install$dyn_13615.call(null,this$,description);
}
});

(cljs.core.LazySeq.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__13616 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));
var chunk__13617 = null;
var count__13618 = (0);
var i__13619 = (0);
while(true){
if((i__13619 < count__13618)){
var component = cljs.core._nth.call(null,chunk__13617,i__13619);
speclj.components.install.call(null,component,description);


var G__13679 = seq__13616;
var G__13680 = chunk__13617;
var G__13681 = count__13618;
var G__13682 = (i__13619 + (1));
seq__13616 = G__13679;
chunk__13617 = G__13680;
count__13618 = G__13681;
i__13619 = G__13682;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13616);
if(temp__5825__auto__){
var seq__13616__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13616__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13616__$1);
var G__13683 = cljs.core.chunk_rest.call(null,seq__13616__$1);
var G__13684 = c__5548__auto__;
var G__13685 = cljs.core.count.call(null,c__5548__auto__);
var G__13686 = (0);
seq__13616 = G__13683;
chunk__13617 = G__13684;
count__13618 = G__13685;
i__13619 = G__13686;
continue;
} else {
var component = cljs.core.first.call(null,seq__13616__$1);
speclj.components.install.call(null,component,description);


var G__13691 = cljs.core.next.call(null,seq__13616__$1);
var G__13692 = null;
var G__13693 = (0);
var G__13694 = (0);
seq__13616 = G__13691;
chunk__13617 = G__13692;
count__13618 = G__13693;
i__13619 = G__13694;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.core.List.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__13632 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));
var chunk__13633 = null;
var count__13634 = (0);
var i__13635 = (0);
while(true){
if((i__13635 < count__13634)){
var component = cljs.core._nth.call(null,chunk__13633,i__13635);
speclj.components.install.call(null,component,description);


var G__13719 = seq__13632;
var G__13720 = chunk__13633;
var G__13721 = count__13634;
var G__13722 = (i__13635 + (1));
seq__13632 = G__13719;
chunk__13633 = G__13720;
count__13634 = G__13721;
i__13635 = G__13722;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13632);
if(temp__5825__auto__){
var seq__13632__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13632__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13632__$1);
var G__13723 = cljs.core.chunk_rest.call(null,seq__13632__$1);
var G__13724 = c__5548__auto__;
var G__13725 = cljs.core.count.call(null,c__5548__auto__);
var G__13726 = (0);
seq__13632 = G__13723;
chunk__13633 = G__13724;
count__13634 = G__13725;
i__13635 = G__13726;
continue;
} else {
var component = cljs.core.first.call(null,seq__13632__$1);
speclj.components.install.call(null,component,description);


var G__13727 = cljs.core.next.call(null,seq__13632__$1);
var G__13728 = null;
var G__13729 = (0);
var G__13730 = (0);
seq__13632 = G__13727;
chunk__13633 = G__13728;
count__13634 = G__13729;
i__13635 = G__13730;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.core.EmptyList.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__13643 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));
var chunk__13644 = null;
var count__13645 = (0);
var i__13646 = (0);
while(true){
if((i__13646 < count__13645)){
var component = cljs.core._nth.call(null,chunk__13644,i__13646);
speclj.components.install.call(null,component,description);


var G__13738 = seq__13643;
var G__13739 = chunk__13644;
var G__13740 = count__13645;
var G__13741 = (i__13646 + (1));
seq__13643 = G__13738;
chunk__13644 = G__13739;
count__13645 = G__13740;
i__13646 = G__13741;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13643);
if(temp__5825__auto__){
var seq__13643__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13643__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13643__$1);
var G__13749 = cljs.core.chunk_rest.call(null,seq__13643__$1);
var G__13750 = c__5548__auto__;
var G__13751 = cljs.core.count.call(null,c__5548__auto__);
var G__13752 = (0);
seq__13643 = G__13749;
chunk__13644 = G__13750;
count__13645 = G__13751;
i__13646 = G__13752;
continue;
} else {
var component = cljs.core.first.call(null,seq__13643__$1);
speclj.components.install.call(null,component,description);


var G__13753 = cljs.core.next.call(null,seq__13643__$1);
var G__13754 = null;
var G__13755 = (0);
var G__13756 = (0);
seq__13643 = G__13753;
chunk__13644 = G__13754;
count__13645 = G__13755;
i__13646 = G__13756;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.core.PersistentVector.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__13651 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));
var chunk__13652 = null;
var count__13653 = (0);
var i__13654 = (0);
while(true){
if((i__13654 < count__13653)){
var component = cljs.core._nth.call(null,chunk__13652,i__13654);
speclj.components.install.call(null,component,description);


var G__13757 = seq__13651;
var G__13758 = chunk__13652;
var G__13759 = count__13653;
var G__13760 = (i__13654 + (1));
seq__13651 = G__13757;
chunk__13652 = G__13758;
count__13653 = G__13759;
i__13654 = G__13760;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13651);
if(temp__5825__auto__){
var seq__13651__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13651__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13651__$1);
var G__13761 = cljs.core.chunk_rest.call(null,seq__13651__$1);
var G__13762 = c__5548__auto__;
var G__13763 = cljs.core.count.call(null,c__5548__auto__);
var G__13764 = (0);
seq__13651 = G__13761;
chunk__13652 = G__13762;
count__13653 = G__13763;
i__13654 = G__13764;
continue;
} else {
var component = cljs.core.first.call(null,seq__13651__$1);
speclj.components.install.call(null,component,description);


var G__13765 = cljs.core.next.call(null,seq__13651__$1);
var G__13766 = null;
var G__13767 = (0);
var G__13768 = (0);
seq__13651 = G__13765;
chunk__13652 = G__13766;
count__13653 = G__13767;
i__13654 = G__13768;
continue;
}
} else {
return null;
}
}
break;
}
}));

(speclj.components.SpecComponent["null"] = true);

(speclj.components.install["null"] = (function (_this,_description){
throw cljs.core.ex_info.call(null,"Oops!  It looks like you tried to add 'nil' to a spec.  That's probably not what you wanted.",cljs.core.PersistentArrayMap.EMPTY);
}));

(speclj.components.SpecComponent["object"] = true);

(speclj.components.install["object"] = (function (_this,_description){
return null;
}));

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {speclj.components.Object}
*/
speclj.components.Description = (function (name,is_focused_QMARK_,has_focus_QMARK_,ns,parent,children,characteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds,around_alls){
this.name = name;
this.is_focused_QMARK_ = is_focused_QMARK_;
this.has_focus_QMARK_ = has_focus_QMARK_;
this.ns = ns;
this.parent = parent;
this.children = children;
this.characteristics = characteristics;
this.tags = tags;
this.befores = befores;
this.before_alls = before_alls;
this.afters = afters;
this.after_alls = after_alls;
this.withs = withs;
this.with_alls = with_alls;
this.arounds = arounds;
this.around_alls = around_alls;
});
(speclj.components.Description.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,this$__$1.parent,description);

return cljs.core.swap_BANG_.call(null,description.children,cljs.core.conj,this$__$1);
}));

(speclj.components.Description.prototype.toString = (function (){
var self__ = this;
var _this = this;
return ["Description: ","\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name),"\""].join('');
}));

(speclj.components.Description.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"is-focused?","is-focused?",1534984919,null),new cljs.core.Symbol(null,"has-focus?","has-focus?",740960982,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"characteristics","characteristics",1776790174,null),new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.Symbol(null,"befores","befores",695378544,null),new cljs.core.Symbol(null,"before-alls","before-alls",2010698475,null),new cljs.core.Symbol(null,"afters","afters",730798999,null),new cljs.core.Symbol(null,"after-alls","after-alls",1969611356,null),new cljs.core.Symbol(null,"withs","withs",86966390,null),new cljs.core.Symbol(null,"with-alls","with-alls",307687875,null),new cljs.core.Symbol(null,"arounds","arounds",203860653,null),new cljs.core.Symbol(null,"around-alls","around-alls",919934233,null)], null);
}));

(speclj.components.Description.cljs$lang$type = true);

(speclj.components.Description.cljs$lang$ctorStr = "speclj.components/Description");

(speclj.components.Description.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/Description");
}));

/**
 * Positional factory function for speclj.components/Description.
 */
speclj.components.__GT_Description = (function speclj$components$__GT_Description(name,is_focused_QMARK_,has_focus_QMARK_,ns,parent,children,characteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds,around_alls){
return (new speclj.components.Description(name,is_focused_QMARK_,has_focus_QMARK_,ns,parent,children,characteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds,around_alls));
});

speclj.components.new_description = (function speclj$components$new_description(name,is_focused_QMARK_,ns){
return (new speclj.components.Description(name,cljs.core.atom.call(null,is_focused_QMARK_),cljs.core.atom.call(null,false),ns,cljs.core.atom.call(null,null),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});
speclj.components.is_description_QMARK_ = (function speclj$components$is_description_QMARK_(component){
return (component instanceof speclj.components.Description);
});
speclj.components.inc_assertions_BANG_ = (function speclj$components$inc_assertions_BANG_(){
return cljs.core.swap_BANG_.call(null,speclj.components._STAR_assertions_STAR_,cljs.core.inc);
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {speclj.components.Object}
*/
speclj.components.Characteristic = (function (name,parent,body,is_focused_QMARK_){
this.name = name;
this.parent = parent;
this.body = body;
this.is_focused_QMARK_ = is_focused_QMARK_;
});
(speclj.components.Characteristic.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Characteristic.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,this$__$1.parent,description);

return cljs.core.swap_BANG_.call(null,description.characteristics,cljs.core.conj,this$__$1);
}));

(speclj.components.Characteristic.prototype.toString = (function (){
var self__ = this;
var _this = this;
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name),"\""].join('');
}));

(speclj.components.Characteristic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"is-focused?","is-focused?",1534984919,null)], null);
}));

(speclj.components.Characteristic.cljs$lang$type = true);

(speclj.components.Characteristic.cljs$lang$ctorStr = "speclj.components/Characteristic");

(speclj.components.Characteristic.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/Characteristic");
}));

/**
 * Positional factory function for speclj.components/Characteristic.
 */
speclj.components.__GT_Characteristic = (function speclj$components$__GT_Characteristic(name,parent,body,is_focused_QMARK_){
return (new speclj.components.Characteristic(name,parent,body,is_focused_QMARK_));
});

speclj.components.new_characteristic = (function speclj$components$new_characteristic(var_args){
var G__13770 = arguments.length;
switch (G__13770) {
case 3:
return speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3 = (function (name,body,is_focused_QMARK_){
return (new speclj.components.Characteristic(name,cljs.core.atom.call(null,null),body,cljs.core.atom.call(null,is_focused_QMARK_)));
}));

(speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$4 = (function (name,description,body,is_focused_QMARK_){
return (new speclj.components.Characteristic(name,cljs.core.atom.call(null,description),body,cljs.core.atom.call(null,is_focused_QMARK_)));
}));

(speclj.components.new_characteristic.cljs$lang$maxFixedArity = 4);

speclj.components.is_characteristic_QMARK_ = (function speclj$components$is_characteristic_QMARK_(component){
return (component instanceof speclj.components.Characteristic);
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.Before = (function (body){
this.body = body;
});
(speclj.components.Before.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Before.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.befores,cljs.core.conj,this$__$1);
}));

(speclj.components.Before.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.Before.cljs$lang$type = true);

(speclj.components.Before.cljs$lang$ctorStr = "speclj.components/Before");

(speclj.components.Before.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/Before");
}));

/**
 * Positional factory function for speclj.components/Before.
 */
speclj.components.__GT_Before = (function speclj$components$__GT_Before(body){
return (new speclj.components.Before(body));
});

speclj.components.new_before = (function speclj$components$new_before(body){
return (new speclj.components.Before(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.After = (function (body){
this.body = body;
});
(speclj.components.After.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.After.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.afters,cljs.core.conj,this$__$1);
}));

(speclj.components.After.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.After.cljs$lang$type = true);

(speclj.components.After.cljs$lang$ctorStr = "speclj.components/After");

(speclj.components.After.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/After");
}));

/**
 * Positional factory function for speclj.components/After.
 */
speclj.components.__GT_After = (function speclj$components$__GT_After(body){
return (new speclj.components.After(body));
});

speclj.components.new_after = (function speclj$components$new_after(body){
return (new speclj.components.After(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.Around = (function (body){
this.body = body;
});
(speclj.components.Around.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Around.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.arounds,cljs.core.conj,this$__$1);
}));

(speclj.components.Around.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.Around.cljs$lang$type = true);

(speclj.components.Around.cljs$lang$ctorStr = "speclj.components/Around");

(speclj.components.Around.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/Around");
}));

/**
 * Positional factory function for speclj.components/Around.
 */
speclj.components.__GT_Around = (function speclj$components$__GT_Around(body){
return (new speclj.components.Around(body));
});

speclj.components.new_around = (function speclj$components$new_around(body){
return (new speclj.components.Around(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.BeforeAll = (function (body){
this.body = body;
});
(speclj.components.BeforeAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.BeforeAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.before_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.BeforeAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.BeforeAll.cljs$lang$type = true);

(speclj.components.BeforeAll.cljs$lang$ctorStr = "speclj.components/BeforeAll");

(speclj.components.BeforeAll.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/BeforeAll");
}));

/**
 * Positional factory function for speclj.components/BeforeAll.
 */
speclj.components.__GT_BeforeAll = (function speclj$components$__GT_BeforeAll(body){
return (new speclj.components.BeforeAll(body));
});

speclj.components.new_before_all = (function speclj$components$new_before_all(body){
return (new speclj.components.BeforeAll(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.AfterAll = (function (body){
this.body = body;
});
(speclj.components.AfterAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.AfterAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.after_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.AfterAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.AfterAll.cljs$lang$type = true);

(speclj.components.AfterAll.cljs$lang$ctorStr = "speclj.components/AfterAll");

(speclj.components.AfterAll.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/AfterAll");
}));

/**
 * Positional factory function for speclj.components/AfterAll.
 */
speclj.components.__GT_AfterAll = (function speclj$components$__GT_AfterAll(body){
return (new speclj.components.AfterAll(body));
});

speclj.components.new_after_all = (function speclj$components$new_after_all(body){
return (new speclj.components.AfterAll(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.AroundAll = (function (body){
this.body = body;
});
(speclj.components.AroundAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.AroundAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.around_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.AroundAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.AroundAll.cljs$lang$type = true);

(speclj.components.AroundAll.cljs$lang$ctorStr = "speclj.components/AroundAll");

(speclj.components.AroundAll.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/AroundAll");
}));

/**
 * Positional factory function for speclj.components/AroundAll.
 */
speclj.components.__GT_AroundAll = (function speclj$components$__GT_AroundAll(body){
return (new speclj.components.AroundAll(body));
});

speclj.components.new_around_all = (function speclj$components$new_around_all(body){
return (new speclj.components.AroundAll(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {cljs.core.IDeref}
*/
speclj.components.With = (function (name,body,set_var_BANG_,value,bang){
this.name = name;
this.body = body;
this.set_var_BANG_ = set_var_BANG_;
this.value = value;
this.bang = bang;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(speclj.components.With.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.With.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.withs,cljs.core.conj,this$__$1);
}));

(speclj.components.With.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("speclj.components","none","speclj.components/none",222465943),cljs.core.deref.call(null,self__.value))){
cljs.core.reset_BANG_.call(null,self__.value,self__.body.call(null));
} else {
}

return cljs.core.deref.call(null,self__.value);
}));

(speclj.components.With.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"set-var!","set-var!",79196719,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"bang","bang",-1936704923,null)], null);
}));

(speclj.components.With.cljs$lang$type = true);

(speclj.components.With.cljs$lang$ctorStr = "speclj.components/With");

(speclj.components.With.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/With");
}));

/**
 * Positional factory function for speclj.components/With.
 */
speclj.components.__GT_With = (function speclj$components$__GT_With(name,body,set_var_BANG_,value,bang){
return (new speclj.components.With(name,body,set_var_BANG_,value,bang));
});

speclj.components.reset_with = (function speclj$components$reset_with(with$){
cljs.core.reset_BANG_.call(null,with$.value,new cljs.core.Keyword("speclj.components","none","speclj.components/none",222465943));

if(cljs.core.truth_(with$.bang)){
return cljs.core.deref.call(null,with$);
} else {
return null;
}
});
speclj.components.new_with = (function speclj$components$new_with(name,body,set_var_BANG_,bang){
var with$ = (new speclj.components.With(name,body,set_var_BANG_,cljs.core.atom.call(null,new cljs.core.Keyword("speclj.components","none","speclj.components/none",222465943)),bang));
if(cljs.core.truth_(bang)){
cljs.core.deref.call(null,with$);
} else {
}

return with$;
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {cljs.core.IDeref}
*/
speclj.components.WithAll = (function (name,body,set_var_BANG_,value,bang){
this.name = name;
this.body = body;
this.set_var_BANG_ = set_var_BANG_;
this.value = value;
this.bang = bang;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(speclj.components.WithAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.WithAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.with_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.WithAll.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("speclj.components","none","speclj.components/none",222465943),cljs.core.deref.call(null,self__.value))){
cljs.core.reset_BANG_.call(null,self__.value,self__.body.call(null));
} else {
}

return cljs.core.deref.call(null,self__.value);
}));

(speclj.components.WithAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"set-var!","set-var!",79196719,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"bang","bang",-1936704923,null)], null);
}));

(speclj.components.WithAll.cljs$lang$type = true);

(speclj.components.WithAll.cljs$lang$ctorStr = "speclj.components/WithAll");

(speclj.components.WithAll.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/WithAll");
}));

/**
 * Positional factory function for speclj.components/WithAll.
 */
speclj.components.__GT_WithAll = (function speclj$components$__GT_WithAll(name,body,set_var_BANG_,value,bang){
return (new speclj.components.WithAll(name,body,set_var_BANG_,value,bang));
});

speclj.components.new_with_all = (function speclj$components$new_with_all(name,body,set_var_BANG_,bang){
var with_all = (new speclj.components.WithAll(name,body,set_var_BANG_,cljs.core.atom.call(null,new cljs.core.Keyword("speclj.components","none","speclj.components/none",222465943)),bang));
if(cljs.core.truth_(bang)){
cljs.core.deref.call(null,with_all);
} else {
}

return with_all;
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.Tag = (function (name){
this.name = name;
});
(speclj.components.Tag.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Tag.prototype.speclj$components$SpecComponent$install$arity$2 = (function (_this,description){
var self__ = this;
var _this__$1 = this;
return cljs.core.swap_BANG_.call(null,description.tags,cljs.core.conj,self__.name);
}));

(speclj.components.Tag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(speclj.components.Tag.cljs$lang$type = true);

(speclj.components.Tag.cljs$lang$ctorStr = "speclj.components/Tag");

(speclj.components.Tag.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.components/Tag");
}));

/**
 * Positional factory function for speclj.components/Tag.
 */
speclj.components.__GT_Tag = (function speclj$components$__GT_Tag(name){
return (new speclj.components.Tag(name));
});

speclj.components.new_tag = (function speclj$components$new_tag(name){
return (new speclj.components.Tag(name));
});

//# sourceMappingURL=components.js.map
