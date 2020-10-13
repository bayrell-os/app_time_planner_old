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
class ModuleDescription
{
	/**
	 * Returns module name
	 * @return string
	 */
	static function getModuleName($ctx)
	{
		return "Bayrell.TimePlanner.Admin";
	}
	/**
	 * Returns module name
	 * @return string
	 */
	static function getModuleVersion($ctx)
	{
		return "0.1.0";
	}
	/**
	 * Returns required modules
	 * @return Dict<string>
	 */
	static function requiredModules($ctx)
	{
		return \Runtime\Dict::from(["Runtime"=>">=0.3","Runtime.Web"=>"*","Runtime.Web.Auth"=>"*","Runtime.Web.Backend"=>"*"]);
	}
	/**
	 * Returns enities
	 */
	static function entities($ctx)
	{
		return \Runtime\Collection::from([new \Runtime\Core\Driver($ctx, \Runtime\Dict::from(["name"=>"root-controller","value"=>"Runtime.Web.RenderController","params"=>\Runtime\Dict::from(["selector"=>"#root","main_controller"=>true,"window"=>"RootController"])])),new \Runtime\Core\LambdaChain($ctx, \Runtime\Dict::from(["name"=>\Runtime\Web\RenderDriver::LAYOUT_CHAIN,"pos"=>10,"value"=>"Bayrell.TimePlanner.Admin.Routes::layoutChain"])),new \Runtime\Core\LambdaChain($ctx, \Runtime\Dict::from(["name"=>\Runtime\Web\RenderDriver::RENDER_CHAIN,"value"=>"Bayrell.TimePlanner.Admin.Routes::Page404","pos"=>\Runtime\Web\RenderDriver::RENDER_CHAIN_CALL_PAGE_NOT_FOUND,"is_async"=>true])),new \Runtime\Core\LambdaChain($ctx, \Runtime\Dict::from(["name"=>\Runtime\Web\RenderDriver::RENDER_CHAIN,"value"=>"Bayrell.TimePlanner.Admin.Routes::renderChainRouteAfter","pos"=>\Runtime\Web\RenderDriver::RENDER_CHAIN_CALL_ROUTE_AFTER,"is_async"=>true])),new \Runtime\Core\Entity($ctx, \Runtime\Dict::from(["name"=>"Bayrell.TimePlanner.Admin.Routes"])),new \Runtime\Web\RouteList($ctx, \Runtime\Dict::from(["name"=>"Bayrell.TimePlanner.Admin.MainPage"])),new \Runtime\Core\LambdaChain($ctx, \Runtime\Dict::from(["name"=>\Runtime\Web\RenderDriver::RENDER_CHAIN,"value"=>"Bayrell.TimePlanner.Admin.Routes::renderChainPatternDefault","pos"=>\Runtime\Web\RenderDriver::RENDER_CHAIN_RESPONSE_BEFORE])),new \Runtime\Core\Driver($ctx, \Runtime\Dict::from(["name"=>"Runtime.ORM.DriverInterface","value"=>"Runtime.ORM.MySQL.Driver"]))]);
	}
	/**
	 * Returns context settings
	 * @return Dict<string>
	 */
	static function appSettings($ctx, $env)
	{
		return \Runtime\Dict::from(["config"=>\Runtime\Dict::from(["Runtime.Web"=>\Runtime\Dict::from(["f_inc"=>"1"]),"Runtime.Web.Auth"=>\Runtime\Dict::from(["AUTH_PRIVATE_KEY"=>$env->get($ctx, "AUTH_PRIVATE_KEY", ""),"AUTH_PUBLIC_KEY"=>$env->get($ctx, "AUTH_PUBLIC_KEY", ""),"COOKIE_NAME"=>$env->get($ctx, "CLOUD_OS_COOKIE_NAME", "cloud_os_token"),"COOKIE_EXPIRE"=>7 * 24 * 60 * 60]),"Runtime.Web.Backend"=>\Runtime\Dict::from(["api"=>true,"external_bus_class"=>"","external_bus_default"=>true]),"Runtime.ORM.MySQL"=>\Runtime\Dict::from(["default"=>new \Runtime\ORM\MySQL\Settings($ctx, \Runtime\Dict::from(["host"=>$env->get($ctx, "MYSQL_HOST", ""),"username"=>$env->get($ctx, "MYSQL_USERNAME", ""),"password"=>$env->get($ctx, "MYSQL_PASSWORD", ""),"db"=>$env->get($ctx, "MYSQL_DB", "")]))])]),"secrets"=>\Runtime\Dict::from([])]);
	}
	/**
	 * Init app
	 */
	static function appInit($ctx, $c)
	{
		return $c::init($ctx, $c);
	}
	/**
	 * Start app
	 */
	static function appStart($ctx, $c)
	{
		return $c::start($ctx, $c);
	}
	/* ======================= Class Init Functions ======================= */
	function getClassName()
	{
		return "Bayrell.TimePlanner.Admin.ModuleDescription";
	}
	static function getCurrentNamespace()
	{
		return "Bayrell.TimePlanner.Admin";
	}
	static function getCurrentClassName()
	{
		return "Bayrell.TimePlanner.Admin.ModuleDescription";
	}
	static function getParentClassName()
	{
		return "";
	}
	static function getClassInfo($ctx)
	{
		return new \Runtime\IntrospectionInfo($ctx, [
			"kind"=>\Runtime\IntrospectionInfo::ITEM_CLASS,
			"class_name"=>"Bayrell.TimePlanner.Admin.ModuleDescription",
			"name"=>"Bayrell.TimePlanner.Admin.ModuleDescription",
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