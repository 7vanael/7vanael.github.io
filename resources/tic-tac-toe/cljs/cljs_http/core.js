// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5825__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5825__auto__)){
var req = temp__5825__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__13849){
var vec__13850 = p__13849;
var k = cljs.core.nth.call(null,vec__13850,(0),null);
var v = cljs.core.nth.call(null,vec__13850,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__13857 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__13857)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__13857)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__13857)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__13857)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__13857)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__13857)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13857)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__13858){
var map__13859 = p__13858;
var map__13859__$1 = cljs.core.__destructure_map.call(null,map__13859);
var request = map__13859__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__13859__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__13859__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__13859__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__13860 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__13860,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__13860,response_type);

G__13860.setTimeoutInterval(timeout);

G__13860.setWithCredentials(send_credentials);

return G__13860;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__13869){
var map__13874 = p__13869;
var map__13874__$1 = cljs.core.__destructure_map.call(null,map__13874);
var request = map__13874__$1;
var request_method = cljs.core.get.call(null,map__13874__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__13874__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__13874__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cancel = cljs.core.get.call(null,map__13874__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__13874__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__5025__auto__ = request_method;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_13911 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__13875_13912 = xhr;
G__13875_13912.setProgressEventsEnabled(true);

G__13875_13912.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_13911,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__13875_13912.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_13911,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__11154__auto___13913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_13886){
var state_val_13887 = (state_13886[(1)]);
if((state_val_13887 === (1))){
var state_13886__$1 = state_13886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13886__$1,(2),cancel);
} else {
if((state_val_13887 === (2))){
var inst_13877 = (state_13886[(2)]);
var inst_13878 = xhr.isComplete();
var inst_13879 = cljs.core.not.call(null,inst_13878);
var state_13886__$1 = (function (){var statearr_13888 = state_13886;
(statearr_13888[(7)] = inst_13877);

return statearr_13888;
})();
if(inst_13879){
var statearr_13889_13915 = state_13886__$1;
(statearr_13889_13915[(1)] = (3));

} else {
var statearr_13890_13916 = state_13886__$1;
(statearr_13890_13916[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13887 === (3))){
var inst_13881 = xhr.abort();
var state_13886__$1 = state_13886;
var statearr_13891_13917 = state_13886__$1;
(statearr_13891_13917[(2)] = inst_13881);

(statearr_13891_13917[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13887 === (4))){
var state_13886__$1 = state_13886;
var statearr_13892_13918 = state_13886__$1;
(statearr_13892_13918[(2)] = null);

(statearr_13892_13918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13887 === (5))){
var inst_13884 = (state_13886[(2)]);
var state_13886__$1 = state_13886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13886__$1,inst_13884);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__11064__auto__ = null;
var cljs_http$core$xhr_$_state_machine__11064__auto____0 = (function (){
var statearr_13893 = [null,null,null,null,null,null,null,null];
(statearr_13893[(0)] = cljs_http$core$xhr_$_state_machine__11064__auto__);

(statearr_13893[(1)] = (1));

return statearr_13893;
});
var cljs_http$core$xhr_$_state_machine__11064__auto____1 = (function (state_13886){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_13886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e13894){var ex__11067__auto__ = e13894;
var statearr_13895_13921 = state_13886;
(statearr_13895_13921[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_13886[(4)]))){
var statearr_13896_13922 = state_13886;
(statearr_13896_13922[(1)] = cljs.core.first.call(null,(state_13886[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13923 = state_13886;
state_13886 = G__13923;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__11064__auto__ = function(state_13886){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__11064__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__11064__auto____1.call(this,state_13886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__11064__auto____0;
cljs_http$core$xhr_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__11064__auto____1;
return cljs_http$core$xhr_$_state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_13897 = f__11155__auto__.call(null);
(statearr_13897[(6)] = c__11154__auto___13913);

return statearr_13897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__13898){
var map__13899 = p__13898;
var map__13899__$1 = cljs.core.__destructure_map.call(null,map__13899);
var request = map__13899__$1;
var timeout = cljs.core.get.call(null,map__13899__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__13899__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__13899__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__13899__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_13924 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_13924], null));

if(cljs.core.truth_(cancel)){
var c__11154__auto___13925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11155__auto__ = (function (){var switch__11063__auto__ = (function (state_13904){
var state_val_13905 = (state_13904[(1)]);
if((state_val_13905 === (1))){
var state_13904__$1 = state_13904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13904__$1,(2),cancel);
} else {
if((state_val_13905 === (2))){
var inst_13901 = (state_13904[(2)]);
var inst_13902 = jsonp.cancel(req_13924);
var state_13904__$1 = (function (){var statearr_13906 = state_13904;
(statearr_13906[(7)] = inst_13901);

return statearr_13906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13904__$1,inst_13902);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__11064__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__11064__auto____0 = (function (){
var statearr_13907 = [null,null,null,null,null,null,null,null];
(statearr_13907[(0)] = cljs_http$core$jsonp_$_state_machine__11064__auto__);

(statearr_13907[(1)] = (1));

return statearr_13907;
});
var cljs_http$core$jsonp_$_state_machine__11064__auto____1 = (function (state_13904){
while(true){
var ret_value__11065__auto__ = (function (){try{while(true){
var result__11066__auto__ = switch__11063__auto__.call(null,state_13904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11066__auto__;
}
break;
}
}catch (e13908){var ex__11067__auto__ = e13908;
var statearr_13909_13926 = state_13904;
(statearr_13909_13926[(2)] = ex__11067__auto__);


if(cljs.core.seq.call(null,(state_13904[(4)]))){
var statearr_13910_13927 = state_13904;
(statearr_13910_13927[(1)] = cljs.core.first.call(null,(state_13904[(4)])));

} else {
throw ex__11067__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11065__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13928 = state_13904;
state_13904 = G__13928;
continue;
} else {
return ret_value__11065__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__11064__auto__ = function(state_13904){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__11064__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__11064__auto____1.call(this,state_13904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__11064__auto____0;
cljs_http$core$jsonp_$_state_machine__11064__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__11064__auto____1;
return cljs_http$core$jsonp_$_state_machine__11064__auto__;
})()
})();
var state__11156__auto__ = (function (){var statearr_13914 = f__11155__auto__.call(null);
(statearr_13914[(6)] = c__11154__auto___13925);

return statearr_13914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__13919){
var map__13920 = p__13919;
var map__13920__$1 = cljs.core.__destructure_map.call(null,map__13920);
var request = map__13920__$1;
var request_method = cljs.core.get.call(null,map__13920__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
