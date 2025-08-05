// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.board');
goog.require('cljs.core');
tic_tac_toe.board.new_2d_board = (function tic_tac_toe$board$new_2d_board(size){
return cljs.core.mapv.call(null,cljs.core.vec,cljs.core.partition.call(null,size,cljs.core.range.call(null,(1),((size * size) + (1)))));
});
tic_tac_toe.board.new_3d_board = (function tic_tac_toe$board$new_3d_board(size){
return cljs.core.vec.call(null,(function (){var iter__5503__auto__ = (function tic_tac_toe$board$new_3d_board_$_iter__12817(s__12818){
return (new cljs.core.LazySeq(null,(function (){
var s__12818__$1 = s__12818;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__12818__$1);
if(temp__5825__auto__){
var s__12818__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12818__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__12818__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__12820 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__12819 = (0);
while(true){
if((i__12819 < size__5502__auto__)){
var z = cljs.core._nth.call(null,c__5501__auto__,i__12819);
cljs.core.chunk_append.call(null,b__12820,cljs.core.vec.call(null,(function (){var iter__5503__auto__ = ((function (i__12819,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__){
return (function tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12828(s__12829){
return (new cljs.core.LazySeq(null,((function (i__12819,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__){
return (function (){
var s__12829__$1 = s__12829;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__12829__$1);
if(temp__5825__auto____$1){
var s__12829__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12829__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first.call(null,s__12829__$2);
var size__5502__auto____$1 = cljs.core.count.call(null,c__5501__auto____$1);
var b__12831 = cljs.core.chunk_buffer.call(null,size__5502__auto____$1);
if((function (){var i__12830 = (0);
while(true){
if((i__12830 < size__5502__auto____$1)){
var x = cljs.core._nth.call(null,c__5501__auto____$1,i__12830);
cljs.core.chunk_append.call(null,b__12831,cljs.core.vec.call(null,(function (){var iter__5503__auto__ = ((function (i__12830,i__12819,x,c__5501__auto____$1,size__5502__auto____$1,b__12831,s__12829__$2,temp__5825__auto____$1,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__){
return (function tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12828_$_iter__12839(s__12840){
return (new cljs.core.LazySeq(null,((function (i__12830,i__12819,x,c__5501__auto____$1,size__5502__auto____$1,b__12831,s__12829__$2,temp__5825__auto____$1,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__){
return (function (){
var s__12840__$1 = s__12840;
while(true){
var temp__5825__auto____$2 = cljs.core.seq.call(null,s__12840__$1);
if(temp__5825__auto____$2){
var s__12840__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12840__$2)){
var c__5501__auto____$2 = cljs.core.chunk_first.call(null,s__12840__$2);
var size__5502__auto____$2 = cljs.core.count.call(null,c__5501__auto____$2);
var b__12842 = cljs.core.chunk_buffer.call(null,size__5502__auto____$2);
if((function (){var i__12841 = (0);
while(true){
if((i__12841 < size__5502__auto____$2)){
var y = cljs.core._nth.call(null,c__5501__auto____$2,i__12841);
cljs.core.chunk_append.call(null,b__12842,((((1) + y) + (size * x)) + ((size * size) * z)));

var G__12947 = (i__12841 + (1));
i__12841 = G__12947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12842),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12828_$_iter__12839.call(null,cljs.core.chunk_rest.call(null,s__12840__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12842),null);
}
} else {
var y = cljs.core.first.call(null,s__12840__$2);
return cljs.core.cons.call(null,((((1) + y) + (size * x)) + ((size * size) * z)),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12828_$_iter__12839.call(null,cljs.core.rest.call(null,s__12840__$2)));
}
} else {
return null;
}
break;
}
});})(i__12830,i__12819,x,c__5501__auto____$1,size__5502__auto____$1,b__12831,s__12829__$2,temp__5825__auto____$1,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__))
,null,null));
});})(i__12830,i__12819,x,c__5501__auto____$1,size__5502__auto____$1,b__12831,s__12829__$2,temp__5825__auto____$1,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__))
;
return iter__5503__auto__.call(null,cljs.core.range.call(null,size));
})()));

var G__12953 = (i__12830 + (1));
i__12830 = G__12953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12831),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12828.call(null,cljs.core.chunk_rest.call(null,s__12829__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12831),null);
}
} else {
var x = cljs.core.first.call(null,s__12829__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__5503__auto__ = ((function (i__12819,x,s__12829__$2,temp__5825__auto____$1,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__){
return (function tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12828_$_iter__12852(s__12853){
return (new cljs.core.LazySeq(null,((function (i__12819,x,s__12829__$2,temp__5825__auto____$1,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__){
return (function (){
var s__12853__$1 = s__12853;
while(true){
var temp__5825__auto____$2 = cljs.core.seq.call(null,s__12853__$1);
if(temp__5825__auto____$2){
var s__12853__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12853__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first.call(null,s__12853__$2);
var size__5502__auto____$1 = cljs.core.count.call(null,c__5501__auto____$1);
var b__12855 = cljs.core.chunk_buffer.call(null,size__5502__auto____$1);
if((function (){var i__12854 = (0);
while(true){
if((i__12854 < size__5502__auto____$1)){
var y = cljs.core._nth.call(null,c__5501__auto____$1,i__12854);
cljs.core.chunk_append.call(null,b__12855,((((1) + y) + (size * x)) + ((size * size) * z)));

var G__12964 = (i__12854 + (1));
i__12854 = G__12964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12855),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12828_$_iter__12852.call(null,cljs.core.chunk_rest.call(null,s__12853__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12855),null);
}
} else {
var y = cljs.core.first.call(null,s__12853__$2);
return cljs.core.cons.call(null,((((1) + y) + (size * x)) + ((size * size) * z)),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12828_$_iter__12852.call(null,cljs.core.rest.call(null,s__12853__$2)));
}
} else {
return null;
}
break;
}
});})(i__12819,x,s__12829__$2,temp__5825__auto____$1,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__))
,null,null));
});})(i__12819,x,s__12829__$2,temp__5825__auto____$1,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__))
;
return iter__5503__auto__.call(null,cljs.core.range.call(null,size));
})()),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12828.call(null,cljs.core.rest.call(null,s__12829__$2)));
}
} else {
return null;
}
break;
}
});})(i__12819,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__))
,null,null));
});})(i__12819,z,c__5501__auto__,size__5502__auto__,b__12820,s__12818__$2,temp__5825__auto__))
;
return iter__5503__auto__.call(null,cljs.core.range.call(null,size));
})()));

var G__12970 = (i__12819 + (1));
i__12819 = G__12970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12820),tic_tac_toe$board$new_3d_board_$_iter__12817.call(null,cljs.core.chunk_rest.call(null,s__12818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12820),null);
}
} else {
var z = cljs.core.first.call(null,s__12818__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__5503__auto__ = ((function (z,s__12818__$2,temp__5825__auto__){
return (function tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12865(s__12866){
return (new cljs.core.LazySeq(null,(function (){
var s__12866__$1 = s__12866;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__12866__$1);
if(temp__5825__auto____$1){
var s__12866__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12866__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__12866__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__12868 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__12867 = (0);
while(true){
if((i__12867 < size__5502__auto__)){
var x = cljs.core._nth.call(null,c__5501__auto__,i__12867);
cljs.core.chunk_append.call(null,b__12868,cljs.core.vec.call(null,(function (){var iter__5503__auto__ = ((function (i__12867,x,c__5501__auto__,size__5502__auto__,b__12868,s__12866__$2,temp__5825__auto____$1,z,s__12818__$2,temp__5825__auto__){
return (function tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12865_$_iter__12869(s__12870){
return (new cljs.core.LazySeq(null,((function (i__12867,x,c__5501__auto__,size__5502__auto__,b__12868,s__12866__$2,temp__5825__auto____$1,z,s__12818__$2,temp__5825__auto__){
return (function (){
var s__12870__$1 = s__12870;
while(true){
var temp__5825__auto____$2 = cljs.core.seq.call(null,s__12870__$1);
if(temp__5825__auto____$2){
var s__12870__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12870__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first.call(null,s__12870__$2);
var size__5502__auto____$1 = cljs.core.count.call(null,c__5501__auto____$1);
var b__12872 = cljs.core.chunk_buffer.call(null,size__5502__auto____$1);
if((function (){var i__12871 = (0);
while(true){
if((i__12871 < size__5502__auto____$1)){
var y = cljs.core._nth.call(null,c__5501__auto____$1,i__12871);
cljs.core.chunk_append.call(null,b__12872,((((1) + y) + (size * x)) + ((size * size) * z)));

var G__12987 = (i__12871 + (1));
i__12871 = G__12987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12872),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12865_$_iter__12869.call(null,cljs.core.chunk_rest.call(null,s__12870__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12872),null);
}
} else {
var y = cljs.core.first.call(null,s__12870__$2);
return cljs.core.cons.call(null,((((1) + y) + (size * x)) + ((size * size) * z)),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12865_$_iter__12869.call(null,cljs.core.rest.call(null,s__12870__$2)));
}
} else {
return null;
}
break;
}
});})(i__12867,x,c__5501__auto__,size__5502__auto__,b__12868,s__12866__$2,temp__5825__auto____$1,z,s__12818__$2,temp__5825__auto__))
,null,null));
});})(i__12867,x,c__5501__auto__,size__5502__auto__,b__12868,s__12866__$2,temp__5825__auto____$1,z,s__12818__$2,temp__5825__auto__))
;
return iter__5503__auto__.call(null,cljs.core.range.call(null,size));
})()));

var G__12989 = (i__12867 + (1));
i__12867 = G__12989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12868),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12865.call(null,cljs.core.chunk_rest.call(null,s__12866__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12868),null);
}
} else {
var x = cljs.core.first.call(null,s__12866__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__5503__auto__ = ((function (x,s__12866__$2,temp__5825__auto____$1,z,s__12818__$2,temp__5825__auto__){
return (function tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12865_$_iter__12910(s__12911){
return (new cljs.core.LazySeq(null,(function (){
var s__12911__$1 = s__12911;
while(true){
var temp__5825__auto____$2 = cljs.core.seq.call(null,s__12911__$1);
if(temp__5825__auto____$2){
var s__12911__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12911__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__12911__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__12913 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__12912 = (0);
while(true){
if((i__12912 < size__5502__auto__)){
var y = cljs.core._nth.call(null,c__5501__auto__,i__12912);
cljs.core.chunk_append.call(null,b__12913,((((1) + y) + (size * x)) + ((size * size) * z)));

var G__12998 = (i__12912 + (1));
i__12912 = G__12998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12913),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12865_$_iter__12910.call(null,cljs.core.chunk_rest.call(null,s__12911__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12913),null);
}
} else {
var y = cljs.core.first.call(null,s__12911__$2);
return cljs.core.cons.call(null,((((1) + y) + (size * x)) + ((size * size) * z)),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12865_$_iter__12910.call(null,cljs.core.rest.call(null,s__12911__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x,s__12866__$2,temp__5825__auto____$1,z,s__12818__$2,temp__5825__auto__))
;
return iter__5503__auto__.call(null,cljs.core.range.call(null,size));
})()),tic_tac_toe$board$new_3d_board_$_iter__12817_$_iter__12865.call(null,cljs.core.rest.call(null,s__12866__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(z,s__12818__$2,temp__5825__auto__))
;
return iter__5503__auto__.call(null,cljs.core.range.call(null,size));
})()),tic_tac_toe$board$new_3d_board_$_iter__12817.call(null,cljs.core.rest.call(null,s__12818__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,size));
})());
});
tic_tac_toe.board.get_size_complexity = (function tic_tac_toe$board$get_size_complexity(size){
if(cljs.core.sequential_QMARK_.call(null,size)){
return cljs.core.count.call(null,size);
} else {
return new cljs.core.Keyword(null,"single-digit","single-digit",1119604737);
}
});
tic_tac_toe.board.new_board = (function tic_tac_toe$board$new_board(size){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"single-digit","single-digit",1119604737),tic_tac_toe.board.get_size_complexity.call(null,size))){
return tic_tac_toe.board.new_2d_board.call(null,size);
} else {
return tic_tac_toe.board.new_3d_board.call(null,cljs.core.first.call(null,size));
}
});
tic_tac_toe.board.available_QMARK_ = (function tic_tac_toe$board$available_QMARK_(board,coordinates){
return typeof cljs.core.get_in.call(null,board,coordinates) === 'number';
});
tic_tac_toe.board.play_options = (function tic_tac_toe$board$play_options(board){
return cljs.core.filter.call(null,cljs.core.number_QMARK_,cljs.core.flatten.call(null,board));
});
tic_tac_toe.board.next_player = (function tic_tac_toe$board$next_player(board){
var flat_board = cljs.core.flatten.call(null,board);
var played = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.string_QMARK_,flat_board));
if(cljs.core.even_QMARK_.call(null,played)){
return "X";
} else {
return "O";
}
});
tic_tac_toe.board.space__GT_2d_coordinates = (function tic_tac_toe$board$space__GT_2d_coordinates(number,board){
var width = cljs.core.count.call(null,board);
var x = cljs.core.quot.call(null,(number - (1)),width);
var y = cljs.core.rem.call(null,(number - (1)),width);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
tic_tac_toe.board.space__GT_3d_coordinates = (function tic_tac_toe$board$space__GT_3d_coordinates(number,board){
var single_dimension = cljs.core.count.call(null,board);
var single_slice = (single_dimension * single_dimension);
var z = cljs.core.quot.call(null,(number - (1)),single_slice);
var one_board = cljs.core.rem.call(null,(number - (1)),single_slice);
var x = cljs.core.quot.call(null,one_board,single_dimension);
var y = cljs.core.rem.call(null,one_board,single_dimension);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null);
});
tic_tac_toe.board.board_3d_QMARK_ = (function tic_tac_toe$board$board_3d_QMARK_(board){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,cljs.core.first.call(null,board)));
});
tic_tac_toe.board.get_board_complexity = (function tic_tac_toe$board$get_board_complexity(board){
if(tic_tac_toe.board.board_3d_QMARK_.call(null,board)){
return (3);
} else {
return (2);
}
});
tic_tac_toe.board.space__GT_coordinates = (function tic_tac_toe$board$space__GT_coordinates(number,board){
if(cljs.core._EQ_.call(null,(2),tic_tac_toe.board.get_board_complexity.call(null,board))){
return tic_tac_toe.board.space__GT_2d_coordinates.call(null,number,board);
} else {
return tic_tac_toe.board.space__GT_3d_coordinates.call(null,number,board);
}
});
tic_tac_toe.board.take_square = (function tic_tac_toe$board$take_square(board,coordinates,character){
if(tic_tac_toe.board.available_QMARK_.call(null,board,coordinates)){
return cljs.core.assoc_in.call(null,board,coordinates,character);
} else {
return board;
}
});
tic_tac_toe.board.any_space_available_QMARK_ = (function tic_tac_toe$board$any_space_available_QMARK_(board){
return cljs.core.some.call(null,cljs.core.number_QMARK_,cljs.core.flatten.call(null,board));
});
tic_tac_toe.board.all_matching_QMARK_ = (function tic_tac_toe$board$all_matching_QMARK_(collection,character){
return cljs.core.every_QMARK_.call(null,(function (p1__12955_SHARP_){
return cljs.core._EQ_.call(null,p1__12955_SHARP_,character);
}),collection);
});
tic_tac_toe.board.win_row_QMARK_ = (function tic_tac_toe$board$win_row_QMARK_(board,character){
return cljs.core.some.call(null,(function (p1__12957_SHARP_){
return tic_tac_toe.board.all_matching_QMARK_.call(null,p1__12957_SHARP_,character);
}),board);
});
tic_tac_toe.board.win_column_QMARK_ = (function tic_tac_toe$board$win_column_QMARK_(board,character){
return tic_tac_toe.board.win_row_QMARK_.call(null,cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,board),character);
});
tic_tac_toe.board.next_location = (function tic_tac_toe$board$next_location(location,step){
return cljs.core.mapv.call(null,cljs.core._PLUS_,location,step);
});
tic_tac_toe.board.win_diag_QMARK_ = (function tic_tac_toe$board$win_diag_QMARK_(board,character){
var diag = cljs.core.take.call(null,cljs.core.count.call(null,board),cljs.core.iterate.call(null,cljs.core.partial.call(null,tic_tac_toe.board.next_location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
var ortho_diag = cljs.core.take.call(null,cljs.core.count.call(null,board),cljs.core.iterate.call(null,cljs.core.partial.call(null,tic_tac_toe.board.next_location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(cljs.core.count.call(null,board) - (1))], null)));
return ((cljs.core.every_QMARK_.call(null,(function (p1__12963_SHARP_){
return cljs.core._EQ_.call(null,character,cljs.core.get_in.call(null,board,p1__12963_SHARP_));
}),diag)) || (cljs.core.every_QMARK_.call(null,(function (p1__12966_SHARP_){
return cljs.core._EQ_.call(null,character,cljs.core.get_in.call(null,board,p1__12966_SHARP_));
}),ortho_diag)));
});
tic_tac_toe.board.winner_2d_QMARK_ = (function tic_tac_toe$board$winner_2d_QMARK_(board,character){
var or__5025__auto__ = tic_tac_toe.board.win_row_QMARK_.call(null,board,character);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = tic_tac_toe.board.win_column_QMARK_.call(null,board,character);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return tic_tac_toe.board.win_diag_QMARK_.call(null,board,character);
}
}
});
tic_tac_toe.board.win_3d_panel_QMARK_ = (function tic_tac_toe$board$win_3d_panel_QMARK_(board,character){
return cljs.core.some.call(null,(function (p1__12974_SHARP_){
return tic_tac_toe.board.winner_2d_QMARK_.call(null,p1__12974_SHARP_,character);
}),board);
});
tic_tac_toe.board.get_z_line = (function tic_tac_toe$board$get_z_line(board,p__12978){
var vec__12979 = p__12978;
var x = cljs.core.nth.call(null,vec__12979,(0),null);
var y = cljs.core.nth.call(null,vec__12979,(1),null);
var start = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x,y], null);
var step = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null);
var z_line_coordinates = cljs.core.take.call(null,cljs.core.count.call(null,board),cljs.core.iterate.call(null,cljs.core.partial.call(null,tic_tac_toe.board.next_location,step),start));
return cljs.core.map.call(null,(function (p1__12977_SHARP_){
return cljs.core.get_in.call(null,board,p1__12977_SHARP_);
}),z_line_coordinates);
});
tic_tac_toe.board.get_z_lines = (function tic_tac_toe$board$get_z_lines(board){
var xy_pairs = cljs.core.mapcat.call(null,(function (p1__12985_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.vector,p1__12985_SHARP_),cljs.core.range.call(null,cljs.core.count.call(null,board)));
}),cljs.core.range.call(null,cljs.core.count.call(null,board)));
return cljs.core.map.call(null,(function (p1__12986_SHARP_){
return tic_tac_toe.board.get_z_line.call(null,board,p1__12986_SHARP_);
}),xy_pairs);
});
tic_tac_toe.board.win_3d_z_line_QMARK_ = (function tic_tac_toe$board$win_3d_z_line_QMARK_(board,character){
var z_lines = tic_tac_toe.board.get_z_lines.call(null,board);
return cljs.core.some.call(null,(function (p1__12988_SHARP_){
return tic_tac_toe.board.all_matching_QMARK_.call(null,p1__12988_SHARP_,character);
}),z_lines);
});
tic_tac_toe.board.z_line_lines = (function tic_tac_toe$board$z_line_lines(p__12990,size){
var vec__12994 = p__12990;
var x = cljs.core.nth.call(null,vec__12994,(0),null);
var y = cljs.core.nth.call(null,vec__12994,(1),null);
var start = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x,y], null);
var step = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null);
return cljs.core.vec.call(null,cljs.core.take.call(null,size,cljs.core.iterate.call(null,cljs.core.partial.call(null,tic_tac_toe.board.next_location,step),start)));
});
tic_tac_toe.board.z_plane_diags = (function tic_tac_toe$board$z_plane_diags(z,size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,(0),(size - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(-1)], null)], null)], null);
});
tic_tac_toe.board.y_plane_diags = (function tic_tac_toe$board$y_plane_diags(y,size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size - (1)),(0),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(0)], null)], null)], null);
});
tic_tac_toe.board.x_plane_diags = (function tic_tac_toe$board$x_plane_diags(x,size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x,(size - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-1)], null)], null)], null);
});
tic_tac_toe.board.cube__GT_diag_start_steps = (function tic_tac_toe$board$cube__GT_diag_start_steps(size){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(size - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(-1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(size - (1)),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(size - (1)),(size - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(-1)], null)], null)], null);
});
tic_tac_toe.board.get_zs = (function tic_tac_toe$board$get_zs(board){
var xy_pairs = cljs.core.mapcat.call(null,(function (p1__12999_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.vector,p1__12999_SHARP_),cljs.core.range.call(null,cljs.core.count.call(null,board)));
}),cljs.core.range.call(null,cljs.core.count.call(null,board)));
return cljs.core.mapv.call(null,(function (p1__13000_SHARP_){
return tic_tac_toe.board.z_line_lines.call(null,p1__13000_SHARP_,cljs.core.count.call(null,board));
}),xy_pairs);
});
tic_tac_toe.board.__GT_line_coordinates = (function tic_tac_toe$board$__GT_line_coordinates(board,start,step){
return cljs.core.take.call(null,cljs.core.count.call(null,board),cljs.core.iterate.call(null,cljs.core.partial.call(null,tic_tac_toe.board.next_location,step),start));
});
tic_tac_toe.board.get_rows = (function tic_tac_toe$board$get_rows(board){
return cljs.core.mapv.call(null,(function (p1__13004_SHARP_){
return tic_tac_toe.board.__GT_line_coordinates.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13004_SHARP_,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,board)));
});
tic_tac_toe.board.get_cols = (function tic_tac_toe$board$get_cols(board){
return cljs.core.mapv.call(null,(function (p1__13005_SHARP_){
return tic_tac_toe.board.__GT_line_coordinates.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),p1__13005_SHARP_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
}),cljs.core.range.call(null,cljs.core.count.call(null,board)));
});
tic_tac_toe.board.get_diags = (function tic_tac_toe$board$get_diags(board){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.board.__GT_line_coordinates.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),tic_tac_toe.board.__GT_line_coordinates.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(cljs.core.count.call(null,board) - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null))], null);
});
tic_tac_toe.board.get_all_lines_2d = (function tic_tac_toe$board$get_all_lines_2d(board){
var rows = tic_tac_toe.board.get_rows.call(null,board);
var cols = tic_tac_toe.board.get_cols.call(null,board);
var diags = tic_tac_toe.board.get_diags.call(null,board);
return cljs.core.concat.call(null,rows,cols,diags);
});
tic_tac_toe.board.cube_diags = (function tic_tac_toe$board$cube_diags(size){
return tic_tac_toe.board.cube__GT_diag_start_steps.call(null,size);
});
tic_tac_toe.board.plane_x_diags = (function tic_tac_toe$board$plane_x_diags(size){
return cljs.core.mapcat.call(null,(function (p1__13006_SHARP_){
return tic_tac_toe.board.x_plane_diags.call(null,p1__13006_SHARP_,size);
}),cljs.core.range.call(null,size));
});
tic_tac_toe.board.plane_y_diags = (function tic_tac_toe$board$plane_y_diags(size){
return cljs.core.mapcat.call(null,(function (p1__13007_SHARP_){
return tic_tac_toe.board.y_plane_diags.call(null,p1__13007_SHARP_,size);
}),cljs.core.range.call(null,size));
});
tic_tac_toe.board.plane_z_diags = (function tic_tac_toe$board$plane_z_diags(size){
return cljs.core.mapcat.call(null,(function (p1__13008_SHARP_){
return tic_tac_toe.board.z_plane_diags.call(null,p1__13008_SHARP_,size);
}),cljs.core.range.call(null,size));
});
tic_tac_toe.board.get_all_3d_diags = (function tic_tac_toe$board$get_all_3d_diags(size){
return cljs.core.concat.call(null,tic_tac_toe.board.cube_diags.call(null,size),tic_tac_toe.board.plane_x_diags.call(null,size),tic_tac_toe.board.plane_y_diags.call(null,size),tic_tac_toe.board.plane_z_diags.call(null,size));
});
tic_tac_toe.board.line_maker = (function tic_tac_toe$board$line_maker(board,p__13009){
var vec__13010 = p__13009;
var start = cljs.core.nth.call(null,vec__13010,(0),null);
var step = cljs.core.nth.call(null,vec__13010,(1),null);
return tic_tac_toe.board.__GT_line_coordinates.call(null,board,start,step);
});
tic_tac_toe.board.instructions__GT_line_coords = (function tic_tac_toe$board$instructions__GT_line_coords(board,instructions){
return cljs.core.mapv.call(null,(function (p1__13014_SHARP_){
return tic_tac_toe.board.line_maker.call(null,board,p1__13014_SHARP_);
}),instructions);
});
tic_tac_toe.board.add_z_to_planes = (function tic_tac_toe$board$add_z_to_planes(z,coords_panel){
return cljs.core.map.call(null,(function (group){
return cljs.core.mapv.call(null,(function (coord){
return cljs.core.vec.call(null,cljs.core.cons.call(null,z,coord));
}),group);
}),coords_panel);
});
tic_tac_toe.board.get_all_lines_3d = (function tic_tac_toe$board$get_all_lines_3d(board){
var size = cljs.core.count.call(null,board);
var diags = tic_tac_toe.board.get_all_3d_diags.call(null,size);
var diag_line_coords = tic_tac_toe.board.instructions__GT_line_coords.call(null,board,diags);
var z_lines = tic_tac_toe.board.get_zs.call(null,board);
var panel_lines_2ds = cljs.core.mapv.call(null,(function (p1__13040_SHARP_){
return tic_tac_toe.board.get_all_lines_2d.call(null,p1__13040_SHARP_);
}),board);
var panel_lines = cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,tic_tac_toe.board.add_z_to_planes,panel_lines_2ds));
return cljs.core.concat.call(null,diag_line_coords,z_lines,panel_lines);
});
tic_tac_toe.board.get_all_lines = (function tic_tac_toe$board$get_all_lines(board){
if(tic_tac_toe.board.board_3d_QMARK_.call(null,board)){
return tic_tac_toe.board.get_all_lines_3d.call(null,board);
} else {
return tic_tac_toe.board.get_all_lines_2d.call(null,board);
}
});
tic_tac_toe.board.start_step__GT_values = (function tic_tac_toe$board$start_step__GT_values(board,start,step){
return cljs.core.map.call(null,(function (p1__13046_SHARP_){
return cljs.core.get_in.call(null,board,p1__13046_SHARP_);
}),tic_tac_toe.board.__GT_line_coordinates.call(null,board,start,step));
});
tic_tac_toe.board.win_3d_diag_QMARK_ = (function tic_tac_toe$board$win_3d_diag_QMARK_(board,character){
var size = cljs.core.count.call(null,board);
var all_diags = tic_tac_toe.board.get_all_3d_diags.call(null,size);
var diag_values = cljs.core.map.call(null,(function (p1__13048_SHARP_){
return tic_tac_toe.board.start_step__GT_values.call(null,board,cljs.core.first.call(null,p1__13048_SHARP_),cljs.core.second.call(null,p1__13048_SHARP_));
}),all_diags);
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__13049_SHARP_){
return tic_tac_toe.board.all_matching_QMARK_.call(null,p1__13049_SHARP_,character);
}),diag_values));
});
tic_tac_toe.board.winner_3d_QMARK_ = (function tic_tac_toe$board$winner_3d_QMARK_(board,character){
var or__5025__auto__ = tic_tac_toe.board.win_3d_panel_QMARK_.call(null,board,character);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = tic_tac_toe.board.win_3d_z_line_QMARK_.call(null,board,character);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return tic_tac_toe.board.win_3d_diag_QMARK_.call(null,board,character);
}
}
});
tic_tac_toe.board.winner_QMARK_ = (function tic_tac_toe$board$winner_QMARK_(board,character){
if(cljs.core._EQ_.call(null,(2),tic_tac_toe.board.get_board_complexity.call(null,board))){
return tic_tac_toe.board.winner_2d_QMARK_.call(null,board,character);
} else {
return tic_tac_toe.board.winner_3d_QMARK_.call(null,board,character);
}
});
tic_tac_toe.board.evaluate_board = (function tic_tac_toe$board$evaluate_board(p__13056){
var map__13058 = p__13056;
var map__13058__$1 = cljs.core.__destructure_map.call(null,map__13058);
var state = map__13058__$1;
var board = cljs.core.get.call(null,map__13058__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var active_player_index = cljs.core.get.call(null,map__13058__$1,new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655));
var players = cljs.core.get.call(null,map__13058__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
if(cljs.core.truth_(tic_tac_toe.board.winner_QMARK_.call(null,board,cljs.core.get_in.call(null,players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_player_index,new cljs.core.Keyword(null,"character","character",380652989)], null))))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"winner","winner",714604679));
} else {
if(cljs.core.not.call(null,tic_tac_toe.board.any_space_available_QMARK_.call(null,board))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"tie","tie",-487201694));
} else {
return state;

}
}
});

//# sourceMappingURL=board.js.map
