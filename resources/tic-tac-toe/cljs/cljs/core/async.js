// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11214 = arguments.length;
switch (G__11214) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11215 = (function (f,blockable,meta11216){
this.f = f;
this.blockable = blockable;
this.meta11216 = meta11216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11217,meta11216__$1){
var self__ = this;
var _11217__$1 = this;
return (new cljs.core.async.t_cljs$core$async11215(self__.f,self__.blockable,meta11216__$1));
}));

(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11217){
var self__ = this;
var _11217__$1 = this;
return self__.meta11216;
}));

(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11216","meta11216",1909587063,null)], null);
}));

(cljs.core.async.t_cljs$core$async11215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11215");

(cljs.core.async.t_cljs$core$async11215.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11215.
 */
cljs.core.async.__GT_t_cljs$core$async11215 = (function cljs$core$async$__GT_t_cljs$core$async11215(f__$1,blockable__$1,meta11216){
return (new cljs.core.async.t_cljs$core$async11215(f__$1,blockable__$1,meta11216));
});

}

return (new cljs.core.async.t_cljs$core$async11215(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__11221 = arguments.length;
switch (G__11221) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__11224 = arguments.length;
switch (G__11224) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__11227 = arguments.length;
switch (G__11227) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11234 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11234);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11234);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__11236 = arguments.length;
switch (G__11236) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___11247 = n;
var x_11248 = (0);
while(true){
if((x_11248 < n__5616__auto___11247)){
(a[x_11248] = x_11248);

var G__11249 = (x_11248 + (1));
x_11248 = G__11249;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11238 = (function (flag,meta11239){
this.flag = flag;
this.meta11239 = meta11239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11240,meta11239__$1){
var self__ = this;
var _11240__$1 = this;
return (new cljs.core.async.t_cljs$core$async11238(self__.flag,meta11239__$1));
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11240){
var self__ = this;
var _11240__$1 = this;
return self__.meta11239;
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11239","meta11239",1771334451,null)], null);
}));

(cljs.core.async.t_cljs$core$async11238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11238");

(cljs.core.async.t_cljs$core$async11238.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11238.
 */
cljs.core.async.__GT_t_cljs$core$async11238 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11238(flag__$1,meta11239){
return (new cljs.core.async.t_cljs$core$async11238(flag__$1,meta11239));
});

}

return (new cljs.core.async.t_cljs$core$async11238(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11243 = (function (flag,cb,meta11244){
this.flag = flag;
this.cb = cb;
this.meta11244 = meta11244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11245,meta11244__$1){
var self__ = this;
var _11245__$1 = this;
return (new cljs.core.async.t_cljs$core$async11243(self__.flag,self__.cb,meta11244__$1));
}));

(cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11245){
var self__ = this;
var _11245__$1 = this;
return self__.meta11244;
}));

(cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11244","meta11244",-1169081007,null)], null);
}));

(cljs.core.async.t_cljs$core$async11243.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11243");

(cljs.core.async.t_cljs$core$async11243.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11243");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11243.
 */
cljs.core.async.__GT_t_cljs$core$async11243 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11243(flag__$1,cb__$1,meta11244){
return (new cljs.core.async.t_cljs$core$async11243(flag__$1,cb__$1,meta11244));
});

}

return (new cljs.core.async.t_cljs$core$async11243(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11252_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11252_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__11253_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11253_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11260 = (i + (1));
i = G__11260;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___11261 = arguments.length;
var i__5750__auto___11262 = (0);
while(true){
if((i__5750__auto___11262 < len__5749__auto___11261)){
args__5755__auto__.push((arguments[i__5750__auto___11262]));

var G__11263 = (i__5750__auto___11262 + (1));
i__5750__auto___11262 = G__11263;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11258){
var map__11259 = p__11258;
var map__11259__$1 = cljs.core.__destructure_map.call(null,map__11259);
var opts = map__11259__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11256){
var G__11257 = cljs.core.first.call(null,seq11256);
var seq11256__$1 = cljs.core.next.call(null,seq11256);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11257,seq11256__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__11266 = arguments.length;
switch (G__11266) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11154__auto___11349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_11295){
var state_val_11297 = (state_11295[(1)]);
if((state_val_11297 === (7))){
var inst_11291 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11303_11351 = state_11295__$1;
(statearr_11303_11351[(2)] = inst_11291);

(statearr_11303_11351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (1))){
var state_11295__$1 = state_11295;
var statearr_11304_11352 = state_11295__$1;
(statearr_11304_11352[(2)] = null);

(statearr_11304_11352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (4))){
var inst_11269 = (state_11295[(7)]);
var inst_11269__$1 = (state_11295[(2)]);
var inst_11275 = (inst_11269__$1 == null);
var state_11295__$1 = (function (){var statearr_11305 = state_11295;
(statearr_11305[(7)] = inst_11269__$1);

return statearr_11305;
})();
if(cljs.core.truth_(inst_11275)){
var statearr_11306_11357 = state_11295__$1;
(statearr_11306_11357[(1)] = (5));

} else {
var statearr_11307_11359 = state_11295__$1;
(statearr_11307_11359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (13))){
var state_11295__$1 = state_11295;
var statearr_11314_11363 = state_11295__$1;
(statearr_11314_11363[(2)] = null);

(statearr_11314_11363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (6))){
var inst_11269 = (state_11295[(7)]);
var state_11295__$1 = state_11295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11295__$1,(11),to,inst_11269);
} else {
if((state_val_11297 === (3))){
var inst_11293 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11295__$1,inst_11293);
} else {
if((state_val_11297 === (12))){
var state_11295__$1 = state_11295;
var statearr_11317_11366 = state_11295__$1;
(statearr_11317_11366[(2)] = null);

(statearr_11317_11366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (2))){
var state_11295__$1 = state_11295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11295__$1,(4),from);
} else {
if((state_val_11297 === (11))){
var inst_11284 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
if(cljs.core.truth_(inst_11284)){
var statearr_11320_11371 = state_11295__$1;
(statearr_11320_11371[(1)] = (12));

} else {
var statearr_11321_11373 = state_11295__$1;
(statearr_11321_11373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (9))){
var state_11295__$1 = state_11295;
var statearr_11322_11374 = state_11295__$1;
(statearr_11322_11374[(2)] = null);

(statearr_11322_11374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (5))){
var state_11295__$1 = state_11295;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11323_11376 = state_11295__$1;
(statearr_11323_11376[(1)] = (8));

} else {
var statearr_11324_11377 = state_11295__$1;
(statearr_11324_11377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (14))){
var inst_11289 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11325_11378 = state_11295__$1;
(statearr_11325_11378[(2)] = inst_11289);

(statearr_11325_11378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (10))){
var inst_11281 = (state_11295[(2)]);
var state_11295__$1 = state_11295;
var statearr_11328_11381 = state_11295__$1;
(statearr_11328_11381[(2)] = inst_11281);

(statearr_11328_11381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11297 === (8))){
var inst_11278 = cljs.core.async.close_BANG_.call(null,to);
var state_11295__$1 = state_11295;
var statearr_11329_11383 = state_11295__$1;
(statearr_11329_11383[(2)] = inst_11278);

(statearr_11329_11383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_11330 = [null,null,null,null,null,null,null,null];
(statearr_11330[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_11330[(1)] = (1));

return statearr_11330;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_11295){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_11295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e11335){var ex__11067__auto__ = e11335;
var statearr_11336_11385 = state_11295;
(statearr_11336_11385[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_11295[(4)]))){
var statearr_11337_11387 = state_11295;
(statearr_11337_11387[(1)] = cljs.core.first.call(null,(state_11295[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11390 = state_11295;
state_11295 = G__11390;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_11295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_11295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_11342 = f__11155__auto__.call(null);
(statearr_11342[(6)] = c__11154__auto___11349);

return statearr_11342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__11358){
var vec__11360 = p__11358;
var v = cljs.core.nth.call(null,vec__11360,(0),null);
var p = cljs.core.nth.call(null,vec__11360,(1),null);
var job = vec__11360;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11154__auto___11605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_11369){
var state_val_11370 = (state_11369[(1)]);
if((state_val_11370 === (1))){
var state_11369__$1 = state_11369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11369__$1,(2),res,v);
} else {
if((state_val_11370 === (2))){
var inst_11365 = (state_11369[(2)]);
var inst_11367 = cljs.core.async.close_BANG_.call(null,res);
var state_11369__$1 = (function (){var statearr_11375 = state_11369;
(statearr_11375[(7)] = inst_11365);

return statearr_11375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11369__$1,inst_11367);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0 = (function (){
var statearr_11379 = [null,null,null,null,null,null,null,null];
(statearr_11379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__);

(statearr_11379[(1)] = (1));

return statearr_11379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1 = (function (state_11369){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_11369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e11380){var ex__11067__auto__ = e11380;
var statearr_11382_11613 = state_11369;
(statearr_11382_11613[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_11369[(4)]))){
var statearr_11384_11614 = state_11369;
(statearr_11384_11614[(1)] = cljs.core.first.call(null,(state_11369[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11615 = state_11369;
state_11369 = G__11615;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__ = function(state_11369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1.call(this,state_11369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_11386 = f__11155__auto__.call(null);
(statearr_11386[(6)] = c__11154__auto___11605);

return statearr_11386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11391){
var vec__11393 = p__11391;
var v = cljs.core.nth.call(null,vec__11393,(0),null);
var p = cljs.core.nth.call(null,vec__11393,(1),null);
var job = vec__11393;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5616__auto___11616 = n;
var __11617 = (0);
while(true){
if((__11617 < n__5616__auto___11616)){
var G__11396_11619 = type;
var G__11396_11621__$1 = (((G__11396_11619 instanceof cljs.core.Keyword))?G__11396_11619.fqn:null);
switch (G__11396_11621__$1) {
case "compute":
var c__11154__auto___11623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11617,c__11154__auto___11623,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async){
return (function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = ((function (__11617,c__11154__auto___11623,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async){
return (function (state_11410){
var state_val_11411 = (state_11410[(1)]);
if((state_val_11411 === (1))){
var state_11410__$1 = state_11410;
var statearr_11416_11624 = state_11410__$1;
(statearr_11416_11624[(2)] = null);

(statearr_11416_11624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (2))){
var state_11410__$1 = state_11410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11410__$1,(4),jobs);
} else {
if((state_val_11411 === (3))){
var inst_11408 = (state_11410[(2)]);
var state_11410__$1 = state_11410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11410__$1,inst_11408);
} else {
if((state_val_11411 === (4))){
var inst_11400 = (state_11410[(2)]);
var inst_11401 = process__$1.call(null,inst_11400);
var state_11410__$1 = state_11410;
if(cljs.core.truth_(inst_11401)){
var statearr_11417_11625 = state_11410__$1;
(statearr_11417_11625[(1)] = (5));

} else {
var statearr_11418_11626 = state_11410__$1;
(statearr_11418_11626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (5))){
var state_11410__$1 = state_11410;
var statearr_11419_11628 = state_11410__$1;
(statearr_11419_11628[(2)] = null);

(statearr_11419_11628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (6))){
var state_11410__$1 = state_11410;
var statearr_11420_11630 = state_11410__$1;
(statearr_11420_11630[(2)] = null);

(statearr_11420_11630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11411 === (7))){
var inst_11406 = (state_11410[(2)]);
var state_11410__$1 = state_11410;
var statearr_11421_11634 = state_11410__$1;
(statearr_11421_11634[(2)] = inst_11406);

(statearr_11421_11634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11617,c__11154__auto___11623,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async))
;
return ((function (__11617,switch__11063__auto__,c__11154__auto___11623,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0 = (function (){
var statearr_11423 = [null,null,null,null,null,null,null];
(statearr_11423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__);

(statearr_11423[(1)] = (1));

return statearr_11423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1 = (function (state_11410){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_11410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e11424){var ex__11067__auto__ = e11424;
var statearr_11429_11659 = state_11410;
(statearr_11429_11659[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_11410[(4)]))){
var statearr_11430_11660 = state_11410;
(statearr_11430_11660[(1)] = cljs.core.first.call(null,(state_11410[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11664 = state_11410;
state_11410 = G__11664;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__ = function(state_11410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1.call(this,state_11410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__;
})()
;})(__11617,switch__11063__auto__,c__11154__auto___11623,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async))
})();
var state__11156__auto__ = (function (){var statearr_11433 = f__11155__auto__.call(null);
(statearr_11433[(6)] = c__11154__auto___11623);

return statearr_11433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(__11617,c__11154__auto___11623,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async))
);


break;
case "async":
var c__11154__auto___11665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11617,c__11154__auto___11665,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async){
return (function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = ((function (__11617,c__11154__auto___11665,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async){
return (function (state_11446){
var state_val_11447 = (state_11446[(1)]);
if((state_val_11447 === (1))){
var state_11446__$1 = state_11446;
var statearr_11449_11667 = state_11446__$1;
(statearr_11449_11667[(2)] = null);

(statearr_11449_11667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (2))){
var state_11446__$1 = state_11446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11446__$1,(4),jobs);
} else {
if((state_val_11447 === (3))){
var inst_11444 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11446__$1,inst_11444);
} else {
if((state_val_11447 === (4))){
var inst_11436 = (state_11446[(2)]);
var inst_11437 = async.call(null,inst_11436);
var state_11446__$1 = state_11446;
if(cljs.core.truth_(inst_11437)){
var statearr_11454_11669 = state_11446__$1;
(statearr_11454_11669[(1)] = (5));

} else {
var statearr_11455_11671 = state_11446__$1;
(statearr_11455_11671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (5))){
var state_11446__$1 = state_11446;
var statearr_11456_11672 = state_11446__$1;
(statearr_11456_11672[(2)] = null);

(statearr_11456_11672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (6))){
var state_11446__$1 = state_11446;
var statearr_11457_11674 = state_11446__$1;
(statearr_11457_11674[(2)] = null);

(statearr_11457_11674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11447 === (7))){
var inst_11442 = (state_11446[(2)]);
var state_11446__$1 = state_11446;
var statearr_11459_11676 = state_11446__$1;
(statearr_11459_11676[(2)] = inst_11442);

(statearr_11459_11676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11617,c__11154__auto___11665,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async))
;
return ((function (__11617,switch__11063__auto__,c__11154__auto___11665,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0 = (function (){
var statearr_11460 = [null,null,null,null,null,null,null];
(statearr_11460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__);

(statearr_11460[(1)] = (1));

return statearr_11460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1 = (function (state_11446){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_11446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e11461){var ex__11067__auto__ = e11461;
var statearr_11462_11680 = state_11446;
(statearr_11462_11680[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_11446[(4)]))){
var statearr_11463_11682 = state_11446;
(statearr_11463_11682[(1)] = cljs.core.first.call(null,(state_11446[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11683 = state_11446;
state_11446 = G__11683;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__ = function(state_11446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1.call(this,state_11446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__;
})()
;})(__11617,switch__11063__auto__,c__11154__auto___11665,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async))
})();
var state__11156__auto__ = (function (){var statearr_11464 = f__11155__auto__.call(null);
(statearr_11464[(6)] = c__11154__auto___11665);

return statearr_11464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(__11617,c__11154__auto___11665,G__11396_11619,G__11396_11621__$1,n__5616__auto___11616,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11396_11621__$1)].join('')));

}

var G__11685 = (__11617 + (1));
__11617 = G__11685;
continue;
} else {
}
break;
}

var c__11154__auto___11686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_11486){
var state_val_11487 = (state_11486[(1)]);
if((state_val_11487 === (7))){
var inst_11482 = (state_11486[(2)]);
var state_11486__$1 = state_11486;
var statearr_11489_11688 = state_11486__$1;
(statearr_11489_11688[(2)] = inst_11482);

(statearr_11489_11688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11487 === (1))){
var state_11486__$1 = state_11486;
var statearr_11493_11690 = state_11486__$1;
(statearr_11493_11690[(2)] = null);

(statearr_11493_11690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11487 === (4))){
var inst_11467 = (state_11486[(7)]);
var inst_11467__$1 = (state_11486[(2)]);
var inst_11468 = (inst_11467__$1 == null);
var state_11486__$1 = (function (){var statearr_11494 = state_11486;
(statearr_11494[(7)] = inst_11467__$1);

return statearr_11494;
})();
if(cljs.core.truth_(inst_11468)){
var statearr_11495_11692 = state_11486__$1;
(statearr_11495_11692[(1)] = (5));

} else {
var statearr_11496_11694 = state_11486__$1;
(statearr_11496_11694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11487 === (6))){
var inst_11467 = (state_11486[(7)]);
var inst_11472 = (state_11486[(8)]);
var inst_11472__$1 = cljs.core.async.chan.call(null,(1));
var inst_11473 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11474 = [inst_11467,inst_11472__$1];
var inst_11475 = (new cljs.core.PersistentVector(null,2,(5),inst_11473,inst_11474,null));
var state_11486__$1 = (function (){var statearr_11497 = state_11486;
(statearr_11497[(8)] = inst_11472__$1);

return statearr_11497;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11486__$1,(8),jobs,inst_11475);
} else {
if((state_val_11487 === (3))){
var inst_11484 = (state_11486[(2)]);
var state_11486__$1 = state_11486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11486__$1,inst_11484);
} else {
if((state_val_11487 === (2))){
var state_11486__$1 = state_11486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11486__$1,(4),from);
} else {
if((state_val_11487 === (9))){
var inst_11479 = (state_11486[(2)]);
var state_11486__$1 = (function (){var statearr_11498 = state_11486;
(statearr_11498[(9)] = inst_11479);

return statearr_11498;
})();
var statearr_11499_11697 = state_11486__$1;
(statearr_11499_11697[(2)] = null);

(statearr_11499_11697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11487 === (5))){
var inst_11470 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11486__$1 = state_11486;
var statearr_11500_11699 = state_11486__$1;
(statearr_11500_11699[(2)] = inst_11470);

(statearr_11500_11699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11487 === (8))){
var inst_11472 = (state_11486[(8)]);
var inst_11477 = (state_11486[(2)]);
var state_11486__$1 = (function (){var statearr_11502 = state_11486;
(statearr_11502[(10)] = inst_11477);

return statearr_11502;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11486__$1,(9),results,inst_11472);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0 = (function (){
var statearr_11503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11503[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__);

(statearr_11503[(1)] = (1));

return statearr_11503;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1 = (function (state_11486){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_11486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e11508){var ex__11067__auto__ = e11508;
var statearr_11509_11704 = state_11486;
(statearr_11509_11704[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_11486[(4)]))){
var statearr_11510_11705 = state_11486;
(statearr_11510_11705[(1)] = cljs.core.first.call(null,(state_11486[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11707 = state_11486;
state_11486 = G__11707;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__ = function(state_11486){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1.call(this,state_11486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_11513 = f__11155__auto__.call(null);
(statearr_11513[(6)] = c__11154__auto___11686);

return statearr_11513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


var c__11154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_11554){
var state_val_11555 = (state_11554[(1)]);
if((state_val_11555 === (7))){
var inst_11550 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11560_11710 = state_11554__$1;
(statearr_11560_11710[(2)] = inst_11550);

(statearr_11560_11710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (20))){
var state_11554__$1 = state_11554;
var statearr_11561_11711 = state_11554__$1;
(statearr_11561_11711[(2)] = null);

(statearr_11561_11711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (1))){
var state_11554__$1 = state_11554;
var statearr_11562_11712 = state_11554__$1;
(statearr_11562_11712[(2)] = null);

(statearr_11562_11712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (4))){
var inst_11518 = (state_11554[(7)]);
var inst_11518__$1 = (state_11554[(2)]);
var inst_11519 = (inst_11518__$1 == null);
var state_11554__$1 = (function (){var statearr_11563 = state_11554;
(statearr_11563[(7)] = inst_11518__$1);

return statearr_11563;
})();
if(cljs.core.truth_(inst_11519)){
var statearr_11564_11715 = state_11554__$1;
(statearr_11564_11715[(1)] = (5));

} else {
var statearr_11565_11716 = state_11554__$1;
(statearr_11565_11716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (15))){
var inst_11532 = (state_11554[(8)]);
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11554__$1,(18),to,inst_11532);
} else {
if((state_val_11555 === (21))){
var inst_11545 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11566_11717 = state_11554__$1;
(statearr_11566_11717[(2)] = inst_11545);

(statearr_11566_11717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (13))){
var inst_11547 = (state_11554[(2)]);
var state_11554__$1 = (function (){var statearr_11567 = state_11554;
(statearr_11567[(9)] = inst_11547);

return statearr_11567;
})();
var statearr_11568_11718 = state_11554__$1;
(statearr_11568_11718[(2)] = null);

(statearr_11568_11718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (6))){
var inst_11518 = (state_11554[(7)]);
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11554__$1,(11),inst_11518);
} else {
if((state_val_11555 === (17))){
var inst_11540 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
if(cljs.core.truth_(inst_11540)){
var statearr_11569_11720 = state_11554__$1;
(statearr_11569_11720[(1)] = (19));

} else {
var statearr_11570_11722 = state_11554__$1;
(statearr_11570_11722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (3))){
var inst_11552 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11554__$1,inst_11552);
} else {
if((state_val_11555 === (12))){
var inst_11528 = (state_11554[(10)]);
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11554__$1,(14),inst_11528);
} else {
if((state_val_11555 === (2))){
var state_11554__$1 = state_11554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11554__$1,(4),results);
} else {
if((state_val_11555 === (19))){
var state_11554__$1 = state_11554;
var statearr_11572_11734 = state_11554__$1;
(statearr_11572_11734[(2)] = null);

(statearr_11572_11734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (11))){
var inst_11528 = (state_11554[(2)]);
var state_11554__$1 = (function (){var statearr_11573 = state_11554;
(statearr_11573[(10)] = inst_11528);

return statearr_11573;
})();
var statearr_11574_11746 = state_11554__$1;
(statearr_11574_11746[(2)] = null);

(statearr_11574_11746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (9))){
var state_11554__$1 = state_11554;
var statearr_11575_11751 = state_11554__$1;
(statearr_11575_11751[(2)] = null);

(statearr_11575_11751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (5))){
var state_11554__$1 = state_11554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11576_11753 = state_11554__$1;
(statearr_11576_11753[(1)] = (8));

} else {
var statearr_11577_11754 = state_11554__$1;
(statearr_11577_11754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (14))){
var inst_11532 = (state_11554[(8)]);
var inst_11534 = (state_11554[(11)]);
var inst_11532__$1 = (state_11554[(2)]);
var inst_11533 = (inst_11532__$1 == null);
var inst_11534__$1 = cljs.core.not.call(null,inst_11533);
var state_11554__$1 = (function (){var statearr_11578 = state_11554;
(statearr_11578[(8)] = inst_11532__$1);

(statearr_11578[(11)] = inst_11534__$1);

return statearr_11578;
})();
if(inst_11534__$1){
var statearr_11579_11761 = state_11554__$1;
(statearr_11579_11761[(1)] = (15));

} else {
var statearr_11580_11762 = state_11554__$1;
(statearr_11580_11762[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (16))){
var inst_11534 = (state_11554[(11)]);
var state_11554__$1 = state_11554;
var statearr_11581_11763 = state_11554__$1;
(statearr_11581_11763[(2)] = inst_11534);

(statearr_11581_11763[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (10))){
var inst_11525 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11582_11766 = state_11554__$1;
(statearr_11582_11766[(2)] = inst_11525);

(statearr_11582_11766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (18))){
var inst_11537 = (state_11554[(2)]);
var state_11554__$1 = state_11554;
var statearr_11583_11768 = state_11554__$1;
(statearr_11583_11768[(2)] = inst_11537);

(statearr_11583_11768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11555 === (8))){
var inst_11522 = cljs.core.async.close_BANG_.call(null,to);
var state_11554__$1 = state_11554;
var statearr_11584_11772 = state_11554__$1;
(statearr_11584_11772[(2)] = inst_11522);

(statearr_11584_11772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0 = (function (){
var statearr_11586 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__);

(statearr_11586[(1)] = (1));

return statearr_11586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1 = (function (state_11554){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_11554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e11590){var ex__11067__auto__ = e11590;
var statearr_11591_11776 = state_11554;
(statearr_11591_11776[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_11554[(4)]))){
var statearr_11592_11777 = state_11554;
(statearr_11592_11777[(1)] = cljs.core.first.call(null,(state_11554[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11779 = state_11554;
state_11554 = G__11779;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__ = function(state_11554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1.call(this,state_11554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11064__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_11593 = f__11155__auto__.call(null);
(statearr_11593[(6)] = c__11154__auto__);

return statearr_11593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));

return c__11154__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__11595 = arguments.length;
switch (G__11595) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__11602 = arguments.length;
switch (G__11602) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__11612 = arguments.length;
switch (G__11612) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11154__auto___11796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_11657){
var state_val_11658 = (state_11657[(1)]);
if((state_val_11658 === (7))){
var inst_11652 = (state_11657[(2)]);
var state_11657__$1 = state_11657;
var statearr_11666_11797 = state_11657__$1;
(statearr_11666_11797[(2)] = inst_11652);

(statearr_11666_11797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (1))){
var state_11657__$1 = state_11657;
var statearr_11668_11798 = state_11657__$1;
(statearr_11668_11798[(2)] = null);

(statearr_11668_11798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (4))){
var inst_11632 = (state_11657[(7)]);
var inst_11632__$1 = (state_11657[(2)]);
var inst_11633 = (inst_11632__$1 == null);
var state_11657__$1 = (function (){var statearr_11670 = state_11657;
(statearr_11670[(7)] = inst_11632__$1);

return statearr_11670;
})();
if(cljs.core.truth_(inst_11633)){
var statearr_11673_11800 = state_11657__$1;
(statearr_11673_11800[(1)] = (5));

} else {
var statearr_11675_11801 = state_11657__$1;
(statearr_11675_11801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (13))){
var state_11657__$1 = state_11657;
var statearr_11677_11802 = state_11657__$1;
(statearr_11677_11802[(2)] = null);

(statearr_11677_11802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (6))){
var inst_11632 = (state_11657[(7)]);
var inst_11639 = p.call(null,inst_11632);
var state_11657__$1 = state_11657;
if(cljs.core.truth_(inst_11639)){
var statearr_11679_11804 = state_11657__$1;
(statearr_11679_11804[(1)] = (9));

} else {
var statearr_11681_11807 = state_11657__$1;
(statearr_11681_11807[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (3))){
var inst_11654 = (state_11657[(2)]);
var state_11657__$1 = state_11657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11657__$1,inst_11654);
} else {
if((state_val_11658 === (12))){
var state_11657__$1 = state_11657;
var statearr_11684_11817 = state_11657__$1;
(statearr_11684_11817[(2)] = null);

(statearr_11684_11817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (2))){
var state_11657__$1 = state_11657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11657__$1,(4),ch);
} else {
if((state_val_11658 === (11))){
var inst_11632 = (state_11657[(7)]);
var inst_11643 = (state_11657[(2)]);
var state_11657__$1 = state_11657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11657__$1,(8),inst_11643,inst_11632);
} else {
if((state_val_11658 === (9))){
var state_11657__$1 = state_11657;
var statearr_11689_11818 = state_11657__$1;
(statearr_11689_11818[(2)] = tc);

(statearr_11689_11818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (5))){
var inst_11636 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11637 = cljs.core.async.close_BANG_.call(null,fc);
var state_11657__$1 = (function (){var statearr_11691 = state_11657;
(statearr_11691[(8)] = inst_11636);

return statearr_11691;
})();
var statearr_11693_11819 = state_11657__$1;
(statearr_11693_11819[(2)] = inst_11637);

(statearr_11693_11819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (14))){
var inst_11650 = (state_11657[(2)]);
var state_11657__$1 = state_11657;
var statearr_11695_11821 = state_11657__$1;
(statearr_11695_11821[(2)] = inst_11650);

(statearr_11695_11821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (10))){
var state_11657__$1 = state_11657;
var statearr_11696_11823 = state_11657__$1;
(statearr_11696_11823[(2)] = fc);

(statearr_11696_11823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11658 === (8))){
var inst_11645 = (state_11657[(2)]);
var state_11657__$1 = state_11657;
if(cljs.core.truth_(inst_11645)){
var statearr_11698_11825 = state_11657__$1;
(statearr_11698_11825[(1)] = (12));

} else {
var statearr_11700_11827 = state_11657__$1;
(statearr_11700_11827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_11702 = [null,null,null,null,null,null,null,null,null];
(statearr_11702[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_11702[(1)] = (1));

return statearr_11702;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_11657){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_11657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e11706){var ex__11067__auto__ = e11706;
var statearr_11708_11828 = state_11657;
(statearr_11708_11828[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_11657[(4)]))){
var statearr_11709_11829 = state_11657;
(statearr_11709_11829[(1)] = cljs.core.first.call(null,(state_11657[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11831 = state_11657;
state_11657 = G__11831;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_11657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_11657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_11713 = f__11155__auto__.call(null);
(statearr_11713[(6)] = c__11154__auto___11796);

return statearr_11713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_11752){
var state_val_11755 = (state_11752[(1)]);
if((state_val_11755 === (7))){
var inst_11745 = (state_11752[(2)]);
var state_11752__$1 = state_11752;
var statearr_11764_11834 = state_11752__$1;
(statearr_11764_11834[(2)] = inst_11745);

(statearr_11764_11834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11755 === (1))){
var inst_11721 = init;
var inst_11723 = inst_11721;
var state_11752__$1 = (function (){var statearr_11765 = state_11752;
(statearr_11765[(7)] = inst_11723);

return statearr_11765;
})();
var statearr_11767_11835 = state_11752__$1;
(statearr_11767_11835[(2)] = null);

(statearr_11767_11835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11755 === (4))){
var inst_11726 = (state_11752[(8)]);
var inst_11726__$1 = (state_11752[(2)]);
var inst_11727 = (inst_11726__$1 == null);
var state_11752__$1 = (function (){var statearr_11769 = state_11752;
(statearr_11769[(8)] = inst_11726__$1);

return statearr_11769;
})();
if(cljs.core.truth_(inst_11727)){
var statearr_11770_11836 = state_11752__$1;
(statearr_11770_11836[(1)] = (5));

} else {
var statearr_11771_11837 = state_11752__$1;
(statearr_11771_11837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11755 === (6))){
var inst_11723 = (state_11752[(7)]);
var inst_11726 = (state_11752[(8)]);
var inst_11731 = (state_11752[(9)]);
var inst_11731__$1 = f.call(null,inst_11723,inst_11726);
var inst_11732 = cljs.core.reduced_QMARK_.call(null,inst_11731__$1);
var state_11752__$1 = (function (){var statearr_11773 = state_11752;
(statearr_11773[(9)] = inst_11731__$1);

return statearr_11773;
})();
if(inst_11732){
var statearr_11774_11843 = state_11752__$1;
(statearr_11774_11843[(1)] = (8));

} else {
var statearr_11775_11846 = state_11752__$1;
(statearr_11775_11846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11755 === (3))){
var inst_11748 = (state_11752[(2)]);
var state_11752__$1 = state_11752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11752__$1,inst_11748);
} else {
if((state_val_11755 === (2))){
var state_11752__$1 = state_11752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11752__$1,(4),ch);
} else {
if((state_val_11755 === (9))){
var inst_11731 = (state_11752[(9)]);
var inst_11723 = inst_11731;
var state_11752__$1 = (function (){var statearr_11780 = state_11752;
(statearr_11780[(7)] = inst_11723);

return statearr_11780;
})();
var statearr_11781_11871 = state_11752__$1;
(statearr_11781_11871[(2)] = null);

(statearr_11781_11871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11755 === (5))){
var inst_11723 = (state_11752[(7)]);
var state_11752__$1 = state_11752;
var statearr_11787_11872 = state_11752__$1;
(statearr_11787_11872[(2)] = inst_11723);

(statearr_11787_11872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11755 === (10))){
var inst_11743 = (state_11752[(2)]);
var state_11752__$1 = state_11752;
var statearr_11788_11873 = state_11752__$1;
(statearr_11788_11873[(2)] = inst_11743);

(statearr_11788_11873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11755 === (8))){
var inst_11731 = (state_11752[(9)]);
var inst_11735 = cljs.core.deref.call(null,inst_11731);
var state_11752__$1 = state_11752;
var statearr_11790_11875 = state_11752__$1;
(statearr_11790_11875[(2)] = inst_11735);

(statearr_11790_11875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11064__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11064__auto____0 = (function (){
var statearr_11791 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11791[(0)] = cljs$core$async$reduce_$_state_machine__11064__auto__);

(statearr_11791[(1)] = (1));

return statearr_11791;
});
var cljs$core$async$reduce_$_state_machine__11064__auto____1 = (function (state_11752){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_11752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e11793){var ex__11067__auto__ = e11793;
var statearr_11794_11878 = state_11752;
(statearr_11794_11878[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_11752[(4)]))){
var statearr_11795_11880 = state_11752;
(statearr_11795_11880[(1)] = cljs.core.first.call(null,(state_11752[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11881 = state_11752;
state_11752 = G__11881;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11064__auto__ = function(state_11752){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11064__auto____1.call(this,state_11752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11064__auto____0;
cljs$core$async$reduce_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11064__auto____1;
return cljs$core$async$reduce_$_state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_11799 = f__11155__auto__.call(null);
(statearr_11799[(6)] = c__11154__auto__);

return statearr_11799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));

return c__11154__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_11811){
var state_val_11812 = (state_11811[(1)]);
if((state_val_11812 === (1))){
var inst_11805 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11811__$1 = state_11811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11811__$1,(2),inst_11805);
} else {
if((state_val_11812 === (2))){
var inst_11808 = (state_11811[(2)]);
var inst_11809 = f__$1.call(null,inst_11808);
var state_11811__$1 = state_11811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11811__$1,inst_11809);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11064__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11064__auto____0 = (function (){
var statearr_11820 = [null,null,null,null,null,null,null];
(statearr_11820[(0)] = cljs$core$async$transduce_$_state_machine__11064__auto__);

(statearr_11820[(1)] = (1));

return statearr_11820;
});
var cljs$core$async$transduce_$_state_machine__11064__auto____1 = (function (state_11811){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_11811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e11822){var ex__11067__auto__ = e11822;
var statearr_11824_11885 = state_11811;
(statearr_11824_11885[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_11811[(4)]))){
var statearr_11826_11888 = state_11811;
(statearr_11826_11888[(1)] = cljs.core.first.call(null,(state_11811[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11889 = state_11811;
state_11811 = G__11889;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11064__auto__ = function(state_11811){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11064__auto____1.call(this,state_11811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11064__auto____0;
cljs$core$async$transduce_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11064__auto____1;
return cljs$core$async$transduce_$_state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_11830 = f__11155__auto__.call(null);
(statearr_11830[(6)] = c__11154__auto__);

return statearr_11830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));

return c__11154__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__11833 = arguments.length;
switch (G__11833) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_11869){
var state_val_11870 = (state_11869[(1)]);
if((state_val_11870 === (7))){
var inst_11847 = (state_11869[(2)]);
var state_11869__$1 = state_11869;
var statearr_11874_11966 = state_11869__$1;
(statearr_11874_11966[(2)] = inst_11847);

(statearr_11874_11966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11870 === (1))){
var inst_11839 = cljs.core.seq.call(null,coll);
var inst_11840 = inst_11839;
var state_11869__$1 = (function (){var statearr_11876 = state_11869;
(statearr_11876[(7)] = inst_11840);

return statearr_11876;
})();
var statearr_11877_11968 = state_11869__$1;
(statearr_11877_11968[(2)] = null);

(statearr_11877_11968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11870 === (4))){
var inst_11840 = (state_11869[(7)]);
var inst_11844 = cljs.core.first.call(null,inst_11840);
var state_11869__$1 = state_11869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11869__$1,(7),ch,inst_11844);
} else {
if((state_val_11870 === (13))){
var inst_11863 = (state_11869[(2)]);
var state_11869__$1 = state_11869;
var statearr_11879_11971 = state_11869__$1;
(statearr_11879_11971[(2)] = inst_11863);

(statearr_11879_11971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11870 === (6))){
var inst_11850 = (state_11869[(2)]);
var state_11869__$1 = state_11869;
if(cljs.core.truth_(inst_11850)){
var statearr_11882_11972 = state_11869__$1;
(statearr_11882_11972[(1)] = (8));

} else {
var statearr_11883_11973 = state_11869__$1;
(statearr_11883_11973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11870 === (3))){
var inst_11867 = (state_11869[(2)]);
var state_11869__$1 = state_11869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11869__$1,inst_11867);
} else {
if((state_val_11870 === (12))){
var state_11869__$1 = state_11869;
var statearr_11884_11974 = state_11869__$1;
(statearr_11884_11974[(2)] = null);

(statearr_11884_11974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11870 === (2))){
var inst_11840 = (state_11869[(7)]);
var state_11869__$1 = state_11869;
if(cljs.core.truth_(inst_11840)){
var statearr_11886_11975 = state_11869__$1;
(statearr_11886_11975[(1)] = (4));

} else {
var statearr_11887_11976 = state_11869__$1;
(statearr_11887_11976[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11870 === (11))){
var inst_11860 = cljs.core.async.close_BANG_.call(null,ch);
var state_11869__$1 = state_11869;
var statearr_11890_11977 = state_11869__$1;
(statearr_11890_11977[(2)] = inst_11860);

(statearr_11890_11977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11870 === (9))){
var state_11869__$1 = state_11869;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11892_11978 = state_11869__$1;
(statearr_11892_11978[(1)] = (11));

} else {
var statearr_11893_11979 = state_11869__$1;
(statearr_11893_11979[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11870 === (5))){
var inst_11840 = (state_11869[(7)]);
var state_11869__$1 = state_11869;
var statearr_11901_11980 = state_11869__$1;
(statearr_11901_11980[(2)] = inst_11840);

(statearr_11901_11980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11870 === (10))){
var inst_11865 = (state_11869[(2)]);
var state_11869__$1 = state_11869;
var statearr_11908_11982 = state_11869__$1;
(statearr_11908_11982[(2)] = inst_11865);

(statearr_11908_11982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11870 === (8))){
var inst_11840 = (state_11869[(7)]);
var inst_11852 = cljs.core.next.call(null,inst_11840);
var inst_11840__$1 = inst_11852;
var state_11869__$1 = (function (){var statearr_11916 = state_11869;
(statearr_11916[(7)] = inst_11840__$1);

return statearr_11916;
})();
var statearr_11921_11983 = state_11869__$1;
(statearr_11921_11983[(2)] = null);

(statearr_11921_11983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_11931 = [null,null,null,null,null,null,null,null];
(statearr_11931[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_11931[(1)] = (1));

return statearr_11931;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_11869){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_11869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e11937){var ex__11067__auto__ = e11937;
var statearr_11938_11986 = state_11869;
(statearr_11938_11986[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_11869[(4)]))){
var statearr_11946_11987 = state_11869;
(statearr_11946_11987[(1)] = cljs.core.first.call(null,(state_11869[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11988 = state_11869;
state_11869 = G__11988;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_11869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_11869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_11961 = f__11155__auto__.call(null);
(statearr_11961[(6)] = c__11154__auto__);

return statearr_11961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));

return c__11154__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__11967 = arguments.length;
switch (G__11967) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_11990 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_11990.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_11991 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_11991.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_11995 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_11995.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_11998 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m);
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_11998.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11992 = (function (ch,cs,meta11993){
this.ch = ch;
this.cs = cs;
this.meta11993 = meta11993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11994,meta11993__$1){
var self__ = this;
var _11994__$1 = this;
return (new cljs.core.async.t_cljs$core$async11992(self__.ch,self__.cs,meta11993__$1));
}));

(cljs.core.async.t_cljs$core$async11992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11994){
var self__ = this;
var _11994__$1 = this;
return self__.meta11993;
}));

(cljs.core.async.t_cljs$core$async11992.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11992.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11992.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11992.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11992.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11992.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11993","meta11993",1849270534,null)], null);
}));

(cljs.core.async.t_cljs$core$async11992.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11992");

(cljs.core.async.t_cljs$core$async11992.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11992");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11992.
 */
cljs.core.async.__GT_t_cljs$core$async11992 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11992(ch__$1,cs__$1,meta11993){
return (new cljs.core.async.t_cljs$core$async11992(ch__$1,cs__$1,meta11993));
});

}

return (new cljs.core.async.t_cljs$core$async11992(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__11154__auto___12278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_12145){
var state_val_12146 = (state_12145[(1)]);
if((state_val_12146 === (7))){
var inst_12141 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12150_12279 = state_12145__$1;
(statearr_12150_12279[(2)] = inst_12141);

(statearr_12150_12279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (20))){
var inst_12043 = (state_12145[(7)]);
var inst_12055 = cljs.core.first.call(null,inst_12043);
var inst_12056 = cljs.core.nth.call(null,inst_12055,(0),null);
var inst_12057 = cljs.core.nth.call(null,inst_12055,(1),null);
var state_12145__$1 = (function (){var statearr_12151 = state_12145;
(statearr_12151[(8)] = inst_12056);

return statearr_12151;
})();
if(cljs.core.truth_(inst_12057)){
var statearr_12152_12282 = state_12145__$1;
(statearr_12152_12282[(1)] = (22));

} else {
var statearr_12153_12283 = state_12145__$1;
(statearr_12153_12283[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (27))){
var inst_12086 = (state_12145[(9)]);
var inst_12088 = (state_12145[(10)]);
var inst_12093 = (state_12145[(11)]);
var inst_12011 = (state_12145[(12)]);
var inst_12093__$1 = cljs.core._nth.call(null,inst_12086,inst_12088);
var inst_12094 = cljs.core.async.put_BANG_.call(null,inst_12093__$1,inst_12011,done);
var state_12145__$1 = (function (){var statearr_12155 = state_12145;
(statearr_12155[(11)] = inst_12093__$1);

return statearr_12155;
})();
if(cljs.core.truth_(inst_12094)){
var statearr_12158_12284 = state_12145__$1;
(statearr_12158_12284[(1)] = (30));

} else {
var statearr_12159_12285 = state_12145__$1;
(statearr_12159_12285[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (1))){
var state_12145__$1 = state_12145;
var statearr_12160_12286 = state_12145__$1;
(statearr_12160_12286[(2)] = null);

(statearr_12160_12286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (24))){
var inst_12043 = (state_12145[(7)]);
var inst_12062 = (state_12145[(2)]);
var inst_12063 = cljs.core.next.call(null,inst_12043);
var inst_12020 = inst_12063;
var inst_12021 = null;
var inst_12022 = (0);
var inst_12023 = (0);
var state_12145__$1 = (function (){var statearr_12161 = state_12145;
(statearr_12161[(13)] = inst_12062);

(statearr_12161[(14)] = inst_12020);

(statearr_12161[(15)] = inst_12021);

(statearr_12161[(16)] = inst_12022);

(statearr_12161[(17)] = inst_12023);

return statearr_12161;
})();
var statearr_12162_12291 = state_12145__$1;
(statearr_12162_12291[(2)] = null);

(statearr_12162_12291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (39))){
var state_12145__$1 = state_12145;
var statearr_12169_12292 = state_12145__$1;
(statearr_12169_12292[(2)] = null);

(statearr_12169_12292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (4))){
var inst_12011 = (state_12145[(12)]);
var inst_12011__$1 = (state_12145[(2)]);
var inst_12012 = (inst_12011__$1 == null);
var state_12145__$1 = (function (){var statearr_12170 = state_12145;
(statearr_12170[(12)] = inst_12011__$1);

return statearr_12170;
})();
if(cljs.core.truth_(inst_12012)){
var statearr_12171_12293 = state_12145__$1;
(statearr_12171_12293[(1)] = (5));

} else {
var statearr_12172_12294 = state_12145__$1;
(statearr_12172_12294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (15))){
var inst_12023 = (state_12145[(17)]);
var inst_12020 = (state_12145[(14)]);
var inst_12021 = (state_12145[(15)]);
var inst_12022 = (state_12145[(16)]);
var inst_12038 = (state_12145[(2)]);
var inst_12039 = (inst_12023 + (1));
var tmp12166 = inst_12021;
var tmp12167 = inst_12020;
var tmp12168 = inst_12022;
var inst_12020__$1 = tmp12167;
var inst_12021__$1 = tmp12166;
var inst_12022__$1 = tmp12168;
var inst_12023__$1 = inst_12039;
var state_12145__$1 = (function (){var statearr_12176 = state_12145;
(statearr_12176[(18)] = inst_12038);

(statearr_12176[(14)] = inst_12020__$1);

(statearr_12176[(15)] = inst_12021__$1);

(statearr_12176[(16)] = inst_12022__$1);

(statearr_12176[(17)] = inst_12023__$1);

return statearr_12176;
})();
var statearr_12178_12295 = state_12145__$1;
(statearr_12178_12295[(2)] = null);

(statearr_12178_12295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (21))){
var inst_12066 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12182_12299 = state_12145__$1;
(statearr_12182_12299[(2)] = inst_12066);

(statearr_12182_12299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (31))){
var inst_12093 = (state_12145[(11)]);
var inst_12097 = cljs.core.async.untap_STAR_.call(null,m,inst_12093);
var state_12145__$1 = state_12145;
var statearr_12183_12300 = state_12145__$1;
(statearr_12183_12300[(2)] = inst_12097);

(statearr_12183_12300[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (32))){
var inst_12088 = (state_12145[(10)]);
var inst_12085 = (state_12145[(19)]);
var inst_12086 = (state_12145[(9)]);
var inst_12087 = (state_12145[(20)]);
var inst_12099 = (state_12145[(2)]);
var inst_12100 = (inst_12088 + (1));
var tmp12179 = inst_12087;
var tmp12180 = inst_12086;
var tmp12181 = inst_12085;
var inst_12085__$1 = tmp12181;
var inst_12086__$1 = tmp12180;
var inst_12087__$1 = tmp12179;
var inst_12088__$1 = inst_12100;
var state_12145__$1 = (function (){var statearr_12187 = state_12145;
(statearr_12187[(21)] = inst_12099);

(statearr_12187[(19)] = inst_12085__$1);

(statearr_12187[(9)] = inst_12086__$1);

(statearr_12187[(20)] = inst_12087__$1);

(statearr_12187[(10)] = inst_12088__$1);

return statearr_12187;
})();
var statearr_12188_12301 = state_12145__$1;
(statearr_12188_12301[(2)] = null);

(statearr_12188_12301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (40))){
var inst_12112 = (state_12145[(22)]);
var inst_12117 = cljs.core.async.untap_STAR_.call(null,m,inst_12112);
var state_12145__$1 = state_12145;
var statearr_12189_12303 = state_12145__$1;
(statearr_12189_12303[(2)] = inst_12117);

(statearr_12189_12303[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (33))){
var inst_12103 = (state_12145[(23)]);
var inst_12105 = cljs.core.chunked_seq_QMARK_.call(null,inst_12103);
var state_12145__$1 = state_12145;
if(inst_12105){
var statearr_12190_12304 = state_12145__$1;
(statearr_12190_12304[(1)] = (36));

} else {
var statearr_12193_12305 = state_12145__$1;
(statearr_12193_12305[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (13))){
var inst_12032 = (state_12145[(24)]);
var inst_12035 = cljs.core.async.close_BANG_.call(null,inst_12032);
var state_12145__$1 = state_12145;
var statearr_12195_12306 = state_12145__$1;
(statearr_12195_12306[(2)] = inst_12035);

(statearr_12195_12306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (22))){
var inst_12056 = (state_12145[(8)]);
var inst_12059 = cljs.core.async.close_BANG_.call(null,inst_12056);
var state_12145__$1 = state_12145;
var statearr_12196_12311 = state_12145__$1;
(statearr_12196_12311[(2)] = inst_12059);

(statearr_12196_12311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (36))){
var inst_12103 = (state_12145[(23)]);
var inst_12107 = cljs.core.chunk_first.call(null,inst_12103);
var inst_12108 = cljs.core.chunk_rest.call(null,inst_12103);
var inst_12109 = cljs.core.count.call(null,inst_12107);
var inst_12085 = inst_12108;
var inst_12086 = inst_12107;
var inst_12087 = inst_12109;
var inst_12088 = (0);
var state_12145__$1 = (function (){var statearr_12199 = state_12145;
(statearr_12199[(19)] = inst_12085);

(statearr_12199[(9)] = inst_12086);

(statearr_12199[(20)] = inst_12087);

(statearr_12199[(10)] = inst_12088);

return statearr_12199;
})();
var statearr_12201_12314 = state_12145__$1;
(statearr_12201_12314[(2)] = null);

(statearr_12201_12314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (41))){
var inst_12103 = (state_12145[(23)]);
var inst_12119 = (state_12145[(2)]);
var inst_12120 = cljs.core.next.call(null,inst_12103);
var inst_12085 = inst_12120;
var inst_12086 = null;
var inst_12087 = (0);
var inst_12088 = (0);
var state_12145__$1 = (function (){var statearr_12202 = state_12145;
(statearr_12202[(25)] = inst_12119);

(statearr_12202[(19)] = inst_12085);

(statearr_12202[(9)] = inst_12086);

(statearr_12202[(20)] = inst_12087);

(statearr_12202[(10)] = inst_12088);

return statearr_12202;
})();
var statearr_12203_12318 = state_12145__$1;
(statearr_12203_12318[(2)] = null);

(statearr_12203_12318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (43))){
var state_12145__$1 = state_12145;
var statearr_12204_12320 = state_12145__$1;
(statearr_12204_12320[(2)] = null);

(statearr_12204_12320[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (29))){
var inst_12128 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12205_12322 = state_12145__$1;
(statearr_12205_12322[(2)] = inst_12128);

(statearr_12205_12322[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (44))){
var inst_12138 = (state_12145[(2)]);
var state_12145__$1 = (function (){var statearr_12207 = state_12145;
(statearr_12207[(26)] = inst_12138);

return statearr_12207;
})();
var statearr_12208_12323 = state_12145__$1;
(statearr_12208_12323[(2)] = null);

(statearr_12208_12323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (6))){
var inst_12076 = (state_12145[(27)]);
var inst_12075 = cljs.core.deref.call(null,cs);
var inst_12076__$1 = cljs.core.keys.call(null,inst_12075);
var inst_12077 = cljs.core.count.call(null,inst_12076__$1);
var inst_12078 = cljs.core.reset_BANG_.call(null,dctr,inst_12077);
var inst_12084 = cljs.core.seq.call(null,inst_12076__$1);
var inst_12085 = inst_12084;
var inst_12086 = null;
var inst_12087 = (0);
var inst_12088 = (0);
var state_12145__$1 = (function (){var statearr_12209 = state_12145;
(statearr_12209[(27)] = inst_12076__$1);

(statearr_12209[(28)] = inst_12078);

(statearr_12209[(19)] = inst_12085);

(statearr_12209[(9)] = inst_12086);

(statearr_12209[(20)] = inst_12087);

(statearr_12209[(10)] = inst_12088);

return statearr_12209;
})();
var statearr_12210_12324 = state_12145__$1;
(statearr_12210_12324[(2)] = null);

(statearr_12210_12324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (28))){
var inst_12085 = (state_12145[(19)]);
var inst_12103 = (state_12145[(23)]);
var inst_12103__$1 = cljs.core.seq.call(null,inst_12085);
var state_12145__$1 = (function (){var statearr_12211 = state_12145;
(statearr_12211[(23)] = inst_12103__$1);

return statearr_12211;
})();
if(inst_12103__$1){
var statearr_12212_12325 = state_12145__$1;
(statearr_12212_12325[(1)] = (33));

} else {
var statearr_12213_12326 = state_12145__$1;
(statearr_12213_12326[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (25))){
var inst_12088 = (state_12145[(10)]);
var inst_12087 = (state_12145[(20)]);
var inst_12090 = (inst_12088 < inst_12087);
var inst_12091 = inst_12090;
var state_12145__$1 = state_12145;
if(cljs.core.truth_(inst_12091)){
var statearr_12214_12327 = state_12145__$1;
(statearr_12214_12327[(1)] = (27));

} else {
var statearr_12215_12328 = state_12145__$1;
(statearr_12215_12328[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (34))){
var state_12145__$1 = state_12145;
var statearr_12216_12329 = state_12145__$1;
(statearr_12216_12329[(2)] = null);

(statearr_12216_12329[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (17))){
var state_12145__$1 = state_12145;
var statearr_12218_12330 = state_12145__$1;
(statearr_12218_12330[(2)] = null);

(statearr_12218_12330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (3))){
var inst_12143 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12145__$1,inst_12143);
} else {
if((state_val_12146 === (12))){
var inst_12071 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12222_12331 = state_12145__$1;
(statearr_12222_12331[(2)] = inst_12071);

(statearr_12222_12331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (2))){
var state_12145__$1 = state_12145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12145__$1,(4),ch);
} else {
if((state_val_12146 === (23))){
var state_12145__$1 = state_12145;
var statearr_12223_12335 = state_12145__$1;
(statearr_12223_12335[(2)] = null);

(statearr_12223_12335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (35))){
var inst_12126 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12224_12336 = state_12145__$1;
(statearr_12224_12336[(2)] = inst_12126);

(statearr_12224_12336[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (19))){
var inst_12043 = (state_12145[(7)]);
var inst_12047 = cljs.core.chunk_first.call(null,inst_12043);
var inst_12048 = cljs.core.chunk_rest.call(null,inst_12043);
var inst_12049 = cljs.core.count.call(null,inst_12047);
var inst_12020 = inst_12048;
var inst_12021 = inst_12047;
var inst_12022 = inst_12049;
var inst_12023 = (0);
var state_12145__$1 = (function (){var statearr_12225 = state_12145;
(statearr_12225[(14)] = inst_12020);

(statearr_12225[(15)] = inst_12021);

(statearr_12225[(16)] = inst_12022);

(statearr_12225[(17)] = inst_12023);

return statearr_12225;
})();
var statearr_12226_12337 = state_12145__$1;
(statearr_12226_12337[(2)] = null);

(statearr_12226_12337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (11))){
var inst_12020 = (state_12145[(14)]);
var inst_12043 = (state_12145[(7)]);
var inst_12043__$1 = cljs.core.seq.call(null,inst_12020);
var state_12145__$1 = (function (){var statearr_12227 = state_12145;
(statearr_12227[(7)] = inst_12043__$1);

return statearr_12227;
})();
if(inst_12043__$1){
var statearr_12228_12338 = state_12145__$1;
(statearr_12228_12338[(1)] = (16));

} else {
var statearr_12229_12339 = state_12145__$1;
(statearr_12229_12339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (9))){
var inst_12073 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12230_12340 = state_12145__$1;
(statearr_12230_12340[(2)] = inst_12073);

(statearr_12230_12340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (5))){
var inst_12018 = cljs.core.deref.call(null,cs);
var inst_12019 = cljs.core.seq.call(null,inst_12018);
var inst_12020 = inst_12019;
var inst_12021 = null;
var inst_12022 = (0);
var inst_12023 = (0);
var state_12145__$1 = (function (){var statearr_12231 = state_12145;
(statearr_12231[(14)] = inst_12020);

(statearr_12231[(15)] = inst_12021);

(statearr_12231[(16)] = inst_12022);

(statearr_12231[(17)] = inst_12023);

return statearr_12231;
})();
var statearr_12232_12341 = state_12145__$1;
(statearr_12232_12341[(2)] = null);

(statearr_12232_12341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (14))){
var state_12145__$1 = state_12145;
var statearr_12233_12342 = state_12145__$1;
(statearr_12233_12342[(2)] = null);

(statearr_12233_12342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (45))){
var inst_12135 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12237_12345 = state_12145__$1;
(statearr_12237_12345[(2)] = inst_12135);

(statearr_12237_12345[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (26))){
var inst_12076 = (state_12145[(27)]);
var inst_12130 = (state_12145[(2)]);
var inst_12132 = cljs.core.seq.call(null,inst_12076);
var state_12145__$1 = (function (){var statearr_12238 = state_12145;
(statearr_12238[(29)] = inst_12130);

return statearr_12238;
})();
if(inst_12132){
var statearr_12239_12359 = state_12145__$1;
(statearr_12239_12359[(1)] = (42));

} else {
var statearr_12240_12365 = state_12145__$1;
(statearr_12240_12365[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (16))){
var inst_12043 = (state_12145[(7)]);
var inst_12045 = cljs.core.chunked_seq_QMARK_.call(null,inst_12043);
var state_12145__$1 = state_12145;
if(inst_12045){
var statearr_12241_12375 = state_12145__$1;
(statearr_12241_12375[(1)] = (19));

} else {
var statearr_12242_12378 = state_12145__$1;
(statearr_12242_12378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (38))){
var inst_12123 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12246_12389 = state_12145__$1;
(statearr_12246_12389[(2)] = inst_12123);

(statearr_12246_12389[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (30))){
var state_12145__$1 = state_12145;
var statearr_12247_12400 = state_12145__$1;
(statearr_12247_12400[(2)] = null);

(statearr_12247_12400[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (10))){
var inst_12021 = (state_12145[(15)]);
var inst_12023 = (state_12145[(17)]);
var inst_12031 = cljs.core._nth.call(null,inst_12021,inst_12023);
var inst_12032 = cljs.core.nth.call(null,inst_12031,(0),null);
var inst_12033 = cljs.core.nth.call(null,inst_12031,(1),null);
var state_12145__$1 = (function (){var statearr_12248 = state_12145;
(statearr_12248[(24)] = inst_12032);

return statearr_12248;
})();
if(cljs.core.truth_(inst_12033)){
var statearr_12249_12419 = state_12145__$1;
(statearr_12249_12419[(1)] = (13));

} else {
var statearr_12250_12420 = state_12145__$1;
(statearr_12250_12420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (18))){
var inst_12069 = (state_12145[(2)]);
var state_12145__$1 = state_12145;
var statearr_12251_12421 = state_12145__$1;
(statearr_12251_12421[(2)] = inst_12069);

(statearr_12251_12421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (42))){
var state_12145__$1 = state_12145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12145__$1,(45),dchan);
} else {
if((state_val_12146 === (37))){
var inst_12103 = (state_12145[(23)]);
var inst_12112 = (state_12145[(22)]);
var inst_12011 = (state_12145[(12)]);
var inst_12112__$1 = cljs.core.first.call(null,inst_12103);
var inst_12113 = cljs.core.async.put_BANG_.call(null,inst_12112__$1,inst_12011,done);
var state_12145__$1 = (function (){var statearr_12260 = state_12145;
(statearr_12260[(22)] = inst_12112__$1);

return statearr_12260;
})();
if(cljs.core.truth_(inst_12113)){
var statearr_12265_12424 = state_12145__$1;
(statearr_12265_12424[(1)] = (39));

} else {
var statearr_12266_12425 = state_12145__$1;
(statearr_12266_12425[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12146 === (8))){
var inst_12023 = (state_12145[(17)]);
var inst_12022 = (state_12145[(16)]);
var inst_12025 = (inst_12023 < inst_12022);
var inst_12026 = inst_12025;
var state_12145__$1 = state_12145;
if(cljs.core.truth_(inst_12026)){
var statearr_12267_12426 = state_12145__$1;
(statearr_12267_12426[(1)] = (10));

} else {
var statearr_12268_12428 = state_12145__$1;
(statearr_12268_12428[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__11064__auto__ = null;
var cljs$core$async$mult_$_state_machine__11064__auto____0 = (function (){
var statearr_12269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12269[(0)] = cljs$core$async$mult_$_state_machine__11064__auto__);

(statearr_12269[(1)] = (1));

return statearr_12269;
});
var cljs$core$async$mult_$_state_machine__11064__auto____1 = (function (state_12145){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_12145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e12270){var ex__11067__auto__ = e12270;
var statearr_12271_12432 = state_12145;
(statearr_12271_12432[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_12145[(4)]))){
var statearr_12272_12433 = state_12145;
(statearr_12272_12433[(1)] = cljs.core.first.call(null,(state_12145[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12435 = state_12145;
state_12145 = G__12435;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11064__auto__ = function(state_12145){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11064__auto____1.call(this,state_12145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11064__auto____0;
cljs$core$async$mult_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11064__auto____1;
return cljs$core$async$mult_$_state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_12273 = f__11155__auto__.call(null);
(statearr_12273[(6)] = c__11154__auto___12278);

return statearr_12273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12275 = arguments.length;
switch (G__12275) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_12445 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_12445.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12449 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_12449.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12452 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m);
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12452.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12454 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,state_map);
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_12454.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12456 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,mode);
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12456.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12460 = arguments.length;
var i__5750__auto___12462 = (0);
while(true){
if((i__5750__auto___12462 < len__5749__auto___12460)){
args__5755__auto__.push((arguments[i__5750__auto___12462]));

var G__12463 = (i__5750__auto___12462 + (1));
i__5750__auto___12462 = G__12463;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12315){
var map__12316 = p__12315;
var map__12316__$1 = cljs.core.__destructure_map.call(null,map__12316);
var opts = map__12316__$1;
var statearr_12317_12467 = state;
(statearr_12317_12467[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12319_12468 = state;
(statearr_12319_12468[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_12321_12470 = state;
(statearr_12321_12470[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12307){
var G__12308 = cljs.core.first.call(null,seq12307);
var seq12307__$1 = cljs.core.next.call(null,seq12307);
var G__12309 = cljs.core.first.call(null,seq12307__$1);
var seq12307__$2 = cljs.core.next.call(null,seq12307__$1);
var G__12310 = cljs.core.first.call(null,seq12307__$2);
var seq12307__$3 = cljs.core.next.call(null,seq12307__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12308,G__12309,G__12310,seq12307__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12332 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12333){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12333 = meta12333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12334,meta12333__$1){
var self__ = this;
var _12334__$1 = this;
return (new cljs.core.async.t_cljs$core$async12332(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12333__$1));
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12334){
var self__ = this;
var _12334__$1 = this;
return self__.meta12333;
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12332.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12333","meta12333",1660719894,null)], null);
}));

(cljs.core.async.t_cljs$core$async12332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12332");

(cljs.core.async.t_cljs$core$async12332.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12332.
 */
cljs.core.async.__GT_t_cljs$core$async12332 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12332(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12333){
return (new cljs.core.async.t_cljs$core$async12332(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12333));
});

}

return (new cljs.core.async.t_cljs$core$async12332(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11154__auto___12484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_12417){
var state_val_12418 = (state_12417[(1)]);
if((state_val_12418 === (7))){
var inst_12373 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
if(cljs.core.truth_(inst_12373)){
var statearr_12422_12485 = state_12417__$1;
(statearr_12422_12485[(1)] = (8));

} else {
var statearr_12423_12486 = state_12417__$1;
(statearr_12423_12486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (20))){
var inst_12366 = (state_12417[(7)]);
var state_12417__$1 = state_12417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12417__$1,(23),out,inst_12366);
} else {
if((state_val_12418 === (1))){
var inst_12347 = calc_state.call(null);
var inst_12348 = cljs.core.__destructure_map.call(null,inst_12347);
var inst_12349 = cljs.core.get.call(null,inst_12348,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12350 = cljs.core.get.call(null,inst_12348,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12351 = cljs.core.get.call(null,inst_12348,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12352 = inst_12347;
var state_12417__$1 = (function (){var statearr_12427 = state_12417;
(statearr_12427[(8)] = inst_12349);

(statearr_12427[(9)] = inst_12350);

(statearr_12427[(10)] = inst_12351);

(statearr_12427[(11)] = inst_12352);

return statearr_12427;
})();
var statearr_12429_12489 = state_12417__$1;
(statearr_12429_12489[(2)] = null);

(statearr_12429_12489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (24))){
var inst_12355 = (state_12417[(12)]);
var inst_12352 = inst_12355;
var state_12417__$1 = (function (){var statearr_12430 = state_12417;
(statearr_12430[(11)] = inst_12352);

return statearr_12430;
})();
var statearr_12431_12490 = state_12417__$1;
(statearr_12431_12490[(2)] = null);

(statearr_12431_12490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (4))){
var inst_12366 = (state_12417[(7)]);
var inst_12368 = (state_12417[(13)]);
var inst_12364 = (state_12417[(2)]);
var inst_12366__$1 = cljs.core.nth.call(null,inst_12364,(0),null);
var inst_12367 = cljs.core.nth.call(null,inst_12364,(1),null);
var inst_12368__$1 = (inst_12366__$1 == null);
var state_12417__$1 = (function (){var statearr_12434 = state_12417;
(statearr_12434[(7)] = inst_12366__$1);

(statearr_12434[(14)] = inst_12367);

(statearr_12434[(13)] = inst_12368__$1);

return statearr_12434;
})();
if(cljs.core.truth_(inst_12368__$1)){
var statearr_12436_12491 = state_12417__$1;
(statearr_12436_12491[(1)] = (5));

} else {
var statearr_12437_12492 = state_12417__$1;
(statearr_12437_12492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (15))){
var inst_12356 = (state_12417[(15)]);
var inst_12390 = (state_12417[(16)]);
var inst_12390__$1 = cljs.core.empty_QMARK_.call(null,inst_12356);
var state_12417__$1 = (function (){var statearr_12439 = state_12417;
(statearr_12439[(16)] = inst_12390__$1);

return statearr_12439;
})();
if(inst_12390__$1){
var statearr_12440_12493 = state_12417__$1;
(statearr_12440_12493[(1)] = (17));

} else {
var statearr_12441_12494 = state_12417__$1;
(statearr_12441_12494[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (21))){
var inst_12355 = (state_12417[(12)]);
var inst_12352 = inst_12355;
var state_12417__$1 = (function (){var statearr_12442 = state_12417;
(statearr_12442[(11)] = inst_12352);

return statearr_12442;
})();
var statearr_12443_12495 = state_12417__$1;
(statearr_12443_12495[(2)] = null);

(statearr_12443_12495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (13))){
var inst_12382 = (state_12417[(2)]);
var inst_12383 = calc_state.call(null);
var inst_12352 = inst_12383;
var state_12417__$1 = (function (){var statearr_12444 = state_12417;
(statearr_12444[(17)] = inst_12382);

(statearr_12444[(11)] = inst_12352);

return statearr_12444;
})();
var statearr_12446_12497 = state_12417__$1;
(statearr_12446_12497[(2)] = null);

(statearr_12446_12497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (22))){
var inst_12411 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
var statearr_12447_12498 = state_12417__$1;
(statearr_12447_12498[(2)] = inst_12411);

(statearr_12447_12498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (6))){
var inst_12367 = (state_12417[(14)]);
var inst_12371 = cljs.core._EQ_.call(null,inst_12367,change);
var state_12417__$1 = state_12417;
var statearr_12448_12499 = state_12417__$1;
(statearr_12448_12499[(2)] = inst_12371);

(statearr_12448_12499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (25))){
var state_12417__$1 = state_12417;
var statearr_12450_12500 = state_12417__$1;
(statearr_12450_12500[(2)] = null);

(statearr_12450_12500[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (17))){
var inst_12357 = (state_12417[(18)]);
var inst_12367 = (state_12417[(14)]);
var inst_12392 = inst_12357.call(null,inst_12367);
var inst_12393 = cljs.core.not.call(null,inst_12392);
var state_12417__$1 = state_12417;
var statearr_12451_12503 = state_12417__$1;
(statearr_12451_12503[(2)] = inst_12393);

(statearr_12451_12503[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (3))){
var inst_12415 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12417__$1,inst_12415);
} else {
if((state_val_12418 === (12))){
var state_12417__$1 = state_12417;
var statearr_12453_12504 = state_12417__$1;
(statearr_12453_12504[(2)] = null);

(statearr_12453_12504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (2))){
var inst_12352 = (state_12417[(11)]);
var inst_12355 = (state_12417[(12)]);
var inst_12355__$1 = cljs.core.__destructure_map.call(null,inst_12352);
var inst_12356 = cljs.core.get.call(null,inst_12355__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12357 = cljs.core.get.call(null,inst_12355__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12358 = cljs.core.get.call(null,inst_12355__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12417__$1 = (function (){var statearr_12455 = state_12417;
(statearr_12455[(12)] = inst_12355__$1);

(statearr_12455[(15)] = inst_12356);

(statearr_12455[(18)] = inst_12357);

return statearr_12455;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12417__$1,(4),inst_12358);
} else {
if((state_val_12418 === (23))){
var inst_12402 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
if(cljs.core.truth_(inst_12402)){
var statearr_12457_12505 = state_12417__$1;
(statearr_12457_12505[(1)] = (24));

} else {
var statearr_12458_12506 = state_12417__$1;
(statearr_12458_12506[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (19))){
var inst_12396 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
var statearr_12459_12507 = state_12417__$1;
(statearr_12459_12507[(2)] = inst_12396);

(statearr_12459_12507[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (11))){
var inst_12367 = (state_12417[(14)]);
var inst_12379 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12367);
var state_12417__$1 = state_12417;
var statearr_12461_12511 = state_12417__$1;
(statearr_12461_12511[(2)] = inst_12379);

(statearr_12461_12511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (9))){
var inst_12356 = (state_12417[(15)]);
var inst_12367 = (state_12417[(14)]);
var inst_12386 = (state_12417[(19)]);
var inst_12386__$1 = inst_12356.call(null,inst_12367);
var state_12417__$1 = (function (){var statearr_12464 = state_12417;
(statearr_12464[(19)] = inst_12386__$1);

return statearr_12464;
})();
if(cljs.core.truth_(inst_12386__$1)){
var statearr_12465_12512 = state_12417__$1;
(statearr_12465_12512[(1)] = (14));

} else {
var statearr_12466_12513 = state_12417__$1;
(statearr_12466_12513[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (5))){
var inst_12368 = (state_12417[(13)]);
var state_12417__$1 = state_12417;
var statearr_12469_12514 = state_12417__$1;
(statearr_12469_12514[(2)] = inst_12368);

(statearr_12469_12514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (14))){
var inst_12386 = (state_12417[(19)]);
var state_12417__$1 = state_12417;
var statearr_12471_12515 = state_12417__$1;
(statearr_12471_12515[(2)] = inst_12386);

(statearr_12471_12515[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (26))){
var inst_12407 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
var statearr_12472_12516 = state_12417__$1;
(statearr_12472_12516[(2)] = inst_12407);

(statearr_12472_12516[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (16))){
var inst_12398 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
if(cljs.core.truth_(inst_12398)){
var statearr_12473_12517 = state_12417__$1;
(statearr_12473_12517[(1)] = (20));

} else {
var statearr_12474_12518 = state_12417__$1;
(statearr_12474_12518[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (10))){
var inst_12413 = (state_12417[(2)]);
var state_12417__$1 = state_12417;
var statearr_12475_12519 = state_12417__$1;
(statearr_12475_12519[(2)] = inst_12413);

(statearr_12475_12519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (18))){
var inst_12390 = (state_12417[(16)]);
var state_12417__$1 = state_12417;
var statearr_12476_12520 = state_12417__$1;
(statearr_12476_12520[(2)] = inst_12390);

(statearr_12476_12520[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12418 === (8))){
var inst_12366 = (state_12417[(7)]);
var inst_12376 = (inst_12366 == null);
var state_12417__$1 = state_12417;
if(cljs.core.truth_(inst_12376)){
var statearr_12477_12521 = state_12417__$1;
(statearr_12477_12521[(1)] = (11));

} else {
var statearr_12478_12522 = state_12417__$1;
(statearr_12478_12522[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__11064__auto__ = null;
var cljs$core$async$mix_$_state_machine__11064__auto____0 = (function (){
var statearr_12479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12479[(0)] = cljs$core$async$mix_$_state_machine__11064__auto__);

(statearr_12479[(1)] = (1));

return statearr_12479;
});
var cljs$core$async$mix_$_state_machine__11064__auto____1 = (function (state_12417){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_12417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e12480){var ex__11067__auto__ = e12480;
var statearr_12481_12523 = state_12417;
(statearr_12481_12523[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_12417[(4)]))){
var statearr_12482_12524 = state_12417;
(statearr_12482_12524[(1)] = cljs.core.first.call(null,(state_12417[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12525 = state_12417;
state_12417 = G__12525;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11064__auto__ = function(state_12417){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11064__auto____1.call(this,state_12417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11064__auto____0;
cljs$core$async$mix_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11064__auto____1;
return cljs$core$async$mix_$_state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_12483 = f__11155__auto__.call(null);
(statearr_12483[(6)] = c__11154__auto___12484);

return statearr_12483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_12556 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_12556.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12598 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v,ch);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_12598.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12601 = (function() {
var G__12602 = null;
var G__12602__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__12602__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__12602 = function(p,v){
switch(arguments.length){
case 1:
return G__12602__1.call(this,p);
case 2:
return G__12602__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12602.cljs$core$IFn$_invoke$arity$1 = G__12602__1;
G__12602.cljs$core$IFn$_invoke$arity$2 = G__12602__2;
return G__12602;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12488 = arguments.length;
switch (G__12488) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12601.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12601.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__12502 = arguments.length;
switch (G__12502) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12496_SHARP_){
if(cljs.core.truth_(p1__12496_SHARP_.call(null,topic))){
return p1__12496_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12496_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12508 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12509){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12509 = meta12509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12510,meta12509__$1){
var self__ = this;
var _12510__$1 = this;
return (new cljs.core.async.t_cljs$core$async12508(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12509__$1));
}));

(cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12510){
var self__ = this;
var _12510__$1 = this;
return self__.meta12509;
}));

(cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12508.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12509","meta12509",823953787,null)], null);
}));

(cljs.core.async.t_cljs$core$async12508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12508");

(cljs.core.async.t_cljs$core$async12508.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12508.
 */
cljs.core.async.__GT_t_cljs$core$async12508 = (function cljs$core$async$__GT_t_cljs$core$async12508(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12509){
return (new cljs.core.async.t_cljs$core$async12508(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12509));
});

}

return (new cljs.core.async.t_cljs$core$async12508(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11154__auto___12655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_12599){
var state_val_12600 = (state_12599[(1)]);
if((state_val_12600 === (7))){
var inst_12594 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
var statearr_12603_12656 = state_12599__$1;
(statearr_12603_12656[(2)] = inst_12594);

(statearr_12603_12656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (20))){
var state_12599__$1 = state_12599;
var statearr_12604_12657 = state_12599__$1;
(statearr_12604_12657[(2)] = null);

(statearr_12604_12657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (1))){
var state_12599__$1 = state_12599;
var statearr_12605_12658 = state_12599__$1;
(statearr_12605_12658[(2)] = null);

(statearr_12605_12658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (24))){
var inst_12577 = (state_12599[(7)]);
var inst_12586 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12577);
var state_12599__$1 = state_12599;
var statearr_12606_12659 = state_12599__$1;
(statearr_12606_12659[(2)] = inst_12586);

(statearr_12606_12659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (4))){
var inst_12528 = (state_12599[(8)]);
var inst_12528__$1 = (state_12599[(2)]);
var inst_12529 = (inst_12528__$1 == null);
var state_12599__$1 = (function (){var statearr_12608 = state_12599;
(statearr_12608[(8)] = inst_12528__$1);

return statearr_12608;
})();
if(cljs.core.truth_(inst_12529)){
var statearr_12609_12661 = state_12599__$1;
(statearr_12609_12661[(1)] = (5));

} else {
var statearr_12610_12663 = state_12599__$1;
(statearr_12610_12663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (15))){
var inst_12571 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
var statearr_12611_12667 = state_12599__$1;
(statearr_12611_12667[(2)] = inst_12571);

(statearr_12611_12667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (21))){
var inst_12591 = (state_12599[(2)]);
var state_12599__$1 = (function (){var statearr_12612 = state_12599;
(statearr_12612[(9)] = inst_12591);

return statearr_12612;
})();
var statearr_12613_12670 = state_12599__$1;
(statearr_12613_12670[(2)] = null);

(statearr_12613_12670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (13))){
var inst_12552 = (state_12599[(10)]);
var inst_12554 = cljs.core.chunked_seq_QMARK_.call(null,inst_12552);
var state_12599__$1 = state_12599;
if(inst_12554){
var statearr_12614_12671 = state_12599__$1;
(statearr_12614_12671[(1)] = (16));

} else {
var statearr_12615_12672 = state_12599__$1;
(statearr_12615_12672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (22))){
var inst_12583 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
if(cljs.core.truth_(inst_12583)){
var statearr_12616_12673 = state_12599__$1;
(statearr_12616_12673[(1)] = (23));

} else {
var statearr_12617_12674 = state_12599__$1;
(statearr_12617_12674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (6))){
var inst_12528 = (state_12599[(8)]);
var inst_12577 = (state_12599[(7)]);
var inst_12579 = (state_12599[(11)]);
var inst_12577__$1 = topic_fn.call(null,inst_12528);
var inst_12578 = cljs.core.deref.call(null,mults);
var inst_12579__$1 = cljs.core.get.call(null,inst_12578,inst_12577__$1);
var state_12599__$1 = (function (){var statearr_12618 = state_12599;
(statearr_12618[(7)] = inst_12577__$1);

(statearr_12618[(11)] = inst_12579__$1);

return statearr_12618;
})();
if(cljs.core.truth_(inst_12579__$1)){
var statearr_12619_12683 = state_12599__$1;
(statearr_12619_12683[(1)] = (19));

} else {
var statearr_12620_12689 = state_12599__$1;
(statearr_12620_12689[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (25))){
var inst_12588 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
var statearr_12621_12701 = state_12599__$1;
(statearr_12621_12701[(2)] = inst_12588);

(statearr_12621_12701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (17))){
var inst_12552 = (state_12599[(10)]);
var inst_12562 = cljs.core.first.call(null,inst_12552);
var inst_12563 = cljs.core.async.muxch_STAR_.call(null,inst_12562);
var inst_12564 = cljs.core.async.close_BANG_.call(null,inst_12563);
var inst_12565 = cljs.core.next.call(null,inst_12552);
var inst_12538 = inst_12565;
var inst_12539 = null;
var inst_12540 = (0);
var inst_12541 = (0);
var state_12599__$1 = (function (){var statearr_12622 = state_12599;
(statearr_12622[(12)] = inst_12564);

(statearr_12622[(13)] = inst_12538);

(statearr_12622[(14)] = inst_12539);

(statearr_12622[(15)] = inst_12540);

(statearr_12622[(16)] = inst_12541);

return statearr_12622;
})();
var statearr_12623_12715 = state_12599__$1;
(statearr_12623_12715[(2)] = null);

(statearr_12623_12715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (3))){
var inst_12596 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12599__$1,inst_12596);
} else {
if((state_val_12600 === (12))){
var inst_12573 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
var statearr_12624_12718 = state_12599__$1;
(statearr_12624_12718[(2)] = inst_12573);

(statearr_12624_12718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (2))){
var state_12599__$1 = state_12599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12599__$1,(4),ch);
} else {
if((state_val_12600 === (23))){
var state_12599__$1 = state_12599;
var statearr_12625_12721 = state_12599__$1;
(statearr_12625_12721[(2)] = null);

(statearr_12625_12721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (19))){
var inst_12579 = (state_12599[(11)]);
var inst_12528 = (state_12599[(8)]);
var inst_12581 = cljs.core.async.muxch_STAR_.call(null,inst_12579);
var state_12599__$1 = state_12599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12599__$1,(22),inst_12581,inst_12528);
} else {
if((state_val_12600 === (11))){
var inst_12538 = (state_12599[(13)]);
var inst_12552 = (state_12599[(10)]);
var inst_12552__$1 = cljs.core.seq.call(null,inst_12538);
var state_12599__$1 = (function (){var statearr_12626 = state_12599;
(statearr_12626[(10)] = inst_12552__$1);

return statearr_12626;
})();
if(inst_12552__$1){
var statearr_12627_12723 = state_12599__$1;
(statearr_12627_12723[(1)] = (13));

} else {
var statearr_12628_12724 = state_12599__$1;
(statearr_12628_12724[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (9))){
var inst_12575 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
var statearr_12629_12727 = state_12599__$1;
(statearr_12629_12727[(2)] = inst_12575);

(statearr_12629_12727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (5))){
var inst_12535 = cljs.core.deref.call(null,mults);
var inst_12536 = cljs.core.vals.call(null,inst_12535);
var inst_12537 = cljs.core.seq.call(null,inst_12536);
var inst_12538 = inst_12537;
var inst_12539 = null;
var inst_12540 = (0);
var inst_12541 = (0);
var state_12599__$1 = (function (){var statearr_12630 = state_12599;
(statearr_12630[(13)] = inst_12538);

(statearr_12630[(14)] = inst_12539);

(statearr_12630[(15)] = inst_12540);

(statearr_12630[(16)] = inst_12541);

return statearr_12630;
})();
var statearr_12631_12729 = state_12599__$1;
(statearr_12631_12729[(2)] = null);

(statearr_12631_12729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (14))){
var state_12599__$1 = state_12599;
var statearr_12635_12730 = state_12599__$1;
(statearr_12635_12730[(2)] = null);

(statearr_12635_12730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (16))){
var inst_12552 = (state_12599[(10)]);
var inst_12557 = cljs.core.chunk_first.call(null,inst_12552);
var inst_12558 = cljs.core.chunk_rest.call(null,inst_12552);
var inst_12559 = cljs.core.count.call(null,inst_12557);
var inst_12538 = inst_12558;
var inst_12539 = inst_12557;
var inst_12540 = inst_12559;
var inst_12541 = (0);
var state_12599__$1 = (function (){var statearr_12636 = state_12599;
(statearr_12636[(13)] = inst_12538);

(statearr_12636[(14)] = inst_12539);

(statearr_12636[(15)] = inst_12540);

(statearr_12636[(16)] = inst_12541);

return statearr_12636;
})();
var statearr_12637_12731 = state_12599__$1;
(statearr_12637_12731[(2)] = null);

(statearr_12637_12731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (10))){
var inst_12539 = (state_12599[(14)]);
var inst_12541 = (state_12599[(16)]);
var inst_12538 = (state_12599[(13)]);
var inst_12540 = (state_12599[(15)]);
var inst_12546 = cljs.core._nth.call(null,inst_12539,inst_12541);
var inst_12547 = cljs.core.async.muxch_STAR_.call(null,inst_12546);
var inst_12548 = cljs.core.async.close_BANG_.call(null,inst_12547);
var inst_12549 = (inst_12541 + (1));
var tmp12632 = inst_12538;
var tmp12633 = inst_12539;
var tmp12634 = inst_12540;
var inst_12538__$1 = tmp12632;
var inst_12539__$1 = tmp12633;
var inst_12540__$1 = tmp12634;
var inst_12541__$1 = inst_12549;
var state_12599__$1 = (function (){var statearr_12638 = state_12599;
(statearr_12638[(17)] = inst_12548);

(statearr_12638[(13)] = inst_12538__$1);

(statearr_12638[(14)] = inst_12539__$1);

(statearr_12638[(15)] = inst_12540__$1);

(statearr_12638[(16)] = inst_12541__$1);

return statearr_12638;
})();
var statearr_12639_12735 = state_12599__$1;
(statearr_12639_12735[(2)] = null);

(statearr_12639_12735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (18))){
var inst_12568 = (state_12599[(2)]);
var state_12599__$1 = state_12599;
var statearr_12640_12736 = state_12599__$1;
(statearr_12640_12736[(2)] = inst_12568);

(statearr_12640_12736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12600 === (8))){
var inst_12541 = (state_12599[(16)]);
var inst_12540 = (state_12599[(15)]);
var inst_12543 = (inst_12541 < inst_12540);
var inst_12544 = inst_12543;
var state_12599__$1 = state_12599;
if(cljs.core.truth_(inst_12544)){
var statearr_12641_12739 = state_12599__$1;
(statearr_12641_12739[(1)] = (10));

} else {
var statearr_12642_12740 = state_12599__$1;
(statearr_12642_12740[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_12643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12643[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_12643[(1)] = (1));

return statearr_12643;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_12599){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_12599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e12644){var ex__11067__auto__ = e12644;
var statearr_12645_12742 = state_12599;
(statearr_12645_12742[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_12599[(4)]))){
var statearr_12646_12743 = state_12599;
(statearr_12646_12743[(1)] = cljs.core.first.call(null,(state_12599[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12744 = state_12599;
state_12599 = G__12744;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_12599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_12599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_12647 = f__11155__auto__.call(null);
(statearr_12647[(6)] = c__11154__auto___12655);

return statearr_12647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__12650 = arguments.length;
switch (G__12650) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__12652 = arguments.length;
switch (G__12652) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__12654 = arguments.length;
switch (G__12654) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__11154__auto___12774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_12713){
var state_val_12714 = (state_12713[(1)]);
if((state_val_12714 === (7))){
var state_12713__$1 = state_12713;
var statearr_12716_12785 = state_12713__$1;
(statearr_12716_12785[(2)] = null);

(statearr_12716_12785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (1))){
var state_12713__$1 = state_12713;
var statearr_12717_12786 = state_12713__$1;
(statearr_12717_12786[(2)] = null);

(statearr_12717_12786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (4))){
var inst_12665 = (state_12713[(7)]);
var inst_12664 = (state_12713[(8)]);
var inst_12668 = (inst_12665 < inst_12664);
var state_12713__$1 = state_12713;
if(cljs.core.truth_(inst_12668)){
var statearr_12719_12803 = state_12713__$1;
(statearr_12719_12803[(1)] = (6));

} else {
var statearr_12720_12804 = state_12713__$1;
(statearr_12720_12804[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (15))){
var inst_12698 = (state_12713[(9)]);
var inst_12704 = cljs.core.apply.call(null,f,inst_12698);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12713__$1,(17),out,inst_12704);
} else {
if((state_val_12714 === (13))){
var inst_12698 = (state_12713[(9)]);
var inst_12698__$1 = (state_12713[(2)]);
var inst_12699 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12698__$1);
var state_12713__$1 = (function (){var statearr_12722 = state_12713;
(statearr_12722[(9)] = inst_12698__$1);

return statearr_12722;
})();
if(cljs.core.truth_(inst_12699)){
var statearr_12725_12807 = state_12713__$1;
(statearr_12725_12807[(1)] = (14));

} else {
var statearr_12726_12808 = state_12713__$1;
(statearr_12726_12808[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (6))){
var state_12713__$1 = state_12713;
var statearr_12728_12812 = state_12713__$1;
(statearr_12728_12812[(2)] = null);

(statearr_12728_12812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (17))){
var inst_12706 = (state_12713[(2)]);
var state_12713__$1 = (function (){var statearr_12733 = state_12713;
(statearr_12733[(10)] = inst_12706);

return statearr_12733;
})();
var statearr_12734_12815 = state_12713__$1;
(statearr_12734_12815[(2)] = null);

(statearr_12734_12815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (3))){
var inst_12711 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12713__$1,inst_12711);
} else {
if((state_val_12714 === (12))){
var _ = (function (){var statearr_12737 = state_12713;
(statearr_12737[(4)] = cljs.core.rest.call(null,(state_12713[(4)])));

return statearr_12737;
})();
var state_12713__$1 = state_12713;
var ex12732 = (state_12713__$1[(2)]);
var statearr_12738_12822 = state_12713__$1;
(statearr_12738_12822[(5)] = ex12732);


if((ex12732 instanceof Object)){
var statearr_12741_12823 = state_12713__$1;
(statearr_12741_12823[(1)] = (11));

(statearr_12741_12823[(5)] = null);

} else {
throw ex12732;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (2))){
var inst_12662 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12664 = cnt;
var inst_12665 = (0);
var state_12713__$1 = (function (){var statearr_12745 = state_12713;
(statearr_12745[(11)] = inst_12662);

(statearr_12745[(8)] = inst_12664);

(statearr_12745[(7)] = inst_12665);

return statearr_12745;
})();
var statearr_12747_12825 = state_12713__$1;
(statearr_12747_12825[(2)] = null);

(statearr_12747_12825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (11))){
var inst_12675 = (state_12713[(2)]);
var inst_12676 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12713__$1 = (function (){var statearr_12748 = state_12713;
(statearr_12748[(12)] = inst_12675);

return statearr_12748;
})();
var statearr_12749_12827 = state_12713__$1;
(statearr_12749_12827[(2)] = inst_12676);

(statearr_12749_12827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (9))){
var inst_12665 = (state_12713[(7)]);
var _ = (function (){var statearr_12750 = state_12713;
(statearr_12750[(4)] = cljs.core.cons.call(null,(12),(state_12713[(4)])));

return statearr_12750;
})();
var inst_12682 = chs__$1.call(null,inst_12665);
var inst_12684 = done.call(null,inst_12665);
var inst_12685 = cljs.core.async.take_BANG_.call(null,inst_12682,inst_12684);
var ___$1 = (function (){var statearr_12752 = state_12713;
(statearr_12752[(4)] = cljs.core.rest.call(null,(state_12713[(4)])));

return statearr_12752;
})();
var state_12713__$1 = state_12713;
var statearr_12753_12834 = state_12713__$1;
(statearr_12753_12834[(2)] = inst_12685);

(statearr_12753_12834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (5))){
var inst_12696 = (state_12713[(2)]);
var state_12713__$1 = (function (){var statearr_12754 = state_12713;
(statearr_12754[(13)] = inst_12696);

return statearr_12754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12713__$1,(13),dchan);
} else {
if((state_val_12714 === (14))){
var inst_12702 = cljs.core.async.close_BANG_.call(null,out);
var state_12713__$1 = state_12713;
var statearr_12755_12837 = state_12713__$1;
(statearr_12755_12837[(2)] = inst_12702);

(statearr_12755_12837[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (16))){
var inst_12709 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
var statearr_12756_12838 = state_12713__$1;
(statearr_12756_12838[(2)] = inst_12709);

(statearr_12756_12838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (10))){
var inst_12665 = (state_12713[(7)]);
var inst_12688 = (state_12713[(2)]);
var inst_12690 = (inst_12665 + (1));
var inst_12665__$1 = inst_12690;
var state_12713__$1 = (function (){var statearr_12757 = state_12713;
(statearr_12757[(14)] = inst_12688);

(statearr_12757[(7)] = inst_12665__$1);

return statearr_12757;
})();
var statearr_12758_12843 = state_12713__$1;
(statearr_12758_12843[(2)] = null);

(statearr_12758_12843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (8))){
var inst_12694 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
var statearr_12759_12844 = state_12713__$1;
(statearr_12759_12844[(2)] = inst_12694);

(statearr_12759_12844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_12760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12760[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_12760[(1)] = (1));

return statearr_12760;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_12713){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_12713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e12761){var ex__11067__auto__ = e12761;
var statearr_12762_12847 = state_12713;
(statearr_12762_12847[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_12713[(4)]))){
var statearr_12763_12849 = state_12713;
(statearr_12763_12849[(1)] = cljs.core.first.call(null,(state_12713[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12856 = state_12713;
state_12713 = G__12856;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_12713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_12713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_12764 = f__11155__auto__.call(null);
(statearr_12764[(6)] = c__11154__auto___12774);

return statearr_12764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__12768 = arguments.length;
switch (G__12768) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11154__auto___12862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_12805){
var state_val_12806 = (state_12805[(1)]);
if((state_val_12806 === (7))){
var inst_12780 = (state_12805[(7)]);
var inst_12781 = (state_12805[(8)]);
var inst_12780__$1 = (state_12805[(2)]);
var inst_12781__$1 = cljs.core.nth.call(null,inst_12780__$1,(0),null);
var inst_12782 = cljs.core.nth.call(null,inst_12780__$1,(1),null);
var inst_12783 = (inst_12781__$1 == null);
var state_12805__$1 = (function (){var statearr_12811 = state_12805;
(statearr_12811[(7)] = inst_12780__$1);

(statearr_12811[(8)] = inst_12781__$1);

(statearr_12811[(9)] = inst_12782);

return statearr_12811;
})();
if(cljs.core.truth_(inst_12783)){
var statearr_12813_12879 = state_12805__$1;
(statearr_12813_12879[(1)] = (8));

} else {
var statearr_12814_12897 = state_12805__$1;
(statearr_12814_12897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (1))){
var inst_12769 = cljs.core.vec.call(null,chs);
var inst_12770 = inst_12769;
var state_12805__$1 = (function (){var statearr_12816 = state_12805;
(statearr_12816[(10)] = inst_12770);

return statearr_12816;
})();
var statearr_12821_12900 = state_12805__$1;
(statearr_12821_12900[(2)] = null);

(statearr_12821_12900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (4))){
var inst_12770 = (state_12805[(10)]);
var state_12805__$1 = state_12805;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12805__$1,(7),inst_12770);
} else {
if((state_val_12806 === (6))){
var inst_12799 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
var statearr_12824_12903 = state_12805__$1;
(statearr_12824_12903[(2)] = inst_12799);

(statearr_12824_12903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (3))){
var inst_12801 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12805__$1,inst_12801);
} else {
if((state_val_12806 === (2))){
var inst_12770 = (state_12805[(10)]);
var inst_12772 = cljs.core.count.call(null,inst_12770);
var inst_12773 = (inst_12772 > (0));
var state_12805__$1 = state_12805;
if(cljs.core.truth_(inst_12773)){
var statearr_12832_12907 = state_12805__$1;
(statearr_12832_12907[(1)] = (4));

} else {
var statearr_12833_12914 = state_12805__$1;
(statearr_12833_12914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (11))){
var inst_12770 = (state_12805[(10)]);
var inst_12792 = (state_12805[(2)]);
var tmp12826 = inst_12770;
var inst_12770__$1 = tmp12826;
var state_12805__$1 = (function (){var statearr_12835 = state_12805;
(statearr_12835[(11)] = inst_12792);

(statearr_12835[(10)] = inst_12770__$1);

return statearr_12835;
})();
var statearr_12836_12916 = state_12805__$1;
(statearr_12836_12916[(2)] = null);

(statearr_12836_12916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (9))){
var inst_12781 = (state_12805[(8)]);
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12805__$1,(11),out,inst_12781);
} else {
if((state_val_12806 === (5))){
var inst_12797 = cljs.core.async.close_BANG_.call(null,out);
var state_12805__$1 = state_12805;
var statearr_12845_12918 = state_12805__$1;
(statearr_12845_12918[(2)] = inst_12797);

(statearr_12845_12918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (10))){
var inst_12795 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
var statearr_12846_12920 = state_12805__$1;
(statearr_12846_12920[(2)] = inst_12795);

(statearr_12846_12920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (8))){
var inst_12770 = (state_12805[(10)]);
var inst_12780 = (state_12805[(7)]);
var inst_12781 = (state_12805[(8)]);
var inst_12782 = (state_12805[(9)]);
var inst_12787 = (function (){var cs = inst_12770;
var vec__12776 = inst_12780;
var v = inst_12781;
var c = inst_12782;
return (function (p1__12765_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12765_SHARP_);
});
})();
var inst_12788 = cljs.core.filterv.call(null,inst_12787,inst_12770);
var inst_12770__$1 = inst_12788;
var state_12805__$1 = (function (){var statearr_12848 = state_12805;
(statearr_12848[(10)] = inst_12770__$1);

return statearr_12848;
})();
var statearr_12850_12926 = state_12805__$1;
(statearr_12850_12926[(2)] = null);

(statearr_12850_12926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_12851 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12851[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_12851[(1)] = (1));

return statearr_12851;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_12805){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_12805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e12857){var ex__11067__auto__ = e12857;
var statearr_12858_12930 = state_12805;
(statearr_12858_12930[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_12805[(4)]))){
var statearr_12859_12932 = state_12805;
(statearr_12859_12932[(1)] = cljs.core.first.call(null,(state_12805[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12934 = state_12805;
state_12805 = G__12934;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_12805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_12805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_12860 = f__11155__auto__.call(null);
(statearr_12860[(6)] = c__11154__auto___12862);

return statearr_12860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12864 = arguments.length;
switch (G__12864) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11154__auto___12948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_12898){
var state_val_12899 = (state_12898[(1)]);
if((state_val_12899 === (7))){
var inst_12878 = (state_12898[(7)]);
var inst_12878__$1 = (state_12898[(2)]);
var inst_12880 = (inst_12878__$1 == null);
var inst_12881 = cljs.core.not.call(null,inst_12880);
var state_12898__$1 = (function (){var statearr_12901 = state_12898;
(statearr_12901[(7)] = inst_12878__$1);

return statearr_12901;
})();
if(inst_12881){
var statearr_12902_12952 = state_12898__$1;
(statearr_12902_12952[(1)] = (8));

} else {
var statearr_12904_12954 = state_12898__$1;
(statearr_12904_12954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12899 === (1))){
var inst_12873 = (0);
var state_12898__$1 = (function (){var statearr_12906 = state_12898;
(statearr_12906[(8)] = inst_12873);

return statearr_12906;
})();
var statearr_12908_12956 = state_12898__$1;
(statearr_12908_12956[(2)] = null);

(statearr_12908_12956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12899 === (4))){
var state_12898__$1 = state_12898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12898__$1,(7),ch);
} else {
if((state_val_12899 === (6))){
var inst_12892 = (state_12898[(2)]);
var state_12898__$1 = state_12898;
var statearr_12917_12958 = state_12898__$1;
(statearr_12917_12958[(2)] = inst_12892);

(statearr_12917_12958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12899 === (3))){
var inst_12894 = (state_12898[(2)]);
var inst_12895 = cljs.core.async.close_BANG_.call(null,out);
var state_12898__$1 = (function (){var statearr_12919 = state_12898;
(statearr_12919[(9)] = inst_12894);

return statearr_12919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12898__$1,inst_12895);
} else {
if((state_val_12899 === (2))){
var inst_12873 = (state_12898[(8)]);
var inst_12875 = (inst_12873 < n);
var state_12898__$1 = state_12898;
if(cljs.core.truth_(inst_12875)){
var statearr_12923_12965 = state_12898__$1;
(statearr_12923_12965[(1)] = (4));

} else {
var statearr_12924_12967 = state_12898__$1;
(statearr_12924_12967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12899 === (11))){
var inst_12873 = (state_12898[(8)]);
var inst_12884 = (state_12898[(2)]);
var inst_12885 = (inst_12873 + (1));
var inst_12873__$1 = inst_12885;
var state_12898__$1 = (function (){var statearr_12925 = state_12898;
(statearr_12925[(10)] = inst_12884);

(statearr_12925[(8)] = inst_12873__$1);

return statearr_12925;
})();
var statearr_12927_12968 = state_12898__$1;
(statearr_12927_12968[(2)] = null);

(statearr_12927_12968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12899 === (9))){
var state_12898__$1 = state_12898;
var statearr_12928_12969 = state_12898__$1;
(statearr_12928_12969[(2)] = null);

(statearr_12928_12969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12899 === (5))){
var state_12898__$1 = state_12898;
var statearr_12929_12972 = state_12898__$1;
(statearr_12929_12972[(2)] = null);

(statearr_12929_12972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12899 === (10))){
var inst_12889 = (state_12898[(2)]);
var state_12898__$1 = state_12898;
var statearr_12931_12973 = state_12898__$1;
(statearr_12931_12973[(2)] = inst_12889);

(statearr_12931_12973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12899 === (8))){
var inst_12878 = (state_12898[(7)]);
var state_12898__$1 = state_12898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12898__$1,(11),out,inst_12878);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_12935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12935[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_12935[(1)] = (1));

return statearr_12935;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_12898){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_12898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e12936){var ex__11067__auto__ = e12936;
var statearr_12937_12982 = state_12898;
(statearr_12937_12982[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_12898[(4)]))){
var statearr_12938_12983 = state_12898;
(statearr_12938_12983[(1)] = cljs.core.first.call(null,(state_12898[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12984 = state_12898;
state_12898 = G__12984;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_12898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_12898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_12940 = f__11155__auto__.call(null);
(statearr_12940[(6)] = c__11154__auto___12948);

return statearr_12940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12944 = (function (f,ch,meta12945){
this.f = f;
this.ch = ch;
this.meta12945 = meta12945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12946,meta12945__$1){
var self__ = this;
var _12946__$1 = this;
return (new cljs.core.async.t_cljs$core$async12944(self__.f,self__.ch,meta12945__$1));
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12946){
var self__ = this;
var _12946__$1 = this;
return self__.meta12945;
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12960 = (function (f,ch,meta12945,_,fn1,meta12961){
this.f = f;
this.ch = ch;
this.meta12945 = meta12945;
this._ = _;
this.fn1 = fn1;
this.meta12961 = meta12961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12962,meta12961__$1){
var self__ = this;
var _12962__$1 = this;
return (new cljs.core.async.t_cljs$core$async12960(self__.f,self__.ch,self__.meta12945,self__._,self__.fn1,meta12961__$1));
}));

(cljs.core.async.t_cljs$core$async12960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12962){
var self__ = this;
var _12962__$1 = this;
return self__.meta12961;
}));

(cljs.core.async.t_cljs$core$async12960.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__12943_SHARP_){
return f1.call(null,(((p1__12943_SHARP_ == null))?null:self__.f.call(null,p1__12943_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async12960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12945","meta12945",1328854820,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12944","cljs.core.async/t_cljs$core$async12944",594887650,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12961","meta12961",1977208995,null)], null);
}));

(cljs.core.async.t_cljs$core$async12960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12960");

(cljs.core.async.t_cljs$core$async12960.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12960.
 */
cljs.core.async.__GT_t_cljs$core$async12960 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12960(f__$1,ch__$1,meta12945__$1,___$2,fn1__$1,meta12961){
return (new cljs.core.async.t_cljs$core$async12960(f__$1,ch__$1,meta12945__$1,___$2,fn1__$1,meta12961));
});

}

return (new cljs.core.async.t_cljs$core$async12960(self__.f,self__.ch,self__.meta12945,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12945","meta12945",1328854820,null)], null);
}));

(cljs.core.async.t_cljs$core$async12944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12944");

(cljs.core.async.t_cljs$core$async12944.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12944.
 */
cljs.core.async.__GT_t_cljs$core$async12944 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12944(f__$1,ch__$1,meta12945){
return (new cljs.core.async.t_cljs$core$async12944(f__$1,ch__$1,meta12945));
});

}

return (new cljs.core.async.t_cljs$core$async12944(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12991 = (function (f,ch,meta12992){
this.f = f;
this.ch = ch;
this.meta12992 = meta12992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12993,meta12992__$1){
var self__ = this;
var _12993__$1 = this;
return (new cljs.core.async.t_cljs$core$async12991(self__.f,self__.ch,meta12992__$1));
}));

(cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12993){
var self__ = this;
var _12993__$1 = this;
return self__.meta12992;
}));

(cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async12991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12992","meta12992",-829734649,null)], null);
}));

(cljs.core.async.t_cljs$core$async12991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12991");

(cljs.core.async.t_cljs$core$async12991.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12991.
 */
cljs.core.async.__GT_t_cljs$core$async12991 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12991(f__$1,ch__$1,meta12992){
return (new cljs.core.async.t_cljs$core$async12991(f__$1,ch__$1,meta12992));
});

}

return (new cljs.core.async.t_cljs$core$async12991(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13001 = (function (p,ch,meta13002){
this.p = p;
this.ch = ch;
this.meta13002 = meta13002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13003,meta13002__$1){
var self__ = this;
var _13003__$1 = this;
return (new cljs.core.async.t_cljs$core$async13001(self__.p,self__.ch,meta13002__$1));
}));

(cljs.core.async.t_cljs$core$async13001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13003){
var self__ = this;
var _13003__$1 = this;
return self__.meta13002;
}));

(cljs.core.async.t_cljs$core$async13001.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13001.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13001.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async13001.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13001.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async13001.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13001.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async13001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13002","meta13002",1850705786,null)], null);
}));

(cljs.core.async.t_cljs$core$async13001.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13001");

(cljs.core.async.t_cljs$core$async13001.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async13001");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13001.
 */
cljs.core.async.__GT_t_cljs$core$async13001 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13001(p__$1,ch__$1,meta13002){
return (new cljs.core.async.t_cljs$core$async13001(p__$1,ch__$1,meta13002));
});

}

return (new cljs.core.async.t_cljs$core$async13001(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13015 = arguments.length;
switch (G__13015) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11154__auto___13064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_13036){
var state_val_13037 = (state_13036[(1)]);
if((state_val_13037 === (7))){
var inst_13032 = (state_13036[(2)]);
var state_13036__$1 = state_13036;
var statearr_13038_13065 = state_13036__$1;
(statearr_13038_13065[(2)] = inst_13032);

(statearr_13038_13065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (1))){
var state_13036__$1 = state_13036;
var statearr_13039_13066 = state_13036__$1;
(statearr_13039_13066[(2)] = null);

(statearr_13039_13066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (4))){
var inst_13018 = (state_13036[(7)]);
var inst_13018__$1 = (state_13036[(2)]);
var inst_13019 = (inst_13018__$1 == null);
var state_13036__$1 = (function (){var statearr_13041 = state_13036;
(statearr_13041[(7)] = inst_13018__$1);

return statearr_13041;
})();
if(cljs.core.truth_(inst_13019)){
var statearr_13042_13068 = state_13036__$1;
(statearr_13042_13068[(1)] = (5));

} else {
var statearr_13043_13071 = state_13036__$1;
(statearr_13043_13071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (6))){
var inst_13018 = (state_13036[(7)]);
var inst_13023 = p.call(null,inst_13018);
var state_13036__$1 = state_13036;
if(cljs.core.truth_(inst_13023)){
var statearr_13044_13086 = state_13036__$1;
(statearr_13044_13086[(1)] = (8));

} else {
var statearr_13045_13088 = state_13036__$1;
(statearr_13045_13088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (3))){
var inst_13034 = (state_13036[(2)]);
var state_13036__$1 = state_13036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13036__$1,inst_13034);
} else {
if((state_val_13037 === (2))){
var state_13036__$1 = state_13036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13036__$1,(4),ch);
} else {
if((state_val_13037 === (11))){
var inst_13026 = (state_13036[(2)]);
var state_13036__$1 = state_13036;
var statearr_13047_13102 = state_13036__$1;
(statearr_13047_13102[(2)] = inst_13026);

(statearr_13047_13102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (9))){
var state_13036__$1 = state_13036;
var statearr_13050_13109 = state_13036__$1;
(statearr_13050_13109[(2)] = null);

(statearr_13050_13109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (5))){
var inst_13021 = cljs.core.async.close_BANG_.call(null,out);
var state_13036__$1 = state_13036;
var statearr_13051_13134 = state_13036__$1;
(statearr_13051_13134[(2)] = inst_13021);

(statearr_13051_13134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (10))){
var inst_13029 = (state_13036[(2)]);
var state_13036__$1 = (function (){var statearr_13052 = state_13036;
(statearr_13052[(8)] = inst_13029);

return statearr_13052;
})();
var statearr_13053_13137 = state_13036__$1;
(statearr_13053_13137[(2)] = null);

(statearr_13053_13137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13037 === (8))){
var inst_13018 = (state_13036[(7)]);
var state_13036__$1 = state_13036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13036__$1,(11),out,inst_13018);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_13054 = [null,null,null,null,null,null,null,null,null];
(statearr_13054[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_13054[(1)] = (1));

return statearr_13054;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_13036){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_13036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e13055){var ex__11067__auto__ = e13055;
var statearr_13057_13139 = state_13036;
(statearr_13057_13139[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_13036[(4)]))){
var statearr_13059_13140 = state_13036;
(statearr_13059_13140[(1)] = cljs.core.first.call(null,(state_13036[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13142 = state_13036;
state_13036 = G__13142;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_13036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_13036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_13060 = f__11155__auto__.call(null);
(statearr_13060[(6)] = c__11154__auto___13064);

return statearr_13060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13063 = arguments.length;
switch (G__13063) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_13135){
var state_val_13136 = (state_13135[(1)]);
if((state_val_13136 === (7))){
var inst_13130 = (state_13135[(2)]);
var state_13135__$1 = state_13135;
var statearr_13138_13183 = state_13135__$1;
(statearr_13138_13183[(2)] = inst_13130);

(statearr_13138_13183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (20))){
var inst_13098 = (state_13135[(7)]);
var inst_13111 = (state_13135[(2)]);
var inst_13112 = cljs.core.next.call(null,inst_13098);
var inst_13082 = inst_13112;
var inst_13083 = null;
var inst_13084 = (0);
var inst_13085 = (0);
var state_13135__$1 = (function (){var statearr_13141 = state_13135;
(statearr_13141[(8)] = inst_13111);

(statearr_13141[(9)] = inst_13082);

(statearr_13141[(10)] = inst_13083);

(statearr_13141[(11)] = inst_13084);

(statearr_13141[(12)] = inst_13085);

return statearr_13141;
})();
var statearr_13143_13184 = state_13135__$1;
(statearr_13143_13184[(2)] = null);

(statearr_13143_13184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (1))){
var state_13135__$1 = state_13135;
var statearr_13144_13185 = state_13135__$1;
(statearr_13144_13185[(2)] = null);

(statearr_13144_13185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (4))){
var inst_13070 = (state_13135[(13)]);
var inst_13070__$1 = (state_13135[(2)]);
var inst_13072 = (inst_13070__$1 == null);
var state_13135__$1 = (function (){var statearr_13146 = state_13135;
(statearr_13146[(13)] = inst_13070__$1);

return statearr_13146;
})();
if(cljs.core.truth_(inst_13072)){
var statearr_13147_13188 = state_13135__$1;
(statearr_13147_13188[(1)] = (5));

} else {
var statearr_13148_13189 = state_13135__$1;
(statearr_13148_13189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (15))){
var state_13135__$1 = state_13135;
var statearr_13152_13190 = state_13135__$1;
(statearr_13152_13190[(2)] = null);

(statearr_13152_13190[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (21))){
var state_13135__$1 = state_13135;
var statearr_13153_13191 = state_13135__$1;
(statearr_13153_13191[(2)] = null);

(statearr_13153_13191[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (13))){
var inst_13085 = (state_13135[(12)]);
var inst_13082 = (state_13135[(9)]);
var inst_13083 = (state_13135[(10)]);
var inst_13084 = (state_13135[(11)]);
var inst_13094 = (state_13135[(2)]);
var inst_13095 = (inst_13085 + (1));
var tmp13149 = inst_13082;
var tmp13150 = inst_13083;
var tmp13151 = inst_13084;
var inst_13082__$1 = tmp13149;
var inst_13083__$1 = tmp13150;
var inst_13084__$1 = tmp13151;
var inst_13085__$1 = inst_13095;
var state_13135__$1 = (function (){var statearr_13154 = state_13135;
(statearr_13154[(14)] = inst_13094);

(statearr_13154[(9)] = inst_13082__$1);

(statearr_13154[(10)] = inst_13083__$1);

(statearr_13154[(11)] = inst_13084__$1);

(statearr_13154[(12)] = inst_13085__$1);

return statearr_13154;
})();
var statearr_13155_13194 = state_13135__$1;
(statearr_13155_13194[(2)] = null);

(statearr_13155_13194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (22))){
var state_13135__$1 = state_13135;
var statearr_13156_13195 = state_13135__$1;
(statearr_13156_13195[(2)] = null);

(statearr_13156_13195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (6))){
var inst_13070 = (state_13135[(13)]);
var inst_13080 = f.call(null,inst_13070);
var inst_13081 = cljs.core.seq.call(null,inst_13080);
var inst_13082 = inst_13081;
var inst_13083 = null;
var inst_13084 = (0);
var inst_13085 = (0);
var state_13135__$1 = (function (){var statearr_13157 = state_13135;
(statearr_13157[(9)] = inst_13082);

(statearr_13157[(10)] = inst_13083);

(statearr_13157[(11)] = inst_13084);

(statearr_13157[(12)] = inst_13085);

return statearr_13157;
})();
var statearr_13158_13219 = state_13135__$1;
(statearr_13158_13219[(2)] = null);

(statearr_13158_13219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (17))){
var inst_13098 = (state_13135[(7)]);
var inst_13103 = cljs.core.chunk_first.call(null,inst_13098);
var inst_13104 = cljs.core.chunk_rest.call(null,inst_13098);
var inst_13105 = cljs.core.count.call(null,inst_13103);
var inst_13082 = inst_13104;
var inst_13083 = inst_13103;
var inst_13084 = inst_13105;
var inst_13085 = (0);
var state_13135__$1 = (function (){var statearr_13159 = state_13135;
(statearr_13159[(9)] = inst_13082);

(statearr_13159[(10)] = inst_13083);

(statearr_13159[(11)] = inst_13084);

(statearr_13159[(12)] = inst_13085);

return statearr_13159;
})();
var statearr_13160_13234 = state_13135__$1;
(statearr_13160_13234[(2)] = null);

(statearr_13160_13234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (3))){
var inst_13132 = (state_13135[(2)]);
var state_13135__$1 = state_13135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13135__$1,inst_13132);
} else {
if((state_val_13136 === (12))){
var inst_13120 = (state_13135[(2)]);
var state_13135__$1 = state_13135;
var statearr_13161_13238 = state_13135__$1;
(statearr_13161_13238[(2)] = inst_13120);

(statearr_13161_13238[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (2))){
var state_13135__$1 = state_13135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13135__$1,(4),in$);
} else {
if((state_val_13136 === (23))){
var inst_13128 = (state_13135[(2)]);
var state_13135__$1 = state_13135;
var statearr_13162_13240 = state_13135__$1;
(statearr_13162_13240[(2)] = inst_13128);

(statearr_13162_13240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (19))){
var inst_13115 = (state_13135[(2)]);
var state_13135__$1 = state_13135;
var statearr_13163_13243 = state_13135__$1;
(statearr_13163_13243[(2)] = inst_13115);

(statearr_13163_13243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (11))){
var inst_13082 = (state_13135[(9)]);
var inst_13098 = (state_13135[(7)]);
var inst_13098__$1 = cljs.core.seq.call(null,inst_13082);
var state_13135__$1 = (function (){var statearr_13164 = state_13135;
(statearr_13164[(7)] = inst_13098__$1);

return statearr_13164;
})();
if(inst_13098__$1){
var statearr_13165_13245 = state_13135__$1;
(statearr_13165_13245[(1)] = (14));

} else {
var statearr_13166_13248 = state_13135__$1;
(statearr_13166_13248[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (9))){
var inst_13122 = (state_13135[(2)]);
var inst_13123 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13135__$1 = (function (){var statearr_13167 = state_13135;
(statearr_13167[(15)] = inst_13122);

return statearr_13167;
})();
if(cljs.core.truth_(inst_13123)){
var statearr_13168_13251 = state_13135__$1;
(statearr_13168_13251[(1)] = (21));

} else {
var statearr_13169_13252 = state_13135__$1;
(statearr_13169_13252[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (5))){
var inst_13074 = cljs.core.async.close_BANG_.call(null,out);
var state_13135__$1 = state_13135;
var statearr_13170_13255 = state_13135__$1;
(statearr_13170_13255[(2)] = inst_13074);

(statearr_13170_13255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (14))){
var inst_13098 = (state_13135[(7)]);
var inst_13100 = cljs.core.chunked_seq_QMARK_.call(null,inst_13098);
var state_13135__$1 = state_13135;
if(inst_13100){
var statearr_13171_13257 = state_13135__$1;
(statearr_13171_13257[(1)] = (17));

} else {
var statearr_13172_13258 = state_13135__$1;
(statearr_13172_13258[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (16))){
var inst_13118 = (state_13135[(2)]);
var state_13135__$1 = state_13135;
var statearr_13173_13260 = state_13135__$1;
(statearr_13173_13260[(2)] = inst_13118);

(statearr_13173_13260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13136 === (10))){
var inst_13083 = (state_13135[(10)]);
var inst_13085 = (state_13135[(12)]);
var inst_13092 = cljs.core._nth.call(null,inst_13083,inst_13085);
var state_13135__$1 = state_13135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13135__$1,(13),out,inst_13092);
} else {
if((state_val_13136 === (18))){
var inst_13098 = (state_13135[(7)]);
var inst_13108 = cljs.core.first.call(null,inst_13098);
var state_13135__$1 = state_13135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13135__$1,(20),out,inst_13108);
} else {
if((state_val_13136 === (8))){
var inst_13085 = (state_13135[(12)]);
var inst_13084 = (state_13135[(11)]);
var inst_13089 = (inst_13085 < inst_13084);
var inst_13090 = inst_13089;
var state_13135__$1 = state_13135;
if(cljs.core.truth_(inst_13090)){
var statearr_13174_13265 = state_13135__$1;
(statearr_13174_13265[(1)] = (10));

} else {
var statearr_13175_13266 = state_13135__$1;
(statearr_13175_13266[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11064__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11064__auto____0 = (function (){
var statearr_13176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13176[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11064__auto__);

(statearr_13176[(1)] = (1));

return statearr_13176;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11064__auto____1 = (function (state_13135){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_13135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e13177){var ex__11067__auto__ = e13177;
var statearr_13178_13287 = state_13135;
(statearr_13178_13287[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_13135[(4)]))){
var statearr_13179_13298 = state_13135;
(statearr_13179_13298[(1)] = cljs.core.first.call(null,(state_13135[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13314 = state_13135;
state_13135 = G__13314;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11064__auto__ = function(state_13135){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11064__auto____1.call(this,state_13135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11064__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11064__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_13180 = f__11155__auto__.call(null);
(statearr_13180[(6)] = c__11154__auto__);

return statearr_13180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));

return c__11154__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13182 = arguments.length;
switch (G__13182) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13187 = arguments.length;
switch (G__13187) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13193 = arguments.length;
switch (G__13193) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11154__auto___13335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_13220){
var state_val_13222 = (state_13220[(1)]);
if((state_val_13222 === (7))){
var inst_13214 = (state_13220[(2)]);
var state_13220__$1 = state_13220;
var statearr_13224_13336 = state_13220__$1;
(statearr_13224_13336[(2)] = inst_13214);

(statearr_13224_13336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13222 === (1))){
var inst_13196 = null;
var state_13220__$1 = (function (){var statearr_13226 = state_13220;
(statearr_13226[(7)] = inst_13196);

return statearr_13226;
})();
var statearr_13227_13337 = state_13220__$1;
(statearr_13227_13337[(2)] = null);

(statearr_13227_13337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13222 === (4))){
var inst_13199 = (state_13220[(8)]);
var inst_13199__$1 = (state_13220[(2)]);
var inst_13200 = (inst_13199__$1 == null);
var inst_13201 = cljs.core.not.call(null,inst_13200);
var state_13220__$1 = (function (){var statearr_13229 = state_13220;
(statearr_13229[(8)] = inst_13199__$1);

return statearr_13229;
})();
if(inst_13201){
var statearr_13230_13341 = state_13220__$1;
(statearr_13230_13341[(1)] = (5));

} else {
var statearr_13231_13342 = state_13220__$1;
(statearr_13231_13342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13222 === (6))){
var state_13220__$1 = state_13220;
var statearr_13232_13345 = state_13220__$1;
(statearr_13232_13345[(2)] = null);

(statearr_13232_13345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13222 === (3))){
var inst_13216 = (state_13220[(2)]);
var inst_13217 = cljs.core.async.close_BANG_.call(null,out);
var state_13220__$1 = (function (){var statearr_13233 = state_13220;
(statearr_13233[(9)] = inst_13216);

return statearr_13233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13220__$1,inst_13217);
} else {
if((state_val_13222 === (2))){
var state_13220__$1 = state_13220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13220__$1,(4),ch);
} else {
if((state_val_13222 === (11))){
var inst_13199 = (state_13220[(8)]);
var inst_13208 = (state_13220[(2)]);
var inst_13196 = inst_13199;
var state_13220__$1 = (function (){var statearr_13235 = state_13220;
(statearr_13235[(10)] = inst_13208);

(statearr_13235[(7)] = inst_13196);

return statearr_13235;
})();
var statearr_13237_13352 = state_13220__$1;
(statearr_13237_13352[(2)] = null);

(statearr_13237_13352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13222 === (9))){
var inst_13199 = (state_13220[(8)]);
var state_13220__$1 = state_13220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13220__$1,(11),out,inst_13199);
} else {
if((state_val_13222 === (5))){
var inst_13199 = (state_13220[(8)]);
var inst_13196 = (state_13220[(7)]);
var inst_13203 = cljs.core._EQ_.call(null,inst_13199,inst_13196);
var state_13220__$1 = state_13220;
if(inst_13203){
var statearr_13241_13363 = state_13220__$1;
(statearr_13241_13363[(1)] = (8));

} else {
var statearr_13242_13364 = state_13220__$1;
(statearr_13242_13364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13222 === (10))){
var inst_13211 = (state_13220[(2)]);
var state_13220__$1 = state_13220;
var statearr_13244_13365 = state_13220__$1;
(statearr_13244_13365[(2)] = inst_13211);

(statearr_13244_13365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13222 === (8))){
var inst_13196 = (state_13220[(7)]);
var tmp13239 = inst_13196;
var inst_13196__$1 = tmp13239;
var state_13220__$1 = (function (){var statearr_13246 = state_13220;
(statearr_13246[(7)] = inst_13196__$1);

return statearr_13246;
})();
var statearr_13249_13367 = state_13220__$1;
(statearr_13249_13367[(2)] = null);

(statearr_13249_13367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_13250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13250[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_13250[(1)] = (1));

return statearr_13250;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_13220){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_13220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e13253){var ex__11067__auto__ = e13253;
var statearr_13254_13371 = state_13220;
(statearr_13254_13371[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_13220[(4)]))){
var statearr_13256_13372 = state_13220;
(statearr_13256_13372[(1)] = cljs.core.first.call(null,(state_13220[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13375 = state_13220;
state_13220 = G__13375;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_13220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_13220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_13259 = f__11155__auto__.call(null);
(statearr_13259[(6)] = c__11154__auto___13335);

return statearr_13259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13262 = arguments.length;
switch (G__13262) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11154__auto___13380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_13315){
var state_val_13316 = (state_13315[(1)]);
if((state_val_13316 === (7))){
var inst_13309 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13318_13382 = state_13315__$1;
(statearr_13318_13382[(2)] = inst_13309);

(statearr_13318_13382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (1))){
var inst_13274 = (new Array(n));
var inst_13275 = inst_13274;
var inst_13276 = (0);
var state_13315__$1 = (function (){var statearr_13320 = state_13315;
(statearr_13320[(7)] = inst_13275);

(statearr_13320[(8)] = inst_13276);

return statearr_13320;
})();
var statearr_13321_13384 = state_13315__$1;
(statearr_13321_13384[(2)] = null);

(statearr_13321_13384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (4))){
var inst_13279 = (state_13315[(9)]);
var inst_13279__$1 = (state_13315[(2)]);
var inst_13280 = (inst_13279__$1 == null);
var inst_13281 = cljs.core.not.call(null,inst_13280);
var state_13315__$1 = (function (){var statearr_13322 = state_13315;
(statearr_13322[(9)] = inst_13279__$1);

return statearr_13322;
})();
if(inst_13281){
var statearr_13325_13385 = state_13315__$1;
(statearr_13325_13385[(1)] = (5));

} else {
var statearr_13326_13386 = state_13315__$1;
(statearr_13326_13386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (15))){
var inst_13303 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13330_13387 = state_13315__$1;
(statearr_13330_13387[(2)] = inst_13303);

(statearr_13330_13387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (13))){
var state_13315__$1 = state_13315;
var statearr_13331_13388 = state_13315__$1;
(statearr_13331_13388[(2)] = null);

(statearr_13331_13388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (6))){
var inst_13276 = (state_13315[(8)]);
var inst_13299 = (inst_13276 > (0));
var state_13315__$1 = state_13315;
if(cljs.core.truth_(inst_13299)){
var statearr_13333_13389 = state_13315__$1;
(statearr_13333_13389[(1)] = (12));

} else {
var statearr_13334_13390 = state_13315__$1;
(statearr_13334_13390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (3))){
var inst_13311 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13315__$1,inst_13311);
} else {
if((state_val_13316 === (12))){
var inst_13275 = (state_13315[(7)]);
var inst_13301 = cljs.core.vec.call(null,inst_13275);
var state_13315__$1 = state_13315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13315__$1,(15),out,inst_13301);
} else {
if((state_val_13316 === (2))){
var state_13315__$1 = state_13315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13315__$1,(4),ch);
} else {
if((state_val_13316 === (11))){
var inst_13292 = (state_13315[(2)]);
var inst_13293 = (new Array(n));
var inst_13275 = inst_13293;
var inst_13276 = (0);
var state_13315__$1 = (function (){var statearr_13338 = state_13315;
(statearr_13338[(10)] = inst_13292);

(statearr_13338[(7)] = inst_13275);

(statearr_13338[(8)] = inst_13276);

return statearr_13338;
})();
var statearr_13339_13445 = state_13315__$1;
(statearr_13339_13445[(2)] = null);

(statearr_13339_13445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (9))){
var inst_13275 = (state_13315[(7)]);
var inst_13290 = cljs.core.vec.call(null,inst_13275);
var state_13315__$1 = state_13315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13315__$1,(11),out,inst_13290);
} else {
if((state_val_13316 === (5))){
var inst_13275 = (state_13315[(7)]);
var inst_13276 = (state_13315[(8)]);
var inst_13279 = (state_13315[(9)]);
var inst_13284 = (state_13315[(11)]);
var inst_13283 = (inst_13275[inst_13276] = inst_13279);
var inst_13284__$1 = (inst_13276 + (1));
var inst_13285 = (inst_13284__$1 < n);
var state_13315__$1 = (function (){var statearr_13340 = state_13315;
(statearr_13340[(12)] = inst_13283);

(statearr_13340[(11)] = inst_13284__$1);

return statearr_13340;
})();
if(cljs.core.truth_(inst_13285)){
var statearr_13343_13452 = state_13315__$1;
(statearr_13343_13452[(1)] = (8));

} else {
var statearr_13344_13453 = state_13315__$1;
(statearr_13344_13453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (14))){
var inst_13306 = (state_13315[(2)]);
var inst_13307 = cljs.core.async.close_BANG_.call(null,out);
var state_13315__$1 = (function (){var statearr_13349 = state_13315;
(statearr_13349[(13)] = inst_13306);

return statearr_13349;
})();
var statearr_13350_13454 = state_13315__$1;
(statearr_13350_13454[(2)] = inst_13307);

(statearr_13350_13454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (10))){
var inst_13296 = (state_13315[(2)]);
var state_13315__$1 = state_13315;
var statearr_13351_13455 = state_13315__$1;
(statearr_13351_13455[(2)] = inst_13296);

(statearr_13351_13455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13316 === (8))){
var inst_13275 = (state_13315[(7)]);
var inst_13284 = (state_13315[(11)]);
var tmp13348 = inst_13275;
var inst_13275__$1 = tmp13348;
var inst_13276 = inst_13284;
var state_13315__$1 = (function (){var statearr_13353 = state_13315;
(statearr_13353[(7)] = inst_13275__$1);

(statearr_13353[(8)] = inst_13276);

return statearr_13353;
})();
var statearr_13362_13458 = state_13315__$1;
(statearr_13362_13458[(2)] = null);

(statearr_13362_13458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_13366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13366[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_13366[(1)] = (1));

return statearr_13366;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_13315){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_13315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e13368){var ex__11067__auto__ = e13368;
var statearr_13369_13469 = state_13315;
(statearr_13369_13469[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_13315[(4)]))){
var statearr_13370_13471 = state_13315;
(statearr_13370_13471[(1)] = cljs.core.first.call(null,(state_13315[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13474 = state_13315;
state_13315 = G__13474;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_13315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_13315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_13376 = f__11155__auto__.call(null);
(statearr_13376[(6)] = c__11154__auto___13380);

return statearr_13376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13383 = arguments.length;
switch (G__13383) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11154__auto___13517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_13439){
var state_val_13440 = (state_13439[(1)]);
if((state_val_13440 === (7))){
var inst_13435 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
var statearr_13441_13518 = state_13439__$1;
(statearr_13441_13518[(2)] = inst_13435);

(statearr_13441_13518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (1))){
var inst_13391 = [];
var inst_13392 = inst_13391;
var inst_13393 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13439__$1 = (function (){var statearr_13444 = state_13439;
(statearr_13444[(7)] = inst_13392);

(statearr_13444[(8)] = inst_13393);

return statearr_13444;
})();
var statearr_13446_13521 = state_13439__$1;
(statearr_13446_13521[(2)] = null);

(statearr_13446_13521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (4))){
var inst_13400 = (state_13439[(9)]);
var inst_13400__$1 = (state_13439[(2)]);
var inst_13401 = (inst_13400__$1 == null);
var inst_13402 = cljs.core.not.call(null,inst_13401);
var state_13439__$1 = (function (){var statearr_13449 = state_13439;
(statearr_13449[(9)] = inst_13400__$1);

return statearr_13449;
})();
if(inst_13402){
var statearr_13450_13523 = state_13439__$1;
(statearr_13450_13523[(1)] = (5));

} else {
var statearr_13451_13524 = state_13439__$1;
(statearr_13451_13524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (15))){
var inst_13392 = (state_13439[(7)]);
var inst_13427 = cljs.core.vec.call(null,inst_13392);
var state_13439__$1 = state_13439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13439__$1,(18),out,inst_13427);
} else {
if((state_val_13440 === (13))){
var inst_13422 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
var statearr_13456_13525 = state_13439__$1;
(statearr_13456_13525[(2)] = inst_13422);

(statearr_13456_13525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (6))){
var inst_13392 = (state_13439[(7)]);
var inst_13424 = inst_13392.length;
var inst_13425 = (inst_13424 > (0));
var state_13439__$1 = state_13439;
if(cljs.core.truth_(inst_13425)){
var statearr_13459_13528 = state_13439__$1;
(statearr_13459_13528[(1)] = (15));

} else {
var statearr_13463_13529 = state_13439__$1;
(statearr_13463_13529[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (17))){
var inst_13432 = (state_13439[(2)]);
var inst_13433 = cljs.core.async.close_BANG_.call(null,out);
var state_13439__$1 = (function (){var statearr_13466 = state_13439;
(statearr_13466[(10)] = inst_13432);

return statearr_13466;
})();
var statearr_13468_13530 = state_13439__$1;
(statearr_13468_13530[(2)] = inst_13433);

(statearr_13468_13530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (3))){
var inst_13437 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13439__$1,inst_13437);
} else {
if((state_val_13440 === (12))){
var inst_13392 = (state_13439[(7)]);
var inst_13415 = cljs.core.vec.call(null,inst_13392);
var state_13439__$1 = state_13439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13439__$1,(14),out,inst_13415);
} else {
if((state_val_13440 === (2))){
var state_13439__$1 = state_13439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13439__$1,(4),ch);
} else {
if((state_val_13440 === (11))){
var inst_13392 = (state_13439[(7)]);
var inst_13400 = (state_13439[(9)]);
var inst_13404 = (state_13439[(11)]);
var inst_13412 = inst_13392.push(inst_13400);
var tmp13472 = inst_13392;
var inst_13392__$1 = tmp13472;
var inst_13393 = inst_13404;
var state_13439__$1 = (function (){var statearr_13478 = state_13439;
(statearr_13478[(12)] = inst_13412);

(statearr_13478[(7)] = inst_13392__$1);

(statearr_13478[(8)] = inst_13393);

return statearr_13478;
})();
var statearr_13483_13531 = state_13439__$1;
(statearr_13483_13531[(2)] = null);

(statearr_13483_13531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (9))){
var inst_13393 = (state_13439[(8)]);
var inst_13408 = cljs.core.keyword_identical_QMARK_.call(null,inst_13393,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13439__$1 = state_13439;
var statearr_13490_13532 = state_13439__$1;
(statearr_13490_13532[(2)] = inst_13408);

(statearr_13490_13532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (5))){
var inst_13400 = (state_13439[(9)]);
var inst_13404 = (state_13439[(11)]);
var inst_13393 = (state_13439[(8)]);
var inst_13405 = (state_13439[(13)]);
var inst_13404__$1 = f.call(null,inst_13400);
var inst_13405__$1 = cljs.core._EQ_.call(null,inst_13404__$1,inst_13393);
var state_13439__$1 = (function (){var statearr_13495 = state_13439;
(statearr_13495[(11)] = inst_13404__$1);

(statearr_13495[(13)] = inst_13405__$1);

return statearr_13495;
})();
if(inst_13405__$1){
var statearr_13496_13534 = state_13439__$1;
(statearr_13496_13534[(1)] = (8));

} else {
var statearr_13497_13536 = state_13439__$1;
(statearr_13497_13536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (14))){
var inst_13400 = (state_13439[(9)]);
var inst_13404 = (state_13439[(11)]);
var inst_13417 = (state_13439[(2)]);
var inst_13418 = [];
var inst_13419 = inst_13418.push(inst_13400);
var inst_13392 = inst_13418;
var inst_13393 = inst_13404;
var state_13439__$1 = (function (){var statearr_13498 = state_13439;
(statearr_13498[(14)] = inst_13417);

(statearr_13498[(15)] = inst_13419);

(statearr_13498[(7)] = inst_13392);

(statearr_13498[(8)] = inst_13393);

return statearr_13498;
})();
var statearr_13499_13542 = state_13439__$1;
(statearr_13499_13542[(2)] = null);

(statearr_13499_13542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (16))){
var state_13439__$1 = state_13439;
var statearr_13500_13543 = state_13439__$1;
(statearr_13500_13543[(2)] = null);

(statearr_13500_13543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (10))){
var inst_13410 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
if(cljs.core.truth_(inst_13410)){
var statearr_13503_13544 = state_13439__$1;
(statearr_13503_13544[(1)] = (11));

} else {
var statearr_13504_13545 = state_13439__$1;
(statearr_13504_13545[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (18))){
var inst_13429 = (state_13439[(2)]);
var state_13439__$1 = state_13439;
var statearr_13505_13546 = state_13439__$1;
(statearr_13505_13546[(2)] = inst_13429);

(statearr_13505_13546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13440 === (8))){
var inst_13405 = (state_13439[(13)]);
var state_13439__$1 = state_13439;
var statearr_13507_13547 = state_13439__$1;
(statearr_13507_13547[(2)] = inst_13405);

(statearr_13507_13547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11064__auto__ = null;
var cljs$core$async$state_machine__11064__auto____0 = (function (){
var statearr_13509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13509[(0)] = cljs$core$async$state_machine__11064__auto__);

(statearr_13509[(1)] = (1));

return statearr_13509;
});
var cljs$core$async$state_machine__11064__auto____1 = (function (state_13439){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_13439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e13510){var ex__11067__auto__ = e13510;
var statearr_13511_13548 = state_13439;
(statearr_13511_13548[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_13439[(4)]))){
var statearr_13512_13549 = state_13439;
(statearr_13512_13549[(1)] = cljs.core.first.call(null,(state_13439[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13550 = state_13439;
state_13439 = G__13550;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs$core$async$state_machine__11064__auto__ = function(state_13439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11064__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11064__auto____1.call(this,state_13439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11064__auto____0;
cljs$core$async$state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11064__auto____1;
return cljs$core$async$state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_13515 = f__11155__auto__.call(null);
(statearr_13515[(6)] = c__11154__auto___13517);

return statearr_13515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
