// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.computer.medium');
goog.require('cljs.core');
goog.require('tic_tac_toe.computer.easy');
goog.require('tic_tac_toe.computer.hard');
goog.require('tic_tac_toe.core');
cljs.core._add_method.call(null,tic_tac_toe.core.take_computer_turn,new cljs.core.Keyword(null,"medium","medium",-1864319384),(function (state){
var tenth_percent = cljs.core.rand_int.call(null,(10));
if((tenth_percent === (0))){
return tic_tac_toe.computer.easy.easy.call(null,state);
} else {
return tic_tac_toe.computer.hard.hard.call(null,state);
}
}));

//# sourceMappingURL=medium.js.map
