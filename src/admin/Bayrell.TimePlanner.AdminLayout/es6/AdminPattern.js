"use strict;"
/*
 *  Bayrell Time Planner
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
if (typeof Bayrell.TimePlanner.Admin == 'undefined') Bayrell.TimePlanner.Admin = {};
Bayrell.TimePlanner.Admin.AdminPattern = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.Admin.AdminPattern.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.Admin.AdminPattern.prototype.constructor = Bayrell.TimePlanner.Admin.AdminPattern;
Object.assign(Bayrell.TimePlanner.Admin.AdminPattern.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.Admin.AdminPattern)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.Admin.AdminPattern";
	},
});
Object.assign(Bayrell.TimePlanner.Admin.AdminPattern, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.Admin.AdminPattern,
{
	render: function(ctx, container, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'html' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "html","attrs": {}});
			
			/* Element 'head' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "head","attrs": {}});
			
			/* Element 'title' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "title","attrs": {}});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": model.title});
			RenderDriver.p(__v2, __v2_childs);
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "link","attrs": {"rel":"shortcut icon","href":"data:image/x-icon;,","type":"image/x-icon"}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "link","attrs": {"rel":"stylesheet","href":model.route_prefix + Runtime.rtl.toStr("/core.css?_=") + Runtime.rtl.toStr(model.f_inc)}});
			
			/* Element 'style' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "style","attrs": {"id":"root_style"}});
			
			/* Raw */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "raw", {"content": Runtime.rs.spaceless(ctx, Runtime.Web.RenderDriver.getLayoutCSS(ctx, model))});
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'body' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "body","attrs": {}});
			
			var model_encoded = Runtime.rs.base64_encode_url(ctx, Runtime.rtl.json_encode(ctx, model));
			
			var frontend_storage = Runtime.rs.base64_encode_url(ctx, Runtime.rtl.json_encode(ctx, container.frontend_storage));
			
			/* Element 'div' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"id":"root"}});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": content});
			RenderDriver.p(__v2, __v2_childs);
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "input","attrs": {"id":"root_model","type":"hidden","value":model_encoded}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "input","attrs": {"id":"frontend_storage","type":"hidden","value":frontend_storage}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "script","attrs": {"src":model.route_prefix + Runtime.rtl.toStr("/assets/runtime.js?_=") + Runtime.rtl.toStr(model.f_inc)}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "script","attrs": {"src":model.route_prefix + Runtime.rtl.toStr("/assets/components.js?_=") + Runtime.rtl.toStr(model.f_inc)}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "script","attrs": {"src":model.route_prefix + Runtime.rtl.toStr("/app.js?_=") + Runtime.rtl.toStr(model.f_inc)}});
			
			/* Element 'script' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "script","attrs": {}});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": "runWebApp("});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": this.json_encode(ctx, ctx.main_module)});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": ", "});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": this.json_encode(ctx, container.frontend_env)});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": ");"});
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.Admin";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.Admin.AdminPattern";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.Admin.AdminPattern",
			"name": "Bayrell.TimePlanner.Admin.AdminPattern",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.Admin.AdminPattern);
window["Bayrell.TimePlanner.Admin.AdminPattern"] = Bayrell.TimePlanner.Admin.AdminPattern;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.Admin.AdminPattern;