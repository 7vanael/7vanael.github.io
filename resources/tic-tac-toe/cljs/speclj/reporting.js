// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.sum_by = (function speclj$reporting$sum_by(f,coll){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,coll));
});
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return speclj.reporting.sum_by.call(null,(function (p1__13611_SHARP_){
return p1__13611_SHARP_.seconds;
}),results);
});
speclj.reporting.tally_assertions = (function speclj$reporting$tally_assertions(results){
return speclj.reporting.sum_by.call(null,(function (p1__13612_SHARP_){
return p1__13612_SHARP_.assertions;
}),results);
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_13620 = (function (reporter,message){
var x__5373__auto__ = (((reporter == null))?null:reporter);
var m__5374__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,reporter,message);
} else {
var m__5372__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_13620.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_13621 = (function (this$,description){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,description);
} else {
var m__5372__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_13621.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_13626 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_13626.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_13631 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_13631.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_13636 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_13636.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_13637 = (function (this$,results){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,results);
} else {
var m__5372__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_13637.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_13642 = (function (this$,exception){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,exception);
} else {
var m__5372__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_13642.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,_reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__13622 = cljs.core.seq.call(null,reporters);
var chunk__13623 = null;
var count__13624 = (0);
var i__13625 = (0);
while(true){
if((i__13625 < count__13624)){
var reporter = cljs.core._nth.call(null,chunk__13623,i__13625);
speclj.reporting.report_pass.call(null,reporter,result);


var G__13655 = seq__13622;
var G__13656 = chunk__13623;
var G__13657 = count__13624;
var G__13658 = (i__13625 + (1));
seq__13622 = G__13655;
chunk__13623 = G__13656;
count__13624 = G__13657;
i__13625 = G__13658;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13622);
if(temp__5825__auto__){
var seq__13622__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13622__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13622__$1);
var G__13659 = cljs.core.chunk_rest.call(null,seq__13622__$1);
var G__13660 = c__5548__auto__;
var G__13661 = cljs.core.count.call(null,c__5548__auto__);
var G__13662 = (0);
seq__13622 = G__13659;
chunk__13623 = G__13660;
count__13624 = G__13661;
i__13625 = G__13662;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__13622__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__13663 = cljs.core.next.call(null,seq__13622__$1);
var G__13664 = null;
var G__13665 = (0);
var G__13666 = (0);
seq__13622 = G__13663;
chunk__13623 = G__13664;
count__13624 = G__13665;
i__13625 = G__13666;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__13627 = cljs.core.seq.call(null,reporters);
var chunk__13628 = null;
var count__13629 = (0);
var i__13630 = (0);
while(true){
if((i__13630 < count__13629)){
var reporter = cljs.core._nth.call(null,chunk__13628,i__13630);
speclj.reporting.report_fail.call(null,reporter,result);


var G__13667 = seq__13627;
var G__13668 = chunk__13628;
var G__13669 = count__13629;
var G__13670 = (i__13630 + (1));
seq__13627 = G__13667;
chunk__13628 = G__13668;
count__13629 = G__13669;
i__13630 = G__13670;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13627);
if(temp__5825__auto__){
var seq__13627__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13627__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13627__$1);
var G__13671 = cljs.core.chunk_rest.call(null,seq__13627__$1);
var G__13672 = c__5548__auto__;
var G__13673 = cljs.core.count.call(null,c__5548__auto__);
var G__13674 = (0);
seq__13627 = G__13671;
chunk__13628 = G__13672;
count__13629 = G__13673;
i__13630 = G__13674;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__13627__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__13675 = cljs.core.next.call(null,seq__13627__$1);
var G__13676 = null;
var G__13677 = (0);
var G__13678 = (0);
seq__13627 = G__13675;
chunk__13628 = G__13676;
count__13629 = G__13677;
i__13630 = G__13678;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__13638 = cljs.core.seq.call(null,reporters);
var chunk__13639 = null;
var count__13640 = (0);
var i__13641 = (0);
while(true){
if((i__13641 < count__13640)){
var reporter = cljs.core._nth.call(null,chunk__13639,i__13641);
speclj.reporting.report_pending.call(null,reporter,result);


var G__13687 = seq__13638;
var G__13688 = chunk__13639;
var G__13689 = count__13640;
var G__13690 = (i__13641 + (1));
seq__13638 = G__13687;
chunk__13639 = G__13688;
count__13640 = G__13689;
i__13641 = G__13690;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13638);
if(temp__5825__auto__){
var seq__13638__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13638__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13638__$1);
var G__13695 = cljs.core.chunk_rest.call(null,seq__13638__$1);
var G__13696 = c__5548__auto__;
var G__13697 = cljs.core.count.call(null,c__5548__auto__);
var G__13698 = (0);
seq__13638 = G__13695;
chunk__13639 = G__13696;
count__13640 = G__13697;
i__13641 = G__13698;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__13638__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__13699 = cljs.core.next.call(null,seq__13638__$1);
var G__13700 = null;
var G__13701 = (0);
var G__13702 = (0);
seq__13638 = G__13699;
chunk__13639 = G__13700;
count__13640 = G__13701;
i__13641 = G__13702;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__13647 = cljs.core.seq.call(null,reporters);
var chunk__13648 = null;
var count__13649 = (0);
var i__13650 = (0);
while(true){
if((i__13650 < count__13649)){
var reporter = cljs.core._nth.call(null,chunk__13648,i__13650);
speclj.reporting.report_error.call(null,reporter,result);


var G__13703 = seq__13647;
var G__13704 = chunk__13648;
var G__13705 = count__13649;
var G__13706 = (i__13650 + (1));
seq__13647 = G__13703;
chunk__13648 = G__13704;
count__13649 = G__13705;
i__13650 = G__13706;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13647);
if(temp__5825__auto__){
var seq__13647__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13647__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13647__$1);
var G__13711 = cljs.core.chunk_rest.call(null,seq__13647__$1);
var G__13712 = c__5548__auto__;
var G__13713 = cljs.core.count.call(null,c__5548__auto__);
var G__13714 = (0);
seq__13647 = G__13711;
chunk__13648 = G__13712;
count__13649 = G__13713;
i__13650 = G__13714;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__13647__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__13715 = cljs.core.next.call(null,seq__13647__$1);
var G__13716 = null;
var G__13717 = (0);
var G__13718 = (0);
seq__13647 = G__13715;
chunk__13648 = G__13716;
count__13649 = G__13717;
i__13650 = G__13718;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code,text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
speclj.reporting.red = (function speclj$reporting$red(text){
return speclj.reporting.stylizer.call(null,"31",text);
});
speclj.reporting.green = (function speclj$reporting$green(text){
return speclj.reporting.stylizer.call(null,"32",text);
});
speclj.reporting.yellow = (function speclj$reporting$yellow(text){
return speclj.reporting.stylizer.call(null,"33",text);
});
speclj.reporting.grey = (function speclj$reporting$grey(text){
return speclj.reporting.stylizer.call(null,"90",text);
});
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_13731 = speclj.platform.stack_trace.call(null,exception);
var elides_13732 = (0);
while(true){
if(cljs.core.seq.call(null,levels_13731)){
var level_13733 = cljs.core.first.call(null,levels_13731);
if(speclj.platform.elide_level_QMARK_.call(null,level_13733)){
var G__13734 = cljs.core.rest.call(null,levels_13731);
var G__13735 = (elides_13732 + (1));
levels_13731 = G__13734;
elides_13732 = G__13735;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_13732);

cljs.core.println.call(null,"\tat",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_13733));

var G__13736 = cljs.core.rest.call(null,levels_13731);
var G__13737 = (0);
levels_13731 = G__13736;
elides_13732 = G__13737;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_13732);
}
break;
}

var temp__5825__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,speclj.platform.error_str.call(null,exception));
} else {
cljs.core.println.call(null,speclj.platform.error_str.call(null,exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13707_13743 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13708_13744 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13709_13745 = true;
var _STAR_print_fn_STAR__temp_val__13710_13746 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13709_13745);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13710_13746);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13708_13744);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13707_13743);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13773 = arguments.length;
var i__5750__auto___13774 = (0);
while(true){
if((i__5750__auto___13774 < len__5749__auto___13773)){
args__5755__auto__.push((arguments[i__5750__auto___13774]));

var G__13775 = (i__5750__auto___13774 + (1));
i__5750__auto___13774 = G__13775;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__13742_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13742_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq13747){
var G__13748 = cljs.core.first.call(null,seq13747);
var seq13747__$1 = cljs.core.next.call(null,seq13747);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13748,seq13747__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13782 = arguments.length;
var i__5750__auto___13784 = (0);
while(true){
if((i__5750__auto___13784 < len__5749__auto___13782)){
args__5755__auto__.push((arguments[i__5750__auto___13784]));

var G__13789 = (i__5750__auto___13784 + (1));
i__5750__auto___13784 = G__13789;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq13771){
var G__13772 = cljs.core.first.call(null,seq13771);
var seq13771__$1 = cljs.core.next.call(null,seq13771);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13772,seq13771__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__13776 = cljs.core.seq.call(null,reporters);
var chunk__13777 = null;
var count__13778 = (0);
var i__13779 = (0);
while(true){
if((i__13779 < count__13778)){
var reporter = cljs.core._nth.call(null,chunk__13777,i__13779);
speclj.reporting.report_description.call(null,reporter,description);


var G__13800 = seq__13776;
var G__13801 = chunk__13777;
var G__13802 = count__13778;
var G__13803 = (i__13779 + (1));
seq__13776 = G__13800;
chunk__13777 = G__13801;
count__13778 = G__13802;
i__13779 = G__13803;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13776);
if(temp__5825__auto__){
var seq__13776__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13776__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13776__$1);
var G__13805 = cljs.core.chunk_rest.call(null,seq__13776__$1);
var G__13806 = c__5548__auto__;
var G__13807 = cljs.core.count.call(null,c__5548__auto__);
var G__13808 = (0);
seq__13776 = G__13805;
chunk__13777 = G__13806;
count__13778 = G__13807;
i__13779 = G__13808;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__13776__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__13809 = cljs.core.next.call(null,seq__13776__$1);
var G__13810 = null;
var G__13811 = (0);
var G__13812 = (0);
seq__13776 = G__13809;
chunk__13777 = G__13810;
count__13778 = G__13811;
i__13779 = G__13812;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__13794 = cljs.core.seq.call(null,reporters);
var chunk__13795 = null;
var count__13796 = (0);
var i__13797 = (0);
while(true){
if((i__13797 < count__13796)){
var reporter = cljs.core._nth.call(null,chunk__13795,i__13797);
speclj.reporting.report_runs.call(null,reporter,results);


var G__13819 = seq__13794;
var G__13820 = chunk__13795;
var G__13821 = count__13796;
var G__13822 = (i__13797 + (1));
seq__13794 = G__13819;
chunk__13795 = G__13820;
count__13796 = G__13821;
i__13797 = G__13822;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13794);
if(temp__5825__auto__){
var seq__13794__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13794__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13794__$1);
var G__13825 = cljs.core.chunk_rest.call(null,seq__13794__$1);
var G__13826 = c__5548__auto__;
var G__13827 = cljs.core.count.call(null,c__5548__auto__);
var G__13828 = (0);
seq__13794 = G__13825;
chunk__13795 = G__13826;
count__13796 = G__13827;
i__13797 = G__13828;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__13794__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__13830 = cljs.core.next.call(null,seq__13794__$1);
var G__13831 = null;
var G__13832 = (0);
var G__13833 = (0);
seq__13794 = G__13830;
chunk__13795 = G__13831;
count__13796 = G__13832;
i__13797 = G__13833;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__13815 = cljs.core.seq.call(null,reporters);
var chunk__13816 = null;
var count__13817 = (0);
var i__13818 = (0);
while(true){
if((i__13818 < count__13817)){
var reporter = cljs.core._nth.call(null,chunk__13816,i__13818);
speclj.reporting.report_message.call(null,reporter,message);


var G__13841 = seq__13815;
var G__13842 = chunk__13816;
var G__13843 = count__13817;
var G__13844 = (i__13818 + (1));
seq__13815 = G__13841;
chunk__13816 = G__13842;
count__13817 = G__13843;
i__13818 = G__13844;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13815);
if(temp__5825__auto__){
var seq__13815__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13815__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13815__$1);
var G__13845 = cljs.core.chunk_rest.call(null,seq__13815__$1);
var G__13846 = c__5548__auto__;
var G__13847 = cljs.core.count.call(null,c__5548__auto__);
var G__13848 = (0);
seq__13815 = G__13845;
chunk__13816 = G__13846;
count__13817 = G__13847;
i__13818 = G__13848;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__13815__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__13853 = cljs.core.next.call(null,seq__13815__$1);
var G__13854 = null;
var G__13855 = (0);
var G__13856 = (0);
seq__13815 = G__13853;
chunk__13816 = G__13854;
count__13817 = G__13855;
i__13818 = G__13856;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__13837 = cljs.core.seq.call(null,reporters);
var chunk__13838 = null;
var count__13839 = (0);
var i__13840 = (0);
while(true){
if((i__13840 < count__13839)){
var reporter = cljs.core._nth.call(null,chunk__13838,i__13840);
speclj.reporting.report_error.call(null,reporter,exception);


var G__13861 = seq__13837;
var G__13862 = chunk__13838;
var G__13863 = count__13839;
var G__13864 = (i__13840 + (1));
seq__13837 = G__13861;
chunk__13838 = G__13862;
count__13839 = G__13863;
i__13840 = G__13864;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__13837);
if(temp__5825__auto__){
var seq__13837__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13837__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__13837__$1);
var G__13865 = cljs.core.chunk_rest.call(null,seq__13837__$1);
var G__13866 = c__5548__auto__;
var G__13867 = cljs.core.count.call(null,c__5548__auto__);
var G__13868 = (0);
seq__13837 = G__13865;
chunk__13838 = G__13866;
count__13839 = G__13867;
i__13840 = G__13868;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__13837__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__13870 = cljs.core.next.call(null,seq__13837__$1);
var G__13871 = null;
var G__13872 = (0);
var G__13873 = (0);
seq__13837 = G__13870;
chunk__13838 = G__13871;
count__13839 = G__13872;
i__13840 = G__13873;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
