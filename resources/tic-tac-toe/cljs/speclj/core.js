// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.core');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.error');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.stub');
goog.require('speclj.tags');
goog.require('speclj.report.documentation');
goog.require('speclj.report.progress');
goog.require('speclj.report.silent');
goog.require('speclj.run.standard');
var ret__5804__auto___15319 = (function (){
speclj.core._new_exception = (function speclj$core$_new_exception(var_args){
var G__15304 = arguments.length;
switch (G__15304) {
case 2:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core._new_exception.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"Exception.","Exception.",-981206655,null),null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"Exception.","Exception.",-981206655,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,message,cause){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"Exception.","Exception.",-981206655,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,cause,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_exception.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core._new_exception.cljs$lang$macro = true);

var ret__5804__auto___15341 = (function (){
speclj.core._new_throwable = (function speclj$core$_new_throwable(var_args){
var G__15325 = arguments.length;
switch (G__15325) {
case 2:
return speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Object.","js/Object.",-1306928840,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Throwable.","java.lang.Throwable.",1508443242,null),null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_throwable.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Object.","js/Object.",-1306928840,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"java.lang.Throwable.","java.lang.Throwable.",1508443242,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core._new_throwable.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core._new_throwable.cljs$lang$macro = true);

var ret__5804__auto___15348 = speclj.core._new_failure = (function speclj$core$_new_failure(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.error","failure","speclj.error/failure",1870951539,null),null,(1),null)))))),null,(1),null)))));
});
(speclj.core._new_failure.cljs$lang$macro = true);

var ret__5804__auto___15350 = speclj.core._new_pending = (function speclj$core$_new_pending(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.error","pending","speclj.error/pending",-175618779,null),null,(1),null)))))),null,(1),null)))));
});
(speclj.core._new_pending.cljs$lang$macro = true);

var ret__5804__auto___15366 = (function (){
speclj.core.help_it = (function speclj$core$help_it(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15375 = arguments.length;
var i__5750__auto___15380 = (0);
while(true){
if((i__5750__auto___15380 < len__5749__auto___15375)){
args__5755__auto__.push((arguments[i__5750__auto___15380]));

var G__15381 = (i__5750__auto___15380 + (1));
i__5750__auto___15380 = G__15381;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return speclj.core.help_it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(speclj.core.help_it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,focused_QMARK_,body){
if(cljs.core.seq.call(null,body)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-characteristic","speclj.components/new-characteristic",-1463693127,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-characteristic","speclj.components/new-characteristic",-1463693127,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)))));
}
}));

(speclj.core.help_it.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.help_it.cljs$lang$applyTo = (function (seq15351){
var G__15352 = cljs.core.first.call(null,seq15351);
var seq15351__$1 = cljs.core.next.call(null,seq15351);
var G__15353 = cljs.core.first.call(null,seq15351__$1);
var seq15351__$2 = cljs.core.next.call(null,seq15351__$1);
var G__15354 = cljs.core.first.call(null,seq15351__$2);
var seq15351__$3 = cljs.core.next.call(null,seq15351__$2);
var G__15355 = cljs.core.first.call(null,seq15351__$3);
var seq15351__$4 = cljs.core.next.call(null,seq15351__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15352,G__15353,G__15354,G__15355,seq15351__$4);
}));

return null;
})()
;
(speclj.core.help_it.cljs$lang$macro = true);

var ret__5804__auto___15388 = (function (){
speclj.core.help_describe = (function speclj$core$help_describe(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15392 = arguments.length;
var i__5750__auto___15393 = (0);
while(true){
if((i__5750__auto___15393 < len__5749__auto___15392)){
args__5755__auto__.push((arguments[i__5750__auto___15393]));

var G__15395 = (i__5750__auto___15393 + (1));
i__5750__auto___15393 = G__15395;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return speclj.core.help_describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(speclj.core.help_describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,focused_QMARK_,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"description__15368__auto__","description__15368__auto__",1069565080,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-description","speclj.components/new-description",1764687593,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,focused_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,speclj.platform.get_name.call(null,cljs.core._STAR_ns_STAR_)),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__15368__auto__","description__15368__auto__",1069565080,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",-169320766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"component__15369__auto__","component__15369__auto__",89779720,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),null,(1),null)),components))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","install","speclj.components/install",-280361868,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"component__15369__auto__","component__15369__auto__",89779720,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__15368__auto__","description__15368__auto__",1069565080,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","*parent-description*","speclj.config/*parent-description*",923760011,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.running","submit-description","speclj.running/submit-description",788083680,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.config","active-runner","speclj.config/active-runner",982927849,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__15368__auto__","description__15368__auto__",1069565080,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"description__15368__auto__","description__15368__auto__",1069565080,null),null,(1),null)))));
}));

(speclj.core.help_describe.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.help_describe.cljs$lang$applyTo = (function (seq15374){
var G__15376 = cljs.core.first.call(null,seq15374);
var seq15374__$1 = cljs.core.next.call(null,seq15374);
var G__15377 = cljs.core.first.call(null,seq15374__$1);
var seq15374__$2 = cljs.core.next.call(null,seq15374__$1);
var G__15378 = cljs.core.first.call(null,seq15374__$2);
var seq15374__$3 = cljs.core.next.call(null,seq15374__$2);
var G__15379 = cljs.core.first.call(null,seq15374__$3);
var seq15374__$4 = cljs.core.next.call(null,seq15374__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15376,G__15377,G__15378,G__15379,seq15374__$4);
}));

return null;
})()
;
(speclj.core.help_describe.cljs$lang$macro = true);

var ret__5804__auto___15401 = (function (){
speclj.core.help_should = (function speclj$core$help_should(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15402 = arguments.length;
var i__5750__auto___15403 = (0);
while(true){
if((i__5750__auto___15403 < len__5749__auto___15402)){
args__5755__auto__.push((arguments[i__5750__auto___15403]));

var G__15408 = (i__5750__auto___15403 + (1));
i__5750__auto___15403 = G__15408;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.help_should.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.help_should.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","inc-assertions!","speclj.components/inc-assertions!",453792874,null),null,(1),null))))),null,(1),null)),body)));
}));

(speclj.core.help_should.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.help_should.cljs$lang$applyTo = (function (seq15389){
var G__15390 = cljs.core.first.call(null,seq15389);
var seq15389__$1 = cljs.core.next.call(null,seq15389);
var G__15391 = cljs.core.first.call(null,seq15389__$1);
var seq15389__$2 = cljs.core.next.call(null,seq15389__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15390,G__15391,seq15389__$2);
}));

return null;
})()
;
(speclj.core.help_should.cljs$lang$macro = true);

var ret__5804__auto___15431 = (function (){
/**
 * body => any forms, but should contain at least one assertion (should)
 * 
 *   Declares a new characteristic (example in rspec).
 */
speclj.core.it = (function speclj$core$it(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15432 = arguments.length;
var i__5750__auto___15433 = (0);
while(true){
if((i__5750__auto___15433 < len__5749__auto___15432)){
args__5755__auto__.push((arguments[i__5750__auto___15433]));

var G__15434 = (i__5750__auto___15433 + (1));
i__5750__auto___15433 = G__15434;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-it","speclj.core/help-it",944489893,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),body)));
}));

(speclj.core.it.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.it.cljs$lang$applyTo = (function (seq15397){
var G__15398 = cljs.core.first.call(null,seq15397);
var seq15397__$1 = cljs.core.next.call(null,seq15397);
var G__15399 = cljs.core.first.call(null,seq15397__$1);
var seq15397__$2 = cljs.core.next.call(null,seq15397__$1);
var G__15400 = cljs.core.first.call(null,seq15397__$2);
var seq15397__$3 = cljs.core.next.call(null,seq15397__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15398,G__15399,G__15400,seq15397__$3);
}));

return null;
})()
;
(speclj.core.it.cljs$lang$macro = true);

var ret__5804__auto___15436 = (function (){
/**
 * Syntactic shortcut to make the characteristic pending.
 */
speclj.core.xit = (function speclj$core$xit(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15440 = arguments.length;
var i__5750__auto___15441 = (0);
while(true){
if((i__5750__auto___15441 < len__5749__auto___15440)){
args__5755__auto__.push((arguments[i__5750__auto___15441]));

var G__15442 = (i__5750__auto___15441 + (1));
i__5750__auto___15441 = G__15442;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.xit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.xit.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","it","speclj.core/it",396347491,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null))))),null,(1),null)),body)));
}));

(speclj.core.xit.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.xit.cljs$lang$applyTo = (function (seq15404){
var G__15405 = cljs.core.first.call(null,seq15404);
var seq15404__$1 = cljs.core.next.call(null,seq15404);
var G__15406 = cljs.core.first.call(null,seq15404__$1);
var seq15404__$2 = cljs.core.next.call(null,seq15404__$1);
var G__15407 = cljs.core.first.call(null,seq15404__$2);
var seq15404__$3 = cljs.core.next.call(null,seq15404__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15405,G__15406,G__15407,seq15404__$3);
}));

return null;
})()
;
(speclj.core.xit.cljs$lang$macro = true);

var ret__5804__auto___15445 = (function (){
/**
 * Same as 'it', but it is meant to facilitate temporary debugging.
 *   Characteristics defined with this macro will be executed along with any
 *   other characteristics thus defined, but all other characteristic defined
 *   with 'it' will be ignored.
 */
speclj.core.focus_it = (function speclj$core$focus_it(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15446 = arguments.length;
var i__5750__auto___15447 = (0);
while(true){
if((i__5750__auto___15447 < len__5749__auto___15446)){
args__5755__auto__.push((arguments[i__5750__auto___15447]));

var G__15448 = (i__5750__auto___15447 + (1));
i__5750__auto___15447 = G__15448;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_it.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.focus_it.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-it","speclj.core/help-it",944489893,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),body)));
}));

(speclj.core.focus_it.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_it.cljs$lang$applyTo = (function (seq15422){
var G__15424 = cljs.core.first.call(null,seq15422);
var seq15422__$1 = cljs.core.next.call(null,seq15422);
var G__15425 = cljs.core.first.call(null,seq15422__$1);
var seq15422__$2 = cljs.core.next.call(null,seq15422__$1);
var G__15426 = cljs.core.first.call(null,seq15422__$2);
var seq15422__$3 = cljs.core.next.call(null,seq15422__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15424,G__15425,G__15426,seq15422__$3);
}));

return null;
})()
;
(speclj.core.focus_it.cljs$lang$macro = true);

var ret__5804__auto___15451 = (function (){
speclj.core.when_not_bound = (function speclj$core$when_not_bound(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15456 = arguments.length;
var i__5750__auto___15458 = (0);
while(true){
if((i__5750__auto___15458 < len__5749__auto___15456)){
args__5755__auto__.push((arguments[i__5750__auto___15458]));

var G__15459 = (i__5750__auto___15458 + (1));
i__5750__auto___15458 = G__15459;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.when_not_bound.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.when_not_bound.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","find-var","speclj.core/find-var",1418073279,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.when_not_bound.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.when_not_bound.cljs$lang$applyTo = (function (seq15435){
var G__15437 = cljs.core.first.call(null,seq15435);
var seq15435__$1 = cljs.core.next.call(null,seq15435);
var G__15438 = cljs.core.first.call(null,seq15435__$1);
var seq15435__$2 = cljs.core.next.call(null,seq15435__$1);
var G__15439 = cljs.core.first.call(null,seq15435__$2);
var seq15435__$3 = cljs.core.next.call(null,seq15435__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15437,G__15438,G__15439,seq15435__$3);
}));

return null;
})()
;
(speclj.core.when_not_bound.cljs$lang$macro = true);

var ret__5804__auto___15466 = (function (){
/**
 * body => & spec-components
 * 
 *   Declares a new spec.  The body can contain any forms that evaluate to spec components (it, before, after, with ...).
 */
speclj.core.describe = (function speclj$core$describe(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15471 = arguments.length;
var i__5750__auto___15472 = (0);
while(true){
if((i__5750__auto___15472 < len__5749__auto___15471)){
args__5755__auto__.push((arguments[i__5750__auto___15472]));

var G__15473 = (i__5750__auto___15472 + (1));
i__5750__auto___15472 = G__15473;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-describe","speclj.core/help-describe",-589196932,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,false,null,(1),null)),components)));
}));

(speclj.core.describe.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.describe.cljs$lang$applyTo = (function (seq15452){
var G__15453 = cljs.core.first.call(null,seq15452);
var seq15452__$1 = cljs.core.next.call(null,seq15452);
var G__15454 = cljs.core.first.call(null,seq15452__$1);
var seq15452__$2 = cljs.core.next.call(null,seq15452__$1);
var G__15455 = cljs.core.first.call(null,seq15452__$2);
var seq15452__$3 = cljs.core.next.call(null,seq15452__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15453,G__15454,G__15455,seq15452__$3);
}));

return null;
})()
;
(speclj.core.describe.cljs$lang$macro = true);

var ret__5804__auto___15482 = (function (){
/**
 * Same as 'describe', but it is meant to facilitate temporary debugging.
 * Components defined with this macro will be fully executed along with any
 * other components thus defined, but all other sibling components defined
 * with 'describe' will be ignored.
 */
speclj.core.focus_describe = (function speclj$core$focus_describe(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15483 = arguments.length;
var i__5750__auto___15484 = (0);
while(true){
if((i__5750__auto___15484 < len__5749__auto___15483)){
args__5755__auto__.push((arguments[i__5750__auto___15484]));

var G__15485 = (i__5750__auto___15484 + (1));
i__5750__auto___15484 = G__15485;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_describe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.focus_describe.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-describe","speclj.core/help-describe",-589196932,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),components)));
}));

(speclj.core.focus_describe.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_describe.cljs$lang$applyTo = (function (seq15467){
var G__15468 = cljs.core.first.call(null,seq15467);
var seq15467__$1 = cljs.core.next.call(null,seq15467);
var G__15469 = cljs.core.first.call(null,seq15467__$1);
var seq15467__$2 = cljs.core.next.call(null,seq15467__$1);
var G__15470 = cljs.core.first.call(null,seq15467__$2);
var seq15467__$3 = cljs.core.next.call(null,seq15467__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15468,G__15469,G__15470,seq15467__$3);
}));

return null;
})()
;
(speclj.core.focus_describe.cljs$lang$macro = true);

var ret__5804__auto___15496 = (function (){
/**
 * Same as describe, but should be used to nest testing contexts inside the outer describe.
 *   Contexts can be nested any number of times.
 */
speclj.core.context = (function speclj$core$context(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15497 = arguments.length;
var i__5750__auto___15498 = (0);
while(true){
if((i__5750__auto___15498 < len__5749__auto___15497)){
args__5755__auto__.push((arguments[i__5750__auto___15498]));

var G__15500 = (i__5750__auto___15498 + (1));
i__5750__auto___15498 = G__15500;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","describe","speclj.core/describe",-925284183,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),components)));
}));

(speclj.core.context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.context.cljs$lang$applyTo = (function (seq15478){
var G__15479 = cljs.core.first.call(null,seq15478);
var seq15478__$1 = cljs.core.next.call(null,seq15478);
var G__15480 = cljs.core.first.call(null,seq15478__$1);
var seq15478__$2 = cljs.core.next.call(null,seq15478__$1);
var G__15481 = cljs.core.first.call(null,seq15478__$2);
var seq15478__$3 = cljs.core.next.call(null,seq15478__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15479,G__15480,G__15481,seq15478__$3);
}));

return null;
})()
;
(speclj.core.context.cljs$lang$macro = true);

var ret__5804__auto___15504 = (function (){
/**
 * Same as 'context', but it is meant to facilitate temporary debugging.
 * Components defined with this macro will be fully executed along with any
 * other components thus defined, but all other sibling components defined
 * with 'context' will be ignored.
 */
speclj.core.focus_context = (function speclj$core$focus_context(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15505 = arguments.length;
var i__5750__auto___15506 = (0);
while(true){
if((i__5750__auto___15506 < len__5749__auto___15505)){
args__5755__auto__.push((arguments[i__5750__auto___15506]));

var G__15507 = (i__5750__auto___15506 + (1));
i__5750__auto___15506 = G__15507;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.focus_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.focus_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,components){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","focus-describe","speclj.core/focus-describe",-1186168696,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),components)));
}));

(speclj.core.focus_context.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.focus_context.cljs$lang$applyTo = (function (seq15490){
var G__15491 = cljs.core.first.call(null,seq15490);
var seq15490__$1 = cljs.core.next.call(null,seq15490);
var G__15492 = cljs.core.first.call(null,seq15490__$1);
var seq15490__$2 = cljs.core.next.call(null,seq15490__$1);
var G__15493 = cljs.core.first.call(null,seq15490__$2);
var seq15490__$3 = cljs.core.next.call(null,seq15490__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15491,G__15492,G__15493,seq15490__$3);
}));

return null;
})()
;
(speclj.core.focus_context.cljs$lang$macro = true);

var ret__5804__auto___15508 = (function (){
/**
 * Declares a function that is invoked before each characteristic in the containing describe scope is evaluated. The body
 *   may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.before = (function speclj$core$before(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15509 = arguments.length;
var i__5750__auto___15510 = (0);
while(true){
if((i__5750__auto___15510 < len__5749__auto___15509)){
args__5755__auto__.push((arguments[i__5750__auto___15510]));

var G__15511 = (i__5750__auto___15510 + (1));
i__5750__auto___15510 = G__15511;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.before.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-before","speclj.components/new-before",-1748544967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.before.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.before.cljs$lang$applyTo = (function (seq15501){
var G__15502 = cljs.core.first.call(null,seq15501);
var seq15501__$1 = cljs.core.next.call(null,seq15501);
var G__15503 = cljs.core.first.call(null,seq15501__$1);
var seq15501__$2 = cljs.core.next.call(null,seq15501__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15502,G__15503,seq15501__$2);
}));

return null;
})()
;
(speclj.core.before.cljs$lang$macro = true);

var ret__5804__auto___15544 = (function (){
/**
 * Declares a function that is invoked after each characteristic in the containing describe scope is evaluated. The body
 *   may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.after = (function speclj$core$after(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15549 = arguments.length;
var i__5750__auto___15550 = (0);
while(true){
if((i__5750__auto___15550 < len__5749__auto___15549)){
args__5755__auto__.push((arguments[i__5750__auto___15550]));

var G__15551 = (i__5750__auto___15550 + (1));
i__5750__auto___15550 = G__15551;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-after","speclj.components/new-after",-755884805,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.after.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.after.cljs$lang$applyTo = (function (seq15515){
var G__15516 = cljs.core.first.call(null,seq15515);
var seq15515__$1 = cljs.core.next.call(null,seq15515);
var G__15517 = cljs.core.first.call(null,seq15515__$1);
var seq15515__$2 = cljs.core.next.call(null,seq15515__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15516,G__15517,seq15515__$2);
}));

return null;
})()
;
(speclj.core.after.cljs$lang$macro = true);

var ret__5804__auto___15557 = (function (){
/**
 * Declares a function that will be invoked around each characteristic of the containing describe scope.
 *   The characteristic will be passed in and the around function is responsible for invoking it.
 * 
 *   (around [it] (binding [*out* new-out] (it)))
 * 
 *   Note that if you have cleanup that must run, use a 'finally' block:
 * 
 *   (around [it] (try (it) (finally :clean-up)))
 */
speclj.core.around = (function speclj$core$around(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15559 = arguments.length;
var i__5750__auto___15562 = (0);
while(true){
if((i__5750__auto___15562 < len__5749__auto___15559)){
args__5755__auto__.push((arguments[i__5750__auto___15562]));

var G__15563 = (i__5750__auto___15562 + (1));
i__5750__auto___15562 = G__15563;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.around.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.around.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,binding,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-around","speclj.components/new-around",1527117948,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,binding,null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.around.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.around.cljs$lang$applyTo = (function (seq15532){
var G__15533 = cljs.core.first.call(null,seq15532);
var seq15532__$1 = cljs.core.next.call(null,seq15532);
var G__15534 = cljs.core.first.call(null,seq15532__$1);
var seq15532__$2 = cljs.core.next.call(null,seq15532__$1);
var G__15535 = cljs.core.first.call(null,seq15532__$2);
var seq15532__$3 = cljs.core.next.call(null,seq15532__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15533,G__15534,G__15535,seq15532__$3);
}));

return null;
})()
;
(speclj.core.around.cljs$lang$macro = true);

var ret__5804__auto___15568 = /**
 * Redefines the bindings around each characteristic of the containing describe scope.
 */
speclj.core.redefs_around = (function speclj$core$redefs_around(_AMPERSAND_form,_AMPERSAND_env,bindings){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","around","speclj.core/around",649826642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__15552__auto__","it__15552__auto__",1778256175,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__15552__auto__","it__15552__auto__",1778256175,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.redefs_around.cljs$lang$macro = true);

var ret__5804__auto___15577 = (function (){
/**
 * Declares a function that is invoked once before any characteristic in the containing describe scope is evaluated. The
 *   body may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.before_all = (function speclj$core$before_all(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15579 = arguments.length;
var i__5750__auto___15580 = (0);
while(true){
if((i__5750__auto___15580 < len__5749__auto___15579)){
args__5755__auto__.push((arguments[i__5750__auto___15580]));

var G__15581 = (i__5750__auto___15580 + (1));
i__5750__auto___15580 = G__15581;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.before_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.before_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-before-all","speclj.components/new-before-all",879702550,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.before_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.before_all.cljs$lang$applyTo = (function (seq15558){
var G__15560 = cljs.core.first.call(null,seq15558);
var seq15558__$1 = cljs.core.next.call(null,seq15558);
var G__15561 = cljs.core.first.call(null,seq15558__$1);
var seq15558__$2 = cljs.core.next.call(null,seq15558__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15560,G__15561,seq15558__$2);
}));

return null;
})()
;
(speclj.core.before_all.cljs$lang$macro = true);

var ret__5804__auto___15605 = (function (){
/**
 * Declares a function that is invoked once after all the characteristics in the containing describe scope have been
 *   evaluated.  The body may consist of any forms, presumably ones that perform side effects.
 */
speclj.core.after_all = (function speclj$core$after_all(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15613 = arguments.length;
var i__5750__auto___15614 = (0);
while(true){
if((i__5750__auto___15614 < len__5749__auto___15613)){
args__5755__auto__.push((arguments[i__5750__auto___15614]));

var G__15618 = (i__5750__auto___15614 + (1));
i__5750__auto___15614 = G__15618;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.after_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.after_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-after-all","speclj.components/new-after-all",1608037396,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.after_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.after_all.cljs$lang$applyTo = (function (seq15574){
var G__15575 = cljs.core.first.call(null,seq15574);
var seq15574__$1 = cljs.core.next.call(null,seq15574);
var G__15576 = cljs.core.first.call(null,seq15574__$1);
var seq15574__$2 = cljs.core.next.call(null,seq15574__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15575,G__15576,seq15574__$2);
}));

return null;
})()
;
(speclj.core.after_all.cljs$lang$macro = true);

var ret__5804__auto___15641 = (function (){
/**
 * Declares a function that is invoked once around all characteristics of the containing describe scope.
 */
speclj.core.around_all = (function speclj$core$around_all(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15643 = arguments.length;
var i__5750__auto___15644 = (0);
while(true){
if((i__5750__auto___15644 < len__5749__auto___15643)){
args__5755__auto__.push((arguments[i__5750__auto___15644]));

var G__15649 = (i__5750__auto___15644 + (1));
i__5750__auto___15644 = G__15649;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.around_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.around_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-around-all","speclj.components/new-around-all",1113944722,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,context,null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.around_all.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.around_all.cljs$lang$applyTo = (function (seq15604){
var G__15606 = cljs.core.first.call(null,seq15604);
var seq15604__$1 = cljs.core.next.call(null,seq15604);
var G__15607 = cljs.core.first.call(null,seq15604__$1);
var seq15604__$2 = cljs.core.next.call(null,seq15604__$1);
var G__15608 = cljs.core.first.call(null,seq15604__$2);
var seq15604__$3 = cljs.core.next.call(null,seq15604__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15606,G__15607,G__15608,seq15604__$3);
}));

return null;
})()
;
(speclj.core.around_all.cljs$lang$macro = true);

speclj.core._make_with = (function speclj$core$_make_with(name,body,ctor,bang_QMARK_){
var var_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,ctor,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"v__15642__auto__","v__15642__auto__",-2138447596,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__15642__auto__","v__15642__auto__",-2138447596,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,bang_QMARK_,null,(1),null))))),null,(1),null)))));
});
var ret__5804__auto___15660 = (function (){
/**
 * Declares a reference-able symbol that will be lazily evaluated once per characteristic of the containing
 *   describe scope.  The body may contain any forms, the last of which will be the value of the dereferenced symbol.
 * 
 *   (with meaning 42)
 *   (it "knows the meaning of life" (should= @meaning (the-meaning-of :life)))
 */
speclj.core.with$ = (function speclj$core$with(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15661 = arguments.length;
var i__5750__auto___15662 = (0);
while(true){
if((i__5750__auto___15662 < len__5749__auto___15661)){
args__5755__auto__.push((arguments[i__5750__auto___15662]));

var G__15663 = (i__5750__auto___15662 + (1));
i__5750__auto___15662 = G__15663;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.with$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with","speclj.components/new-with",-24310803,null),false);
}));

(speclj.core.with$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with$.cljs$lang$applyTo = (function (seq15650){
var G__15651 = cljs.core.first.call(null,seq15650);
var seq15650__$1 = cljs.core.next.call(null,seq15650);
var G__15652 = cljs.core.first.call(null,seq15650__$1);
var seq15650__$2 = cljs.core.next.call(null,seq15650__$1);
var G__15653 = cljs.core.first.call(null,seq15650__$2);
var seq15650__$3 = cljs.core.next.call(null,seq15650__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15651,G__15652,G__15653,seq15650__$3);
}));

return null;
})()
;
(speclj.core.with$.cljs$lang$macro = true);

var ret__5804__auto___15670 = (function (){
/**
 * Declares a reference-able symbol that will be evaluated immediately and reset once per characteristic of the containing
 *   describe scope.  The body may contain any forms, the last of which will be the value of the dereferenced symbol.
 * 
 *   (def my-num (atom 0))
 *   (with! my-with! (swap! my-num inc))
 *   (it "increments my-num before being accessed" (should= 1 @my-num) (should= 2 @my-with!))
 */
speclj.core.with_BANG_ = (function speclj$core$with_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15671 = arguments.length;
var i__5750__auto___15672 = (0);
while(true){
if((i__5750__auto___15672 < len__5749__auto___15671)){
args__5755__auto__.push((arguments[i__5750__auto___15672]));

var G__15673 = (i__5750__auto___15672 + (1));
i__5750__auto___15672 = G__15673;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.with_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.with_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with","speclj.components/new-with",-24310803,null),true);
}));

(speclj.core.with_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_BANG_.cljs$lang$applyTo = (function (seq15656){
var G__15657 = cljs.core.first.call(null,seq15656);
var seq15656__$1 = cljs.core.next.call(null,seq15656);
var G__15658 = cljs.core.first.call(null,seq15656__$1);
var seq15656__$2 = cljs.core.next.call(null,seq15656__$1);
var G__15659 = cljs.core.first.call(null,seq15656__$2);
var seq15656__$3 = cljs.core.next.call(null,seq15656__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15657,G__15658,G__15659,seq15656__$3);
}));

return null;
})()
;
(speclj.core.with_BANG_.cljs$lang$macro = true);

var ret__5804__auto___15702 = (function (){
/**
 * Declares a reference-able symbol that will be lazily evaluated once per context. The body may contain any forms,
 * the last of which will be the value of the dereferenced symbol.
 * 
 *   (with-all meaning 42)
 *   (it "knows the meaning of life" (should= @meaning (the-meaning-of :life)))
 */
speclj.core.with_all = (function speclj$core$with_all(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15703 = arguments.length;
var i__5750__auto___15704 = (0);
while(true){
if((i__5750__auto___15704 < len__5749__auto___15703)){
args__5755__auto__.push((arguments[i__5750__auto___15704]));

var G__15705 = (i__5750__auto___15704 + (1));
i__5750__auto___15704 = G__15705;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.with_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.with_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with-all","speclj.components/new-with-all",1631732463,null),false);
}));

(speclj.core.with_all.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_all.cljs$lang$applyTo = (function (seq15664){
var G__15665 = cljs.core.first.call(null,seq15664);
var seq15664__$1 = cljs.core.next.call(null,seq15664);
var G__15666 = cljs.core.first.call(null,seq15664__$1);
var seq15664__$2 = cljs.core.next.call(null,seq15664__$1);
var G__15667 = cljs.core.first.call(null,seq15664__$2);
var seq15664__$3 = cljs.core.next.call(null,seq15664__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15665,G__15666,G__15667,seq15664__$3);
}));

return null;
})()
;
(speclj.core.with_all.cljs$lang$macro = true);

var ret__5804__auto___15716 = (function (){
/**
 * Declares a reference-able symbol that will be immediately evaluated once per context. The body may contain any forms,
 * the last of which will be the value of the dereferenced symbol.
 * 
 *   (def my-num (atom 0))
 *   (with-all! my-with-all! (swap! my-num inc))
 *   (it "increments my-num before being accessed"
 *  (should= 1 @my-num)
 *  (should= 2 @my-with!))
 *   (it "only increments my-num once per context"
 *  (should= 1 @my-num)
 *  (should= 2 @my-with!))
 */
speclj.core.with_all_BANG_ = (function speclj$core$with_all_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15718 = arguments.length;
var i__5750__auto___15720 = (0);
while(true){
if((i__5750__auto___15720 < len__5749__auto___15718)){
args__5755__auto__.push((arguments[i__5750__auto___15720]));

var G__15721 = (i__5750__auto___15720 + (1));
i__5750__auto___15720 = G__15721;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return speclj.core.with_all_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(speclj.core.with_all_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return speclj.core._make_with.call(null,name,body,new cljs.core.Symbol("speclj.components","new-with-all","speclj.components/new-with-all",1631732463,null),true);
}));

(speclj.core.with_all_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(speclj.core.with_all_BANG_.cljs$lang$applyTo = (function (seq15694){
var G__15699 = cljs.core.first.call(null,seq15694);
var seq15694__$1 = cljs.core.next.call(null,seq15694);
var G__15700 = cljs.core.first.call(null,seq15694__$1);
var seq15694__$2 = cljs.core.next.call(null,seq15694__$1);
var G__15701 = cljs.core.first.call(null,seq15694__$2);
var seq15694__$3 = cljs.core.next.call(null,seq15694__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15699,G__15700,G__15701,seq15694__$3);
}));

return null;
})()
;
(speclj.core.with_all_BANG_.cljs$lang$macro = true);

var ret__5804__auto___15732 = speclj.core._to_s = (function speclj$core$_to_s(_AMPERSAND_form,_AMPERSAND_env,thing){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-some","cljs.core/if-some",790328718,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"thing__15706__auto__","thing__15706__auto__",547395983,null),null,(1),null)),(new cljs.core.List(null,thing,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"thing__15706__auto__","thing__15706__auto__",547395983,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)))));
});
(speclj.core._to_s.cljs$lang$macro = true);

var ret__5804__auto___15733 = /**
 * Useful for making custom assertions.
 */
speclj.core._fail = (function speclj$core$_fail(_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-failure","speclj.core/-new-failure",1552263542,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
});
(speclj.core._fail.cljs$lang$macro = true);

var ret__5804__auto___15735 = speclj.core.wrong_types = (function speclj$core$wrong_types(_AMPERSAND_form,_AMPERSAND_env,assertion,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__15713__auto__","a__15713__auto__",522763418,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__15714__auto__","b__15714__auto__",-1817088313,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-a__15715__auto__","type-a__15715__auto__",47948694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__15713__auto__","a__15713__auto__",522763418,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__15713__auto__","a__15713__auto__",522763418,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-b__15717__auto__","type-b__15717__auto__",732482917,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__15714__auto__","b__15714__auto__",-1817088313,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"nil",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__15714__auto__","b__15714__auto__",-1817088313,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,assertion,null,(1),null)),(new cljs.core.List(null," doesn't know how to handle these types: [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-a__15715__auto__","type-a__15715__auto__",47948694,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"type-b__15717__auto__","type-b__15717__auto__",732482917,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null)))));
});
(speclj.core.wrong_types.cljs$lang$macro = true);

var ret__5804__auto___15771 = /**
 * Asserts the truthy-ness of a form
 */
speclj.core.should = (function speclj$core$should(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__15734__auto__","value__15734__auto__",-577570198,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__15734__auto__","value__15734__auto__",-577570198,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected truthy but was: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__15734__auto__","value__15734__auto__",-577570198,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should.cljs$lang$macro = true);

var ret__5804__auto___15775 = /**
 * Asserts the falsy-ness of a form
 */
speclj.core.should_not = (function speclj$core$should_not(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__15742__auto__","value__15742__auto__",179948816,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected falsy but was: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__15742__auto__","value__15742__auto__",179948816,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not.cljs$lang$macro = true);

var ret__5804__auto___15790 = (function (){
/**
 * Asserts that two forms evaluate to equal values, with the expected value as the first parameter.
 */
speclj.core.should_EQ_ = (function speclj$core$should_EQ_(var_args){
var G__15762 = arguments.length;
switch (G__15762) {
case 4:
return speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15755__auto__","expected__15755__auto__",-928832472,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15756__auto__","actual__15756__auto__",1906645085,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15755__auto__","expected__15755__auto__",-928832472,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15756__auto__","actual__15756__auto__",1906645085,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15755__auto__","expected__15755__auto__",-928832472,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15756__auto__","actual__15756__auto__",1906645085,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_EQ_.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form,delta_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15757__auto__","expected__15757__auto__",1769588331,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15758__auto__","actual__15758__auto__",335703438,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__15759__auto__","delta__15759__auto__",561384969,null),null,(1),null)),(new cljs.core.List(null,delta_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","difference-greater-than-delta?","speclj.platform/difference-greater-than-delta?",-954532948,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15757__auto__","expected__15757__auto__",1769588331,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15758__auto__","actual__15758__auto__",335703438,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__15759__auto__","delta__15759__auto__",561384969,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15757__auto__","expected__15757__auto__",1769588331,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15758__auto__","actual__15758__auto__",335703438,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using delta: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"delta__15759__auto__","delta__15759__auto__",561384969,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_EQ_.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(speclj.core.should_EQ_.cljs$lang$macro = true);

var ret__5804__auto___15818 = /**
 * Asserts that a form satisfies a function.
 */
speclj.core.should_be = (function speclj$core$should_be(_AMPERSAND_form,_AMPERSAND_env,f_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__15792__auto__","f__15792__auto__",-469171704,null),null,(1),null)),(new cljs.core.List(null,f_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15793__auto__","actual__15793__auto__",-1286945735,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__15792__auto__","f__15792__auto__",-469171704,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15793__auto__","actual__15793__auto__",-1286945735,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15793__auto__","actual__15793__auto__",-1286945735,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to satisfy: ",null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_form),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be.cljs$lang$macro = true);

var ret__5804__auto___15829 = /**
 * Asserts that a form does not satisfy a function.
 */
speclj.core.should_not_be = (function speclj$core$should_not_be(_AMPERSAND_form,_AMPERSAND_env,f_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__15799__auto__","f__15799__auto__",1163845062,null),null,(1),null)),(new cljs.core.List(null,f_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15800__auto__","actual__15800__auto__",-698065683,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__15799__auto__","f__15799__auto__",1163845062,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15800__auto__","actual__15800__auto__",-698065683,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15800__auto__","actual__15800__auto__",-698065683,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," not to satisfy: ",null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_form),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be.cljs$lang$macro = true);

var ret__5804__auto___15837 = /**
 * Asserts that two forms evaluate to unequal values, with the unexpected value as the first parameter.
 */
speclj.core.should_not_EQ_ = (function speclj$core$should_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15807__auto__","expected__15807__auto__",2018419448,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15808__auto__","actual__15808__auto__",-623353156,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15807__auto__","expected__15807__auto__",2018419448,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15808__auto__","actual__15808__auto__",-623353156,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15807__auto__","expected__15807__auto__",2018419448,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to =: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15808__auto__","actual__15808__auto__",-623353156,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_EQ_.cljs$lang$macro = true);

var ret__5804__auto___15839 = /**
 * Asserts that two forms evaluate to the same object, with the expected value as the first parameter.
 */
speclj.core.should_be_same = (function speclj$core$should_be_same(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15821__auto__","expected__15821__auto__",-743622599,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15822__auto__","actual__15822__auto__",-197789708,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15821__auto__","expected__15821__auto__",-743622599,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15822__auto__","actual__15822__auto__",-197789708,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"         Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15821__auto__","expected__15821__auto__",-743622599,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be the same as: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15822__auto__","actual__15822__auto__",-197789708,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using identical?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be_same.cljs$lang$macro = true);

var ret__5804__auto___15848 = /**
 * Asserts that two forms evaluate to different objects, with the unexpected value as the first parameter.
 */
speclj.core.should_not_be_same = (function speclj$core$should_not_be_same(_AMPERSAND_form,_AMPERSAND_env,expected_form,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15830__auto__","expected__15830__auto__",1719739415,null),null,(1),null)),(new cljs.core.List(null,expected_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15831__auto__","actual__15831__auto__",-1111483087,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15830__auto__","expected__15830__auto__",1719739415,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15831__auto__","actual__15831__auto__",-1111483087,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"             Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15830__auto__","expected__15830__auto__",1719739415,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be the same as: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15831__auto__","actual__15831__auto__",-1111483087,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using identical?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be_same.cljs$lang$macro = true);

var ret__5804__auto___15849 = /**
 * Asserts that the form evaluates to nil
 */
speclj.core.should_be_nil = (function speclj$core$should_be_nil(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});
(speclj.core.should_be_nil.cljs$lang$macro = true);

var ret__5804__auto___15864 = /**
 * Multipurpose assertion of containment.  Works on strings, regular expressions, sequences, and maps.
 * 
 *   (should-contain "foo" "foobar")            ; looks for sub-string
 *   (should-contain #"hello.*" "hello, world") ; looks for regular expression
 *   (should-contain :foo {:foo :bar})          ; looks for a key in a map
 *   (should-contain 3 [1 2 3 4])               ; looks for an object in a collection
 */
speclj.core.should_contain = (function speclj$core$should_contain(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: nil",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","index-of","clojure.string/index-of",1428561254,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using .contains)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-seq","cljs.core/re-seq",-1438765119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to match: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using re-seq)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be a key in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using contains?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__15840__15847__auto__","p1__15840__15847__auto__",1240246802,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__15840__15847__auto__","p1__15840__15847__auto__",1240246802,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-contain",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15845__auto__","expected__15845__auto__",1397104523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15846__auto__","actual__15846__auto__",1757295842,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_contain.cljs$lang$macro = true);

var ret__5804__auto___15969 = /**
 * Multipurpose assertion of non-containment.  See should-contain as an example of opposite behavior.
 */
speclj.core.should_not_contain = (function speclj$core$should_not_contain(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","index-of","clojure.string/index-of",1428561254,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using .contains)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-seq","cljs.core/re-seq",-1438765119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to match: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using re-seq)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be a key in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using contains?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__15861__15865__auto__","p1__15861__15865__auto__",32441792,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__15861__15865__auto__","p1__15861__15865__auto__",32441792,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to be in: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using =)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-contain",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15862__auto__","expected__15862__auto__",-1033117948,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15863__auto__","actual__15863__auto__",748993359,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_contain.cljs$lang$macro = true);

var ret__5804__auto___16025 = /**
 * Multipurpose assertion on (count %). Works on strings, sequences, and maps.
 * 
 *   (should-have-count 6 "foobar")
 *   (should-have-count 2 [1 2])
 *   (should-have-count 1 {:foo :bar})
 *   (should-have-count 0 [])
 *   (should-have-count 0 nil)
 */
speclj.core.should_have_count = (function speclj$core$should_have_count(_AMPERSAND_form,_AMPERSAND_env,expected,coll){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15970__auto__","expected__15970__auto__",1167251179,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__15971__auto__","coll__15971__auto__",592088505,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15970__auto__","expected__15970__auto__",1167251179,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__15971__auto__","coll__15971__auto__",592088505,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__15971__auto__","coll__15971__auto__",592088505,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","counted?","cljs.core/counted?",1305324125,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__15971__auto__","coll__15971__auto__",592088505,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-have-count",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15970__auto__","expected__15970__auto__",1167251179,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__15971__auto__","coll__15971__auto__",592088505,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15974__auto__","actual__15974__auto__",1868568130,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__15971__auto__","coll__15971__auto__",592088505,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15970__auto__","expected__15970__auto__",1167251179,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15974__auto__","actual__15974__auto__",1868568130,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected count: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__15970__auto__","expected__15970__auto__",1167251179,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Actual count:   ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__15974__auto__","actual__15974__auto__",1868568130,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Actual coll:    ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__15971__auto__","coll__15971__auto__",592088505,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_have_count.cljs$lang$macro = true);

var ret__5804__auto___16045 = /**
 * Multipurpose assertion on (not= (count %)). Works on strings, sequences, and maps.
 * 
 *   (should-not-have-count 1 "foobar")
 *   (should-not-have-count 1 [1 2])
 *   (should-not-have-count 42 {:foo :bar})
 *   (should-not-have-count 1 [])
 *   (should-not-have-count 1 nil)
 */
speclj.core.should_not_have_count = (function speclj$core$should_not_have_count(_AMPERSAND_form,_AMPERSAND_env,expected,coll){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16019__auto__","expected__16019__auto__",2023163612,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16020__auto__","coll__16020__auto__",1621656783,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16019__auto__","expected__16019__auto__",2023163612,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16020__auto__","coll__16020__auto__",1621656783,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16020__auto__","coll__16020__auto__",1621656783,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","counted?","cljs.core/counted?",1305324125,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16020__auto__","coll__16020__auto__",1621656783,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-have-count",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16019__auto__","expected__16019__auto__",2023163612,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16020__auto__","coll__16020__auto__",1621656783,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16022__auto__","actual__16022__auto__",-1985043373,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16020__auto__","coll__16020__auto__",1621656783,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16019__auto__","expected__16019__auto__",2023163612,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16022__auto__","actual__16022__auto__",-1985043373,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected count to not equal ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16019__auto__","expected__16019__auto__",2023163612,null),null,(1),null)),(new cljs.core.List(null," (but it did!)",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"Collection: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16020__auto__","coll__16020__auto__",1621656783,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_have_count.cljs$lang$macro = true);

var ret__5804__auto___16070 = speclj.core._remove_first = (function speclj$core$_remove_first(_AMPERSAND_form,_AMPERSAND_env,coll,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"value__16042__auto__","value__16042__auto__",-781518231,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16043__auto__","coll__16043__auto__",1012354472,null),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__16044__auto__","seen__16044__auto__",-1288823498,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16043__auto__","coll__16043__auto__",1012354472,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__16044__auto__","seen__16044__auto__",-1288823498,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__16046__auto__","f__16046__auto__",1928164047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16043__auto__","coll__16043__auto__",1012354472,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__16046__auto__","f__16046__auto__",1928164047,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__16042__auto__","value__16042__auto__",-781518231,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__16044__auto__","seen__16044__auto__",-1288823498,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16043__auto__","coll__16043__auto__",1012354472,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__16043__auto__","coll__16043__auto__",1012354472,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"seen__16044__auto__","seen__16044__auto__",-1288823498,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__16046__auto__","f__16046__auto__",1928164047,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._remove_first.cljs$lang$macro = true);

var ret__5804__auto___16076 = speclj.core._coll_difference = (function speclj$core$_coll_difference(_AMPERSAND_form,_AMPERSAND_env,coll1,coll2){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__16062__auto__","coll1__16062__auto__",-330141342,null),null,(1),null)),(new cljs.core.List(null,coll1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__16063__auto__","coll2__16063__auto__",-339145301,null),null,(1),null)),(new cljs.core.List(null,coll2,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__16062__auto__","coll1__16062__auto__",-330141342,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.data","diff","clojure.data/diff",-683865998,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__16062__auto__","coll1__16062__auto__",-330141342,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__16063__auto__","coll2__16063__auto__",-339145301,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__16064__auto__","match-with__16064__auto__",299805607,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll1__16062__auto__","coll1__16062__auto__",-330141342,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__16065__auto__","match-against__16065__auto__",1523283680,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll2__16063__auto__","coll2__16063__auto__",-339145301,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__16066__auto__","diff__16066__auto__",648993693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__16064__auto__","match-with__16064__auto__",299805607,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__16066__auto__","diff__16066__auto__",648993693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__16067__auto__","f__16067__auto__",-292352778,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__16064__auto__","match-with__16064__auto__",299805607,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__16068__auto__","r__16068__auto__",1054115428,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-with__16064__auto__","match-with__16064__auto__",299805607,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16061__16069__auto__","p1__16061__16069__auto__",-1126762368,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16061__16069__auto__","p1__16061__16069__auto__",-1126762368,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__16067__auto__","f__16067__auto__",-292352778,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__16065__auto__","match-against__16065__auto__",1523283680,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__16068__auto__","r__16068__auto__",1054115428,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-remove-first","speclj.core/-remove-first",869128070,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__16065__auto__","match-against__16065__auto__",1523283680,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__16067__auto__","f__16067__auto__",-292352778,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__16066__auto__","diff__16066__auto__",648993693,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"r__16068__auto__","r__16068__auto__",1054115428,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"match-against__16065__auto__","match-against__16065__auto__",1523283680,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"diff__16066__auto__","diff__16066__auto__",648993693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__16067__auto__","f__16067__auto__",-292352778,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._coll_difference.cljs$lang$macro = true);

var ret__5804__auto___16124 = /**
 * Assertion of prefix in strings and sequences.
 * 
 *   (should-start-with "foo" "foobar")            ; looks for string prefix
 *   (should-start-with [1 2] [1 2 3 4])               ; looks for a subset at start of collection
 */
speclj.core.should_start_with = (function speclj$core$should_start_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16077__auto__","prefix__16077__auto__",-821448253,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16078__auto__","whole__16078__auto__",-477168380,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16077__auto__","prefix__16077__auto__",-821448253,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16078__auto__","whole__16078__auto__",-477168380,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16078__auto__","whole__16078__auto__",-477168380,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16077__auto__","prefix__16077__auto__",-821448253,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16078__auto__","whole__16078__auto__",-477168380,null),null,(1),null)),(new cljs.core.List(null,"\" to start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16077__auto__","prefix__16077__auto__",-821448253,null),null,(1),null)),(new cljs.core.List(null,"\"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16078__auto__","whole__16078__auto__",-477168380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16077__auto__","prefix__16077__auto__",-821448253,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16079__auto__","actual__16079__auto__",1379216575,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take","cljs.core/take",439591112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16077__auto__","prefix__16077__auto__",-821448253,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16078__auto__","whole__16078__auto__",-477168380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16080__auto__","extra__16080__auto__",-1614777639,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16079__auto__","actual__16079__auto__",1379216575,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16077__auto__","prefix__16077__auto__",-821448253,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16081__auto__","missing__16081__auto__",1271989890,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16077__auto__","prefix__16077__auto__",-821448253,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16079__auto__","actual__16079__auto__",1379216575,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16080__auto__","extra__16080__auto__",-1614777639,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16081__auto__","missing__16081__auto__",1271989890,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16078__auto__","whole__16078__auto__",-477168380,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16077__auto__","prefix__16077__auto__",-821448253,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-start-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16077__auto__","prefix__16077__auto__",-821448253,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16078__auto__","whole__16078__auto__",-477168380,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_start_with.cljs$lang$macro = true);

var ret__5804__auto___16137 = /**
 * The inverse of should-start-with.
 */
speclj.core.should_not_start_with = (function speclj$core$should_not_start_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16125__auto__","prefix__16125__auto__",943020503,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16126__auto__","whole__16126__auto__",358365616,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16125__auto__","prefix__16125__auto__",943020503,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16126__auto__","whole__16126__auto__",358365616,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16126__auto__","whole__16126__auto__",358365616,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16125__auto__","prefix__16125__auto__",943020503,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16126__auto__","whole__16126__auto__",358365616,null),null,(1),null)),(new cljs.core.List(null,"\" to NOT start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with \"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16125__auto__","prefix__16125__auto__",943020503,null),null,(1),null)),(new cljs.core.List(null,"\"",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16126__auto__","whole__16126__auto__",358365616,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16125__auto__","prefix__16125__auto__",943020503,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16127__auto__","actual__16127__auto__",843869599,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take","cljs.core/take",439591112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16125__auto__","prefix__16125__auto__",943020503,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16126__auto__","whole__16126__auto__",358365616,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16128__auto__","extra__16128__auto__",-619892749,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16127__auto__","actual__16127__auto__",843869599,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16125__auto__","prefix__16125__auto__",943020503,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16129__auto__","missing__16129__auto__",1236245269,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16125__auto__","prefix__16125__auto__",943020503,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16127__auto__","actual__16127__auto__",843869599,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16128__auto__","extra__16128__auto__",-619892749,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16129__auto__","missing__16129__auto__",1236245269,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16126__auto__","whole__16126__auto__",358365616,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to NOT start",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16125__auto__","prefix__16125__auto__",943020503,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-start-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16125__auto__","prefix__16125__auto__",943020503,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16126__auto__","whole__16126__auto__",358365616,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_start_with.cljs$lang$macro = true);

var ret__5804__auto___16177 = /**
 * Assertion of suffix in strings and sequences.
 * 
 *   (should-end-with "foo" "foobar")            ; looks for string suffix
 *   (should-end-with [1 2] [1 2 3 4])               ; looks for a subset at end of collection
 */
speclj.core.should_end_with = (function speclj$core$should_end_with(_AMPERSAND_form,_AMPERSAND_env,suffix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null)),(new cljs.core.List(null,suffix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__16152__auto__","padding__16152__auto__",1937696181,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null)),(new cljs.core.List(null,"] to end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__16152__auto__","padding__16152__auto__",1937696181,null),null,(1),null)),(new cljs.core.List(null,"    with [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16153__auto__","actual__16153__auto__",2079843341,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take-last","cljs.core/take-last",374295804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16154__auto__","extra__16154__auto__",1318501387,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16153__auto__","actual__16153__auto__",2079843341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16155__auto__","missing__16155__auto__",1619466950,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16153__auto__","actual__16153__auto__",2079843341,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16154__auto__","extra__16154__auto__",1318501387,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16155__auto__","missing__16155__auto__",1619466950,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__16152__auto__","padding__16152__auto__",1937696181,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null)),(new cljs.core.List(null," to end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__16152__auto__","padding__16152__auto__",1937696181,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-end-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"suffix__16150__auto__","suffix__16150__auto__",-1442466618,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16151__auto__","whole__16151__auto__",-840317684,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_end_with.cljs$lang$macro = true);

var ret__5804__auto___16254 = /**
 * The inverse of should-end-with.
 */
speclj.core.should_not_end_with = (function speclj$core$should_not_end_with(_AMPERSAND_form,_AMPERSAND_env,prefix,whole){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null)),(new cljs.core.List(null,prefix,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null)),(new cljs.core.List(null,whole,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__16180__auto__","padding__16180__auto__",549207991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null)),(new cljs.core.List(null,"] to NOT end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__16180__auto__","padding__16180__auto__",549207991,null),null,(1),null)),(new cljs.core.List(null,"    with [",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null)),(new cljs.core.List(null,"]",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16181__auto__","actual__16181__auto__",-923256549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","take-last","cljs.core/take-last",374295804,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16182__auto__","extra__16182__auto__",39403225,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16181__auto__","actual__16181__auto__",-923256549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16183__auto__","missing__16183__auto__",530230888,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16181__auto__","actual__16181__auto__",-923256549,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16182__auto__","extra__16182__auto__",39403225,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16183__auto__","missing__16183__auto__",530230888,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__16180__auto__","padding__16180__auto__",549207991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null)),(new cljs.core.List(null," to NOT end\n",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"padding__16180__auto__","padding__16180__auto__",549207991,null),null,(1),null)),(new cljs.core.List(null,"    with ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not-end-with",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefix__16178__auto__","prefix__16178__auto__",-2029080859,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"whole__16179__auto__","whole__16179__auto__",1439158363,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_end_with.cljs$lang$macro = true);

var ret__5804__auto___16273 = speclj.core._difference_message = (function speclj$core$_difference_message(_AMPERSAND_form,_AMPERSAND_env,expected,actual,extra,missing){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected contents: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"              got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"          missing: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,missing,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"            extra: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,extra,null,(1),null))))),null,(1),null)))));
});
(speclj.core._difference_message.cljs$lang$macro = true);

var ret__5804__auto___16284 = /**
 * Asserts 'equivalency'.
 *   When passed collections it will check that they have the same contents.
 *   For anything else it will assert that clojure.core/== returns true.
 */
speclj.core.should_EQ__EQ_ = (function speclj$core$should_EQ__EQ_(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16255__auto__","expected__16255__auto__",1306362087,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16256__auto__","actual__16256__auto__",-2016142739,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16255__auto__","expected__16255__auto__",1306362087,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16256__auto__","actual__16256__auto__",-2016142739,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16257__auto__","extra__16257__auto__",335214763,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16256__auto__","actual__16256__auto__",-2016142739,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16255__auto__","expected__16255__auto__",1306362087,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16258__auto__","missing__16258__auto__",985744448,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16255__auto__","expected__16255__auto__",1306362087,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16256__auto__","actual__16256__auto__",-2016142739,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16257__auto__","extra__16257__auto__",335214763,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16258__auto__","missing__16258__auto__",985744448,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-difference-message","speclj.core/-difference-message",762568995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16255__auto__","expected__16255__auto__",1306362087,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16256__auto__","actual__16256__auto__",-2016142739,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16257__auto__","extra__16257__auto__",335214763,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16258__auto__","missing__16258__auto__",985744448,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16255__auto__","expected__16255__auto__",1306362087,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16256__auto__","actual__16256__auto__",-2016142739,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16255__auto__","expected__16255__auto__",1306362087,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16256__auto__","actual__16256__auto__",-2016142739,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16255__auto__","expected__16255__auto__",1306362087,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16256__auto__","actual__16256__auto__",-2016142739,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using ==)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should==",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16255__auto__","expected__16255__auto__",1306362087,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16256__auto__","actual__16256__auto__",-2016142739,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_EQ__EQ_.cljs$lang$macro = true);

var ret__5804__auto___16312 = /**
 * Asserts 'non-equivalency'.
 *   When passed collections it will check that they do NOT have the same contents.
 *   For anything else it will assert that clojure.core/== returns false.
 */
speclj.core.should_not_EQ__EQ_ = (function speclj$core$should_not_EQ__EQ_(_AMPERSAND_form,_AMPERSAND_env,expected,actual){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16280__auto__","expected__16280__auto__",814898561,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16281__auto__","actual__16281__auto__",-1982568834,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16280__auto__","expected__16280__auto__",814898561,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16281__auto__","actual__16281__auto__",-1982568834,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16282__auto__","extra__16282__auto__",643154253,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16281__auto__","actual__16281__auto__",-1982568834,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16280__auto__","expected__16280__auto__",814898561,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16283__auto__","missing__16283__auto__",-787451121,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-coll-difference","speclj.core/-coll-difference",805206382,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16280__auto__","expected__16280__auto__",814898561,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16281__auto__","actual__16281__auto__",-1982568834,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extra__16282__auto__","extra__16282__auto__",643154253,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"missing__16283__auto__","missing__16283__auto__",-787451121,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected contents: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16280__auto__","expected__16280__auto__",814898561,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"   to differ from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16281__auto__","actual__16281__auto__",-1982568834,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16280__auto__","expected__16280__auto__",814898561,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16281__auto__","actual__16281__auto__",-1982568834,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16280__auto__","expected__16280__auto__",814898561,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16281__auto__","actual__16281__auto__",-1982568834,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null," Expected: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16280__auto__","expected__16280__auto__",814898561,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"not to ==: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16281__auto__","actual__16281__auto__",-1982568834,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using ==)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should-not==",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected__16280__auto__","expected__16280__auto__",814898561,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16281__auto__","actual__16281__auto__",-1982568834,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_EQ__EQ_.cljs$lang$macro = true);

var ret__5804__auto___16344 = /**
 * Asserts that the form evaluates to a non-nil value
 */
speclj.core.should_not_be_nil = (function speclj$core$should_not_be_nil(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not=","speclj.core/should-not=",-671600182,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
});
(speclj.core.should_not_be_nil.cljs$lang$macro = true);

var ret__5804__auto___16346 = (function (){
/**
 * Forces a failure. An optional message may be passed in.
 */
speclj.core.should_fail = (function speclj$core$should_fail(var_args){
var G__16314 = arguments.length;
switch (G__16314) {
case 2:
return speclj.core.should_fail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core.should_fail.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_fail.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-fail","speclj.core/should-fail",1593830201,null),null,(1),null)),(new cljs.core.List(null,"Forced failure",null,(1),null)))));
}));

(speclj.core.should_fail.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_fail.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core.should_fail.cljs$lang$macro = true);

var ret__5804__auto___16351 = speclj.core._create_should_throw_failure = (function speclj$core$_create_should_throw_failure(_AMPERSAND_form,_AMPERSAND_env,expected,actual,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__16321__auto__","expected-name__16321__auto__",-2028501294,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","type-name","speclj.platform/type-name",-1621971592,null),null,(1),null)),(new cljs.core.List(null,expected,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-gaps__16322__auto__","expected-gaps__16322__auto__",2043505427,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","repeat","cljs.core/repeat",-89455077,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__16321__auto__","expected-name__16321__auto__",-2028501294,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-string__16323__auto__","actual-string__16323__auto__",277435096,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16324__auto__","actual__16324__auto__",-965701746,null),null,(1),null)),(new cljs.core.List(null,actual,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16324__auto__","actual__16324__auto__",-965701746,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"<nothing thrown>",null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-failure","speclj.core/-new-failure",1552263542,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-name__16321__auto__","expected-name__16321__auto__",-2028501294,null),null,(1),null)),(new cljs.core.List(null," thrown from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"         ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-gaps__16322__auto__","expected-gaps__16322__auto__",2043505427,null),null,(1),null)),(new cljs.core.List(null,"     but got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-string__16323__auto__","actual-string__16323__auto__",277435096,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core._create_should_throw_failure.cljs$lang$macro = true);

var ret__5804__auto___16364 = (function (){
/**
 * Asserts that a Throwable is throws by the evaluation of a form.
 * When a class is passed, it asserts that the thrown Exception is an instance of the class.
 * There are three options for passing different kinds of predicates:
 *   - If a string, assert that the message of the Exception is equal to the string.
 *   - If a regex, asserts that the message of the Exception matches the regex.
 *   - If a function, assert that calling the function on the Exception returns a truthy value.
 */
speclj.core.should_throw = (function speclj$core$should_throw(var_args){
var G__16345 = arguments.length;
switch (G__16345) {
case 3:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return speclj.core.should_throw.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-throw","speclj.core/should-throw",-1013100325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","throwable","speclj.platform/throwable",-599125238,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
}));

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,throwable_type,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-create-should-throw-failure","speclj.core/-create-should-throw-failure",2126405641,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16339__auto__","e__16339__auto__",1038700808,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.error","failure?","speclj.error/failure?",759354357,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16339__auto__","e__16339__auto__",1038700808,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16339__auto__","e__16339__auto__",1038700808,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16339__auto__","e__16339__auto__",1038700808,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-create-should-throw-failure","speclj.core/-create-should-throw-failure",2126405641,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16339__auto__","e__16339__auto__",1038700808,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16339__auto__","e__16339__auto__",1038700808,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_throw.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,throwable_type,predicate,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16340__auto__","e__16340__auto__",-1912982454,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-throw","speclj.core/should-throw",-1013100325,null),null,(1),null)),(new cljs.core.List(null,throwable_type,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__16341__auto__","predicate__16341__auto__",1814163555,null),null,(1),null)),(new cljs.core.List(null,predicate,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","re?","speclj.platform/re?",-2045322539,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__16341__auto__","predicate__16341__auto__",1814163555,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-be-nil","speclj.core/should-not-be-nil",962725329,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__16341__auto__","predicate__16341__auto__",1814163555,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16340__auto__","e__16340__auto__",-1912982454,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__16341__auto__","predicate__16341__auto__",1814163555,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__16341__auto__","predicate__16341__auto__",1814163555,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16340__auto__","e__16340__auto__",-1912982454,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should=","speclj.core/should=",83977914,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"predicate__16341__auto__","predicate__16341__auto__",1814163555,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16340__auto__","e__16340__auto__",-1912982454,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__16342__auto__","f__16342__auto__",-351060356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected exception predicate didn't match",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","error-message","speclj.platform/error-message",124672328,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__16342__auto__","f__16342__auto__",-351060356,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_throw.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(speclj.core.should_throw.cljs$lang$macro = true);

var ret__5804__auto___16431 = /**
 * Asserts that nothing is thrown by the evaluation of a form.
 */
speclj.core.should_not_throw = (function speclj$core$should_not_throw(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","try-catch-anything","speclj.core/try-catch-anything",2038895468,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16363__auto__","e__16363__auto__",-1508998943,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected nothing thrown from: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"                     but got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16363__auto__","e__16363__auto__",-1508998943,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_throw.cljs$lang$macro = true);

var ret__5804__auto___16434 = /**
 * Asserts that the type of the given form derives from or equals the expected type
 */
speclj.core.should_be_a = (function speclj$core$should_be_a(_AMPERSAND_form,_AMPERSAND_env,expected_type,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16367__auto__","actual__16367__auto__",1988552862,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__16368__auto__","actual-type__16368__auto__",-673804624,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16367__auto__","actual__16367__auto__",1988552862,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__16369__auto__","expected-type__16369__auto__",-472291867,null),null,(1),null)),(new cljs.core.List(null,expected_type,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","isa?","cljs.core/isa?",951980347,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__16368__auto__","actual-type__16368__auto__",-673804624,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__16369__auto__","expected-type__16369__auto__",-472291867,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16367__auto__","actual__16367__auto__",1988552862,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," to be an instance of: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__16369__auto__","expected-type__16369__auto__",-472291867,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"           but was an instance of: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__16368__auto__","actual-type__16368__auto__",-673804624,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," (using isa?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_be_a.cljs$lang$macro = true);

var ret__5804__auto___16442 = /**
 * Asserts that the type of the given form does not derive from or equal the expected type
 */
speclj.core.should_not_be_a = (function speclj$core$should_not_be_a(_AMPERSAND_form,_AMPERSAND_env,expected_type,actual_form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16393__auto__","actual__16393__auto__",1080013972,null),null,(1),null)),(new cljs.core.List(null,actual_form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__16395__auto__","actual-type__16395__auto__",-260859183,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16393__auto__","actual__16393__auto__",1080013972,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__16396__auto__","expected-type__16396__auto__",1879586102,null),null,(1),null)),(new cljs.core.List(null,expected_type,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","isa?","cljs.core/isa?",951980347,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual-type__16395__auto__","actual-type__16395__auto__",-260859183,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__16396__auto__","expected-type__16396__auto__",1879586102,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"actual__16393__auto__","actual__16393__auto__",1080013972,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," not to be an instance of ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-to-s","speclj.core/-to-s",-1548927580,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"expected-type__16396__auto__","expected-type__16396__auto__",1879586102,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," but was (using isa?)",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_not_be_a.cljs$lang$macro = true);

var ret__5804__auto___16444 = (function (){
/**
 * When added to a characteristic, it is marked as pending.  If a message is provided it will be printed
 *   in the run report
 */
speclj.core.pending = (function speclj$core$pending(var_args){
var G__16433 = arguments.length;
switch (G__16433) {
case 2:
return speclj.core.pending.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.core.pending.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.pending.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","pending","speclj.core/pending",-571433532,null),null,(1),null)),(new cljs.core.List(null,"Not Yet Implemented",null,(1),null)))));
}));

(speclj.core.pending.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,message){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-pending","speclj.core/-new-pending",-74755942,null),null,(1),null)),(new cljs.core.List(null,message,null,(1),null))))),null,(1),null)))));
}));

(speclj.core.pending.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(speclj.core.pending.cljs$lang$macro = true);

var ret__5804__auto___16446 = (function (){
/**
 * Add tags to the containing context.  All values passed will be converted into keywords.  Contexts can be filtered
 *   at runtime by their tags.
 * 
 *   (tags :one :two)
 */
speclj.core.tags = (function speclj$core$tags(var_args){
var args__5755__auto__ = [];
var len__5749__auto___16447 = arguments.length;
var i__5750__auto___16448 = (0);
while(true){
if((i__5750__auto___16448 < len__5749__auto___16447)){
args__5755__auto__.push((arguments[i__5750__auto___16448]));

var G__16450 = (i__5750__auto___16448 + (1));
i__5750__auto___16448 = G__16450;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.tags.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,values){
var tag_kws = cljs.core.mapv.call(null,cljs.core.keyword,values);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mapv","cljs.core/mapv",433728488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.components","new-tag","speclj.components/new-tag",-1937226080,null),null,(1),null)),(new cljs.core.List(null,tag_kws,null,(1),null)))));
}));

(speclj.core.tags.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.tags.cljs$lang$applyTo = (function (seq16435){
var G__16436 = cljs.core.first.call(null,seq16435);
var seq16435__$1 = cljs.core.next.call(null,seq16435);
var G__16437 = cljs.core.first.call(null,seq16435__$1);
var seq16435__$2 = cljs.core.next.call(null,seq16435__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16436,G__16437,seq16435__$2);
}));

return null;
})()
;
(speclj.core.tags.cljs$lang$macro = true);

var ret__5804__auto___16455 = /**
 * Add this to describe/context blocks that use stubs.  It will set up a clean recording environment.
 */
speclj.core.with_stubs = (function speclj$core$with_stubs(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","around","speclj.core/around",649826642,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__16443__auto__","it__16443__auto__",1019257878,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","*stubbed-invocations*","speclj.stub/*stubbed-invocations*",-474598582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it__16443__auto__","it__16443__auto__",1019257878,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.with_stubs.cljs$lang$macro = true);

var ret__5804__auto___16456 = (function (){
/**
 * Creates a stub function.  Each call to the stub will be recorded and can later be looked up using the specified name.
 * 
 *   Options:
 *  :invoke - a function that will be invoked when the stub is invoked.  All the arguments passed to the stub will
 *    be passed to the :invoke value and its return value returned by the stub.
 *  :return - a value that will be returned by the stub.  This overrides the result of the :invoke value, if specified.
 *  :throw - an exception that will be thrown by the stub.
 */
speclj.core.stub = (function speclj$core$stub(var_args){
var G__16454 = arguments.length;
switch (G__16454) {
case 3:
return speclj.core.stub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.stub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.stub.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.stub.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))));
}));

(speclj.core.stub.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.stub.cljs$lang$macro = true);

var ret__5804__auto___16503 = (function (){
/**
 * Checks for invocations of the specified stub.
 * 
 *   Options:
 *  :times - the number of times the stub should have been invoked. nil means at least once. (default: nil)
 *  :with - a list of arguments that the stubs should have been invoked with.
 *    If not specified, anything goes.  Special expected arguments include:
 *     :* - matches anything
 *     a fn - matches when the actual is the same fn or calling fn with the actual argument returns true
 * 
 *   Example:
 *   (let [foo (stub :foo)]
 *  (should-have-invoked :foo {:with [1] :times 3}) ; fail
 *  (foo 1)
 *  (foo 2)
 *  (should-have-invoked :foo {:with [1] :times 3}) ; fail
 *  (should-have-invoked :foo {:with [1] :times 1}) ; pass
 *  (should-have-invoked :foo {:with [2] :times 1}) ; pass
 *  (should-have-invoked :foo {:times 3}) ; fail
 *  (should-have-invoked :foo {:times 2}) ; pass
 *  (should-have-invoked :foo {:times 1}) ; fail
 *  (should-have-invoked :foo {:with [1]}) ; pass
 *  (should-have-invoked :foo {:with [2]}) ; pass
 *  )
 */
speclj.core.should_have_invoked = (function speclj$core$should_have_invoked(var_args){
var G__16475 = arguments.length;
switch (G__16475) {
case 3:
return speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-have-invoked","speclj.core/should-have-invoked",-864349238,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.should_have_invoked.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16461__auto__","name__16461__auto__",-692218575,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16462__auto__","options__16462__auto__",1347932014,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16463__auto__","invocations__16463__auto__",-1913632730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","invocations-of","speclj.stub/invocations-of",1244579949,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16461__auto__","name__16461__auto__",-692218575,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16464__auto__","times__16464__auto__",-2062429956,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"times","times",1671571467),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16462__auto__","options__16462__auto__",1347932014,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__16465__auto__","times?__16465__auto__",-656142082,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16464__auto__","times__16464__auto__",-2062429956,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__16466__auto__","check-params?__16466__auto__",-958424692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16462__auto__","options__16462__auto__",1347932014,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16467__auto__","with__16467__auto__",-261801693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16462__auto__","options__16462__auto__",1347932014,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16467__auto__","with__16467__auto__",-261801693,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16467__auto__","with__16467__auto__",-261801693,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16467__auto__","with__16467__auto__",-261801693,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__16468__auto__","invocations-str__16468__auto__",1814853051,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16458__16469__auto__","p1__16458__16469__auto__",-1577007454,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16458__16469__auto__","p1__16458__16469__auto__",-1577007454,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"invocation",null,(1),null)),(new cljs.core.List(null,"invocations",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__16465__auto__","times?__16465__auto__",-656142082,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__16466__auto__","check-params?__16466__auto__",-958424692,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__16470__auto__","matching-invocations__16470__auto__",-412502775,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16459__16471__auto__","p1__16459__16471__auto__",626985956,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16467__auto__","with__16467__auto__",-261801693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16459__16471__auto__","p1__16459__16471__auto__",626985956,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16463__auto__","invocations__16463__auto__",-1913632730,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__16472__auto__","matching-count__16472__auto__",982001390,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__16470__auto__","matching-invocations__16470__auto__",-412502775,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16464__auto__","times__16464__auto__",-2062429956,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__16472__auto__","matching-count__16472__auto__",982001390,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16464__auto__","times__16464__auto__",-2062429956,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__16468__auto__","invocations-str__16468__auto__",1814853051,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16464__auto__","times__16464__auto__",-2062429956,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16461__auto__","name__16461__auto__",-692218575,null),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16467__auto__","with__16467__auto__",-261801693,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__16472__auto__","matching-count__16472__auto__",982001390,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__16468__auto__","invocations-str__16468__auto__",1814853051,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__16472__auto__","matching-count__16472__auto__",982001390,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__16466__auto__","check-params?__16466__auto__",-958424692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16460__16473__auto__","p1__16460__16473__auto__",936734184,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16467__auto__","with__16467__auto__",-261801693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16460__16473__auto__","p1__16460__16473__auto__",936734184,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16463__auto__","invocations__16463__auto__",-1913632730,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: invocation of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16461__auto__","name__16461__auto__",-692218575,null),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16467__auto__","with__16467__auto__",-261801693,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16463__auto__","invocations__16463__auto__",-1913632730,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__16465__auto__","times?__16465__auto__",-656142082,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16464__auto__","times__16464__auto__",-2062429956,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16463__auto__","invocations__16463__auto__",-1913632730,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16464__auto__","times__16464__auto__",-2062429956,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations-str__16468__auto__","invocations-str__16468__auto__",1814853051,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16464__auto__","times__16464__auto__",-2062429956,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16461__auto__","name__16461__auto__",-692218575,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16463__auto__","invocations__16463__auto__",-1913632730,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16463__auto__","invocations__16463__auto__",-1913632730,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: an invocation of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16461__auto__","name__16461__auto__",-692218575,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16463__auto__","invocations__16463__auto__",-1913632730,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_have_invoked.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.should_have_invoked.cljs$lang$macro = true);

var ret__5804__auto___16585 = (function (){
/**
 * Inverse of should-have-invoked.
 * 
 *   Options:
 *  :times - the number of times the stub should not have been invoked. nil means never. (default: nil)
 *  :with - a list of arguments that the stubs should not have been invoked with.
 *    If not specified, anything goes. Special expected arguments include:
 *     :* - matches anything
 *     a fn - matches when the actual is the same fn or calling fn with the actual argument returns true
 * 
 *   Example:
 *   (let [foo (stub :foo)]
 *  (should-not-have-invoked :foo {:with [1] :times 3}) ; pass
 *  (foo 1)
 *  (should-not-have-invoked :foo {:with [1] :times 3}) ; pass
 *  (should-not-have-invoked :foo {:with [1] :times 1}) ; fail
 *  (should-not-have-invoked :foo {:times 3}) ; pass
 *  (should-not-have-invoked :foo {:times 1}) ; fail
 *  (should-not-have-invoked :foo {:with [1]}) ; fail
 *  )
 */
speclj.core.should_not_have_invoked = (function speclj$core$should_not_have_invoked(var_args){
var G__16522 = arguments.length;
switch (G__16522) {
case 3:
return speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-have-invoked","speclj.core/should-not-have-invoked",1793584684,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)))));
}));

(speclj.core.should_not_have_invoked.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16508__auto__","name__16508__auto__",716028129,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16509__auto__","options__16509__auto__",783308716,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16510__auto__","invocations__16510__auto__",717516929,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","invocations-of","speclj.stub/invocations-of",1244579949,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16508__auto__","name__16508__auto__",716028129,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16511__auto__","times__16511__auto__",623304635,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"times","times",1671571467),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16509__auto__","options__16509__auto__",783308716,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__16512__auto__","times?__16512__auto__",1945883549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16511__auto__","times__16511__auto__",623304635,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__16513__auto__","check-params?__16513__auto__",-1657273086,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16509__auto__","options__16509__auto__",783308716,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16514__auto__","with__16514__auto__",1408503204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"with","with",-1536296876),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16509__auto__","options__16509__auto__",783308716,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16514__auto__","with__16514__auto__",1408503204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16514__auto__","with__16514__auto__",1408503204,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16514__auto__","with__16514__auto__",1408503204,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__16515__auto__","add-s__16515__auto__",-801859325,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16504__16516__auto__","p1__16504__16516__auto__",1065137812,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16504__16516__auto__","p1__16504__16516__auto__",1065137812,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null,"s",null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__16512__auto__","times?__16512__auto__",1945883549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__16513__auto__","check-params?__16513__auto__",-1657273086,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__16517__auto__","matching-invocations__16517__auto__",-1104198214,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16506__16518__auto__","p1__16506__16518__auto__",-1282578935,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16514__auto__","with__16514__auto__",1408503204,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16506__16518__auto__","p1__16506__16518__auto__",-1282578935,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16510__auto__","invocations__16510__auto__",717516929,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__16519__auto__","matching-count__16519__auto__",1777506584,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-invocations__16517__auto__","matching-invocations__16517__auto__",-1104198214,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16511__auto__","times__16511__auto__",623304635,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__16519__auto__","matching-count__16519__auto__",1777506584,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16508__auto__","name__16508__auto__",716028129,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16511__auto__","times__16511__auto__",623304635,null),null,(1),null)),(new cljs.core.List(null," time",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__16515__auto__","add-s__16515__auto__",-801859325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__16519__auto__","matching-count__16519__auto__",1777506584,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16514__auto__","with__16514__auto__",1408503204,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__16519__auto__","matching-count__16519__auto__",1777506584,null),null,(1),null)),(new cljs.core.List(null," invocation",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__16515__auto__","add-s__16515__auto__",-801859325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"matching-count__16519__auto__","matching-count__16519__auto__",1777506584,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times?__16512__auto__","times?__16512__auto__",1945883549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16511__auto__","times__16511__auto__",623304635,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16510__auto__","invocations__16510__auto__",717516929,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16508__auto__","name__16508__auto__",716028129,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16511__auto__","times__16511__auto__",623304635,null),null,(1),null)),(new cljs.core.List(null," time",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__16515__auto__","add-s__16515__auto__",-801859325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16511__auto__","times__16511__auto__",623304635,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16511__auto__","times__16511__auto__",623304635,null),null,(1),null)),(new cljs.core.List(null," invocation",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"add-s__16515__auto__","add-s__16515__auto__",-801859325,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"times__16511__auto__","times__16511__auto__",623304635,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"check-params?__16513__auto__","check-params?__16513__auto__",-1657273086,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16507__16520__auto__","p1__16507__16520__auto__",-2129066931,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","params-match?","speclj.stub/params-match?",-1909506443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16514__auto__","with__16514__auto__",1408503204,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__16507__16520__auto__","p1__16507__16520__auto__",-2129066931,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16510__auto__","invocations__16510__auto__",717516929,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16508__auto__","name__16508__auto__",716028129,null),null,(1),null)),(new cljs.core.List(null," not to have been invoked with ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"with__16514__auto__","with__16514__auto__",1408503204,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16510__auto__","invocations__16510__auto__",717516929,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16510__auto__","invocations__16510__auto__",717516929,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected: 0 invocations of ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"name__16508__auto__","name__16508__auto__",716028129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","endl","speclj.platform/endl",-1139771306,null),null,(1),null)),(new cljs.core.List(null,"     got: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"invocations__16510__auto__","invocations__16510__auto__",717516929,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_not_have_invoked.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(speclj.core.should_not_have_invoked.cljs$lang$macro = true);

speclj.core._STAR_bound_by_should_invoke_STAR_ = false;
var ret__5804__auto___16617 = speclj.core.bound_by_should_invoke_QMARK_ = (function speclj$core$bound_by_should_invoke_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","bound?","speclj.core/bound?",-726786538,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","*bound-by-should-invoke*","speclj.core/*bound-by-should-invoke*",-207459510,null),null,(1),null))))),null,(1),null)))));
});
(speclj.core.bound_by_should_invoke_QMARK_.cljs$lang$macro = true);

var ret__5804__auto___16627 = (function (){
speclj.core.with_stubbed_invocations = (function speclj$core$with_stubbed_invocations(var_args){
var args__5755__auto__ = [];
var len__5749__auto___16628 = arguments.length;
var i__5750__auto___16629 = (0);
while(true){
if((i__5750__auto___16629 < len__5749__auto___16628)){
args__5755__auto__.push((arguments[i__5750__auto___16629]));

var G__16630 = (i__5750__auto___16629 + (1));
i__5750__auto___16629 = G__16630;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return speclj.core.with_stubbed_invocations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(speclj.core.with_stubbed_invocations.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","bound-by-should-invoke?","speclj.platform/bound-by-should-invoke?",2142036973,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","*stubbed-invocations*","speclj.stub/*stubbed-invocations*",-474598582,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("speclj.platform","*bound-by-should-invoke*","speclj.platform/*bound-by-should-invoke*",-572267866,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
}));

(speclj.core.with_stubbed_invocations.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(speclj.core.with_stubbed_invocations.cljs$lang$applyTo = (function (seq16588){
var G__16589 = cljs.core.first.call(null,seq16588);
var seq16588__$1 = cljs.core.next.call(null,seq16588);
var G__16590 = cljs.core.first.call(null,seq16588__$1);
var seq16588__$2 = cljs.core.next.call(null,seq16588__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16589,G__16590,seq16588__$2);
}));

return null;
})()
;
(speclj.core.with_stubbed_invocations.cljs$lang$macro = true);

var ret__5804__auto___16635 = (function (){
/**
 * Creates a stub, and binds it to the specified var, evaluates the body, and checks the invocations.
 * 
 *   (should-invoke reverse {:with [1 2 3] :return []} (reverse [1 2 3]))
 * 
 *   See stub and should-have-invoked for valid options.
 */
speclj.core.should_invoke = (function speclj$core$should_invoke(var_args){
var args__5755__auto__ = [];
var len__5749__auto___16637 = arguments.length;
var i__5750__auto___16638 = (0);
while(true){
if((i__5750__auto___16638 < len__5749__auto___16637)){
args__5755__auto__.push((arguments[i__5750__auto___16638]));

var G__16639 = (i__5750__auto___16638 + (1));
i__5750__auto___16638 = G__16639;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return speclj.core.should_invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(speclj.core.should_invoke.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,options,body){
if(cljs.core.map_QMARK_.call(null,options)){
} else {
cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,"The second argument to should-invoke must be a map of options",null,(1),null))))),null,(1),null)))));
}

var var_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16600__auto__","options__16600__auto__",-411766161,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","with-stubbed-invocations","speclj.core/with-stubbed-invocations",-469130005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16600__auto__","options__16600__auto__",-411766161,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-have-invoked","speclj.core/should-have-invoked",-864349238,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16600__auto__","options__16600__auto__",-411766161,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_invoke.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.should_invoke.cljs$lang$applyTo = (function (seq16601){
var G__16602 = cljs.core.first.call(null,seq16601);
var seq16601__$1 = cljs.core.next.call(null,seq16601);
var G__16603 = cljs.core.first.call(null,seq16601__$1);
var seq16601__$2 = cljs.core.next.call(null,seq16601__$1);
var G__16604 = cljs.core.first.call(null,seq16601__$2);
var seq16601__$3 = cljs.core.next.call(null,seq16601__$2);
var G__16605 = cljs.core.first.call(null,seq16601__$3);
var seq16601__$4 = cljs.core.next.call(null,seq16601__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16602,G__16603,G__16604,G__16605,seq16601__$4);
}));

return null;
})()
;
(speclj.core.should_invoke.cljs$lang$macro = true);

var ret__5804__auto___16646 = (function (){
/**
 * Creates a stub, and binds it to the specified var, evaluates the body, and checks that it was NOT invoked.
 * 
 *   (should-not-invoke reverse {:with [1 2 3] :return [] :times 2} (reverse [1 2 3])) ; pass
 *   (should-not-invoke reverse {:with [1 2 3] :return []} (reverse [1 2 3])) ; fail
 * 
 *   See stub and should-not-have-invoked for valid options.
 */
speclj.core.should_not_invoke = (function speclj$core$should_not_invoke(var_args){
var args__5755__auto__ = [];
var len__5749__auto___16647 = arguments.length;
var i__5750__auto___16648 = (0);
while(true){
if((i__5750__auto___16648 < len__5749__auto___16647)){
args__5755__auto__.push((arguments[i__5750__auto___16648]));

var G__16649 = (i__5750__auto___16648 + (1));
i__5750__auto___16648 = G__16649;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return speclj.core.should_not_invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(speclj.core.should_not_invoke.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,options,body){
if(cljs.core.map_QMARK_.call(null,options)){
} else {
cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,"The second argument to should-not-invoke must be a map of options",null,(1),null))))),null,(1),null)))));
}

var var_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16616__auto__","options__16616__auto__",726214451,null),null,(1),null)),(new cljs.core.List(null,options,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","with-stubbed-invocations","speclj.core/with-stubbed-invocations",-469130005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.stub","stub","speclj.stub/stub",977871771,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16616__auto__","options__16616__auto__",726214451,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","should-not-have-invoked","speclj.core/should-not-have-invoked",1793584684,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"options__16616__auto__","options__16616__auto__",726214451,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(speclj.core.should_not_invoke.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(speclj.core.should_not_invoke.cljs$lang$applyTo = (function (seq16618){
var G__16619 = cljs.core.first.call(null,seq16618);
var seq16618__$1 = cljs.core.next.call(null,seq16618);
var G__16620 = cljs.core.first.call(null,seq16618__$1);
var seq16618__$2 = cljs.core.next.call(null,seq16618__$1);
var G__16621 = cljs.core.first.call(null,seq16618__$2);
var seq16618__$3 = cljs.core.next.call(null,seq16618__$2);
var G__16622 = cljs.core.first.call(null,seq16618__$3);
var seq16618__$4 = cljs.core.next.call(null,seq16618__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16619,G__16620,G__16621,G__16622,seq16618__$4);
}));

return null;
})()
;
(speclj.core.should_not_invoke.cljs$lang$macro = true);

var ret__5804__auto___16658 = /**
 * Asserts that the first numeric form is less than the second numeric form, using the built-in < function.
 */
speclj.core.should_LT_ = (function speclj$core$should_LT_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16644__auto__","a__16644__auto__",1766434252,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16645__auto__","b__16645__auto__",-398244366,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16644__auto__","a__16644__auto__",1766434252,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16645__auto__","b__16645__auto__",-398244366,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16644__auto__","a__16644__auto__",1766434252,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16645__auto__","b__16645__auto__",-398244366,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16644__auto__","a__16644__auto__",1766434252,null),null,(1),null)),(new cljs.core.List(null," to be less than ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16645__auto__","b__16645__auto__",-398244366,null),null,(1),null)),(new cljs.core.List(null," but got: (< ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16644__auto__","a__16644__auto__",1766434252,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16645__auto__","b__16645__auto__",-398244366,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should<",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16644__auto__","a__16644__auto__",1766434252,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16645__auto__","b__16645__auto__",-398244366,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_LT_.cljs$lang$macro = true);

var ret__5804__auto___16667 = /**
 * Asserts that the first numeric form is greater than the second numeric form, using the built-in > function.
 */
speclj.core.should_GT_ = (function speclj$core$should_GT_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16655__auto__","a__16655__auto__",2000543585,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16656__auto__","b__16656__auto__",-84414882,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16655__auto__","a__16655__auto__",2000543585,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16656__auto__","b__16656__auto__",-84414882,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16655__auto__","a__16655__auto__",2000543585,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16656__auto__","b__16656__auto__",-84414882,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16655__auto__","a__16655__auto__",2000543585,null),null,(1),null)),(new cljs.core.List(null," to be greater than ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16656__auto__","b__16656__auto__",-84414882,null),null,(1),null)),(new cljs.core.List(null," but got: (> ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16655__auto__","a__16655__auto__",2000543585,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16656__auto__","b__16656__auto__",-84414882,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should>",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16655__auto__","a__16655__auto__",2000543585,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16656__auto__","b__16656__auto__",-84414882,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_GT_.cljs$lang$macro = true);

var ret__5804__auto___16713 = /**
 * Asserts that the first numeric form is less than or equal to the second numeric form, using the built-in <= function.
 */
speclj.core.should_LT__EQ_ = (function speclj$core$should_LT__EQ_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16668__auto__","a__16668__auto__",1308164608,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16669__auto__","b__16669__auto__",1378546979,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16668__auto__","a__16668__auto__",1308164608,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16669__auto__","b__16669__auto__",1378546979,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16668__auto__","a__16668__auto__",1308164608,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16669__auto__","b__16669__auto__",1378546979,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16668__auto__","a__16668__auto__",1308164608,null),null,(1),null)),(new cljs.core.List(null," to be less than or equal to ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16669__auto__","b__16669__auto__",1378546979,null),null,(1),null)),(new cljs.core.List(null," but got: (<= ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16668__auto__","a__16668__auto__",1308164608,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16669__auto__","b__16669__auto__",1378546979,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should<=",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16668__auto__","a__16668__auto__",1308164608,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16669__auto__","b__16669__auto__",1378546979,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_LT__EQ_.cljs$lang$macro = true);

var ret__5804__auto___16741 = /**
 * Asserts that the first numeric form is greater than or equal to the second numeric form, using the built-in >= function.
 */
speclj.core.should_GT__EQ_ = (function speclj$core$should_GT__EQ_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","help-should","speclj.core/help-should",-1915214045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16714__auto__","a__16714__auto__",1727153572,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16715__auto__","b__16715__auto__",2079181057,null),null,(1),null)),(new cljs.core.List(null,b,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16714__auto__","a__16714__auto__",1727153572,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16715__auto__","b__16715__auto__",2079181057,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16714__auto__","a__16714__auto__",1727153572,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16715__auto__","b__16715__auto__",2079181057,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-fail","speclj.core/-fail",-436223201,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"expected ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16714__auto__","a__16714__auto__",1727153572,null),null,(1),null)),(new cljs.core.List(null," to be greater than or equal to ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16715__auto__","b__16715__auto__",2079181057,null),null,(1),null)),(new cljs.core.List(null," but got: (>= ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16714__auto__","a__16714__auto__",1727153572,null),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16715__auto__","b__16715__auto__",2079181057,null),null,(1),null)),(new cljs.core.List(null,")",null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","-new-exception","speclj.core/-new-exception",-969354487,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","wrong-types","speclj.core/wrong-types",408672787,null),null,(1),null)),(new cljs.core.List(null,"should>=",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__16714__auto__","a__16714__auto__",1727153572,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b__16715__auto__","b__16715__auto__",2079181057,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.should_GT__EQ_.cljs$lang$macro = true);

var ret__5804__auto___16757 = speclj.core.run_specs = (function speclj$core$run_specs(_AMPERSAND_form,_AMPERSAND_env){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.core","if-cljs","speclj.core/if-cljs",873977502,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","comment","cljs.core/comment",1774254937,null),null,(1),null)),(new cljs.core.List(null,"Ignoring run-specs for clojurescript",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","require","cljs.core/require",2107770869,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"speclj.cli","speclj.cli",1577675379,null),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("speclj.run.standard","run-specs","speclj.run.standard/run-specs",-1568794497,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(speclj.core.run_specs.cljs$lang$macro = true);


//# sourceMappingURL=core.js.map
