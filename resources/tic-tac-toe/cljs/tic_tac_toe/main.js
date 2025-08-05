// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main');
goog.require('cljs.core');
goog.require('tic_tac_toe.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('c3kit.wire.js');
goog.require('tic_tac_toe.computer.hard');
goog.require('tic_tac_toe.computer.easy');
goog.require('tic_tac_toe.computer.medium');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.main !== 'undefined') && (typeof tic_tac_toe.main.state !== 'undefined')){
} else {
tic_tac_toe.main.state = reagent.core.atom.call(null,tic_tac_toe.core.initial_state.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interface","interface",394869923),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"ratom","ratom",-126521267),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"welcome","welcome",-578152123)], null)));
}
tic_tac_toe.main.status_cursor = reagent.core.cursor.call(null,tic_tac_toe.main.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null));
cljs.core._add_method.call(null,tic_tac_toe.core.save_game,new cljs.core.Keyword(null,"ratom","ratom",-126521267),(function (state){
return state;
}));
cljs.core._add_method.call(null,tic_tac_toe.core.load_game,new cljs.core.Keyword(null,"ratom","ratom",-126521267),(function (state){
return state;
}));
cljs.core._add_method.call(null,tic_tac_toe.core.delete_save,new cljs.core.Keyword(null,"ratom","ratom",-126521267),(function (state){
return state;
}));
tic_tac_toe.main.play_again = (function tic_tac_toe$main$play_again(){
var new_state = tic_tac_toe.core.fresh_start.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state));
return cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new_state);
});
cljs.core._add_method.call(null,tic_tac_toe.core.take_human_turn,new cljs.core.Keyword(null,"static","static",1214358571),(function (state){
return tic_tac_toe.core.do_take_human_turn.call(null,state);
}));
tic_tac_toe.main.maybe_take_computer_turn = (function tic_tac_toe$main$maybe_take_computer_turn(){
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core.deref.call(null,tic_tac_toe.main.status_cursor))) && ((!(tic_tac_toe.core.currently_human_QMARK_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state))))))){
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,tic_tac_toe.core.play_turn_BANG_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state)));

if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state)))) && ((!(tic_tac_toe.core.currently_human_QMARK_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state))))))){
return setTimeout((function (){
return tic_tac_toe.main.maybe_take_computer_turn.call(null);
}),(200));
} else {
return null;
}
} else {
return null;
}
});
tic_tac_toe.main.configure_board_size = (function tic_tac_toe$main$configure_board_size(option){
var current_state = cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.Keyword(null,"response","response",-1068424192),option);
var new_state = tic_tac_toe.core.select_board.call(null,current_state);
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new_state);

cljs.core.reset_BANG_.call(null,tic_tac_toe.main.status_cursor,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));

return setTimeout((function (){
return tic_tac_toe.main.maybe_take_computer_turn.call(null);
}),(10));
});
tic_tac_toe.main.configure_o_difficulty = (function tic_tac_toe$main$configure_o_difficulty(option){
var current_state = cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.Keyword(null,"response","response",-1068424192),option);
var new_state = tic_tac_toe.core.config_o_difficulty.call(null,current_state);
return cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new_state);
});
tic_tac_toe.main.configure_x_difficulty = (function tic_tac_toe$main$configure_x_difficulty(option){
var current_state = cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.Keyword(null,"response","response",-1068424192),option);
var new_state = tic_tac_toe.core.config_x_difficulty.call(null,current_state);
return cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new_state);
});
tic_tac_toe.main.configure_o_type = (function tic_tac_toe$main$configure_o_type(option){
var current_state = cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.Keyword(null,"response","response",-1068424192),option);
var new_state = tic_tac_toe.core.config_o_type.call(null,current_state);
return cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new_state);
});
tic_tac_toe.main.configure_x_type = (function tic_tac_toe$main$configure_x_type(option){
var current_state = cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.Keyword(null,"response","response",-1068424192),option);
var new_state = tic_tac_toe.core.config_x_type.call(null,current_state);
return cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new_state);
});
tic_tac_toe.main.make_move = (function tic_tac_toe$main$make_move(value){
var current_state = cljs.core.assoc.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state),new cljs.core.Keyword(null,"response","response",-1068424192),value);
var new_state = cljs.core.dissoc.call(null,tic_tac_toe.core.play_turn_BANG_.call(null,current_state),new cljs.core.Keyword(null,"response","response",-1068424192));
cljs.core.reset_BANG_.call(null,tic_tac_toe.main.state,new_state);

return tic_tac_toe.main.maybe_take_computer_turn.call(null);
});
tic_tac_toe.main.render_cell = (function tic_tac_toe$main$render_cell(cell,cell_index,is_active_QMARK_,row_index){
var cell_number = ((cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state))) * (row_index - (1))) + cell_index);
var key = ["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_number)].join('');
var class$ = ((((cljs.core._EQ_.call(null,cell,"X")) || (cljs.core._EQ_.call(null,cell,"O"))))?"occupied":"empty");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"key","key",-1516042587),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.move-button","button.move-button",-1930686784),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),key,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,is_active_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.main.make_move.call(null,cell);
})], null),cell], null)], null);
});
tic_tac_toe.main.render_row = (function tic_tac_toe$main$render_row(row,row_index,is_active_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_index], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (p1__16016_SHARP_,p2__16015_SHARP_){
return tic_tac_toe.main.render_cell.call(null,p2__16015_SHARP_,(p1__16016_SHARP_ + (1)),is_active_QMARK_,row_index);
}),row))], null);
});
tic_tac_toe.main.render_board_table = (function tic_tac_toe$main$render_board_table(){
var is_active_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core.deref.call(null,tic_tac_toe.main.status_cursor))) && (tic_tac_toe.core.currently_human_QMARK_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state))));
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (p1__16018_SHARP_,p2__16017_SHARP_){
return tic_tac_toe.main.render_row.call(null,p2__16017_SHARP_,(p1__16018_SHARP_ + (1)),is_active_QMARK_);
}),board))], null)], null);
});
tic_tac_toe.main.render_game_announcement = (function tic_tac_toe$main$render_game_announcement(p__16021){
var map__16023 = p__16021;
var map__16023__$1 = cljs.core.__destructure_map.call(null,map__16023);
var status = cljs.core.get.call(null,map__16023__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var active_player_index = cljs.core.get.call(null,map__16023__$1,new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655));
var players = cljs.core.get.call(null,map__16023__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var current_char = cljs.core.get_in.call(null,players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_player_index,new cljs.core.Keyword(null,"character","character",380652989)], null));
var G__16024 = status;
var G__16024__$1 = (((G__16024 instanceof cljs.core.Keyword))?G__16024.fqn:null);
switch (G__16024__$1) {
case "in-progress":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.current-player","h2.current-player",1806252024),["Player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_char),"'s turn"].join('')], null);

break;
case "tie":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.game-over","h2.game-over",-1222909748),"It's a tie! Good game"], null);

break;
case "winner":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.game-over","h2.game-over",-1222909748),["Player ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_char)," wins! Good game"].join('')], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16024__$1)].join('')));

}
});
tic_tac_toe.main.draw_end = (function tic_tac_toe$main$draw_end(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-over","div.game-over",90680416),tic_tac_toe.main.render_game_announcement.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state)),tic_tac_toe.main.render_board_table.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-game",new cljs.core.Keyword(null,"class","class",-2030961996),"new-game",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.main.play_again.call(null);
})], null),"Play Again?"], null)], null);
});
tic_tac_toe.main.draw_board = (function tic_tac_toe$main$draw_board(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.in-progress","div.in-progress",216550153),tic_tac_toe.main.render_game_announcement.call(null,cljs.core.deref.call(null,tic_tac_toe.main.state)),tic_tac_toe.main.render_board_table.call(null)], null);
});
tic_tac_toe.main.draw_select_board = (function tic_tac_toe$main$draw_select_board(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select-board","div.select-board",-1674754796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Select Board Size"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.options","div.options",-1118306305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"board-3x3",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board-3x3",new cljs.core.Keyword(null,"board-option","board-option",305476525)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.main.configure_board_size.call(null,(3));
})], null),"3 x 3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"board-4x4",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board-4x4",new cljs.core.Keyword(null,"board-option","board-option",305476525)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.main.configure_board_size.call(null,(4));
})], null),"4 x 4"], null)], null)], null);
});
tic_tac_toe.main.draw_config_o_difficulty = (function tic_tac_toe$main$draw_config_o_difficulty(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.config-o-difficulty","div.config-o-difficulty",57245903),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Choose O's Difficulty"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.options","div.options",-1118306305),cljs.core.doall.call(null,(function (){var iter__5503__auto__ = (function tic_tac_toe$main$draw_config_o_difficulty_$_iter__16027(s__16028){
return (new cljs.core.LazySeq(null,(function (){
var s__16028__$1 = s__16028;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__16028__$1);
if(temp__5825__auto__){
var s__16028__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16028__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__16028__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__16030 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__16029 = (0);
while(true){
if((i__16029 < size__5502__auto__)){
var option = cljs.core._nth.call(null,c__5501__auto__,i__16029);
cljs.core.chunk_append.call(null,b__16030,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,option),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,new cljs.core.Keyword(null,"o-difficulty","o-difficulty",1887923991)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16029,option,c__5501__auto__,size__5502__auto__,b__16030,s__16028__$2,temp__5825__auto__){
return (function (){
return tic_tac_toe.main.configure_o_difficulty.call(null,option);
});})(i__16029,option,c__5501__auto__,size__5502__auto__,b__16030,s__16028__$2,temp__5825__auto__))
], null),cljs.core.name.call(null,option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,option)], null)));

var G__16047 = (i__16029 + (1));
i__16029 = G__16047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16030),tic_tac_toe$main$draw_config_o_difficulty_$_iter__16027.call(null,cljs.core.chunk_rest.call(null,s__16028__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16030),null);
}
} else {
var option = cljs.core.first.call(null,s__16028__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,option),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,new cljs.core.Keyword(null,"o-difficulty","o-difficulty",1887923991)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (option,s__16028__$2,temp__5825__auto__){
return (function (){
return tic_tac_toe.main.configure_o_difficulty.call(null,option);
});})(option,s__16028__$2,temp__5825__auto__))
], null),cljs.core.name.call(null,option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,option)], null)),tic_tac_toe$main$draw_config_o_difficulty_$_iter__16027.call(null,cljs.core.rest.call(null,s__16028__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,tic_tac_toe.core.difficulty_options);
})())], null)], null);
});
tic_tac_toe.main.draw_config_x_difficulty = (function tic_tac_toe$main$draw_config_x_difficulty(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.config-x-difficulty","div.config-x-difficulty",1835898741),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Choose X's Difficulty"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.options","div.options",-1118306305),cljs.core.doall.call(null,(function (){var iter__5503__auto__ = (function tic_tac_toe$main$draw_config_x_difficulty_$_iter__16034(s__16035){
return (new cljs.core.LazySeq(null,(function (){
var s__16035__$1 = s__16035;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__16035__$1);
if(temp__5825__auto__){
var s__16035__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16035__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__16035__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__16037 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__16036 = (0);
while(true){
if((i__16036 < size__5502__auto__)){
var option = cljs.core._nth.call(null,c__5501__auto__,i__16036);
cljs.core.chunk_append.call(null,b__16037,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,option),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,new cljs.core.Keyword(null,"x-difficulty","x-difficulty",1381668443)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16036,option,c__5501__auto__,size__5502__auto__,b__16037,s__16035__$2,temp__5825__auto__){
return (function (){
return tic_tac_toe.main.configure_x_difficulty.call(null,option);
});})(i__16036,option,c__5501__auto__,size__5502__auto__,b__16037,s__16035__$2,temp__5825__auto__))
], null),cljs.core.name.call(null,option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,option)], null)));

var G__16060 = (i__16036 + (1));
i__16036 = G__16060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16037),tic_tac_toe$main$draw_config_x_difficulty_$_iter__16034.call(null,cljs.core.chunk_rest.call(null,s__16035__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16037),null);
}
} else {
var option = cljs.core.first.call(null,s__16035__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,option),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,new cljs.core.Keyword(null,"x-difficulty","x-difficulty",1381668443)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (option,s__16035__$2,temp__5825__auto__){
return (function (){
return tic_tac_toe.main.configure_x_difficulty.call(null,option);
});})(option,s__16035__$2,temp__5825__auto__))
], null),cljs.core.name.call(null,option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,option)], null)),tic_tac_toe$main$draw_config_x_difficulty_$_iter__16034.call(null,cljs.core.rest.call(null,s__16035__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,tic_tac_toe.core.difficulty_options);
})())], null)], null);
});
tic_tac_toe.main.draw_config_o_type = (function tic_tac_toe$main$draw_config_o_type(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.config-o-type","div.config-o-type",-1085373184),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Choose O Player Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.options","div.options",-1118306305),(function (){var iter__5503__auto__ = (function tic_tac_toe$main$draw_config_o_type_$_iter__16038(s__16039){
return (new cljs.core.LazySeq(null,(function (){
var s__16039__$1 = s__16039;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__16039__$1);
if(temp__5825__auto__){
var s__16039__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16039__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__16039__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__16041 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__16040 = (0);
while(true){
if((i__16040 < size__5502__auto__)){
var option = cljs.core._nth.call(null,c__5501__auto__,i__16040);
cljs.core.chunk_append.call(null,b__16041,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,option),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,new cljs.core.Keyword(null,"o-type","o-type",-1512862507)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16040,option,c__5501__auto__,size__5502__auto__,b__16041,s__16039__$2,temp__5825__auto__){
return (function (){
return tic_tac_toe.main.configure_o_type.call(null,option);
});})(i__16040,option,c__5501__auto__,size__5502__auto__,b__16041,s__16039__$2,temp__5825__auto__))
], null),cljs.core.name.call(null,option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,option)], null)));

var G__16071 = (i__16040 + (1));
i__16040 = G__16071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16041),tic_tac_toe$main$draw_config_o_type_$_iter__16038.call(null,cljs.core.chunk_rest.call(null,s__16039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16041),null);
}
} else {
var option = cljs.core.first.call(null,s__16039__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,option),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,new cljs.core.Keyword(null,"o-type","o-type",-1512862507)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (option,s__16039__$2,temp__5825__auto__){
return (function (){
return tic_tac_toe.main.configure_o_type.call(null,option);
});})(option,s__16039__$2,temp__5825__auto__))
], null),cljs.core.name.call(null,option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,option)], null)),tic_tac_toe$main$draw_config_o_type_$_iter__16038.call(null,cljs.core.rest.call(null,s__16039__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,tic_tac_toe.core.player_options);
})()], null)], null);
});
tic_tac_toe.main.draw_config_x_type = (function tic_tac_toe$main$draw_config_x_type(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.config-x-type","div.config-x-type",1147441106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Choose X Player Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.options","div.options",-1118306305),(function (){var iter__5503__auto__ = (function tic_tac_toe$main$draw_config_x_type_$_iter__16054(s__16055){
return (new cljs.core.LazySeq(null,(function (){
var s__16055__$1 = s__16055;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__16055__$1);
if(temp__5825__auto__){
var s__16055__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16055__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__16055__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__16057 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__16056 = (0);
while(true){
if((i__16056 < size__5502__auto__)){
var option = cljs.core._nth.call(null,c__5501__auto__,i__16056);
cljs.core.chunk_append.call(null,b__16057,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,option),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,new cljs.core.Keyword(null,"x-type","x-type",-337186212)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16056,option,c__5501__auto__,size__5502__auto__,b__16057,s__16055__$2,temp__5825__auto__){
return (function (){
return tic_tac_toe.main.configure_x_type.call(null,option);
});})(i__16056,option,c__5501__auto__,size__5502__auto__,b__16057,s__16055__$2,temp__5825__auto__))
], null),cljs.core.name.call(null,option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,option)], null)));

var G__16075 = (i__16056 + (1));
i__16056 = G__16075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16057),tic_tac_toe$main$draw_config_x_type_$_iter__16054.call(null,cljs.core.chunk_rest.call(null,s__16055__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16057),null);
}
} else {
var option = cljs.core.first.call(null,s__16055__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name.call(null,option),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [option,new cljs.core.Keyword(null,"x-type","x-type",-337186212)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (option,s__16055__$2,temp__5825__auto__){
return (function (){
return tic_tac_toe.main.configure_x_type.call(null,option);
});})(option,s__16055__$2,temp__5825__auto__))
], null),cljs.core.name.call(null,option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,option)], null)),tic_tac_toe$main$draw_config_x_type_$_iter__16054.call(null,cljs.core.rest.call(null,s__16055__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,tic_tac_toe.core.player_options);
})()], null)], null);
});
tic_tac_toe.main.draw_welcome = (function tic_tac_toe$main$draw_welcome(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.welcome","div.welcome",1862697325),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"welcome"], null),"Welcome to Tic-Tac-Toe!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,tic_tac_toe.main.status_cursor,new cljs.core.Keyword(null,"config-x-type","config-x-type",-785668220));
})], null),"Start Game"], null)], null);
});
tic_tac_toe.main.game_component = (function tic_tac_toe$main$game_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tic-tac-toe-app","div.tic-tac-toe-app",1879441643),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.status_cursor),new cljs.core.Keyword(null,"welcome","welcome",-578152123)))?tic_tac_toe.main.draw_welcome.call(null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.status_cursor),new cljs.core.Keyword(null,"config-x-type","config-x-type",-785668220)))?tic_tac_toe.main.draw_config_x_type.call(null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.status_cursor),new cljs.core.Keyword(null,"config-o-type","config-o-type",127599360)))?tic_tac_toe.main.draw_config_o_type.call(null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.status_cursor),new cljs.core.Keyword(null,"config-x-difficulty","config-x-difficulty",-598657456)))?tic_tac_toe.main.draw_config_x_difficulty.call(null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.status_cursor),new cljs.core.Keyword(null,"config-o-difficulty","config-o-difficulty",-517527095)))?tic_tac_toe.main.draw_config_o_difficulty.call(null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.status_cursor),new cljs.core.Keyword(null,"select-board","select-board",-279755643)))?tic_tac_toe.main.draw_select_board.call(null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.status_cursor),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)))?tic_tac_toe.main.draw_board.call(null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.status_cursor),new cljs.core.Keyword(null,"tie","tie",-487201694)))?tic_tac_toe.main.draw_end.call(null):((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tic_tac_toe.main.status_cursor),new cljs.core.Keyword(null,"winner","winner",714604679)))?tic_tac_toe.main.draw_end.call(null):null)))))))))], null);
});
tic_tac_toe.main.init = (function tic_tac_toe$main$init(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.game_component], null),c3kit.wire.js.element_by_id.call(null,"app"));
});
goog.exportSymbol('tic_tac_toe.main.init', tic_tac_toe.main.init);

//# sourceMappingURL=main.js.map
