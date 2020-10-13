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
class Page404 extends \Runtime\Web\Component
{
	static function css($ctx, $vars)
	{
	}
	static function render($ctx, $layout, $model, $params, $content)
	{
		$__v0 = [];
		static::p($__v0, static::escapeHtml($ctx, $ctx->translate($ctx, "Bayrell.TimePlanner", "Page not found")));
		return new \Runtime\RawString($__v0);
	}
	/* ======================= Class Init Functions ======================= */
	function getClassName()
	{
		return "Bayrell.TimePlanner.Admin.Page404";
	}
	static function getCurrentNamespace()
	{
		return "Bayrell.TimePlanner.Admin";
	}
	static function getCurrentClassName()
	{
		return "Bayrell.TimePlanner.Admin.Page404";
	}
	static function getParentClassName()
	{
		return "Runtime.Web.Component";
	}
	static function getClassInfo($ctx)
	{
		return new \Runtime\IntrospectionInfo($ctx, [
			"kind"=>\Runtime\IntrospectionInfo::ITEM_CLASS,
			"class_name"=>"Bayrell.TimePlanner.Admin.Page404",
			"name"=>"Bayrell.TimePlanner.Admin.Page404",
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