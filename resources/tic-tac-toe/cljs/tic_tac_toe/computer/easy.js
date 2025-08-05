// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.computer.easy');
goog.require('cljs.core');
goog.require('tic_tac_toe.computer.computer_utilc');
goog.require('tic_tac_toe.board');
goog.require('tic_tac_toe.core');
tic_tac_toe.computer.easy.easy = (function tic_tac_toe$computer$easy$easy(p__13560){
var map__13561 = p__13560;
var map__13561__$1 = cljs.core.__destructure_map.call(null,map__13561);
var state = map__13561__$1;
var board = cljs.core.get.call(null,map__13561__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var active_player_index = cljs.core.get.call(null,map__13561__$1,new cljs.core.Keyword(null,"active-player-index","active-player-index",-93298655));
var players = cljs.core.get.call(null,map__13561__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var move = cljs.core.first.call(null,cljs.core.shuffle.call(null,tic_tac_toe.computer.computer_utilc.get_possible_moves.call(null,board)));
var char$ = cljs.core.get_in.call(null,players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_player_index,new cljs.core.Keyword(null,"character","character",380652989)], null));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.board.take_square.call(null,board,move,char$));
});
cljs.core._add_method.call(null,tic_tac_toe.core.take_computer_turn,new cljs.core.Keyword(null,"easy","easy",315769928),(function (state){
return tic_tac_toe.computer.easy.easy.call(null,state);
}));

//# sourceMappingURL=easy.js.map
