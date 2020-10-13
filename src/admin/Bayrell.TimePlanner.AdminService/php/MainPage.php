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
class MainPage extends \Runtime\Web\Component
{
	/**
 * Route Action
 * @return RenderContainer
 */
	static function MainPage($ctx, $container)
	{
		/* Set title */
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "title"], "Index page");
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "layout_name"], "admin");
		/* Set model */
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "page_class"], "Bayrell.TimePlanner.Admin.MainPage");
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "page_model"], new \Runtime\Dict($ctx));
		return \Runtime\Collection::from([$container]);
	}
	static function css($ctx, $vars)
	{
		return ".content.h-d995{" . \Runtime\rtl::toStr("padding: 20px;") . \Runtime\rtl::toStr("}");
	}
	static function render($ctx, $layout, $model, $params, $content)
	{
		$__v0 = [];
		/* Element 'div' */
		$__v1 = ['<div class="'."content"." ".static::getCssHash($ctx).'">'];
		/* Element 'a' */
		$__v2 = ['<a href="'.static::escapeAttr($ctx, $layout->route_prefix . \Runtime\rtl::toStr("/adminer/")).'" target="'.static::escapeAttr($ctx, "_self").'" class="'."link"." ".static::getCssHash($ctx).'">'];
		static::p($__v2, "Adminer");
		static::p($__v2, '</a>');
		static::p($__v1, $__v2);
		/* Element 'br' */
		$__v2 = ['<br />'];
		static::p($__v1, $__v2);
		/* Element 'a' */
		$__v2 = ['<a href="'.static::escapeAttr($ctx, $layout->route_prefix . \Runtime\rtl::toStr("/adminer/info/")).'" target="'.static::escapeAttr($ctx, "_self").'" class="'."link"." ".static::getCssHash($ctx).'">'];
		static::p($__v2, "PHP info");
		static::p($__v2, '</a>');
		static::p($__v1, $__v2);
		static::p($__v1, '</div>');
		static::p($__v0, $__v1);
		return new \Runtime\RawString($__v0);
	}
	/* ======================= Class Init Functions ======================= */
	function getClassName()
	{
		return "Bayrell.TimePlanner.Admin.MainPage";
	}
	static function getCurrentNamespace()
	{
		return "Bayrell.TimePlanner.Admin";
	}
	static function getCurrentClassName()
	{
		return "Bayrell.TimePlanner.Admin.MainPage";
	}
	static function getParentClassName()
	{
		return "Runtime.Web.Component";
	}
	static function getClassInfo($ctx)
	{
		return new \Runtime\IntrospectionInfo($ctx, [
			"kind"=>\Runtime\IntrospectionInfo::ITEM_CLASS,
			"class_name"=>"Bayrell.TimePlanner.Admin.MainPage",
			"name"=>"Bayrell.TimePlanner.Admin.MainPage",
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
			"MainPage",
		];
		return \Runtime\Collection::from($a);
	}
	static function getMethodInfoByName($ctx,$field_name)
	{
		if ($field_name == "MainPage")
			return new \Runtime\IntrospectionInfo($ctx, [
				"kind"=>\Runtime\IntrospectionInfo::ITEM_METHOD,
				"class_name"=>"Bayrell.TimePlanner.Admin.MainPage",
				"name"=>"MainPage",
				"annotations"=>\Runtime\Collection::from([
					new \Runtime\Web\Route($ctx, ["uri"=>"/","name"=>"app.main"]),
					new \Runtime\Web\RouteMiddleware($ctx, ["value"=>"Runtime.Web.Auth.AuthFrontend::checkAuthMiddleware"]),
				]),
			]);
		return null;
	}
}