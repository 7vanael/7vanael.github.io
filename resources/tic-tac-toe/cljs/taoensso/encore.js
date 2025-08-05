// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
goog.require('goog.object');
goog.scope(function(){
taoensso.encore.goog$module$goog$object = goog.module.get('goog.object');
});
goog.require('goog.array');
goog.scope(function(){
taoensso.encore.goog$module$goog$array = goog.module.get('goog.array');
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(85),(0)], null);
/**
 * Throws runtime `ExceptionInfo` to indicate an unexpected argument.
 *   Takes optional kvs for merging into exception's data map.
 * 
 *  (let [mode :unexpected]
 *    (case mode
 *      :read  (do <...>)
 *      :write (do <...>)
 *      (unexpected-arg! mode
 *        :context  `my-function
 *        :param    'mode
 *        :expected #{:read :write}))) =>
 * 
 *  Unexpected argument: :unexpected
 *  {:arg {:value :unexpected, :type clojure.lang.Keyword},
 *   :context 'taoensso.encore/my-function
 *   :param 'mode
 *   :expected #{:read :write}}
 */
taoensso.encore.unexpected_arg_BANG_ = (function taoensso$encore$unexpected_arg_BANG_(var_args){
var G__8216 = arguments.length;
switch (G__8216) {
case 1:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 9:
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return taoensso.encore.unexpected_arg_BANG_.call(null,arg,null);
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (arg,opts){
throw cljs.core.ex_info.call(null,(function (){var or__5025__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"msg","msg",-1386103444));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ["Unexpected argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('');
}
})(),cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),arg,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,arg)], null)], null),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"msg","msg",-1386103444))));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (arg,k1,v1){
return taoensso.encore.unexpected_arg_BANG_.call(null,arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (arg,k1,v1,k2,v2){
return taoensso.encore.unexpected_arg_BANG_.call(null,arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (arg,k1,v1,k2,v2,k3,v3){
return taoensso.encore.unexpected_arg_BANG_.call(null,arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2,k3,v3]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (arg,k1,v1,k2,v2,k3,v3,k4,v4){
return taoensso.encore.unexpected_arg_BANG_.call(null,arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2,k3,v3,k4,v4]));
}));

(taoensso.encore.unexpected_arg_BANG_.cljs$lang$maxFixedArity = 9);

/**
 * Same as `core/some?` (added in Clojure v1.6).
 */
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});
var ret__5804__auto___8241 = (function (){
/**
 * Like `or`, but returns the first non-nil form (may be falsey).
 */
taoensso.encore.or_some = (function taoensso$encore$or_some(var_args){
var G__8235 = arguments.length;
switch (G__8235) {
case 2:
return taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8243 = arguments.length;
var i__5750__auto___8244 = (0);
while(true){
if((i__5750__auto___8244 < len__5749__auto___8243)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8244]));

var G__8245 = (i__5750__auto___8244 + (1));
i__5750__auto___8244 = G__8245;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
}));

(taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
}));

(taoensso.encore.or_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8226__auto__","x__8226__auto__",-456471662,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8226__auto__","x__8226__auto__",-456471662,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","or-some","taoensso.encore/or-some",-952655848,null),null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8226__auto__","x__8226__auto__",-456471662,null),null,(1),null))))),null,(1),null)))));
}));

/** @this {Function} */
(taoensso.encore.or_some.cljs$lang$applyTo = (function (seq8231){
var G__8232 = cljs.core.first.call(null,seq8231);
var seq8231__$1 = cljs.core.next.call(null,seq8231);
var G__8233 = cljs.core.first.call(null,seq8231__$1);
var seq8231__$2 = cljs.core.next.call(null,seq8231__$1);
var G__8234 = cljs.core.first.call(null,seq8231__$2);
var seq8231__$3 = cljs.core.next.call(null,seq8231__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8232,G__8233,G__8234,seq8231__$3);
}));

(taoensso.encore.or_some.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(taoensso.encore.or_some.cljs$lang$macro = true);

/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args> <attrs>]
 *   with support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__8246 = arguments.length;
switch (G__8246) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.call(null,sym,args,null);
}));

(taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__8248 = ((((typeof cljs.core.first.call(null,args) === 'string') && (cljs.core.next.call(null,args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__8248,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__8248,(1),null);
var vec__8251 = ((((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1))) && (cljs.core.next.call(null,args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.call(null,vec__8251,(0),null);
var args__$2 = cljs.core.nth.call(null,vec__8251,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (function (){var b2__1591__auto__ = cljs.core.meta.call(null,sym);
if(cljs.core.truth_(b2__1591__auto__)){
var m = b2__1591__auto__;
return cljs.core.conj.call(null,m,attrs__$1);
} else {
return attrs__$1;
}
})();
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),args__$2,attrs__$3], null);
}));

(taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3);

taoensso.encore.core_merge = cljs.core.merge;
taoensso.encore.core_update_in = cljs.core.update_in;

taoensso.encore.quote_arglists = (function taoensso$encore$quote_arglists(m){
var b2__1591__auto__ = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
if(cljs.core.truth_(b2__1591__auto__)){
var x = b2__1591__auto__;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))));
} else {
return m;
}
});
taoensso.encore.get_truss_data = taoensso.truss.get_data;
/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__8257 = arguments.length;
switch (G__8257) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
}));

(taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || ((s === "")))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = ((cljs.core.keyword_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)):readers);
var default$__$1 = ((cljs.core.keyword_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1);
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
} else {
throw cljs.core.ex_info.call(null,"[encore/read-edn] Unexpected arg type (expected string or nil)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null)], null));
}
}
}));

(taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2);

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__8260 = arguments.length;
switch (G__8260) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
}));

(taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR__orig_val__8261 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__8262 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__8263 = null;
var _STAR_print_length_STAR__temp_val__8264 = null;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__8263);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__8264);

try{return cljs.core.pr_str.call(null,x);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__8262);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__8261);
}}));

(taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2);


/**
 * Same as `core/ex-message` (added in Clojure v1.10).
 */
taoensso.encore.ex_message = (function taoensso$encore$ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
 * Same as `core/ex-cause` (added in Clojure v1.10).
 */
taoensso.encore.ex_cause = (function taoensso$encore$ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__1591__auto__ = (function (){var and__5023__auto__ = x;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__1591__auto__)){
var data_map = b2__1591__auto__;
var base_map = (function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})();
return cljs.core.conj.call(null,base_map,data_map);
} else {
return null;
}
});


/**
 * Given an error (e.g. Throwable) and matching criteria.
 *   Returns the error if it matches all criteria, otherwise returns nil.
 * 
 *   `kind` may be:
 *  - A predicate function, (fn match? [x]) -> bool
 *  - A class (e.g. `ArithmeticException`, `AssertionError`, etc.)
 *  - `:all`     => any    platform error (Throwable or js/Error, etc.)
 *  - `:common`  => common platform error (Exception or js/Error)
 *  - `:ex-info` => a `ExceptionInfo` as created by `ex-info`
 *  - A set of `kind`s as above, at least one of which must match
 * 
 *   `pattern` may be:
 *  - A string or Regex against which `ex-message` must match
 *  - A map             against which `ex-data`    must match using `submap?`
 *  - A set of `pattern`s as above, at least one of which must match
 * 
 *   When an error with (nested) causes doesn't match, a match will be attempted
 *   against its (nested) causes.
 * 
 *   Low-level util, see also `throws`, `throws?`.
 */
taoensso.encore.matching_error = (function taoensso$encore$matching_error(var_args){
var G__8276 = arguments.length;
switch (G__8276) {
case 1:
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$1 = (function (err){
return err;
}));

(taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$2 = (function (kind,err){
var b2__1591__auto__ = ((cljs.core.fn_QMARK_.call(null,kind))?kind.call(null,err):((cljs.core.set_QMARK_.call(null,kind))?taoensso.encore.rsome.call(null,(function (p1__8273_SHARP_){
return taoensso.encore.matching_error.call(null,p1__8273_SHARP_,err);
}),kind):(function (){var G__8277 = kind;
var G__8277__$1 = (((G__8277 instanceof cljs.core.Keyword))?G__8277.fqn:null);
switch (G__8277__$1) {
case "all":
case "any":
return taoensso.encore.some_QMARK_.call(null,err);

break;
case "common":
case "default":
return (err instanceof Error);

break;
case "ex-info":
return (err instanceof cljs.core.ExceptionInfo);

break;
default:
return (err instanceof kind);

}
})()));
if(cljs.core.truth_(b2__1591__auto__)){
var match_QMARK_ = b2__1591__auto__;
return err;
} else {
return null;
}
}));

(taoensso.encore.matching_error.cljs$core$IFn$_invoke$arity$3 = (function (kind,pattern,err){
var b2__1591__auto__ = (function (){var and__5023__auto__ = taoensso.encore.matching_error.call(null,kind,err);
if(cljs.core.truth_(and__5023__auto__)){
if((pattern == null)){
return true;
} else {
if(cljs.core.set_QMARK_.call(null,pattern)){
return taoensso.encore.rsome.call(null,(function (p1__8274_SHARP_){
return taoensso.encore.matching_error.call(null,kind,p1__8274_SHARP_,err);
}),pattern);
} else {
if(typeof pattern === 'string'){
return taoensso.encore.str_contains_QMARK_.call(null,taoensso.encore.ex_message.call(null,err),pattern);
} else {
if(cljs.core.truth_(taoensso.encore.re_pattern_QMARK_.call(null,pattern))){
return cljs.core.re_find.call(null,pattern,taoensso.encore.ex_message.call(null,err));
} else {
if(cljs.core.map_QMARK_.call(null,pattern)){
var b2__1591__auto__ = cljs.core.ex_data.call(null,err);
if(cljs.core.truth_(b2__1591__auto__)){
var data = b2__1591__auto__;
return taoensso.encore.submap_QMARK_.call(null,data,pattern);
} else {
return null;
}
} else {
return taoensso.encore.unexpected_arg_BANG_.call(null,pattern,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","matching-error","taoensso.encore/matching-error",585936391,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [null,"null",new cljs.core.Symbol(null,"set","set",1945134081,null),"null",new cljs.core.Symbol(null,"map","map",-1282745308,null),"null",new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null)], null));
}
}
}
}
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__1591__auto__)){
var match_QMARK_ = b2__1591__auto__;
return err;
} else {
var b2__1591__auto____$1 = taoensso.encore.ex_cause.call(null,err);
if(cljs.core.truth_(b2__1591__auto____$1)){
var cause = b2__1591__auto____$1;
return taoensso.encore.matching_error.call(null,kind,pattern,cause);
} else {
return null;
}
}
}));

(taoensso.encore.matching_error.cljs$lang$maxFixedArity = 3);

var get_default_error_fn_8293 = (function (base_data){
var msg = cljs.core.get.call(null,base_data,new cljs.core.Keyword("error","msg","error/msg",-1549923468),"Error thrown during reduction");
var base_data__$1 = cljs.core.dissoc.call(null,base_data,new cljs.core.Keyword("error","msg","error/msg",-1549923468));
return (function taoensso$encore$default_error_fn(data,cause){
throw cljs.core.ex_info.call(null,msg,cljs.core.conj.call(null,base_data__$1,data),cause);
});
});
/**
 * Returns wrapper around given reducing function `rf` so that if `rf`
 *  throws, (error-fn <thrown-error> <contextual-data>) will be called.
 * 
 *  The default `error-fn` will rethrow the original error, wrapped in
 *  extra contextual information to aid debugging.
 * 
 *  See also `catching-xform`.
 */
taoensso.encore.catching_rf = (function taoensso$encore$catching_rf(var_args){
var G__8286 = arguments.length;
switch (G__8286) {
case 1:
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$1 = (function (rf){
return taoensso.encore.catching_rf.call(null,get_default_error_fn_8293.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf], null)),rf);
}));

(taoensso.encore.catching_rf.cljs$core$IFn$_invoke$arity$2 = (function (error_fn,rf){
var error_fn__$1 = ((cljs.core.map_QMARK_.call(null,error_fn))?get_default_error_fn_8293.call(null,error_fn):error_fn);
return (function() {
var taoensso$encore$catching_rf = null;
var taoensso$encore$catching_rf__0 = (function (){
try{return rf.call(null);
}catch (e8287){var t = e8287;
return error_fn__$1.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null))], null),t);
}});
var taoensso$encore$catching_rf__1 = (function (acc){
try{return rf.call(null,acc);
}catch (e8288){var t = e8288;
return error_fn__$1.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,acc)], null)], null)], null),t);
}});
var taoensso$encore$catching_rf__2 = (function (acc,in$){
try{return rf.call(null,acc,in$);
}catch (e8289){var t = e8289;
return error_fn__$1.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"in","in",109346662,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,acc)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),in$,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,in$)], null)], null)], null),t);
}});
var taoensso$encore$catching_rf__3 = (function (acc,k,v){
try{return rf.call(null,acc,k,v);
}catch (e8292){var t = e8292;
return error_fn__$1.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,acc)], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,k)], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,v)], null)], null)], null),t);
}});
taoensso$encore$catching_rf = function(acc,k,v){
switch(arguments.length){
case 0:
return taoensso$encore$catching_rf__0.call(this);
case 1:
return taoensso$encore$catching_rf__1.call(this,acc);
case 2:
return taoensso$encore$catching_rf__2.call(this,acc,k);
case 3:
return taoensso$encore$catching_rf__3.call(this,acc,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$catching_rf__0;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$catching_rf__1;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$catching_rf__2;
taoensso$encore$catching_rf.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$catching_rf__3;
return taoensso$encore$catching_rf;
})()
}));

(taoensso.encore.catching_rf.cljs$lang$maxFixedArity = 2);

/**
 * Like `catching-rf`, but applies to a transducer (`xform`).
 * 
 *   Makes debugging transductions much easier by greatly improving
 *   the information provided in any errors thrown by `xform` or the
 *   reducing fn:
 * 
 *  (transduce
 *    (catching-xform (comp (filter even?) (map inc))) ; Modified xform
 *    <reducing-fn>
 *    <...>)
 */
taoensso.encore.catching_xform = (function taoensso$encore$catching_xform(var_args){
var G__8295 = arguments.length;
switch (G__8295) {
case 2:
return taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$2 = (function (error_fn,xform){
return cljs.core.comp.call(null,(function (rf){
return taoensso.encore.catching_rf.call(null,error_fn,rf);
}),xform);
}));

(taoensso.encore.catching_xform.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.comp.call(null,taoensso.encore.catching_rf,xform);
}));

(taoensso.encore.catching_xform.cljs$lang$maxFixedArity = 2);

/**
 * Given a {:before ?(fn []) :after ?(fn [])} map, returns cross-platform
 *   test fixtures for use by both `clojure.test` and `cljs.test`:
 * 
 *  (let [f (test-fixtures {:before (fn [] (test-setup))})]
 *    (clojure.test/use-fixtures :once f)
 *       (cljs.test/use-fixtures :once f))
 */
taoensso.encore.test_fixtures = (function taoensso$encore$test_fixtures(fixtures_map){
var e_8305 = (function (){try{if(cljs.core.map_QMARK_.call(null,fixtures_map)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e8301){if((e8301 instanceof Error)){
var e_8305 = e8301;
return e_8305;
} else {
throw e8301;

}
}})();
if((e_8305 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),1174,3,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.Symbol(null,"map?","map?",-1780568534,null),null,new cljs.core.Symbol(null,"fixtures-map","fixtures-map",732147048,null),fixtures_map,e_8305,null);
}

return fixtures_map;
});
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string'));
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return ((x === true) || (x === false));
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.nameable_QMARK_ = (function taoensso$encore$nameable_QMARK_(x){
return ((taoensso.encore.named_QMARK_.call(null,x)) || (typeof x === 'string'));
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.transient_QMARK_ = (function taoensso$encore$transient_QMARK_(x){
return (x instanceof cljs.core.ITransientCollection);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.can_meta_QMARK_ = (function taoensso$encore$can_meta_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.inst_QMARK_ = (function taoensso$encore$inst_QMARK_(x){
return (x instanceof Date);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return ((taoensso.encore.ident_QMARK_.call(null,x)) && ((cljs.core.namespace.call(null,x) == null)));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__5023__auto__ = taoensso.encore.ident_QMARK_.call(null,x);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__5023__auto____$1)){
return true;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,x) == null)));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__5023__auto__ = (x instanceof cljs.core.Symbol);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__5023__auto____$1)){
return true;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,x) == null)));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__5023__auto__ = (x instanceof cljs.core.Keyword);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__5023__auto____$1)){
return true;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return ((typeof x === 'string') && ((!(cljs.core._EQ_.call(null,x,"")))));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return ((typeof x === 'string') && ((!(clojure.string.blank_QMARK_.call(null,x)))));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return (!(clojure.string.blank_QMARK_.call(null,x)));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2))));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3))));
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   finite (excl. NaN and infinities).
 */
taoensso.encore.finite_num_QMARK_ = (function taoensso$encore$finite_num_QMARK_(x){
return Number.isFinite(x);
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   a fixed-precision integer.
 */
taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
var and__5023__auto__ = taoensso.encore.finite_num_QMARK_.call(null,x);
if(cljs.core.truth_(and__5023__auto__)){
return (parseFloat(x) === parseInt(x,(10)));
} else {
return and__5023__auto__;
}
});
/**
 * Returns true iff given a number (of standard type) that is:
 *   a fixed-precision floating-point (incl. NaN and infinities).
 */
taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return ((typeof x === 'number') && ((!((parseFloat(x) === parseInt(x,(10)))))));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return (x === (0));
});

taoensso.encore.nzero_num_QMARK_ = (function taoensso$encore$nzero_num_QMARK_(x){
return (!((x === (0))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (x > (0));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (x < (0));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
var and__5023__auto__ = taoensso.encore.int_QMARK_.call(null,x);
if(cljs.core.truth_(and__5023__auto__)){
return (!((x < (0))));
} else {
return and__5023__auto__;
}
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
var and__5023__auto__ = taoensso.encore.int_QMARK_.call(null,x);
if(cljs.core.truth_(and__5023__auto__)){
return (x > (0));
} else {
return and__5023__auto__;
}
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
var and__5023__auto__ = taoensso.encore.int_QMARK_.call(null,x);
if(cljs.core.truth_(and__5023__auto__)){
return (x < (0));
} else {
return and__5023__auto__;
}
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
var and__5023__auto__ = taoensso.encore.float_QMARK_.call(null,x);
if(cljs.core.truth_(and__5023__auto__)){
return (!((x < (0))));
} else {
return and__5023__auto__;
}
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
var and__5023__auto__ = taoensso.encore.float_QMARK_.call(null,x);
if(cljs.core.truth_(and__5023__auto__)){
return (x > (0));
} else {
return and__5023__auto__;
}
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
var and__5023__auto__ = taoensso.encore.float_QMARK_.call(null,x);
if(cljs.core.truth_(and__5023__auto__)){
return (x < (0));
} else {
return and__5023__auto__;
}
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
var and__5023__auto__ = taoensso.encore.int_QMARK_.call(null,x);
if(cljs.core.truth_(and__5023__auto__)){
return (!((x < (0))));
} else {
return and__5023__auto__;
}
});
/**
 * Returns true iff given number in unsigned unit proportion interval ∈ℝ[0,1].
 */
taoensso.encore.pnum_QMARK_ = (function taoensso$encore$pnum_QMARK_(x){
var and__5023__auto__ = typeof x === 'number';
if(and__5023__auto__){
var n = x;
return (((n >= 0.0)) && ((n <= 1.0)));
} else {
return and__5023__auto__;
}
});
/**
 * Returns true iff given number in signed unit proportion interval ∈ℝ[-1,1].
 */
taoensso.encore.rnum_QMARK_ = (function taoensso$encore$rnum_QMARK_(x){
var and__5023__auto__ = typeof x === 'number';
if(and__5023__auto__){
var n = x;
return (((n >= -1.0)) && ((n <= 1.0)));
} else {
return and__5023__auto__;
}
});
/**
 * Is `clojure.core.async` present (not necessarily loaded)?
 */
taoensso.encore.have_core_async_QMARK_ = true;
/**
 * Returns true iff given a `clojure.core.async` channel.
 */
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var b2__1591__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(b2__1591__auto__)){
var ns = b2__1591__auto__;
return [ns,"/",n].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank_trim = (function taoensso$encore$as__QMARK_nblank_trim(x){
if(typeof x === 'string'){
var s = clojure.string.trim.call(null,x);
if(cljs.core._EQ_.call(null,s,"")){
return null;
} else {
return s;
}
} else {
return null;
}
});


taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__1591__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__1591__auto__)){
var n = b2__1591__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__1591__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__1591__auto__)){
var n = b2__1591__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__1591__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__1591__auto__)){
var n = b2__1591__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__1591__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__1591__auto__)){
var n = b2__1591__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__1591__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__1591__auto__)){
var n = b2__1591__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pnum = (function taoensso$encore$as__QMARK_pnum(x){
var b2__1591__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__1591__auto__)){
var f = b2__1591__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_rnum = (function taoensso$encore$as__QMARK_rnum(x){
var b2__1591__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__1591__auto__)){
var f = b2__1591__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < -1.0)){
return -0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if(((x === true) || (x === false))){
return x;
} else {
if(((cljs.core._EQ_.call(null,x,(0))) || (((cljs.core._EQ_.call(null,x,"false")) || (((cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0")))))))){
return false;
} else {
if(((cljs.core._EQ_.call(null,x,(1))) || (((cljs.core._EQ_.call(null,x,"true")) || (((cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1")))))))){
return true;
} else {
return null;
}
}
}
}
});

var regex_8345 = /^[^\s@]+@[^\s@]+\.\S*[^\.]$/;
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(var_args){
var G__8335 = arguments.length;
switch (G__8335) {
case 1:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
return taoensso.encore.as__QMARK_email.call(null,(320),_QMARK_s);
}));

(taoensso.encore.as__QMARK_email.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__1591__auto__ = (function (){var and__5023__auto__ = _QMARK_s;
if(cljs.core.truth_(and__5023__auto__)){
return clojure.string.trim.call(null,_QMARK_s);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__1591__auto__)){
var s = b2__1591__auto__;
if((cljs.core.count.call(null,s) <= max_len)){
return cljs.core.re_find.call(null,regex_8345,s);
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(var_args){
var G__8337 = arguments.length;
switch (G__8337) {
case 1:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_s){
var b2__1591__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(b2__1591__auto__)){
var email = b2__1591__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$core$IFn$_invoke$arity$2 = (function (max_len,_QMARK_s){
var b2__1591__auto__ = taoensso.encore.as__QMARK_email.call(null,max_len,_QMARK_s);
if(cljs.core.truth_(b2__1591__auto__)){
var email = b2__1591__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
}));

(taoensso.encore.as__QMARK_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e8338){var _ = e8338;
return false;
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Lightweight `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__8340 = arguments.length;
switch (G__8340) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,taoensso.encore.some_QMARK_,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,pred,x,null);
}));

(taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,["[encore/is!] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," failed against arg: ",cljs.core.pr_str.call(null,x)].join(''),taoensso.encore.assoc_some.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data));
}
}));

(taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3);

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(kind,x){
throw cljs.core.ex_info.call(null,["[encore/as-",cljs.core.name.call(null,kind),"] failed against arg: ",cljs.core.pr_str.call(null,x)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-kind","pred-kind",138885083),kind,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null)], null));
});
var _as_throw_8357 = taoensso.encore._as_throw;
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});

taoensso.encore.as_nblank_trim = (function taoensso$encore$as_nblank_trim(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nblank_trim.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"nblank-trim","nblank-trim",-1443525862),x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nempty_str.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(var_args){
var G__8349 = arguments.length;
switch (G__8349) {
case 1:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5025__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
}));

(taoensso.encore.as_email.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5025__auto__ = taoensso.encore.as__QMARK_email.call(null,n,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
}));

(taoensso.encore.as_email.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(var_args){
var G__8353 = arguments.length;
switch (G__8353) {
case 1:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$1 = (function (x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
}));

(taoensso.encore.as_nemail.cljs$core$IFn$_invoke$arity$2 = (function (n,x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nemail.call(null,n,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
}));

(taoensso.encore.as_nemail.cljs$lang$maxFixedArity = 2);


taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_udt.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nat_int.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_pos_int.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_nat_float.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_pos_float.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});

taoensso.encore.as_pnum = (function taoensso$encore$as_pnum(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_pnum.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"pnum","pnum",-602522434),x);
}
});

taoensso.encore.as_rnum = (function taoensso$encore$as_rnum(x){
var or__5025__auto__ = taoensso.encore.as__QMARK_rnum.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"rnum","rnum",-783850724),x);
}
});

taoensso.encore.as_pnum_BANG_ = (function taoensso$encore$as_pnum_BANG_(x){
if(cljs.core.truth_(taoensso.encore.pnum_QMARK_.call(null,x))){
return x;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"pnum!","pnum!",837651383),x);
}
});

taoensso.encore.as_rnum_BANG_ = (function taoensso$encore$as_rnum_BANG_(x){
if(cljs.core.truth_(taoensso.encore.rnum_QMARK_.call(null,x))){
return x;
} else {
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"rnum!","rnum!",-567516079),x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if((_QMARK_b == null)){
return _as_throw_8357.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__8367 = arguments.length;
switch (G__8367) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.call(null,ks,false);
}));

(taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq.call(null,ks)){
var parts = cljs.core.reduce.call(null,(function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.call(null,cljs.core.conj,acc,taoensso.encore.explode_keyword.call(null,in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq.call(null,parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.seq.call(null,ppop))?clojure.string.join.call(null,".",ppop):null),cljs.core.peek.call(null,parts));
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2);

taoensso.encore.convey_reduced = (function taoensso$encore$convey_reduced(x){
if(cljs.core.reduced_QMARK_.call(null,x)){
return cljs.core.reduced.call(null,x);
} else {
return x;
}
});
/**
 * Public version of `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__8375){
var vec__8376 = p__8375;
var k = cljs.core.nth.call(null,vec__8376,(0),null);
var v = cljs.core.nth.call(null,vec__8376,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(var_args){
var G__8381 = arguments.length;
switch (G__8381) {
case 3:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,end){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$4 = (function (rf,init,start,end){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,start,end));
}));

(taoensso.encore.reduce_n.cljs$core$IFn$_invoke$arity$5 = (function (rf,init,start,end,step){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,start,end,step));
}));

(taoensso.encore.reduce_n.cljs$lang$maxFixedArity = 5);

/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 *  As `reduce-kv` against vector coll, but works on any seqable coll type.
 */
taoensso.encore.reduce_indexed = (function taoensso$encore$reduce_indexed(rf,init,coll){
var c = taoensso.encore.counter.call(null);
return cljs.core.reduce.call(null,(function (acc,in$){
return rf.call(null,acc,c.call(null),in$);
}),init,coll);
});
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.call(null,(function (acc,k){
return f.call(null,acc,k,taoensso.encore.goog$module$goog$object.get.call(null,o,k,null));
}),init,cljs.core.js_keys.call(null,o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__8384_SHARP_,p2__8383_SHARP_){
return proc.call(null,p2__8383_SHARP_);
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__8387_SHARP_,p2__8385_SHARP_,p3__8386_SHARP_){
return proc.call(null,p2__8385_SHARP_,p3__8386_SHARP_);
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs.call(null,(function (p1__8390_SHARP_,p2__8388_SHARP_,p3__8389_SHARP_){
return proc.call(null,p2__8388_SHARP_,p3__8389_SHARP_);
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj.call(null,(function (p1__8393_SHARP_,p2__8391_SHARP_,p3__8392_SHARP_){
return proc.call(null,p2__8391_SHARP_,p3__8392_SHARP_);
}),null,obj);

return null;
});
var rf_8412 = (function (pred){
return (function (_acc,in$){
var b2__1591__auto__ = pred.call(null,in$);
if(cljs.core.truth_(b2__1591__auto__)){
var p = b2__1591__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
});
});
taoensso.encore.rsome = (function taoensso$encore$rsome(var_args){
var G__8395 = arguments.length;
switch (G__8395) {
case 2:
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.call(null,rf_8412.call(null,pred),null,coll);
}));

(taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,rf_8412.call(null,pred)),null,coll);
}));

(taoensso.encore.rsome.cljs$lang$maxFixedArity = 3);


var rf_8416 = (function (pred){
return (function (_acc,k,v){
var b2__1591__auto__ = pred.call(null,k,v);
if(cljs.core.truth_(b2__1591__auto__)){
var p = b2__1591__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
});
});
var tf_8417 = (function (pred){
return (function (_acc,p__8396){
var vec__8397 = p__8396;
var k = cljs.core.nth.call(null,vec__8397,(0),null);
var v = cljs.core.nth.call(null,vec__8397,(1),null);
var b2__1591__auto__ = pred.call(null,k,v);
if(cljs.core.truth_(b2__1591__auto__)){
var p = b2__1591__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
});
});
taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv.call(null,rf_8416.call(null,pred),null,coll);
});

var rf_8418 = (function (pred){
return (function (_acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return cljs.core.reduced.call(null,in$);
} else {
return null;
}
});
});
taoensso.encore.rfirst = (function taoensso$encore$rfirst(var_args){
var G__8401 = arguments.length;
switch (G__8401) {
case 2:
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.call(null,rf_8418.call(null,pred),null,coll);
}));

(taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,rf_8418.call(null,pred)),null,coll);
}));

(taoensso.encore.rfirst.cljs$lang$maxFixedArity = 3);


var rf_8420 = (function (pred){
return (function (_acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
});
});
var tf_8421 = (function (pred){
return (function (_acc,p__8402){
var vec__8403 = p__8402;
var k = cljs.core.nth.call(null,vec__8403,(0),null);
var v = cljs.core.nth.call(null,vec__8403,(1),null);
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
});
});
taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv.call(null,rf_8420.call(null,pred),null,coll);
});

var rf_8422 = (function (pred){
return (function (_acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
});
});
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(var_args){
var G__8407 = arguments.length;
switch (G__8407) {
case 2:
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.call(null,rf_8422.call(null,pred),true,coll);
}));

(taoensso.encore.revery_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (xform,pred,coll){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,rf_8422.call(null,pred)),true,coll);
}));

(taoensso.encore.revery_QMARK_.cljs$lang$maxFixedArity = 3);


var rf_8424 = (function (pred){
return (function (_acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
});
});
var tf_8425 = (function (pred){
return (function (_acc,p__8408){
var vec__8409 = p__8408;
var k = cljs.core.nth.call(null,vec__8409,(0),null);
var v = cljs.core.nth.call(null,vec__8409,(1),null);
if(cljs.core.truth_(pred.call(null,k,v))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
});
});
taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv.call(null,rf_8424.call(null,pred),true,coll);
});
/**
 * Reduces given sequential xs and ys as pairs (e.g. key-val pairs).
 *   Calls (rf acc x y) for each sequential pair.
 * 
 *   Useful, among other things, as a more flexible version of `zipmap`.
 */
taoensso.encore.reduce_zip = (function taoensso$encore$reduce_zip(rf,init,xs,ys){
if(((cljs.core.vector_QMARK_.call(null,xs)) && (cljs.core.vector_QMARK_.call(null,ys)))){
var n = (function (){var x__5113__auto__ = cljs.core.count.call(null,xs);
var y__5114__auto__ = cljs.core.count.call(null,ys);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return taoensso.encore.reduce_n.call(null,(function (acc,idx){
return rf.call(null,acc,cljs.core.get.call(null,xs,idx),cljs.core.get.call(null,ys,idx));
}),init,n);
} else {
var acc = init;
var xs__$1 = cljs.core.seq.call(null,xs);
var ys__$1 = cljs.core.seq.call(null,ys);
while(true){
if(((xs__$1) && (ys__$1))){
var result = rf.call(null,acc,cljs.core.first.call(null,xs__$1),cljs.core.first.call(null,ys__$1));
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.deref.call(null,result);
} else {
var G__8428 = result;
var G__8429 = cljs.core.next.call(null,xs__$1);
var G__8430 = cljs.core.next.call(null,ys__$1);
acc = G__8428;
xs__$1 = G__8429;
ys__$1 = G__8430;
continue;
}
} else {
return acc;
}
break;
}
}
});

/**
* @constructor
*/
taoensso.encore.Tup2 = (function (x,y){
this.x = x;
this.y = y;
});

(taoensso.encore.Tup2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(taoensso.encore.Tup2.cljs$lang$type = true);

(taoensso.encore.Tup2.cljs$lang$ctorStr = "taoensso.encore/Tup2");

(taoensso.encore.Tup2.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/Tup2");
}));

/**
 * Positional factory function for taoensso.encore/Tup2.
 */
taoensso.encore.__GT_Tup2 = (function taoensso$encore$__GT_Tup2(x,y){
return (new taoensso.encore.Tup2(x,y));
});



/**
* @constructor
*/
taoensso.encore.Tup3 = (function (x,y,z){
this.x = x;
this.y = y;
this.z = z;
});

(taoensso.encore.Tup3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"z","z",851004344,null)], null);
}));

(taoensso.encore.Tup3.cljs$lang$type = true);

(taoensso.encore.Tup3.cljs$lang$ctorStr = "taoensso.encore/Tup3");

(taoensso.encore.Tup3.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/Tup3");
}));

/**
 * Positional factory function for taoensso.encore/Tup3.
 */
taoensso.encore.__GT_Tup3 = (function taoensso$encore$__GT_Tup3(x,y,z){
return (new taoensso.encore.Tup3(x,y,z));
});

/**
 * Like `reduce` but supports separate simultaneous accumulators
 *   as a micro-optimisation when reducing a large collection multiple
 *   times.
 */
taoensso.encore.reduce_multi = (function taoensso$encore$reduce_multi(var_args){
var G__8433 = arguments.length;
switch (G__8433) {
case 3:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$3 = (function (rf,init,coll){
return cljs.core.reduce.call(null,rf,init,coll);
}));

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$5 = (function (rf1,init1,rf2,init2,coll){
var tuple = cljs.core.reduce.call(null,(function (tuple,in$){
var x = tuple.x;
var y = tuple.y;
var rx_QMARK_ = cljs.core.reduced_QMARK_.call(null,x);
var ry_QMARK_ = cljs.core.reduced_QMARK_.call(null,y);
if(((rx_QMARK_) && (ry_QMARK_))){
return cljs.core.reduced.call(null,tuple);
} else {
var x__$1 = ((rx_QMARK_)?x:rf1.call(null,x,in$));
var y__$1 = ((ry_QMARK_)?y:rf2.call(null,y,in$));
return (new taoensso.encore.Tup2(x__$1,y__$1));
}
}),(new taoensso.encore.Tup2(init1,init2)),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.unreduced.call(null,tuple.x),cljs.core.unreduced.call(null,tuple.y)], null);
}));

(taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$7 = (function (rf1,init1,rf2,init2,rf3,init3,coll){
var tuple = cljs.core.reduce.call(null,(function (tuple,in$){
var x = tuple.x;
var y = tuple.y;
var z = tuple.z;
var rx_QMARK_ = cljs.core.reduced_QMARK_.call(null,x);
var ry_QMARK_ = cljs.core.reduced_QMARK_.call(null,y);
var rz_QMARK_ = cljs.core.reduced_QMARK_.call(null,z);
if(((rx_QMARK_) && (((ry_QMARK_) && (rz_QMARK_))))){
return cljs.core.reduced.call(null,tuple);
} else {
var x__$1 = ((rx_QMARK_)?x:rf1.call(null,x,in$));
var y__$1 = ((ry_QMARK_)?y:rf2.call(null,y,in$));
var z__$1 = ((rz_QMARK_)?z:rf3.call(null,z,in$));
return (new taoensso.encore.Tup3(x__$1,y__$1,z__$1));
}
}),(new taoensso.encore.Tup3(init1,init2,init3)),coll);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.unreduced.call(null,tuple.x),cljs.core.unreduced.call(null,tuple.y),cljs.core.unreduced.call(null,tuple.z)], null);
}));

(taoensso.encore.reduce_multi.cljs$lang$maxFixedArity = 7);

/**
 * Reduces sequence of elements interleaved from given `colls`.
 *   (reduce-interleave-all conj [] [[:a :b] [1 2 3]]) => [:a 1 :b 2 3]
 */
taoensso.encore.reduce_interleave_all = (function taoensso$encore$reduce_interleave_all(rf,init,colls){
if(cljs.core.empty_QMARK_.call(null,colls)){
return init;
} else {
var acc = init;
var colls__$1 = colls;
while(true){
var tuple = cljs.core.reduce.call(null,((function (acc,colls__$1){
return (function (tuple,in$){
if(cljs.core.empty_QMARK_.call(null,in$)){
return tuple;
} else {
var vec__8435 = in$;
var seq__8436 = cljs.core.seq.call(null,vec__8435);
var first__8437 = cljs.core.first.call(null,seq__8436);
var seq__8436__$1 = cljs.core.next.call(null,seq__8436);
var in1 = first__8437;
var next_in = seq__8436__$1;
var acc__$1 = tuple.x;
var ncs = tuple.y;
var res = rf.call(null,acc__$1,in1);
if(cljs.core.reduced_QMARK_.call(null,res)){
return cljs.core.reduced.call(null,(new taoensso.encore.Tup2(cljs.core.deref.call(null,res),null)));
} else {
return (new taoensso.encore.Tup2(res,((next_in)?cljs.core.conj.call(null,(function (){var or__5025__auto__ = ncs;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),next_in):ncs)));
}
}
});})(acc,colls__$1))
,(new taoensso.encore.Tup2(acc,null)),colls__$1);
var acc__$1 = tuple.x;
var next_colls = tuple.y;
if(cljs.core.truth_(next_colls)){
var G__8442 = acc__$1;
var G__8443 = next_colls;
acc = G__8442;
colls__$1 = G__8443;
continue;
} else {
return acc__$1;
}
break;
}
}
});
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__8439 = arguments.length;
switch (G__8439) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
}));

(taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3);

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.clamp_int = (function taoensso$encore$clamp_int(nmin,nmax,n){
var nmin__$1 = cljs.core.long$.call(null,nmin);
var nmax__$1 = cljs.core.long$.call(null,nmax);
var n__$1 = cljs.core.long$.call(null,n);
if((n__$1 < nmin__$1)){
return nmin__$1;
} else {
if((n__$1 > nmax__$1)){
return nmax__$1;
} else {
return n__$1;
}
}
});
taoensso.encore.clamp_float = (function taoensso$encore$clamp_float(nmin,nmax,n){
var nmin__$1 = nmin;
var nmax__$1 = nmax;
var n__$1 = n;
if((n__$1 < nmin__$1)){
return nmin__$1;
} else {
if((n__$1 > nmax__$1)){
return nmax__$1;
} else {
return n__$1;
}
}
});
taoensso.encore.pnum_complement = (function taoensso$encore$pnum_complement(pnum){
return (1.0 - pnum);
});
taoensso.encore.as_pnum_complement = (function taoensso$encore$as_pnum_complement(x){
return (1.0 - taoensso.encore.as_pnum.call(null,x));
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__8457 = arguments.length;
switch (G__8457) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (kind,n){
return taoensso.encore.round_STAR_.call(null,kind,null,n);
}));

(taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (kind,precision,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(precision)?Math.pow(10.0,precision):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__8458 = kind;
var G__8458__$1 = (((G__8458 instanceof cljs.core.Keyword))?G__8458.fqn:null);
switch (G__8458__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"[encore/round*] Unexpected round kind (expected \u2208 #{:round :floor :ceil :trunc})",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),kind,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,kind)], null)], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$.call(null,rounded);
}
}));

(taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3);

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});

taoensso.encore.roundn = (function taoensso$encore$roundn(precision,n){
var p = Math.pow(10.0,cljs.core.long$.call(null,precision));
return (Math.round((n * p)) / p);
});

taoensso.encore.perc = (function taoensso$encore$perc(n,divisor){
return Math.round(((n / divisor) * 100.0));
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__8462 = arguments.length;
switch (G__8462) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.call(null,n_attempt,null);
}));

(taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__8463){
var map__8464 = p__8463;
var map__8464__$1 = cljs.core.__destructure_map.call(null,map__8464);
var min = cljs.core.get.call(null,map__8464__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__8464__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__8464__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$.call(null,(((b + cljs.core.rand.call(null,b)) * 0.5) * factor));
var t__$1 = cljs.core.long$.call(null,(cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$.call(null,(cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
}));

(taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2);

/**
 * Returns true with given probability ∈ ℝ[0,1].
 */
taoensso.encore.chance = (function taoensso$encore$chance(prob){
return (Math.random() < prob);
});
taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_window = (((typeof window !== 'undefined'))?window:null);
taoensso.encore.js__QMARK_process = (((typeof process !== 'undefined'))?process:null);
taoensso.encore.js__QMARK_crypto = (function (){var or__5025__auto__ = (((typeof crypto !== 'undefined'))?crypto:null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if((typeof window !== 'undefined')){
return taoensso.encore.goog$module$goog$object.get.call(null,window,"crypto");
} else {
return null;
}
}
})();
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
/**
 * Like `force` for vars.
 */
taoensso.encore.force_var = (function taoensso$encore$force_var(x){
if(cljs.core.var_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,taoensso.encore.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__8471 = arguments.length;
switch (G__8471) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8473 = arguments.length;
var i__5750__auto___8474 = (0);
while(true){
if((i__5750__auto___8474 < len__5749__auto___8473)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8474]));

var G__8476 = (i__5750__auto___8474 + (1));
i__5750__auto___8474 = G__8476;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((taoensso.encore.some_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y)));
}));

(taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__5023__auto__ = taoensso.encore.some_QMARK_.call(null,x);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.call(null,x,y);
if(and__5023__auto____$1){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__8466_SHARP_){
return cljs.core._EQ_.call(null,p1__8466_SHARP_,x);
}),more);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}));

/** @this {Function} */
(taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq8468){
var G__8469 = cljs.core.first.call(null,seq8468);
var seq8468__$1 = cljs.core.next.call(null,seq8468);
var G__8470 = cljs.core.first.call(null,seq8468__$1);
var seq8468__$2 = cljs.core.next.call(null,seq8468__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8469,G__8470,seq8468__$2);
}));

(taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__8481 = arguments.length;
switch (G__8481) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8486 = arguments.length;
var i__5750__auto___8487 = (0);
while(true){
if((i__5750__auto___8487 < len__5749__auto___8486)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8487]));

var G__8488 = (i__5750__auto___8487 + (1));
i__5750__auto___8487 = G__8488;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
}));

(taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
}));

/** @this {Function} */
(taoensso.encore.nnil.cljs$lang$applyTo = (function (seq8477){
var G__8478 = cljs.core.first.call(null,seq8477);
var seq8477__$1 = cljs.core.next.call(null,seq8477);
var G__8479 = cljs.core.first.call(null,seq8477__$1);
var seq8477__$2 = cljs.core.next.call(null,seq8477__$1);
var G__8480 = cljs.core.first.call(null,seq8477__$2);
var seq8477__$3 = cljs.core.next.call(null,seq8477__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8478,G__8479,G__8480,seq8477__$3);
}));

(taoensso.encore.nnil.cljs$lang$maxFixedArity = (3));

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__8483 = clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),/-/,(2));
var s_version = cljs.core.nth.call(null,vec__8483,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.call(null,vec__8483,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__1591__auto__ = cljs.core.re_seq.call(null,/\d+/,s_version);
if(cljs.core.truth_(b2__1591__auto__)){
var s = b2__1591__auto__;
return cljs.core.mapv.call(null,taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__1591__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__1591__auto__)){
var s = b2__1591__auto__;
return clojure.string.lower_case.call(null,s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__8490 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__8490,(0),null);
var yc = cljs.core.nth.call(null,vec__8490,(1),null);
var zc = cljs.core.nth.call(null,vec__8490,(2),null);
var vec__8493 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version.call(null,min_version)));
var xm = cljs.core.nth.call(null,vec__8493,(0),null);
var ym = cljs.core.nth.call(null,vec__8493,(1),null);
var zm = cljs.core.nth.call(null,vec__8493,(2),null);
var vec__8496 = cljs.core.mapv.call(null,(function (p1__8489_SHARP_){
var or__5025__auto__ = p1__8489_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__8496,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__8496,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__8496,(2),null);
if((((xc > xm__$1)) || (((cljs.core._EQ_.call(null,xc,xm__$1)) && ((((yc > ym__$1)) || (((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))))))){
return null;
} else {
throw cljs.core.ex_info.call(null,"Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see `https://www.taoensso.com/dependency-conflicts` for solutions.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Returns a `MapEntry` with given key and value.
 */
taoensso.encore.map_entry = (function taoensso$encore$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Returns true iff given a `PersistentQueue`.
 */
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a new `PersistentQueue`.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__8500 = arguments.length;
switch (G__8500) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
}));

(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(taoensso.encore.queue.cljs$lang$maxFixedArity = 1);

/**
 * Returns a new `PersistentQueue` given items.
 */
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8505 = arguments.length;
var i__5750__auto___8506 = (0);
while(true){
if((i__5750__auto___8506 < len__5749__auto___8505)){
args__5755__auto__.push((arguments[i__5750__auto___8506]));

var G__8507 = (i__5750__auto___8506 + (1));
i__5750__auto___8506 = G__8507;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
}));

(taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq8501){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8501));
}));

taoensso.encore.ensure_vec = (function taoensso$encore$ensure_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.ensure_set = (function taoensso$encore$ensure_set(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
/**
 * Like `assoc` for JS objects.
 */
taoensso.encore.oset = (function taoensso$encore$oset(o,k,v){
return taoensso.encore.goog$module$goog$object.set.call(null,(((o == null))?({}):o),cljs.core.name.call(null,k),v);
});
var sentinel_8519 = ({});
/**
 * Experimental. Like `assoc-in` for JS objects.
 */
taoensso.encore.oset_in = (function taoensso$encore$oset_in(o,ks,v){
var o__$1 = (((o == null))?({}):o);
var b2__1591__auto__ = cljs.core.seq.call(null,ks);
if(b2__1591__auto__){
var ks__$1 = b2__1591__auto__;
var o_next = o__$1;
var ks_next = ks__$1;
while(true){
var k1 = cljs.core.name.call(null,cljs.core.first.call(null,ks_next));
var o_next__$1 = (function (){var o_next_STAR_ = taoensso.encore.goog$module$goog$object.get.call(null,o_next,k1,sentinel_8519);
if((o_next_STAR_ === sentinel_8519)){
var new_obj = ({});
taoensso.encore.goog$module$goog$object.set.call(null,o_next,k1,new_obj);

return new_obj;
} else {
return o_next_STAR_;
}
})();
var b2__1591__auto____$1 = cljs.core.next.call(null,ks_next);
if(b2__1591__auto____$1){
var ks_next__$1 = b2__1591__auto____$1;
var G__8528 = o_next__$1;
var G__8529 = ks_next__$1;
o_next = G__8528;
ks_next = G__8529;
continue;
} else {
taoensso.encore.goog$module$goog$object.set.call(null,o_next__$1,k1,v);

return o__$1;
}
break;
}
} else {
return o__$1;
}
});
/**
 * Like `get` for JS objects.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__8520 = arguments.length;
switch (G__8520) {
case 1:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$1 = (function (k){
return taoensso.encore.goog$module$goog$object.get.call(null,taoensso.encore.js__QMARK_window,cljs.core.name.call(null,k));
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return taoensso.encore.goog$module$goog$object.get.call(null,o,cljs.core.name.call(null,k),null);
}));

(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return taoensso.encore.goog$module$goog$object.get.call(null,o,cljs.core.name.call(null,k),not_found);
}));

(taoensso.encore.oget.cljs$lang$maxFixedArity = 3);

var sentinel_8531 = ({});
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = (function taoensso$encore$oget_in(var_args){
var G__8527 = arguments.length;
switch (G__8527) {
case 1:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.oget_in.call(null,taoensso.encore.js__QMARK_window,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return taoensso.encore.oget_in.call(null,o,ks,null);
}));

(taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1){
var o__$2 = taoensso.encore.goog$module$goog$object.get.call(null,o__$1,cljs.core.name.call(null,cljs.core.first.call(null,ks__$1)),sentinel_8531);
if((o__$2 === sentinel_8531)){
return not_found;
} else {
var G__8535 = o__$2;
var G__8536 = cljs.core.next.call(null,ks__$1);
o__$1 = G__8535;
ks__$1 = G__8536;
continue;
}
} else {
return o__$1;
}
break;
}
}));

(taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3);

/**
 * Like `get` but returns val for first key that exists in map.
 *   Useful for key aliases or fallbacks. See also `get*`.
 */
taoensso.encore.get1 = (function taoensso$encore$get1(var_args){
var G__8534 = arguments.length;
switch (G__8534) {
case 2:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.get1.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return cljs.core.get.call(null,m,k);
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$3 = (function (m,k,not_found){
return cljs.core.get.call(null,m,k,not_found);
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$4 = (function (m,k1,k2,not_found){
var b2__1591__auto__ = (function (){var and__5023__auto__ = m;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = cljs.core.find.call(null,m,k1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.find.call(null,m,k2);
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__1591__auto__)){
var e = b2__1591__auto__;
return cljs.core.val.call(null,e);
} else {
return not_found;
}
}));

(taoensso.encore.get1.cljs$core$IFn$_invoke$arity$5 = (function (m,k1,k2,k3,not_found){
var b2__1591__auto__ = (function (){var and__5023__auto__ = m;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = cljs.core.find.call(null,m,k1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.find.call(null,m,k2);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.find.call(null,m,k3);
}
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__1591__auto__)){
var e = b2__1591__auto__;
return cljs.core.val.call(null,e);
} else {
return not_found;
}
}));

(taoensso.encore.get1.cljs$lang$maxFixedArity = 5);

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__8547 = arguments.length;
switch (G__8547) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8554 = arguments.length;
var i__5750__auto___8555 = (0);
while(true){
if((i__5750__auto___8555 < len__5749__auto___8554)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8555]));

var G__8561 = (i__5750__auto___8555 + (1));
i__5750__auto___8555 = G__8561;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.call(null,coll,x);
}
}));

(taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq8544){
var G__8545 = cljs.core.first.call(null,seq8544);
var seq8544__$1 = cljs.core.next.call(null,seq8544);
var G__8546 = cljs.core.first.call(null,seq8544__$1);
var seq8544__$2 = cljs.core.next.call(null,seq8544__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8545,G__8546,seq8544__$2);
}));

(taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2));


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__8552 = arguments.length;
switch (G__8552) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8569 = arguments.length;
var i__5750__auto___8570 = (0);
while(true){
if((i__5750__auto___8570 < len__5749__auto___8569)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8570]));

var G__8571 = (i__5750__auto___8570 + (1));
i__5750__auto___8570 = G__8571;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
}));

(taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_when,taoensso.encore.conj_when.call(null,coll,x),more);
}));

/** @this {Function} */
(taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq8549){
var G__8550 = cljs.core.first.call(null,seq8549);
var seq8549__$1 = cljs.core.next.call(null,seq8549);
var G__8551 = cljs.core.first.call(null,seq8549__$1);
var seq8549__$2 = cljs.core.next.call(null,seq8549__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8550,G__8551,seq8549__$2);
}));

(taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2));

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__8567 = arguments.length;
switch (G__8567) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8598 = arguments.length;
var i__5750__auto___8599 = (0);
while(true){
if((i__5750__auto___8599 < len__5749__auto___8598)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8599]));

var G__8600 = (i__5750__auto___8599 + (1));
i__5750__auto___8599 = G__8600;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq8563){
var G__8564 = cljs.core.first.call(null,seq8563);
var seq8563__$1 = cljs.core.next.call(null,seq8563);
var G__8565 = cljs.core.first.call(null,seq8563__$1);
var seq8563__$2 = cljs.core.next.call(null,seq8563__$1);
var G__8566 = cljs.core.first.call(null,seq8563__$2);
var seq8563__$3 = cljs.core.next.call(null,seq8563__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8564,G__8565,G__8566,seq8563__$3);
}));

(taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__8577 = arguments.length;
switch (G__8577) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8607 = arguments.length;
var i__5750__auto___8608 = (0);
while(true){
if((i__5750__auto___8608 < len__5749__auto___8607)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8608]));

var G__8609 = (i__5750__auto___8608 + (1));
i__5750__auto___8608 = G__8609;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq8573){
var G__8574 = cljs.core.first.call(null,seq8573);
var seq8573__$1 = cljs.core.next.call(null,seq8573);
var G__8575 = cljs.core.first.call(null,seq8573__$1);
var seq8573__$2 = cljs.core.next.call(null,seq8573__$1);
var G__8576 = cljs.core.first.call(null,seq8573__$2);
var seq8573__$3 = cljs.core.next.call(null,seq8573__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8574,G__8575,G__8576,seq8573__$3);
}));

(taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv if its value is not nil, otherwise dissocs it.
 */
taoensso.encore.dis_assoc_some = (function taoensso$encore$dis_assoc_some(var_args){
var G__8584 = arguments.length;
switch (G__8584) {
case 3:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8615 = arguments.length;
var i__5750__auto___8616 = (0);
while(true){
if((i__5750__auto___8616 < len__5749__auto___8615)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8616]));

var G__8617 = (i__5750__auto___8616 + (1));
i__5750__auto___8616 = G__8617;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}));

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return cljs.core.dissoc.call(null,m__$1,k__$1);
} else {
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
}
}),taoensso.encore.dis_assoc_some.call(null,m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.dis_assoc_some.cljs$lang$applyTo = (function (seq8580){
var G__8581 = cljs.core.first.call(null,seq8580);
var seq8580__$1 = cljs.core.next.call(null,seq8580);
var G__8582 = cljs.core.first.call(null,seq8580__$1);
var seq8580__$2 = cljs.core.next.call(null,seq8580__$1);
var G__8583 = cljs.core.first.call(null,seq8580__$2);
var seq8580__$3 = cljs.core.next.call(null,seq8580__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8581,G__8582,G__8583,seq8580__$3);
}));

(taoensso.encore.dis_assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if((v == null)){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.dis_assoc_some.cljs$lang$maxFixedArity = (3));


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__8590 = arguments.length;
switch (G__8590) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8622 = arguments.length;
var i__5750__auto___8623 = (0);
while(true){
if((i__5750__auto___8623 < len__5749__auto___8622)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8623]));

var G__8624 = (i__5750__auto___8623 + (1));
i__5750__auto___8623 = G__8624;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.call(null,m,k,v),kvs);
}));

/** @this {Function} */
(taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq8586){
var G__8587 = cljs.core.first.call(null,seq8586);
var seq8586__$1 = cljs.core.next.call(null,seq8586);
var G__8588 = cljs.core.first.call(null,seq8586__$1);
var seq8586__$2 = cljs.core.next.call(null,seq8586__$1);
var G__8589 = cljs.core.first.call(null,seq8586__$2);
var seq8586__$3 = cljs.core.next.call(null,seq8586__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8587,G__8588,G__8589,seq8586__$3);
}));

(taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k,v){
if(cljs.core.contains_QMARK_.call(null,m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3));

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__8597 = arguments.length;
switch (G__8597) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count.call(null,v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,vlen);
}
}));

(taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,end__$1);
}
}));

(taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3);

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__8602 = arguments.length;
switch (G__8602) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count.call(null,v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.call(null,v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,vlen);
}
}
}));

(taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.call(null,v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,end__$1);
}
}
}
}));

(taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3);

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__8618 = v;
var v1 = cljs.core.nth.call(null,vec__8618,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(xs,f){
if(cljs.core.vector_QMARK_.call(null,xs)){
var vec__8625 = taoensso.encore.vsplit_last.call(null,xs);
var vn = cljs.core.nth.call(null,vec__8625,(0),null);
var vl = cljs.core.nth.call(null,vec__8625,(1),null);
return f.call(null,vn,vl);
} else {
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__8631 = xs__$1;
var seq__8632 = cljs.core.seq.call(null,vec__8631);
var first__8633 = cljs.core.first.call(null,seq__8632);
var seq__8632__$1 = cljs.core.next.call(null,seq__8632);
var x1 = first__8633;
var xn = seq__8632__$1;
if(xn){
var G__8655 = cljs.core.conj.call(null,butlast,x1);
var G__8656 = xn;
butlast = G__8655;
xs__$1 = G__8656;
continue;
} else {
return f.call(null,butlast,x1);
}
break;
}
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.get_subvector.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return ((cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.ensure_set.call(null,x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8678 = arguments.length;
var i__5750__auto___8679 = (0);
while(true){
if((i__5750__auto___8679 < len__5749__auto___8678)){
args__5755__auto__.push((arguments[i__5750__auto___8679]));

var G__8680 = (i__5750__auto___8679 + (1));
i__5750__auto___8679 = G__8680;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,taoensso.encore.fsplit_last.call(null,args,(function (xs,lx){
return cljs.core.concat.call(null,xs,taoensso.encore.seq_kvs.call(null,lx));
})));
}));

(taoensso.encore.mapply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.mapply.cljs$lang$applyTo = (function (seq8635){
var G__8636 = cljs.core.first.call(null,seq8635);
var seq8635__$1 = cljs.core.next.call(null,seq8635);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8636,seq8635__$1);
}));

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__8643 = arguments.length;
switch (G__8643) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8684 = arguments.length;
var i__5750__auto___8685 = (0);
while(true){
if((i__5750__auto___8685 < len__5749__auto___8684)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8685]));

var G__8687 = (i__5750__auto___8685 + (1));
i__5750__auto___8685 = G__8687;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
}));

(taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$.call(null,to),cljs.core.cons.call(null,from,more)));
}));

/** @this {Function} */
(taoensso.encore.into_all.cljs$lang$applyTo = (function (seq8639){
var G__8640 = cljs.core.first.call(null,seq8639);
var seq8639__$1 = cljs.core.next.call(null,seq8639);
var G__8641 = cljs.core.first.call(null,seq8639__$1);
var seq8639__$2 = cljs.core.next.call(null,seq8639__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8640,G__8641,seq8639__$2);
}));

(taoensso.encore.into_all.cljs$lang$maxFixedArity = (2));

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((((n > (10))) && (taoensso.encore.editable_QMARK_.call(null,coll)))){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
/**
 * Like `core/into` but assumes `to!` is a transient, and doesn't call
 *   `persist!` when done. Useful as a performance optimization in some cases.
 */
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__8677 = arguments.length;
switch (G__8677) {
case 1:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (to_BANG_){
return to_BANG_;
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to_BANG_,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to_BANG_,from);
}));

(taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to_BANG_,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to_BANG_,from);
}));

(taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns a stateful transducer like (core/distinct) that supports an optional
 *   key function. Retains only items with distinct (keyfn <item>).
 */
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__8682 = arguments.length;
switch (G__8682) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
}));

(taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY));
return (function() {
var G__8711 = null;
var G__8711__0 = (function (){
return rf.call(null);
});
var G__8711__1 = (function (acc){
return rf.call(null,acc);
});
var G__8711__2 = (function (acc,in$){
var k = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj_BANG_.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,in$);
}
});
G__8711 = function(acc,in$){
switch(arguments.length){
case 0:
return G__8711__0.call(this);
case 1:
return G__8711__1.call(this,acc);
case 2:
return G__8711__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8711.cljs$core$IFn$_invoke$arity$0 = G__8711__0;
G__8711.cljs$core$IFn$_invoke$arity$1 = G__8711__1;
G__8711.cljs$core$IFn$_invoke$arity$2 = G__8711__2;
return G__8711;
})()
});
}));

(taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1);

var p_BANG__8715 = cljs.core.persistent_BANG_;
var t_8716 = cljs.core.transient$;
taoensso.encore.invert_map = (function taoensso$encore$invert_map(m){
return p_BANG__8715.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,v,k);
}),t_8716.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return p_BANG__8715.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,f.call(null,k),v);
}),t_8716.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
});

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p_BANG__8715.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,k,f.call(null,v));
}),t_8716.call(null,m),m));
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p_BANG__8715.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.call(null,m__$1,k);
}
}),t_8716.call(null,m),m));
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p_BANG__8715.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.call(null,m__$1,k);
}
}),t_8716.call(null,m),m));
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p_BANG__8715.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return cljs.core.dissoc_BANG_.call(null,m__$1,k);
} else {
return m__$1;
}
}),t_8716.call(null,m),m));
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p_BANG__8715.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc_BANG_.call(null,m__$1,k);
} else {
return m__$1;
}
}),t_8716.call(null,m),m));
}
});
/**
 * Returns a map like the one given, replacing keys using
 *   given {<old-new> <new-key>} replacements. O(min(n_replacements, n_m)).
 */
taoensso.encore.rename_keys = (function taoensso$encore$rename_keys(replacements,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.empty_QMARK_.call(null,m)){
return m;
} else {
if(cljs.core.empty_QMARK_.call(null,replacements)){
return m;
} else {
if((cljs.core.count.call(null,m) > cljs.core.count.call(null,replacements))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,old_k,new_k){
var b2__1591__auto__ = cljs.core.find.call(null,m,old_k);
if(cljs.core.truth_(b2__1591__auto__)){
var e = b2__1591__auto__;
return cljs.core.assoc_BANG_.call(null,cljs.core.dissoc_BANG_.call(null,acc,old_k),new_k,cljs.core.val.call(null,e));
} else {
return acc;
}
}),cljs.core.transient$.call(null,m),replacements));
} else {
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,old_k,v){
var b2__1591__auto__ = cljs.core.find.call(null,replacements,old_k);
if(cljs.core.truth_(b2__1591__auto__)){
var e = b2__1591__auto__;
return cljs.core.assoc_BANG_.call(null,cljs.core.dissoc_BANG_.call(null,acc,old_k),cljs.core.val.call(null,e),v);
} else {
return acc;
}
}),cljs.core.transient$.call(null,m),m));
}
}
}
}
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,x){
return cljs.core.assoc_BANG_.call(null,acc,f.call(null,x),x);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.ensure_set.call(null,ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.ensure_set.call(null,ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.ensure_set.call(null,ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__8719_SHARP_){
return taoensso.encore.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__8719_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but:.
 *  - Empty ks will return (f m), not act like [nil] ks.
 *  - Adds support for `not-found`.
 *  - Adds support for special return vals: `:update/dissoc`, `:update/abort`.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__8721 = arguments.length;
switch (G__8721) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.call(null,m,ks,null,f);
}));

(taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var old = cljs.core.get_in.call(null,m,ks,not_found);
var new$ = f.call(null,old);
var G__8722 = new$;
var G__8722__$1 = (((G__8722 instanceof cljs.core.Keyword))?G__8722.fqn:null);
switch (G__8722__$1) {
case "update/abort":
case "swap/abort":
return m;

break;
case "update/dissoc":
case "swap/dissoc":
return taoensso.encore.fsplit_last.call(null,ks,(function (ks__$1,lk){
return taoensso.encore.update_in.call(null,m,ks__$1,null,(function (v){
if(cljs.core.truth_(v)){
return cljs.core.dissoc.call(null,v,lk);
} else {
return new cljs.core.Keyword("update","abort","update/abort",-250474569);
}
}));
}));

break;
default:
return cljs.core.assoc_in.call(null,m,ks,new$);

}
}
}));

(taoensso.encore.update_in.cljs$lang$maxFixedArity = 4);

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__8725 = arguments.length;
switch (G__8725) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,ks),k);
}));

(taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.empty_QMARK_.call(null,ks)){
return false;
} else {
return taoensso.encore.fsplit_last.call(null,ks,(function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.call(null,coll,ks__$1,lk);
}));
}
}));

(taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3);

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__8733 = arguments.length;
switch (G__8733) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8736 = arguments.length;
var i__5750__auto___8737 = (0);
while(true){
if((i__5750__auto___8737 < len__5749__auto___8736)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8737]));

var G__8739 = (i__5750__auto___8737 + (1));
i__5750__auto___8737 = G__8739;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
if(cljs.core.truth_(m__$1)){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
} else {
return new cljs.core.Keyword("update","abort","update/abort",-250474569);
}
}));
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
if(cljs.core.truth_(m__$1)){
return cljs.core.reduce.call(null,cljs.core.dissoc,cljs.core.dissoc.call(null,m__$1,dissoc_k),more);
} else {
return new cljs.core.Keyword("update","abort","update/abort",-250474569);
}
}));
}));

/** @this {Function} */
(taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq8729){
var G__8730 = cljs.core.first.call(null,seq8729);
var seq8729__$1 = cljs.core.next.call(null,seq8729);
var G__8731 = cljs.core.first.call(null,seq8729__$1);
var seq8729__$2 = cljs.core.next.call(null,seq8729__$1);
var G__8732 = cljs.core.first.call(null,seq8729__$2);
var seq8729__$3 = cljs.core.next.call(null,seq8729__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8730,G__8731,G__8732,seq8729__$3);
}));

(taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
if(cljs.core.empty_QMARK_.call(null,m)){
return m;
} else {
return taoensso.encore.fsplit_last.call(null,ks,(function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m,ks__$1,lk);
}));
}
}));

(taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3));

taoensso.encore.node_paths = (function taoensso$encore$node_paths(var_args){
var G__8738 = arguments.length;
switch (G__8738) {
case 1:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$1 = (function (m){
return taoensso.encore.node_paths.call(null,cljs.core.associative_QMARK_,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$2 = (function (node_pred,m){
return taoensso.encore.node_paths.call(null,node_pred,m,null);
}));

(taoensso.encore.node_paths.cljs$core$IFn$_invoke$arity$3 = (function (node_pred,m,basis){
var basis__$1 = (function (){var or__5025__auto__ = basis;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(node_pred.call(null,v))){
var paths_from_basis = taoensso.encore.node_paths.call(null,node_pred,v,cljs.core.conj.call(null,basis__$1,k));
return cljs.core.reduce.call(null,(function (acc__$1,in$){
return cljs.core.conj_BANG_.call(null,acc__$1,in$);
}),acc,paths_from_basis);
} else {
return cljs.core.conj_BANG_.call(null,acc,cljs.core.conj.call(null,basis__$1,k,v));
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),m));
}));

(taoensso.encore.node_paths.cljs$lang$maxFixedArity = 3);

/**
 * Like `interleave` but includes all items (i.e. stops when the longest
 *   rather than shortest coll has been consumed).
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__8745 = arguments.length;
switch (G__8745) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8749 = arguments.length;
var i__5750__auto___8750 = (0);
while(true){
if((i__5750__auto___8750 < len__5749__auto___8749)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8750]));

var G__8752 = (i__5750__auto___8750 + (1));
i__5750__auto___8750 = G__8752;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if(((s1) && (s2))){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
}));

(taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
}));

/** @this {Function} */
(taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq8742){
var G__8743 = cljs.core.first.call(null,seq8742);
var seq8742__$1 = cljs.core.next.call(null,seq8742);
var G__8744 = cljs.core.first.call(null,seq8742__$1);
var seq8742__$2 = cljs.core.next.call(null,seq8742__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8743,G__8744,seq8742__$2);
}));

(taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Like `interleave`, but:
 *  - Returns a vector rather than lazy seq (=> greedy).
 *  - Includes all items (i.e. stops when the longest rather than
 *    shortest coll has been consumed).
 * 
 *   Single-arity version takes a coll of colls.
 */
taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(var_args){
var G__8757 = arguments.length;
switch (G__8757) {
case 1:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8759 = arguments.length;
var i__5750__auto___8760 = (0);
while(true){
if((i__5750__auto___8760 < len__5749__auto___8759)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8760]));

var G__8761 = (i__5750__auto___8760 + (1));
i__5750__auto___8760 = G__8761;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((3) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((3)),(0),null)):null);
return taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5775__auto__);

}
});

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$1 = (function (colls){
if(cljs.core.empty_QMARK_.call(null,colls)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_interleave_all.call(null,cljs.core.conj_BANG_,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),colls));
}
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
var v = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
while(true){
if(((s1) && (s2))){
var G__8766 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s1)),cljs.core.first.call(null,s2));
var G__8767 = cljs.core.next.call(null,s1);
var G__8768 = cljs.core.next.call(null,s2);
v = G__8766;
s1 = G__8767;
s2 = G__8768;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_.call(null,v);
}
}
}
break;
}
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$3 = (function (c1,c2,c3){
return taoensso.encore.vinterleave_all.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
}));

(taoensso.encore.vinterleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,c3,colls){
return taoensso.encore.vinterleave_all.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null),colls));
}));

/** @this {Function} */
(taoensso.encore.vinterleave_all.cljs$lang$applyTo = (function (seq8753){
var G__8754 = cljs.core.first.call(null,seq8753);
var seq8753__$1 = cljs.core.next.call(null,seq8753);
var G__8755 = cljs.core.first.call(null,seq8753__$1);
var seq8753__$2 = cljs.core.next.call(null,seq8753__$1);
var G__8756 = cljs.core.first.call(null,seq8753__$2);
var seq8753__$3 = cljs.core.next.call(null,seq8753__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8754,G__8755,G__8756,seq8753__$3);
}));

(taoensso.encore.vinterleave_all.cljs$lang$maxFixedArity = (3));

/**
 * Private, don't use. Low-level merge function, flexible and optimized.
 */
taoensso.encore._merge_with = (function taoensso$encore$_merge_with(var_args){
var G__8764 = arguments.length;
switch (G__8764) {
case 3:
return taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$3 = (function (nest_QMARK_,f,maps){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,taoensso.encore._merge_with,nest_QMARK_,f),null,maps);
}));

(taoensso.encore._merge_with.cljs$core$IFn$_invoke$arity$4 = (function (nest_QMARK_,f,m1,m2){
var n2 = cljs.core.count.call(null,m2);
if((n2 === (0))){
var or__5025__auto__ = m1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return m2;
}
} else {
var b2__1591__auto__ = cljs.core.find.call(null,m2,new cljs.core.Keyword("merge","replace?","merge/replace?",-914523787));
if(cljs.core.truth_(b2__1591__auto__)){
var e = b2__1591__auto__;
var m2__$1 = cljs.core.dissoc.call(null,m2,new cljs.core.Keyword("merge","replace?","merge/replace?",-914523787));
if(cljs.core.truth_(cljs.core.val.call(null,e))){
return m2__$1;
} else {
return taoensso.encore._merge_with.call(null,nest_QMARK_,f,m1,m2__$1);
}
} else {
var n1 = cljs.core.count.call(null,m1);
if((n1 >= n2)){
return cljs.core.reduce_kv.call(null,(function (acc1,k2,v2){
if(cljs.core.truth_((function (){var G__8770 = v2;
var G__8770__$1 = (((G__8770 instanceof cljs.core.Keyword))?G__8770.fqn:null);
switch (G__8770__$1) {
case "merge/dissoc":
case "swap/dissoc":
return true;

break;
default:
return false;

}
})())){
return cljs.core.dissoc.call(null,acc1,k2);
} else {
var v1 = cljs.core.get.call(null,m1,k2,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500));
if(cljs.core.truth_((function (){var and__5023__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.map_QMARK_.call(null,v1)) && (cljs.core.map_QMARK_.call(null,v2)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.call(null,acc1,k2,taoensso.encore._merge_with.call(null,true,f,v1,v2));
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,v1,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500))){
return cljs.core.assoc.call(null,acc1,k2,v2);
} else {
var v3 = f.call(null,v1,v2);
if(cljs.core.truth_((function (){var G__8772 = v3;
var G__8772__$1 = (((G__8772 instanceof cljs.core.Keyword))?G__8772.fqn:null);
switch (G__8772__$1) {
case "merge/dissoc":
case "swap/dissoc":
return true;

break;
default:
return false;

}
})())){
return cljs.core.dissoc.call(null,acc1,k2);
} else {
return cljs.core.assoc.call(null,acc1,k2,v3);
}
}
}
}
}),m1,m2);
} else {
return cljs.core.reduce_kv.call(null,(function (acc2,k1,v1){
var v2 = cljs.core.get.call(null,m2,k1,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500));
if(cljs.core.truth_((function (){var G__8773 = v2;
var G__8773__$1 = (((G__8773 instanceof cljs.core.Keyword))?G__8773.fqn:null);
switch (G__8773__$1) {
case "merge/dissoc":
case "swap/dissoc":
return true;

break;
default:
return false;

}
})())){
return cljs.core.dissoc.call(null,acc2,k1);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.map_QMARK_.call(null,v1)) && (cljs.core.map_QMARK_.call(null,v2)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.call(null,acc2,k1,taoensso.encore._merge_with.call(null,true,f,v1,v2));
} else {
if(cljs.core.keyword_identical_QMARK_.call(null,v2,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500))){
return cljs.core.assoc.call(null,acc2,k1,v1);
} else {
var v3 = f.call(null,v1,v2);
if(cljs.core.truth_((function (){var G__8774 = v3;
var G__8774__$1 = (((G__8774 instanceof cljs.core.Keyword))?G__8774.fqn:null);
switch (G__8774__$1) {
case "merge/dissoc":
case "swap/dissoc":
return true;

break;
default:
return false;

}
})())){
return cljs.core.dissoc.call(null,acc2,k1);
} else {
return cljs.core.assoc.call(null,acc2,k1,v3);
}
}
}
}
}),m2,m1);
}
}
}
}));

(taoensso.encore._merge_with.cljs$lang$maxFixedArity = 4);

var _merge_with_8786 = taoensso.encore._merge_with;
/**
 * Like `core/merge` but faster, supports `:merge/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8787 = arguments.length;
var i__5750__auto___8788 = (0);
while(true){
if((i__5750__auto___8788 < len__5749__auto___8787)){
args__5755__auto__.push((arguments[i__5750__auto___8788]));

var G__8790 = (i__5750__auto___8788 + (1));
i__5750__auto___8788 = G__8790;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return _merge_with_8786.call(null,false,(function (x,y){
return y;
}),maps);
}));

(taoensso.encore.merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.merge.cljs$lang$applyTo = (function (seq8776){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8776));
}));


/**
 * Like `core/merge-with` but faster, supports `:merge/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8792 = arguments.length;
var i__5750__auto___8793 = (0);
while(true){
if((i__5750__auto___8793 < len__5749__auto___8792)){
args__5755__auto__.push((arguments[i__5750__auto___8793]));

var G__8794 = (i__5750__auto___8793 + (1));
i__5750__auto___8793 = G__8794;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return _merge_with_8786.call(null,false,f,maps);
}));

(taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq8778){
var G__8779 = cljs.core.first.call(null,seq8778);
var seq8778__$1 = cljs.core.next.call(null,seq8778);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8779,seq8778__$1);
}));


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8795 = arguments.length;
var i__5750__auto___8796 = (0);
while(true){
if((i__5750__auto___8796 < len__5749__auto___8795)){
args__5755__auto__.push((arguments[i__5750__auto___8796]));

var G__8797 = (i__5750__auto___8796 + (1));
i__5750__auto___8796 = G__8797;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return _merge_with_8786.call(null,true,(function (x,y){
return y;
}),maps);
}));

(taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq8782){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8782));
}));


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8798 = arguments.length;
var i__5750__auto___8799 = (0);
while(true){
if((i__5750__auto___8799 < len__5749__auto___8798)){
args__5755__auto__.push((arguments[i__5750__auto___8799]));

var G__8800 = (i__5750__auto___8799 + (1));
i__5750__auto___8799 = G__8800;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return _merge_with_8786.call(null,true,f,maps);
}));

(taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq8784){
var G__8785 = cljs.core.first.call(null,seq8784);
var seq8784__$1 = cljs.core.next.call(null,seq8784);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8785,seq8784__$1);
}));

/**
 * Like `core/merge` but faster.
 *   Doesn't support zero arity, single arity case takes a collection of maps.
 */
taoensso.encore.fast_merge = (function taoensso$encore$fast_merge(var_args){
var G__8791 = arguments.length;
switch (G__8791) {
case 1:
return taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$1 = (function (maps){
return cljs.core.reduce.call(null,taoensso.encore.fast_merge,null,maps);
}));

(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
var n2 = cljs.core.count.call(null,m2);
if((n2 === (0))){
var or__5025__auto__ = m1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return m2;
}
} else {
var n1 = cljs.core.count.call(null,m1);
if((n1 >= n2)){
return cljs.core.reduce_kv.call(null,cljs.core.assoc,m1,m2);
} else {
return cljs.core.reduce_kv.call(null,(function (m,k,v){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}),m2,m1);
}
}
}));

(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$3 = (function (m1,m2,m3){
return taoensso.encore.fast_merge.call(null,taoensso.encore.fast_merge.call(null,m1,m2),m3);
}));

(taoensso.encore.fast_merge.cljs$core$IFn$_invoke$arity$4 = (function (m1,m2,m3,m4){
return taoensso.encore.fast_merge.call(null,taoensso.encore.fast_merge.call(null,taoensso.encore.fast_merge.call(null,m1,m2),m3),m4);
}));

(taoensso.encore.fast_merge.cljs$lang$maxFixedArity = 4);


/**
* @constructor
*/
taoensso.encore.Pred = (function (pred_fn){
this.pred_fn = pred_fn;
});

(taoensso.encore.Pred.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred-fn","pred-fn",335458754,null)], null);
}));

(taoensso.encore.Pred.cljs$lang$type = true);

(taoensso.encore.Pred.cljs$lang$ctorStr = "taoensso.encore/Pred");

(taoensso.encore.Pred.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/Pred");
}));

/**
 * Positional factory function for taoensso.encore/Pred.
 */
taoensso.encore.__GT_Pred = (function taoensso$encore$__GT_Pred(pred_fn){
return (new taoensso.encore.Pred(pred_fn));
});

/**
 * Experimental, subject to change without notice!
 *   Wraps given predicate fn to return `Pred` for use with `submap?`, etc.
 *   Arity of predicate fn depends on context in which it'll be used.
 *   See also `pred-fn`.
 */
taoensso.encore.pred = (function taoensso$encore$pred(pred_fn){
return (new taoensso.encore.Pred(pred_fn));
});
/**
 * Experimental, subject to change without notice!
 *   Returns unwrapped predicate fn when given `Pred`, otherwise returns nil.
 *   See also `pred`.
 */
taoensso.encore.pred_fn = (function taoensso$encore$pred_fn(pred){
if((pred instanceof taoensso.encore.Pred)){
return pred.pred_fn;
} else {
return null;
}
});
/**
 * Returns true iff `sub` is a (possibly nested) submap of `m`,
 *   i.e. iff every (nested) value in `sub` has the same (nested) value in `m`.
 *   Uses stack recursion so supports only limited nesting.
 */
taoensso.encore.submap_QMARK_ = (function taoensso$encore$submap_QMARK_(m,sub){
return cljs.core.reduce_kv.call(null,(function (_,k,v){
if(cljs.core.map_QMARK_.call(null,v)){
var sub_STAR_ = v;
var m_STAR_ = cljs.core.get.call(null,m,k);
var b2__1591__auto__ = (function (){var and__5023__auto__ = cljs.core.map_QMARK_.call(null,m_STAR_);
if(and__5023__auto__){
return taoensso.encore.submap_QMARK_.call(null,m_STAR_,sub_STAR_);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(b2__1591__auto__)){
var match_QMARK_ = b2__1591__auto__;
return true;
} else {
return cljs.core.reduced.call(null,false);
}
} else {
var sval = v;
var mval = cljs.core.get.call(null,m,k,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500));
var b2__1591__auto__ = (function (){var b2__1591__auto__ = taoensso.encore.pred_fn.call(null,sval);
if(cljs.core.truth_(b2__1591__auto__)){
var pf = b2__1591__auto__;
return pf.call(null,mval);
} else {
var G__8802 = sval;
var G__8802__$1 = (((G__8802 instanceof cljs.core.Keyword))?G__8802.fqn:null);
switch (G__8802__$1) {
case "submap/nx":
return cljs.core.keyword_identical_QMARK_.call(null,mval,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500));

break;
case "submap/ex":
return (!(cljs.core.keyword_identical_QMARK_.call(null,mval,new cljs.core.Keyword("taoensso.encore","nx","taoensso.encore/nx",1544906500))));

break;
case "submap/some":
return taoensso.encore.some_QMARK_.call(null,mval);

break;
default:
return cljs.core._EQ_.call(null,sval,mval);

}
}
})();
if(cljs.core.truth_(b2__1591__auto__)){
var match_QMARK_ = b2__1591__auto__;
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}
}),true,sub);
});
/**
 * Like `select-keys` but supports nested key spec:
 * 
 *  (select-nested-keys
 *    {:a :A :b :B :c {:c1 :C1 :c2 :C2} :d :D} ; `src-map`
 *    [:a {:c [:c1], :d [:d1 :d2]}]) ; `key-spec`
 * 
 *    => {:a :A, :c {:c1 :C1}, :d :D}
 * 
 *   Note that as with the `{:d [:d1 :d2]}` spec in the example above,
 *   if spec expects a nested map but the actual value is not a map,
 *   the actual value will be included in output as-is.
 * 
 *   Has the same behaviour as `select-keys` when `key-spec` is a
 *   simple vector of keys.
 */
taoensso.encore.select_nested_keys = (function taoensso$encore$select_nested_keys(src_map,key_spec){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function taoensso$encore$select_nested_keys_$_rf(acc,spec_in){
if(cljs.core.map_QMARK_.call(null,spec_in)){
return cljs.core.reduce_kv.call(null,(function (acc__$1,k,nested_spec_in){
if(cljs.core.contains_QMARK_.call(null,src_map,k)){
var src_val = cljs.core.get.call(null,src_map,k);
if(cljs.core.map_QMARK_.call(null,src_val)){
return cljs.core.assoc_BANG_.call(null,acc__$1,k,taoensso.encore.select_nested_keys.call(null,src_val,nested_spec_in));
} else {
return cljs.core.assoc_BANG_.call(null,acc__$1,k,src_val);
}
} else {
return acc__$1;
}
}),acc,spec_in);
} else {
var k = spec_in;
if(cljs.core.contains_QMARK_.call(null,src_map,k)){
return cljs.core.assoc_BANG_.call(null,acc,k,cljs.core.get.call(null,src_map,k));
} else {
return acc;
}
}
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),key_spec));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.LightAtom = (function (state){
this.state = state;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(taoensso.encore.LightAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new$){
var self__ = this;
var ___$1 = this;
(self__.state = new$);

return new$;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (t,swap_fn){
var self__ = this;
var t__$1 = this;
return t__$1.call(null,swap_fn);
}));

(taoensso.encore.LightAtom.prototype.call = (function() {
var G__8806 = null;
var G__8806__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.state;
});
var G__8806__2 = (function (self__,swap_fn){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var new$ = swap_fn.call(null,self__.state);
(self__.state = new$);

return new$;
});
var G__8806__3 = (function (self__,k,swap_fn){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var old_map = self__.state;
var new_val = swap_fn.call(null,cljs.core.get.call(null,old_map,k));
var new_map = cljs.core.assoc.call(null,old_map,k,new_val);
(self__.state = new_map);

return new_val;
});
G__8806 = function(self__,k,swap_fn){
switch(arguments.length){
case 1:
return G__8806__1.call(this,self__);
case 2:
return G__8806__2.call(this,self__,k);
case 3:
return G__8806__3.call(this,self__,k,swap_fn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__8806.cljs$core$IFn$_invoke$arity$1 = G__8806__1;
G__8806.cljs$core$IFn$_invoke$arity$2 = G__8806__2;
G__8806.cljs$core$IFn$_invoke$arity$3 = G__8806__3;
return G__8806;
})()
);

(taoensso.encore.LightAtom.prototype.apply = (function (self__,args8804){
var self__ = this;
var self____$1 = this;
var args__5240__auto__ = cljs.core.aclone.call(null,args8804);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5240__auto__.length > (20)))?(function (){var G__8805 = args__5240__auto__.slice((0),(20));
G__8805.push(args__5240__auto__.slice((20)));

return G__8805;
})():args__5240__auto__)));
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.state;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$1 = (function (swap_fn){
var self__ = this;
var _ = this;
var new$ = swap_fn.call(null,self__.state);
(self__.state = new$);

return new$;
}));

(taoensso.encore.LightAtom.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,swap_fn){
var self__ = this;
var _ = this;
var old_map = self__.state;
var new_val = swap_fn.call(null,cljs.core.get.call(null,old_map,k));
var new_map = cljs.core.assoc.call(null,old_map,k,new_val);
(self__.state = new_map);

return new_val;
}));

(taoensso.encore.LightAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(taoensso.encore.LightAtom.cljs$lang$type = true);

(taoensso.encore.LightAtom.cljs$lang$ctorStr = "taoensso.encore/LightAtom");

(taoensso.encore.LightAtom.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/LightAtom");
}));

/**
 * Positional factory function for taoensso.encore/LightAtom.
 */
taoensso.encore.__GT_LightAtom = (function taoensso$encore$__GT_LightAtom(state){
return (new taoensso.encore.LightAtom(state));
});

/**
 * Private, don't use. Micro-optimized lightweight `atom`.
 *   Up to 30% faster than standard atoms, with the same atomicity guarantees.
 */
taoensso.encore.latom = (function taoensso$encore$latom(init_state){
return (new taoensso.encore.LightAtom(init_state));
});
/**
 * Impln. for 0-key resets
 */
taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,m1){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
if(cljs.core.compare_and_set_BANG_.call(null,atom_,m0,m1)){
return return$.call(null,m0,m0,m1,m1);
} else {
continue;
}
break;
}
});
/**
 * Impln. for 1-key resets
 */
taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if(cljs.core.compare_and_set_BANG_.call(null,atom_,m0,m1)){
return return$.call(null,m0,cljs.core.get.call(null,m0,k,not_found),m1,v1);
} else {
continue;
}
break;
}
});
/**
 * Impln. for n-key resets
 */
taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__1591__auto__ = cljs.core.seq.call(null,ks);
if(b2__1591__auto__){
var ks_seq = b2__1591__auto__;
if(cljs.core.next.call(null,ks_seq)){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc_in.call(null,m0,ks,v1);
if(cljs.core.compare_and_set_BANG_.call(null,atom_,m0,m1)){
return return$.call(null,m0,cljs.core.get_in.call(null,m0,ks,not_found),m1,v1);
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_.call(null,return$,atom_,v1);
}
});
var return_8811 = (function (m0,v0,m1,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics, returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var G__8808 = arguments.length;
switch (G__8808) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_.call(null,return_8811,atom_,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_8811,atom_,ks,null,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_8811,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4);


/**
 * Like `reset-in!` but optimized for single-key case.
 */
taoensso.encore.reset_val_BANG_ = (function taoensso$encore$reset_val_BANG_(var_args){
var G__8810 = arguments.length;
switch (G__8810) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_8811,atom_,k,null,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_8811,atom_,k,not_found,val);
}));

(taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4);

var sentinel_8818 = ({});
var return_8819 = (function (m0,v0,m1,v1){
return cljs.core.not_EQ_.call(null,v0,v1);
});
/**
 * Like `reset-in!` but returns true iff the atom's value changed.
 */
taoensso.encore.reset_in_BANG__QMARK_ = (function taoensso$encore$reset_in_BANG__QMARK_(var_args){
var G__8816 = arguments.length;
switch (G__8816) {
case 2:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,val){
return taoensso.encore._reset_k0_BANG_.call(null,return_8819,atom_,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_8819,atom_,ks,sentinel_8818,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_8819,atom_,ks,not_found,val);
}));

(taoensso.encore.reset_in_BANG__QMARK_.cljs$lang$maxFixedArity = 4);


/**
 * Like `reset-in!?` but optimized for single-key case.
 */
taoensso.encore.reset_val_BANG__QMARK_ = (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.call(null,atom_,k,sentinel_8818,new_val);
return cljs.core.not_EQ_.call(null,v0,new_val);
});
/**
 * Atomically swaps value of `atom_` to `val` and returns
 *   true iff the atom's value changed. See also `reset-in!?`.
 */
taoensso.encore.reset_BANG__QMARK_ = (function taoensso$encore$reset_BANG__QMARK_(atom_,val){
while(true){
var old = cljs.core.deref.call(null,atom_);
if(cljs.core.compare_and_set_BANG_.call(null,atom_,old,val)){
return cljs.core.not_EQ_.call(null,old,val);
} else {
continue;
}
break;
}
});

/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

(taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
}));

(taoensso.encore.Swapped.cljs$lang$type = true);

(taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped");

(taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/Swapped");
}));

/**
 * Positional factory function for taoensso.encore/Swapped.
 */
taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.return_swapped = (function taoensso$encore$return_swapped(sw,m0,m1){
var rv = sw.returnv;
var G__8821 = rv;
var G__8821__$1 = (((G__8821 instanceof cljs.core.Keyword))?G__8821.fqn:null);
switch (G__8821__$1) {
case "swap/changed?":
return cljs.core.not_EQ_.call(null,m1,m0);

break;
case "swap/new":
return m1;

break;
case "swap/old":
return m0;

break;
default:
return rv;

}
});
/**
 * Impln. for 0-key swaps
 */
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var s1 = f.call(null,m0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var m1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_.call(null,m1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))){
if(sw_QMARK_){
return taoensso.encore.return_swapped.call(null,s1,m0,m1);
} else {
return return$.call(null,m0,m0,m0,m0);
}
} else {
if(cljs.core.compare_and_set_BANG_.call(null,atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped.call(null,s1,m0,m1);
} else {
return return$.call(null,m0,m0,m1,m1);
}
} else {
continue;
}
}
break;
}
});
/**
 * Impln. for 1-key swaps
 */
taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.keyword_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.dissoc.call(null,m0,k);
if(cljs.core.compare_and_set_BANG_.call(null,atom_,m0,m1)){
return return$.call(null,m0,cljs.core.get.call(null,m0,k,not_found),m1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get.call(null,m0,k,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))){
if(sw_QMARK_){
return taoensso.encore.return_swapped.call(null,s1,m0,m0);
} else {
return return$.call(null,m0,v0,m0,v0);
}
} else {
var m1 = ((cljs.core.keyword_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m0,k):cljs.core.assoc.call(null,m0,k,v1));
if(cljs.core.compare_and_set_BANG_.call(null,atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped.call(null,s1,m0,m1);
} else {
return return$.call(null,m0,v0,m1,v1);
}
} else {
continue;
}
}
break;
}
}
});
/**
 * Impln. for n-key swaps
 */
taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__1591__auto__ = cljs.core.seq.call(null,ks);
if(b2__1591__auto__){
var ks_seq = b2__1591__auto__;
if(cljs.core.next.call(null,ks_seq)){
if(cljs.core.keyword_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = taoensso.encore.dissoc_in.call(null,m0,ks);
if(cljs.core.compare_and_set_BANG_.call(null,atom_,m0,m1)){
return return$.call(null,m0,cljs.core.get_in.call(null,m0,ks,not_found),m1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get_in.call(null,m0,ks,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if(cljs.core.keyword_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","abort","swap/abort",508048993))){
if(sw_QMARK_){
return taoensso.encore.return_swapped.call(null,s1,m0,m0);
} else {
return return$.call(null,m0,v0,m0,v0);
}
} else {
var m1 = ((cljs.core.keyword_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m0,ks):cljs.core.assoc_in.call(null,m0,ks,v1));
if(cljs.core.compare_and_set_BANG_.call(null,atom_,m0,m1)){
if(sw_QMARK_){
return taoensso.encore.return_swapped.call(null,s1,m0,m1);
} else {
return return$.call(null,m0,v0,m1,v1);
}
} else {
continue;
}
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_.call(null,return$,atom_,f);
}
});
var return_8827 = (function (m0,v0,m1,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var G__8824 = arguments.length;
switch (G__8824) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_8827,atom_,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_8827,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_8827,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4);


/**
 * Like `swap-in!` but optimized for single-key case.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(var_args){
var G__8826 = arguments.length;
switch (G__8826) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_8827,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_8827,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4);

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__8830 = arguments.length;
switch (G__8830) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.call(null,atom_,k,null);
}));

(taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
return taoensso.encore.swap_val_BANG_.call(null,atom_,k,not_found,(function (v0){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),v0);
}));
}));

(taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Returns current system insant as milliseconds since Unix epoch.
 */
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return Date.now();
});
/**
 * Returns current system instant as `js/Date`.
 */
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
/**
 * Returns current system instant as `js/Date`.
 */
taoensso.encore.now_inst = (function taoensso$encore$now_inst(){
return (new Date());
});
/**
 * Returns current value of best-resolution time source as nanoseconds.
 */
taoensso.encore.now_nano = (function (){var b2__1591__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_window,"performance");
if(cljs.core.truth_(b2__1591__auto__)){
var perf = b2__1591__auto__;
var b2__1591__auto____$1 = (function (){var or__5025__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = taoensso.encore.oget.call(null,perf,"webkitNow");
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"oNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__1591__auto____$1)){
var pf = b2__1591__auto____$1;
return (function (){
return Math.floor((1000000.0 * pf.call(perf)));
});
} else {
return (function (){
return (1000000.0 * Date.now());
});
}
} else {
return (function (){
return (1000000.0 * Date.now());
});
}
})();
/**
 * Like `core/memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = taoensso.encore.latom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__8833__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__5025__auto__ = cljs.core.get.call(null,cache_.call(null),args);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.call(null,cache_.call(null,(function taoensso$encore$memoize_last_$_swap_fn(cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null))]);
}
})),args);
}
})());
};
var G__8833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8834__i = 0, G__8834__a = new Array(arguments.length -  0);
while (G__8834__i < G__8834__a.length) {G__8834__a[G__8834__i] = arguments[G__8834__i + 0]; ++G__8834__i;}
  args = new cljs.core.IndexedSeq(G__8834__a,0,null);
} 
return G__8833__delegate.call(this,args);};
G__8833.cljs$lang$maxFixedArity = 0;
G__8833.cljs$lang$applyTo = (function (arglist__8835){
var args = cljs.core.seq(arglist__8835);
return G__8833__delegate(args);
});
G__8833.cljs$core$IFn$_invoke$arity$variadic = G__8833__delegate;
return G__8833;
})()
;
});
/**
 * For Clj: fastest possible memoize. Non-racey, 0-7 arity only.
 *   For Cljs: same as `core/memoize`.
 */
taoensso.encore.fmemoize = (function taoensso$encore$fmemoize(f){
return cljs.core.memoize.call(null,f);
});
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(rate){
return (Math.random() <= rate);
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

(taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.SimpleCacheEntry.cljs$lang$type = true);

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry");

(taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/SimpleCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/SimpleCacheEntry.
 */
taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

(taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.TickedCacheEntry.cljs$lang$type = true);

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry");

(taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/TickedCacheEntry");
}));

/**
 * Positional factory function for taoensso.encore/TickedCacheEntry.
 */
taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Returns a cached version of given referentially transparent function `f`.
 * 
 *   Like `core/memoize` but:
 *  - Often faster, depending on options.
 *  - Prevents race conditions on writes.
 *  - Supports cache invalidation by prepending args with:
 *    - `:cache/del`   ; Delete cached item for subsequent args, returns nil.
 *    - `:cache/fresh` ; Renew  cached item for subsequent args, returns new val.
 * 
 *  - Supports options:
 *    - `ttl-ms` ; Expire cached items after <this> many msecs.
 *    - `size`   ; Restrict cache size to <this> many items at the next garbage
 *               ; collection (GC).
 * 
 *    - `gc-every` ; Run garbage collection (GC) approximately once every
 *                 ; <this> many calls to cached fn. If unspecified, GC rate
 *                 ; will be determined automatically based on `size`.
 * 
 *   See also `defn-cached`, `fmemoize`, `memoize-last`.
 */
taoensso.encore.cache = (function taoensso$encore$cache(var_args){
var G__8839 = arguments.length;
switch (G__8839) {
case 1:
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.cache.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = ({});
return (function() { 
var taoensso$encore$cached__delegate = function (xs){
var x1 = cljs.core.first.call(null,xs);
var G__8842 = x1;
var G__8842__$1 = (((G__8842 instanceof cljs.core.Keyword))?G__8842.fqn:null);
switch (G__8842__$1) {
case "cache/del":
case "mem/del":
var xn = cljs.core.next.call(null,xs);
var x2 = cljs.core.first.call(null,xn);
if(cljs.core.keyword_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.vreset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.dissoc.call(null,cljs.core._deref.call(null,cache_),xn));
}

return null;

break;
case "cache/fresh":
case "mem/fresh":
var xn = cljs.core.next.call(null,xs);
var v = cljs.core.apply.call(null,f,xn);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xn,v));

return v;

break;
default:
var v = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.call(null,f,xs);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xs,v__$1));

return v__$1;
} else {
return v;
}

}
};
var taoensso$encore$cached = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__8856__i = 0, G__8856__a = new Array(arguments.length -  0);
while (G__8856__i < G__8856__a.length) {G__8856__a[G__8856__i] = arguments[G__8856__i + 0]; ++G__8856__i;}
  xs = new cljs.core.IndexedSeq(G__8856__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,xs);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__8857){
var xs = cljs.core.seq(arglist__8857);
return taoensso$encore$cached__delegate(xs);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
}));

(taoensso.encore.cache.cljs$core$IFn$_invoke$arity$2 = (function (p__8843,f){
var map__8844 = p__8843;
var map__8844__$1 = cljs.core.__destructure_map.call(null,map__8844);
var opts = map__8844__$1;
var size = cljs.core.get.call(null,map__8844__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var ttl_ms = cljs.core.get.call(null,map__8844__$1,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875));
var gc_every = cljs.core.get.call(null,map__8844__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691));
var e_8858 = (function (){try{if((function (x){
return taoensso.truss.impl.ks_LT__EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),null], null), null),x);
}).call(null,opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e8845){if((e8845 instanceof Error)){
var e_8858 = e8845;
return e_8858;
} else {
throw e8845;

}
}})();
if((e_8858 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3290,4,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ks<=","ks<=",1664853833),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),"null",new cljs.core.Keyword(null,"size","size",1098693007),"null",new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),"null"], null), null)], null),null,new cljs.core.Symbol(null,"opts","opts",1795607228,null),opts,e_8858,null);
}

if(cljs.core.truth_((function (x){
var or__5025__auto__ = taoensso.truss.impl.safe_pred.call(null,cljs.core.nil_QMARK_).call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.truss.impl.safe_pred.call(null,taoensso.encore.pos_num_QMARK_).call(null,x);
}
}).call(null,size))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3291,4,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-num?","pos-num?",976533390,null)], null),null,new cljs.core.Symbol(null,"size","size",-1555742762,null),size,null,null);
}

if(cljs.core.truth_((function (x){
var or__5025__auto__ = taoensso.truss.impl.safe_pred.call(null,cljs.core.nil_QMARK_).call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.truss.impl.safe_pred.call(null,taoensso.encore.pos_num_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3291,4,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-num?","pos-num?",976533390,null)], null),null,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null),ttl_ms,null,null);
}

if(cljs.core.truth_((function (x){
var or__5025__auto__ = taoensso.truss.impl.safe_pred.call(null,cljs.core.nil_QMARK_).call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.truss.impl.safe_pred.call(null,taoensso.encore.pos_num_QMARK_).call(null,x);
}
}).call(null,gc_every))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3291,4,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-num?","pos-num?",976533390,null)], null),null,new cljs.core.Symbol(null,"gc-every","gc-every",-21013164,null),gc_every,null,null);
}


if(cljs.core.truth_(size)){
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var ticker = taoensso.encore.counter.call(null);
var cache_ = taoensso.encore.latom.call(null,null);
var latch_ = taoensso.encore.latom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__5025__auto__ = ttl_ms;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})());
var ttl_QMARK_ = (!((ttl_ms__$1 === (0))));
var size__$1 = cljs.core.long$.call(null,size);
var gc_every__$1 = cljs.core.long$.call(null,(function (){var or__5025__auto__ = gc_every;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.encore.clamp_int.call(null,(1000),(16000),size__$1);
}
})());
return (function() { 
var taoensso$encore$cached__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
var G__8846 = a1;
var G__8846__$1 = (((G__8846 instanceof cljs.core.Keyword))?G__8846.fqn:null);
switch (G__8846__$1) {
case "cache/del":
case "mem/del":
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_((function (){var G__8847 = a2;
var G__8847__$1 = (((G__8847 instanceof cljs.core.Keyword))?G__8847.fqn:null);
switch (G__8847__$1) {
case "cache/all":
case "mem/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cache_.call(null,(function (p1__8836_SHARP_){
return cljs.core.dissoc.call(null,p1__8836_SHARP_,argn);
}));
}

return null;

break;
default:
var tick = ticker.call(null);
var instant = ((ttl_QMARK_)?taoensso.encore.now_udt.call(null):(0));
if((((cljs.core.rem.call(null,tick,gc_every__$1) === (0))) && ((cljs.core.count.call(null,cache_.call(null)) >= (1.1 * size__$1))))){
var latch_8867 = null;
if(cljs.core.compare_and_set_BANG_.call(null,latch_,null,latch_8867)){
if(ttl_QMARK_){
cache_.call(null,(function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
}),cljs.core.transient$.call(null,(function (){var or__5025__auto__ = m;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
}));
} else {
}

var snapshot_8872 = cache_.call(null);
var n_to_gc_8873 = (cljs.core.count.call(null,snapshot_8872) - size__$1);
if((n_to_gc_8873 >= (0.1 * size__$1))){
var ks_to_gc_8874 = taoensso.encore.top.call(null,n_to_gc_8873,(function (k){
var e = cljs.core.get.call(null,snapshot_8872,k);
return (e.tick_lru + e.tick_lfu);
}),cljs.core.keys.call(null,snapshot_8872));
cache_.call(null,(function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
}),cljs.core.transient$.call(null,(function (){var or__5025__auto__ = m;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_8874));
}));
} else {
}

} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__8848 = a1;
var G__8848__$1 = (((G__8848 instanceof cljs.core.Keyword))?G__8848.fqn:null);
switch (G__8848__$1) {
case "cache/fresh":
case "mem/fresh":
return true;

break;
default:
return false;

}
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var _ = null;
var e = cache_.call(null,args__$1,(function taoensso$encore$cached_$_swap_fn(_QMARK_e){
if(cljs.core.truth_((function (){var or__5025__auto__ = (_QMARK_e == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args__$1);
}),null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
}));
return cljs.core.deref.call(null,e.delay);

}
};
var taoensso$encore$cached = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8876__i = 0, G__8876__a = new Array(arguments.length -  0);
while (G__8876__i < G__8876__a.length) {G__8876__a[G__8876__i] = arguments[G__8876__i + 0]; ++G__8876__i;}
  args = new cljs.core.IndexedSeq(G__8876__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,args);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__8877){
var args = cljs.core.seq(arglist__8877);
return taoensso$encore$cached__delegate(args);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
} else {
if(cljs.core.truth_(ttl_ms)){
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var cache_ = taoensso.encore.latom.call(null,null);
var latch_ = taoensso.encore.latom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_rate = (function (){var gce = (function (){var or__5025__auto__ = gc_every;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 8000.0;
}
})();
return (1.0 / cljs.core.long$.call(null,gce));
})();
return (function() { 
var taoensso$encore$cached__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
var G__8849 = a1;
var G__8849__$1 = (((G__8849 instanceof cljs.core.Keyword))?G__8849.fqn:null);
switch (G__8849__$1) {
case "cache/del":
case "mem/del":
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_((function (){var G__8850 = a2;
var G__8850__$1 = (((G__8850 instanceof cljs.core.Keyword))?G__8850.fqn:null);
switch (G__8850__$1) {
case "cache/all":
case "mem/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cache_.call(null,(function (p1__8837_SHARP_){
return cljs.core.dissoc.call(null,p1__8837_SHARP_,argn);
}));
}

return null;

break;
default:
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_(gc_now_QMARK_.call(null,gc_rate))){
var latch_8883 = null;
if(cljs.core.compare_and_set_BANG_.call(null,latch_,null,latch_8883)){
cache_.call(null,(function taoensso$encore$cached_$_swap_fn(m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
}),cljs.core.transient$.call(null,(function (){var or__5025__auto__ = m;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
}));

} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__8851 = a1;
var G__8851__$1 = (((G__8851 instanceof cljs.core.Keyword))?G__8851.fqn:null);
switch (G__8851__$1) {
case "cache/fresh":
case "mem/fresh":
return true;

break;
default:
return false;

}
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var _ = null;
var e = cache_.call(null,args__$1,(function taoensso$encore$cached_$_swap_fn(_QMARK_e){
if(cljs.core.truth_((function (){var or__5025__auto__ = (_QMARK_e == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args__$1);
}),null)),instant));
} else {
return _QMARK_e;
}
}));
return cljs.core.deref.call(null,e.delay);

}
};
var taoensso$encore$cached = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8886__i = 0, G__8886__a = new Array(arguments.length -  0);
while (G__8886__i < G__8886__a.length) {G__8886__a[G__8886__i] = arguments[G__8886__i + 0]; ++G__8886__i;}
  args = new cljs.core.IndexedSeq(G__8886__a,0,null);
} 
return taoensso$encore$cached__delegate.call(this,args);};
taoensso$encore$cached.cljs$lang$maxFixedArity = 0;
taoensso$encore$cached.cljs$lang$applyTo = (function (arglist__8887){
var args = cljs.core.seq(arglist__8887);
return taoensso$encore$cached__delegate(args);
});
taoensso$encore$cached.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$cached__delegate;
return taoensso$encore$cached;
})()
;
} else {
return taoensso.encore.cache.call(null,f);
}
}
}));

(taoensso.encore.cache.cljs$lang$maxFixedArity = 2);

/**
 * Alternative way to call `cache`, provided mostly for back compatibility.
 *   See `cache` docstring for details.
 */
taoensso.encore.memoize = (function taoensso$encore$memoize(var_args){
var G__8854 = arguments.length;
switch (G__8854) {
case 1:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.cache.call(null,f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
return taoensso.encore.cache.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),ttl_ms], null),f);
}));

(taoensso.encore.memoize.cljs$core$IFn$_invoke$arity$3 = (function (size,ttl_ms,f){
return taoensso.encore.cache.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"ttl-ms","ttl-ms",1305262875),ttl_ms], null),f);
}));

(taoensso.encore.memoize.cljs$lang$maxFixedArity = 3);


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

(taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitSpec.cljs$lang$type = true);

(taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec");

(taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/LimitSpec");
}));

/**
 * Positional factory function for taoensso.encore/LimitSpec.
 */
taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

(taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitEntry.cljs$lang$type = true);

(taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry");

(taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/LimitEntry");
}));

/**
 * Positional factory function for taoensso.encore/LimitEntry.
 */
taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_lid,worst_ms){
this.m = m;
this.worst_lid = worst_lid;
this.worst_ms = worst_ms;
});

(taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-lid","worst-lid",-2058001927,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.encore.LimitHits.cljs$lang$type = true);

(taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits");

(taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/LimitHits");
}));

/**
 * Positional factory function for taoensso.encore/LimitHits.
 */
taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_lid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_lid,worst_ms));
});

var limit_spec_8889 = (function (n,ms){
var e_8890 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e8859){if((e8859 instanceof Error)){
var e_8890 = e8859;
return e_8890;
} else {
throw e8859;

}
}})();
if((e_8890 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3505,29,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),null,new cljs.core.Symbol(null,"n","n",-2092305744,null),n,e_8890,null);
}

var e_8891 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e8860){if((e8860 instanceof Error)){
var e_8891 = e8860;
return e_8891;
} else {
throw e8860;

}
}})();
if((e_8891 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3505,29,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),null,new cljs.core.Symbol(null,"ms","ms",487821794,null),ms,e_8891,null);
}


return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_spec = (function taoensso$encore$coerce_limit_spec(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,(function (acc,lid,p__8863){
var vec__8864 = p__8863;
var n = cljs.core.nth.call(null,vec__8864,(0),null);
var ms = cljs.core.nth.call(null,vec__8864,(1),null);
return cljs.core.assoc.call(null,acc,lid,limit_spec_8889.call(null,n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
var i = taoensso.encore.counter.call(null);
return cljs.core.reduce.call(null,(function (acc,p__8868){
var vec__8869 = p__8868;
var n = cljs.core.nth.call(null,vec__8869,(0),null);
var ms = cljs.core.nth.call(null,vec__8869,(1),null);
var _QMARK_id = cljs.core.nth.call(null,vec__8869,(2),null);
return cljs.core.assoc.call(null,acc,(function (){var or__5025__auto__ = _QMARK_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return i.call(null);
}
})(),limit_spec_8889.call(null,n,ms));
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
return taoensso.encore.unexpected_arg_BANG_.call(null,x,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","rate-limiter","taoensso.encore/rate-limiter",1705152470,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"rate-limiter-spec","rate-limiter-spec",1678589253,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"map","map",-1282745308,null),"null",new cljs.core.Symbol(null,"vector","vector",-751469611,null),"null"], null), null)], null));
}
}
});
/**
 * Private, don't use.
 *   Like `rate-limiter` but returns [<state_> <rate-limiter>].
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(var_args){
var G__8882 = arguments.length;
switch (G__8882) {
case 1:
return taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return taoensso.encore.rate_limiter_STAR_.call(null,null,spec);
}));

(taoensso.encore.rate_limiter_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (opts,spec){
if(cljs.core.empty_QMARK_.call(null,spec)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly.call(null,null)], null);
} else {
var latch_ = taoensso.encore.latom.call(null,null);
var reqs_ = taoensso.encore.latom.call(null,null);
var spec__$1 = taoensso.encore.coerce_limit_spec.call(null,spec);
var map__8885 = opts;
var map__8885__$1 = cljs.core.__destructure_map.call(null,map__8885);
var gc_every = cljs.core.get.call(null,map__8885__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),16000.0);
var gc_now_QMARK_ = taoensso.encore.gc_now_QMARK_;
var gc_rate = (function (){var gce = cljs.core.long$.call(null,gc_every);
return (1.0 / gce);
})();
var f1 = (function (rid,peek_QMARK_){
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not.call(null,peek_QMARK_);
if(and__5023__auto__){
return gc_now_QMARK_.call(null,gc_rate);
} else {
return and__5023__auto__;
}
})())){
var latch_8903 = null;
if(cljs.core.compare_and_set_BANG_.call(null,latch_,null,latch_8903)){
reqs_.call(null,(function taoensso$encore$swap_fn(reqs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv.call(null,(function (acc__$1,lid,e){
var b2__1591__auto__ = cljs.core.get.call(null,spec__$1,lid);
if(cljs.core.truth_(b2__1591__auto__)){
var s = b2__1591__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.call(null,acc__$1,lid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.call(null,acc__$1,lid);
}
}),entries,entries);
if(cljs.core.empty_QMARK_.call(null,new_entries)){
return cljs.core.dissoc_BANG_.call(null,acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.call(null,acc,rid__$1,new_entries);
}
}),cljs.core.transient$.call(null,(function (){var or__5025__auto__ = reqs;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
}));

} else {
}
} else {
}

while(true){
var reqs = reqs_.call(null);
var entries = cljs.core.get.call(null,reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv.call(null,((function (reqs,entries,instant,latch_,reqs_,spec__$1,map__8885,map__8885__$1,gc_every,gc_now_QMARK_,gc_rate){
return (function (acc,lid,e){
var b2__1591__auto__ = cljs.core.get.call(null,spec__$1,lid);
if(cljs.core.truth_(b2__1591__auto__)){
var s = b2__1591__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([lid,tdelta]),lid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,lid,tdelta),lid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,lid,tdelta),acc.worst_lid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,spec__$1,map__8885,map__8885__$1,gc_every,gc_now_QMARK_,gc_rate))
,null,entries));
if(cljs.core.truth_((function (){var or__5025__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__1591__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__1591__auto__)){
var h = b2__1591__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_lid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__1591__auto__ = latch_.call(null);
if(cljs.core.truth_(b2__1591__auto__)){
var l = b2__1591__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv.call(null,((function (b2__1591__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,spec__$1,map__8885,map__8885__$1,gc_every,gc_now_QMARK_,gc_rate){
return (function (acc,lid,s){
return cljs.core.assoc.call(null,acc,lid,(function (){var b2__1591__auto____$1 = cljs.core.get.call(null,entries,lid);
if(cljs.core.truth_(b2__1591__auto____$1)){
var e = b2__1591__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__1591__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,spec__$1,map__8885,map__8885__$1,gc_every,gc_now_QMARK_,gc_rate))
,entries,spec__$1);
if(cljs.core.compare_and_set_BANG_.call(null,reqs_,reqs,cljs.core.assoc.call(null,reqs,rid,new_entries))){
return null;
} else {
continue;
}
}
}
break;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,(function() {
var taoensso$encore$rate_limiter = null;
var taoensso$encore$rate_limiter__0 = (function (){
return f1.call(null,null,false);
});
var taoensso$encore$rate_limiter__1 = (function (req_id){
return f1.call(null,req_id,false);
});
var taoensso$encore$rate_limiter__2 = (function (cmd,req_id){
var G__8892 = cmd;
var G__8892__$1 = (((G__8892 instanceof cljs.core.Keyword))?G__8892.fqn:null);
switch (G__8892__$1) {
case "rl/reset":
case "limiter/reset":
if(cljs.core.truth_((function (){var G__8893 = req_id;
var G__8893__$1 = (((G__8893 instanceof cljs.core.Keyword))?G__8893.fqn:null);
switch (G__8893__$1) {
case "rl/all":
case "limiter/all":
return true;

break;
default:
return false;

}
})())){
cljs.core.reset_BANG_.call(null,reqs_,null);
} else {
reqs_.call(null,(function (p1__8879_SHARP_){
return cljs.core.dissoc.call(null,p1__8879_SHARP_,req_id);
}));
}

return null;

break;
case "rl/peek":
case "limiter/peek":
return f1.call(null,req_id,true);

break;
default:
return taoensso.encore.unexpected_arg_BANG_.call(null,cmd,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","rate-limiter","taoensso.encore/rate-limiter",1705152470,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"rate-limiter-command","rate-limiter-command",1767414198,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rl","reset","rl/reset",-800926172),null,new cljs.core.Keyword("rl","peek","rl/peek",-291391771),null], null), null),new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));

}
});
taoensso$encore$rate_limiter = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$rate_limiter__0.call(this);
case 1:
return taoensso$encore$rate_limiter__1.call(this,cmd);
case 2:
return taoensso$encore$rate_limiter__2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$rate_limiter.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$rate_limiter__0;
taoensso$encore$rate_limiter.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$rate_limiter__1;
taoensso$encore$rate_limiter.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$rate_limiter__2;
return taoensso$encore$rate_limiter;
})()
], null);
}
}));

(taoensso.encore.rate_limiter_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Takes a map spec of form {<limit-id> [<n-max-reqs> <msecs-window>]},
 *   and returns a basic stateful (fn rate-limiter [req-id] [command req-id]).
 * 
 *   Call fn with a single request id (e.g. username) by which to count/limit.
 *   Will return:
 *  - nil when all limits pass for that id, or
 *  - [<worst-limit-id> <worst-backoff-msecs> {<limit-id> <backoff-msecs>}]
 *    when any limits fail for that id.
 * 
 *   Or call fn with an additional command argument:
 *  `:rl/peek`  <req-id> - Check limits w/o incrementing count.
 *  `:rl/reset` <req-id> - Reset all limits for given req-id.
 * 
 *   Example:
 * 
 *  (defonce my-rate-limiter
 *    (rate-limiter
 *      {"1  per sec" [1   1000]
 *       "10 per min" [10 60000]}))
 * 
 *  (defn send-message! [username msg-content]
 *    (if-let [fail (my-rate-limiter username)]
 *      (throw (ex-info "Sorry, rate limited!" {:fail fail}))
 *      <send message>))
 */
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(var_args){
var G__8896 = arguments.length;
switch (G__8896) {
case 1:
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$1 = (function (spec){
var vec__8897 = taoensso.encore.rate_limiter_STAR_.call(null,null,spec);
var _ = cljs.core.nth.call(null,vec__8897,(0),null);
var f = cljs.core.nth.call(null,vec__8897,(1),null);
return f;
}));

(taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2 = (function (opts,spec){
var vec__8900 = taoensso.encore.rate_limiter_STAR_.call(null,opts,spec);
var _ = cljs.core.nth.call(null,vec__8900,(0),null);
var f = cljs.core.nth.call(null,vec__8900,(1),null);
return f;
}));

(taoensso.encore.rate_limiter.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.Counter = (function (c){
this.c = c;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.Counter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
}));

(taoensso.encore.Counter.prototype.call = (function() {
var G__8912 = null;
var G__8912__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var o = self__.c;
(self__.c = (self__.c + (1)));

return o;
});
var G__8912__2 = (function (self__,add){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var o = self__.c;
(self__.c = (self__.c + add));

return o;
});
var G__8912__3 = (function (self__,action,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
var G__8905 = action;
var G__8905__$1 = (((G__8905 instanceof cljs.core.Keyword))?G__8905.fqn:null);
switch (G__8905__$1) {
case "add":
(self__.c = (self__.c + n));

return null;

break;
case "set":
(self__.c = n);

return null;

break;
case "set=":
case "set-get":
(self__.c = n);

return n;

break;
case "=set":
case "get-set":
var o = self__.c;
(self__.c = n);

return o;

break;
case "=+":
case "get-add":
var o = self__.c;
(self__.c = (self__.c + n));

return o;

break;
case "+=":
case "add-get":
(self__.c = (self__.c + n));

return self__.c;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8905__$1)].join('')));

}
});
G__8912 = function(self__,action,n){
switch(arguments.length){
case 1:
return G__8912__1.call(this,self__);
case 2:
return G__8912__2.call(this,self__,action);
case 3:
return G__8912__3.call(this,self__,action,n);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__8912.cljs$core$IFn$_invoke$arity$1 = G__8912__1;
G__8912.cljs$core$IFn$_invoke$arity$2 = G__8912__2;
G__8912.cljs$core$IFn$_invoke$arity$3 = G__8912__3;
return G__8912;
})()
);

(taoensso.encore.Counter.prototype.apply = (function (self__,args8904){
var self__ = this;
var self____$1 = this;
var args__5240__auto__ = cljs.core.aclone.call(null,args8904);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5240__auto__.length > (20)))?(function (){var G__8908 = args__5240__auto__.slice((0),(20));
G__8908.push(args__5240__auto__.slice((20)));

return G__8908;
})():args__5240__auto__)));
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var o = self__.c;
(self__.c = (self__.c + (1)));

return o;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$1 = (function (add){
var self__ = this;
var _ = this;
var o = self__.c;
(self__.c = (self__.c + add));

return o;
}));

(taoensso.encore.Counter.prototype.cljs$core$IFn$_invoke$arity$2 = (function (action,n){
var self__ = this;
var _ = this;
var G__8909 = action;
var G__8909__$1 = (((G__8909 instanceof cljs.core.Keyword))?G__8909.fqn:null);
switch (G__8909__$1) {
case "add":
(self__.c = (self__.c + n));

return null;

break;
case "set":
(self__.c = n);

return null;

break;
case "set=":
case "set-get":
(self__.c = n);

return n;

break;
case "=set":
case "get-set":
var o = self__.c;
(self__.c = n);

return o;

break;
case "=+":
case "get-add":
var o = self__.c;
(self__.c = (self__.c + n));

return o;

break;
case "+=":
case "add-get":
(self__.c = (self__.c + n));

return self__.c;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8909__$1)].join('')));

}
}));

(taoensso.encore.Counter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(taoensso.encore.Counter.cljs$lang$type = true);

(taoensso.encore.Counter.cljs$lang$ctorStr = "taoensso.encore/Counter");

(taoensso.encore.Counter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/Counter");
}));

/**
 * Positional factory function for taoensso.encore/Counter.
 */
taoensso.encore.__GT_Counter = (function taoensso$encore$__GT_Counter(c){
return (new taoensso.encore.Counter(c));
});

/**
 * Returns a fast atomic Counter with `init` initial int value:
 *  - (<counter>    ) -> add 1, return old val
 *  - (<counter> <n>) -> add n, return old val
 * 
 *  Experimental 3-arity version takes an `action`:
 *    :add, :set, :set-get, :get-set, :get-add, :add-get
 */
taoensso.encore.counter = (function taoensso$encore$counter(var_args){
var G__8913 = arguments.length;
switch (G__8913) {
case 0:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.counter.call(null,(0));
}));

(taoensso.encore.counter.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new taoensso.encore.Counter(cljs.core.long$.call(null,init)));
}));

(taoensso.encore.counter.cljs$lang$maxFixedArity = 1);

taoensso.encore.rc_deref = (function taoensso$encore$rc_deref(msecs,ts_,n_skip_,gc_fn){
var t1 = taoensso.encore.now_udt.call(null);
var n_skip0 = n_skip_.call(null);
var ts = ts_.call(null);
var n_total = cljs.core.count.call(null,ts);
var n_window = cljs.core.reduce.call(null,(function (n,t0){
if(((t1 - t0) <= msecs)){
return (n + (1));
} else {
return n;
}
}),(0),cljs.core.subvec.call(null,ts,n_skip0));
var n_skip1 = (n_total - n_window);
if((n_skip0 < n_skip1)){
if(cljs.core.compare_and_set_BANG_.call(null,n_skip_,n_skip0,n_skip1)){
if((n_skip1 > (10000))){
gc_fn.call(null,n_skip1);
} else {
}
} else {
}
} else {
}

return n_window;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.RollingCounter = (function (msecs,ts_,n_skip_){
this.msecs = msecs;
this.ts_ = ts_;
this.n_skip_ = n_skip_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.RollingCounter.prototype.call = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var t1_8923 = taoensso.encore.now_udt.call(null);
self__.ts_.call(null,(function (p1__8918_SHARP_){
return cljs.core.conj.call(null,p1__8918_SHARP_,t1_8923);
}));

return this$;
}));

(taoensso.encore.RollingCounter.prototype.apply = (function (self__,args8920){
var self__ = this;
var self____$1 = this;
var args__5240__auto__ = cljs.core.aclone.call(null,args8920);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5240__auto__.length > (20)))?(function (){var G__8922 = args__5240__auto__.slice((0),(20));
G__8922.push(args__5240__auto__.slice((20)));

return G__8922;
})():args__5240__auto__)));
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var t1_8925 = taoensso.encore.now_udt.call(null);
self__.ts_.call(null,(function (p1__8918_SHARP_){
return cljs.core.conj.call(null,p1__8918_SHARP_,t1_8925);
}));

return this$;
}));

(taoensso.encore.RollingCounter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.rc_deref.call(null,self__.msecs,self__.ts_,self__.n_skip_,(function taoensso$encore$gc(n_skip1){
self__.ts_.call(null,(function (p1__8919_SHARP_){
return cljs.core.subvec.call(null,p1__8919_SHARP_,n_skip1);
}));

return cljs.core.reset_BANG_.call(null,self__.n_skip_,(0));
}));
}));

(taoensso.encore.RollingCounter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"msecs","msecs",-942455216,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"ts_","ts_",775102722,null),new cljs.core.Symbol(null,"n-skip_","n-skip_",-1562682054,null)], null);
}));

(taoensso.encore.RollingCounter.cljs$lang$type = true);

(taoensso.encore.RollingCounter.cljs$lang$ctorStr = "taoensso.encore/RollingCounter");

(taoensso.encore.RollingCounter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/RollingCounter");
}));

/**
 * Positional factory function for taoensso.encore/RollingCounter.
 */
taoensso.encore.__GT_RollingCounter = (function taoensso$encore$__GT_RollingCounter(msecs,ts_,n_skip_){
return (new taoensso.encore.RollingCounter(msecs,ts_,n_skip_));
});

/**
 * Experimental. Returns a RollingCounter that you can:
 *  - Invoke to increment count in last `msecs` window and return RollingCounter.
 *  - Deref  to return    count in last `msecs` window.
 */
taoensso.encore.rolling_counter = (function taoensso$encore$rolling_counter(msecs){
return (new taoensso.encore.RollingCounter(cljs.core.long$.call(null,(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,msecs)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e8924){if((e8924 instanceof Error)){
var e = e8924;
return e;
} else {
throw e8924;

}
}})();
if((e == null)){
return msecs;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),3801,11,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),null,new cljs.core.Symbol(null,"msecs","msecs",-942455216,null),msecs,e,null);
}
})()),taoensso.encore.latom.call(null,cljs.core.PersistentVector.EMPTY),taoensso.encore.latom.call(null,(0))));
});
/**
 * Returns a stateful fn of 2 arities:
 *  (fn [ ]) => Returns current sub/vector in O(1).
 *  (fn [x]) => Adds `x` to right of sub/vector, maintaining length <= `nmax`.
 *              Returns current sub/vector.
 * 
 *   Useful for maintaining limited-length histories, etc.
 *   See also `rolling-list` (Clj only).
 */
taoensso.encore.rolling_vector = (function taoensso$encore$rolling_vector(var_args){
var G__8927 = arguments.length;
switch (G__8927) {
case 1:
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$1 = (function (nmax){
return taoensso.encore.rolling_vector.call(null,nmax,null);
}));

(taoensso.encore.rolling_vector.cljs$core$IFn$_invoke$arity$2 = (function (nmax,p__8928){
var map__8929 = p__8928;
var map__8929__$1 = cljs.core.__destructure_map.call(null,map__8929);
var gc_every = cljs.core.get.call(null,map__8929__$1,new cljs.core.Keyword(null,"gc-every","gc-every",-1661544691),16000.0);
var init_val = cljs.core.get.call(null,map__8929__$1,new cljs.core.Keyword(null,"init-val","init-val",-70272968));
var nmax__$1 = cljs.core.long$.call(null,nmax);
var acc_ = taoensso.encore.latom.call(null,cljs.core.vec.call(null,init_val));
var gc_every__$1 = (cljs.core.truth_(gc_every)?cljs.core.long$.call(null,gc_every):null);
var ticker = (cljs.core.truth_(gc_every__$1)?taoensso.encore.counter.call(null):null);
var latch_ = (cljs.core.truth_(gc_every__$1)?taoensso.encore.latom.call(null,null):null);
return (function() {
var taoensso$encore$rolling_vec_fn = null;
var taoensso$encore$rolling_vec_fn__0 = (function (){
return acc_.call(null);
});
var taoensso$encore$rolling_vec_fn__1 = (function (x){
if(cljs.core.truth_(gc_every__$1)){
var tick_8931 = ticker.call(null);
var b2__1591__auto___8932 = (cljs.core.rem.call(null,tick_8931,gc_every__$1) === (0));
if(b2__1591__auto___8932){
var gc_now_QMARK__8933 = b2__1591__auto___8932;
acc_.call(null,(function taoensso$encore$rolling_vec_fn_$_swap_fn(sv){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,sv);
}));
} else {
}
} else {
}

return acc_.call(null,(function taoensso$encore$rolling_vec_fn_$_swap_fn(acc){
var new$ = cljs.core.conj.call(null,acc,x);
if((cljs.core.count.call(null,new$) > nmax__$1)){
return cljs.core.subvec.call(null,new$,(1));
} else {
return new$;
}
}));
});
taoensso$encore$rolling_vec_fn = function(x){
switch(arguments.length){
case 0:
return taoensso$encore$rolling_vec_fn__0.call(this);
case 1:
return taoensso$encore$rolling_vec_fn__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$rolling_vec_fn.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$rolling_vec_fn__0;
taoensso$encore$rolling_vec_fn.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$rolling_vec_fn__1;
return taoensso$encore$rolling_vec_fn;
})()
}));

(taoensso.encore.rolling_vector.cljs$lang$maxFixedArity = 2);

/**
 * Single system newline
 */
taoensso.encore.newline = "\n";
/**
 * Double system newline
 */
taoensso.encore.newlines = ["\n","\n"].join('');
/**
 * Prints given argument as string, and flushes output stream.
 */
taoensso.encore.print1 = (function taoensso$encore$print1(x){
return cljs.core.print.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
});
/**
 * Like `core/println` but won't interleave content from different threads.
 */
taoensso.encore.println_atomic = (function taoensso$encore$println_atomic(x){
return cljs.core.println.call(null,x);
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * Returns a new stateful string builder:
 *  - `java.lang.StringBuilder`  for Clj
 *  - `goog.string.StringBuffer` for Cljs
 * 
 *   See also `sb-append`.
 */
taoensso.encore.str_builder = (function taoensso$encore$str_builder(var_args){
var G__8935 = arguments.length;
switch (G__8935) {
case 0:
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new goog.string.StringBuffer());
}));

(taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1 = (function (init_str){
return (new goog.string.StringBuffer(init_str));
}));

(taoensso.encore.str_builder.cljs$lang$maxFixedArity = 1);

/**
 * Appends given string to given string builder. See also `str-builder.`
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__8941 = arguments.length;
switch (G__8941) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___8943 = arguments.length;
var i__5750__auto___8945 = (0);
while(true){
if((i__5750__auto___8945 < len__5749__auto___8943)){
args_arr__5774__auto__.push((arguments[i__5750__auto___8945]));

var G__8946 = (i__5750__auto___8945 + (1));
i__5750__auto___8945 = G__8946;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
}));

(taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),taoensso.encore.sb_append.call(null,str_builder,s),more);
}));

/** @this {Function} */
(taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq8938){
var G__8939 = cljs.core.first.call(null,seq8938);
var seq8938__$1 = cljs.core.next.call(null,seq8938);
var G__8940 = cljs.core.first.call(null,seq8938__$1);
var seq8938__$2 = cljs.core.next.call(null,seq8938__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8939,G__8940,seq8938__$2);
}));

(taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2));

/**
 * String builder reducing fn.
 */
taoensso.encore.str_rf = (function taoensso$encore$str_rf(var_args){
var G__8947 = arguments.length;
switch (G__8947) {
case 0:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.str_builder.call(null);
}));

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$1 = (function (acc){
if(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))){
return acc;
} else {
return taoensso.encore.str_builder.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc));
}
}));

(taoensso.encore.str_rf.cljs$core$IFn$_invoke$arity$2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
}));

(taoensso.encore.str_rf.cljs$lang$maxFixedArity = 2);

/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform` support.
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__8950 = arguments.length;
switch (G__8950) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
}));

(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__5023__auto__ = separator;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__5023__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll));
}
}
}));

(taoensso.encore.str_join.cljs$lang$maxFixedArity = 3);

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
 * Returns (first/last) ?index of substring if it exists within given string.
 */
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__8953 = arguments.length;
switch (G__8953) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.call(null,s,substr,(0),false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.call(null,s,substr,start_idx,false);
}));

(taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
}));

(taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4);

/**
 * Returns ?substring from given string.
 * 
 *   Like `subs` but:
 *  - Provides consistent clj/s behaviour.
 *  - Never throws (snaps to valid indexes).
 *  - Indexes may be -ive (=> indexed from end of string).
 * 
 *   Returns nil when requested substring would be empty.
 */
taoensso.encore.get_substr_by_idx = (function taoensso$encore$get_substr_by_idx(var_args){
var G__8956 = arguments.length;
switch (G__8956) {
case 2:
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$2 = (function (s,start_idx){
return taoensso.encore.get_substr_by_idx.call(null,s,start_idx,null);
}));

(taoensso.encore.get_substr_by_idx.cljs$core$IFn$_invoke$arity$3 = (function (s,start_idx,end_idx){
if(cljs.core.truth_(s)){
var s__$1 = s;
var full_len = s__$1.length;
var start_idx__$1 = (((start_idx == null))?(0):start_idx);
var end_idx__$1 = (((end_idx == null))?full_len:end_idx);
if((((start_idx__$1 === (0))) && ((end_idx__$1 >= full_len)))){
return s__$1;
} else {
var start_idx__$2 = (((start_idx__$1 < (0)))?(full_len + start_idx__$1):start_idx__$1);
var start_idx__$3 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = start_idx__$2;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var end_idx__$2 = (((end_idx__$1 < (0)))?(full_len + end_idx__$1):end_idx__$1);
var end_idx__$3 = (function (){var x__5113__auto__ = full_len;
var y__5114__auto__ = end_idx__$2;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((start_idx__$3 >= end_idx__$3)){
return null;
} else {
return s__$1.substring(start_idx__$3,end_idx__$3);
}
}
} else {
return null;
}
}));

(taoensso.encore.get_substr_by_idx.cljs$lang$maxFixedArity = 3);

/**
 * Returns ?substring from given string.
 *   Like `get-substr-by-idx`, but takes a substring-length 3rd argument.
 */
taoensso.encore.get_substr_by_len = (function taoensso$encore$get_substr_by_len(var_args){
var G__8959 = arguments.length;
switch (G__8959) {
case 2:
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$2 = (function (s,start_idx){
return taoensso.encore.get_substr_by_len.call(null,s,start_idx,null);
}));

(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3 = (function (s,start_idx,sub_len){
if(cljs.core.truth_(s)){
var s__$1 = s;
var full_len = s__$1.length;
var sub_len__$1 = (((sub_len == null))?full_len:sub_len);
if((sub_len__$1 > (0))){
var start_idx__$1 = (((start_idx == null))?(0):start_idx);
if((((start_idx__$1 === (0))) && ((sub_len__$1 >= full_len)))){
return s__$1;
} else {
var start_idx__$2 = (((start_idx__$1 < (0)))?(full_len + start_idx__$1):start_idx__$1);
var start_idx__$3 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = start_idx__$2;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var end_idx = (start_idx__$3 + sub_len__$1);
var end_idx__$1 = (function (){var x__5113__auto__ = full_len;
var y__5114__auto__ = end_idx;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((start_idx__$3 >= end_idx__$1)){
return null;
} else {
return s__$1.substring(start_idx__$3,end_idx__$1);
}
}
} else {
return null;
}
} else {
return null;
}
}));

(taoensso.encore.get_substr_by_len.cljs$lang$maxFixedArity = 3);

/**
 * Returns true iff given strings are equal, ignoring case.
 */
taoensso.encore.case_insensitive_str_EQ_ = (function taoensso$encore$case_insensitive_str_EQ_(s1,s2){
var or__5025__auto__ = (s1 === s2);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var l1 = s1.length;
var l2 = s2.length;
var and__5023__auto__ = (l1 === l2);
if(and__5023__auto__){
return taoensso.encore.reduce_n.call(null,(function (acc,idx){
var c1 = s1.charAt(idx).toLowerCase();
var c2 = s2.charAt(idx).toLowerCase();
if(cljs.core._EQ_.call(null,c1,c2)){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,(0),l1);
} else {
return and__5023__auto__;
}
}
});
/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for <http://dev.clojure.org/jira/browse/CLJS-794>,
 *               <http://dev.clojure.org/jira/browse/CLJS-911>.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",(cljs.core.truth_(match.ignoreCase)?"i":null),(cljs.core.truth_(match.multiline)?"m":null)].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:(function() { 
var G__8961__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__8961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8962__i = 0, G__8962__a = new Array(arguments.length -  0);
while (G__8962__i < G__8962__a.length) {G__8962__a[G__8962__i] = arguments[G__8962__i + 0]; ++G__8962__i;}
  args = new cljs.core.IndexedSeq(G__8962__a,0,null);
} 
return G__8961__delegate.call(this,args);};
G__8961.cljs$lang$maxFixedArity = 0;
G__8961.cljs$lang$applyTo = (function (arglist__8964){
var args = cljs.core.seq(arglist__8964);
return G__8961__delegate(args);
});
G__8961.cljs$core$IFn$_invoke$arity$variadic = G__8961__delegate;
return G__8961;
})()
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if((x == null)){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(var_args){
var G__8965 = arguments.length;
switch (G__8965) {
case 2:
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,taoensso.encore.nil__GT_str,fmt,args);
}));

(taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (xform,fmt,args){
if((fmt == null)){
return "";
} else {
var args__$1 = (cljs.core.truth_(xform)?cljs.core.mapv.call(null,xform,args):args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__$1);
}
}));

(taoensso.encore.format_STAR_.cljs$lang$maxFixedArity = 3);


/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8969 = arguments.length;
var i__5750__auto___8970 = (0);
while(true){
if((i__5750__auto___8970 < len__5749__auto___8969)){
args__5755__auto__.push((arguments[i__5750__auto___8970]));

var G__8971 = (i__5750__auto___8970 + (1));
i__5750__auto___8970 = G__8971;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
}));

(taoensso.encore.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.format.cljs$lang$applyTo = (function (seq8966){
var G__8967 = cljs.core.first.call(null,seq8966);
var seq8966__$1 = cljs.core.next.call(null,seq8966);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8967,seq8966__$1);
}));

/**
 * Like `string/join` but skips nils and duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll));
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (acc,in$){
var in$__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$);
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
}),taoensso.encore.str_builder.call(null),coll));
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8973 = arguments.length;
var i__5750__auto___8974 = (0);
while(true){
if((i__5750__auto___8974 < len__5749__auto___8973)){
args__5755__auto__.push((arguments[i__5750__auto___8974]));

var G__8975 = (i__5750__auto___8974 + (1));
i__5750__auto___8974 = G__8975;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
}));

(taoensso.encore.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.path.cljs$lang$applyTo = (function (seq8972){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8972));
}));

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * For Clj: returns a random `java.util.UUID`.
 *   For Cljs: returns a random UUID string.
 * 
 *   Uses strong randomness when possible.
 *   See also `uuid-str`, `nanoid`, `rand-id-fn`.
 */
taoensso.encore.uuid = (function taoensso$encore$uuid(){
var b2__1591__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_crypto,"randomUUID");
if(cljs.core.truth_(b2__1591__auto__)){
var f = b2__1591__auto__;
return f.call(taoensso.encore.js__QMARK_crypto);
} else {
var quad_hex = (function (){
var unpadded_hex = cljs.core.rand_int.call(null,(65536)).toString((16));
var G__8976 = ((unpadded_hex).length);
switch (G__8976) {
case (1):
return ["000",unpadded_hex].join('');

break;
case (2):
return ["00",unpadded_hex].join('');

break;
case (3):
return ["0",unpadded_hex].join('');

break;
default:
return unpadded_hex;

}
});
var ver_trip_hex = ((16384) | ((4095) & cljs.core.rand_int.call(null,(65536)))).toString((16));
var res_trip_hex = ((32768) | ((16383) & cljs.core.rand_int.call(null,(65536)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex.call(null)),"-",ver_trip_hex,"-",res_trip_hex,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quad_hex.call(null))].join('');
}
});
/**
 * Returns a random UUID string of given length (max 36).
 *   Uses strong randomness when possible. See also `uuid`, `nanoid`, `rand-id-fn`.
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__8979 = arguments.length;
switch (G__8979) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_len){
return taoensso.encore.get_substr_by_len.call(null,taoensso.encore.uuid_str.call(null),(0),max_len);
}));

(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.uuid.call(null);
}));

(taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1);

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8982 = arguments.length;
var i__5750__auto___8983 = (0);
while(true){
if((i__5750__auto___8983 < len__5749__auto___8982)){
args__5755__auto__.push((arguments[i__5750__auto___8983]));

var G__8984 = (i__5750__auto___8983 + (1));
i__5750__auto___8983 = G__8984;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_.call(null,in$)){
return cljs.core.reduce.call(null,taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.call(null,acc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
}
}),taoensso.encore.str_builder.call(null),xs));
}));

(taoensso.encore.into_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.into_str.cljs$lang$applyTo = (function (seq8981){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8981));
}));

/**
 * Constant-time string equality checker.
 *   Useful to prevent timing attacks, etc.
 */
taoensso.encore.const_str_EQ_ = (function taoensso$encore$const_str_EQ_(s1,s2){
if(cljs.core.truth_((function (){var and__5023__auto__ = s1;
if(cljs.core.truth_(and__5023__auto__)){
return s2;
} else {
return and__5023__auto__;
}
})())){
var vx = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1"], null);
var v1 = cljs.core.vec.call(null,s1);
var v2 = cljs.core.vec.call(null,s2);
var n1 = cljs.core.count.call(null,v1);
var n2 = cljs.core.count.call(null,v2);
var nmax = (function (){var x__5110__auto__ = n1;
var y__5111__auto__ = n2;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var nmin = (function (){var x__5113__auto__ = n1;
var y__5114__auto__ = n2;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return taoensso.encore.reduce_n.call(null,(function (acc,idx){
if((idx >= nmin)){
var and__5023__auto__ = cljs.core._EQ_.call(null,cljs.core.get.call(null,vx,(0)),cljs.core.get.call(null,vx,(1)));
if(and__5023__auto__){
return acc;
} else {
return and__5023__auto__;
}
} else {
var and__5023__auto__ = cljs.core._EQ_.call(null,cljs.core.get.call(null,v1,idx),cljs.core.get.call(null,v2,idx));
if(and__5023__auto__){
return acc;
} else {
return and__5023__auto__;
}
}
}),true,nmax);
} else {
return null;
}
});
/**
 * Give any nameable type (string, keyword, symbol), returns the same
 *   type with at most `n-full` (default 1) unabbreviated namespace parts.
 * 
 *   Example:
 *  (abbreviate-ns 0  :foo.bar/baz)   => :f.b/baz
 *  (abbreviate-ns 1  'foo.bar/baz)   => 'f.bar/baz
 *  (abbreviate-ns 2 "foo.bar/baz") => "foo.bar/baz"
 */
taoensso.encore.abbreviate_ns = (function taoensso$encore$abbreviate_ns(var_args){
var G__8986 = arguments.length;
switch (G__8986) {
case 1:
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.abbreviate_ns.call(null,(1),x);
}));

(taoensso.encore.abbreviate_ns.cljs$core$IFn$_invoke$arity$2 = (function (n_full,x){
var n_full__$1 = cljs.core.long$.call(null,(function (){var e = (function (){try{if(taoensso.encore.nat_int_QMARK_.call(null,n_full)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e8990){if((e8990 instanceof Error)){
var e = e8990;
return e;
} else {
throw e8990;

}
}})();
if((e == null)){
return n_full;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),4348,23,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),null,new cljs.core.Symbol(null,"n-full","n-full",797009712,null),n_full,e,null);
}
})());
var vec__8987 = clojure.string.split.call(null,taoensso.encore.as_qname.call(null,x),/\//);
var p1 = cljs.core.nth.call(null,vec__8987,(0),null);
var p2 = cljs.core.nth.call(null,vec__8987,(1),null);
if(cljs.core.truth_(p2)){
var name_part = p2;
var ns_parts = clojure.string.split.call(null,p1,/\./);
var n_to_abbr = (cljs.core.count.call(null,ns_parts) - n_full__$1);
var sb = taoensso.encore.reduce_indexed.call(null,(function (sb,idx,in$){
if((idx === (0))){
} else {
taoensso.encore.sb_append.call(null,sb,".");
}

if((idx < n_to_abbr)){
return taoensso.encore.sb_append.call(null,sb,in$.substring((0),(1)));
} else {
return taoensso.encore.sb_append.call(null,sb,in$);
}
}),taoensso.encore.str_builder.call(null),ns_parts);
taoensso.encore.sb_append.call(null,sb,"/");

taoensso.encore.sb_append.call(null,sb,name_part);

var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if((x instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,s);
} else {
if((x instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,s);
} else {
return s;
}
}
} else {
return x;
}
}));

(taoensso.encore.abbreviate_ns.cljs$lang$maxFixedArity = 2);

/**
 * Is `taoensso.telemere` present (not necessarily loaded)?
 */
taoensso.encore.have_telemere_QMARK_ = false;
/**
 * Returns a random byte array of given size. Uses strong randomness when possible.
 */
taoensso.encore.secure_rand_bytes = (function taoensso$encore$secure_rand_bytes(size){
var ba = (new Uint8Array(size));
var b2__1591__auto___8996 = taoensso.encore.js__QMARK_crypto;
if(cljs.core.truth_(b2__1591__auto___8996)){
var crypto_8997 = b2__1591__auto___8996;
crypto_8997.getRandomValues(ba);
} else {
var n__5616__auto___8998 = size;
var i_8999 = (0);
while(true){
if((i_8999 < n__5616__auto___8998)){
(ba[i_8999] = Math.floor(((256) * Math.random())));

var G__9000 = (i_8999 + (1));
i_8999 = G__9000;
continue;
} else {
}
break;
}
}

return ba;
});
/**
 * Returns a (fn rand-id []) that returns random id strings.
 *   Uses strong randomness when possible.
 * 
 *   Options include:
 *  `:chars`         - ∈ #{<string> :nanoid :alphanumeric :no-look-alikes ...}
 *  `:len`           - Length of id strings to generate
 *  `:rand-bytes-fn` - Optional (fn [size]) to return random byte array of given size
 * 
 *   See also `uuid-str`, `nano-id`.
 */
taoensso.encore.rand_id_fn = (function taoensso$encore$rand_id_fn(p__9001){
var map__9002 = p__9001;
var map__9002__$1 = cljs.core.__destructure_map.call(null,map__9002);
var chars = cljs.core.get.call(null,map__9002__$1,new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.Keyword(null,"nanoid","nanoid",-90964628));
var len = cljs.core.get.call(null,map__9002__$1,new cljs.core.Keyword(null,"len","len",1423657078),(21));
var rand_bytes_fn = cljs.core.get.call(null,map__9002__$1,new cljs.core.Keyword(null,"rand-bytes-fn","rand-bytes-fn",501267911),taoensso.encore.secure_rand_bytes);
var chars__$1 = (function (){var G__9003 = chars;
var G__9003__$1 = (((G__9003 instanceof cljs.core.Keyword))?G__9003.fqn:null);
switch (G__9003__$1) {
case "alphanumeric":
return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

break;
case "nanoid":
return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

break;
case "nanoid-readable":
return "346789ABCDEFGHJKLMNPQRTUVWXYabcdefghijkmnpqrtwxyz";

break;
case "numbers":
return "0123456789";

break;
case "alpha-lowercase":
return "abcdefghijklmnopqrstuvwxyz";

break;
case "alpha-uppercase":
return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

break;
case "hex-lowercase":
return "0123456789abcdef";

break;
case "hex-uppercase":
return "0123456789ABCDEF";

break;
default:
var e = (function (){try{if(typeof chars === 'string'){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e9004){if((e9004 instanceof Error)){
var e = e9004;
return e;
} else {
throw e9004;

}
}})();
if((e == null)){
return chars;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),4565,11,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.Symbol(null,"string?","string?",-1129175764,null),null,new cljs.core.Symbol(null,"chars","chars",545901210,null),chars,e,null);
}

}
})();
var nchars = cljs.core.count.call(null,chars__$1);
var max_char_idx = (nchars - (1));
var chars__$2 = cljs.core.object_array.call(null,chars__$1);
var mask = ((-1) & (((2) << (Math.floor((Math.log((nchars - (1))) / Math.log((2)))) | (0))) - (1)));
var exp_bytes = ((mask * len) / nchars);
var stepn = ((function (){var x__5110__auto__ = (2);
var y__5111__auto__ = Math.ceil((0.2 * exp_bytes));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() | (0));
var step1 = (((((cljs.core.mod.call(null,(256),nchars) | (0)) === (0)))?len:Math.ceil((1.2 * exp_bytes))) | (0));
return (function taoensso$encore$rand_id_fn_$_rand_id(){
var sb = taoensso.encore.str_builder.call(null);
var idx = (0);
var max_idx = (step1 - (1));
var rand_bytes = rand_bytes_fn.call(null,step1);
while(true){
var possible_ch_idx_9008 = ((rand_bytes[idx]) & mask);
if((possible_ch_idx_9008 <= max_char_idx)){
sb.append((chars__$2[possible_ch_idx_9008]));
} else {
}

if((sb.length() === len)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((idx === max_idx)){
var G__9009 = (0);
var G__9010 = (stepn - (1));
var G__9011 = rand_bytes_fn.call(null,stepn);
idx = G__9009;
max_idx = G__9010;
rand_bytes = G__9011;
continue;
} else {
var G__9012 = (idx + (1));
var G__9013 = max_idx;
var G__9014 = rand_bytes;
idx = G__9012;
max_idx = G__9013;
rand_bytes = G__9014;
continue;
}
}
break;
}
});
});
var chars_9015 = (function (){var s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
return cljs.core.object_array.call(null,s);
})();
/**
 * Returns a random "Nano ID" of given length, Ref. <https://github.com/ai/nanoid>.
 *  Uses strong randomness when possible. See also `uuid-str`, `rand-id-fn`.
 */
taoensso.encore.nanoid = (function taoensso$encore$nanoid(var_args){
var G__9007 = arguments.length;
switch (G__9007) {
case 0:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.nanoid.call(null,(21));
}));

(taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$1 = (function (len){
var sb = taoensso.encore.str_builder.call(null);
var ba = taoensso.encore.secure_rand_bytes.call(null,len);
var max_idx = (len - (1));
var idx_9017 = (0);
while(true){
sb.append((chars_9015[((ba[idx_9017]) & (63))]));

if((idx_9017 < max_idx)){
var G__9018 = (idx_9017 + (1));
idx_9017 = G__9018;
continue;
} else {
}
break;
}

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}));

(taoensso.encore.nanoid.cljs$lang$maxFixedArity = 1);

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
/**
 * Like `core/sort` but:
 *  - Returns a vector.
 *  - `comparator` can be `:asc`, `:desc`, or an arbitrary comparator.
 *  - An optional `keyfn` may be provided, as in `core/sort-by`.
 */
taoensso.encore.sortv = (function taoensso$encore$sortv(var_args){
var G__9020 = arguments.length;
switch (G__9020) {
case 1:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.sortv.call(null,null,new cljs.core.Keyword(null,"asc","asc",356854569),coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$2 = (function (comparator,coll){
return taoensso.encore.sortv.call(null,null,comparator,coll);
}));

(taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_keyfn,comparator,coll){
if(cljs.core.seq.call(null,coll)){
var comparator__$1 = (function (){var G__9021 = comparator;
var G__9021__$1 = (((G__9021 instanceof cljs.core.Keyword))?G__9021.fqn:null);
switch (G__9021__$1) {
case "asc":
return cljs.core.compare;

break;
case "dsc":
case "desc":
return (function (x,y){
return cljs.core.compare.call(null,y,x);
});

break;
default:
return comparator;

}
})();
var comparator__$2 = (function (){var b2__1591__auto__ = ((cljs.core.not_EQ_.call(null,_QMARK_keyfn,cljs.core.identity))?_QMARK_keyfn:null);
if(cljs.core.truth_(b2__1591__auto__)){
var kfn = b2__1591__auto__;
return (function (x,y){
return comparator__$1.call(null,kfn.call(null,x),kfn.call(null,y));
});
} else {
return comparator__$1;
}
})();
var a = cljs.core.to_array.call(null,coll);
taoensso.encore.goog$module$goog$array.stableSort.call(null,a,cljs.core.fn__GT_comparator.call(null,comparator__$2));

return cljs.core.with_meta.call(null,cljs.core.vec.call(null,a),cljs.core.meta.call(null,coll));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));

(taoensso.encore.sortv.cljs$lang$maxFixedArity = 3);

var sentinel_9029 = ({});
var nil__GT_sentinel_9030 = (function (x){
if((x == null)){
return sentinel_9029;
} else {
return x;
}
});
var sentinel__GT_nil_9031 = (function (x){
if((x === sentinel_9029)){
return null;
} else {
return x;
}
});
/**
 * Reduces the top `n` items from `coll` of N items.
 *  Clj impln is O(N.logn) vs O(N.logN) for (take n (sort-by ...)).
 */
taoensso.encore.reduce_top = (function taoensso$encore$reduce_top(var_args){
var G__9028 = arguments.length;
switch (G__9028) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = (function (n,rf,init,coll){
return taoensso.encore.reduce_top.call(null,n,cljs.core.identity,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.call(null,n,keyfn,cljs.core.compare,rf,init,coll);
}));

(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count.call(null,coll);
var n__$1 = cljs.core.long$.call(null,(function (){var x__5113__auto__ = coll_size;
var y__5114__auto__ = cljs.core.long$.call(null,n);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.call(null,cljs.core.take.call(null,n__$1),cljs.core.completing.call(null,rf),init,cljs.core.sort_by.call(null,keyfn,cmp,coll));
} else {
return init;
}
}));

(taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6);

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__9033 = arguments.length;
switch (G__9033) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.call(null,to,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.call(null,to,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_.call(null,to)){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_top.call(null,n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$.call(null,to),coll));
} else {
return taoensso.encore.reduce_top.call(null,n,keyfn,cmp,cljs.core.conj,to,coll);
}
}));

(taoensso.encore.top_into.cljs$lang$maxFixedArity = 5);

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__9037 = arguments.length;
switch (G__9037) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
}));

(taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
}));

(taoensso.encore.top.cljs$lang$maxFixedArity = 4);

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var G__9057 = arguments.length;
switch (G__9057) {
case 1:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___9063 = arguments.length;
var i__5750__auto___9068 = (0);
while(true){
if((i__5750__auto___9068 < len__5749__auto___9063)){
args_arr__5774__auto__.push((arguments[i__5750__auto___9068]));

var G__9069 = (i__5750__auto___9068 + (1));
i__5750__auto___9068 = G__9069;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((4) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((4)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5775__auto__);

}
});

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$1 = (function (p__9058){
var map__9059 = p__9058;
var map__9059__$1 = cljs.core.__destructure_map.call(null,map__9059);
var ms = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var weeks = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var msecs = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var months = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var secs = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var mins = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var days = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var years = cljs.core.get.call(null,map__9059__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
return taoensso.encore.round0.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2 = (function (k1,v1){
return taoensso.encore.ms.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1]));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$4 = (function (k1,v1,k2,v2){
return taoensso.encore.ms.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]));
}));

(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (k1,v1,k2,v2,more){
return taoensso.encore.ms.call(null,taoensso.encore.reduce_kvs.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]),more));
}));

/** @this {Function} */
(taoensso.encore.ms.cljs$lang$applyTo = (function (seq9052){
var G__9053 = cljs.core.first.call(null,seq9052);
var seq9052__$1 = cljs.core.next.call(null,seq9052);
var G__9054 = cljs.core.first.call(null,seq9052__$1);
var seq9052__$2 = cljs.core.next.call(null,seq9052__$1);
var G__9055 = cljs.core.first.call(null,seq9052__$2);
var seq9052__$3 = cljs.core.next.call(null,seq9052__$2);
var G__9056 = cljs.core.first.call(null,seq9052__$3);
var seq9052__$4 = cljs.core.next.call(null,seq9052__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9053,G__9054,G__9055,G__9056,seq9052__$4);
}));

(taoensso.encore.ms.cljs$lang$maxFixedArity = (4));

/**
 * Returns ~number of seconds in period defined by given args.
 */
taoensso.encore.secs = (function taoensso$encore$secs(var_args){
var G__9070 = arguments.length;
switch (G__9070) {
case 1:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___9072 = arguments.length;
var i__5750__auto___9073 = (0);
while(true){
if((i__5750__auto___9073 < len__5749__auto___9072)){
args_arr__5774__auto__.push((arguments[i__5750__auto___9073]));

var G__9074 = (i__5750__auto___9073 + (1));
i__5750__auto___9073 = G__9074;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((4) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((4)),(0),null)):null);
return taoensso.encore.secs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5775__auto__);

}
});

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return taoensso.encore.ms__GT_secs.call(null,taoensso.encore.ms.call(null,opts));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$2 = (function (k1,v1){
return taoensso.encore.ms__GT_secs.call(null,taoensso.encore.ms.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1])));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$4 = (function (k1,v1,k2,v2){
return taoensso.encore.ms__GT_secs.call(null,taoensso.encore.ms.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2])));
}));

(taoensso.encore.secs.cljs$core$IFn$_invoke$arity$variadic = (function (k1,v1,k2,v2,more){
return taoensso.encore.ms__GT_secs.call(null,taoensso.encore.ms.call(null,taoensso.encore.reduce_kvs.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]),more)));
}));

/** @this {Function} */
(taoensso.encore.secs.cljs$lang$applyTo = (function (seq9062){
var G__9064 = cljs.core.first.call(null,seq9062);
var seq9062__$1 = cljs.core.next.call(null,seq9062);
var G__9065 = cljs.core.first.call(null,seq9062__$1);
var seq9062__$2 = cljs.core.next.call(null,seq9062__$1);
var G__9066 = cljs.core.first.call(null,seq9062__$2);
var seq9062__$3 = cljs.core.next.call(null,seq9062__$2);
var G__9067 = cljs.core.first.call(null,seq9062__$3);
var seq9062__$4 = cljs.core.next.call(null,seq9062__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9064,G__9065,G__9066,G__9067,seq9062__$4);
}));

(taoensso.encore.secs.cljs$lang$maxFixedArity = (4));

taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__9088__delegate = function (xs){
var b2__1591__auto__ = console.log;
if(cljs.core.truth_(b2__1591__auto__)){
var f = b2__1591__auto__;
return f.apply(console,cljs.core.into_array.call(null,xs));
} else {
return null;
}
};
var G__9088 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__9089__i = 0, G__9089__a = new Array(arguments.length -  0);
while (G__9089__i < G__9089__a.length) {G__9089__a[G__9089__i] = arguments[G__9089__i + 0]; ++G__9089__i;}
  xs = new cljs.core.IndexedSeq(G__9089__a,0,null);
} 
return G__9088__delegate.call(this,xs);};
G__9088.cljs$lang$maxFixedArity = 0;
G__9088.cljs$lang$applyTo = (function (arglist__9090){
var xs = cljs.core.seq(arglist__9090);
return G__9088__delegate(xs);
});
G__9088.cljs$core$IFn$_invoke$arity$variadic = G__9088__delegate;
return G__9088;
})()
:(function() { 
var G__9091__delegate = function (xs){
return null;
};
var G__9091 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__9092__i = 0, G__9092__a = new Array(arguments.length -  0);
while (G__9092__i < G__9092__a.length) {G__9092__a[G__9092__i] = arguments[G__9092__i + 0]; ++G__9092__i;}
  xs = new cljs.core.IndexedSeq(G__9092__a,0,null);
} 
return G__9091__delegate.call(this,xs);};
G__9091.cljs$lang$maxFixedArity = 0;
G__9091.cljs$lang$applyTo = (function (arglist__9093){
var xs = cljs.core.seq(arglist__9093);
return G__9091__delegate(xs);
});
G__9091.cljs$core$IFn$_invoke$arity$variadic = G__9091__delegate;
return G__9091;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9094 = arguments.length;
var i__5750__auto___9095 = (0);
while(true){
if((i__5750__auto___9095 < len__5749__auto___9094)){
args__5755__auto__.push((arguments[i__5750__auto___9095]));

var G__9096 = (i__5750__auto___9095 + (1));
i__5750__auto___9095 = G__9096;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.logp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.logp.cljs$lang$applyTo = (function (seq9082){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9082));
}));


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9097 = arguments.length;
var i__5750__auto___9098 = (0);
while(true){
if((i__5750__auto___9098 < len__5749__auto___9097)){
args__5755__auto__.push((arguments[i__5750__auto___9098]));

var G__9099 = (i__5750__auto___9098 + (1));
i__5750__auto___9098 = G__9099;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
}));

(taoensso.encore.sayp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.encore.sayp.cljs$lang$applyTo = (function (seq9083){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9083));
}));


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9100 = arguments.length;
var i__5750__auto___9101 = (0);
while(true){
if((i__5750__auto___9101 < len__5749__auto___9100)){
args__5755__auto__.push((arguments[i__5750__auto___9101]));

var G__9102 = (i__5750__auto___9101 + (1));
i__5750__auto___9101 = G__9102;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,taoensso.encore.format_STAR_.call(null,fmt,xs));
}));

(taoensso.encore.logf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.logf.cljs$lang$applyTo = (function (seq9084){
var G__9085 = cljs.core.first.call(null,seq9084);
var seq9084__$1 = cljs.core.next.call(null,seq9084);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9085,seq9084__$1);
}));


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9103 = arguments.length;
var i__5750__auto___9104 = (0);
while(true){
if((i__5750__auto___9104 < len__5749__auto___9103)){
args__5755__auto__.push((arguments[i__5750__auto___9104]));

var G__9106 = (i__5750__auto___9104 + (1));
i__5750__auto___9104 = G__9106;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
}));

(taoensso.encore.sayf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.sayf.cljs$lang$applyTo = (function (seq9086){
var G__9087 = cljs.core.first.call(null,seq9086);
var seq9086__$1 = cljs.core.next.call(null,seq9086);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9087,seq9086__$1);
}));

/**
 * Returns current window location as
 *   {:keys [href protocol hostname host pathname search hash]}.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__1591__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_window,"location");
if(cljs.core.truth_(b2__1591__auto__)){
var loc = b2__1591__auto__;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
});
taoensso.encore.default_xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

taoensso.encore.js_form_data_QMARK_ = (((typeof FormData !== 'undefined'))?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = (((typeof File !== 'undefined'))?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq.call(null,params)){
return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js.call(null,params)).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.call(null,params);
var uri_with_query = ((clojure.string.blank_QMARK_.call(null,qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = (function (uri,params){
if(cljs.core.truth_(taoensso.encore.js_form_data_QMARK_.call(null,params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_9127 = (function (){try{if(cljs.core.map_QMARK_.call(null,params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e9105){if((e9105 instanceof Error)){
var e_9127 = e9105;
return e_9127;
} else {
throw e9105;

}
}})();
if((e_9127 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),5770,22,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.Symbol(null,"map?","map?",-1780568534,null),null,new cljs.core.Symbol(null,"params","params",-1943919534,null),params,e_9127,null);
}

if(cljs.core.truth_((function (){var and__5023__auto__ = (typeof FormData !== 'undefined');
if(and__5023__auto__){
return taoensso.encore.rsome.call(null,taoensso.encore.js_file_QMARK_,cljs.core.vals.call(null,params));
} else {
return and__5023__auto__;
}
})())){
var form_data = (new FormData());
var seq__9107_9128 = cljs.core.seq.call(null,params);
var chunk__9108_9129 = null;
var count__9109_9130 = (0);
var i__9110_9131 = (0);
while(true){
if((i__9110_9131 < count__9109_9130)){
var vec__9117_9132 = cljs.core._nth.call(null,chunk__9108_9129,i__9110_9131);
var k_9133 = cljs.core.nth.call(null,vec__9117_9132,(0),null);
var v_9134 = cljs.core.nth.call(null,vec__9117_9132,(1),null);
form_data.append(cljs.core.name.call(null,k_9133),v_9134);


var G__9135 = seq__9107_9128;
var G__9136 = chunk__9108_9129;
var G__9137 = count__9109_9130;
var G__9138 = (i__9110_9131 + (1));
seq__9107_9128 = G__9135;
chunk__9108_9129 = G__9136;
count__9109_9130 = G__9137;
i__9110_9131 = G__9138;
continue;
} else {
var temp__5825__auto___9140 = cljs.core.seq.call(null,seq__9107_9128);
if(temp__5825__auto___9140){
var seq__9107_9141__$1 = temp__5825__auto___9140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9107_9141__$1)){
var c__5548__auto___9145 = cljs.core.chunk_first.call(null,seq__9107_9141__$1);
var G__9146 = cljs.core.chunk_rest.call(null,seq__9107_9141__$1);
var G__9147 = c__5548__auto___9145;
var G__9148 = cljs.core.count.call(null,c__5548__auto___9145);
var G__9149 = (0);
seq__9107_9128 = G__9146;
chunk__9108_9129 = G__9147;
count__9109_9130 = G__9148;
i__9110_9131 = G__9149;
continue;
} else {
var vec__9120_9151 = cljs.core.first.call(null,seq__9107_9141__$1);
var k_9152 = cljs.core.nth.call(null,vec__9120_9151,(0),null);
var v_9153 = cljs.core.nth.call(null,vec__9120_9151,(1),null);
form_data.append(cljs.core.name.call(null,k_9152),v_9153);


var G__9154 = cljs.core.next.call(null,seq__9107_9141__$1);
var G__9155 = null;
var G__9156 = (0);
var G__9157 = (0);
seq__9107_9128 = G__9154;
chunk__9108_9129 = G__9155;
count__9109_9130 = G__9156;
i__9110_9131 = G__9157;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.call(null,params)], null);
}
}
});
return (function (uri,method,params){
if(cljs.core.truth_((function (x){
var or__5025__auto__ = taoensso.truss.impl.safe_pred.call(null,cljs.core.nil_QMARK_).call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = taoensso.truss.impl.safe_pred.call(null,cljs.core.map_QMARK_).call(null,x);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return taoensso.truss.impl.safe_pred.call(null,taoensso.encore.js_form_data_QMARK_).call(null,x);
}
}
}).call(null,params))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),5782,12,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"js-form-data?","js-form-data?",-1807235094,null)], null),null,new cljs.core.Symbol(null,"params","params",-1943919534,null),params,null,null);
}

var G__9123 = method;
var G__9123__$1 = (((G__9123 instanceof cljs.core.Keyword))?G__9123.fqn:null);
switch (G__9123__$1) {
case "get":
return url_encode.call(null,uri,params);

break;
case "post":
return adaptive_encode.call(null,uri,params);

break;
case "put":
return adaptive_encode.call(null,uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9123__$1)].join('')));

}
});
})();
/**
 * Queues a lightweight Ajax call with Google Closure's `goog.net.XhrIo` and
 *   returns nil, or the resulting `goog.net.XhrIo` instance if one was
 *   immediately available from the XHR pool:
 * 
 *     (ajax-call
 *       "http://localhost:8080/my-post-route" ; Endpoint URL
 * 
 *       {:method     :post ; ∈ #{:get :post :put}
 *        :resp-type  :text ; ∈ #{:auto :edn :json :xml :text}
 * 
 *        :params     {:username "Rich Hickey" :type "Awesome"} ; Request params
 *        :headers    {"Content-Type" "text/plain"} ; Request headers
 * 
 *        :timeout-ms 7000
 *        :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 * 
 *        :xhr-pool       my-xhr-pool ; Optional `goog.net.XhrIoPool` instance or delay
 *        :xhr-cb-fn      (fn [xhr])  ; Optional fn to call with `XhrIo` from pool when available
 *        :xhr-timeout-ms 2500        ; Optional max msecs to wait on pool for `XhrIo`
 *       }
 * 
 *       (fn ajax-callback-fn [resp-map]
 *         (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *           ;; ?status ; ∈ #{nil 200 404 ...}, non-nil iff server responded
 *           ;; ?error  ; ∈ #{nil <http-error-status-code> <exception> :timeout
 *                            :abort :http-error :exception :xhr-pool-depleted}
 *           (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_call = (function taoensso$encore$ajax_call(url,p__9125,callback_fn){
var map__9126 = p__9125;
var map__9126__$1 = cljs.core.__destructure_map.call(null,map__9126);
var opts = map__9126__$1;
var resp_type = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var xhr_pool = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"xhr-pool","xhr-pool",1499305499),taoensso.encore.default_xhr_pool_);
var timeout_ms = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var xhr_timeout_ms = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"xhr-timeout-ms","xhr-timeout-ms",89157982),(2500));
var method = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var xhr_cb_fn = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"xhr-cb-fn","xhr-cb-fn",1569050954));
var params = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__9126__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_((function (x){
var or__5025__auto__ = taoensso.truss.impl.safe_pred.call(null,cljs.core.nil_QMARK_).call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.truss.impl.safe_pred.call(null,taoensso.encore.nat_int_QMARK_).call(null,x);
}
}).call(null,timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.encore","taoensso.encore",397599675,null),5831,6,"/Users/kristikorn/projects/tic-tac-toe/resources/public/cljs/taoensso/encore.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null)], null),null,new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),timeout_ms,null,null);
}

var xhr_pool__$1 = cljs.core.force.call(null,xhr_pool);
var with_xhr = (function (xhr){
try{var timeout_ms__$1 = (function (){var or__5025__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__9150 = method;
var G__9150__$1 = (((G__9150 instanceof cljs.core.Keyword))?G__9150.fqn:null);
switch (G__9150__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
return taoensso.encore.unexpected_arg_BANG_.call(null,method,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","ajax-call","taoensso.encore/ajax-call",-11651487,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"method","method",1696235119,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null)], null));

}
})();
var vec__9142 = taoensso.encore.coerce_xhr_params.call(null,url,method,params);
var xhr_url = cljs.core.nth.call(null,vec__9142,(0),null);
var xhr__QMARK_data = cljs.core.nth.call(null,vec__9142,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys.call(null,(function (p1__9124_SHARP_){
return clojure.string.lower_case.call(null,cljs.core.name.call(null,p1__9124_SHARP_));
}),headers);
var headers__$2 = taoensso.encore.assoc_some.call(null,headers__$1,"x-requested-with",cljs.core.get.call(null,headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js.call(null,headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__1591__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
if(cljs.core.truth_(b2__1591__auto__)){
var pf = b2__1591__auto__;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,(function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__5023__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__5023__auto__;
}
})())?(loaded / total):null);
return pf.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
}));
} else {
return null;
}
})();
var G__9159_9173 = xhr;
goog.events.listenOnce(G__9159_9173,goog.net.EventType.READY,(function (_){
return xhr_pool__$1.releaseObject(xhr);
}));

goog.events.listenOnce(G__9159_9173,goog.net.EventType.COMPLETE,(function taoensso$encore$ajax_call_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__9160 = ((cljs.core.not_EQ_.call(null,_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type));
var match_QMARK_ = (function (s){
return taoensso.encore.str_contains_QMARK_.call(null,cts,s);
});
if(cljs.core.truth_(match_QMARK_.call(null,"/edn"))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/json"))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/xml"))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__9164 = resp_type__$1;
var G__9164__$1 = (((G__9164 instanceof cljs.core.Keyword))?G__9164.fqn:null);
switch (G__9164__$1) {
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
return taoensso.encore.unexpected_arg_BANG_.call(null,resp_type__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","ajax-call","taoensso.encore/ajax-call",-11651487,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"resp-type","resp-type",-1603759807,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"edn","edn",1317840885),null,new cljs.core.Keyword(null,"json","json",1279968570),null,new cljs.core.Keyword(null,"xml","xml",-1170142052),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null)], null));

}
}catch (e9163){var _e = e9163;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.call(null,vec__9160,(0),null);
var _QMARK_content_type = cljs.core.nth.call(null,vec__9160,(1),null);
var _QMARK_content = cljs.core.nth.call(null,vec__9160,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

return callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null));
}));


xhr.setTimeoutInterval((function (){var or__5025__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_url,xhr_method,xhr__QMARK_data,xhr_headers);

var b2__1591__auto___9185 = xhr_cb_fn;
if(cljs.core.truth_(b2__1591__auto___9185)){
var cb_9186 = b2__1591__auto___9185;
try{cb_9186.call(null,xhr);
}catch (e9165){var __9187 = e9165;
}} else {
}

return xhr;
}catch (e9139){var e = e9139;
xhr_pool__$1.releaseObject(xhr);

callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null));

return null;
}});
var b2__1591__auto__ = xhr_pool__$1.getObject();
if(cljs.core.truth_(b2__1591__auto__)){
var xhr = b2__1591__auto__;
return with_xhr.call(null,xhr);
} else {
if((((xhr_timeout_ms == null)) || ((xhr_timeout_ms === (0))))){
callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
} else {
var done_QMARK__ = taoensso.encore.latom.call(null,false);
setTimeout((function taoensso$encore$ajax_call_$_xhr_timeout(){
if(cljs.core.compare_and_set_BANG_.call(null,done_QMARK__,false,true)){
return callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-timeout","xhr-pool-timeout",-70669609)], null));
} else {
return null;
}
}),xhr_timeout_ms);

xhr_pool__$1.getObject((function taoensso$encore$ajax_call_$_xhr_cb(xhr){
if(cljs.core.compare_and_set_BANG_.call(null,done_QMARK__,false,true)){
return with_xhr.call(null,xhr);
} else {
return xhr_pool__$1.releaseObject(xhr);
}
}));

return null;
}
}
});
/**
 * Based on <https://goo.gl/fBqy6e>.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),s),"*","%2A");
} else {
return null;
}
});
/**
 * Stolen from <http://goo.gl/99NSR1>.
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9190 = arguments.length;
var i__5750__auto___9191 = (0);
while(true){
if((i__5750__auto___9191 < len__5749__auto___9190)){
args__5755__auto__.push((arguments[i__5750__auto___9191]));

var G__9192 = (i__5750__auto___9191 + (1));
i__5750__auto___9191 = G__9192;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__9169){
var vec__9170 = p__9169;
var encoding = cljs.core.nth.call(null,vec__9170,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else {
return null;
}
}));

(taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq9167){
var G__9168 = cljs.core.first.call(null,seq9167);
var seq9167__$1 = cljs.core.next.call(null,seq9167);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9168,seq9167__$1);
}));

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k)),"=",taoensso.encore.url_encode.call(null,(function (){var or__5025__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
})())].join('');
});
var join = (function (strs){
return clojure.string.join.call(null,"&",strs);
});
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__5503__auto__ = (function taoensso$encore$format_query_string_$_iter__9174(s__9175){
return (new cljs.core.LazySeq(null,(function (){
var s__9175__$1 = s__9175;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__9175__$1);
if(temp__5825__auto__){
var s__9175__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9175__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__9175__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__9177 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__9176 = (0);
while(true){
if((i__9176 < size__5502__auto__)){
var vec__9179 = cljs.core._nth.call(null,c__5501__auto__,i__9176);
var k = cljs.core.nth.call(null,vec__9179,(0),null);
var v = cljs.core.nth.call(null,vec__9179,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
cljs.core.chunk_append.call(null,b__9177,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__5025__auto__ = cljs.core.seq.call(null,v);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__9200 = (i__9176 + (1));
i__9176 = G__9200;
continue;
} else {
var G__9201 = (i__9176 + (1));
i__9176 = G__9201;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9177),taoensso$encore$format_query_string_$_iter__9174.call(null,cljs.core.chunk_rest.call(null,s__9175__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9177),null);
}
} else {
var vec__9182 = cljs.core.first.call(null,s__9175__$2);
var k = cljs.core.nth.call(null,vec__9182,(0),null);
var v = cljs.core.nth.call(null,vec__9182,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__5025__auto__ = cljs.core.seq.call(null,v);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__9174.call(null,cljs.core.rest.call(null,s__9175__$2)));
} else {
var G__9202 = cljs.core.rest.call(null,s__9175__$2);
s__9175__$1 = G__9202;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var b2__1591__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(b2__1591__auto__)){
var cur = b2__1591__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9206 = arguments.length;
var i__5750__auto___9207 = (0);
while(true){
if((i__5750__auto___9207 < len__5749__auto___9206)){
args__5755__auto__.push((arguments[i__5750__auto___9207]));

var G__9208 = (i__5750__auto___9207 + (1));
i__5750__auto___9207 = G__9208;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__9193){
var vec__9194 = p__9193;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__9194,(0),null);
var encoding = cljs.core.nth.call(null,vec__9194,(1),null);
if(((clojure.string.blank_QMARK_.call(null,s)) || (cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s,"="))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?cljs.core.subs.call(null,s,(1)):s);
var m = cljs.core.reduce.call(null,(function (m,param){
var b2__1591__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(b2__1591__auto__)){
var vec__9197 = b2__1591__auto__;
var k = cljs.core.nth.call(null,vec__9197,(0),null);
var v = cljs.core.nth.call(null,vec__9197,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
} else {
return m;
}
}
}));

(taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq9188){
var G__9189 = cljs.core.first.call(null,seq9188);
var seq9188__$1 = cljs.core.next.call(null,seq9188);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9189,seq9188__$1);
}));

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__9203 = clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__9203,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__9203,(1),null);
var qmap = taoensso.encore.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var b2__1591__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__1591__auto__)){
var qstr = b2__1591__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",qstr].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__9212__delegate = function (args){
throw cljs.core.ex_info.call(null,["[encore/stubfn] Attempted to call uninitialized stub fn (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),")"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stub","stub",1339145807),name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__9212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9214__i = 0, G__9214__a = new Array(arguments.length -  0);
while (G__9214__i < G__9214__a.length) {G__9214__a[G__9214__i] = arguments[G__9214__i + 0]; ++G__9214__i;}
  args = new cljs.core.IndexedSeq(G__9214__a,0,null);
} 
return G__9212__delegate.call(this,args);};
G__9212.cljs$lang$maxFixedArity = 0;
G__9212.cljs$lang$applyTo = (function (arglist__9215){
var args = cljs.core.seq(arglist__9215);
return G__9212__delegate(args);
});
G__9212.cljs$core$IFn$_invoke$arity$variadic = G__9212__delegate;
return G__9212;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(x){
var pred = cljs.core.fn_QMARK_;
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,"[encore/stubfn] Unexpected unstub type (expected symbol)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unstub","unstub",-1300593509),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null)], null));
}
});
var always_9224 = (function taoensso$encore$always(_in){
return true;
});
var never_9225 = (function taoensso$encore$never(_in){
return false;
});
var name_QMARK__9226 = (function (x){
return ((typeof x === 'string') || (taoensso.encore.named_QMARK_.call(null,x)));
});
var qname_9227 = (function (x){
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var b2__1591__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(b2__1591__auto__)){
var ns = b2__1591__auto__;
return [ns,"/",n].join('');
} else {
return n;
}
} else {
return x;
}
});
var qname_BANG__9228 = (function (x){
if(typeof x === 'string'){
return x;
} else {
if((x == null)){
return "";
} else {
var or__5025__auto__ = qname_9227.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.encore.unexpected_arg_BANG_.call(null,x,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","name-filter","taoensso.encore/name-filter",-2070485905,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"filter-input-arg","filter-input-arg",1147690060,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,"null",new cljs.core.Symbol(null,"symbol","symbol",601958831,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),"null"], null), null)], null));
}
}
}
});
var wild_str__GT__QMARK_re_pattern_9229 = (function (s){
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_.call(null,s,"*"))){
return cljs.core.re_pattern.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join(''),".","\\."),"*","(.*)"));
} else {
return null;
}
});
var compile__GT_match_fn_9230 = (function taoensso$encore$compile__GT_match_fn(spec,cache_QMARK_){
while(true){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,new cljs.core.Keyword(null,"any","any",1705907423),null], null), null).call(null,spec))){
return always_9224;
} else {
if(cljs.core.truth_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"none","none",1333468478)]).call(null,spec))){
return never_9225;
} else {
if(taoensso.encore.re_pattern_QMARK_.call(null,spec)){
return ((function (spec,cache_QMARK_,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
return cljs.core.re_find.call(null,spec,qname_BANG__9228.call(null,in$));
});
;})(spec,cache_QMARK_,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229))
} else {
if(name_QMARK__9226.call(null,spec)){
var spec__$1 = qname_9227.call(null,spec);
var b2__1591__auto__ = wild_str__GT__QMARK_re_pattern_9229.call(null,spec__$1);
if(cljs.core.truth_(b2__1591__auto__)){
var re_pattern = b2__1591__auto__;
var G__9231 = re_pattern;
var G__9232 = cache_QMARK_;
spec = G__9231;
cache_QMARK_ = G__9232;
continue;
} else {
return ((function (spec,cache_QMARK_,b2__1591__auto__,spec__$1,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
return cljs.core._EQ_.call(null,spec__$1,qname_BANG__9228.call(null,in$));
});
;})(spec,cache_QMARK_,b2__1591__auto__,spec__$1,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229))
}
} else {
if(((cljs.core.vector_QMARK_.call(null,spec)) || (cljs.core.set_QMARK_.call(null,spec)))){
if(cljs.core.truth_(cljs.core.set.call(null,spec).call(null,"*"))){
return always_9224;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,spec),(1))){
var G__9233 = cljs.core.first.call(null,spec);
var G__9234 = cache_QMARK_;
spec = G__9233;
cache_QMARK_ = G__9234;
continue;
} else {
var vec__9217 = cljs.core.reduce.call(null,((function (spec,cache_QMARK_,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229){
return (function (p__9220,spec__$1){
var vec__9221 = p__9220;
var fixed_strs = cljs.core.nth.call(null,vec__9221,(0),null);
var re_patterns = cljs.core.nth.call(null,vec__9221,(1),null);
var spec__$2 = qname_9227.call(null,spec__$1);
var b2__1591__auto__ = ((taoensso.encore.re_pattern_QMARK_.call(null,spec__$2))?spec__$2:wild_str__GT__QMARK_re_pattern_9229.call(null,spec__$2));
if(cljs.core.truth_(b2__1591__auto__)){
var re_pattern = b2__1591__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fixed_strs,cljs.core.conj.call(null,re_patterns,re_pattern)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,fixed_strs,spec__$2),re_patterns], null);
}
});})(spec,cache_QMARK_,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),spec);
var fixed_strs = cljs.core.nth.call(null,vec__9217,(0),null);
var re_patterns = cljs.core.nth.call(null,vec__9217,(1),null);
var fx_match = cljs.core.not_empty.call(null,fixed_strs);
var re_match = (function (){var b2__1591__auto__ = cljs.core.not_empty.call(null,re_patterns);
if(cljs.core.truth_(b2__1591__auto__)){
var re_patterns__$1 = b2__1591__auto__;
var f = ((function (spec,cache_QMARK_,re_patterns__$1,b2__1591__auto__,vec__9217,fixed_strs,re_patterns,fx_match,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in_str){
return taoensso.encore.rsome.call(null,((function (spec,cache_QMARK_,re_patterns__$1,b2__1591__auto__,vec__9217,fixed_strs,re_patterns,fx_match,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229){
return (function (p1__9216_SHARP_){
return cljs.core.re_find.call(null,p1__9216_SHARP_,in_str);
});})(spec,cache_QMARK_,re_patterns__$1,b2__1591__auto__,vec__9217,fixed_strs,re_patterns,fx_match,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229))
,re_patterns__$1);
});})(spec,cache_QMARK_,re_patterns__$1,b2__1591__auto__,vec__9217,fixed_strs,re_patterns,fx_match,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229))
;
if(cljs.core.truth_(cache_QMARK_)){
return taoensso.encore.fmemoize.call(null,f);
} else {
return f;
}
} else {
return null;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = fx_match;
if(cljs.core.truth_(and__5023__auto__)){
return re_match;
} else {
return and__5023__auto__;
}
})())){
return ((function (spec,cache_QMARK_,vec__9217,fixed_strs,re_patterns,fx_match,re_match,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229){
return (function taoensso$encore$compile__GT_match_fn_$_match_QMARK_(in$){
var in_str = qname_BANG__9228.call(null,in$);
var or__5025__auto__ = fx_match.call(null,in_str);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return re_match.call(null,in_str);
}
});
;})(spec,cache_QMARK_,vec__9217,fixed_strs,re_patterns,fx_match,re_match,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229))
} else {
if(cljs.core.truth_(fx_match)){
return ((function (spec,cache_QMARK_,vec__9217,fixed_strs,re_patterns,fx_match,re_match,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229){
return (function (in$){
return fx_match.call(null,qname_BANG__9228.call(null,in$));
});
;})(spec,cache_QMARK_,vec__9217,fixed_strs,re_patterns,fx_match,re_match,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229))
} else {
if(cljs.core.truth_(re_match)){
return ((function (spec,cache_QMARK_,vec__9217,fixed_strs,re_patterns,fx_match,re_match,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229){
return (function (in$){
return re_match.call(null,qname_BANG__9228.call(null,in$));
});
;})(spec,cache_QMARK_,vec__9217,fixed_strs,re_patterns,fx_match,re_match,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229))
} else {
throw cljs.core.ex_info.call(null,"[encore/cond!] No matching clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}
}
} else {
return taoensso.encore.unexpected_arg_BANG_.call(null,spec,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore","name-filter","taoensso.encore/name-filter",-2070485905,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"filter-spec","filter-spec",539212879,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"set","set",1945134081,null),"null",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Symbol(null,"<spec>","<spec>",1165019597,null),new cljs.core.Keyword(null,"deny","deny",1589338523),new cljs.core.Symbol(null,"<spec>","<spec>",1165019597,null)], null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),"null",new cljs.core.Symbol(null,"regex","regex",-1714946913,null),"null"], null), null)], null));
}
}
}
}
}
break;
}
});
/**
 * Given filter `spec`, returns a compiled (fn conform? [name]) that takes
 *  any nameable type (string, keyword, symbol).
 * 
 *  Spec may be:
 *    - A regex pattern. Will conform on match.
 *    - A str/kw/sym, in which "*"s act as wildcards. Will conform on match.
 * 
 *    - A vector or set of regex patterns or strs/kws/syms.
 *      Will conform on ANY match.
 *      If you need literal "*"s, use #"\*" regex instead.
 * 
 *    - {:allow <spec> :deny <spec>} with specs as above.
 *      Will conform iff `allow` spec matches AND `deny` spec does NOT.
 * 
 *  Resulting conform fn is useful as allowlist and/or denylist.
 *  Example inputs: namespace strings, class names, ids, etc.
 * 
 *  Spec examples:
 *    #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *    {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}},
 *    #"(foo1|foo2)\.bar".
 */
taoensso.encore.name_filter = (function taoensso$encore$name_filter(spec){
while(true){
if(cljs.core.map_QMARK_.call(null,spec)){
var cache_QMARK_ = cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"cache?","cache?",-1601953949));
var allow_spec = (function (){var or__5025__auto__ = cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437));
}
})();
var deny_spec = (function (){var or__5025__auto__ = cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"deny","deny",1589338523));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.call(null,spec,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
}
})();
var allow = (function (){var b2__1591__auto__ = allow_spec;
if(cljs.core.truth_(b2__1591__auto__)){
var as = b2__1591__auto__;
return compile__GT_match_fn_9230.call(null,as,cache_QMARK_);
} else {
return null;
}
})();
var deny = (function (){var b2__1591__auto__ = deny_spec;
if(cljs.core.truth_(b2__1591__auto__)){
var ds = b2__1591__auto__;
return compile__GT_match_fn_9230.call(null,ds,cache_QMARK_);
} else {
return null;
}
})();
if(cljs.core._EQ_.call(null,deny,always_9224)){
return never_9225;
} else {
if(cljs.core._EQ_.call(null,allow,never_9225)){
return never_9225;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = allow;
if(cljs.core.truth_(and__5023__auto__)){
return deny;
} else {
return and__5023__auto__;
}
})())){
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229,compile__GT_match_fn_9230){
return (function taoensso$encore$name_filter_$_conform_QMARK_(in$){
if(allow.call(null,in$)){
if(deny.call(null,in$)){
return false;
} else {
return true;
}
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229,compile__GT_match_fn_9230))
} else {
if(cljs.core.truth_(allow)){
if(cljs.core._EQ_.call(null,allow,always_9224)){
return always_9224;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229,compile__GT_match_fn_9230){
return (function taoensso$encore$name_filter_$_conform_QMARK_(in$){
if(allow.call(null,in$)){
return true;
} else {
return false;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229,compile__GT_match_fn_9230))
}
} else {
if(cljs.core.truth_(deny)){
if(cljs.core._EQ_.call(null,deny,never_9225)){
return always_9224;
} else {
return ((function (spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229,compile__GT_match_fn_9230){
return (function taoensso$encore$name_filter_$_conform_QMARK_(in$){
if(deny.call(null,in$)){
return false;
} else {
return true;
}
});
;})(spec,cache_QMARK_,allow_spec,deny_spec,allow,deny,always_9224,never_9225,name_QMARK__9226,qname_9227,qname_BANG__9228,wild_str__GT__QMARK_re_pattern_9229,compile__GT_match_fn_9230))
}
} else {
throw cljs.core.ex_info.call(null,"[encore/name-filter] `allow-spec` and `deny-spec` cannot both be nil",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow-spec","allow-spec",448749872),allow_spec,new cljs.core.Keyword(null,"deny-spec","deny-spec",-1074984268),deny_spec], null));
}
}
}
}
}
} else {
var G__9235 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),spec,new cljs.core.Keyword(null,"deny","deny",1589338523),null], null);
spec = G__9235;
continue;
}
break;
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

var taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_9236 = (function (_,msecs,f){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_,msecs,f);
} else {
var m__5372__auto__ = (taoensso.encore._schedule_timeout["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_,msecs,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutImpl.-schedule-timeout",_);
}
}
});
taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
return taoensso$encore$ITimeoutImpl$_schedule_timeout$dyn_9236.call(null,_,msecs,f);
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return setTimeout(f,msecs);
}));

(taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true);

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl");

(taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/DefaultTimeoutImpl");
}));

/**
 * Positional factory function for taoensso.encore/DefaultTimeoutImpl.
 */
taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.default_timeout_impl_ !== 'undefined')){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

var taoensso$encore$ITimeoutFuture$tf_state$dyn_9237 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (taoensso.encore.tf_state["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-state",_);
}
}
});
/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_state$dyn_9237.call(null,_);
}
});

var taoensso$encore$ITimeoutFuture$tf_poll$dyn_9238 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (taoensso.encore.tf_poll["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-poll",_);
}
}
});
/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_poll$dyn_9238.call(null,_);
}
});

var taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_9239 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (taoensso.encore.tf_done_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-done?",_);
}
}
});
/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_done_QMARK_$dyn_9239.call(null,_);
}
});

var taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_9240 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (taoensso.encore.tf_pending_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-pending?",_);
}
}
});
/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$dyn_9240.call(null,_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_9241 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancelled?",_);
}
}
});
/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$dyn_9241.call(null,_);
}
});

var taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_9244 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (taoensso.encore.tf_cancel_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancel!",_);
}
}
});
/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
return taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$dyn_9244.call(null,_);
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.result__);
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (!(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352))));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279));
}));

(taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_.call(null,self__.result__,new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352),new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279));
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_done_QMARK_.call(null,t__$1);
}));

(taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_poll.call(null,t__$1);
}));

(taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
}));

(taoensso.encore.TimeoutFuture.cljs$lang$type = true);

(taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture");

(taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"taoensso.encore/TimeoutFuture");
}));

/**
 * Positional factory function for taoensso.encore/TimeoutFuture.
 */
taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__9243 = arguments.length;
switch (G__9243) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.call(null,taoensso.encore.default_timeout_impl_,msecs,f);
}));

(taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$.call(null,msecs);
var udt = (taoensso.encore.now_udt.call(null) + msecs__$1);
var result__ = taoensso.encore.latom.call(null,new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352));
var cas_f = (function (){
var result_ = (new cljs.core.Delay((function (){
return f.call(null);
}),null));
if(cljs.core.compare_and_set_BANG_.call(null,result__,new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352),result_)){
return cljs.core.deref.call(null,result_);
} else {
return null;
}
});
var impl_9246 = cljs.core.force.call(null,impl_);
taoensso.encore._schedule_timeout.call(null,impl_9246,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
}));

(taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3);

/**
 * Prefer `latom`.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v1 = f.call(null,cljs.core.get.call(null,m0,k));
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if(cljs.core.compare_and_set_BANG_.call(null,atom_,m0,m1)){
return v1;
} else {
continue;
}
break;
}
});

taoensso.encore.regular_num_QMARK_ = taoensso.encore.finite_num_QMARK_;

taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.memoize_STAR_ = taoensso.encore.memoize;

taoensso.encore.memoize_ = taoensso.encore.memoize;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.idx_fn = taoensso.encore.counter;

taoensso.encore.vec_STAR_ = taoensso.encore.ensure_vec;

taoensso.encore.set_STAR_ = taoensso.encore.ensure_set;

taoensso.encore.have_transducers_QMARK_ = true;

taoensso.encore.pval_QMARK_ = taoensso.encore.pnum_QMARK_;

taoensso.encore.as__QMARK_pval = taoensso.encore.as__QMARK_pnum;

taoensso.encore.as_pval = taoensso.encore.as_pnum;

/**
 * Prefer `get-substr-by-idx`.
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__9254 = arguments.length;
switch (G__9254) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
}));

(taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
}));

(taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3);


/**
 * Prefer `get-substr-by-len`.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__9256 = arguments.length;
switch (G__9256) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start));
}));

(taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start,length));
}));

(taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3);


taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

var nolist_QMARK__9363 = (function (p1__9247_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]),p1__9247_SHARP_);
});
taoensso.encore.compile_ns_filter = (function taoensso$encore$compile_ns_filter(var_args){
var G__9258 = arguments.length;
switch (G__9258) {
case 1:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$1 = (function (ns_pattern){
return taoensso.encore.compile_ns_filter.call(null,ns_pattern,null);
}));

(taoensso.encore.compile_ns_filter.cljs$core$IFn$_invoke$arity$2 = (function (whitelist,blacklist){
if(((nolist_QMARK__9363.call(null,whitelist)) && (nolist_QMARK__9363.call(null,blacklist)))){
return (function (_){
return true;
});
} else {
return taoensso.encore.name_filter.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),whitelist,new cljs.core.Keyword(null,"deny","deny",1589338523),blacklist], null));
}
}));

(taoensso.encore.compile_ns_filter.cljs$lang$maxFixedArity = 2);


taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9365 = arguments.length;
var i__5750__auto___9366 = (0);
while(true){
if((i__5750__auto___9366 < len__5749__auto___9365)){
args__5755__auto__.push((arguments[i__5750__auto___9366]));

var G__9367 = (i__5750__auto___9366 + (1));
i__5750__auto___9366 = G__9367;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__9261){
var vec__9262 = p__9261;
var type = cljs.core.nth.call(null,vec__9262,(0),null);
var nplaces = cljs.core.nth.call(null,vec__9262,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__5025__auto__ = type;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
}));

(taoensso.encore.round.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.round.cljs$lang$applyTo = (function (seq9259){
var G__9260 = cljs.core.first.call(null,seq9259);
var seq9259__$1 = cljs.core.next.call(null,seq9259);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9260,seq9259__$1);
}));


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__9266 = arguments.length;
switch (G__9266) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.call(null,x,y);
}));

(taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.call(null,signf,x,y);
}));

(taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3);


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9369 = arguments.length;
var i__5750__auto___9370 = (0);
while(true){
if((i__5750__auto___9370 < len__5749__auto___9369)){
args__5755__auto__.push((arguments[i__5750__auto___9370]));

var G__9371 = (i__5750__auto___9370 + (1));
i__5750__auto___9370 = G__9371;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once.call(null,sep,coll);
}));

(taoensso.encore.join_once.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.join_once.cljs$lang$applyTo = (function (seq9267){
var G__9268 = cljs.core.first.call(null,seq9267);
var seq9267__$1 = cljs.core.next.call(null,seq9267);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9268,seq9267__$1);
}));


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.ensure_set.call(null,x),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});

taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9372 = arguments.length;
var i__5750__auto___9373 = (0);
while(true){
if((i__5750__auto___9373 < len__5749__auto___9372)){
args__5755__auto__.push((arguments[i__5750__auto___9373]));

var G__9374 = (i__5750__auto___9373 + (1));
i__5750__auto___9373 = G__9374;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__9271){
var vec__9272 = p__9271;
var nattempt = cljs.core.nth.call(null,vec__9272,(0),null);
return setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__5025__auto__ = nattempt;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})()));
}));

(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq9269){
var G__9270 = cljs.core.first.call(null,seq9269);
var seq9269__$1 = cljs.core.next.call(null,seq9269);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9270,seq9269__$1);
}));


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined')){
} else {
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9375 = arguments.length;
var i__5750__auto___9376 = (0);
while(true){
if((i__5750__auto___9376 < len__5749__auto___9375)){
args__5755__auto__.push((arguments[i__5750__auto___9376]));

var G__9377 = (i__5750__auto___9376 + (1));
i__5750__auto___9376 = G__9377;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.tracef.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.tracef.cljs$lang$applyTo = (function (seq9275){
var G__9276 = cljs.core.first.call(null,seq9275);
var seq9275__$1 = cljs.core.next.call(null,seq9275);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9276,seq9275__$1);
}));


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9378 = arguments.length;
var i__5750__auto___9379 = (0);
while(true){
if((i__5750__auto___9379 < len__5749__auto___9378)){
args__5755__auto__.push((arguments[i__5750__auto___9379]));

var G__9380 = (i__5750__auto___9379 + (1));
i__5750__auto___9379 = G__9380;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.debugf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.debugf.cljs$lang$applyTo = (function (seq9277){
var G__9278 = cljs.core.first.call(null,seq9277);
var seq9277__$1 = cljs.core.next.call(null,seq9277);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9278,seq9277__$1);
}));


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9381 = arguments.length;
var i__5750__auto___9382 = (0);
while(true){
if((i__5750__auto___9382 < len__5749__auto___9381)){
args__5755__auto__.push((arguments[i__5750__auto___9382]));

var G__9383 = (i__5750__auto___9382 + (1));
i__5750__auto___9382 = G__9383;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.infof.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.infof.cljs$lang$applyTo = (function (seq9279){
var G__9280 = cljs.core.first.call(null,seq9279);
var seq9279__$1 = cljs.core.next.call(null,seq9279);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9280,seq9279__$1);
}));


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9384 = arguments.length;
var i__5750__auto___9385 = (0);
while(true){
if((i__5750__auto___9385 < len__5749__auto___9384)){
args__5755__auto__.push((arguments[i__5750__auto___9385]));

var G__9386 = (i__5750__auto___9385 + (1));
i__5750__auto___9385 = G__9386;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.warnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.warnf.cljs$lang$applyTo = (function (seq9281){
var G__9282 = cljs.core.first.call(null,seq9281);
var seq9281__$1 = cljs.core.next.call(null,seq9281);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9282,seq9281__$1);
}));


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9387 = arguments.length;
var i__5750__auto___9388 = (0);
while(true){
if((i__5750__auto___9388 < len__5749__auto___9387)){
args__5755__auto__.push((arguments[i__5750__auto___9388]));

var G__9389 = (i__5750__auto___9388 + (1));
i__5750__auto___9388 = G__9389;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.errorf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.errorf.cljs$lang$applyTo = (function (seq9283){
var G__9284 = cljs.core.first.call(null,seq9283);
var seq9283__$1 = cljs.core.next.call(null,seq9283);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9284,seq9283__$1);
}));


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9390 = arguments.length;
var i__5750__auto___9391 = (0);
while(true){
if((i__5750__auto___9391 < len__5749__auto___9390)){
args__5755__auto__.push((arguments[i__5750__auto___9391]));

var G__9392 = (i__5750__auto___9391 + (1));
i__5750__auto___9391 = G__9392;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
}));

(taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq9285){
var G__9286 = cljs.core.first.call(null,seq9285);
var seq9285__$1 = cljs.core.next.call(null,seq9285);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9286,seq9285__$1);
}));


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9393 = arguments.length;
var i__5750__auto___9394 = (0);
while(true){
if((i__5750__auto___9394 < len__5749__auto___9393)){
args__5755__auto__.push((arguments[i__5750__auto___9394]));

var G__9395 = (i__5750__auto___9394 + (1));
i__5750__auto___9394 = G__9395;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
}));

(taoensso.encore.reportf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.reportf.cljs$lang$applyTo = (function (seq9287){
var G__9288 = cljs.core.first.call(null,seq9287);
var seq9287__$1 = cljs.core.next.call(null,seq9287);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9288,seq9287__$1);
}));


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9396 = arguments.length;
var i__5750__auto___9397 = (0);
while(true){
if((i__5750__auto___9397 < len__5749__auto___9396)){
args__5755__auto__.push((arguments[i__5750__auto___9397]));

var G__9398 = (i__5750__auto___9397 + (1));
i__5750__auto___9397 = G__9398;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__9291){
var vec__9292 = p__9291;
var _QMARK_comparator = cljs.core.nth.call(null,vec__9292,(0),null);
var comparator = (function (){var or__5025__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,(function (p1__9249_SHARP_,p2__9250_SHARP_){
if((comparator.call(null,p1__9249_SHARP_,p2__9250_SHARP_) > (0))){
return p2__9250_SHARP_;
} else {
return p1__9249_SHARP_;
}
}),coll);
}));

(taoensso.encore.greatest.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.greatest.cljs$lang$applyTo = (function (seq9289){
var G__9290 = cljs.core.first.call(null,seq9289);
var seq9289__$1 = cljs.core.next.call(null,seq9289);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9290,seq9289__$1);
}));


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9399 = arguments.length;
var i__5750__auto___9400 = (0);
while(true){
if((i__5750__auto___9400 < len__5749__auto___9399)){
args__5755__auto__.push((arguments[i__5750__auto___9400]));

var G__9401 = (i__5750__auto___9400 + (1));
i__5750__auto___9400 = G__9401;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__9297){
var vec__9298 = p__9297;
var _QMARK_comparator = cljs.core.nth.call(null,vec__9298,(0),null);
var comparator = (function (){var or__5025__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,(function (p1__9251_SHARP_,p2__9252_SHARP_){
if((comparator.call(null,p1__9251_SHARP_,p2__9252_SHARP_) < (0))){
return p2__9252_SHARP_;
} else {
return p1__9251_SHARP_;
}
}),coll);
}));

(taoensso.encore.least.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.least.cljs$lang$applyTo = (function (seq9295){
var G__9296 = cljs.core.first.call(null,seq9295);
var seq9295__$1 = cljs.core.next.call(null,seq9295);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9296,seq9295__$1);
}));


/**
 * Ref. <http://goo.gl/0GzRuz>
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__5025__auto__ = x;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Prefer `xdistinct`.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__9301,seen__$1){
while(true){
var vec__9302 = p__9301;
var v = cljs.core.nth.call(null,vec__9302,(0),null);
var xs__$1 = vec__9302;
var b2__1591__auto__ = cljs.core.seq.call(null,xs__$1);
if(b2__1591__auto__){
var s = b2__1591__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__9402 = cljs.core.rest.call(null,s);
var G__9403 = seen__$1;
p__9301 = G__9402;
seen__$1 = G__9403;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Prefer `xdistinct`.
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__9306 = arguments.length;
switch (G__9306) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
}));

(taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__9307,in$){
var vec__9308 = p__9307;
var v = cljs.core.nth.call(null,vec__9308,(0),null);
var seen = cljs.core.nth.call(null,vec__9308,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
}));

(taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2);


taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){

if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):((cljs.core.keyword_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?(function (k,_){
return cljs.core.keyword.call(null,k);
}):kf));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9405 = arguments.length;
var i__5750__auto___9406 = (0);
while(true){
if((i__5750__auto___9406 < len__5749__auto___9405)){
args__5755__auto__.push((arguments[i__5750__auto___9406]));

var G__9407 = (i__5750__auto___9406 + (1));
i__5750__auto___9406 = G__9407;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__9313){
var vec__9314 = p__9313;
var kf = cljs.core.nth.call(null,vec__9314,(0),null);
var vf = cljs.core.nth.call(null,vec__9314,(1),null);

if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?(function (k,_){
return k;
}):((cljs.core.keyword_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?(function (k,_){
return cljs.core.keyword.call(null,k);
}):kf));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,(function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
}));

(taoensso.encore.as_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.as_map.cljs$lang$applyTo = (function (seq9311){
var G__9312 = cljs.core.first.call(null,seq9311);
var seq9311__$1 = cljs.core.next.call(null,seq9311);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9312,seq9311__$1);
}));


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n)));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9408 = arguments.length;
var i__5750__auto___9409 = (0);
while(true){
if((i__5750__auto___9409 < len__5749__auto___9408)){
args__5755__auto__.push((arguments[i__5750__auto___9409]));

var G__9410 = (i__5750__auto___9409 + (1));
i__5750__auto___9409 = G__9410;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref.call(null,taoensso.encore._swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
} else {
return cljs.core.apply.call(null,f,args);
}
}));

(taoensso.encore.memoized.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.memoized.cljs$lang$applyTo = (function (seq9317){
var G__9318 = cljs.core.first.call(null,seq9317);
var seq9317__$1 = cljs.core.next.call(null,seq9317);
var G__9319 = cljs.core.first.call(null,seq9317__$1);
var seq9317__$2 = cljs.core.next.call(null,seq9317__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9318,G__9319,seq9317__$2);
}));


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__5113__auto__ = signed_idx;
var y__5114__auto__ = max_idx;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
} else {
var x__5110__auto__ = (0);
var y__5111__auto__ = (signed_idx + max_idx);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9411 = arguments.length;
var i__5750__auto___9412 = (0);
while(true){
if((i__5750__auto___9412 < len__5749__auto___9411)){
args__5755__auto__.push((arguments[i__5750__auto___9412]));

var G__9413 = (i__5750__auto___9412 + (1));
i__5750__auto___9412 = G__9413;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__9323){
var map__9324 = p__9323;
var map__9324__$1 = cljs.core.__destructure_map.call(null,map__9324);
var max_len = cljs.core.get.call(null,map__9324__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__9324__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__2347__auto__ = (start_idx_STAR_ + max_len);
var n2__2348__auto__ = xlen;
if((n1__2347__auto__ > n2__2348__auto__)){
return n2__2348__auto__;
} else {
return n1__2347__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
}));

(taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq9320){
var G__9321 = cljs.core.first.call(null,seq9320);
var seq9320__$1 = cljs.core.next.call(null,seq9320);
var G__9322 = cljs.core.first.call(null,seq9320__$1);
var seq9320__$2 = cljs.core.next.call(null,seq9320__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9321,G__9322,seq9320__$2);
}));


/**
 * Prefer `get-substr-by-idx` or `get-substr-by-len`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9414 = arguments.length;
var i__5750__auto___9415 = (0);
while(true){
if((i__5750__auto___9415 < len__5749__auto___9414)){
args__5755__auto__.push((arguments[i__5750__auto___9415]));

var G__9416 = (i__5750__auto___9415 + (1));
i__5750__auto___9415 = G__9416;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__9328){
var vec__9329 = p__9328;
var _QMARK_max_len = cljs.core.nth.call(null,vec__9329,(0),null);
var vec__9332 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__9332,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__9332,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.substr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.substr.cljs$lang$applyTo = (function (seq9325){
var G__9326 = cljs.core.first.call(null,seq9325);
var seq9325__$1 = cljs.core.next.call(null,seq9325);
var G__9327 = cljs.core.first.call(null,seq9325__$1);
var seq9325__$2 = cljs.core.next.call(null,seq9325__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9326,G__9327,seq9325__$2);
}));



/**
 * Prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9417 = arguments.length;
var i__5750__auto___9418 = (0);
while(true){
if((i__5750__auto___9418 < len__5749__auto___9417)){
args__5755__auto__.push((arguments[i__5750__auto___9418]));

var G__9419 = (i__5750__auto___9418 + (1));
i__5750__auto___9418 = G__9419;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__9338){
var vec__9339 = p__9338;
var _QMARK_max_len = cljs.core.nth.call(null,vec__9339,(0),null);
var vec__9342 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__9342,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__9342,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
}));

(taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq9335){
var G__9336 = cljs.core.first.call(null,seq9335);
var seq9335__$1 = cljs.core.next.call(null,seq9335);
var G__9337 = cljs.core.first.call(null,seq9335__$1);
var seq9335__$2 = cljs.core.next.call(null,seq9335__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9336,G__9337,seq9335__$2);
}));


taoensso.encore.sentinel = ({});

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(taoensso.encore.sentinel_QMARK_.call(null,x)){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(taoensso.encore.singleton_QMARK_.call(null,coll)){
var vec__9347 = coll;
var c1 = cljs.core.nth.call(null,vec__9347,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(((ks__$1) && (vs__$1))){
var G__9420 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__9421 = cljs.core.next.call(null,ks__$1);
var G__9422 = cljs.core.next.call(null,vs__$1);
m = G__9420;
ks__$1 = G__9421;
vs__$1 = G__9422;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9423 = arguments.length;
var i__5750__auto___9424 = (0);
while(true){
if((i__5750__auto___9424 < len__5749__auto___9423)){
args__5755__auto__.push((arguments[i__5750__auto___9424]));

var G__9425 = (i__5750__auto___9424 + (1));
i__5750__auto___9424 = G__9425;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.call(null,(function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__9352 = _QMARK_op;
var type = cljs.core.nth.call(null,vec__9352,(0),null);
var ks = cljs.core.nth.call(null,vec__9352,(1),null);
var valf = cljs.core.nth.call(null,vec__9352,(2),null);
var f = ((cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"reset","reset",-800929946)))?(function (_){
return valf;
}):valf);
return taoensso.encore.update_in.call(null,m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
}));

(taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq9350){
var G__9351 = cljs.core.first.call(null,seq9350);
var seq9350__$1 = cljs.core.next.call(null,seq9350);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9351,seq9350__$1);
}));


var return_9426 = (function (m0,v0,m1,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Prefer `swap-in!` with `swapped` return value.
 */
taoensso.encore.swap_in_BANG__STAR_ = (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__9356 = arguments.length;
switch (G__9356) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_9426,atom_,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_9426,atom_,ks,null,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_9426,atom_,ks,not_found,f);
}));

(taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4);


/**
 * Prefer `swap-val!` with `swapped` return value.
 */
taoensso.encore.swap_val_BANG__STAR_ = (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__9358 = arguments.length;
switch (G__9358) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_9426,atom_,k,null,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_9426,atom_,k,not_found,f);
}));

(taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4);


taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

/**
 * Renamed to `name-filter`.
 */
taoensso.encore.compile_str_filter = taoensso.encore.name_filter;

/**
 * Prefer `identical-kw?` macro.
 */
taoensso.encore.kw_identical_QMARK_ = (function taoensso$encore$kw_identical_QMARK_(x,y){
return cljs.core.keyword_identical_QMARK_.call(null,x,y);
});

/**
 * Prefer `newline`.
 */
taoensso.encore.system_newline = "\n";

/**
 * Prefer `unexpected-arg!`
 */
taoensso.encore._unexpected_arg_BANG_ = (function taoensso$encore$_unexpected_arg_BANG_(var_args){
var G__9360 = arguments.length;
switch (G__9360) {
case 1:
return taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return taoensso.encore.unexpected_arg_BANG_.call(null,arg,null);
}));

(taoensso.encore._unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (arg,details){
return taoensso.encore.unexpected_arg_BANG_.call(null,arg,details);
}));

(taoensso.encore._unexpected_arg_BANG_.cljs$lang$maxFixedArity = 2);


/**
 * Prefer `matching-error`.
 */
taoensso.encore._matching_error = taoensso.encore.matching_error;

/**
 * Prefer `rate-limiter*`.
 */
taoensso.encore.limiter_STAR_ = taoensso.encore.rate_limiter_STAR_;

/**
 * Prefer `rate-limiter`.
 */
taoensso.encore.limiter = taoensso.encore.rate_limiter;

/**
 * Prefer `ajax-call`.
 */
taoensso.encore.ajax_lite = taoensso.encore.ajax_call;
taoensso.encore.js__QMARK_win = taoensso.encore.js__QMARK_window;

//# sourceMappingURL=encore.js.map
