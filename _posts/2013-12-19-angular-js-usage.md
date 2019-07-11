---
layout: post
title:  "AngularJS notes"
date:   2013-12-19 20:15:01 +0800
categories: frontend
---
###Service & Provider & Factory & Value的区别

#####1. Difference & Usages

|Item |Syntax| When Using, Inject Result | Note|
|--------| ----- | ------------- | ----------|
| Service|```module.service("service", function service(){})```|instance of the function **service**| **service** is function passed to module.service|
| Value|```module.value("value", function value(){})```||
| Factory|```module.factory("factory", function factory(){})```|value of **value()** called by reference|**value** are the function passed to module.factory|
| Provider|```module.provider("newprovider", function(){})```|new newprovider().$get()|**newprovider** is function passed to the module.provider|

#####2. Example
```
var app = angular.module( 'app', [] );

var MyFunc = function() {

	this.name = "default name";

	this.$get = function() {
		this.name = "new name"
		return "Hello from MyFunc.$get(). this.name = " + this.name;
	};

	return "Hello from MyFunc(). this.name = " + this.name;
};


// returns the actual function
app.service( 'myService', MyFunc ); 

// returns the function's return value
app.factory( 'myFactory', MyFunc );

// returns the output of the function's $get function
app.provider( 'myProv', MyFunc );

function MyCtrl( $scope, myService, myFactory, myProv ) {
	/*
		myService === {
			name: "defult name"
			$get = function() {
				name: "new name"
			}
		}
	*/
	$scope.serviceOutput = "myService = " + myService;
	/*
		myFactory === MyFunc() === "Hello from MyFunc(). this.name = defaultname";
	*/
	$scope.factoryOutput = "myFactory = " + myFactory;
	/*
		myProv === new MyFunc().$get(); === "Hello from MyFunc.$get(). this.name = new name"
	*/
	$scope.providerOutput = "myProvider = " + myProv;

}
```


#####another provider example
```
// Define the eventTracker provider
function EventTrackerProvider() {
  var trackingUrl = '/track';
 
  // A provider method for configuring where the tracked events should been saved
  this.setTrackingUrl = function(url) {
    trackingUrl = url;
  };
 
  // The service factory function
  this.$get = ['$http', function($http) {
    var trackedEvents = {};
    return {
      // Call this to track an event
      event: function(event) {
        var count = trackedEvents[event] || 0;
        count += 1;
        trackedEvents[event] = count;
        return count;
      },
      // Call this to save the tracked events to the trackingUrl
      save: function() {
        $http.post(trackingUrl, trackedEvents);
      }
    };
  }];
}
 
describe('eventTracker', function() {
  var postSpy;
 
  beforeEach(module(function($provide) {
    // Register the eventTracker provider
    $provide.provider('eventTracker', EventTrackerProvider);
  }));
 
  beforeEach(module(function(eventTrackerProvider) {
    // Configure eventTracker provider
    eventTrackerProvider.setTrackingUrl('/custom-track');
  }));
 
  it('tracks events', inject(function(eventTracker) {
    expect(eventTracker.event('login')).toEqual(1);
    expect(eventTracker.event('login')).toEqual(2);
  }));
 
  it('saves to the tracking url', inject(function(eventTracker, $http) {
    postSpy = spyOn($http, 'post');
    eventTracker.event('login');
    eventTracker.save();
    expect(postSpy).toHaveBeenCalled();
    expect(postSpy.mostRecentCall.args[0]).not.toEqual('/track');
    expect(postSpy.mostRecentCall.args[0]).toEqual('/custom-track');
    expect(postSpy.mostRecentCall.args[1]).toEqual({ 'login': 1 });
  }));
});
```



###AngularJS dependence injection
###### There are two kinds of dependence in Angular: Module Dependence, Service Dependence.

    1. The Module dependence are defined by angular.module("moduleName",["ModuleToDependOn"]).      
        I write my module use the angular.module, when the js file is loaded, then the angular knows there is a new module. When this module is required, angular will loaded the module automatically. 
___

    2. The Service dependence are defined by the function(service,provider,factory) provided by angular.module.
    

