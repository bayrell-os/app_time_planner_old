<?php
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
namespace Bayrell\TimePlanner\Admin;
class Routes
{
	/**
	 * Layout chain
	 */
	static function layoutChain($ctx, $layout)
	{
		if ($layout->layout_name == "default")
		{
			$layout = \Runtime\rtl::setAttr($ctx, $layout, ["layout_class"], "Bayrell.TimePlanner.Admin.AdminLayout");
		}
		if ($layout->layout_name == "admin")
		{
			$layout = \Runtime\rtl::setAttr($ctx, $layout, ["layout_class"], "Bayrell.TimePlanner.Admin.AdminLayout");
		}
		return \Runtime\Collection::from([$layout]);
	}
	/**
	 * Render chain. Set default pattern
	 */
	static function renderChainPatternDefault($ctx, $container)
	{
		if ($container->pattern_name == "default" && $container->pattern_class == "" || $container->pattern_class == "")
		{
			$container = \Runtime\rtl::setAttr($ctx, $container, ["pattern_class"], "Bayrell.TimePlanner.Admin.AdminPattern");
		}
		return \Runtime\Collection::from([$container]);
	}
	/**
	 * Render chain. Route after
	 */
	static function renderChainRouteAfter($ctx, $container)
	{
		/* Change title */
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "title"], $container->layout->title . \Runtime\rtl::toStr(" | BAYRELL Cloud OS"));
		return \Runtime\Collection::from([$container]);
	}
	/**
	 * Render chain
	 * Page not found
	 * @return RenderContainer
	 */
	static function Page404($ctx, $container)
	{
		if ($container == null || $container->isResponseExists($ctx) || $container->isPageExists($ctx))
		{
			return \Runtime\Collection::from([$container]);
		}
		/* Set title */
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "title"], "Page not found");
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "layout_name"], "default");
		/* Set model */
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "page_class"], "Bayrell.TimePlanner.Admin.Page404");
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "page_model"], null);
		/* Set 404 code */
		$container = \Runtime\rtl::setAttr($ctx, $container, ["new_http_code"], 404);
		return \Runtime\Collection::from([$container]);
	}
	/**
	 * Route Action
	 * @return WebContainer
	 */
	static function adminerPage($ctx, $container)
	{
		$settings = $ctx->config($ctx, \Runtime\Collection::from(["Runtime.ORM.MySQL","default"]));
		/* Set title */
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "title"], "Adminer page");
		/* Create model */
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "page_class"], "Bayrell.TimePlanner.Admin.AdminerPage");
		$container = \Runtime\rtl::setAttr($ctx, $container, ["layout", "page_model"], new \Runtime\Dict($ctx, \Runtime\Dict::from(["db"=>$settings])));
		return \Runtime\Collection::from([$container]);
	}
	/**
	 * Route Action
	 * @return WebContainer
	 */
	static function adminerInfoPage($ctx, $container)
	{
		$content = "";
		@ob_start();
		phpinfo();
		$content = ob_get_contents();
		@ob_end_clean();
		$container = \Runtime\rtl::setAttr($ctx, $container, ["response"], new \Runtime\Web\Response($ctx, \Runtime\Dict::from(["content"=>$content])));
		return \Runtime\Collection::from([$container]);
	}
	/**
	 * Route Action
	 * @return WebContainer
	 */
	static function adminerVersionPage($ctx, $container)
	{
		$content = "";
		$version = $container->route_params->get($ctx, "version", "");
		$file_path = \Runtime\rtl::getModulePath($ctx, "Bayrell.TimePlanner.Admin") . "/data/adminer-4.7.6.php";
		@ob_start();
		include $file_path;
		$content = ob_get_contents();
		@ob_end_clean();
		$container = \Runtime\rtl::setAttr($ctx, $container, ["response"], new \Runtime\Web\Response($ctx, \Runtime\Dict::from(["content"=>$content])));
		return \Runtime\Collection::from([$container]);
	}
	/* ======================= Class Init Functions ======================= */
	function getClassName()
	{
		return "Bayrell.TimePlanner.Admin.Routes";
	}
	static function getCurrentNamespace()
	{
		return "Bayrell.TimePlanner.Admin";
	}
	static function getCurrentClassName()
	{
		return "Bayrell.TimePlanner.Admin.Routes";
	}
	static function getParentClassName()
	{
		return "";
	}
	static function getClassInfo($ctx)
	{
		return new \Runtime\IntrospectionInfo($ctx, [
			"kind"=>\Runtime\IntrospectionInfo::ITEM_CLASS,
			"class_name"=>"Bayrell.TimePlanner.Admin.Routes",
			"name"=>"Bayrell.TimePlanner.Admin.Routes",
			"annotations"=>\Runtime\Collection::from([
				new \Runtime\Web\RouteList($ctx, []),
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
			"adminerPage",
			"adminerInfoPage",
			"adminerVersionPage",
		];
		return \Runtime\Collection::from($a);
	}
	static function getMethodInfoByName($ctx,$field_name)
	{
		if ($field_name == "adminerPage")
			return new \Runtime\IntrospectionInfo($ctx, [
				"kind"=>\Runtime\IntrospectionInfo::ITEM_METHOD,
				"class_name"=>"Bayrell.TimePlanner.Admin.Routes",
				"name"=>"adminerPage",
				"annotations"=>\Runtime\Collection::from([
					new \Runtime\Web\Route($ctx, ["uri"=>"/adminer/","name"=>"app.adminer.index"]),
					new \Runtime\Web\RouteMiddleware($ctx, ["value"=>"Runtime.Web.Auth.AuthFrontend::checkAuthMiddleware"]),
				]),
			]);
		if ($field_name == "adminerInfoPage")
			return new \Runtime\IntrospectionInfo($ctx, [
				"kind"=>\Runtime\IntrospectionInfo::ITEM_METHOD,
				"class_name"=>"Bayrell.TimePlanner.Admin.Routes",
				"name"=>"adminerInfoPage",
				"annotations"=>\Runtime\Collection::from([
					new \Runtime\Web\Route($ctx, ["uri"=>"/adminer/info/","name"=>"app.adminer.info"]),
					new \Runtime\Web\RouteMiddleware($ctx, ["value"=>"Runtime.Web.Auth.AuthFrontend::checkAuthMiddleware"]),
				]),
			]);
		if ($field_name == "adminerVersionPage")
			return new \Runtime\IntrospectionInfo($ctx, [
				"kind"=>\Runtime\IntrospectionInfo::ITEM_METHOD,
				"class_name"=>"Bayrell.TimePlanner.Admin.Routes",
				"name"=>"adminerVersionPage",
				"annotations"=>\Runtime\Collection::from([
					new \Runtime\Web\Route($ctx, ["uri"=>"/adminer/{version}/","name"=>"app.adminer.version"]),
					new \Runtime\Web\RouteMiddleware($ctx, ["value"=>"Runtime.Web.Auth.AuthFrontend::checkAuthMiddleware"]),
				]),
			]);
		return null;
	}
}