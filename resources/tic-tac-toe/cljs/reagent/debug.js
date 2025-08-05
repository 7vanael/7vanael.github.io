// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__8211__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8213__i = 0, G__8213__a = new Array(arguments.length -  0);
while (G__8213__i < G__8213__a.length) {G__8213__a[G__8213__i] = arguments[G__8213__i + 0]; ++G__8213__i;}
  args = new cljs.core.IndexedSeq(G__8213__a,0,null);
} 
return G__8211__delegate.call(this,args);};
G__8211.cljs$lang$maxFixedArity = 0;
G__8211.cljs$lang$applyTo = (function (arglist__8214){
var args = cljs.core.seq(arglist__8214);
return G__8211__delegate(args);
});
G__8211.cljs$core$IFn$_invoke$arity$variadic = G__8211__delegate;
return G__8211;
})()
);

(o.error = (function() { 
var G__8215__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8217__i = 0, G__8217__a = new Array(arguments.length -  0);
while (G__8217__i < G__8217__a.length) {G__8217__a[G__8217__i] = arguments[G__8217__i + 0]; ++G__8217__i;}
  args = new cljs.core.IndexedSeq(G__8217__a,0,null);
} 
return G__8215__delegate.call(this,args);};
G__8215.cljs$lang$maxFixedArity = 0;
G__8215.cljs$lang$applyTo = (function (arglist__8218){
var args = cljs.core.seq(arglist__8218);
return G__8215__delegate(args);
});
G__8215.cljs$core$IFn$_invoke$arity$variadic = G__8215__delegate;
return G__8215;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
