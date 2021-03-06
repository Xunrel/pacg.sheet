define(["jquery", "engine", 'ko'],
	function ($, engine, ko) {
		var appName = 'PACG Sheet';
		var version = '0.0.1';
		
		var init = function () {
			$(document).ready(function () {
				$('[data-pacg="title"]').text(appName);
				$('[data-pacg="version"]').text("Version: " + version);
			});
		};
		
		var Pacg = {
			name: appName,
			version: version,
			init: init,
			engine: engine
		};
		
		return Pacg;
	}
);