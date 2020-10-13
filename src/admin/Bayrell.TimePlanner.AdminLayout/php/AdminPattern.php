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
class AdminPattern extends \Runtime\Web\Component
{
	static function render($ctx, $container, $model, $params, $content)
	{
		$__v0 = [];
		/* Element 'html' */
		$__v1 = ['<html>'];
		/* Element 'head' */
		$__v2 = ['<head>'];
		/* Element 'title' */
		$__v3 = ['<title>'];
		static::p($__v3, static::escapeHtml($ctx, $model->title));
		static::p($__v3, '</title>');
		static::p($__v2, $__v3);
		/* Element 'link' */
		$__v3 = ['<link rel="'.static::escapeAttr($ctx, "shortcut icon").'" href="'.static::escapeAttr($ctx, "data:image/x-icon;,").'" type="'.static::escapeAttr($ctx, "image/x-icon").'" />'];
		static::p($__v2, $__v3);
		/* Element 'link' */
		$__v3 = ['<link rel="'.static::escapeAttr($ctx, "stylesheet").'" href="'.static::escapeAttr($ctx, $model->route_prefix . \Runtime\rtl::toStr("/core.css?_=") . \Runtime\rtl::toStr($model->f_inc)).'" />'];
		static::p($__v2, $__v3);
		/* Element 'style' */
		$__v3 = ['<style id="'.static::escapeAttr($ctx, "root_style").'">'];
		static::p($__v3, \Runtime\rs::spaceless($ctx, \Runtime\Web\RenderDriver::getLayoutCSS($ctx, $model)));
		static::p($__v3, '</style>');
		static::p($__v2, $__v3);
		static::p($__v2, '</head>');
		static::p($__v1, $__v2);
		/* Element 'body' */
		$__v2 = ['<body>'];
		$model_encoded = \Runtime\rs::base64_encode_url($ctx, \Runtime\rtl::json_encode($ctx, $model));
		$frontend_storage = \Runtime\rs::base64_encode_url($ctx, \Runtime\rtl::json_encode($ctx, $container->frontend_storage));
		/* Element 'div' */
		$__v3 = ['<div id="'.static::escapeAttr($ctx, "root").'">'];
		static::p($__v3, static::escapeHtml($ctx, $content));
		static::p($__v3, '</div>');
		static::p($__v2, $__v3);
		/* Element 'input' */
		$__v3 = ['<input id="'.static::escapeAttr($ctx, "root_model").'" type="'.static::escapeAttr($ctx, "hidden").'" value="'.static::escapeAttr($ctx, $model_encoded).'" />'];
		static::p($__v2, $__v3);
		/* Element 'input' */
		$__v3 = ['<input id="'.static::escapeAttr($ctx, "frontend_storage").'" type="'.static::escapeAttr($ctx, "hidden").'" value="'.static::escapeAttr($ctx, $frontend_storage).'" />'];
		static::p($__v2, $__v3);
		/* Element 'script' */
		$__v3 = ['<script src="'.static::escapeAttr($ctx, $model->route_prefix . \Runtime\rtl::toStr("/assets/runtime.js?_=") . \Runtime\rtl::toStr($model->f_inc)).'">'];
		static::p($__v3, '</script>');
		static::p($__v2, $__v3);
		/* Element 'script' */
		$__v3 = ['<script src="'.static::escapeAttr($ctx, $model->route_prefix . \Runtime\rtl::toStr("/assets/components.js?_=") . \Runtime\rtl::toStr($model->f_inc)).'">'];
		static::p($__v3, '</script>');
		static::p($__v2, $__v3);
		/* Element 'script' */
		$__v3 = ['<script src="'.static::escapeAttr($ctx, $model->route_prefix . \Runtime\rtl::toStr("/app.js?_=") . \Runtime\rtl::toStr($model->f_inc)).'">'];
		static::p($__v3, '</script>');
		static::p($__v2, $__v3);
		/* Element 'script' */
		$__v3 = ['<script>'];
		static::p($__v3, "runWebApp(");
		static::p($__v3, static::json_encode($ctx, $ctx->main_module));
		static::p($__v3, ", ");
		static::p($__v3, static::json_encode($ctx, $container->frontend_env));
		static::p($__v3, ");");
		static::p($__v3, '</script>');
		static::p($__v2, $__v3);
		static::p($__v2, '</body>');
		static::p($__v1, $__v2);
		static::p($__v1, '</html>');
		static::p($__v0, $__v1);
		return new \Runtime\RawString($__v0);
	}
	/* ======================= Class Init Functions ======================= */
	function getClassName()
	{
		return "Bayrell.TimePlanner.Admin.AdminPattern";
	}
	static function getCurrentNamespace()
	{
		return "Bayrell.TimePlanner.Admin";
	}
	static function getCurrentClassName()
	{
		return "Bayrell.TimePlanner.Admin.AdminPattern";
	}
	static function getParentClassName()
	{
		return "Runtime.Web.Component";
	}
	static function getClassInfo($ctx)
	{
		return new \Runtime\IntrospectionInfo($ctx, [
			"kind"=>\Runtime\IntrospectionInfo::ITEM_CLASS,
			"class_name"=>"Bayrell.TimePlanner.Admin.AdminPattern",
			"name"=>"Bayrell.TimePlanner.Admin.AdminPattern",
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