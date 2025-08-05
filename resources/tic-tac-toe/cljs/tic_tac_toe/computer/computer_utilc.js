// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.computer.computer_utilc');
goog.require('cljs.core');
goog.require('tic_tac_toe.board');
tic_tac_toe.computer.computer_utilc.get_possible_moves = (function tic_tac_toe$computer$computer_utilc$get_possible_moves(board){
if(cljs.core._EQ_.call(null,(2),tic_tac_toe.board.get_board_complexity.call(null,board))){
var iter__5503__auto__ = (function tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13268(s__13269){
return (new cljs.core.LazySeq(null,(function (){
var s__13269__$1 = s__13269;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__13269__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var x = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__13269__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13268_$_iter__13270(s__13271){
return (new cljs.core.LazySeq(null,((function (s__13269__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__13271__$1 = s__13271;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__13271__$1);
if(temp__5825__auto____$1){
var s__13271__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13271__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__13271__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__13273 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__13272 = (0);
while(true){
if((i__13272 < size__5502__auto__)){
var y = cljs.core._nth.call(null,c__5501__auto__,i__13272);
if(tic_tac_toe.board.available_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
cljs.core.chunk_append.call(null,b__13273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__13442 = (i__13272 + (1));
i__13272 = G__13442;
continue;
} else {
var G__13443 = (i__13272 + (1));
i__13272 = G__13443;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13273),tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13268_$_iter__13270.call(null,cljs.core.chunk_rest.call(null,s__13271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13273),null);
}
} else {
var y = cljs.core.first.call(null,s__13271__$2);
if(tic_tac_toe.board.available_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13268_$_iter__13270.call(null,cljs.core.rest.call(null,s__13271__$2)));
} else {
var G__13447 = cljs.core.rest.call(null,s__13271__$2);
s__13271__$1 = G__13447;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__13269__$1,x,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__13269__$1,x,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13268.call(null,cljs.core.rest.call(null,s__13269__$1)));
} else {
var G__13448 = cljs.core.rest.call(null,s__13269__$1);
s__13269__$1 = G__13448;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
} else {
var iter__5503__auto__ = (function tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13354(s__13355){
return (new cljs.core.LazySeq(null,(function (){
var s__13355__$1 = s__13355;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__13355__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var z = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__13355__$1,z,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13354_$_iter__13356(s__13357){
return (new cljs.core.LazySeq(null,((function (s__13355__$1,z,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__13357__$1 = s__13357;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__13357__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var x = cljs.core.first.call(null,xs__6385__auto____$1);
var iterys__5499__auto__ = ((function (s__13357__$1,s__13355__$1,x,xs__6385__auto____$1,temp__5825__auto____$1,z,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13354_$_iter__13356_$_iter__13358(s__13359){
return (new cljs.core.LazySeq(null,((function (s__13357__$1,s__13355__$1,x,xs__6385__auto____$1,temp__5825__auto____$1,z,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__13359__$1 = s__13359;
while(true){
var temp__5825__auto____$2 = cljs.core.seq.call(null,s__13359__$1);
if(temp__5825__auto____$2){
var s__13359__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13359__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__13359__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__13361 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__13360 = (0);
while(true){
if((i__13360 < size__5502__auto__)){
var y = cljs.core._nth.call(null,c__5501__auto__,i__13360);
if(tic_tac_toe.board.available_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null))){
cljs.core.chunk_append.call(null,b__13361,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null));

var G__13460 = (i__13360 + (1));
i__13360 = G__13460;
continue;
} else {
var G__13462 = (i__13360 + (1));
i__13360 = G__13462;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13361),tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13354_$_iter__13356_$_iter__13358.call(null,cljs.core.chunk_rest.call(null,s__13359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13361),null);
}
} else {
var y = cljs.core.first.call(null,s__13359__$2);
if(tic_tac_toe.board.available_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null),tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13354_$_iter__13356_$_iter__13358.call(null,cljs.core.rest.call(null,s__13359__$2)));
} else {
var G__13470 = cljs.core.rest.call(null,s__13359__$2);
s__13359__$1 = G__13470;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__13357__$1,s__13355__$1,x,xs__6385__auto____$1,temp__5825__auto____$1,z,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__13357__$1,s__13355__$1,x,xs__6385__auto____$1,temp__5825__auto____$1,z,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13354_$_iter__13356.call(null,cljs.core.rest.call(null,s__13357__$1)));
} else {
var G__13473 = cljs.core.rest.call(null,s__13357__$1);
s__13357__$1 = G__13473;
continue;
}
} else {
return null;
}
break;
}
});})(s__13355__$1,z,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__13355__$1,z,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$computer$computer_utilc$get_possible_moves_$_iter__13354.call(null,cljs.core.rest.call(null,s__13355__$1)));
} else {
var G__13477 = cljs.core.rest.call(null,s__13355__$1);
s__13355__$1 = G__13477;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
}
});

//# sourceMappingURL=computer_utilc.js.map
