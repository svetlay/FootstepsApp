var repositoryName = everliveAPIKey != '' ? 'everlive' : 'sitefinity';

var SitefinityMobileApplication = function () {
    this.app = new kendo.mobile.Application(document.body,
											{
											    transition: 'slide',
                                                skin: "flat"
											});

    this.moduleName = moduleName;
    this.dataServiceUrl = '/sitefinity/services/DynamicModules/Data.svc/';
    this.repository = getRepository(repositoryName, everliveAPIKey, everliveServiceUrl, everliveServiceSchema, everliveRealm);
    this.scriptsLoaded = false;

    var that = this;
    /* View model */
    this.viewModel = kendo.observable({
        moduleName: that.moduleName,
        moduleDescription: moduleDescription,
        applications: {},
        dataSource: {},
        userData: {
            website: websiteUrl,
            username: '',
            password: '',
            membershipProviderName: "Default",
            accessToken: ''
        },
        logIn: function (e) {
            e.preventDefault();
            ShowLoading();
            that.logIn();
            HideLoading();
        },
        logOut: function (e) {
            e.preventDefault();
            ShowLoading();
            that.logOut();
            HideLoading();
        }
    });
    this.constants = {
        applicationsCacheKey: 'Applications' + applicationId,
        userDataCacheKey: 'UserData' + applicationId
    };
};

SitefinityMobileApplication.prototype = {
    logIn: function () {
        if (everliveAPIKey != '') {
            this.everliveLogin();
        }
        else {
            this.sitefinityLogin();
        }
    },

    everliveLogin: function () {
        var that = this;
        this.repository.logIn(this.viewModel.userData, everliveAPIKey, function (token) {
            that.viewModel.userData.accessToken = token;
            that.cacheUserData(that.viewModel.userData);
            that.openApplication();
            HideLoading();
        }, function (result) {
            HideLoading();
            switch (result) {
                case 101:
                    showAlert(
						'Wrong credentials!',
						'Log In'
						);
                    break;
                case 404:
                    showAlert(
						'Website address is not accessible or incorrect!',
						'Log In'
						);
                    break;
                default:
                    showAlert(
						'Error logging in',
						'Log In'
						);
                    break;
            }
        });
    },

    sitefinityLogin: function () {
        var that = this;
        this.repository.logIn(this.viewModel.userData, function (token) {
            that.viewModel.userData.accessToken = token;
            that.cacheUserData(that.viewModel.userData);
            that.openApplication();
            HideLoading();
        }, function (result) {
            HideLoading();
            switch (result) {
                case 101:
                    showAlert(
						'Wrong credentials!',
						'Log In'
						);
                    break;
                case 404:
                    showAlert(
						'Website address is not accessible or incorrect!',
						'Log In'
						);
                    break;
                default:
                    showAlert(
						'Error logging in',
						'Log In'
						);
                    break;
            }
        });
    },

    logOut: function () {
        var that = this;
        this.repository.logOut(this, function (data) {
            that.app.navigate('#tabstrip-home');
            that.viewModel.userData.accessToken = "";
        }, function () {
            HideLoading();
            showAlert(
				'Error logging out!',
				'Log In'
				);
        });
    },

    openApplication: function (data) {
        var that = this;

        if (!that.scriptsLoaded) {
            $.getScript('scripts/moduleApp.js', function (data, textStatus, jqxhr) {
                that.scriptsLoaded = true;
                moduleApp.init(that.app, that.moduleName, applicationId, that.viewModel.userData, that.dataServiceUrl, false, that.errorMessage403);
                moduleApp.loadApplication(that.viewModel.userData,
                    { EverliveAPIKey: everliveAPIKey, Id: applicationId, GoogleAPIKey: googleMapsApiV3Key, EverliveServiceSchema: everliveServiceSchema, EverliveServiceUrl: everliveServiceUrl, EverliveRealm: everliveRealm, EnableGeoLocationSearch: enableGeoLocationSearch },
                    moduleProvider,
                    function () {
                        that.app.navigate('moduleApp.html');
                    },
                    function (statusText) {
                        showAlert(
                            that.errorMessage403,
                            'Mobile Application',
                            function () {
                                that.app.navigate('#tabstrip-home');
                                that.viewModel.userData.accessToken = "";
                            }
                        );
                    });
            });
        }
        else {
            that.app.navigate('moduleApp.html');
        }
    },

    clearCache: function () {
        window.localStorage.removeItem(this.constants.userDataCacheKey);
        window.localStorage.removeItem(this.constants.applicationsCacheKey);
    },

    cacheUserData: function (userData) {
        var str = '',
		clone = jQuery.extend({}, userData);
        //do not cache access token
        clone.accessToken = '';
        str = JSON.stringify(clone);
        window.localStorage.setItem(this.constants.userDataCacheKey, str);
    },

    loadUserDataFromCache: function () {
        var str = window.localStorage.getItem(this.constants.userDataCacheKey),
		userData;

        if (Object.prototype.toString.call(str) === '[object String]' && str.length > 0) {
            userData = JSON.parse(str);
            this.viewModel.set('userData', userData);
            return true;
        }
        return false;
    }

}

var sitefinityMobileApplication = new SitefinityMobileApplication();

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use the PhoneGap API
    //Handle document events
    document.addEventListener("resume", onResume, false);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("backbutton", onBackKeyDown, false);

    //Handle window events
    window.addEventListener("batterycritical", onBatteryCritical, false);

    //Load cached user data
    if (sitefinityMobileApplication.loadUserDataFromCache()) {
        sitefinityMobileApplication.logIn();
    }
}

function onResume() {
    //resume sitefinityMobileApplication
    if (window.sitefinityMobileApplication === undefined || !sitefinityMobileApplication || !sitefinityMobileApplication.hasOwnProperty('viewModel') || !sitefinityMobileApplication.viewModel.hasOwnProperty('dataSource')) {
        navigateToHome();
    }
}

function onOffline() {
    showAlert(
		'You are running offline. This application needs internet connectivity. Please check your connectivity',
		'Log In',
		function () {
		    document.location = '#tabstrip-home';
		    $('.km-loader').hide();
		}
		);
}

function onBackKeyDown(e) {
    e.preventDefault();
    navigator.notification.confirm('Do you really want to exit?', function (confirmed) {
        if (confirmed === true || confirmed === 1) {
            navigator.app.exitApp();
        }
    }, 'Exit', 'Ok,Cancel');
}

function onBatteryCritical(info) {
    showAlert(
		"Battery Level Critical " + info.level + "%\nRecharge Soon!",
		'Battery'
		);
}

// Show a custom alert
function showAlert(message, title, callback) {
    navigator.notification.alert(
		message,
		callback || function () {
		},
		title,
		'OK'
		);
}

function navigateToHome() {
    document.location = '#tabstrip-home';
    document.location.reload();
}

window.addEventListener('error', function (evt) {
    evt.preventDefault();
    var data = {
        Message: evt.message,
        FileName: evt.filename,
        LineNumber: evt.lineno
    };

    if (evt.message === "Uncaught TypeError: Cannot read property 'viewModel' of undefined" ||
		evt.message === "User with this user name is not logged in. Please login again." ||
		evt.message === "User with this user name is logged in on another computer.") {
        showAlert(
			"Application needs to restart",
			'Sitefinity Box',
			function () {
			    document.location = '#tabstrip-home';
			    sitefinityMobileApplication.clearCache();
			    $('.km-loader').hide();
			}
			);
    }
    else {
        var error = "Error occurred";
        if (evt.message !== undefined) {
            error = JSON.stringify(evt.message);
        }
        showAlert(error, 'Error occurred');
    }
    log(data);
});

function logError(message) {
    var data = {
        Message: message
    };
    log(data);
}

function log(errorData) {
    var data = errorData;
    if (device) {
        data.Device = {
            CordovaVersion: device.cordova,
            Name: device.name,
            Platform: device.platform,
            Uuid: device.uuid,
            Version: device.version
        };
    }
    sitefinityMobileApplication.loadUserDataFromCache();
    var isLoggingEnabled = true;

    if (window.moduleApp && moduleApp.viewModel) {
        isLoggingEnabled = moduleApp.viewModel.allowAccess.isErrorLoggingEnabled;
    }
    if (window.moduleApp && moduleApp.repository && isLoggingEnabled) {
        moduleApp.repository.log(sitefinityMobileApplication.viewModel.userData, errorData);
    }
}

function ShowLoading() {
    $('.km-loader').show();
}

function HideLoading() {
    $('.km-loader').hide();
}