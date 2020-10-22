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
if (typeof Bayrell.TimePlanner.AdminService == 'undefined') Bayrell.TimePlanner.AdminService = {};
Bayrell.TimePlanner.AdminService.AdminerPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.AdminService.AdminerPage.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.AdminService.AdminerPage.prototype.constructor = Bayrell.TimePlanner.AdminService.AdminerPage;
Object.assign(Bayrell.TimePlanner.AdminService.AdminerPage.prototype,
{
	/**
 * On component created
 */
	onCreated: function(ctx)
	{
		adminer_form.submit();
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.AdminService.AdminerPage)
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
		return "Bayrell.TimePlanner.AdminService.AdminerPage";
	},
});
Object.assign(Bayrell.TimePlanner.AdminService.AdminerPage, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.AdminService.AdminerPage,
{
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": "Redirect. Please wait..."});
			
			/* Element 'form' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "form","attrs": {"id":"adminer_form","method":"post","action":layout.route_prefix + Runtime.rtl.toStr("/adminer/4.7.6/")}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "input","attrs": {"type":"hidden","name":"auth[driver]","value":"server"}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "input","attrs": {"type":"hidden","name":"auth[server]","value":Runtime.rtl.attr(ctx, model, ["db", "host"])}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "input","attrs": {"type":"hidden","name":"auth[username]","value":Runtime.rtl.attr(ctx, model, ["db", "username"])}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "input","attrs": {"type":"hidden","name":"auth[password]","value":Runtime.rtl.attr(ctx, model, ["db", "password"])}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "input","attrs": {"type":"hidden","name":"auth[permanent]","value":"1"}});
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.AdminService";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.AdminService.AdminerPage";
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
			"class_name": "Bayrell.TimePlanner.AdminService.AdminerPage",
			"name": "Bayrell.TimePlanner.AdminService.AdminerPage",
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
Runtime.rtl.defClass(Bayrell.TimePlanner.AdminService.AdminerPage);
window["Bayrell.TimePlanner.AdminService.AdminerPage"] = Bayrell.TimePlanner.AdminService.AdminerPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.AdminService.AdminerPage;
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
if (typeof Bayrell.TimePlanner.AdminService == 'undefined') Bayrell.TimePlanner.AdminService = {};
Bayrell.TimePlanner.AdminService.AdminLayout = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.AdminService.AdminLayout.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.AdminService.AdminLayout.prototype.constructor = Bayrell.TimePlanner.AdminService.AdminLayout;
Object.assign(Bayrell.TimePlanner.AdminService.AdminLayout.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.AdminService.AdminLayout)
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
		return "Bayrell.TimePlanner.AdminService.AdminLayout";
	},
});
Object.assign(Bayrell.TimePlanner.AdminService.AdminLayout, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.AdminService.AdminLayout,
{
	css: function(ctx, vars)
	{
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var class_name = model.page_class;
			
			if (!Runtime.rtl.isEmpty(ctx, class_name))
			{
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": class_name,"attrs": {"@bind":["Bayrell.TimePlanner.AdminService.AdminLayout","page_model"],"@key":"view"}, "layout": layout});
			}
			
			return __control_childs;
		};
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.Button.Button"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.AdminService";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.AdminService.AdminLayout";
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
			"class_name": "Bayrell.TimePlanner.AdminService.AdminLayout",
			"name": "Bayrell.TimePlanner.AdminService.AdminLayout",
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
Runtime.rtl.defClass(Bayrell.TimePlanner.AdminService.AdminLayout);
window["Bayrell.TimePlanner.AdminService.AdminLayout"] = Bayrell.TimePlanner.AdminService.AdminLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.AdminService.AdminLayout;
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
if (typeof Bayrell.TimePlanner.AdminService == 'undefined') Bayrell.TimePlanner.AdminService = {};
Bayrell.TimePlanner.AdminService.AdminPattern = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.AdminService.AdminPattern.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.AdminService.AdminPattern.prototype.constructor = Bayrell.TimePlanner.AdminService.AdminPattern;
Object.assign(Bayrell.TimePlanner.AdminService.AdminPattern.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.AdminService.AdminPattern)
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
		return "Bayrell.TimePlanner.AdminService.AdminPattern";
	},
});
Object.assign(Bayrell.TimePlanner.AdminService.AdminPattern, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.AdminService.AdminPattern,
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
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "link","attrs": {"rel":"stylesheet","href":model.route_prefix + Runtime.rtl.toStr("/assets/core.css?_=") + Runtime.rtl.toStr(model.f_inc)}});
			
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
		return "Bayrell.TimePlanner.AdminService";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.AdminService.AdminPattern";
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
			"class_name": "Bayrell.TimePlanner.AdminService.AdminPattern",
			"name": "Bayrell.TimePlanner.AdminService.AdminPattern",
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
Runtime.rtl.defClass(Bayrell.TimePlanner.AdminService.AdminPattern);
window["Bayrell.TimePlanner.AdminService.AdminPattern"] = Bayrell.TimePlanner.AdminService.AdminPattern;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.AdminService.AdminPattern;
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
if (typeof Bayrell.TimePlanner.AdminService == 'undefined') Bayrell.TimePlanner.AdminService = {};
Bayrell.TimePlanner.AdminService.MainPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.AdminService.MainPage.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.AdminService.MainPage.prototype.constructor = Bayrell.TimePlanner.AdminService.MainPage;
Object.assign(Bayrell.TimePlanner.AdminService.MainPage.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.AdminService.MainPage)
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
		return "Bayrell.TimePlanner.AdminService.MainPage";
	},
});
Object.assign(Bayrell.TimePlanner.AdminService.MainPage, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.AdminService.MainPage,
{
	/**
 * Route Action
 * @return RenderContainer
 */
	MainPage: async function(ctx, container)
	{
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Index page");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "admin");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "Bayrell.TimePlanner.AdminService.MainPage");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), new Runtime.Dict(ctx));
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	css: function(ctx, vars)
	{
		return ".content.h-912a{" + Runtime.rtl.toStr("padding: 20px;") + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.content' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["content", this.getCssHash(ctx)].join(" "),"@elem_name":"content"}});
			
			/* Element 'a.link' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "a","attrs": {"href":layout.route_prefix + Runtime.rtl.toStr("/adminer/"),"target":"_self","class":["link", this.getCssHash(ctx)].join(" "),"@elem_name":"link"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": "Adminer"});
			RenderDriver.p(__v1, __v1_childs);
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "br","attrs": {}});
			
			/* Element 'a.link' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "a","attrs": {"href":layout.route_prefix + Runtime.rtl.toStr("/info/"),"target":"_self","class":["link", this.getCssHash(ctx)].join(" "),"@elem_name":"link"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": "PHP info"});
			RenderDriver.p(__v1, __v1_childs);
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "br","attrs": {}});
			
			/* Element 'a.link' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "a","attrs": {"href":layout.route_prefix + Runtime.rtl.toStr("/env/"),"target":"_self","class":["link", this.getCssHash(ctx)].join(" "),"@elem_name":"link"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": "Enviroments"});
			RenderDriver.p(__v1, __v1_childs);
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "br","attrs": {}});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.AdminService";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.AdminService.MainPage";
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
			"class_name": "Bayrell.TimePlanner.AdminService.MainPage",
			"name": "Bayrell.TimePlanner.AdminService.MainPage",
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
			"MainPage",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		if (field_name == "MainPage")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "Bayrell.TimePlanner.AdminService.MainPage",
				"name": "MainPage",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/","name":"app.main"})),
					new Runtime.Web.RouteMiddleware(ctx, Runtime.Dict.from({"value":"Runtime.Web.Auth.AuthFrontend::checkAuthMiddleware"})),
				]),
			});
		}
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.AdminService.MainPage);
window["Bayrell.TimePlanner.AdminService.MainPage"] = Bayrell.TimePlanner.AdminService.MainPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.AdminService.MainPage;
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
if (typeof Bayrell.TimePlanner.AdminService == 'undefined') Bayrell.TimePlanner.AdminService = {};
Bayrell.TimePlanner.AdminService.Page404 = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.AdminService.Page404.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.AdminService.Page404.prototype.constructor = Bayrell.TimePlanner.AdminService.Page404;
Object.assign(Bayrell.TimePlanner.AdminService.Page404.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.AdminService.Page404)
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
		return "Bayrell.TimePlanner.AdminService.Page404";
	},
});
Object.assign(Bayrell.TimePlanner.AdminService.Page404, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.AdminService.Page404,
{
	css: function(ctx, vars)
	{
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": ctx.translate(ctx, "Bayrell.TimePlanner", "Page not found")});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.AdminService";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.AdminService.Page404";
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
			"class_name": "Bayrell.TimePlanner.AdminService.Page404",
			"name": "Bayrell.TimePlanner.AdminService.Page404",
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
Runtime.rtl.defClass(Bayrell.TimePlanner.AdminService.Page404);
window["Bayrell.TimePlanner.AdminService.Page404"] = Bayrell.TimePlanner.AdminService.Page404;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.AdminService.Page404;
"use strict;"
/*!
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
if (typeof Bayrell.TimePlanner.AdminService == 'undefined') Bayrell.TimePlanner.AdminService = {};
Bayrell.TimePlanner.AdminService.Routes = function(ctx)
{
};
Object.assign(Bayrell.TimePlanner.AdminService.Routes.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.AdminService.Routes)
		{
		}
	},
	assignValue: function(ctx,k,v)
	{
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.AdminService.Routes";
	},
});
Object.assign(Bayrell.TimePlanner.AdminService.Routes,
{
	/**
	 * Layout chain
	 */
	layoutChain: function(ctx, layout)
	{
		if (layout.layout_name == "default")
		{
			layout = Runtime.rtl.setAttr(ctx, layout, Runtime.Collection.from(["layout_class"]), "Bayrell.TimePlanner.AdminService.AdminLayout");
		}
		if (layout.layout_name == "admin")
		{
			layout = Runtime.rtl.setAttr(ctx, layout, Runtime.Collection.from(["layout_class"]), "Bayrell.TimePlanner.AdminService.AdminLayout");
		}
		return Runtime.Collection.from([layout]);
	},
	/**
	 * Render chain. Set default pattern
	 */
	renderChainPatternDefault: function(ctx, container)
	{
		if (container.pattern_name == "default" && container.pattern_class == "" || container.pattern_class == "")
		{
			container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["pattern_class"]), "Bayrell.TimePlanner.AdminService.AdminPattern");
		}
		return Runtime.Collection.from([container]);
	},
	/**
	 * Render chain. Route after
	 */
	renderChainRouteAfter: function(ctx, container)
	{
		/* Change title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), container.layout.title + Runtime.rtl.toStr(" | BAYRELL Cloud OS"));
		return Runtime.Collection.from([container]);
	},
	/**
	 * Render chain
	 * Page not found
	 * @return RenderContainer
	 */
	Page404: async function(ctx, container)
	{
		if (container == null || container.isResponseExists(ctx) || container.isPageExists(ctx))
		{
			return Promise.resolve(Runtime.Collection.from([container]));
		}
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Page not found");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "default");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "Bayrell.TimePlanner.AdminService.Page404");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), null);
		/* Set 404 code */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["new_http_code"]), 404);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.AdminService";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.AdminService.Routes";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.AdminService.Routes",
			"name": "Bayrell.TimePlanner.AdminService.Routes",
			"annotations": Collection.from([
				new Runtime.Web.RouteList(ctx, Runtime.Dict.from({})),
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
Runtime.rtl.defClass(Bayrell.TimePlanner.AdminService.Routes);
window["Bayrell.TimePlanner.AdminService.Routes"] = Bayrell.TimePlanner.AdminService.Routes;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.AdminService.Routes;
"use strict;"
/*!
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
if (typeof Bayrell.TimePlanner.AdminService == 'undefined') Bayrell.TimePlanner.AdminService = {};
Bayrell.TimePlanner.AdminService.ModuleDescription = function(ctx)
{
};
Object.assign(Bayrell.TimePlanner.AdminService.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.AdminService.ModuleDescription)
		{
		}
	},
	assignValue: function(ctx,k,v)
	{
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.AdminService.ModuleDescription";
	},
});
Object.assign(Bayrell.TimePlanner.AdminService.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Bayrell.TimePlanner.AdminService";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.1.0";
	},
	/**
	 * Returns required modules
	 * @return Dict<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime":">=0.3","Runtime.Web":"*","Runtime.Web.Auth":"*"});
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return Runtime.Collection.from([new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"root-controller","value":"Runtime.Web.RenderController","params":Runtime.Dict.from({"selector":"#root","main_controller":true,"window":"RootController"})})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.LAYOUT_CHAIN,"pos":10,"value":"Bayrell.TimePlanner.AdminService.Routes::layoutChain"})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.RENDER_CHAIN,"value":"Bayrell.TimePlanner.AdminService.Routes::Page404","pos":Runtime.Web.RenderDriver.RENDER_CHAIN_CALL_PAGE_NOT_FOUND,"is_async":true})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.RENDER_CHAIN,"value":"Bayrell.TimePlanner.AdminService.Routes::renderChainRouteAfter","pos":Runtime.Web.RenderDriver.RENDER_CHAIN_CALL_ROUTE_AFTER,"is_async":true})),new Runtime.Core.Entity(ctx, Runtime.Dict.from({"name":"Bayrell.TimePlanner.AdminService.Routes"})),new Runtime.Web.RouteList(ctx, Runtime.Dict.from({"name":"Bayrell.TimePlanner.AdminService.MainPage"}))]);
	},
	/**
	 * Returns context settings
	 * @return Dict<string>
	 */
	appSettings: function(ctx, env)
	{
		return Runtime.Dict.from({"config":Runtime.Dict.from({"Runtime.Web":Runtime.Dict.from({"f_inc":"1"})})});
	},
	/**
	 * Init app
	 */
	appInit: function(ctx, c)
	{
		return c.constructor.init(ctx, c);
	},
	/**
	 * Start app
	 */
	appStart: async function(ctx, c)
	{
		return Promise.resolve(await c.constructor.start(ctx, c));
	},
	/**
	 * Run app
	 */
	appRun: async function(ctx)
	{
		var controller = ctx.getDriver(ctx, "Runtime.Web.RouteController");
		await controller.renderFirst(ctx);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.AdminService";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.AdminService.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.AdminService.ModuleDescription",
			"name": "Bayrell.TimePlanner.AdminService.ModuleDescription",
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
			"appRun",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.AdminService.ModuleDescription);
window["Bayrell.TimePlanner.AdminService.ModuleDescription"] = Bayrell.TimePlanner.AdminService.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.AdminService.ModuleDescription;