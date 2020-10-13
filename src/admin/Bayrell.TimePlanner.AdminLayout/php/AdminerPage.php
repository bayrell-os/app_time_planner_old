<?php
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
namespace Bayrell\TimePlanner\Admin;
class AdminerPage extends \Runtime\Web\Component
{
	static function render($ctx, $layout, $model, $params, $content)
	{
		$__v0 = [];
		/* Element 'div' */
		$__v1 = ['<div>'];
		static::p($__v1, "Redirect. Please wait...");
		/* Element 'form' */
		$__v2 = ['<form id="'.static::escapeAttr($ctx, "adminer_form").'" method="'.static::escapeAttr($ctx, "post").'" action="'.static::escapeAttr($ctx, $layout->route_prefix . \Runtime\rtl::toStr("/adminer/4.7.6/")).'">'];
		/* Element 'input' */
		$__v3 = ['<input type="'.static::escapeAttr($ctx, "hidden").'" name="'.static::escapeAttr($ctx, "auth[driver]").'" value="'.static::escapeAttr($ctx, "server").'" />'];
		static::p($__v2, $__v3);
		/* Element 'input' */
		$__v3 = ['<input type="'.static::escapeAttr($ctx, "hidden").'" name="'.static::escapeAttr($ctx, "auth[server]").'" value="'.static::escapeAttr($ctx, \Runtime\rtl::attr($ctx, $model, ["db", "host"])).'" />'];
		static::p($__v2, $__v3);
		/* Element 'input' */
		$__v3 = ['<input type="'.static::escapeAttr($ctx, "hidden").'" name="'.static::escapeAttr($ctx, "auth[username]").'" value="'.static::escapeAttr($ctx, \Runtime\rtl::attr($ctx, $model, ["db", "username"])).'" />'];
		static::p($__v2, $__v3);
		/* Element 'input' */
		$__v3 = ['<input type="'.static::escapeAttr($ctx, "hidden").'" name="'.static::escapeAttr($ctx, "auth[password]").'" value="'.static::escapeAttr($ctx, \Runtime\rtl::attr($ctx, $model, ["db", "password"])).'" />'];
		static::p($__v2, $__v3);
		/* Element 'input' */
		$__v3 = ['<input type="'.static::escapeAttr($ctx, "hidden").'" name="'.static::escapeAttr($ctx, "auth[permanent]").'" value="'.static::escapeAttr($ctx, "1").'" />'];
		static::p($__v2, $__v3);
		static::p($__v2, '</form>');
		static::p($__v1, $__v2);
		static::p($__v1, '</div>');
		static::p($__v0, $__v1);
		return new \Runtime\RawString($__v0);
	}
	/**
 * On component created
 */
	function onCreated($ctx)
	{
	}
	/* ======================= Class Init Functions ======================= */
	function getClassName()
	{
		return "Bayrell.TimePlanner.Admin.AdminerPage";
	}
	static function getCurrentNamespace()
	{
		return "Bayrell.TimePlanner.Admin";
	}
	static function getCurrentClassName()
	{
		return "Bayrell.TimePlanner.Admin.AdminerPage";
	}
	static function getParentClassName()
	{
		return "Runtime.Web.Component";
	}
	static function getClassInfo($ctx)
	{
		return new \Runtime\IntrospectionInfo($ctx, [
			"kind"=>\Runtime\IntrospectionInfo::ITEM_CLASS,
			"class_name"=>"Bayrell.TimePlanner.Admin.AdminerPage",
			"name"=>"Bayrell.TimePlanner.Admin.AdminerPage",
			"annotations"=>\Runtime\Collection::from([
			]),
		]);
	}
	static function getFieldsList($ctx,$f)
	{
		$a = [];
		return \Runtime\Collection::from($a);
	}
	static function getFieldInfoByName($ctx,$field_name)
	{
		return null;
	}
	static function getMethodsList($ctx)
	{
		$a = [
		];
		return \Runtime\Collection::from($a);
	}
	static function getMethodInfoByName($ctx,$field_name)
	{
		return null;
	}
}