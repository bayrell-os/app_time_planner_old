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
Bayrell.TimePlanner.Admin.AdminLayout = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.Admin.AdminLayout.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.Admin.AdminLayout.prototype.constructor = Bayrell.TimePlanner.Admin.AdminLayout;
Object.assign(Bayrell.TimePlanner.Admin.AdminLayout.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.Admin.AdminLayout)
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
		return "Bayrell.TimePlanner.Admin.AdminLayout";
	},
});
Object.assign(Bayrell.TimePlanner.Admin.AdminLayout, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.Admin.AdminLayout,
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
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": class_name,"attrs": {"@bind":["Bayrell.TimePlanner.Admin.AdminLayout","page_model"],"@key":"view"}, "layout": layout});
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
		return "Bayrell.TimePlanner.Admin";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.Admin.AdminLayout";
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
			"class_name": "Bayrell.TimePlanner.Admin.AdminLayout",
			"name": "Bayrell.TimePlanner.Admin.AdminLayout",
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
Runtime.rtl.defClass(Bayrell.TimePlanner.Admin.AdminLayout);
window["Bayrell.TimePlanner.Admin.AdminLayout"] = Bayrell.TimePlanner.Admin.AdminLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.Admin.AdminLayout;