//-------------------------------------------------------------------------------------------
//     Application configuration (ignored on ArcGIS Online, Portal and during development)
//-------------------------------------------------------------------------------------------
var configOptions = {
	// Enter an application ID created through the Map Journal builder 
	appid: "2b9e514d1eab42b984864a34ad5e9de8",
	appidFr: "5562425887f8478f82dc3fdbf4acb44d",
	// Optionally to secure Journal's access, use an OAuth application ID (example: 6gyOg377fLUhUk6f)
	// User will need to sign-in to access the viewer even if your application is public
	oAuthAppId: "",
	// Optionally to be able to use the appid URL parameter, configure here the list of application author 
	//  whose application are allowed to be viewed by this Map Journal deployment
	// This is the Portal username of the Journal owner (e.g. ["user1"], ["user1", "user2"])
	authorizedOwners: [""]
	};
// Optionally sharing and proxy URLs can be configured in app/config.js. This is only required  
//  when the webmap is not hosted on ArcGIS Online or a Portal for ArcGIS instance and the application isn't deployed as /home/MapJournal/ or /apps/MapJournal/. 
// Optionally Bing Maps key, Geometry and Geocode service's URLs can be configured in app/commonConfig.js. This is only required 
//  if the Organization or Portal for ArcGIS instance default configuration has to be overwritten. If the application is deployed 
//  on Portal for ArcGIS as /home/MapJournal/ or /apps/MapJournal/, that configuration is available in ../commonConfig.js

