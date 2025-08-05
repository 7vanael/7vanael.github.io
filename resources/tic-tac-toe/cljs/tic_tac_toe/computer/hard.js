// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.computer.hard');
goog.require('cljs.core');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.core');
goog.require('tic_tac_toe.computer.computer_utilc');
tic_tac_toe.computer.hard.eval_board = (function tic_tac_toe$computer$hard$eval_board(board,depth,comp_char,opp_char){
if(cljs.core.truth_(tic_tac_toe.board.winner_QMARK_.call(null,board,comp_char))){
return ((10) - depth);
} else {
if(cljs.core.truth_(tic_tac_toe.board.winner_QMARK_.call(null,board,opp_char))){
return (depth - (10));
} else {
return (0);

}
}
});
tic_tac_toe.computer.hard.done_QMARK_ = (function tic_tac_toe$computer$hard$done_QMARK_(open_spaces,board,char$,opp_char,depth,max_depth){
var or__5025__auto__ = cljs.core._EQ_.call(null,depth,max_depth);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.empty_QMARK_.call(null,open_spaces);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = tic_tac_toe.board.winner_QMARK_.call(null,board,char$);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return tic_tac_toe.board.winner_QMARK_.call(null,board,opp_char);
}
}
}
});
tic_tac_toe.computer.hard.calc_max_depth = (function tic_tac_toe$computer$hard$calc_max_depth(size){
if((size < (10))){
return (8);
} else {
if((size < (17))){
return (3);
} else {
return (2);

}
}
});
tic_tac_toe.computer.hard.minimax = (function tic_tac_toe$computer$hard$minimax(board,p__15737){
var map__15738 = p__15737;
var map__15738__$1 = cljs.core.__destructure_map.call(null,map__15738);
var config = map__15738__$1;
var char$ = cljs.core.get.call(null,map__15738__$1,new cljs.core.Keyword(null,"char","char",-641587586));
var opp_char = cljs.core.get.call(null,map__15738__$1,new cljs.core.Keyword(null,"opp-char","opp-char",526814483));
var current_player = cljs.core.get.call(null,map__15738__$1,new cljs.core.Keyword(null,"current-player","current-player",-970625153));
var depth = cljs.core.get.call(null,map__15738__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var max_depth = cljs.core.get.call(null,map__15738__$1,new cljs.core.Keyword(null,"max-depth","max-depth",127060793));
var open_spaces = tic_tac_toe.computer.computer_utilc.get_possible_moves.call(null,board);
if(cljs.core.truth_(tic_tac_toe.computer.hard.done_QMARK_.call(null,open_spaces,board,char$,opp_char,depth,max_depth))){
return tic_tac_toe.computer.hard.eval_board.call(null,board,depth,char$,opp_char);
} else {
var next_char = ((cljs.core._EQ_.call(null,current_player,char$))?opp_char:char$);
var next_config = cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"current-player","current-player",-970625153),next_char,new cljs.core.Keyword(null,"depth","depth",1768663640),(depth + (1)));
var outcomes = cljs.core.map.call(null,(function (p1__15736_SHARP_){
return tic_tac_toe.computer.hard.minimax.call(null,cljs.core.assoc_in.call(null,board,p1__15736_SHARP_,current_player),next_config);
}),open_spaces);
if(cljs.core._EQ_.call(null,current_player,char$)){
return cljs.core.apply.call(null,cljs.core.max,outcomes);
} else {
return cljs.core.apply.call(null,cljs.core.min,outcomes);
}
}
});
tic_tac_toe.computer.hard.winning_spaces = (function tic_tac_toe$computer$hard$winning_spaces(board,line,char$){
var values = cljs.core.map.call(null,(function (p1__15743_SHARP_){
return cljs.core.get_in.call(null,board,p1__15743_SHARP_);
}),line);
var avail_options = cljs.core.filter.call(null,(function (p1__15744_SHARP_){
return tic_tac_toe.board.available_QMARK_.call(null,board,p1__15744_SHARP_);
}),line);
var already_claimed_pos_in_line = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__15745_SHARP_){
return cljs.core._EQ_.call(null,char$,p1__15745_SHARP_);
}),values));
var size = cljs.core.count.call(null,board);
var only_one_space_left = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,avail_options));
var all_but_one_space_is_matching = cljs.core._EQ_.call(null,(size - (1)),already_claimed_pos_in_line);
if(((only_one_space_left) && (all_but_one_space_is_matching))){
return cljs.core.first.call(null,avail_options);
} else {
return null;
}
});
tic_tac_toe.computer.hard.winning_moves = (function tic_tac_toe$computer$hard$winning_moves(board,char$,score){
var all_lines = tic_tac_toe.board.get_all_lines.call(null,board);
var winnable_positions = cljs.core.keep.call(null,(function (p1__15761_SHARP_){
return tic_tac_toe.computer.hard.winning_spaces.call(null,board,p1__15761_SHARP_,char$);
}),all_lines);
return cljs.core.mapv.call(null,(function (space){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [space,score], null);
}),winnable_positions);
});
tic_tac_toe.computer.hard.eval_moves = (function tic_tac_toe$computer$hard$eval_moves(p__15769){
var map__15770 = p__15769;
var map__15770__$1 = cljs.core.__destructure_map.call(null,map__15770);
var board = cljs.core.get.call(null,map__15770__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var active_player_index = cljs.core.get.call(null,map__15770__$1,new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655));
var players = cljs.core.get.call(null,map__15770__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var moves = tic_tac_toe.computer.computer_utilc.get_possible_moves.call(null,board);
var char$ = cljs.core.get_in.call(null,players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_player_index,new cljs.core.Keyword(null,"character","character",380652989)], null));
var opp_char = ((cljs.core._EQ_.call(null,"X",char$))?"O":"X");
var max_depth = tic_tac_toe.computer.hard.calc_max_depth.call(null,cljs.core.count.call(null,cljs.core.flatten.call(null,board)));
var config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"char","char",-641587586),char$,new cljs.core.Keyword(null,"opp-char","opp-char",526814483),opp_char,new cljs.core.Keyword(null,"current-player","current-player",-970625153),opp_char,new cljs.core.Keyword(null,"depth","depth",1768663640),(0),new cljs.core.Keyword(null,"max-depth","max-depth",127060793),max_depth], null);
var scored_moves = cljs.core.map.call(null,(function (p1__15767_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__15767_SHARP_,tic_tac_toe.computer.hard.minimax.call(null,tic_tac_toe.board.take_square.call(null,board,p1__15767_SHARP_,char$),config)],null));
}),moves);
var best_score = cljs.core.second.call(null,cljs.core.apply.call(null,cljs.core.max_key,cljs.core.second,scored_moves));
var blocking_moves = tic_tac_toe.computer.hard.winning_moves.call(null,board,opp_char,(0));
if(((-7) > best_score)){
return blocking_moves;
} else {
return scored_moves;
}
});
tic_tac_toe.computer.hard.hard = (function tic_tac_toe$computer$hard$hard(p__15781){
var map__15782 = p__15781;
var map__15782__$1 = cljs.core.__destructure_map.call(null,map__15782);
var state = map__15782__$1;
var board = cljs.core.get.call(null,map__15782__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var active_player_index = cljs.core.get.call(null,map__15782__$1,new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655));
var players = cljs.core.get.call(null,map__15782__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var character = cljs.core.get_in.call(null,players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_player_index,new cljs.core.Keyword(null,"character","character",380652989)], null));
var next_play = (((((cljs.core.count.call(null,cljs.core.flatten.call(null,board)) > (16))) && (tic_tac_toe.board.available_QMARK_.call(null,board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null):cljs.core.first.call(null,cljs.core.apply.call(null,cljs.core.max_key,cljs.core.second,cljs.core.shuffle.call(null,tic_tac_toe.computer.hard.eval_moves.call(null,state)))));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.take_square.call(null,board,next_play,character));
});
cljs.core._add_method.call(null,tic_tac_toe.core.take_computer_turn,new cljs.core.Keyword(null,"hard","hard",2068420191),(function (state){
return tic_tac_toe.computer.hard.hard.call(null,state);
}));

//# sourceMappingURL=hard.js.map
