"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Auth == 'undefined') Runtime.Web.Auth = {};
Runtime.Web.Auth.AuthFrontend = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Runtime.Web.Auth.AuthFrontend.prototype = Object.create(Runtime.BaseStruct.prototype);
Runtime.Web.Auth.AuthFrontend.prototype.constructor = Runtime.Web.Auth.AuthFrontend;
Object.assign(Runtime.Web.Auth.AuthFrontend.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Auth.AuthFrontend)
		{
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Auth.AuthFrontend";
	},
});
Object.assign(Runtime.Web.Auth.AuthFrontend, Runtime.BaseStruct);
Object.assign(Runtime.Web.Auth.AuthFrontend,
{
	/**
	 * Check auth token
	 */
	checkAuthMiddleware: async function(ctx, container)
	{
		var __v0 = new Runtime.Monad(ctx, Runtime.rtl.attr(ctx, container, ["layout", "keep_data", "Runtime.Web.Auth.AuthToken"]));
		__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Web.Auth.AuthToken", null));
		var auth_token = __v0.value(ctx);
		if (auth_token == null)
		{
			return Promise.resolve(await Runtime.Web.Auth.LoginPage.actionIndex(ctx, container));
		}
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Auth";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Auth.AuthFrontend";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Auth.AuthFrontend",
			"name": "Runtime.Web.Auth.AuthFrontend",
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
Runtime.rtl.defClass(Runtime.Web.Auth.AuthFrontend);
window["Runtime.Web.Auth.AuthFrontend"] = Runtime.Web.Auth.AuthFrontend;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Auth.AuthFrontend;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Auth == 'undefined') Runtime.Web.Auth = {};
Runtime.Web.Auth.AuthToken = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Runtime.Web.Auth.AuthToken.prototype = Object.create(Runtime.BaseStruct.prototype);
Runtime.Web.Auth.AuthToken.prototype.constructor = Runtime.Web.Auth.AuthToken;
Object.assign(Runtime.Web.Auth.AuthToken.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.created = 0;
		this.expire = 0;
		this.user_id = 0;
		this.login = "";
		this.session_key = "";
		this.token_str = "";
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Auth.AuthToken)
		{
			this.created = o.created;
			this.expire = o.expire;
			this.user_id = o.user_id;
			this.login = o.login;
			this.session_key = o.session_key;
			this.token_str = o.token_str;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "created")this.created = v;
		else if (k == "expire")this.expire = v;
		else if (k == "user_id")this.user_id = v;
		else if (k == "login")this.login = v;
		else if (k == "session_key")this.session_key = v;
		else if (k == "token_str")this.token_str = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "created")return this.created;
		else if (k == "expire")return this.expire;
		else if (k == "user_id")return this.user_id;
		else if (k == "login")return this.login;
		else if (k == "session_key")return this.session_key;
		else if (k == "token_str")return this.token_str;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Auth.AuthToken";
	},
});
Object.assign(Runtime.Web.Auth.AuthToken, Runtime.BaseStruct);
Object.assign(Runtime.Web.Auth.AuthToken,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Auth";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Auth.AuthToken";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Auth.AuthToken",
			"name": "Runtime.Web.Auth.AuthToken",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("created");
			a.push("expire");
			a.push("user_id");
			a.push("login");
			a.push("session_key");
			a.push("token_str");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "created") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.AuthToken",
			"t": "int",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "expire") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.AuthToken",
			"t": "int",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "user_id") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.AuthToken",
			"t": "int",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "login") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.AuthToken",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "session_key") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.AuthToken",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "token_str") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.AuthToken",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
Runtime.rtl.defClass(Runtime.Web.Auth.AuthToken);
window["Runtime.Web.Auth.AuthToken"] = Runtime.Web.Auth.AuthToken;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Auth.AuthToken;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Auth == 'undefined') Runtime.Web.Auth = {};
Runtime.Web.Auth.LoginPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Auth.LoginPage.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Auth.LoginPage.prototype.constructor = Runtime.Web.Auth.LoginPage;
Object.assign(Runtime.Web.Auth.LoginPage.prototype,
{
	/**
 * Mouse click event
 */
	onLoginClick: async function(ctx, e)
	{
		var model = this.model(ctx);
		/* Set wait message */
		this.update(ctx, "setWaitMessage");
		/* Login */
		var answer = await Runtime.Web.RenderDriver.externalBusCall(ctx, Runtime.Dict.from({"object_name":"Runtime.Web.Auth","interface_name":"core.auth","method_name":"login","data":Runtime.Dict.from({"username":model.username,"password":model.password})}));
		/* Set answer */
		this.update(ctx, "setAnswer", answer);
		/* Redirect */
		if (answer.isSuccess(ctx))
		{
			document.location = document.location;
		}
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Auth.LoginPage)
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
		return "Runtime.Web.Auth.LoginPage";
	},
});
Object.assign(Runtime.Web.Auth.LoginPage, Runtime.Web.Component);
Object.assign(Runtime.Web.Auth.LoginPage,
{
	/**
 * Route Action
 * @return RenderContainer
 */
	actionIndex: async function(ctx, container)
	{
		var page_model = new Runtime.Web.Auth.LoginPageModel(ctx);
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Login page");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "default");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "Runtime.Web.Auth.LoginPage");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	css: function(ctx, vars)
	{
		return ".content.h-00c5{" + Runtime.rtl.toStr("text-align: center;padding-top: 50px;width: 500px;margin-left: auto;margin-right: auto;") + Runtime.rtl.toStr("}.row.h-00c5{") + Runtime.rtl.toStr("text-align: left;") + Runtime.rtl.toStr("}.head.h-00c5{") + Runtime.rtl.toStr("font-weight: bold;") + Runtime.rtl.toStr("}.wrap.h-00c5{") + Runtime.rtl.toStr("padding-bottom: 20px;") + Runtime.rtl.toStr("}.label.h-00c5{") + Runtime.rtl.toStr("padding-bottom: 5px;") + Runtime.rtl.toStr("}.label.h-00c5 label{") + Runtime.rtl.toStr("}.message.h-00c5{") + Runtime.rtl.toStr("}.result.h-00c5.success{") + Runtime.rtl.toStr("color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "success", "color"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.result.h-00c5.error{") + Runtime.rtl.toStr("color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "error", "color"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.content' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["content", this.getCssHash(ctx)].join(" "),"@key":"content","@elem_name":"content"}});
			
			/* Element 'div.wrap.head' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["wrap head", this.getCssHash(ctx)].join(" "),"@elem_name":"wrap"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": "Login"});
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'div.wrap' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"wrap"}});
			
			/* Element 'div.row.label' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"class":["row label", this.getCssHash(ctx)].join(" "),"@elem_name":"row"}});
			
			/* Element 'label' */
			var __v3; var __v3_childs = [];
			[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "label","attrs": {"for":"auth-username"}});
			
			/* Text */
			[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": "Username"});
			RenderDriver.p(__v3, __v3_childs);
			RenderDriver.p(__v2, __v2_childs);
			
			/* Element 'div.row.input' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"class":["row input", this.getCssHash(ctx)].join(" "),"@elem_name":"row"}});
			
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "component", {"name": "Runtime.Web.Input.Input","attrs": {"@name":["Runtime.Web.Auth.LoginPage","username"],"name":"username","id":"auth-username"}, "layout": layout});
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'div.wrap' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"wrap"}});
			
			/* Element 'div.row.label' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"class":["row label", this.getCssHash(ctx)].join(" "),"@elem_name":"row"}});
			
			/* Element 'label' */
			var __v3; var __v3_childs = [];
			[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "label","attrs": {"for":"auth-password"}});
			
			/* Text */
			[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": "Password"});
			RenderDriver.p(__v3, __v3_childs);
			RenderDriver.p(__v2, __v2_childs);
			
			/* Element 'div.row.input' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"class":["row input", this.getCssHash(ctx)].join(" "),"@elem_name":"row"}});
			
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "component", {"name": "Runtime.Web.Input.Input","attrs": {"type":"password","@name":["Runtime.Web.Auth.LoginPage","password"],"name":"password","id":"auth-password"}, "layout": layout});
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'div.wrap' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"wrap"}});
			
			/* Component 'Button' */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"type":"primary","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Auth.LoginPage","onLoginClick"]}, "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Login"});
				
				return __control_childs;
			}});
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'div.wrap.result' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["wrap result", this.getResultClass(ctx, model), this.getCssHash(ctx)].join(" "),"@elem_name":"wrap"}});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": model.get(ctx, "message", "")});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": model.get(ctx, "success_message", "")});
			
			/* Text */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": model.get(ctx, "error_message", "")});
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/**
 * Returns result class
 */
	getResultClass: function(ctx, model)
	{
		if (model.get(ctx, "success_message", "") != "")
		{
			return "success";
		}
		if (model.get(ctx, "error_message", "") != "")
		{
			return "error";
		}
		return "";
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.CRUD.CrudPage","Runtime.Web.Input.Button","Runtime.Web.Input.Input","Runtime.Web.Input.Label","Runtime.Web.Input.Select","Runtime.Web.Input.SelectText"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Auth";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Auth.LoginPage";
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
			"class_name": "Runtime.Web.Auth.LoginPage",
			"name": "Runtime.Web.Auth.LoginPage",
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
			"actionIndex",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		if (field_name == "actionIndex")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "Runtime.Web.Auth.LoginPage",
				"name": "actionIndex",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/login/","name":"app.login"})),
				]),
			});
		}
		return null;
	},
});
Runtime.rtl.defClass(Runtime.Web.Auth.LoginPage);
window["Runtime.Web.Auth.LoginPage"] = Runtime.Web.Auth.LoginPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Auth.LoginPage;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Auth == 'undefined') Runtime.Web.Auth = {};
Runtime.Web.Auth.LoginPageModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Runtime.Web.Auth.LoginPageModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Runtime.Web.Auth.LoginPageModel.prototype.constructor = Runtime.Web.Auth.LoginPageModel;
Object.assign(Runtime.Web.Auth.LoginPageModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.username = "";
		this.password = "";
		this.message = "";
		this.success_message = "";
		this.error_message = "";
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Auth.LoginPageModel)
		{
			this.username = o.username;
			this.password = o.password;
			this.message = o.message;
			this.success_message = o.success_message;
			this.error_message = o.error_message;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "username")this.username = v;
		else if (k == "password")this.password = v;
		else if (k == "message")this.message = v;
		else if (k == "success_message")this.success_message = v;
		else if (k == "error_message")this.error_message = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "username")return this.username;
		else if (k == "password")return this.password;
		else if (k == "message")return this.message;
		else if (k == "success_message")return this.success_message;
		else if (k == "error_message")return this.error_message;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Auth.LoginPageModel";
	},
});
Object.assign(Runtime.Web.Auth.LoginPageModel, Runtime.BaseStruct);
Object.assign(Runtime.Web.Auth.LoginPageModel,
{
	/**
	 * Set wait message
	 */
	setWaitMessage: function(ctx, model, message)
	{
		if (message == undefined) message = "";
		return model.copy(ctx, Runtime.Dict.from({"message":(message != message) ? (message) : (ctx.translate(ctx, "Runtime.Web", "Please wait")),"success_message":message,"error_message":""}));
	},
	/**
	 * Set answer
	 */
	setAnswer: function(ctx, model, answer)
	{
		if (answer.isSuccess(ctx))
		{
			return this.setSuccess(ctx, model, answer.success_message);
		}
		model = this.setError(ctx, model, answer.error_message);
		return model;
	},
	/**
	 * Success
	 */
	setSuccess: function(ctx, model, message)
	{
		return model.copy(ctx, Runtime.Dict.from({"message":"","success_message":message,"error_message":""}));
	},
	/**
	 * Error
	 */
	setError: function(ctx, model, message)
	{
		return model.copy(ctx, Runtime.Dict.from({"message":"","success_message":"","error_message":message}));
	},
	/**
	 * Clear
	 */
	clear: function(ctx, model)
	{
		return new Runtime.Web.Auth.LoginPageModel(ctx, Runtime.Dict.from({"username":"","password":"","message":"","success_message":"","error_message":""}));
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Auth";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Auth.LoginPageModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Auth.LoginPageModel",
			"name": "Runtime.Web.Auth.LoginPageModel",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("username");
			a.push("password");
			a.push("message");
			a.push("success_message");
			a.push("error_message");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "username") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.LoginPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "password") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.LoginPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "message") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.LoginPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "success_message") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.LoginPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "error_message") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Auth.LoginPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
Runtime.rtl.defClass(Runtime.Web.Auth.LoginPageModel);
window["Runtime.Web.Auth.LoginPageModel"] = Runtime.Web.Auth.LoginPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Auth.LoginPageModel;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Auth == 'undefined') Runtime.Web.Auth = {};
Runtime.Web.Auth.ModuleDescription = function(ctx)
{
};
Object.assign(Runtime.Web.Auth.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Auth.ModuleDescription)
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
		return "Runtime.Web.Auth.ModuleDescription";
	},
});
Object.assign(Runtime.Web.Auth.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Runtime.Web.Auth";
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
	 * @return Map<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime.Web":"*","Runtime.Web.Input":"*"});
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return Runtime.Collection.from([]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Auth";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Auth.ModuleDescription";
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
			"class_name": "Runtime.Web.Auth.ModuleDescription",
			"name": "Runtime.Web.Auth.ModuleDescription",
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
Runtime.rtl.defClass(Runtime.Web.Auth.ModuleDescription);
window["Runtime.Web.Auth.ModuleDescription"] = Runtime.Web.Auth.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Auth.ModuleDescription;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Dialog == 'undefined') Runtime.Web.Dialog = {};
Runtime.Web.Dialog.Dialog = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Dialog.Dialog.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Dialog.Dialog.prototype.constructor = Runtime.Web.Dialog.Dialog;
Object.assign(Runtime.Web.Dialog.Dialog.prototype,
{
	/**
 * Validate
 */
	validate: function(ctx)
	{
		if (this.params.style == Runtime.Web.Dialog.DialogModel.STYLE_PROMT)
		{
			if (this.model.input == "")
			{
				this.update(ctx, "setError", ctx.translate(ctx, "Runtime.Web.Dialog", "Type input"));
				return false;
			}
		}
		return true;
	},
	/**
 * Input keydown
 */
	onInputKeyDown: async function(ctx, msg)
	{
		var e = msg.data;
		if (e.keyCode == 13)
		{
			this.update(ctx, "setInput", e.value);
			this.update(ctx, "setError", "");
			this.pressButton(ctx, Runtime.Web.Dialog.DialogModel.BUTTON_RESULT_OK);
		}
	},
	/**
 * Button click
 */
	onButtonClick: async function(ctx, msg)
	{
		var tag = msg.sender.params.get(ctx, "data-action", "");
		await this.pressButton(ctx, tag);
	},
	/**
 * Press button
 * @param string value 
 */
	pressButton: async function(ctx, value)
	{
		var auto_hide = this.params.get(ctx, "auto_hide", true);
		if (value == Runtime.Web.Dialog.DialogModel.BUTTON_RESULT_OK)
		{
			var is_valid = this.validate(ctx);
			if (!is_valid)
			{
				return Promise.resolve();
			}
		}
		var model = this.model(ctx);
		if (auto_hide)
		{
			this.update(ctx, "hide");
		}
		await this.signal(ctx, new Runtime.Web.Dialog.DialogEvent(ctx, Runtime.Dict.from({"input":model.input,"model":model,"tag":model.tag,"button_result":value})));
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Dialog.Dialog)
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
		return "Runtime.Web.Dialog.Dialog";
	},
});
Object.assign(Runtime.Web.Dialog.Dialog, Runtime.Web.Component);
Object.assign(Runtime.Web.Dialog.Dialog,
{
	css: function(ctx, vars)
	{
		return ".dialog_box.h-9e54, .dialog_shadow.h-9e54{" + Runtime.rtl.toStr("position: fixed;top: 0; left: 0;width: 100%; height: 100%;z-index: 1001;") + Runtime.rtl.toStr("}.dialog_box.h-9e54{") + Runtime.rtl.toStr("overflow: auto;overflow-y: scroll;display: none;") + Runtime.rtl.toStr("}.dialog_box.h-9e54.open{") + Runtime.rtl.toStr("display: block;") + Runtime.rtl.toStr("}.dialog_shadow.h-9e54{") + Runtime.rtl.toStr("background-color: #000;opacity: 0.2;overflow: hidden;") + Runtime.rtl.toStr("}.dialog_wrap.h-9e54{") + Runtime.rtl.toStr("width: 100%;min-height: 100%;") + Runtime.rtl.toStr("}.dialog_wrap.h-9e54 > tr > td{") + Runtime.rtl.toStr("padding: 20px;") + Runtime.rtl.toStr("}.dialog.h-9e54{") + Runtime.rtl.toStr("position: relative;padding: 20px;background-color: white;max-width: 350px;margin: 0 auto;width: auto;z-index: 1002;box-shadow: 2px 4px 10px 0px rgba(0,0,0,0.5)") + Runtime.rtl.toStr("}.dialog_title.h-9e54, .dialog_text.h-9e54, .dialog_promt.h-9e54{") + Runtime.rtl.toStr("text-align: center;padding-bottom: 12px;") + Runtime.rtl.toStr("}.dialog_title.h-9e54{") + Runtime.rtl.toStr("font-weight: bold;") + Runtime.rtl.toStr("}.dialog_promt_input.h-9e54{") + Runtime.rtl.toStr("padding: 6px 12px;width: 100%;") + Runtime.rtl.toStr("}.dialog_buttons.h-9e54{") + Runtime.rtl.toStr("padding-top: 12px;text-align: center;") + Runtime.rtl.toStr("}.dialog_buttons.h-9e54 .button.h-de49{") + Runtime.rtl.toStr("margin: 0 5px;") + Runtime.rtl.toStr("}.dialog_row.h-9e54{") + Runtime.rtl.toStr("padding-bottom: 6px;") + Runtime.rtl.toStr("}.dialog_row.h-9e54:last-child{") + Runtime.rtl.toStr("padding-bottom: 0px;") + Runtime.rtl.toStr("}.dialog_result.h-9e54{") + Runtime.rtl.toStr("text-align: center;padding-top: 12px;") + Runtime.rtl.toStr("}.dialog_result.h-9e54.success{") + Runtime.rtl.toStr("color: green;") + Runtime.rtl.toStr("}.dialog_result.h-9e54.error{") + Runtime.rtl.toStr("color: red;") + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, params, "width"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
			var width = __v0.value(ctx);
			
			/* Element 'div.dialog_box' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_box", ((model.is_open) ? ("open") : ("")), this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_box"}});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["dialog_shadow", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_shadow"}});
			
			/* Element 'table.dialog_wrap' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "table","attrs": {"class":["dialog_wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_wrap"}});
			
			/* Element 'tr' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "tr","attrs": {}});
			
			/* Element 'td' */
			var __v3; var __v3_childs = [];
			[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "td","attrs": {}});
			
			/* Element 'div.dialog' */
			var __v4; var __v4_childs = [];
			[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"style":((width != "") ? ("max-width:" + Runtime.rtl.toStr(width) + Runtime.rtl.toStr(";")) : ("")),"class":["dialog", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog"}});
			
			/* Text */
			[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "text", {"content": this.renderDialog(ctx, layout, model, params, content)});
			RenderDriver.p(__v4, __v4_childs);
			RenderDriver.p(__v3, __v3_childs);
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderDialog: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.Collection.from([this.renderTitle(ctx, layout, model, params, content),this.renderText(ctx, layout, model, params, content),this.renderPromt(ctx, layout, model, params, content),this.renderContent(ctx, layout, model, params, content),this.renderButtons(ctx, layout, model, params, content),this.renderResult(ctx, layout, model, params, content)])});
			
			return __control_childs;
		};
	},
	renderTitle: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			if (model.title != "")
			{
				/* Element 'div.dialog_title' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_title", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_title"}});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.title});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	renderText: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			if (model.text != "")
			{
				/* Element 'div.dialog_text' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_text", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_text"}});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.text});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	renderPromt: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var style = (params != null) ? (params.get(ctx, "style", "")) : ("");
			
			if (style == Runtime.Web.Dialog.DialogModel.STYLE_PROMT)
			{
				/* Element 'div.dialog_promt' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_promt", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_promt"}});
				
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "input","attrs": {"@event:Runtime.Web.Events.KeyDownEvent":["Runtime.Web.Dialog.Dialog","onInputKeyDown"],"@bind":["Runtime.Web.Dialog.Dialog","input"],"class":["dialog_promt_input", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_promt_input"}});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	renderContent: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var style = (params != null) ? (params.get(ctx, "style", "")) : ("");
			
			if (style == Runtime.Web.Dialog.DialogModel.STYLE_CONTENT)
			{
				/* Element 'div.dialog_content' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_content", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_content"}});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": content});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	renderButtons: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, params, "buttons"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Collection", null));
			var buttons = __v0.value(ctx);
			
			var renderButtons = Runtime.rtl.get(ctx, params, "renderButtons");
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, params, "show_buttons"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "bool", true));
			var show_buttons = __v0.value(ctx);
			
			if (show_buttons)
			{
				if (Runtime.rtl.exists(ctx, renderButtons) && Runtime.rtl.isFn(ctx, renderButtons))
				{
					/* Element 'div.dialog_buttons' */
					var __v0; var __v0_childs = [];
					[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_buttons", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_buttons"}});
					
					/* Text */
					[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": renderButtons(ctx, layout, model, params, content)});
					RenderDriver.p(__v0, __v0_childs);
				}
				else if (Runtime.rtl.exists(ctx, buttons))
				{
					/* Element 'div.dialog_buttons' */
					var __v0; var __v0_childs = [];
					[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_buttons", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_buttons"}});
					
					for (var i = 0;i < buttons.count(ctx);i++)
					{
						var button = Runtime.rtl.get(ctx, buttons, i);
						
						/* Component 'Button' */
						[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": this.mergeAttrs(ctx, {"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Dialog.Dialog","onButtonClick"]},button), "layout": layout, "content": (__control) =>
						{
							var __vnull = null;
							var __control_childs = [];
							
							/* Text */
							[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.rtl.get(ctx, button, "value")});
							
							return __control_childs;
						}});
					}
					RenderDriver.p(__v0, __v0_childs);
				}
				else
				{
					/* Element 'div.dialog_buttons' */
					var __v0; var __v0_childs = [];
					[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_buttons", this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_buttons"}});
					
					/* Component 'Button' */
					[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"data-action":"ok","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Dialog.Dialog","onButtonClick"]}, "layout": layout, "content": (__control) =>
					{
						var __vnull = null;
						var __control_childs = [];
						
						/* Text */
						[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "OK"});
						
						return __control_childs;
					}});
					
					/* Component 'Button' */
					[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"data-action":"cancel","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Dialog.Dialog","onButtonClick"]}, "layout": layout, "content": (__control) =>
					{
						var __vnull = null;
						var __control_childs = [];
						
						/* Text */
						[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Cancel"});
						
						return __control_childs;
					}});
					RenderDriver.p(__v0, __v0_childs);
				}
			}
			
			return __control_childs;
		};
	},
	renderButton: function(ctx, layout, model, params, button_type)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			if (button_type == "ok")
			{
				/* Component 'Button' */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"data-action":"ok","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Dialog.Dialog","onButtonClick"],"@key":"ok"}, "layout": layout, "content": (__control) =>
				{
					var __vnull = null;
					var __control_childs = [];
					
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "OK"});
					
					return __control_childs;
				}});
			}
			
			if (button_type == "cancel")
			{
				/* Component 'Button' */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"data-action":"cancel","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Dialog.Dialog","onButtonClick"],"@key":"cancel"}, "layout": layout, "content": (__control) =>
				{
					var __vnull = null;
					var __control_childs = [];
					
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Cancel"});
					
					return __control_childs;
				}});
			}
			
			return __control_childs;
		};
	},
	renderButtonInfo: function(ctx, layout, model, params, button_info)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Component 'Button' */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": this.mergeAttrs(ctx, {"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Dialog.Dialog","onButtonClick"]},button_info), "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.rtl.get(ctx, button_info, "value")});
				
				return __control_childs;
			}});
			
			return __control_childs;
		};
	},
	renderResult: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			if (model.message != "" || model.success != "" || model.error == "")
			{
				/* Element 'div.dialog_result' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialog_result", this.getResultClass(ctx, model), this.getCssHash(ctx)].join(" "),"@elem_name":"dialog_result"}});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.message});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.success_message});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.error_message});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	/**
 * Returns result class
 */
	getResultClass: function(ctx, model)
	{
		if (model.success_message != "")
		{
			return "success";
		}
		if (model.error_message != "")
		{
			return "error";
		}
		return "";
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.Input.Button"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Dialog";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Dialog.Dialog";
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
			"class_name": "Runtime.Web.Dialog.Dialog",
			"name": "Runtime.Web.Dialog.Dialog",
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
Runtime.rtl.defClass(Runtime.Web.Dialog.Dialog);
window["Runtime.Web.Dialog.Dialog"] = Runtime.Web.Dialog.Dialog;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Dialog.Dialog;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Dialog == 'undefined') Runtime.Web.Dialog = {};
Runtime.Web.Dialog.DialogEvent = function(ctx)
{
	Runtime.Web.Events.UIEvent.apply(this, arguments);
};
Runtime.Web.Dialog.DialogEvent.prototype = Object.create(Runtime.Web.Events.UIEvent.prototype);
Runtime.Web.Dialog.DialogEvent.prototype.constructor = Runtime.Web.Dialog.DialogEvent;
Object.assign(Runtime.Web.Dialog.DialogEvent.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.input = "";
		this.button_result = "";
		this.tag = null;
		this.model = null;
		Runtime.Web.Events.UIEvent.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Dialog.DialogEvent)
		{
			this.input = o.input;
			this.button_result = o.button_result;
			this.tag = o.tag;
			this.model = o.model;
		}
		Runtime.Web.Events.UIEvent.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "input")this.input = v;
		else if (k == "button_result")this.button_result = v;
		else if (k == "tag")this.tag = v;
		else if (k == "model")this.model = v;
		else Runtime.Web.Events.UIEvent.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "input")return this.input;
		else if (k == "button_result")return this.button_result;
		else if (k == "tag")return this.tag;
		else if (k == "model")return this.model;
		return Runtime.Web.Events.UIEvent.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Dialog.DialogEvent";
	},
});
Object.assign(Runtime.Web.Dialog.DialogEvent, Runtime.Web.Events.UIEvent);
Object.assign(Runtime.Web.Dialog.DialogEvent,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Dialog";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Dialog.DialogEvent";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Events.UIEvent";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Dialog.DialogEvent",
			"name": "Runtime.Web.Dialog.DialogEvent",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("input");
			a.push("button_result");
			a.push("tag");
			a.push("model");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "input") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogEvent",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "button_result") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogEvent",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "tag") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogEvent",
			"t": "primitive",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "model") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogEvent",
			"t": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
Runtime.rtl.defClass(Runtime.Web.Dialog.DialogEvent);
window["Runtime.Web.Dialog.DialogEvent"] = Runtime.Web.Dialog.DialogEvent;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Dialog.DialogEvent;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Dialog == 'undefined') Runtime.Web.Dialog = {};
Runtime.Web.Dialog.DialogModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Runtime.Web.Dialog.DialogModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Runtime.Web.Dialog.DialogModel.prototype.constructor = Runtime.Web.Dialog.DialogModel;
Object.assign(Runtime.Web.Dialog.DialogModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.is_open = false;
		this.is_modal = false;
		this.title = "";
		this.text = "";
		this.input = "";
		this.button_result = "";
		this.message = "";
		this.success_message = "";
		this.error_message = "";
		this.tag = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Dialog.DialogModel)
		{
			this.is_open = o.is_open;
			this.is_modal = o.is_modal;
			this.title = o.title;
			this.text = o.text;
			this.input = o.input;
			this.button_result = o.button_result;
			this.message = o.message;
			this.success_message = o.success_message;
			this.error_message = o.error_message;
			this.tag = o.tag;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "is_open")this.is_open = v;
		else if (k == "is_modal")this.is_modal = v;
		else if (k == "title")this.title = v;
		else if (k == "text")this.text = v;
		else if (k == "input")this.input = v;
		else if (k == "button_result")this.button_result = v;
		else if (k == "message")this.message = v;
		else if (k == "success_message")this.success_message = v;
		else if (k == "error_message")this.error_message = v;
		else if (k == "tag")this.tag = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "is_open")return this.is_open;
		else if (k == "is_modal")return this.is_modal;
		else if (k == "title")return this.title;
		else if (k == "text")return this.text;
		else if (k == "input")return this.input;
		else if (k == "button_result")return this.button_result;
		else if (k == "message")return this.message;
		else if (k == "success_message")return this.success_message;
		else if (k == "error_message")return this.error_message;
		else if (k == "tag")return this.tag;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.Dialog.DialogModel";
	},
});
Object.assign(Runtime.Web.Dialog.DialogModel, Runtime.BaseStruct);
Object.assign(Runtime.Web.Dialog.DialogModel,
{
	STYLE_PROMT: "promt",
	STYLE_CONFIRM: "confirm",
	STYLE_ALERT: "alert",
	STYLE_CONTENT: "content",
	BUTTON_RESULT_OK: "ok",
	BUTTON_RESULT_CANCEL: "cancel",
	BUTTON_RESULT_EXIT: "exit",
	/**
	 * Show dialog
	 */
	show: function(ctx, model, params)
	{
		if (params == undefined) params = null;
		if (params == null)
		{
			return model.copy(ctx, Runtime.Dict.from({"input":"","is_open":true,"button_result":"","message":"","success_message":"","error_message":""}));
		}
		params = params.concat(ctx, Runtime.Dict.from({"input":params.get(ctx, "input", ""),"title":params.get(ctx, "title", ""),"text":params.get(ctx, "text", ""),"is_open":true,"button_result":"","message":"","success_message":"","error_message":""}));
		return model.copy(ctx, params);
	},
	/**
	 * Hide dialog
	 */
	hide: function(ctx, model, button_result)
	{
		if (button_result == undefined) button_result = "";
		return model.copy(ctx, Runtime.Dict.from({"is_open":false,"tag":null,"button_result":button_result}));
	},
	/**
	 * Set input
	 */
	setInput: function(ctx, model, input)
	{
		return model.copy(ctx, Runtime.Dict.from({"input":input}));
	},
	/**
	 * Set wait message
	 */
	setWaitMessage: function(ctx, model, message)
	{
		if (message == undefined) message = "";
		return model.copy(ctx, Runtime.Dict.from({"message":(message != message) ? (message) : (ctx.translate(ctx, "Runtime.Web", "Please wait")),"success_message":message,"error_message":""}));
	},
	/**
	 * Message
	 */
	setMessage: function(ctx, model, message)
	{
		return model.copy(ctx, Runtime.Dict.from({"message":"","success_message":message,"error_message":""}));
	},
	/**
	 * Set answer
	 */
	setAnswer: function(ctx, model, answer)
	{
		if (answer.isSuccess(ctx))
		{
			return this.setSuccess(ctx, model, answer.success_message);
		}
		return this.setError(ctx, model, answer.error_message);
	},
	/**
	 * Success
	 */
	setSuccess: function(ctx, model, message)
	{
		return model.copy(ctx, Runtime.Dict.from({"message":"","success_message":message,"error_message":""}));
	},
	/**
	 * Error
	 */
	setError: function(ctx, model, message)
	{
		return model.copy(ctx, Runtime.Dict.from({"message":"","success_message":"","error_message":message}));
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Dialog";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Dialog.DialogModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"name": "Runtime.Web.Dialog.DialogModel",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("is_open");
			a.push("is_modal");
			a.push("title");
			a.push("text");
			a.push("input");
			a.push("button_result");
			a.push("message");
			a.push("success_message");
			a.push("error_message");
			a.push("tag");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "STYLE_PROMT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "STYLE_CONFIRM") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "STYLE_ALERT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "STYLE_CONTENT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "BUTTON_RESULT_OK") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "BUTTON_RESULT_CANCEL") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "BUTTON_RESULT_EXIT") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_open") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "bool",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "is_modal") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "bool",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "title") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "text") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "input") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "button_result") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "message") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "success_message") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "error_message") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "tag") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.Dialog.DialogModel",
			"t": "primitive",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
Runtime.rtl.defClass(Runtime.Web.Dialog.DialogModel);
window["Runtime.Web.Dialog.DialogModel"] = Runtime.Web.Dialog.DialogModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Dialog.DialogModel;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Dialog == 'undefined') Runtime.Web.Dialog = {};
Runtime.Web.Dialog.ModuleDescription = function(ctx)
{
};
Object.assign(Runtime.Web.Dialog.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Dialog.ModuleDescription)
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
		return "Runtime.Web.Dialog.ModuleDescription";
	},
});
Object.assign(Runtime.Web.Dialog.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Runtime.Web.Dialog";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.1.2";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime.Web":"*","Runtime.Web.Button":"*"});
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return null;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Dialog";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Dialog.ModuleDescription";
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
			"class_name": "Runtime.Web.Dialog.ModuleDescription",
			"name": "Runtime.Web.Dialog.ModuleDescription",
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
Runtime.rtl.defClass(Runtime.Web.Dialog.ModuleDescription);
window["Runtime.Web.Dialog.ModuleDescription"] = Runtime.Web.Dialog.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Dialog.ModuleDescription;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Input == 'undefined') Runtime.Web.Input = {};
Runtime.Web.Input.Button = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Input.Button.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Input.Button.prototype.constructor = Runtime.Web.Input.Button;
Object.assign(Runtime.Web.Input.Button.prototype,
{
	/**
 * Mouse click event
 */
	onClick: async function(ctx, msg)
	{
		await this.signal(ctx, msg.data);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Input.Button)
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
		return "Runtime.Web.Input.Button";
	},
});
Object.assign(Runtime.Web.Input.Button, Runtime.Web.Component);
Object.assign(Runtime.Web.Input.Button,
{
	css: function(ctx, vars)
	{
		return ".button.h-de49{" + Runtime.rtl.toStr("padding: 6px 12px;cursor: pointer;background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "border"])) + Runtime.rtl.toStr(" solid;color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "text"])) + Runtime.rtl.toStr(";/*box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.25);*/outline: 0;")) + Runtime.rtl.toStr("}.button.h-de49:hover{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "hover"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "border"])) + Runtime.rtl.toStr(" solid;color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "hover-text"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.button.h-de49:active{") + Runtime.rtl.toStr("box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.25);") + Runtime.rtl.toStr("}.button.h-de49.primary{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "primary", "background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "primary", "border"])) + Runtime.rtl.toStr(" solid;color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "primary", "text"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.button.h-de49.primary:hover{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "primary", "hover-background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "primary", "border"])) + Runtime.rtl.toStr(" solid;color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "primary", "hover-text"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.button.h-de49.danger{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "danger", "background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "danger", "border"])) + Runtime.rtl.toStr(" solid;color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "danger", "text"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.button.h-de49.danger:hover{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "danger", "hover-background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "danger", "border"])) + Runtime.rtl.toStr(" solid;color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "danger", "hover-text"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.button.h-de49.success{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "success", "background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "success", "border"])) + Runtime.rtl.toStr(" solid;color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "success", "text"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.button.h-de49.success:hover{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "success", "hover-background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "success", "border"])) + Runtime.rtl.toStr(" solid;color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "success", "hover-text"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.button.h-de49.small{") + Runtime.rtl.toStr("padding: 3px 6px;") + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'button.button' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "button","attrs": {"@tag":Runtime.rtl.get(ctx, params, "@tag"),"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.Input.Button","onClick"],"class":["button", Runtime.rtl.get(ctx, params, "type"), this.getCssHash(ctx)].join(" "),"@elem_name":"button"}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": content});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Input";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Input.Button";
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
			"class_name": "Runtime.Web.Input.Button",
			"name": "Runtime.Web.Input.Button",
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
Runtime.rtl.defClass(Runtime.Web.Input.Button);
window["Runtime.Web.Input.Button"] = Runtime.Web.Input.Button;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Input.Button;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Input == 'undefined') Runtime.Web.Input = {};
Runtime.Web.Input.Input = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Input.Input.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Input.Input.prototype.constructor = Runtime.Web.Input.Input;
Object.assign(Runtime.Web.Input.Input.prototype,
{
	/**
 * On change
 */
	onChange: function(ctx, msg)
	{
		this.signal(ctx, msg.data);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Input.Input)
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
		return "Runtime.Web.Input.Input";
	},
});
Object.assign(Runtime.Web.Input.Input, Runtime.Web.Component);
Object.assign(Runtime.Web.Input.Input,
{
	css: function(ctx, vars)
	{
		return ".input.h-9e6e{" + Runtime.rtl.toStr("width: 100%;padding: 6px 12px;background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "border"])) + Runtime.rtl.toStr(" solid;outline: transparent;")) + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var value = (params != null) ? (params.get(ctx, "value", "")) : ("");
			
			var def_value = (params != null) ? (params.get(ctx, "default", "")) : ("");
			
			var name = (params != null) ? (params.get(ctx, "name", "")) : ("");
			
			var type = (params != null) ? (params.get(ctx, "type", "input")) : ("");
			
			var tag = (params != null) ? (params.get(ctx, "@tag", "")) : ("");
			
			value = (Runtime.rtl.isEmpty(ctx, value)) ? (model) : (value);
			
			if (Runtime.rtl.isEmpty(ctx, value) && value !== 0 && value !== "0")
			{
				value = def_value;
			}
			
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "input","attrs": {"@tag":tag,"@event:Runtime.Web.Events.ChangeEvent":["Runtime.Web.Input.Input","onChange"],"name":name,"type":type,"value":((model != null) ? (model) : (value)),"class":["input", this.getCssHash(ctx)].join(" "),"@elem_name":"input"}});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Input";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Input.Input";
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
			"class_name": "Runtime.Web.Input.Input",
			"name": "Runtime.Web.Input.Input",
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
Runtime.rtl.defClass(Runtime.Web.Input.Input);
window["Runtime.Web.Input.Input"] = Runtime.Web.Input.Input;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Input.Input;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Input == 'undefined') Runtime.Web.Input = {};
Runtime.Web.Input.Label = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Input.Label.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Input.Label.prototype.constructor = Runtime.Web.Input.Label;
Object.assign(Runtime.Web.Input.Label.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Input.Label)
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
		return "Runtime.Web.Input.Label";
	},
});
Object.assign(Runtime.Web.Input.Label, Runtime.Web.Component);
Object.assign(Runtime.Web.Input.Label,
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
			
			var value = (params != null) ? (params.get(ctx, "value", "")) : ("");
			
			var def_value = (params != null) ? (params.get(ctx, "default", "")) : ("");
			
			value = (Runtime.rtl.isEmpty(ctx, value)) ? (model) : (value);
			
			if (Runtime.rtl.isEmpty(ctx, value) && value !== 0 && value !== "0")
			{
				value = def_value;
			}
			
			value = (Runtime.rtl.isString(ctx, value)) ? (Runtime.rs.split(ctx, "\n", value)) : (Runtime.Collection.from([value]));
			
			for (var i = 0;i < value.count(ctx);i++)
			{
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.rtl.get(ctx, value, i)});
				
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "br","attrs": {}});
			}
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Input";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Input.Label";
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
			"class_name": "Runtime.Web.Input.Label",
			"name": "Runtime.Web.Input.Label",
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
Runtime.rtl.defClass(Runtime.Web.Input.Label);
window["Runtime.Web.Input.Label"] = Runtime.Web.Input.Label;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Input.Label;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Input == 'undefined') Runtime.Web.Input = {};
Runtime.Web.Input.Select = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Input.Select.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Input.Select.prototype.constructor = Runtime.Web.Input.Select;
Object.assign(Runtime.Web.Input.Select.prototype,
{
	/**
 * On change
 */
	onChange: function(ctx, msg)
	{
		this.signal(ctx, msg.data);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Input.Select)
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
		return "Runtime.Web.Input.Select";
	},
});
Object.assign(Runtime.Web.Input.Select, Runtime.Web.Component);
Object.assign(Runtime.Web.Input.Select,
{
	css: function(ctx, vars)
	{
		return ".select.h-4d5b{" + Runtime.rtl.toStr("width: 100%;padding: 6px 12px;background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "border"])) + Runtime.rtl.toStr(" solid;outline: transparent;")) + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var name = (params != null) ? (params.get(ctx, "name", "")) : ("");
			
			var value = (params != null) ? (params.get(ctx, "value", "")) : ("");
			
			var def_value = (params != null) ? (params.get(ctx, "default", "")) : ("");
			
			value = (Runtime.rtl.isEmpty(ctx, value)) ? (model) : (value);
			
			if (Runtime.rtl.isEmpty(ctx, value) && value !== 0 && value !== "0")
			{
				value = def_value;
			}
			
			/* Element 'select.select' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "select","attrs": {"@event:Runtime.Web.Events.ChangeEvent":["Runtime.Web.Input.Select","onChange"],"name":name,"value":value,"class":["select", this.getCssHash(ctx)].join(" "),"@elem_name":"select"}});
			
			var selected = Runtime.Dict.from({});
			
			if (Runtime.rtl.get(ctx, params, "show_select_value") == true)
			{
				if (value === "" || value === null)
				{
					selected = Runtime.Dict.from({"selected":"selected"});
				}
				
				/* Element 'option' */
				var __v1; var __v1_childs = [];
				[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "option","attrs": this.mergeAttrs(ctx, {"value":""},selected)});
				
				/* Text */
				[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": ctx.translate(ctx, "Runtime.Web.Input", "Select value")});
				RenderDriver.p(__v1, __v1_childs);
			}
			
			var options = Runtime.rtl.get(ctx, params, "options");
			
			if (Runtime.rtl.exists(ctx, options))
			{
				for (var i = 0;i < options.count(ctx);i++)
				{
					var item = Runtime.rtl.get(ctx, options, i);
					
					selected = Runtime.Dict.from({});
					
					if (Runtime.rtl.get(ctx, item, "id") == value && value !== "" && value !== null)
					{
						selected = Runtime.Dict.from({"selected":"selected"});
					}
					
					/* Element 'option' */
					var __v1; var __v1_childs = [];
					[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "option","attrs": this.mergeAttrs(ctx, {"value":Runtime.rtl.get(ctx, item, "id")},selected)});
					
					/* Text */
					[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": Runtime.rtl.get(ctx, item, "value")});
					RenderDriver.p(__v1, __v1_childs);
				}
			}
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Input";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Input.Select";
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
			"class_name": "Runtime.Web.Input.Select",
			"name": "Runtime.Web.Input.Select",
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
Runtime.rtl.defClass(Runtime.Web.Input.Select);
window["Runtime.Web.Input.Select"] = Runtime.Web.Input.Select;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Input.Select;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Input == 'undefined') Runtime.Web.Input = {};
Runtime.Web.Input.SelectText = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Input.SelectText.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Input.SelectText.prototype.constructor = Runtime.Web.Input.SelectText;
Object.assign(Runtime.Web.Input.SelectText.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Input.SelectText)
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
		return "Runtime.Web.Input.SelectText";
	},
});
Object.assign(Runtime.Web.Input.SelectText, Runtime.Web.Component);
Object.assign(Runtime.Web.Input.SelectText,
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
			
			var name = (params != null) ? (params.get(ctx, "name", "")) : ("");
			
			var value = (params != null) ? (params.get(ctx, "value", "")) : ("");
			
			var def_value = (params != null) ? (params.get(ctx, "default", "")) : ("");
			
			value = (Runtime.rtl.isEmpty(ctx, value)) ? (model) : (value);
			
			if (Runtime.rtl.isEmpty(ctx, value) && value !== 0 && value !== "0")
			{
				value = def_value;
			}
			
			var options = Runtime.rtl.get(ctx, params, "options");
			
			if (Runtime.rtl.exists(ctx, options))
			{
				var item = options.findItem(ctx, Runtime.lib.equalAttr(ctx, "id", value));
				
				if (Runtime.rtl.exists(ctx, item))
				{
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.rtl.get(ctx, item, "value")});
				}
			}
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Input";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Input.SelectText";
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
			"class_name": "Runtime.Web.Input.SelectText",
			"name": "Runtime.Web.Input.SelectText",
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
Runtime.rtl.defClass(Runtime.Web.Input.SelectText);
window["Runtime.Web.Input.SelectText"] = Runtime.Web.Input.SelectText;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Input.SelectText;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Input == 'undefined') Runtime.Web.Input = {};
Runtime.Web.Input.TextArea = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.Input.TextArea.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.Input.TextArea.prototype.constructor = Runtime.Web.Input.TextArea;
Object.assign(Runtime.Web.Input.TextArea.prototype,
{
	/**
 * On change
 */
	onChange: function(ctx, msg)
	{
		this.signal(ctx, msg.data);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Input.TextArea)
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
		return "Runtime.Web.Input.TextArea";
	},
});
Object.assign(Runtime.Web.Input.TextArea, Runtime.Web.Component);
Object.assign(Runtime.Web.Input.TextArea,
{
	css: function(ctx, vars)
	{
		return ".textarea.h-106c{" + Runtime.rtl.toStr("width: 100%;min-height: 300px;padding: 6px 12px;background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "border"])) + Runtime.rtl.toStr(" solid;outline: transparent;")) + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var name = (params != null) ? (params.get(ctx, "name", "")) : ("");
			
			var value = (params != null) ? (params.get(ctx, "value", "")) : ("");
			
			var def_value = (params != null) ? (params.get(ctx, "default", "")) : ("");
			
			value = (Runtime.rtl.isEmpty(ctx, value)) ? (model) : (value);
			
			if (Runtime.rtl.isEmpty(ctx, value) && value !== 0 && value !== "0")
			{
				value = def_value;
			}
			
			var type = (params != null) ? (params.get(ctx, "type", "input")) : ("");
			
			var tag = (params != null) ? (params.get(ctx, "@tag", "")) : ("");
			
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "textarea","attrs": {"@tag":tag,"@event:Runtime.Web.Events.ChangeEvent":["Runtime.Web.Input.TextArea","onChange"],"name":name,"type":type,"value":value,"class":["input", this.getCssHash(ctx)].join(" "),"@elem_name":"input"}});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Input";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Input.TextArea";
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
			"class_name": "Runtime.Web.Input.TextArea",
			"name": "Runtime.Web.Input.TextArea",
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
Runtime.rtl.defClass(Runtime.Web.Input.TextArea);
window["Runtime.Web.Input.TextArea"] = Runtime.Web.Input.TextArea;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Input.TextArea;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.Input == 'undefined') Runtime.Web.Input = {};
Runtime.Web.Input.ModuleDescription = function(ctx)
{
};
Object.assign(Runtime.Web.Input.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.Input.ModuleDescription)
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
		return "Runtime.Web.Input.ModuleDescription";
	},
});
Object.assign(Runtime.Web.Input.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Runtime.Web.Input";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.1.2";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime.Web":">=0.3"});
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return null;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.Input";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.Input.ModuleDescription";
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
			"class_name": "Runtime.Web.Input.ModuleDescription",
			"name": "Runtime.Web.Input.ModuleDescription",
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
Runtime.rtl.defClass(Runtime.Web.Input.ModuleDescription);
window["Runtime.Web.Input.ModuleDescription"] = Runtime.Web.Input.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.Input.ModuleDescription;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.FieldInfo = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Runtime.Web.CRUD.FieldInfo.prototype = Object.create(Runtime.BaseStruct.prototype);
Runtime.Web.CRUD.FieldInfo.prototype.constructor = Runtime.Web.CRUD.FieldInfo;
Object.assign(Runtime.Web.CRUD.FieldInfo.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.api_name = "";
		this.comment = "";
		this.label = "";
		this.class_name = "";
		this.render = null;
		this.calc = null;
		this.primary = false;
		this.required = false;
		this.readonly = false;
		this.virtual = false;
		this.can_create = true;
		this.can_update = true;
		this.group = "default";
		this.default_value = null;
		this.class_settings = Runtime.Dict.from({});
		this.info = Runtime.Dict.from({});
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.FieldInfo)
		{
			this.api_name = o.api_name;
			this.comment = o.comment;
			this.label = o.label;
			this.class_name = o.class_name;
			this.render = o.render;
			this.calc = o.calc;
			this.primary = o.primary;
			this.required = o.required;
			this.readonly = o.readonly;
			this.virtual = o.virtual;
			this.can_create = o.can_create;
			this.can_update = o.can_update;
			this.group = o.group;
			this.default_value = o.default_value;
			this.class_settings = o.class_settings;
			this.info = o.info;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "api_name")this.api_name = v;
		else if (k == "comment")this.comment = v;
		else if (k == "label")this.label = v;
		else if (k == "class_name")this.class_name = v;
		else if (k == "render")this.render = v;
		else if (k == "calc")this.calc = v;
		else if (k == "primary")this.primary = v;
		else if (k == "required")this.required = v;
		else if (k == "readonly")this.readonly = v;
		else if (k == "virtual")this.virtual = v;
		else if (k == "can_create")this.can_create = v;
		else if (k == "can_update")this.can_update = v;
		else if (k == "group")this.group = v;
		else if (k == "default_value")this.default_value = v;
		else if (k == "class_settings")this.class_settings = v;
		else if (k == "info")this.info = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "api_name")return this.api_name;
		else if (k == "comment")return this.comment;
		else if (k == "label")return this.label;
		else if (k == "class_name")return this.class_name;
		else if (k == "render")return this.render;
		else if (k == "calc")return this.calc;
		else if (k == "primary")return this.primary;
		else if (k == "required")return this.required;
		else if (k == "readonly")return this.readonly;
		else if (k == "virtual")return this.virtual;
		else if (k == "can_create")return this.can_create;
		else if (k == "can_update")return this.can_update;
		else if (k == "group")return this.group;
		else if (k == "default_value")return this.default_value;
		else if (k == "class_settings")return this.class_settings;
		else if (k == "info")return this.info;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.CRUD.FieldInfo";
	},
});
Object.assign(Runtime.Web.CRUD.FieldInfo, Runtime.BaseStruct);
Object.assign(Runtime.Web.CRUD.FieldInfo,
{
	/**
	 * Returns FieldInfo from Collection
	 */
	getFieldInfo: function(ctx, settings, field_name)
	{
		var __memorize_value = Runtime.rtl._memorizeValue("Runtime.Web.CRUD.FieldInfo.getFieldInfo", arguments);
		if (__memorize_value != Runtime.rtl._memorize_not_found) return __memorize_value;
		var __memorize_value = settings.findItem(ctx, Runtime.lib.equalAttr(ctx, "api_name", field_name));
		Runtime.rtl._memorizeSave("Runtime.Web.CRUD.FieldInfo.getFieldInfo", arguments, __memorize_value);
		return __memorize_value;
	},
	/**
	 * Filter form
	 */
	filterForm: function(ctx, settings, form_type, field_name)
	{
		var info = this.getFieldInfo(ctx, settings, field_name);
		if (info == null)
		{
			return false;
		}
		if (form_type == "create" && info.can_create == false)
		{
			return false;
		}
		if (form_type == "update" && info.can_update == false)
		{
			return false;
		}
		return true;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.FieldInfo";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"name": "Runtime.Web.CRUD.FieldInfo",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("api_name");
			a.push("comment");
			a.push("label");
			a.push("class_name");
			a.push("render");
			a.push("calc");
			a.push("primary");
			a.push("required");
			a.push("readonly");
			a.push("virtual");
			a.push("can_create");
			a.push("can_update");
			a.push("group");
			a.push("default_value");
			a.push("class_settings");
			a.push("info");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "api_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "comment") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "label") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "class_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "render") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "fn",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "calc") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "fn",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "primary") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "bool",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "required") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "bool",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "readonly") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "bool",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "virtual") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "bool",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "can_create") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "bool",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "can_update") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "bool",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "group") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "default_value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "var",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "class_settings") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "Runtime.Dict",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "info") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FieldInfo",
			"t": "Runtime.Dict",
			"s": ["Runtime.Web.CRUD.FieldInfo"],
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
Runtime.rtl.defClass(Runtime.Web.CRUD.FieldInfo);
window["Runtime.Web.CRUD.FieldInfo"] = Runtime.Web.CRUD.FieldInfo;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.FieldInfo;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.Form = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.CRUD.Form.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.CRUD.Form.prototype.constructor = Runtime.Web.CRUD.Form;
Object.assign(Runtime.Web.CRUD.Form.prototype,
{
	/**
 * On item change
 */
	onItemChange: async function(ctx, msg)
	{
		var model = this.model(ctx);
		var params = msg.sender.params;
		var field_name = Runtime.rtl.get(ctx, params, "name");
		var new_value = msg.data.value;
		var old_value = msg.data.old_value;
		var model_path = Runtime.rtl.get(ctx, params, "crud_form_model_path");
		var event = new Runtime.Web.CRUD.FormEvent(ctx, Runtime.Dict.from({"event":Runtime.Web.CRUD.FormEvent.ACTION_CHANGE,"item":model.item,"field_name":field_name,"old_value":old_value,"value":new_value}));
		if (model_path != null)
		{
			this.update(ctx, "setAttr", model_path, new_value);
		}
		await this.signal(ctx, event);
	},
	/**
 * On mouse click
 */
	onButtonClick: async function(ctx, msg)
	{
		var model = this.model(ctx);
		var event = new Runtime.Web.CRUD.FormEvent(ctx, Runtime.Dict.from({"item":model.item}));
		var data_action = msg.sender.params.get(ctx, "data-action");
		if (data_action == "create")
		{
			event = Runtime.rtl.setAttr(ctx, event, Runtime.Collection.from(["event"]), Runtime.Web.CRUD.FormEvent.ACTION_CREATE);
			await this.signal(ctx, event);
		}
		else if (data_action == "update")
		{
			event = Runtime.rtl.setAttr(ctx, event, Runtime.Collection.from(["event"]), Runtime.Web.CRUD.FormEvent.ACTION_UPDATE);
			await this.signal(ctx, event);
		}
		else if (data_action == "cancel")
		{
			event = Runtime.rtl.setAttr(ctx, event, Runtime.Collection.from(["event"]), Runtime.Web.CRUD.FormEvent.ACTION_CANCEL);
			await this.signal(ctx, event);
		}
		else
		{
			event = Runtime.rtl.setAttr(ctx, event, Runtime.Collection.from(["event"]), data_action);
			await this.signal(ctx, event);
		}
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.Form)
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
		return "Runtime.Web.CRUD.Form";
	},
});
Object.assign(Runtime.Web.CRUD.Form, Runtime.Web.Component);
Object.assign(Runtime.Web.CRUD.Form,
{
	css: function(ctx, vars)
	{
		return ".form.h-8017{" + Runtime.rtl.toStr("}.form_row.h-8017{") + Runtime.rtl.toStr("padding-bottom: 15px;") + Runtime.rtl.toStr("}.form_row.h-8017:last-child{") + Runtime.rtl.toStr("padding-bottom: 0px;") + Runtime.rtl.toStr("}.form_label.h-8017{") + Runtime.rtl.toStr("font-weight: bold;padding-bottom: 5px;") + Runtime.rtl.toStr("}.form_value.h-8017{") + Runtime.rtl.toStr("}.form_value.h-8017 input, .form_value.h-8017 textarea, .form_value.h-8017 select{") + Runtime.rtl.toStr("width: 100%;padding: 5px 10px;") + Runtime.rtl.toStr("}.form_value.h-8017 textarea{") + Runtime.rtl.toStr("height: 400px;") + Runtime.rtl.toStr("}.form_buttons.h-8017{") + Runtime.rtl.toStr("text-align: center;margin-top: 10px;") + Runtime.rtl.toStr("}.form_buttons.h-8017 .button.h-de49{") + Runtime.rtl.toStr("margin-left: 10px;margin-right: 10px;") + Runtime.rtl.toStr("}.form_error.h-8017{") + Runtime.rtl.toStr("text-align: center;padding-top: 5px;color: red;") + Runtime.rtl.toStr("}.form_result.h-8017{") + Runtime.rtl.toStr("padding-top: 10px;text-align: center;") + Runtime.rtl.toStr("}.form_result.h-8017.success{") + Runtime.rtl.toStr("color: green;") + Runtime.rtl.toStr("}.form_result.h-8017.error{") + Runtime.rtl.toStr("color: red;") + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.form' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["form", this.getCssHash(ctx)].join(" "),"@key":"form","@elem_name":"form"}});
			
			if (model != null)
			{
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": Runtime.Collection.from([this.renderHeader(ctx, layout, model, params, content),this.renderContent(ctx, layout, model, params, content),this.renderButtons(ctx, layout, model, params, content),this.renderResult(ctx, layout, model, params, content),this.renderFooter(ctx, layout, model, params, content)])});
			}
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderHeader: function(ctx, layout, model, params, content)
	{
		return ;
	},
	renderContent: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": this.renderRows(ctx, layout, model, params, content)});
			
			return __control_childs;
		};
	},
	renderRows: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.form_rows' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["form_rows", this.getCssHash(ctx)].join(" "),"@key":"rows","@elem_name":"form_rows"}});
			
			var fields = Runtime.rtl.get(ctx, params, "fields");
			
			for (var i = 0;i < fields.count(ctx);i++)
			{
				var field_name = Runtime.rtl.get(ctx, fields, i);
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": this.renderRow(ctx, layout, model, params, field_name)});
			}
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderRow: function(ctx, layout, model, params, field_name)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var struct = Runtime.rtl.get(ctx, params, "struct");
			
			var field = Runtime.Web.CRUD.FieldInfo.getFieldInfo(ctx, struct, field_name);
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, params, "extends_name"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", "form"));
			var extends_name = __v0.value(ctx);
			
			if (field != null)
			{
				/* Patch field */
				field = this.patchField(ctx, layout, field, model, params);
				
				var model_path = this.getBindPath(ctx, field);
				
				/* Get class name */
				var class_name = Runtime.rtl.get(ctx, field, "class_name");
				
				var class_name_form = Runtime.rtl.attr(ctx, field, ["info", extends_name, "class_name"]);
				
				if (!Runtime.rtl.isEmpty(ctx, class_name_form))
				{
					class_name = class_name_form;
				}
				
				/* Class settings */
				var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, field, "class_settings"));
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Dict", Runtime.Dict.from({})));
				var class_settings = __v0.value(ctx);
				
				var __v0 = new Runtime.Monad(ctx, Runtime.rtl.attr(ctx, field, ["info", extends_name, "class_settings"]));
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Dict", null));
				var class_settings_form = __v0.value(ctx);
				
				if (!Runtime.rtl.isEmpty(ctx, class_settings_form))
				{
					class_settings = class_settings.concat(ctx, class_settings_form);
				}
				
				class_settings = class_settings.setIm(ctx, "name", field_name).setIm(ctx, "crud_kind", extends_name).setIm(ctx, "crud_field_name", field_name).setIm(ctx, "crud_field_info", field).setIm(ctx, "crud_struct", struct).setIm(ctx, "crud_item", Runtime.rtl.get(ctx, model, "item")).setIm(ctx, "crud_form_model_path", model_path).setIm(ctx, "crud_form_model", model);
				
				/* Get value */
				var value = Runtime.rtl.attr(ctx, model, model_path);
				
				/* Calculate new value */
				var calc = Runtime.rtl.get(ctx, field, "calc");
				
				var calc_form = Runtime.rtl.attr(ctx, field, ["info", extends_name, "calc"]);
				
				if (calc_form != null)
				{
					calc = calc_form;
				}
				
				if (Runtime.rtl.exists(ctx, calc))
				{
					value = calc(ctx, layout, value, class_settings);
				}
				
				class_settings = class_settings.setIm(ctx, "value", value);
				
				/* Calc class name */
				if (!Runtime.rtl.isString(ctx, class_name) && Runtime.rtl.isFn(ctx, class_name))
				{
					class_name = class_name(ctx, layout, value, class_settings);
				}
				
				var __v0 = new Runtime.Monad(ctx, class_name);
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
				class_name = __v0.value(ctx);
				
				class_settings = class_settings.setIm(ctx, "crud_class_name", class_name);
				
				/* Patch settings */
				class_settings = this.patchSettings(ctx, layout, field, class_settings, model, params);
				
				/* Render value */
				var render = Runtime.rtl.get(ctx, field, "render");
				
				var render_form = Runtime.rtl.attr(ctx, field, ["info", extends_name, "render"]);
				
				if (!Runtime.rtl.isEmpty(ctx, render_form))
				{
					render = render_form;
				}
				
				var can_render = Runtime.rtl.get(ctx, field, "can_render");
				
				var can_render_form = Runtime.rtl.attr(ctx, field, ["info", extends_name, "can_render"]);
				
				if (!Runtime.rtl.isEmpty(ctx, can_render_form))
				{
					can_render = can_render_form;
				}
				
				/* Element 'div.form_row' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["form_row", this.getCssHash(ctx)].join(" "),"@key":field_name,"@elem_name":"form_row"}});
				
				/* Element 'div.form_label' */
				var __v1; var __v1_childs = [];
				[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["form_label", this.getCssHash(ctx)].join(" "),"@elem_name":"form_label"}});
				
				/* Text */
				[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": (Runtime.rtl.attr(ctx, field, ["info", extends_name, "label"])) ? (Runtime.rtl.attr(ctx, field, ["info", extends_name, "label"])) : (Runtime.rtl.get(ctx, field, "label"))});
				
				/* Text */
				[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": ":"});
				RenderDriver.p(__v1, __v1_childs);
				
				/* Element 'div.form_value' */
				var __v1; var __v1_childs = [];
				[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["form_value", this.getCssHash(ctx)].join(" "),"@elem_name":"form_value"}});
				
				if (Runtime.rtl.exists(ctx, render) && (!Runtime.rtl.exists(ctx, can_render) || Runtime.rtl.exists(ctx, can_render) && can_render(ctx, layout, value, class_settings)))
				{
					/* Text */
					[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": render(ctx, layout, Runtime.rtl.attr(ctx, model, model_path), class_settings)});
				}
				else
				{
					if (!Runtime.rtl.isEmpty(ctx, class_name))
					{
						[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "component", {"name": class_name,"attrs": this.mergeAttrs(ctx, {"@bind":["Runtime.Web.CRUD.Form",model_path],"@event:Runtime.Web.Events.ChangeEvent":["Runtime.Web.CRUD.Form","onItemChange"],"@key":field_name},class_settings), "layout": layout});
					}
				}
				RenderDriver.p(__v1, __v1_childs);
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": this.renderFieldError(ctx, layout, model, field_name)});
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	renderField: function(ctx, layout, model, class_settings)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var class_name = Runtime.rtl.get(ctx, class_settings, "crud_class_name");
			
			var field_name = Runtime.rtl.get(ctx, class_settings, "crud_field_name");
			
			var model_path = Runtime.rtl.get(ctx, class_settings, "crud_form_model_path");
			
			if (!Runtime.rtl.isEmpty(ctx, class_name))
			{
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": class_name,"attrs": this.mergeAttrs(ctx, {"@bind":["Runtime.Web.CRUD.Form",model_path],"@event:Runtime.Web.Events.ChangeEvent":["Runtime.Web.CRUD.Form","onItemChange"],"@key":field_name},class_settings), "layout": layout});
			}
			
			return __control_childs;
		};
	},
	renderFieldError: function(ctx, layout, model, field_name)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.form_error' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["form_error", this.getCssHash(ctx)].join(" "),"@elem_name":"form_error"}});
			
			var errors = Runtime.rtl.get(ctx, Runtime.rtl.get(ctx, model, "fields_errors"), field_name);
			
			if (errors != null)
			{
				for (var i = 0;i < errors.count(ctx);i++)
				{
					var s = Runtime.rtl.get(ctx, errors, i);
					
					/* Element 'div.form_error_line' */
					var __v1; var __v1_childs = [];
					[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["form_error_line", this.getCssHash(ctx)].join(" "),"@elem_name":"form_error_line"}});
					
					/* Text */
					[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": s});
					RenderDriver.p(__v1, __v1_childs);
				}
			}
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderButtons: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var renderButtons = Runtime.rtl.get(ctx, params, "renderButtons");
			
			if (Runtime.rtl.exists(ctx, renderButtons) && Runtime.rtl.isFn(ctx, renderButtons))
			{
				/* Element 'div.form_buttons' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["form_buttons", this.getCssHash(ctx)].join(" "),"@key":"buttons","@elem_name":"form_buttons"}});
				
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": renderButtons(ctx, layout, model, params, content)});
				RenderDriver.p(__v0, __v0_childs);
			}
			else
			{
				/* Element 'div.form_buttons' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["form_buttons", this.getCssHash(ctx)].join(" "),"@key":"buttons","@elem_name":"form_buttons"}});
				
				if (Runtime.rtl.get(ctx, params, "action") == "add")
				{
					/* Component 'Button' */
					[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"type":"success","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.Form","onButtonClick"],"data-action":"create"}, "layout": layout, "content": (__control) =>
					{
						var __vnull = null;
						var __control_childs = [];
						
						/* Text */
						[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Add"});
						
						return __control_childs;
					}});
					
					/* Component 'Button' */
					[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.Form","onButtonClick"],"data-action":"cancel"}, "layout": layout, "content": (__control) =>
					{
						var __vnull = null;
						var __control_childs = [];
						
						/* Text */
						[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Cancel"});
						
						return __control_childs;
					}});
				}
				
				if (Runtime.rtl.get(ctx, params, "action") == "edit")
				{
					/* Component 'Button' */
					[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"type":"success","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.Form","onButtonClick"],"data-action":"update"}, "layout": layout, "content": (__control) =>
					{
						var __vnull = null;
						var __control_childs = [];
						
						/* Text */
						[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Update"});
						
						return __control_childs;
					}});
					
					/* Component 'Button' */
					[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.Form","onButtonClick"],"data-action":"cancel"}, "layout": layout, "content": (__control) =>
					{
						var __vnull = null;
						var __control_childs = [];
						
						/* Text */
						[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Cancel"});
						
						return __control_childs;
					}});
				}
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	renderButton: function(ctx, layout, model, params, button_type)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			if (button_type == "create")
			{
				/* Component 'Button' */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"type":"success","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.Form","onButtonClick"],"data-action":"create","@key":"create"}, "layout": layout, "content": (__control) =>
				{
					var __vnull = null;
					var __control_childs = [];
					
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Add"});
					
					return __control_childs;
				}});
			}
			
			if (button_type == "update")
			{
				/* Component 'Button' */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"type":"success","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.Form","onButtonClick"],"data-action":"update","@key":"create"}, "layout": layout, "content": (__control) =>
				{
					var __vnull = null;
					var __control_childs = [];
					
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Update"});
					
					return __control_childs;
				}});
			}
			
			if (button_type == "cancel")
			{
				/* Component 'Button' */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.Form","onButtonClick"],"data-action":"cancel","@key":"cancel"}, "layout": layout, "content": (__control) =>
				{
					var __vnull = null;
					var __control_childs = [];
					
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": "Cancel"});
					
					return __control_childs;
				}});
			}
			
			return __control_childs;
		};
	},
	renderButtonInfo: function(ctx, layout, model, params, button_info)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Component 'Button' */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": this.mergeAttrs(ctx, {"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.Form","onButtonClick"]},button_info), "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.rtl.get(ctx, button_info, "value")});
				
				return __control_childs;
			}});
			
			return __control_childs;
		};
	},
	renderResult: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.form_row.form_result' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["form_row form_result", this.getResultClass(ctx, model), this.getCssHash(ctx)].join(" "),"@key":"result","@elem_name":"form_row"}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.message});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.success_message});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": model.error_message});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderFooter: function(ctx, layout, model, params, content)
	{
		return ;
	},
	/**
 * Patch field
 */
	patchField: function(ctx, layout, field, model, params)
	{
		return field;
	},
	/**
 * Patch class settings
 */
	patchSettings: function(ctx, layout, field, class_settings, model, params)
	{
		return class_settings;
	},
	/**
 * Returns result class
 */
	getResultClass: function(ctx, model)
	{
		if (model.success_message != "")
		{
			return "success";
		}
		if (model.error_message != "")
		{
			return "error";
		}
		return "";
	},
	/**
 * Returns bind path
 */
	getBindPath: function(ctx, field)
	{
		return Runtime.Collection.from(["item",Runtime.rtl.get(ctx, field, "api_name")]);
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.Input.Button"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.Form";
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
			"class_name": "Runtime.Web.CRUD.Form",
			"name": "Runtime.Web.CRUD.Form",
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
Runtime.rtl.defClass(Runtime.Web.CRUD.Form);
window["Runtime.Web.CRUD.Form"] = Runtime.Web.CRUD.Form;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.Form;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.FormEvent = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Runtime.Web.CRUD.FormEvent.prototype = Object.create(Runtime.BaseStruct.prototype);
Runtime.Web.CRUD.FormEvent.prototype.constructor = Runtime.Web.CRUD.FormEvent;
Object.assign(Runtime.Web.CRUD.FormEvent.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.event = "";
		this.item = null;
		this.field_name = "";
		this.value = null;
		this.old_value = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.FormEvent)
		{
			this.event = o.event;
			this.item = o.item;
			this.field_name = o.field_name;
			this.value = o.value;
			this.old_value = o.old_value;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "event")this.event = v;
		else if (k == "item")this.item = v;
		else if (k == "field_name")this.field_name = v;
		else if (k == "value")this.value = v;
		else if (k == "old_value")this.old_value = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "event")return this.event;
		else if (k == "item")return this.item;
		else if (k == "field_name")return this.field_name;
		else if (k == "value")return this.value;
		else if (k == "old_value")return this.old_value;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.CRUD.FormEvent";
	},
});
Object.assign(Runtime.Web.CRUD.FormEvent, Runtime.BaseStruct);
Object.assign(Runtime.Web.CRUD.FormEvent,
{
	ACTION_CREATE: "create",
	ACTION_UPDATE: "update",
	ACTION_CANCEL: "cancel",
	ACTION_CHANGE: "change",
	ACTION_SEARCH: "search",
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.FormEvent";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"name": "Runtime.Web.CRUD.FormEvent",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("event");
			a.push("item");
			a.push("field_name");
			a.push("value");
			a.push("old_value");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "ACTION_CREATE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ACTION_UPDATE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ACTION_CANCEL") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ACTION_CHANGE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ACTION_SEARCH") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "event") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "item") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"t": "Runtime.Dict",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "field_name") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"t": "var",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "old_value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormEvent",
			"t": "var",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
Runtime.rtl.defClass(Runtime.Web.CRUD.FormEvent);
window["Runtime.Web.CRUD.FormEvent"] = Runtime.Web.CRUD.FormEvent;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.FormEvent;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.FormModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Runtime.Web.CRUD.FormModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Runtime.Web.CRUD.FormModel.prototype.constructor = Runtime.Web.CRUD.FormModel;
Object.assign(Runtime.Web.CRUD.FormModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.fields_errors = null;
		this.item = null;
		this.old_item = null;
		this.action = "";
		this.kind = "";
		this.message = "";
		this.success_message = "";
		this.error_message = "";
		this.data = Runtime.Dict.from({});
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.FormModel)
		{
			this.fields_errors = o.fields_errors;
			this.item = o.item;
			this.old_item = o.old_item;
			this.action = o.action;
			this.kind = o.kind;
			this.message = o.message;
			this.success_message = o.success_message;
			this.error_message = o.error_message;
			this.data = o.data;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "fields_errors")this.fields_errors = v;
		else if (k == "item")this.item = v;
		else if (k == "old_item")this.old_item = v;
		else if (k == "action")this.action = v;
		else if (k == "kind")this.kind = v;
		else if (k == "message")this.message = v;
		else if (k == "success_message")this.success_message = v;
		else if (k == "error_message")this.error_message = v;
		else if (k == "data")this.data = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "fields_errors")return this.fields_errors;
		else if (k == "item")return this.item;
		else if (k == "old_item")return this.old_item;
		else if (k == "action")return this.action;
		else if (k == "kind")return this.kind;
		else if (k == "message")return this.message;
		else if (k == "success_message")return this.success_message;
		else if (k == "error_message")return this.error_message;
		else if (k == "data")return this.data;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.CRUD.FormModel";
	},
});
Object.assign(Runtime.Web.CRUD.FormModel, Runtime.BaseStruct);
Object.assign(Runtime.Web.CRUD.FormModel,
{
	ACTION_CREATE: "create",
	ACTION_UPDATE: "update",
	/**
	 * Set item
	 */
	setItem: function(ctx, model, item)
	{
		return model.copy(ctx, Runtime.Dict.from({"item":item,"old_item":item}));
	},
	/**
	 * Set kind
	 */
	setKind: function(ctx, model, kind)
	{
		return model.copy(ctx, Runtime.Dict.from({"kind":kind}));
	},
	/**
	 * Set wait message
	 */
	setWaitMessage: function(ctx, model, message)
	{
		if (message == undefined) message = "";
		return model.copy(ctx, Runtime.Dict.from({"message":(message != message) ? (message) : (ctx.translate(ctx, "Runtime.Web", "Please wait")),"success_message":message,"error_message":""}));
	},
	/**
	 * Message
	 */
	setMessage: function(ctx, model, message)
	{
		return model.copy(ctx, Runtime.Dict.from({"message":"","success_message":message,"error_message":""}));
	},
	/**
	 * Set answer
	 */
	setAnswer: function(ctx, model, answer)
	{
		model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["fields_errors"]), null);
		if (answer.isSuccess(ctx))
		{
			return this.setSuccess(ctx, model, answer.success_message);
		}
		model = this.setError(ctx, model, answer.error_message);
		/* Set field errors */
		if (answer.code == Runtime.rtl.ERROR_VALIDATION)
		{
			model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["fields_errors"]), Runtime.rtl.get(ctx, answer.response, "fields_errors"));
		}
		return model;
	},
	/**
	 * Success
	 */
	setSuccess: function(ctx, model, message)
	{
		return model.copy(ctx, Runtime.Dict.from({"message":"","success_message":message,"error_message":""}));
	},
	/**
	 * Error
	 */
	setError: function(ctx, model, message)
	{
		return model.copy(ctx, Runtime.Dict.from({"message":"","success_message":"","error_message":message}));
	},
	/**
	 * Clear
	 */
	clear: function(ctx, model)
	{
		return model.copy(ctx, Runtime.Dict.from({"item":new Runtime.Dict(ctx),"old_item":null,"fields_errors":null,"message":"","success_message":"","error_message":"","data":""}));
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.FormModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"name": "Runtime.Web.CRUD.FormModel",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("fields_errors");
			a.push("item");
			a.push("old_item");
			a.push("action");
			a.push("kind");
			a.push("message");
			a.push("success_message");
			a.push("error_message");
			a.push("data");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "ACTION_CREATE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ACTION_UPDATE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "fields_errors") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "Runtime.Collection",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "item") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "Runtime.Dict",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "old_item") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "Runtime.Dict",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "action") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "kind") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "message") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "success_message") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "error_message") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "data") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.FormModel",
			"t": "Runtime.Dict",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
Runtime.rtl.defClass(Runtime.Web.CRUD.FormModel);
window["Runtime.Web.CRUD.FormModel"] = Runtime.Web.CRUD.FormModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.FormModel;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.Pagination = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.CRUD.Pagination.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.CRUD.Pagination.prototype.constructor = Runtime.Web.CRUD.Pagination;
Object.assign(Runtime.Web.CRUD.Pagination.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.Pagination)
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
		return "Runtime.Web.CRUD.Pagination";
	},
});
Object.assign(Runtime.Web.CRUD.Pagination, Runtime.Web.Component);
Object.assign(Runtime.Web.CRUD.Pagination,
{
	css: function(ctx, vars)
	{
		return ".pagination.h-cd5b{" + Runtime.rtl.toStr("text-align: center;padding: 10px 0;") + Runtime.rtl.toStr("}.pagination.h-cd5b ul{") + Runtime.rtl.toStr("padding: 0;margin: 0;") + Runtime.rtl.toStr("}.pagination.h-cd5b li{") + Runtime.rtl.toStr("display: inline-block;vertical-align: top;list-style: none;margin-left: 5px;margin-right: 5px;") + Runtime.rtl.toStr("}.pagination.h-cd5b li a, .pagination.h-cd5b li a:hover, .pagination.h-cd5b li span{") + Runtime.rtl.toStr("display: table-cell;vertical-align: middle;background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "border"])) + Runtime.rtl.toStr(" solid;color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "text"])) + Runtime.rtl.toStr(";text-align: center;width: 30px;height: 30px;font-size: 14px;text-decoration: none;")) + Runtime.rtl.toStr("}.pagination.h-cd5b li a:hover{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "hover-background"])) + Runtime.rtl.toStr(";color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "hover-text"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.pagination.h-cd5b li.active.h-cd5b a, .pagination.h-cd5b li.active.h-cd5b a:hover{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "active", "background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "active", "border"])) + Runtime.rtl.toStr(" solid;color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "active", "text"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var min = (ctx, a, b) => 
			{
				return (a < b) ? (a) : (b);
			};
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, params, "page"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "int", 0));
			var page = __v0.value(ctx);
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, params, "pages"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "int", 0));
			var pages = __v0.value(ctx);
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, params, "delta"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "int", 5));
			var delta = __v0.value(ctx);
			
			var start = 2;
			
			var end = min(ctx, pages - 1, page + delta);
			
			var active = false;
			
			if (pages > 1)
			{
				/* Element 'nav.pagination' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "nav","attrs": {"class":["pagination", this.getCssHash(ctx)].join(" "),"@elem_name":"pagination"}});
				
				/* Element 'ul' */
				var __v1; var __v1_childs = [];
				[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "ul","attrs": {}});
				
				active = false;
				
				if (page == 1)
				{
					active = true;
				}
				
				/* Element 'li.btn.page.first' */
				var __v2; var __v2_childs = [];
				[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "li","attrs": {"class":["btn page first", ((active) ? ("active") : ("")), this.getCssHash(ctx)].join(" "),"@key":"first","@elem_name":"btn"}});
				
				/* Text */
				[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": "                    "});
				
				/* Element 'a' */
				var __v3; var __v3_childs = [];
				[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "a","attrs": {"href":Runtime.rs.url_get_add(ctx, layout.uri, "page", 1)}});
				
				/* Text */
				[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": "1"});
				RenderDriver.p(__v3, __v3_childs);
				
				/* Text */
				[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": "                "});
				RenderDriver.p(__v2, __v2_childs);
				
				if (pages - delta > 1)
				{
					/* Element 'li.btn.skip' */
					var __v2; var __v2_childs = [];
					[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "li","attrs": {"class":["btn skip", this.getCssHash(ctx)].join(" "),"@key":"skip_before","@elem_name":"btn"}});
					
					/* Element 'span' */
					var __v3; var __v3_childs = [];
					[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "span","attrs": {}});
					
					/* Text */
					[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": "..."});
					RenderDriver.p(__v3, __v3_childs);
					RenderDriver.p(__v2, __v2_childs);
				}
				
				if (start <= end)
				{
					for (var i = start;i <= end;i++)
					{
						active = false;
						
						if (page == i)
						{
							active = true;
						}
						
						/* Element 'li.btn.page' */
						var __v2; var __v2_childs = [];
						[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "li","attrs": {"class":["btn page", ((active) ? ("active") : ("")), this.getCssHash(ctx)].join(" "),"@key":"page" + Runtime.rtl.toStr(i),"@elem_name":"btn"}});
						
						/* Element 'a' */
						var __v3; var __v3_childs = [];
						[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "a","attrs": {"href":Runtime.rs.url_get_add(ctx, layout.uri, "page", i)}});
						
						/* Text */
						[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": i});
						RenderDriver.p(__v3, __v3_childs);
						RenderDriver.p(__v2, __v2_childs);
					}
				}
				
				if (end < pages - 1)
				{
					/* Element 'li.btn.skip' */
					var __v2; var __v2_childs = [];
					[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "li","attrs": {"class":["btn skip", this.getCssHash(ctx)].join(" "),"@key":"skip_after","@elem_name":"btn"}});
					
					/* Element 'span' */
					var __v3; var __v3_childs = [];
					[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "span","attrs": {}});
					
					/* Text */
					[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": "..."});
					RenderDriver.p(__v3, __v3_childs);
					RenderDriver.p(__v2, __v2_childs);
				}
				
				if (pages >= 2)
				{
					active = false;
					
					if (page == pages)
					{
						active = true;
					}
					
					/* Element 'li.btn.page.last' */
					var __v2; var __v2_childs = [];
					[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "li","attrs": {"class":["btn page last", ((active) ? ("active") : ("")), this.getCssHash(ctx)].join(" "),"@key":"last","@elem_name":"btn"}});
					
					/* Element 'a' */
					var __v3; var __v3_childs = [];
					[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "a","attrs": {"href":Runtime.rs.url_get_add(ctx, layout.uri, "page", pages)}});
					
					/* Text */
					[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": pages});
					RenderDriver.p(__v3, __v3_childs);
					RenderDriver.p(__v2, __v2_childs);
				}
				RenderDriver.p(__v1, __v1_childs);
				RenderDriver.p(__v0, __v0_childs);
			}
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.Pagination";
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
			"class_name": "Runtime.Web.CRUD.Pagination",
			"name": "Runtime.Web.CRUD.Pagination",
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
Runtime.rtl.defClass(Runtime.Web.CRUD.Pagination);
window["Runtime.Web.CRUD.Pagination"] = Runtime.Web.CRUD.Pagination;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.Pagination;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.Table = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.CRUD.Table.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.CRUD.Table.prototype.constructor = Runtime.Web.CRUD.Table;
Object.assign(Runtime.Web.CRUD.Table.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.Table)
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
		return "Runtime.Web.CRUD.Table";
	},
});
Object.assign(Runtime.Web.CRUD.Table, Runtime.Web.Component);
Object.assign(Runtime.Web.CRUD.Table,
{
	css: function(ctx, vars)
	{
		return ".table.h-e4c9{" + Runtime.rtl.toStr("border-collapse: collapse;border: 1px " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "border"])) + Runtime.rtl.toStr(" solid;margin-top: 10px;")) + Runtime.rtl.toStr("}.td.h-e4c9, .th.h-e4c9{") + Runtime.rtl.toStr("border: 1px " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "border"])) + Runtime.rtl.toStr(" solid;padding: 5px;text-align: center;")) + Runtime.rtl.toStr("}.row.h-e4c9:hover td{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "hover-background"])) + Runtime.rtl.toStr(";color: ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "hover-text"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.td-edit-buttons.h-e4c9{") + Runtime.rtl.toStr("margin-left: -2px;margin-right: -2px;") + Runtime.rtl.toStr("}.td-edit-buttons.h-e4c9 .button.h-e4c9, .td-edit-buttons.h-e4c9 .button.h-de49{") + Runtime.rtl.toStr("margin-left: 2px;margin-right: 2px;") + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'table.table' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "table","attrs": {"class":["table", this.getCssHash(ctx)].join(" "),"@key":"table","@elem_name":"table"}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": this.renderHeader(ctx, layout, model, params, content)});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": this.renderRows(ctx, layout, model, params, content)});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderRows: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			if (model != null && model.rows != null)
			{
				for (var i = 0;i < model.rows.count(ctx);i++)
				{
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": this.renderRow(ctx, layout, model, params, i)});
				}
			}
			
			return __control_childs;
		};
	},
	renderHeader: function(ctx, layout, model, params)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var fields = Runtime.rtl.get(ctx, params, "fields");
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, params, "extends_name"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", "table"));
			var extends_name = __v0.value(ctx);
			
			/* Element 'tr.header' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "tr","attrs": {"class":["header", this.getCssHash(ctx)].join(" "),"@elem_name":"header"}});
			
			for (var i = 0;i < fields.count(ctx);i++)
			{
				var field_name = Runtime.rtl.get(ctx, fields, i);
				
				var field = Runtime.Web.CRUD.FieldInfo.getFieldInfo(ctx, Runtime.rtl.get(ctx, params, "struct"), field_name);
				
				/* Element 'th.th' */
				var __v1; var __v1_childs = [];
				[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "th","attrs": {"data-name":field_name,"class":["th", "th--" + Runtime.rtl.toStr(field_name), this.getCssHash(ctx)].join(" "),"@key":"th-" + Runtime.rtl.toStr(field_name),"@elem_name":"th"}});
				
				/* Text */
				[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": (Runtime.rtl.attr(ctx, field, ["info", extends_name, "label"])) ? (Runtime.rtl.attr(ctx, field, ["info", extends_name, "label"])) : (Runtime.rtl.get(ctx, field, "label"))});
				RenderDriver.p(__v1, __v1_childs);
			}
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderRow: function(ctx, layout, model, params, index)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var row = Runtime.rtl.get(ctx, model.rows, index);
			
			var fields = Runtime.rtl.get(ctx, params, "fields");
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, params, "extends_name"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", "table"));
			var extends_name = __v0.value(ctx);
			
			/* Element 'tr.row' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "tr","attrs": {"data-index":index,"class":["row", this.getCssHash(ctx)].join(" "),"@key":"tr-" + Runtime.rtl.toStr(index),"@elem_name":"row"}});
			
			for (var i = 0;i < fields.count(ctx);i++)
			{
				var field_name = Runtime.rtl.get(ctx, fields, i);
				
				var field = Runtime.Web.CRUD.FieldInfo.getFieldInfo(ctx, Runtime.rtl.get(ctx, params, "struct"), field_name);
				
				var __v1 = new Runtime.Monad(ctx, Runtime.rtl.attr(ctx, field, ["info", extends_name, "text-align"]));
				__v1 = __v1.monad(ctx, Runtime.rtl.m_to(ctx, "string", "left"));
				var text_align = __v1.value(ctx);
				
				var __v1 = new Runtime.Monad(ctx, Runtime.rtl.attr(ctx, field, ["info", extends_name, "width"]));
				__v1 = __v1.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
				var td_width = __v1.value(ctx);
				
				/* Element 'td.td' */
				var __v1; var __v1_childs = [];
				[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "td","attrs": {"data-name":field_name,"style":((text_align != "left") ? ("text-align: " + Runtime.rtl.toStr(text_align) + Runtime.rtl.toStr(";")) : (("" + Runtime.rtl.toStr(td_width) != "") ? ("width: " + Runtime.rtl.toStr(td_width) + Runtime.rtl.toStr(";")) : (""))),"class":["td", "td-" + Runtime.rtl.toStr(field_name), this.getCssHash(ctx)].join(" "),"@key":"td-" + Runtime.rtl.toStr(field_name),"@elem_name":"td"}});
				
				/* Text */
				[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "text", {"content": this.renderCell(ctx, layout, model, params, row, field_name, index)});
				RenderDriver.p(__v1, __v1_childs);
			}
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderCell: function(ctx, layout, model, params, row, field_name, index)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var row = Runtime.rtl.get(ctx, model.rows, index);
			
			var struct = Runtime.rtl.get(ctx, params, "struct");
			
			var field = Runtime.Web.CRUD.FieldInfo.getFieldInfo(ctx, Runtime.rtl.get(ctx, params, "struct"), field_name);
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, params, "extends_name"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", "table"));
			var extends_name = __v0.value(ctx);
			
			if (field != null)
			{
				/* Patch field settings */
				field = this.patchField(ctx, layout, field, model, params);
				
				/* Get class name */
				var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, field, "class_name"));
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
				var class_name = __v0.value(ctx);
				
				var __v0 = new Runtime.Monad(ctx, Runtime.rtl.attr(ctx, field, ["info", extends_name, "class_name"]));
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
				var class_name_table = __v0.value(ctx);
				
				if (!Runtime.rtl.isEmpty(ctx, class_name_table))
				{
					class_name = class_name_table;
				}
				
				/* Class settings */
				var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, field, "class_settings"));
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Dict", Runtime.Dict.from({})));
				var class_settings = __v0.value(ctx);
				
				var __v0 = new Runtime.Monad(ctx, Runtime.rtl.attr(ctx, field, ["info", extends_name, "class_settings"]));
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Dict", null));
				var class_settings_table = __v0.value(ctx);
				
				if (!Runtime.rtl.isEmpty(ctx, class_settings_table))
				{
					class_settings = class_settings.concat(ctx, class_settings_table);
				}
				
				class_settings = class_settings.setIm(ctx, "name", field_name).setIm(ctx, "crud_kind", "table").setIm(ctx, "crud_struct", struct).setIm(ctx, "crud_field_name", field_name).setIm(ctx, "crud_field_info", field).setIm(ctx, "crud_index", index).setIm(ctx, "crud_item", row).setIm(ctx, "crud_table_model", model);
				
				/* Get value */
				var value = Runtime.rtl.attr(ctx, model, ["rows", index, field_name]);
				
				/* Calculate new value */
				var calc = Runtime.rtl.get(ctx, field, "calc");
				
				var calc_table = Runtime.rtl.attr(ctx, field, ["info", extends_name, "calc"]);
				
				if (calc_table != null)
				{
					calc = calc_table;
				}
				
				if (Runtime.rtl.exists(ctx, calc))
				{
					value = calc(ctx, layout, value, class_settings);
				}
				
				class_settings = class_settings.setIm(ctx, "value", value);
				
				/* Calc class name */
				if (!Runtime.rtl.isString(ctx, class_name) && Runtime.rtl.isFn(ctx, class_name))
				{
					class_name = class_name(ctx, layout, value, class_settings);
				}
				
				var __v0 = new Runtime.Monad(ctx, class_name);
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
				class_name = __v0.value(ctx);
				
				class_settings = class_settings.setIm(ctx, "crud_class_name", class_name);
				
				/* Patch settings */
				class_settings = this.patchSettings(ctx, layout, field, class_settings, model, params);
				
				/* Render value */
				var render = Runtime.rtl.get(ctx, field, "render");
				
				var render_table = Runtime.rtl.attr(ctx, field, ["info", extends_name, "render"]);
				
				if (!Runtime.rtl.isEmpty(ctx, render_table))
				{
					render = render_table;
				}
				
				var can_render = Runtime.rtl.get(ctx, field, "can_render");
				
				var can_render_table = Runtime.rtl.attr(ctx, field, ["info", extends_name, "can_render"]);
				
				if (!Runtime.rtl.isEmpty(ctx, can_render_table))
				{
					can_render = can_render_table;
				}
				
				if (Runtime.rtl.exists(ctx, render) && (!Runtime.rtl.exists(ctx, can_render) || Runtime.rtl.exists(ctx, can_render) && can_render(ctx, layout, value, class_settings)))
				{
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": render(ctx, layout, value, class_settings)});
				}
				else
				{
					if (!Runtime.rtl.isEmpty(ctx, class_name))
					{
						[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": class_name,"attrs": this.mergeAttrs(ctx, {"@bind":["Runtime.Web.CRUD.Table",Runtime.Collection.from(["rows",index,field_name])],"@key":field_name},class_settings), "layout": layout});
					}
				}
			}
			
			return __control_childs;
		};
	},
	renderField: function(ctx, layout, model, class_settings)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var class_name = Runtime.rtl.get(ctx, class_settings, "crud_class_name");
			
			var field_name = Runtime.rtl.get(ctx, class_settings, "crud_field_name");
			
			var index = Runtime.rtl.get(ctx, class_settings, "crud_row_index");
			
			if (!Runtime.rtl.isEmpty(ctx, class_name))
			{
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": class_name,"attrs": this.mergeAttrs(ctx, {"@bind":["Runtime.Web.CRUD.Table",Runtime.Collection.from(["rows",index,field_name])],"@key":field_name},class_settings), "layout": layout});
			}
			
			return __control_childs;
		};
	},
	/**
 * Patch field
 */
	patchField: function(ctx, layout, field, model, params)
	{
		return field;
	},
	/**
 * Patch class settings
 */
	patchSettings: function(ctx, layout, field, class_settings, model, params)
	{
		return class_settings;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.Table";
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
			"class_name": "Runtime.Web.CRUD.Table",
			"name": "Runtime.Web.CRUD.Table",
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
Runtime.rtl.defClass(Runtime.Web.CRUD.Table);
window["Runtime.Web.CRUD.Table"] = Runtime.Web.CRUD.Table;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.Table;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.TableModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Runtime.Web.CRUD.TableModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Runtime.Web.CRUD.TableModel.prototype.constructor = Runtime.Web.CRUD.TableModel;
Object.assign(Runtime.Web.CRUD.TableModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.rows = null;
		this.page = 0;
		this.pages = 0;
		this.delta = 5;
		this.limit = 100;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.TableModel)
		{
			this.rows = o.rows;
			this.page = o.page;
			this.pages = o.pages;
			this.delta = o.delta;
			this.limit = o.limit;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "rows")this.rows = v;
		else if (k == "page")this.page = v;
		else if (k == "pages")this.pages = v;
		else if (k == "delta")this.delta = v;
		else if (k == "limit")this.limit = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "rows")return this.rows;
		else if (k == "page")return this.page;
		else if (k == "pages")return this.pages;
		else if (k == "delta")return this.delta;
		else if (k == "limit")return this.limit;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.CRUD.TableModel";
	},
});
Object.assign(Runtime.Web.CRUD.TableModel, Runtime.BaseStruct);
Object.assign(Runtime.Web.CRUD.TableModel,
{
	/**
	 * Returns position of item
	 */
	findPos: function(ctx, model, find)
	{
		var keys = find.keys(ctx);
		return model.rows.find(ctx, (ctx, row) => 
		{
			for (var i = 0;i < keys.count(ctx);i++)
			{
				var key = Runtime.rtl.get(ctx, keys, i);
				var value1 = Runtime.rtl.get(ctx, find, key);
				var value2 = Runtime.rtl.get(ctx, row, key);
				if (value1 != value2)
				{
					return false;
				}
			}
			return true;
		});
	},
	/**
	 * Find first item
	 */
	getFirstItem: function(ctx, model, find)
	{
		if (model.rows == null)
		{
			return null;
		}
		var pos = this.findPos(ctx, model, find);
		return model.rows.get(ctx, pos, null);
	},
	/**
	 * Add item
	 */
	addItem: function(ctx, model, item)
	{
		if (model.rows == null)
		{
			model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["rows"]), Runtime.Collection.from([]));
		}
		model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["rows"]), model.rows.pushIm(ctx, item));
		return model;
	},
	/**
	 * Prepend item
	 */
	prependItem: function(ctx, model, item)
	{
		if (model.rows == null)
		{
			model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["rows"]), Runtime.Collection.from([]));
		}
		model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["rows"]), model.rows.prependIm(ctx, item));
		return model;
	},
	/**
	 * Set item
	 */
	setItem: function(ctx, model, find, item)
	{
		if (model.rows == null)
		{
			model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["rows"]), Runtime.Collection.from([]));
		}
		var pos = this.findPos(ctx, model, find);
		if (pos != -1)
		{
			model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["rows"]), model.rows.setIm(ctx, pos, item));
		}
		return model;
	},
	/**
	 * Remove item by id
	 */
	removeItem: function(ctx, model, find)
	{
		if (model.rows == null)
		{
			return model;
		}
		var pos = this.findPos(ctx, model, find);
		if (pos != -1)
		{
			model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["rows"]), model.rows.removeIm(ctx, pos));
		}
		return model;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.TableModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.CRUD.TableModel",
			"name": "Runtime.Web.CRUD.TableModel",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("rows");
			a.push("page");
			a.push("pages");
			a.push("delta");
			a.push("limit");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "rows") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.TableModel",
			"t": "Runtime.Collection",
			"s": ["Runtime.Dict"],
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "page") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.TableModel",
			"t": "int",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "pages") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.TableModel",
			"t": "int",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "delta") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.TableModel",
			"t": "int",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "limit") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.TableModel",
			"t": "int",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
Runtime.rtl.defClass(Runtime.Web.CRUD.TableModel);
window["Runtime.Web.CRUD.TableModel"] = Runtime.Web.CRUD.TableModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.TableModel;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.CrudFilter = function(ctx)
{
	Runtime.Web.CRUD.Form.apply(this, arguments);
};
Runtime.Web.CRUD.CrudFilter.prototype = Object.create(Runtime.Web.CRUD.Form.prototype);
Runtime.Web.CRUD.CrudFilter.prototype.constructor = Runtime.Web.CRUD.CrudFilter;
Object.assign(Runtime.Web.CRUD.CrudFilter.prototype,
{
	/**
 * On mouse click
 */
	onSearchButtonClick: async function(ctx, msg)
	{
		var model = this.model(ctx);
		var event = new Runtime.Web.CRUD.FormEvent(ctx, Runtime.Dict.from({"event":Runtime.Web.CRUD.FormEvent.ACTION_SEARCH,"item":model.item}));
		await this.signal(ctx, event);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.CrudFilter)
		{
		}
		Runtime.Web.CRUD.Form.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.CRUD.Form.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.CRUD.Form.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.CRUD.CrudFilter";
	},
});
Object.assign(Runtime.Web.CRUD.CrudFilter, Runtime.Web.CRUD.Form);
Object.assign(Runtime.Web.CRUD.CrudFilter,
{
	css: function(ctx, vars)
	{
		return ".form.h-95b5{" + Runtime.rtl.toStr("width: 300px;margin-top: 10px;") + Runtime.rtl.toStr("}.form_title.h-95b5{") + Runtime.rtl.toStr("text-align: center;font-weight: bold;padding-bottom: 10px;") + Runtime.rtl.toStr("}.form_buttons.h-95b5{") + Runtime.rtl.toStr("text-align: center;margin-top: 10px;") + Runtime.rtl.toStr("}.form_error.h-95b5{") + Runtime.rtl.toStr("padding-top: 0px;") + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.form.filter' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["form filter", this.getCssHash(ctx)].join(" "),"@key":"form","@elem_name":"form"}});
			
			if (model != null)
			{
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": Runtime.Collection.from([this.renderHeader(ctx, layout, model, params, content),this.renderContent(ctx, layout, model, params, content),this.renderButtons(ctx, layout, model, params, content)])});
			}
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderHeader: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.form_title' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["form_title", this.getCssHash(ctx)].join(" "),"@elem_name":"form_title"}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": ctx.translate(ctx, "Runtime.Web.CRUD", "Filter")});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderFieldError: function(ctx, layout, model, field_name)
	{
		return ;
	},
	renderButtons: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.form_buttons' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["form_buttons", this.getCssHash(ctx)].join(" "),"@elem_name":"form_buttons"}});
			
			/* Component 'Button' */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.CrudFilter","onSearchButtonClick"]}, "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": ctx.translate(ctx, "Runtime.Web.CRUD", "Search")});
				
				return __control_childs;
			}});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/**
 * Patch class settings
 */
	patchSettings: function(ctx, layout, field, class_settings, model, params)
	{
		var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, class_settings, "show_select_value_filter"));
		__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "bool", false));
		var show_select_value_filter = __v0.value(ctx);
		if (show_select_value_filter)
		{
			class_settings = Runtime.rtl.setAttr(ctx, class_settings, Runtime.Collection.from(["show_select_value"]), true);
		}
		return class_settings;
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.CRUD.Form","Runtime.Web.Input.Button","Runtime.Web.CRUD.Form"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.CrudFilter";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.CRUD.Form";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.CRUD.CrudFilter",
			"name": "Runtime.Web.CRUD.CrudFilter",
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
Runtime.rtl.defClass(Runtime.Web.CRUD.CrudFilter);
window["Runtime.Web.CRUD.CrudFilter"] = Runtime.Web.CRUD.CrudFilter;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.CrudFilter;
"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.CrudPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Web.CRUD.CrudPage.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Web.CRUD.CrudPage.prototype.constructor = Runtime.Web.CRUD.CrudPage;
Object.assign(Runtime.Web.CRUD.CrudPage.prototype,
{
	/**
 * On show add dialog
 */
	onShowAddClick: async function(ctx, msg)
	{
		this.dialog_add.update(ctx, "show");
		this.form_add.update(ctx, "clear");
		this.form_add.update(ctx, "setKind", "table");
	},
	/**
 * On row edit
 */
	onViewEditClick: async function(ctx, msg)
	{
		this.dialog_edit.update(ctx, "show");
		this.form_edit.update(ctx, "clear");
		this.form_edit.update(ctx, "setItem", this.model(ctx, "item"));
		this.form_edit.update(ctx, "setKind", "view");
	},
	/**
 * On row delete
 */
	onViewDeleteClick: async function(ctx, msg)
	{
		var item = this.model(ctx, "item");
		var message = "";
		var messages = this.constructor.getMessages(ctx, this.constructor.layout, this.model(ctx), this.params);
		var f = Runtime.rtl.get(ctx, messages, "delete");
		if (Runtime.rtl.exists(ctx, f))
		{
			if (Runtime.rtl.isFn(ctx, f))
			{
				message = f(ctx, item);
			}
			else
			{
				message = f;
			}
		}
		else
		{
			message = ctx.translate(ctx, "Runtime.Web.CRUD", "Do you realy want to delete '%name%' ?", Runtime.Dict.from({"name":Runtime.rtl.get(ctx, item, "name")}));
		}
		this.dialog_delete.update(ctx, "show", Runtime.Dict.from({"text":message,"tag":Runtime.Dict.from({"item":item,"kind":"view"})}));
	},
	/**
 * On row edit
 */
	onRowEditClick: async function(ctx, msg)
	{
		var pk = Runtime.rtl.get(ctx, msg.sender.params, "data-pk");
		var item = this.call(ctx, "getFirstItem", pk);
		if (item)
		{
			this.dialog_edit.update(ctx, "show");
			this.form_edit.update(ctx, "clear");
			this.form_edit.update(ctx, "setItem", item);
			this.form_edit.update(ctx, "setKind", "table");
		}
	},
	/**
 * On row delete
 */
	onRowDeleteClick: async function(ctx, msg)
	{
		var pk = Runtime.rtl.get(ctx, msg.sender.params, "data-pk");
		var item = this.call(ctx, "getFirstItem", pk);
		var message = "";
		var messages = this.constructor.getMessages(ctx, this.constructor.layout, this.model(ctx), this.params);
		var f = Runtime.rtl.get(ctx, messages, "delete");
		if (Runtime.rtl.exists(ctx, f))
		{
			if (Runtime.rtl.isFn(ctx, f))
			{
				message = f(ctx, item);
			}
			else
			{
				message = f;
			}
		}
		else
		{
			message = ctx.translate(ctx, "Runtime.Web.CRUD", "Do you realy want to delete '%name%' ?", Runtime.Dict.from({"name":Runtime.rtl.get(ctx, item, "name")}));
		}
		this.dialog_delete.update(ctx, "show", Runtime.Dict.from({"text":message,"tag":Runtime.Dict.from({"item":item,"kind":"table"})}));
	},
	/**
 * On dialog event
 */
	onDialogEvent: async function(ctx, msg)
	{
		var e = msg.data;
		if (msg.sender == this.dialog_delete)
		{
			if (e.button_result == "cancel")
			{
				this.dialog_delete.update(ctx, "hide");
			}
			else
			{
				await this.onItemDelete(ctx, Runtime.rtl.get(ctx, e.tag, "item"), Runtime.rtl.get(ctx, e.tag, "kind"));
			}
		}
		await this.signal(ctx, e);
	},
	/**
 * On form event
 */
	onFormEvent: async function(ctx, msg)
	{
		var e = msg.data;
		if (msg.sender == this.form_add)
		{
			if (e.event == Runtime.Web.CRUD.FormEvent.ACTION_CANCEL)
			{
				this.dialog_add.update(ctx, "hide");
			}
			else if (e.event == Runtime.Web.CRUD.FormEvent.ACTION_CREATE)
			{
				await this.onItemCreate(ctx);
			}
		}
		else if (msg.sender == this.form_edit)
		{
			if (e.event == Runtime.Web.CRUD.FormEvent.ACTION_CANCEL)
			{
				this.dialog_edit.update(ctx, "hide");
			}
			else if (e.event == Runtime.Web.CRUD.FormEvent.ACTION_UPDATE)
			{
				await this.onItemUpdate(ctx);
			}
		}
		await this.signal(ctx, e);
	},
	/**
 * Create item
 */
	onItemCreate: async function(ctx)
	{
		var kind = this.form_add.model(ctx, "kind");
		var item = this.form_add.model(ctx, "item");
		this.form_add.update(ctx, "setWaitMessage");
		/* Send api */
		var answer = await Runtime.Web.RenderDriver.externalBusCall(ctx, Runtime.Dict.from({"object_name":this.constructor.getCrudObjectName(ctx),"interface_name":"core.crud","method_name":"create","data":Runtime.Dict.from({"item":item})}));
		if (answer.isSuccess(ctx))
		{
			if (kind == "table")
			{
				this.update(ctx, "prependItem", Runtime.rtl.get(ctx, answer.response, "new_item"));
			}
			this.dialog_add.update(ctx, "hide");
			await this.onItemCreated(ctx, answer);
		}
		else
		{
			this.form_add.update(ctx, "setAnswer", answer);
		}
	},
	/**
 * Updated item
 */
	onItemCreated: async function(ctx, answer)
	{
	},
	/**
 * Update item
 */
	onItemUpdate: async function(ctx)
	{
		var kind = this.form_edit.model(ctx, "kind");
		var old_item = this.form_edit.model(ctx, "old_item");
		var item = this.form_edit.model(ctx, "item");
		var pk = this.constructor.getPrimaryKey(ctx, this.constructor.getStruct(ctx, this.constructor.layout, this.model(ctx), this.params), old_item);
		this.form_edit.update(ctx, "setWaitMessage");
		/* Send api */
		var answer = await Runtime.Web.RenderDriver.externalBusCall(ctx, Runtime.Dict.from({"object_name":this.constructor.getCrudObjectName(ctx),"interface_name":"core.crud","method_name":"update","data":Runtime.Dict.from({"pk":pk,"item":item})}));
		if (answer.isSuccess(ctx))
		{
			if (kind == "table")
			{
				this.update(ctx, "setItem", pk, Runtime.rtl.get(ctx, answer.response, "new_item"));
			}
			else if (kind == "view")
			{
				this.update(ctx, "setAttr", "item", Runtime.rtl.get(ctx, answer.response, "new_item"));
			}
			this.dialog_edit.update(ctx, "hide");
			await this.onItemUpdated(ctx, answer);
		}
		else
		{
			this.form_edit.update(ctx, "setAnswer", answer);
		}
	},
	/**
 * Updated item
 */
	onItemUpdated: async function(ctx, answer)
	{
	},
	/**
 * Delete item
 */
	onItemDelete: async function(ctx, item, kind)
	{
		this.dialog_delete.update(ctx, "setWaitMessage");
		var pk = this.constructor.getPrimaryKey(ctx, this.constructor.getStruct(ctx, this.constructor.layout, this.model(ctx), this.params), item);
		/* Send api */
		var answer = await Runtime.Web.RenderDriver.externalBusCall(ctx, Runtime.Dict.from({"object_name":this.constructor.getCrudObjectName(ctx),"interface_name":"core.crud","method_name":"delete","data":Runtime.Dict.from({"pk":pk})}));
		if (answer.isSuccess(ctx))
		{
			if (kind == "table")
			{
				this.update(ctx, "removeItem", pk);
			}
			else if (kind == "view")
			{
				this.update(ctx, "setAttr", "item", null);
			}
			this.dialog_delete.update(ctx, "hide");
			await this.onItemDeleted(ctx, answer);
		}
		else
		{
			this.dialog_delete.update(ctx, "setAnswer", answer);
		}
	},
	/**
 * Deleted item
 */
	onItemDeleted: async function(ctx, answer)
	{
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.CrudPage)
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
		return "Runtime.Web.CRUD.CrudPage";
	},
});
Object.assign(Runtime.Web.CRUD.CrudPage, Runtime.Web.Component);
Object.assign(Runtime.Web.CRUD.CrudPage,
{
	/**
 * Returns object name
 */
	getCrudObjectName: function(ctx)
	{
		return "";
	},
	/**
 * Returns options
 */
	getOptions: function(ctx, layout, model, params, name)
	{
		if (name == undefined) name = "";
		return null;
	},
	/**
 * Returns crud struct
 */
	getStruct: function(ctx, layout, model, params)
	{
		return Runtime.Collection.from([]);
	},
	/**
 * Returns filter fields
 */
	getFilterFields: function(ctx, layout, model, params)
	{
		return Runtime.Collection.from([]);
	},
	/**
 * Returns form fields
 */
	getFormFields: function(ctx, layout, model, params)
	{
		return Runtime.Collection.from([]);
	},
	/**
 * Returns table fields
 */
	getTableFields: function(ctx, layout, model, params)
	{
		return Runtime.Collection.from([]);
	},
	/**
 * Returns view fields
 */
	getViewFields: function(ctx, layout, model, params)
	{
		return Runtime.Collection.from([]);
	},
	/**
 * Returns messages
 */
	getMessages: function(ctx, layout, model, params)
	{
		return Runtime.Dict.from({});
	},
	/**
 * Dialog settings
 */
	getDialogSettings: function(ctx, layout, model, params)
	{
		return Runtime.Dict.from({});
	},
	/**
 * Form settings
 */
	getFormSettings: function(ctx, layout, model, params)
	{
		return Runtime.Dict.from({});
	},
	css: function(ctx, vars)
	{
		return ".view.h-2873{" + Runtime.rtl.toStr("}.view_row.h-2873 td{") + Runtime.rtl.toStr("padding-bottom: 5px;") + Runtime.rtl.toStr("}.view_row_label.h-2873{") + Runtime.rtl.toStr("vertical-align: top;text-align: right;padding-right: 5px;") + Runtime.rtl.toStr("}.view_row_content.h-2873{") + Runtime.rtl.toStr("padding-left: 5px;") + Runtime.rtl.toStr("}.view.h-2873 .buttons.h-2873{") + Runtime.rtl.toStr("text-align: center;padding-top: 10px;") + Runtime.rtl.toStr("}.view.h-2873 .buttons.h-2873 .button.h-2873, .view.h-2873 .buttons.h-2873 .button.h-de49{") + Runtime.rtl.toStr("margin-left: 2px;margin-right: 2px;") + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.crud' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["crud", "crud--" + Runtime.rtl.toStr(model.action), this.getCssHash(ctx)].join(" "),"@elem_name":"crud"}});
			
			if (model.action == Runtime.Web.CRUD.CrudPageModel.ACTION_SEARCH)
			{
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": this.renderSearch(ctx, layout, model, params)});
			}
			else if (model.action == Runtime.Web.CRUD.CrudPageModel.ACTION_VIEW)
			{
				/* Text */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": this.renderView(ctx, layout, model, params)});
			}
			RenderDriver.p(__v0, __v0_childs);
			
			/* Element 'div.crud_dialog' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["crud_dialog", this.getCssHash(ctx)].join(" "),"@elem_name":"crud_dialog"}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": this.renderDialog(ctx, layout, model, params)});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderSearch: function(ctx, layout, model, params)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var struct = this.getStruct(ctx, layout, model, params);
			
			var form_fields = this.getFormFields(ctx, layout, model, params);
			
			var filter_fields = this.getFilterFields(ctx, layout, model, params);
			
			var table_fields = this.getTableFields(ctx, layout, model, params);
			
			var messages = this.getMessages(ctx, layout, model, params);
			
			/* Element 'div.search' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["search", this.getCssHash(ctx)].join(" "),"@key":"search","@elem_name":"search"}});
			
			/* Element 'div.buttons' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["buttons", this.getCssHash(ctx)].join(" "),"@elem_name":"buttons"}});
			
			/* Component 'Button' */
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.CrudPage","onShowAddClick"],"type":"primary"}, "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.rtl.get(ctx, messages, "add")});
				
				return __control_childs;
			}});
			RenderDriver.p(__v1, __v1_childs);
			
			if (Runtime.rtl.exists(ctx, filter_fields))
			{
				/* Element 'div.filter' */
				var __v1; var __v1_childs = [];
				[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["filter", this.getCssHash(ctx)].join(" "),"@elem_name":"filter"}});
				
				[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "component", {"name": "Runtime.Web.CRUD.CrudFilter","attrs": {"@name":["Runtime.Web.CRUD.CrudPage","filter"],"struct":struct,"fields":filter_fields,"extends_name":"filter"}, "layout": layout});
				RenderDriver.p(__v1, __v1_childs);
			}
			
			/* Element 'div.table_wrap' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["table_wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"table_wrap"}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "component", {"name": "Runtime.Web.CRUD.Table","attrs": {"@name":["Runtime.Web.CRUD.CrudPage","table"],"struct":struct,"fields":table_fields}, "layout": layout});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "component", {"name": "Runtime.Web.CRUD.Pagination","attrs": {"page":model.table.page + 1,"pages":model.table.pages,"delta":model.table.delta}, "layout": layout});
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderView: function(ctx, layout, model, params)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var struct = this.getStruct(ctx, layout, model, params);
			
			var view_fields = this.getViewFields(ctx, layout, model, params);
			
			/* Element 'div.view' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["view", this.getCssHash(ctx)].join(" "),"@key":"view","@elem_name":"view"}});
			
			/* Element 'table.table' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "table","attrs": {"class":["table", this.getCssHash(ctx)].join(" "),"@elem_name":"table"}});
			
			for (var i = 0;i < view_fields.count(ctx);i++)
			{
				var field_name = Runtime.rtl.get(ctx, view_fields, i);
				
				var field = Runtime.Web.CRUD.FieldInfo.getFieldInfo(ctx, struct, field_name);
				
				if (field != null)
				{
					/* Element 'tr.view_row' */
					var __v2; var __v2_childs = [];
					[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "tr","attrs": {"data-name":field_name,"class":["view_row", "view_row--" + Runtime.rtl.toStr(field_name), this.getCssHash(ctx)].join(" "),"@key":"view_row-" + Runtime.rtl.toStr(field_name),"@elem_name":"view_row"}});
					
					/* Element 'td.view_row_label' */
					var __v3; var __v3_childs = [];
					[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "td","attrs": {"class":["view_row_label", this.getCssHash(ctx)].join(" "),"@elem_name":"view_row_label"}});
					
					/* Text */
					[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": (Runtime.rtl.attr(ctx, field, ["info", "view", "label"])) ? (Runtime.rtl.attr(ctx, field, ["info", "view", "label"])) : (Runtime.rtl.get(ctx, field, "label"))});
					
					/* Text */
					[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": ":"});
					RenderDriver.p(__v3, __v3_childs);
					
					/* Element 'td.view_row_content' */
					var __v3; var __v3_childs = [];
					[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "td","attrs": {"class":["view_row_content", this.getCssHash(ctx)].join(" "),"@elem_name":"view_row_content"}});
					
					/* Text */
					[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": this.renderViewContent(ctx, layout, model, params, field)});
					RenderDriver.p(__v3, __v3_childs);
					RenderDriver.p(__v2, __v2_childs);
				}
			}
			
			/* Element 'tr' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "tr","attrs": {"@key":"buttons"}});
			
			/* Element 'td' */
			var __v3; var __v3_childs = [];
			[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "td","attrs": {"colspan":"2"}});
			
			/* Element 'div.buttons' */
			var __v4; var __v4_childs = [];
			[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["buttons", this.getCssHash(ctx)].join(" "),"@elem_name":"buttons"}});
			
			/* Component 'Button' */
			[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"type":"","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.CrudPage","onViewEditClick"],"@key":"edit"}, "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": ctx.translate(ctx, "Runtime.Web.CRUD", "Edit")});
				
				return __control_childs;
			}});
			
			/* Component 'Button' */
			[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"type":"danger","@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.CrudPage","onViewDeleteClick"],"@key":"delete"}, "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": ctx.translate(ctx, "Runtime.Web.CRUD", "Delete")});
				
				return __control_childs;
			}});
			RenderDriver.p(__v4, __v4_childs);
			RenderDriver.p(__v3, __v3_childs);
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderViewContent: function(ctx, layout, model, params, field)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			if (field != null)
			{
				var struct = this.getStruct(ctx, layout, model, params);
				
				var field_name = field.api_name;
				
				/* Get class name */
				var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, field, "class_name"));
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
				var class_name = __v0.value(ctx);
				
				var __v0 = new Runtime.Monad(ctx, Runtime.rtl.attr(ctx, field, ["info", "view", "class_name"]));
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
				var class_name_view = __v0.value(ctx);
				
				if (!Runtime.rtl.isEmpty(ctx, class_name_view))
				{
					class_name = class_name_view;
				}
				
				/* Class settings */
				var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, field, "class_settings"));
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Dict", Runtime.Dict.from({})));
				var class_settings = __v0.value(ctx);
				
				var __v0 = new Runtime.Monad(ctx, Runtime.rtl.attr(ctx, field, ["info", "view", "class_settings"]));
				__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Dict", null));
				var class_settings_view = __v0.value(ctx);
				
				if (!Runtime.rtl.isEmpty(ctx, class_settings_view))
				{
					class_settings = class_settings.concat(ctx, class_settings_view);
				}
				
				class_settings = class_settings.setIm(ctx, "name", field_name).setIm(ctx, "crud_struct", struct).setIm(ctx, "crud_class_name", class_name).setIm(ctx, "crud_kind", "view").setIm(ctx, "crud_field_name", field_name).setIm(ctx, "crud_field_info", field).setIm(ctx, "crud_item", model.item);
				
				/* Get value */
				var value = Runtime.rtl.attr(ctx, model, ["item", field_name]);
				
				/* Calculate new value */
				var calc = Runtime.rtl.get(ctx, field, "calc");
				
				var calc_view = Runtime.rtl.attr(ctx, field, ["info", "view", "calc"]);
				
				if (calc_view != null)
				{
					calc = calc_view;
				}
				
				if (Runtime.rtl.exists(ctx, calc))
				{
					value = calc(ctx, layout, value, class_settings);
				}
				
				class_settings = class_settings.setIm(ctx, "value", value);
				
				/* Render value */
				var render = Runtime.rtl.get(ctx, field, "render");
				
				var render_view = Runtime.rtl.attr(ctx, field, ["info", "view", "render"]);
				
				if (!Runtime.rtl.isEmpty(ctx, render_view))
				{
					render = render_view;
				}
				
				var can_render = Runtime.rtl.get(ctx, field, "can_render");
				
				var can_render_view = Runtime.rtl.attr(ctx, field, ["info", "view", "can_render"]);
				
				if (!Runtime.rtl.isEmpty(ctx, can_render_view))
				{
					can_render = can_render_view;
				}
				
				if (Runtime.rtl.exists(ctx, render) && (!Runtime.rtl.exists(ctx, can_render) || Runtime.rtl.exists(ctx, can_render) && can_render(ctx, layout, model, class_settings)))
				{
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": render(ctx, layout, value, class_settings)});
				}
				else
				{
					if (!Runtime.rtl.isEmpty(ctx, class_name))
					{
						[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": class_name,"attrs": this.mergeAttrs(ctx, {"@key":field_name},class_settings), "layout": layout});
					}
				}
			}
			
			return __control_childs;
		};
	},
	renderDialog: function(ctx, layout, model, params)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var struct = this.getStruct(ctx, layout, model, params);
			
			var form_fields = this.getFormFields(ctx, layout, model, params);
			
			var form_settings = this.getFormSettings(ctx, layout, model, params);
			
			var form_add_fields = form_fields.filter(ctx, (ctx, __varg0) => Runtime.Web.CRUD.FieldInfo.filterForm(ctx, struct, "create", __varg0));
			
			var form_edit_fields = form_fields.filter(ctx, (ctx, __varg0) => Runtime.Web.CRUD.FieldInfo.filterForm(ctx, struct, "update", __varg0));
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, form_settings, "class_name"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", "Runtime.Web.CRUD.Form"));
			var form_class_name = __v0.value(ctx);
			
			var dialog_form_settings = this.getDialogSettings(ctx, layout, model, params);
			
			/* Element 'div.dialogs' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["dialogs", this.getCssHash(ctx)].join(" "),"@elem_name":"dialogs"}});
			
			/* Component 'Dialog' */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Dialog.Dialog","attrs": this.mergeAttrs(ctx, {"@name":["Runtime.Web.CRUD.CrudPage","dialog_add"],"style":Runtime.Web.Dialog.DialogModel.STYLE_CONTENT,"show_buttons":false},dialog_form_settings), "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": form_class_name,"attrs": this.mergeAttrs(ctx, {"@name":["Runtime.Web.CRUD.CrudPage","form_add"],"action":"add","struct":struct,"fields":form_add_fields,"@event:Runtime.Web.CRUD.FormEvent":["Runtime.Web.CRUD.CrudPage","onFormEvent"]},form_settings), "layout": layout});
				
				return __control_childs;
			}});
			
			/* Component 'Dialog' */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Dialog.Dialog","attrs": this.mergeAttrs(ctx, {"@name":["Runtime.Web.CRUD.CrudPage","dialog_edit"],"style":Runtime.Web.Dialog.DialogModel.STYLE_CONTENT,"show_buttons":false},dialog_form_settings), "layout": layout, "content": (__control) =>
			{
				var __vnull = null;
				var __control_childs = [];
				
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": form_class_name,"attrs": this.mergeAttrs(ctx, {"@name":["Runtime.Web.CRUD.CrudPage","form_edit"],"action":"edit","struct":struct,"fields":form_edit_fields,"@event:Runtime.Web.CRUD.FormEvent":["Runtime.Web.CRUD.CrudPage","onFormEvent"]},form_settings), "layout": layout});
				
				return __control_childs;
			}});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Dialog.Dialog","attrs": {"@name":["Runtime.Web.CRUD.CrudPage","dialog_delete"],"style":Runtime.Web.Dialog.DialogModel.STYLE_CONFIRM,"auto_hide":false,"@event:Runtime.Web.Dialog.DialogEvent":["Runtime.Web.CRUD.CrudPage","onDialogEvent"],"buttons":Runtime.Collection.from([Runtime.Dict.from({"type":"danger","data-action":"ok","value":"OK"}),Runtime.Dict.from({"type":"default","data-action":"cancel","value":"Cancel"})])}, "layout": layout});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	renderDate: function(ctx, layout, value, settings)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, settings, "crud_kind"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
			var crud_kind = __v0.value(ctx);
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, settings, "crud_class_name"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
			var class_name = __v0.value(ctx);
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": (value != null) ? (value.getDate(ctx, layout.tz)) : ("")});
			
			return __control_childs;
		};
	},
	renderDateTime: function(ctx, layout, value, settings)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, settings, "crud_kind"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
			var crud_kind = __v0.value(ctx);
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, settings, "crud_class_name"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "string", ""));
			var class_name = __v0.value(ctx);
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": (value != null) ? (value.getDBTime(ctx, layout.tz)) : ("")});
			
			return __control_childs;
		};
	},
	renderNumber: function(ctx, layout, value, settings)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var table_model = Runtime.rtl.get(ctx, settings, "crud_table_model");
			
			var index = Runtime.rtl.get(ctx, settings, "crud_index");
			
			if (table_model)
			{
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": table_model.page * table_model.limit + index + 1});
			}
			
			return __control_childs;
		};
	},
	renderButtons: function(ctx, layout, value, settings)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": this.renderButton(ctx, layout, settings, "edit")});
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": this.renderButton(ctx, layout, settings, "delete")});
			
			return __control_childs;
		};
	},
	renderButton: function(ctx, layout, settings, button_type, options)
	{
		if (options == undefined) options = null;
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var struct = Runtime.rtl.get(ctx, settings, "crud_struct");
			
			var table_model = Runtime.rtl.get(ctx, settings, "crud_table_model");
			
			var item = Runtime.rtl.get(ctx, settings, "crud_item");
			
			var index = Runtime.rtl.get(ctx, settings, "crud_index");
			
			if (button_type == "edit")
			{
				/* Component 'Button' */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"type":"small","data-index":index,"data-pk":this.getPrimaryKey(ctx, struct, item),"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.CrudPage","onRowEditClick"],"@key":"edit"}, "layout": layout, "content": (__control) =>
				{
					var __vnull = null;
					var __control_childs = [];
					
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": ctx.translate(ctx, "Runtime.Web.CRUD", "Edit")});
					
					return __control_childs;
				}});
			}
			else if (button_type == "view")
			{
				var target = Runtime.Dict.from({});
				
				var url = layout.route_prefix + Runtime.rtl.toStr(Runtime.rtl.get(ctx, options, "url"));
				
				var pk = this.getPrimaryKey(ctx, struct, item);
				
				url = Runtime.Web.Route.replace(ctx, url, pk);
				
				var label = (!Runtime.rtl.isEmpty(ctx, Runtime.rtl.get(ctx, options, "label"))) ? (Runtime.rtl.get(ctx, options, "label")) : (ctx.translate(ctx, "Runtime.Web.CRUD", "View"));
				
				if (!Runtime.rtl.isEmpty(ctx, Runtime.rtl.get(ctx, options, "target")))
				{
					target = Runtime.Dict.from({"target":Runtime.rtl.get(ctx, options, "target")});
				}
				
				/* Element 'a.nolink' */
				var __v0; var __v0_childs = [];
				[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "a","attrs": this.mergeAttrs(ctx, {"href":url,"class":["nolink", this.getCssHash(ctx)].join(" "),"@key":"view","@elem_name":"nolink"},target)});
				
				/* Component 'Button' */
				[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"type":"small"}, "layout": layout, "content": (__control) =>
				{
					var __vnull = null;
					var __control_childs = [];
					
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": label});
					
					return __control_childs;
				}});
				RenderDriver.p(__v0, __v0_childs);
			}
			else if (button_type == "delete")
			{
				var table_model = Runtime.rtl.get(ctx, settings, "crud_table_model");
				
				var item = Runtime.rtl.get(ctx, settings, "crud_item");
				
				var index = Runtime.rtl.get(ctx, settings, "crud_index");
				
				/* Component 'Button' */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.Input.Button","attrs": {"type":"small danger","data-index":index,"data-pk":this.getPrimaryKey(ctx, struct, item),"@event:Runtime.Web.Events.MouseClickEvent":["Runtime.Web.CRUD.CrudPage","onRowDeleteClick"],"@key":"delete"}, "layout": layout, "content": (__control) =>
				{
					var __vnull = null;
					var __control_childs = [];
					
					/* Text */
					[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": ctx.translate(ctx, "Runtime.Web.CRUD", "Delete")});
					
					return __control_childs;
				}});
			}
			
			return __control_childs;
		};
	},
	/**
 * Returns primary key by item
 */
	getPrimaryKey: function(ctx, struct, item)
	{
		var pk = new Runtime.Map(ctx);
		struct = struct.filter(ctx, Runtime.lib.equalAttr(ctx, "primary", true));
		for (var i = 0;i < struct.count(ctx);i++)
		{
			var field = Runtime.rtl.get(ctx, struct, i);
			var value = Runtime.rtl.get(ctx, item, field.api_name);
			pk.set(ctx, field.api_name, value);
		}
		return pk.toDict(ctx);
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.CRUD.CrudFilter","Runtime.Web.CRUD.Form","Runtime.Web.CRUD.Pagination","Runtime.Web.CRUD.Table","Runtime.Web.Dialog.Dialog","Runtime.Web.Input.Button","Runtime.Web.Input.Input","Runtime.Web.Input.Label","Runtime.Web.Input.Select","Runtime.Web.Input.SelectText"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.CrudPage";
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
			"class_name": "Runtime.Web.CRUD.CrudPage",
			"name": "Runtime.Web.CRUD.CrudPage",
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
Runtime.rtl.defClass(Runtime.Web.CRUD.CrudPage);
window["Runtime.Web.CRUD.CrudPage"] = Runtime.Web.CRUD.CrudPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.CrudPage;
"use strict;"
/*!
 *  Bayrell Runtime Library 
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.CrudPageModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Runtime.Web.CRUD.CrudPageModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Runtime.Web.CRUD.CrudPageModel.prototype.constructor = Runtime.Web.CRUD.CrudPageModel;
Object.assign(Runtime.Web.CRUD.CrudPageModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.action = "";
		this.form_add = new Runtime.Web.CRUD.FormModel(ctx, Runtime.Dict.from({"action":"create"}));
		this.form_edit = new Runtime.Web.CRUD.FormModel(ctx, Runtime.Dict.from({"action":"update"}));
		this.filter = new Runtime.Web.CRUD.FormModel(ctx);
		this.table = new Runtime.Web.CRUD.TableModel(ctx);
		this.dialog_add = new Runtime.Web.Dialog.DialogModel(ctx);
		this.dialog_edit = new Runtime.Web.Dialog.DialogModel(ctx);
		this.dialog_delete = new Runtime.Web.Dialog.DialogModel(ctx);
		this.item = Runtime.Dict.from({});
		this.foreigns = Runtime.Dict.from({});
		this.data = Runtime.Dict.from({});
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.CrudPageModel)
		{
			this.action = o.action;
			this.form_add = o.form_add;
			this.form_edit = o.form_edit;
			this.filter = o.filter;
			this.table = o.table;
			this.dialog_add = o.dialog_add;
			this.dialog_edit = o.dialog_edit;
			this.dialog_delete = o.dialog_delete;
			this.item = o.item;
			this.foreigns = o.foreigns;
			this.data = o.data;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "action")this.action = v;
		else if (k == "form_add")this.form_add = v;
		else if (k == "form_edit")this.form_edit = v;
		else if (k == "filter")this.filter = v;
		else if (k == "table")this.table = v;
		else if (k == "dialog_add")this.dialog_add = v;
		else if (k == "dialog_edit")this.dialog_edit = v;
		else if (k == "dialog_delete")this.dialog_delete = v;
		else if (k == "item")this.item = v;
		else if (k == "foreigns")this.foreigns = v;
		else if (k == "data")this.data = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "action")return this.action;
		else if (k == "form_add")return this.form_add;
		else if (k == "form_edit")return this.form_edit;
		else if (k == "filter")return this.filter;
		else if (k == "table")return this.table;
		else if (k == "dialog_add")return this.dialog_add;
		else if (k == "dialog_edit")return this.dialog_edit;
		else if (k == "dialog_delete")return this.dialog_delete;
		else if (k == "item")return this.item;
		else if (k == "foreigns")return this.foreigns;
		else if (k == "data")return this.data;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Web.CRUD.CrudPageModel";
	},
});
Object.assign(Runtime.Web.CRUD.CrudPageModel, Runtime.BaseStruct);
Object.assign(Runtime.Web.CRUD.CrudPageModel,
{
	ACTION_SEARCH: "search",
	ACTION_VIEW: "view",
	ACTION_CREATE: "create",
	ACTION_UPDATE: "update",
	ACTION_DELETE: "delete",
	/**
	 * Crud Search
	 */
	crudSearch: async function(ctx, object_name, container)
	{
		/* Remote call */
		var search_params = this.getCrudSearchParams(ctx, container.request);
		var answer = await container.externalBusCall(ctx, Runtime.Dict.from({"object_name":object_name,"interface_name":"core.crud","method_name":"search","data":search_params}));
		/* Throw exception */
		if (!answer.isSuccess(ctx))
		{
			throw new Runtime.Exceptions.RuntimeException(ctx, answer.error_message, answer.error_code)
		}
		/* Answer */
		var page_model = this.newInstance(ctx, Runtime.Dict.from({"action":"search"}));
		if (answer.isSuccess(ctx))
		{
			page_model = Runtime.rtl.setAttr(ctx, page_model, Runtime.Collection.from(["table", "rows"]), Runtime.rtl.get(ctx, answer.response, "items"));
			page_model = Runtime.rtl.setAttr(ctx, page_model, Runtime.Collection.from(["table", "page"]), Runtime.rtl.get(ctx, answer.response, "page"));
			page_model = Runtime.rtl.setAttr(ctx, page_model, Runtime.Collection.from(["table", "pages"]), Runtime.rtl.get(ctx, answer.response, "pages"));
			page_model = Runtime.rtl.setAttr(ctx, page_model, Runtime.Collection.from(["table", "limit"]), Runtime.rtl.get(ctx, answer.response, "limit"));
			page_model = Runtime.rtl.setAttr(ctx, page_model, Runtime.Collection.from(["foreigns"]), Runtime.rtl.get(ctx, answer.response, "foreigns"));
		}
		return Promise.resolve(page_model);
	},
	/**
	 * Crud View
	 */
	crudView: async function(ctx, object_name, pk, container)
	{
		/* Remote call */
		var answer = await container.externalBusCall(ctx, Runtime.Dict.from({"object_name":object_name,"interface_name":"core.crud","method_name":"getItem","data":Runtime.Dict.from({"pk":pk})}));
		/* Throw exception */
		if (!answer.isSuccess(ctx))
		{
			throw new Runtime.Exceptions.RuntimeException(ctx, answer.error_message, answer.error_code)
		}
		/* Answer */
		var page_model = this.newInstance(ctx, Runtime.Dict.from({"action":"view"}));
		if (answer.isSuccess(ctx))
		{
			page_model = Runtime.rtl.setAttr(ctx, page_model, Runtime.Collection.from(["item"]), Runtime.rtl.get(ctx, answer.response, "item"));
			page_model = Runtime.rtl.setAttr(ctx, page_model, Runtime.Collection.from(["foreigns"]), Runtime.rtl.get(ctx, answer.response, "foreigns"));
		}
		return Promise.resolve(page_model);
	},
	/**
	 * Crud search
	 */
	getCrudSearchParams: function(ctx, request)
	{
		var data = new Runtime.Map(ctx);
		if (Runtime.rtl.exists(ctx, request.query))
		{
			var page = request.query.get(ctx, "page", 1) - 1;
			if (page < 0)
			{
				page = 0;
			}
			data.set(ctx, "page", page);
			data.set(ctx, "limit", 20);
			data.set(ctx, "filter", Runtime.Collection.from([]));
		}
		return data.toDict(ctx);
	},
	/**
	 * Returns position of item
	 */
	findPos: function(ctx, model, find)
	{
		return model.table.constructor.findPos(ctx, model.table, find);
	},
	/**
	 * Find first item
	 */
	getFirstItem: function(ctx, model, find)
	{
		return model.table.constructor.getFirstItem(ctx, model.table, find);
	},
	/**
	 * Add item
	 */
	addItem: function(ctx, model, item)
	{
		model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["table"]), model.table.constructor.addItem(ctx, model.table, item));
		return model;
	},
	/**
	 * Prepend item
	 */
	prependItem: function(ctx, model, item)
	{
		model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["table"]), model.table.constructor.prependItem(ctx, model.table, item));
		return model;
	},
	/**
	 * Set item
	 */
	setItem: function(ctx, model, find, item)
	{
		model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["table"]), model.table.constructor.setItem(ctx, model.table, find, item));
		return model;
	},
	/**
	 * Remove item by id
	 */
	removeItem: function(ctx, model, find)
	{
		model = Runtime.rtl.setAttr(ctx, model, Runtime.Collection.from(["table"]), model.table.constructor.removeItem(ctx, model.table, find));
		return model;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.CrudPageModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"name": "Runtime.Web.CRUD.CrudPageModel",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("action");
			a.push("form_add");
			a.push("form_edit");
			a.push("filter");
			a.push("table");
			a.push("dialog_add");
			a.push("dialog_edit");
			a.push("dialog_delete");
			a.push("item");
			a.push("foreigns");
			a.push("data");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "ACTION_SEARCH") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ACTION_VIEW") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ACTION_CREATE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ACTION_UPDATE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "ACTION_DELETE") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "action") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "string",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "form_add") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "Runtime.Web.CRUD.FormModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "form_edit") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "Runtime.Web.CRUD.FormModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "filter") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "Runtime.Web.CRUD.FormModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "table") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "Runtime.Web.CRUD.TableModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "dialog_add") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "dialog_edit") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "dialog_delete") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "Runtime.Web.Dialog.DialogModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "item") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "Runtime.Dict",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "foreigns") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "Runtime.Dict",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "data") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Web.CRUD.CrudPageModel",
			"t": "Runtime.Dict",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
Runtime.rtl.defClass(Runtime.Web.CRUD.CrudPageModel);
window["Runtime.Web.CRUD.CrudPageModel"] = Runtime.Web.CRUD.CrudPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.CrudPageModel;
"use strict;"
/*!
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Web == 'undefined') Runtime.Web = {};
if (typeof Runtime.Web.CRUD == 'undefined') Runtime.Web.CRUD = {};
Runtime.Web.CRUD.ModuleDescription = function(ctx)
{
};
Object.assign(Runtime.Web.CRUD.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Web.CRUD.ModuleDescription)
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
		return "Runtime.Web.CRUD.ModuleDescription";
	},
});
Object.assign(Runtime.Web.CRUD.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Runtime.Web.CRUD";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.0.1";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({});
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Web.CRUD";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Web.CRUD.ModuleDescription";
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
			"class_name": "Runtime.Web.CRUD.ModuleDescription",
			"name": "Runtime.Web.CRUD.ModuleDescription",
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
Runtime.rtl.defClass(Runtime.Web.CRUD.ModuleDescription);
window["Runtime.Web.CRUD.ModuleDescription"] = Runtime.Web.CRUD.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Web.CRUD.ModuleDescription;
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

"use strict;"
/*
 *  Bayrell Runtime Library
 *
 *  (c) Copyright 2016-2020 "Ildar Bikmamatov" <support@bayrell.org>
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
if (typeof Runtime == 'undefined') Runtime = {};
if (typeof Runtime.Components == 'undefined') Runtime.Components = {};
if (typeof Runtime.Components.AirDatepicker == 'undefined') Runtime.Components.AirDatepicker = {};
Runtime.Components.AirDatepicker.DatePicker = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Runtime.Components.AirDatepicker.DatePicker.prototype = Object.create(Runtime.Web.Component.prototype);
Runtime.Components.AirDatepicker.DatePicker.prototype.constructor = Runtime.Components.AirDatepicker.DatePicker;
Object.assign(Runtime.Components.AirDatepicker.DatePicker.prototype,
{
	/**
 * On change
 */
	onChange: function(ctx, msg)
	{
		var isRange = Runtime.rtl.get(ctx, this.params, "range") == true;
		if (isRange)
		{
			var value = msg.data.value;
			var plan_begin = new Runtime.DateTime(ctx, Runtime.Dict.from({"y":Runtime.rs.substr(ctx, value, 0, 4),"m":Runtime.rs.substr(ctx, value, 5, 2),"d":Runtime.rs.substr(ctx, value, 8, 2),"tz":this.controller.layout.tz}));
			var plan_end = new Runtime.DateTime(ctx, Runtime.Dict.from({"y":Runtime.rs.substr(ctx, value, 13, 4),"m":Runtime.rs.substr(ctx, value, 18, 2),"d":Runtime.rs.substr(ctx, value, 21, 2),"tz":this.controller.layout.tz}));
			msg.data = msg.data.copy(ctx, Runtime.Dict.from({"value":Runtime.Collection.from([plan_begin,plan_end])}));
			this.signal(ctx, msg.data);
		}
		else
		{
			var value = msg.data.value;
			var new_value = new Runtime.DateTime(ctx, Runtime.Dict.from({"y":Runtime.rs.substr(ctx, value, 0, 4),"m":Runtime.rs.substr(ctx, value, 5, 2),"d":Runtime.rs.substr(ctx, value, 8, 2),"tz":this.controller.layout.tz}));
			msg.data = msg.data.copy(ctx, Runtime.Dict.from({"value":new_value}));
			this.signal(ctx, msg.data);
		}
	},
	/**
 * Returns true if repaint overrided
 */
	isRepaintOverridden: function(ctx)
	{
		return true;
	},
	/**
 * Repaint component
 */
	repaint: function(ctx, layout, model, params, content, control, created)
	{
		if (created)
		{
			var res = this.constructor.render(ctx, layout, model, params, content);
			res = res(control);
			this.childs = res;
		}
		return this.childs;
	},
	/**
 * Returns text from model
 */
	getInputTextFromValue: function(ctx, value, isRange)
	{
		var text = "";
		var isRange = Runtime.rtl.get(ctx, this.params, "range") == true;
		if (value instanceof Runtime.Collection)
		{
			if (isRange)
			{
				if (!Runtime.rtl.isEmpty(ctx, Runtime.rtl.get(ctx, value, 0)) && (Runtime.rtl.get(ctx, value, 0) instanceof Runtime.Date || Runtime.rtl.get(ctx, value, 0) instanceof Runtime.DateTime))
				{
					text = Runtime.rtl.get(ctx, value, 0).getDate(ctx, this.controller.layout.tz);
					if (!Runtime.rtl.isEmpty(ctx, Runtime.rtl.get(ctx, value, 1)) && (Runtime.rtl.get(ctx, value, 1) instanceof Runtime.Date || Runtime.rtl.get(ctx, value, 1) instanceof Runtime.DateTime))
					{
						text += Runtime.rtl.toStr(" - " + Runtime.rtl.toStr(Runtime.rtl.get(ctx, value, 1).getDate(ctx, this.controller.layout.tz)));
					}
				}
			}
		}
		else if (value instanceof Runtime.DateTime)
		{
			text = value.getDate(ctx, this.controller.layout.tz);
		}
		return text;
	},
	/**
 * Update component
 */
	updateComponent: function(ctx, control, created)
	{
		Runtime.Web.Component.prototype.updateComponent.bind(this)(ctx, control, created);
		/* Returns value */
		var value = this.constructor.getValue(ctx, this.controller.layout, this.model(ctx), this.params);
		var text = this.getInputTextFromValue(ctx, value);
		var isRange = Runtime.rtl.get(ctx, this.params, "range") == true;
		var isChanged = this.old_value != value;
		this.old_value = value;
		/* Create datepicker */
		var input = control.parent_elem.querySelector("input");
	if (input && input.value != text) input.value = text;
	
	if (this.datepicker == null && input)
	{
		var options = this.params.intersect(ctx, this.constructor.getOptions()).toObject();
		options["dateFormat"] = "yyyy-mm-dd";
		options["autoClose"] = options["autoClose"] || true;
		options["position"] = options["position"] || "top left";
		options["onSelect"] = (value, date, inst) =>
		{
			var ctx = globalContext;
			var is_changed = false;
			var new_value = null;
			
			if (isRange && date instanceof Array && date.length == 2)
			{
				var date_begin = date[0];
				var date_end = date[1];
				var date_begin_old = (this.old_value[0] != null) ? this.old_value[0].toObject(ctx) : null;
				var date_end_old = (this.old_value[1] != null) ? this.old_value[1].toObject(ctx) : null;
				var date_begin_t = (date_begin != null) ? date_begin.getTime() : null;
				var date_end_t = (date_end != null) ? date_end.getTime() : null;
				var date_begin_old_t = (date_begin_old != null) ? date_begin_old.getTime() : null;
				var date_end_old_t = (date_end_old != null) ? date_end_old.getTime() : null;
				if (date_begin_t != date_begin_old_t || date_end_t != date_end_old_t)
				{
					var date_begin_obj = Runtime.Date.fromObject(ctx, date_begin, this.controller.layout.tz);
					var date_end_obj = Runtime.Date.fromObject(ctx, date_end, this.controller.layout.tz);
					new_value = Runtime.Collection.from([date_begin_obj, date_end_obj]);
					is_changed = true;
				}
			}
			
			else if (!isRange)
			{
				var date_old = (this.old_value != null) ? this.old_value.toObject(ctx) : null;
				var date_t = (date != null) ? date.getTime() : null;
				var date_old_t = (date != null) ? date_old.getTime() : null;
				if (date_t != date_old_t)
				{
					new_value = Runtime.Date.fromObject(ctx, date, this.controller.layout.tz);
					is_changed = true;
				}
			}
			
			else if (value == "" && this.old_value != null)
			{
				new_value = null;
				is_changed = true;
			}
			
			if (is_changed)
			{
				var data = new Runtime.Web.Events.ChangeEvent
				(
					ctx, 
					{ "value": new_value, "old_value": this.old_value }
				);
				this.signal(ctx, data);
			}
		};
		
		this.datepicker = $(input).datepicker(options);
	}
	
	if (value != null && this.datepicker && isChanged)
	{
		var datepicker = this.datepicker.data('datepicker');
		var datepicker_value = null;
		
		if (value instanceof Runtime.Collection)
		{
			datepicker_value = value
				.map
				(
					ctx, (ctx, item) => (item != null &&
						(item instanceof Runtime.Date || item instanceof Runtime.DateTime))
						? item.toObject(ctx) : null,
				)
				.filter( ctx, Runtime.lib.equalNot(ctx, null) )
				.toArray()
			;
		}
		else
		{
			datepicker_value = (value != null &&
				(value instanceof Runtime.Date || value instanceof Runtime.DateTime))
				? value.toObject(ctx) : null;
		}
		
		datepicker.selectDate( datepicker_value );
	}
	},
	_init: function(ctx)
	{
		this.old_value = null;
		this.childs = null;
		this.datepicker = null;
		Runtime.Web.Component.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Runtime.Components.AirDatepicker.DatePicker)
		{
			this.old_value = o.old_value;
			this.childs = o.childs;
			this.datepicker = o.datepicker;
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "old_value")this.old_value = v;
		else if (k == "childs")this.childs = v;
		else if (k == "datepicker")this.datepicker = v;
		else Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "old_value")return this.old_value;
		else if (k == "childs")return this.childs;
		else if (k == "datepicker")return this.datepicker;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Runtime.Components.AirDatepicker.DatePicker";
	},
});
Object.assign(Runtime.Components.AirDatepicker.DatePicker, Runtime.Web.Component);
Object.assign(Runtime.Components.AirDatepicker.DatePicker,
{
	css: function(ctx, vars)
	{
		return ".input.h-b7ea{" + Runtime.rtl.toStr("width: 100%;padding: 6px 12px;background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "background"])) + Runtime.rtl.toStr(";border: 1px ") + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "border"])) + Runtime.rtl.toStr(" solid;outline: transparent;")) + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var name = (params != null) ? (params.get(ctx, "name", "")) : ("");
			
			var type = (params != null) ? (params.get(ctx, "type", "input")) : ("");
			
			var tag = (params != null) ? (params.get(ctx, "@tag", "")) : ("");
			
			/* Element 'div.datepicker_wrap' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["datepicker_wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"datepicker_wrap"}});
			
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "input","attrs": {"@tag":tag,"@event:Runtime.Web.Events.ChangeEvent":["Runtime.Components.AirDatepicker.DatePicker","onChange"],"name":name,"type":type,"class":["input", this.getCssHash(ctx)].join(" "),"@elem_name":"input"}});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/**
 * Returns options
 */
	getOptions: function(ctx)
	{
		return Runtime.Collection.from(["classes","inline","language","startDate","firstDay","weekends","dateFormat","altField","altFieldDateFormat","toggleSelected","keyboardNav","position","offset","view","minView","showOtherMonths","selectOtherMonths","moveToOtherMonthsOnSelect","showOtherYears","selectOtherYears","moveToOtherYearsOnSelect","minDate","maxDate","disableNavWhenOutOfRange","multipleDates","multipleDatesSeparator","range","todayButton","clearButton","showEvent","autoClose","prevHtml","nextHtml","navTitles","monthsField","timepicker","dateTimeSeparator","timeFormat","minHours","maxHours","minMinutes","maxMinutes","hoursStep","minutesStep"]);
	},
	/**
 * Returns value
 */
	getValue: function(ctx, layout, model, params)
	{
		var value = (params != null) ? (params.get(ctx, "value", null)) : (null);
		var def_value = (params != null) ? (params.get(ctx, "default", null)) : (null);
		value = (Runtime.rtl.isEmpty(ctx, value)) ? (model) : (value);
		if (Runtime.rtl.isEmpty(ctx, value))
		{
			value = def_value;
		}
		return value;
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Runtime.Components.AirDatepicker";
	},
	getCurrentClassName: function()
	{
		return "Runtime.Components.AirDatepicker.DatePicker";
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
			"class_name": "Runtime.Components.AirDatepicker.DatePicker",
			"name": "Runtime.Components.AirDatepicker.DatePicker",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|2)==2)
		{
			a.push("old_value");
			a.push("childs");
			a.push("datepicker");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "old_value") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Components.AirDatepicker.DatePicker",
			"t": "var",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "childs") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Components.AirDatepicker.DatePicker",
			"t": "var",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		if (field_name == "datepicker") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Runtime.Components.AirDatepicker.DatePicker",
			"t": "var",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
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
Runtime.rtl.defClass(Runtime.Components.AirDatepicker.DatePicker);
window["Runtime.Components.AirDatepicker.DatePicker"] = Runtime.Components.AirDatepicker.DatePicker;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Runtime.Components.AirDatepicker.DatePicker;
!function(t,e,i){!function(){var s,a,n,h="2.2.3",o="datepicker",r=".datepicker-here",c=!1,d='<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',l={classes:"",inline:!1,language:"ru",startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"@",toggleSelected:!0,keyboardNav:!0,position:"bottom left",offset:12,view:"days",minView:"days",showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:",",range:!1,todayButton:!1,clearButton:!1,showEvent:"focus",autoClose:!1,monthsField:"monthsShort",prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:"",onShow:"",onHide:"",onChangeMonth:"",onChangeYear:"",onChangeDecade:"",onChangeView:"",onRenderCell:""},u={ctrlRight:[17,39],ctrlUp:[17,38],ctrlLeft:[17,37],ctrlDown:[17,40],shiftRight:[16,39],shiftUp:[16,38],shiftLeft:[16,37],shiftDown:[16,40],altUp:[18,38],altRight:[18,39],altLeft:[18,37],altDown:[18,40],ctrlShiftUp:[16,17,38]},m=function(t,a){this.el=t,this.$el=e(t),this.opts=e.extend(!0,{},l,a,this.$el.data()),s==i&&(s=e("body")),this.opts.startDate||(this.opts.startDate=new Date),"INPUT"==this.el.nodeName&&(this.elIsInput=!0),this.opts.altField&&(this.$altField="string"==typeof this.opts.altField?e(this.opts.altField):this.opts.altField),this.inited=!1,this.visible=!1,this.silent=!1,this.currentDate=this.opts.startDate,this.currentView=this.opts.view,this._createShortCuts(),this.selectedDates=[],this.views={},this.keys=[],this.minRange="",this.maxRange="",this._prevOnSelectValue="",this.init()};n=m,n.prototype={VERSION:h,viewIndexes:["days","months","years"],init:function(){c||this.opts.inline||!this.elIsInput||this._buildDatepickersContainer(),this._buildBaseHtml(),this._defineLocale(this.opts.language),this._syncWithMinMaxDates(),this.elIsInput&&(this.opts.inline||(this._setPositionClasses(this.opts.position),this._bindEvents()),this.opts.keyboardNav&&!this.opts.onlyTimepicker&&this._bindKeyboardEvents(),this.$datepicker.on("mousedown",this._onMouseDownDatepicker.bind(this)),this.$datepicker.on("mouseup",this._onMouseUpDatepicker.bind(this))),this.opts.classes&&this.$datepicker.addClass(this.opts.classes),this.opts.timepicker&&(this.timepicker=new e.fn.datepicker.Timepicker(this,this.opts),this._bindTimepickerEvents()),this.opts.onlyTimepicker&&this.$datepicker.addClass("-only-timepicker-"),this.views[this.currentView]=new e.fn.datepicker.Body(this,this.currentView,this.opts),this.views[this.currentView].show(),this.nav=new e.fn.datepicker.Navigation(this,this.opts),this.view=this.currentView,this.$el.on("clickCell.adp",this._onClickCell.bind(this)),this.$datepicker.on("mouseenter",".datepicker--cell",this._onMouseEnterCell.bind(this)),this.$datepicker.on("mouseleave",".datepicker--cell",this._onMouseLeaveCell.bind(this)),this.inited=!0},_createShortCuts:function(){this.minDate=this.opts.minDate?this.opts.minDate:new Date(-86399999136e5),this.maxDate=this.opts.maxDate?this.opts.maxDate:new Date(86399999136e5)},_bindEvents:function(){this.$el.on(this.opts.showEvent+".adp",this._onShowEvent.bind(this)),this.$el.on("mouseup.adp",this._onMouseUpEl.bind(this)),this.$el.on("blur.adp",this._onBlur.bind(this)),this.$el.on("keyup.adp",this._onKeyUpGeneral.bind(this)),e(t).on("resize.adp",this._onResize.bind(this)),e("body").on("mouseup.adp",this._onMouseUpBody.bind(this))},_bindKeyboardEvents:function(){this.$el.on("keydown.adp",this._onKeyDown.bind(this)),this.$el.on("keyup.adp",this._onKeyUp.bind(this)),this.$el.on("hotKey.adp",this._onHotKey.bind(this))},_bindTimepickerEvents:function(){this.$el.on("timeChange.adp",this._onTimeChange.bind(this))},isWeekend:function(t){return-1!==this.opts.weekends.indexOf(t)},_defineLocale:function(t){"string"==typeof t?(this.loc=e.fn.datepicker.language[t],this.loc||(console.warn("Can't find language \""+t+'" in Datepicker.language, will use "ru" instead'),this.loc=e.extend(!0,{},e.fn.datepicker.language.ru)),this.loc=e.extend(!0,{},e.fn.datepicker.language.ru,e.fn.datepicker.language[t])):this.loc=e.extend(!0,{},e.fn.datepicker.language.ru,t),this.opts.dateFormat&&(this.loc.dateFormat=this.opts.dateFormat),this.opts.timeFormat&&(this.loc.timeFormat=this.opts.timeFormat),""!==this.opts.firstDay&&(this.loc.firstDay=this.opts.firstDay),this.opts.timepicker&&(this.loc.dateFormat=[this.loc.dateFormat,this.loc.timeFormat].join(this.opts.dateTimeSeparator)),this.opts.onlyTimepicker&&(this.loc.dateFormat=this.loc.timeFormat);var i=this._getWordBoundaryRegExp;(this.loc.timeFormat.match(i("aa"))||this.loc.timeFormat.match(i("AA")))&&(this.ampm=!0)},_buildDatepickersContainer:function(){c=!0,s.append('<div class="datepickers-container" id="datepickers-container"></div>'),a=e("#datepickers-container")},_buildBaseHtml:function(){var t,i=e('<div class="datepicker-inline">');t="INPUT"==this.el.nodeName?this.opts.inline?i.insertAfter(this.$el):a:i.appendTo(this.$el),this.$datepicker=e(d).appendTo(t),this.$content=e(".datepicker--content",this.$datepicker),this.$nav=e(".datepicker--nav",this.$datepicker)},_triggerOnChange:function(){if(!this.selectedDates.length){if(""===this._prevOnSelectValue)return;return this._prevOnSelectValue="",this.opts.onSelect("","",this)}var t,e=this.selectedDates,i=n.getParsedDate(e[0]),s=this,a=new Date(i.year,i.month,i.date,i.hours,i.minutes);t=e.map(function(t){return s.formatDate(s.loc.dateFormat,t)}).join(this.opts.multipleDatesSeparator),(this.opts.multipleDates||this.opts.range)&&(a=e.map(function(t){var e=n.getParsedDate(t);return new Date(e.year,e.month,e.date,e.hours,e.minutes)})),this._prevOnSelectValue=t,this.opts.onSelect(t,a,this)},next:function(){var t=this.parsedDate,e=this.opts;switch(this.view){case"days":this.date=new Date(t.year,t.month+1,1),e.onChangeMonth&&e.onChangeMonth(this.parsedDate.month,this.parsedDate.year);break;case"months":this.date=new Date(t.year+1,t.month,1),e.onChangeYear&&e.onChangeYear(this.parsedDate.year);break;case"years":this.date=new Date(t.year+10,0,1),e.onChangeDecade&&e.onChangeDecade(this.curDecade)}},prev:function(){var t=this.parsedDate,e=this.opts;switch(this.view){case"days":this.date=new Date(t.year,t.month-1,1),e.onChangeMonth&&e.onChangeMonth(this.parsedDate.month,this.parsedDate.year);break;case"months":this.date=new Date(t.year-1,t.month,1),e.onChangeYear&&e.onChangeYear(this.parsedDate.year);break;case"years":this.date=new Date(t.year-10,0,1),e.onChangeDecade&&e.onChangeDecade(this.curDecade)}},formatDate:function(t,e){e=e||this.date;var i,s=t,a=this._getWordBoundaryRegExp,h=this.loc,o=n.getLeadingZeroNum,r=n.getDecade(e),c=n.getParsedDate(e),d=c.fullHours,l=c.hours,u=t.match(a("aa"))||t.match(a("AA")),m="am",p=this._replacer;switch(this.opts.timepicker&&this.timepicker&&u&&(i=this.timepicker._getValidHoursFromDate(e,u),d=o(i.hours),l=i.hours,m=i.dayPeriod),!0){case/@/.test(s):s=s.replace(/@/,e.getTime());case/aa/.test(s):s=p(s,a("aa"),m);case/AA/.test(s):s=p(s,a("AA"),m.toUpperCase());case/dd/.test(s):s=p(s,a("dd"),c.fullDate);case/d/.test(s):s=p(s,a("d"),c.date);case/DD/.test(s):s=p(s,a("DD"),h.days[c.day]);case/D/.test(s):s=p(s,a("D"),h.daysShort[c.day]);case/mm/.test(s):s=p(s,a("mm"),c.fullMonth);case/m/.test(s):s=p(s,a("m"),c.month+1);case/MM/.test(s):s=p(s,a("MM"),this.loc.months[c.month]);case/M/.test(s):s=p(s,a("M"),h.monthsShort[c.month]);case/ii/.test(s):s=p(s,a("ii"),c.fullMinutes);case/i/.test(s):s=p(s,a("i"),c.minutes);case/hh/.test(s):s=p(s,a("hh"),d);case/h/.test(s):s=p(s,a("h"),l);case/yyyy/.test(s):s=p(s,a("yyyy"),c.year);case/yyyy1/.test(s):s=p(s,a("yyyy1"),r[0]);case/yyyy2/.test(s):s=p(s,a("yyyy2"),r[1]);case/yy/.test(s):s=p(s,a("yy"),c.year.toString().slice(-2))}return s},_replacer:function(t,e,i){return t.replace(e,function(t,e,s,a){return e+i+a})},_getWordBoundaryRegExp:function(t){var e="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+e+")("+t+")($|<|"+e+")","g")},selectDate:function(t){var e=this,i=e.opts,s=e.parsedDate,a=e.selectedDates,h=a.length,o="";if(Array.isArray(t))return void t.forEach(function(t){e.selectDate(t)});if(t instanceof Date){if(this.lastSelectedDate=t,this.timepicker&&this.timepicker._setTime(t),e._trigger("selectDate",t),this.timepicker&&(t.setHours(this.timepicker.hours),t.setMinutes(this.timepicker.minutes)),"days"==e.view&&t.getMonth()!=s.month&&i.moveToOtherMonthsOnSelect&&(o=new Date(t.getFullYear(),t.getMonth(),1)),"years"==e.view&&t.getFullYear()!=s.year&&i.moveToOtherYearsOnSelect&&(o=new Date(t.getFullYear(),0,1)),o&&(e.silent=!0,e.date=o,e.silent=!1,e.nav._render()),i.multipleDates&&!i.range){if(h===i.multipleDates)return;e._isSelected(t)||e.selectedDates.push(t)}else i.range?2==h?(e.selectedDates=[t],e.minRange=t,e.maxRange=""):1==h?(e.selectedDates.push(t),e.maxRange?e.minRange=t:e.maxRange=t,n.bigger(e.maxRange,e.minRange)&&(e.maxRange=e.minRange,e.minRange=t),e.selectedDates=[e.minRange,e.maxRange]):(e.selectedDates=[t],e.minRange=t):e.selectedDates=[t];e._setInputValue(),i.onSelect&&e._triggerOnChange(),i.autoClose&&!this.timepickerIsActive&&(i.multipleDates||i.range?i.range&&2==e.selectedDates.length&&e.hide():e.hide()),e.views[this.currentView]._render()}},removeDate:function(t){var e=this.selectedDates,i=this;if(t instanceof Date)return e.some(function(s,a){return n.isSame(s,t)?(e.splice(a,1),i.selectedDates.length?i.lastSelectedDate=i.selectedDates[i.selectedDates.length-1]:(i.minRange="",i.maxRange="",i.lastSelectedDate=""),i.views[i.currentView]._render(),i._setInputValue(),i.opts.onSelect&&i._triggerOnChange(),!0):void 0})},today:function(){this.silent=!0,this.view=this.opts.minView,this.silent=!1,this.date=new Date,this.opts.todayButton instanceof Date&&this.selectDate(this.opts.todayButton)},clear:function(){this.selectedDates=[],this.minRange="",this.maxRange="",this.views[this.currentView]._render(),this._setInputValue(),this.opts.onSelect&&this._triggerOnChange()},update:function(t,i){var s=arguments.length,a=this.lastSelectedDate;return 2==s?this.opts[t]=i:1==s&&"object"==typeof t&&(this.opts=e.extend(!0,this.opts,t)),this._createShortCuts(),this._syncWithMinMaxDates(),this._defineLocale(this.opts.language),this.nav._addButtonsIfNeed(),this.opts.onlyTimepicker||this.nav._render(),this.views[this.currentView]._render(),this.elIsInput&&!this.opts.inline&&(this._setPositionClasses(this.opts.position),this.visible&&this.setPosition(this.opts.position)),this.opts.classes&&this.$datepicker.addClass(this.opts.classes),this.opts.onlyTimepicker&&this.$datepicker.addClass("-only-timepicker-"),this.opts.timepicker&&(a&&this.timepicker._handleDate(a),this.timepicker._updateRanges(),this.timepicker._updateCurrentTime(),a&&(a.setHours(this.timepicker.hours),a.setMinutes(this.timepicker.minutes))),this._setInputValue(),this},_syncWithMinMaxDates:function(){var t=this.date.getTime();this.silent=!0,this.minTime>t&&(this.date=this.minDate),this.maxTime<t&&(this.date=this.maxDate),this.silent=!1},_isSelected:function(t,e){var i=!1;return this.selectedDates.some(function(s){return n.isSame(s,t,e)?(i=s,!0):void 0}),i},_setInputValue:function(){var t,e=this,i=e.opts,s=e.loc.dateFormat,a=i.altFieldDateFormat,n=e.selectedDates.map(function(t){return e.formatDate(s,t)});i.altField&&e.$altField.length&&(t=this.selectedDates.map(function(t){return e.formatDate(a,t)}),t=t.join(this.opts.multipleDatesSeparator),this.$altField.val(t)),n=n.join(this.opts.multipleDatesSeparator),this.$el.val(n)},_isInRange:function(t,e){var i=t.getTime(),s=n.getParsedDate(t),a=n.getParsedDate(this.minDate),h=n.getParsedDate(this.maxDate),o=new Date(s.year,s.month,a.date).getTime(),r=new Date(s.year,s.month,h.date).getTime(),c={day:i>=this.minTime&&i<=this.maxTime,month:o>=this.minTime&&r<=this.maxTime,year:s.year>=a.year&&s.year<=h.year};return e?c[e]:c.day},_getDimensions:function(t){var e=t.offset();return{width:t.outerWidth(),height:t.outerHeight(),left:e.left,top:e.top}},_getDateFromCell:function(t){var e=this.parsedDate,s=t.data("year")||e.year,a=t.data("month")==i?e.month:t.data("month"),n=t.data("date")||1;return new Date(s,a,n)},_setPositionClasses:function(t){t=t.split(" ");var e=t[0],i=t[1],s="datepicker -"+e+"-"+i+"- -from-"+e+"-";this.visible&&(s+=" active"),this.$datepicker.removeAttr("class").addClass(s)},setPosition:function(t){t=t||this.opts.position;var e,i,s=this._getDimensions(this.$el),a=this._getDimensions(this.$datepicker),n=t.split(" "),h=this.opts.offset,o=n[0],r=n[1];switch(o){case"top":e=s.top-a.height-h;break;case"right":i=s.left+s.width+h;break;case"bottom":e=s.top+s.height+h;break;case"left":i=s.left-a.width-h}switch(r){case"top":e=s.top;break;case"right":i=s.left+s.width-a.width;break;case"bottom":e=s.top+s.height-a.height;break;case"left":i=s.left;break;case"center":/left|right/.test(o)?e=s.top+s.height/2-a.height/2:i=s.left+s.width/2-a.width/2}this.$datepicker.css({left:i,top:e})},show:function(){var t=this.opts.onShow;this.setPosition(this.opts.position),this.$datepicker.addClass("active"),this.visible=!0,t&&this._bindVisionEvents(t)},hide:function(){var t=this.opts.onHide;this.$datepicker.removeClass("active").css({left:"-100000px"}),this.focused="",this.keys=[],this.inFocus=!1,this.visible=!1,this.$el.blur(),t&&this._bindVisionEvents(t)},down:function(t){this._changeView(t,"down")},up:function(t){this._changeView(t,"up")},_bindVisionEvents:function(t){this.$datepicker.off("transitionend.dp"),t(this,!1),this.$datepicker.one("transitionend.dp",t.bind(this,this,!0))},_changeView:function(t,e){t=t||this.focused||this.date;var i="up"==e?this.viewIndex+1:this.viewIndex-1;i>2&&(i=2),0>i&&(i=0),this.silent=!0,this.date=new Date(t.getFullYear(),t.getMonth(),1),this.silent=!1,this.view=this.viewIndexes[i]},_handleHotKey:function(t){var e,i,s,a=n.getParsedDate(this._getFocusedDate()),h=this.opts,o=!1,r=!1,c=!1,d=a.year,l=a.month,u=a.date;switch(t){case"ctrlRight":case"ctrlUp":l+=1,o=!0;break;case"ctrlLeft":case"ctrlDown":l-=1,o=!0;break;case"shiftRight":case"shiftUp":r=!0,d+=1;break;case"shiftLeft":case"shiftDown":r=!0,d-=1;break;case"altRight":case"altUp":c=!0,d+=10;break;case"altLeft":case"altDown":c=!0,d-=10;break;case"ctrlShiftUp":this.up()}s=n.getDaysCount(new Date(d,l)),i=new Date(d,l,u),u>s&&(u=s),i.getTime()<this.minTime?i=this.minDate:i.getTime()>this.maxTime&&(i=this.maxDate),this.focused=i,e=n.getParsedDate(i),o&&h.onChangeMonth&&h.onChangeMonth(e.month,e.year),r&&h.onChangeYear&&h.onChangeYear(e.year),c&&h.onChangeDecade&&h.onChangeDecade(this.curDecade)},_registerKey:function(t){var e=this.keys.some(function(e){return e==t});e||this.keys.push(t)},_unRegisterKey:function(t){var e=this.keys.indexOf(t);this.keys.splice(e,1)},_isHotKeyPressed:function(){var t,e=!1,i=this,s=this.keys.sort();for(var a in u)t=u[a],s.length==t.length&&t.every(function(t,e){return t==s[e]})&&(i._trigger("hotKey",a),e=!0);return e},_trigger:function(t,e){this.$el.trigger(t,e)},_focusNextCell:function(t,e){e=e||this.cellType;var i=n.getParsedDate(this._getFocusedDate()),s=i.year,a=i.month,h=i.date;if(!this._isHotKeyPressed()){switch(t){case 37:"day"==e?h-=1:"","month"==e?a-=1:"","year"==e?s-=1:"";break;case 38:"day"==e?h-=7:"","month"==e?a-=3:"","year"==e?s-=4:"";break;case 39:"day"==e?h+=1:"","month"==e?a+=1:"","year"==e?s+=1:"";break;case 40:"day"==e?h+=7:"","month"==e?a+=3:"","year"==e?s+=4:""}var o=new Date(s,a,h);o.getTime()<this.minTime?o=this.minDate:o.getTime()>this.maxTime&&(o=this.maxDate),this.focused=o}},_getFocusedDate:function(){var t=this.focused||this.selectedDates[this.selectedDates.length-1],e=this.parsedDate;if(!t)switch(this.view){case"days":t=new Date(e.year,e.month,(new Date).getDate());break;case"months":t=new Date(e.year,e.month,1);break;case"years":t=new Date(e.year,0,1)}return t},_getCell:function(t,i){i=i||this.cellType;var s,a=n.getParsedDate(t),h='.datepicker--cell[data-year="'+a.year+'"]';switch(i){case"month":h='[data-month="'+a.month+'"]';break;case"day":h+='[data-month="'+a.month+'"][data-date="'+a.date+'"]'}return s=this.views[this.currentView].$el.find(h),s.length?s:e("")},destroy:function(){var t=this;t.$el.off(".adp").data("datepicker",""),t.selectedDates=[],t.focused="",t.views={},t.keys=[],t.minRange="",t.maxRange="",t.opts.inline||!t.elIsInput?t.$datepicker.closest(".datepicker-inline").remove():t.$datepicker.remove()},_handleAlreadySelectedDates:function(t,e){this.opts.range?this.opts.toggleSelected?this.removeDate(e):2!=this.selectedDates.length&&this._trigger("clickCell",e):this.opts.toggleSelected&&this.removeDate(e),this.opts.toggleSelected||(this.lastSelectedDate=t,this.opts.timepicker&&(this.timepicker._setTime(t),this.timepicker.update()))},_onShowEvent:function(t){this.visible||this.show()},_onBlur:function(){!this.inFocus&&this.visible&&this.hide()},_onMouseDownDatepicker:function(t){this.inFocus=!0},_onMouseUpDatepicker:function(t){this.inFocus=!1,t.originalEvent.inFocus=!0,t.originalEvent.timepickerFocus||this.$el.focus()},_onKeyUpGeneral:function(t){var e=this.$el.val();e||this.clear()},_onResize:function(){this.visible&&this.setPosition()},_onMouseUpBody:function(t){t.originalEvent.inFocus||this.visible&&!this.inFocus&&this.hide()},_onMouseUpEl:function(t){t.originalEvent.inFocus=!0,setTimeout(this._onKeyUpGeneral.bind(this),4)},_onKeyDown:function(t){var e=t.which;if(this._registerKey(e),e>=37&&40>=e&&(t.preventDefault(),this._focusNextCell(e)),13==e&&this.focused){if(this._getCell(this.focused).hasClass("-disabled-"))return;if(this.view!=this.opts.minView)this.down();else{var i=this._isSelected(this.focused,this.cellType);if(!i)return this.timepicker&&(this.focused.setHours(this.timepicker.hours),this.focused.setMinutes(this.timepicker.minutes)),void this.selectDate(this.focused);this._handleAlreadySelectedDates(i,this.focused)}}27==e&&this.hide()},_onKeyUp:function(t){var e=t.which;this._unRegisterKey(e)},_onHotKey:function(t,e){this._handleHotKey(e)},_onMouseEnterCell:function(t){var i=e(t.target).closest(".datepicker--cell"),s=this._getDateFromCell(i);this.silent=!0,this.focused&&(this.focused=""),i.addClass("-focus-"),this.focused=s,this.silent=!1,this.opts.range&&1==this.selectedDates.length&&(this.minRange=this.selectedDates[0],this.maxRange="",n.less(this.minRange,this.focused)&&(this.maxRange=this.minRange,this.minRange=""),this.views[this.currentView]._update())},_onMouseLeaveCell:function(t){var i=e(t.target).closest(".datepicker--cell");i.removeClass("-focus-"),this.silent=!0,this.focused="",this.silent=!1},_onTimeChange:function(t,e,i){var s=new Date,a=this.selectedDates,n=!1;a.length&&(n=!0,s=this.lastSelectedDate),s.setHours(e),s.setMinutes(i),n||this._getCell(s).hasClass("-disabled-")?(this._setInputValue(),this.opts.onSelect&&this._triggerOnChange()):this.selectDate(s)},_onClickCell:function(t,e){this.timepicker&&(e.setHours(this.timepicker.hours),e.setMinutes(this.timepicker.minutes)),this.selectDate(e)},set focused(t){if(!t&&this.focused){var e=this._getCell(this.focused);e.length&&e.removeClass("-focus-")}this._focused=t,this.opts.range&&1==this.selectedDates.length&&(this.minRange=this.selectedDates[0],this.maxRange="",n.less(this.minRange,this._focused)&&(this.maxRange=this.minRange,this.minRange="")),this.silent||(this.date=t)},get focused(){return this._focused},get parsedDate(){return n.getParsedDate(this.date)},set date(t){return t instanceof Date?(this.currentDate=t,this.inited&&!this.silent&&(this.views[this.view]._render(),this.nav._render(),this.visible&&this.elIsInput&&this.setPosition()),t):void 0},get date(){return this.currentDate},set view(t){return this.viewIndex=this.viewIndexes.indexOf(t),this.viewIndex<0?void 0:(this.prevView=this.currentView,this.currentView=t,this.inited&&(this.views[t]?this.views[t]._render():this.views[t]=new e.fn.datepicker.Body(this,t,this.opts),this.views[this.prevView].hide(),this.views[t].show(),this.nav._render(),this.opts.onChangeView&&this.opts.onChangeView(t),this.elIsInput&&this.visible&&this.setPosition()),t)},get view(){return this.currentView},get cellType(){return this.view.substring(0,this.view.length-1)},get minTime(){var t=n.getParsedDate(this.minDate);return new Date(t.year,t.month,t.date).getTime()},get maxTime(){var t=n.getParsedDate(this.maxDate);return new Date(t.year,t.month,t.date).getTime()},get curDecade(){return n.getDecade(this.date)}},n.getDaysCount=function(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()},n.getParsedDate=function(t){return{year:t.getFullYear(),month:t.getMonth(),fullMonth:t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,date:t.getDate(),fullDate:t.getDate()<10?"0"+t.getDate():t.getDate(),day:t.getDay(),hours:t.getHours(),fullHours:t.getHours()<10?"0"+t.getHours():t.getHours(),minutes:t.getMinutes(),fullMinutes:t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()}},n.getDecade=function(t){var e=10*Math.floor(t.getFullYear()/10);return[e,e+9]},n.template=function(t,e){return t.replace(/#\{([\w]+)\}/g,function(t,i){return e[i]||0===e[i]?e[i]:void 0})},n.isSame=function(t,e,i){if(!t||!e)return!1;var s=n.getParsedDate(t),a=n.getParsedDate(e),h=i?i:"day",o={day:s.date==a.date&&s.month==a.month&&s.year==a.year,month:s.month==a.month&&s.year==a.year,year:s.year==a.year};return o[h]},n.less=function(t,e,i){return t&&e?e.getTime()<t.getTime():!1},n.bigger=function(t,e,i){return t&&e?e.getTime()>t.getTime():!1},n.getLeadingZeroNum=function(t){return parseInt(t)<10?"0"+t:t},n.resetTime=function(t){return"object"==typeof t?(t=n.getParsedDate(t),new Date(t.year,t.month,t.date)):void 0},e.fn.datepicker=function(t){return this.each(function(){if(e.data(this,o)){var i=e.data(this,o);i.opts=e.extend(!0,i.opts,t),i.update()}else e.data(this,o,new m(this,t))})},e.fn.datepicker.Constructor=m,e.fn.datepicker.language={ru:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.mm.yyyy",timeFormat:"hh:ii",firstDay:1}},e(function(){e(r).datepicker()})}(),function(){var t={days:'<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',months:'<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',years:'<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'},s=e.fn.datepicker,a=s.Constructor;s.Body=function(t,i,s){this.d=t,this.type=i,this.opts=s,this.$el=e(""),this.opts.onlyTimepicker||this.init()},s.Body.prototype={init:function(){this._buildBaseHtml(),this._render(),this._bindEvents()},_bindEvents:function(){this.$el.on("click",".datepicker--cell",e.proxy(this._onClickCell,this))},_buildBaseHtml:function(){this.$el=e(t[this.type]).appendTo(this.d.$content),this.$names=e(".datepicker--days-names",this.$el),this.$cells=e(".datepicker--cells",this.$el)},_getDayNamesHtml:function(t,e,s,a){return e=e!=i?e:t,s=s?s:"",a=a!=i?a:0,a>7?s:7==e?this._getDayNamesHtml(t,0,s,++a):(s+='<div class="datepicker--day-name'+(this.d.isWeekend(e)?" -weekend-":"")+'">'+this.d.loc.daysMin[e]+"</div>",this._getDayNamesHtml(t,++e,s,++a))},_getCellContents:function(t,e){var i="datepicker--cell datepicker--cell-"+e,s=new Date,n=this.d,h=a.resetTime(n.minRange),o=a.resetTime(n.maxRange),r=n.opts,c=a.getParsedDate(t),d={},l=c.date;switch(e){case"day":n.isWeekend(c.day)&&(i+=" -weekend-"),c.month!=this.d.parsedDate.month&&(i+=" -other-month-",r.selectOtherMonths||(i+=" -disabled-"),r.showOtherMonths||(l=""));break;case"month":l=n.loc[n.opts.monthsField][c.month];break;case"year":var u=n.curDecade;l=c.year,(c.year<u[0]||c.year>u[1])&&(i+=" -other-decade-",r.selectOtherYears||(i+=" -disabled-"),r.showOtherYears||(l=""))}return r.onRenderCell&&(d=r.onRenderCell(t,e)||{},l=d.html?d.html:l,i+=d.classes?" "+d.classes:""),r.range&&(a.isSame(h,t,e)&&(i+=" -range-from-"),a.isSame(o,t,e)&&(i+=" -range-to-"),1==n.selectedDates.length&&n.focused?((a.bigger(h,t)&&a.less(n.focused,t)||a.less(o,t)&&a.bigger(n.focused,t))&&(i+=" -in-range-"),a.less(o,t)&&a.isSame(n.focused,t)&&(i+=" -range-from-"),a.bigger(h,t)&&a.isSame(n.focused,t)&&(i+=" -range-to-")):2==n.selectedDates.length&&a.bigger(h,t)&&a.less(o,t)&&(i+=" -in-range-")),a.isSame(s,t,e)&&(i+=" -current-"),n.focused&&a.isSame(t,n.focused,e)&&(i+=" -focus-"),n._isSelected(t,e)&&(i+=" -selected-"),(!n._isInRange(t,e)||d.disabled)&&(i+=" -disabled-"),{html:l,classes:i}},_getDaysHtml:function(t){var e=a.getDaysCount(t),i=new Date(t.getFullYear(),t.getMonth(),1).getDay(),s=new Date(t.getFullYear(),t.getMonth(),e).getDay(),n=i-this.d.loc.firstDay,h=6-s+this.d.loc.firstDay;n=0>n?n+7:n,h=h>6?h-7:h;for(var o,r,c=-n+1,d="",l=c,u=e+h;u>=l;l++)r=t.getFullYear(),o=t.getMonth(),d+=this._getDayHtml(new Date(r,o,l));return d},_getDayHtml:function(t){var e=this._getCellContents(t,"day");return'<div class="'+e.classes+'" data-date="'+t.getDate()+'" data-month="'+t.getMonth()+'" data-year="'+t.getFullYear()+'">'+e.html+"</div>"},_getMonthsHtml:function(t){for(var e="",i=a.getParsedDate(t),s=0;12>s;)e+=this._getMonthHtml(new Date(i.year,s)),s++;return e},_getMonthHtml:function(t){var e=this._getCellContents(t,"month");return'<div class="'+e.classes+'" data-month="'+t.getMonth()+'">'+e.html+"</div>"},_getYearsHtml:function(t){var e=(a.getParsedDate(t),a.getDecade(t)),i=e[0]-1,s="",n=i;for(n;n<=e[1]+1;n++)s+=this._getYearHtml(new Date(n,0));return s},_getYearHtml:function(t){var e=this._getCellContents(t,"year");return'<div class="'+e.classes+'" data-year="'+t.getFullYear()+'">'+e.html+"</div>"},_renderTypes:{days:function(){var t=this._getDayNamesHtml(this.d.loc.firstDay),e=this._getDaysHtml(this.d.currentDate);this.$cells.html(e),this.$names.html(t)},months:function(){var t=this._getMonthsHtml(this.d.currentDate);this.$cells.html(t)},years:function(){var t=this._getYearsHtml(this.d.currentDate);this.$cells.html(t)}},_render:function(){this.opts.onlyTimepicker||this._renderTypes[this.type].bind(this)()},_update:function(){var t,i,s,a=e(".datepicker--cell",this.$cells),n=this;a.each(function(a,h){i=e(this),s=n.d._getDateFromCell(e(this)),t=n._getCellContents(s,n.d.cellType),i.attr("class",t.classes)})},show:function(){this.opts.onlyTimepicker||(this.$el.addClass("active"),this.acitve=!0)},hide:function(){this.$el.removeClass("active"),this.active=!1},_handleClick:function(t){var e=t.data("date")||1,i=t.data("month")||0,s=t.data("year")||this.d.parsedDate.year,a=this.d;if(a.view!=this.opts.minView)return void a.down(new Date(s,i,e));var n=new Date(s,i,e),h=this.d._isSelected(n,this.d.cellType);return h?void a._handleAlreadySelectedDates.bind(a,h,n)():void a._trigger("clickCell",n)},_onClickCell:function(t){var i=e(t.target).closest(".datepicker--cell");i.hasClass("-disabled-")||this._handleClick.bind(this)(i)}}}(),function(){var t='<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',i='<div class="datepicker--buttons"></div>',s='<span class="datepicker--button" data-action="#{action}">#{label}</span>',a=e.fn.datepicker,n=a.Constructor;a.Navigation=function(t,e){this.d=t,this.opts=e,this.$buttonsContainer="",this.init()},a.Navigation.prototype={init:function(){this._buildBaseHtml(),this._bindEvents()},_bindEvents:function(){this.d.$nav.on("click",".datepicker--nav-action",e.proxy(this._onClickNavButton,this)),this.d.$nav.on("click",".datepicker--nav-title",e.proxy(this._onClickNavTitle,this)),this.d.$datepicker.on("click",".datepicker--button",e.proxy(this._onClickNavButton,this))},_buildBaseHtml:function(){this.opts.onlyTimepicker||this._render(),this._addButtonsIfNeed()},_addButtonsIfNeed:function(){this.opts.todayButton&&this._addButton("today"),this.opts.clearButton&&this._addButton("clear")},_render:function(){var i=this._getTitle(this.d.currentDate),s=n.template(t,e.extend({title:i},this.opts));this.d.$nav.html(s),"years"==this.d.view&&e(".datepicker--nav-title",this.d.$nav).addClass("-disabled-"),this.setNavStatus()},_getTitle:function(t){return this.d.formatDate(this.opts.navTitles[this.d.view],t)},_addButton:function(t){this.$buttonsContainer.length||this._addButtonsContainer();var i={action:t,label:this.d.loc[t]},a=n.template(s,i);e("[data-action="+t+"]",this.$buttonsContainer).length||this.$buttonsContainer.append(a)},_addButtonsContainer:function(){this.d.$datepicker.append(i),this.$buttonsContainer=e(".datepicker--buttons",this.d.$datepicker)},setNavStatus:function(){if((this.opts.minDate||this.opts.maxDate)&&this.opts.disableNavWhenOutOfRange){var t=this.d.parsedDate,e=t.month,i=t.year,s=t.date;switch(this.d.view){case"days":this.d._isInRange(new Date(i,e-1,1),"month")||this._disableNav("prev"),this.d._isInRange(new Date(i,e+1,1),"month")||this._disableNav("next");break;case"months":this.d._isInRange(new Date(i-1,e,s),"year")||this._disableNav("prev"),this.d._isInRange(new Date(i+1,e,s),"year")||this._disableNav("next");break;case"years":var a=n.getDecade(this.d.date);this.d._isInRange(new Date(a[0]-1,0,1),"year")||this._disableNav("prev"),this.d._isInRange(new Date(a[1]+1,0,1),"year")||this._disableNav("next")}}},_disableNav:function(t){e('[data-action="'+t+'"]',this.d.$nav).addClass("-disabled-")},_activateNav:function(t){e('[data-action="'+t+'"]',this.d.$nav).removeClass("-disabled-")},_onClickNavButton:function(t){var i=e(t.target).closest("[data-action]"),s=i.data("action");this.d[s]()},_onClickNavTitle:function(t){return e(t.target).hasClass("-disabled-")?void 0:"days"==this.d.view?this.d.view="months":void(this.d.view="years")}}}(),function(){var t='<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',i=e.fn.datepicker,s=i.Constructor;i.Timepicker=function(t,e){this.d=t,this.opts=e,this.init()},i.Timepicker.prototype={init:function(){var t="input";this._setTime(this.d.date),this._buildHTML(),navigator.userAgent.match(/trident/gi)&&(t="change"),this.d.$el.on("selectDate",this._onSelectDate.bind(this)),this.$ranges.on(t,this._onChangeRange.bind(this)),this.$ranges.on("mouseup",this._onMouseUpRange.bind(this)),this.$ranges.on("mousemove focus ",this._onMouseEnterRange.bind(this)),this.$ranges.on("mouseout blur",this._onMouseOutRange.bind(this))},_setTime:function(t){var e=s.getParsedDate(t);this._handleDate(t),this.hours=e.hours<this.minHours?this.minHours:e.hours,this.minutes=e.minutes<this.minMinutes?this.minMinutes:e.minutes},_setMinTimeFromDate:function(t){this.minHours=t.getHours(),this.minMinutes=t.getMinutes(),this.d.lastSelectedDate&&this.d.lastSelectedDate.getHours()>t.getHours()&&(this.minMinutes=this.opts.minMinutes)},_setMaxTimeFromDate:function(t){
this.maxHours=t.getHours(),this.maxMinutes=t.getMinutes(),this.d.lastSelectedDate&&this.d.lastSelectedDate.getHours()<t.getHours()&&(this.maxMinutes=this.opts.maxMinutes)},_setDefaultMinMaxTime:function(){var t=23,e=59,i=this.opts;this.minHours=i.minHours<0||i.minHours>t?0:i.minHours,this.minMinutes=i.minMinutes<0||i.minMinutes>e?0:i.minMinutes,this.maxHours=i.maxHours<0||i.maxHours>t?t:i.maxHours,this.maxMinutes=i.maxMinutes<0||i.maxMinutes>e?e:i.maxMinutes},_validateHoursMinutes:function(t){this.hours<this.minHours?this.hours=this.minHours:this.hours>this.maxHours&&(this.hours=this.maxHours),this.minutes<this.minMinutes?this.minutes=this.minMinutes:this.minutes>this.maxMinutes&&(this.minutes=this.maxMinutes)},_buildHTML:function(){var i=s.getLeadingZeroNum,a={hourMin:this.minHours,hourMax:i(this.maxHours),hourStep:this.opts.hoursStep,hourValue:this.hours,hourVisible:i(this.displayHours),minMin:this.minMinutes,minMax:i(this.maxMinutes),minStep:this.opts.minutesStep,minValue:i(this.minutes)},n=s.template(t,a);this.$timepicker=e(n).appendTo(this.d.$datepicker),this.$ranges=e('[type="range"]',this.$timepicker),this.$hours=e('[name="hours"]',this.$timepicker),this.$minutes=e('[name="minutes"]',this.$timepicker),this.$hoursText=e(".datepicker--time-current-hours",this.$timepicker),this.$minutesText=e(".datepicker--time-current-minutes",this.$timepicker),this.d.ampm&&(this.$ampm=e('<span class="datepicker--time-current-ampm">').appendTo(e(".datepicker--time-current",this.$timepicker)).html(this.dayPeriod),this.$timepicker.addClass("-am-pm-"))},_updateCurrentTime:function(){var t=s.getLeadingZeroNum(this.displayHours),e=s.getLeadingZeroNum(this.minutes);this.$hoursText.html(t),this.$minutesText.html(e),this.d.ampm&&this.$ampm.html(this.dayPeriod)},_updateRanges:function(){this.$hours.attr({min:this.minHours,max:this.maxHours}).val(this.hours),this.$minutes.attr({min:this.minMinutes,max:this.maxMinutes}).val(this.minutes)},_handleDate:function(t){this._setDefaultMinMaxTime(),t&&(s.isSame(t,this.d.opts.minDate)?this._setMinTimeFromDate(this.d.opts.minDate):s.isSame(t,this.d.opts.maxDate)&&this._setMaxTimeFromDate(this.d.opts.maxDate)),this._validateHoursMinutes(t)},update:function(){this._updateRanges(),this._updateCurrentTime()},_getValidHoursFromDate:function(t,e){var i=t,a=t;t instanceof Date&&(i=s.getParsedDate(t),a=i.hours);var n=e||this.d.ampm,h="am";if(n)switch(!0){case 0==a:a=12;break;case 12==a:h="pm";break;case a>11:a-=12,h="pm"}return{hours:a,dayPeriod:h}},set hours(t){this._hours=t;var e=this._getValidHoursFromDate(t);this.displayHours=e.hours,this.dayPeriod=e.dayPeriod},get hours(){return this._hours},_onChangeRange:function(t){var i=e(t.target),s=i.attr("name");this.d.timepickerIsActive=!0,this[s]=i.val(),this._updateCurrentTime(),this.d._trigger("timeChange",[this.hours,this.minutes]),this._handleDate(this.d.lastSelectedDate),this.update()},_onSelectDate:function(t,e){this._handleDate(e),this.update()},_onMouseEnterRange:function(t){var i=e(t.target).attr("name");e(".datepicker--time-current-"+i,this.$timepicker).addClass("-focus-")},_onMouseOutRange:function(t){var i=e(t.target).attr("name");this.d.inFocus||e(".datepicker--time-current-"+i,this.$timepicker).removeClass("-focus-")},_onMouseUpRange:function(t){this.d.timepickerIsActive=!1}}}()}(window,jQuery);
;(function ($) { $.fn.datepicker.language['en'] = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 0
}; })(jQuery);