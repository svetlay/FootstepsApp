var ModuleApp = function () {
    /* Fields templates mapping */
    this.fieldsViewTemplatesMapping = {
        'MainShortText': 'mainShortTextViewTemplate',
        'ShortText': 'shortTextViewTemplate',
        'LongText': 'longTextViewTemplate',
        'YesNo': 'yesNoViewTemplate',
        'Number': 'numberViewTemplate',
        'Choices': 'choicesViewTemplate',
        'DateTime': 'dateTimeViewTemplate',
        'Media': 'mediaViewTemplate',
        'Classification': 'classificationViewTemplate',
        'Address': 'addressViewTemplate'
    };
    this.fieldsEditTemplatesMapping = {
        'MainShortText': 'mainShortTextEditTemplate',
        'ShortText': 'shortTextEditTemplate',
        'LongText': 'longTextEditTemplate',
        'YesNo': 'yesNoEditTemplate',
        'Number': 'numberEditTemplate',
        'Choices': 'choicesEditTemplate',
        'DateTime': 'dateTimeEditTemplate',
        'Media': 'mediaEditTemplate',
        'Classification': 'classificationEditTemplate',
        'Address': 'addressEditTemplate'
    };
   
    this.authorData = {};
    /* Constants */
    this.urlRegex = /[^\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0525\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0621-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971\u0972\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3D\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8B\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCB\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA65F\uA662-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B\uA78C\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA2D\uFA30-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\-\!\$\(\)\=\@\d_\'\.]+|\.+$/g;
    this.emptyGuid = '00000000-0000-0000-0000-000000000000';
    /* Fields */
    this.app = null;
    this.moduleName = null;
    this.applicationId = null;
    this.userData = null;
    this.dataServiceUrl = null;
    this.providerName = null;
    this.viewModel = null;
    this.errorMessage403 = null;
    this.errorMasterViewDataSource = "There was error executing requested operation: ";
    this.repository = null;
    this.position = null;
    this.addressFieldName = null;
    this.type = null;
    this.mode = null;
    this.googleScriptLoaded = null;

    /* Field Types */
    this.typeNames = ['Unknown', 'ShortText', 'LongText', 'MultipleChoice', 'YesNo', 'Currency', 'DateTime', 'Number', 'Classification', 'Media', 'Guid', 'GuidArray', 'Choices', 'Address'];
    this.getRootTypes = function (types) {
        var rootTypes = $.grep(types, function (n, i) {
            return (n.ParentTypeId === moduleApp.emptyGuid || n.ParentTypeId === undefined);
        });
        return rootTypes;
    };
    
    this.getMyRootTypes = function (types) {
        var rootTypes = $.grep(types, function (n, i) {
            return (n.ParentTypeId === moduleApp.emptyGuid || n.ParentTypeId === undefined);
        });
        return rootTypes;
    };
    /* Files */

    this.Files = {
        itemURI: navigator.camera.PictureSourceType,

        Images: {
            _pictureSource: navigator.camera.PictureSourceType,
            _destinationType: navigator.camera.DestinationType,
            _contentType: "Telerik.Sitefinity.Libraries.Model.Image",
            providerName: 'OpenAccessDataProvider',
            libraryId: '4ba7ad46-f29b-4e65-be17-9bf7ce5ba1fb',

            _capturePhoto: function () {
                var that = this;
                // Take picture using device camera and retrieve image as base64-encoded string.
                navigator.camera.getPicture(function () {
                    that.Files.Images._onPhotoURISuccess.apply(that, arguments);
                }, function () {
                    that.Files.Images._onFail.apply(that, arguments);
                }, {
                    quality: 50,
                    destinationType: that.Files.Images._destinationType.FILE_URI
                });
            },

            _getPhotoFromLibrary: function () {
                var that = this;
                // On Android devices, pictureSource.PHOTOLIBRARY and
                // pictureSource.SAVEDPHOTOALBUM display the same photo album.
                navigator.camera.getPicture(function () {
                    that.Files.Images._onPhotoURISuccess.apply(that, arguments);
                }, function () {
                    that.Files.Images._onFail.apply(that, arguments);
                }, {
                    quality: 50,
                    destinationType: that.Files.Images._destinationType.FILE_URI,
                    sourceType: that.Files.Images._pictureSource.PHOTOLIBRARY
                });
            },

            _onPhotoURISuccess: function (imageURI) {
                var that = this;
                that.viewModel.set('imageSource', imageURI);
                that.viewModel.image.upload();
                that.app.navigate('#tabstrip-gallery');
            },

            _onFail: function (message) {
                if (message !== 'no image selected') {
                    showAlert(message, 'Error occurred');
                }
            }
        },

        Documents: {
            documentSource: '',
            current: {}
        }
    },

    /* Events */
    this.Events = {
        _handlers: {},

        _getHandler: function (eventName) {
            return this._handlers[eventName];
        },
        _registerHandler: function (eventName, handler) {
            var existingHandlers = this._getHandler(eventName);
            if (Object.prototype.toString.call(existingHandlers) === '[object Array]') {
                existingHandlers.push(handler);
            }
            else {
                this._handlers[eventName] = [handler];
            }
        },

        _removeHandler: function (eventName, handler) {
            var existingHandlers = this._getHandler(eventName),
            index = -1;
            if (Object.prototype.toString.call(existingHandlers) === '[object Array]') {
                index = existingHandlers.indexOf(handler);
                if (index >= 0) {
                    existingHandlers.splice(index, 1);
                }
            }
        },

        _raiseEvent: function (eventName, eventArgs) {
            var handlers = this._getHandler(eventName);
            if (Object.prototype.toString.call(handlers) === '[object Array]') {
                for (i = 0; i < handlers.length; i++) {
                    var handler = handlers[i];
                    if (typeof handler === 'function') {
                        handlers[i](eventArgs);
                    }
                }
            }
        },
        /* CRUD Operations events */
        /* Add handlers */
        add_onBeforeRead: function (callback) {
            this._registerHandler('beforeRead', callback);
        },
        add_onAfterRead: function (callback) {
            this._registerHandler('afterRead', callback);
        },
        add_onBeforeCreate: function (callback) {
            this._registerHandler('beforeCreate', callback);
        },
        add_onAfterCreate: function (callback) {
            this._registerHandler('afterCreate', callback);
        },
        add_onBeforeUpdate: function (callback) {
            this._registerHandler('beforeUpdate', callback);
        },
        add_onAfterUpdate: function (callback) {
            this._registerHandler('afterUpdate', callback);
        },
        add_onBeforeDelete: function (callback) {
            this._registerHandler('beforeDelete', callback);
        },
        add_onAfterDelete: function (callback) {
            this._registerHandler('afterDelete', callback);
        },
        /* Remove handlers */
        remove_onBeforeRead: function (callback) {
            this._removeHandler('beforeRead', callback);
        },
        remove_onAfterRead: function (callback) {
            this._removeHandler('afterRead', callback);
        },
        remove_onBeforeCreate: function (callback) {
            this._removeHandler('beforeCreate', callback);
        },
        remove_onAfterCreate: function (callback) {
            this._removeHandler('afterCreate', callback);
        },
        remove_onBeforeUpdate: function (callback) {
            this._removeHandler('beforeUpdate', callback);
        },
        remove_onAfterUpdate: function (callback) {
            this._removeHandler('afterUpdate', callback);
        },
        remove_onBeforeDelete: function (callback) {
            this._removeHandler('beforeDelete', callback);
        },
        remove_onAfterDelete: function (callback) {
            this._removeHandler('afterDelete', callback);
        },

        /* Templates building events */
        /* Add handlers */
        add_onViewFieldTemplateBuilding: function (callback) {
            this._registerHandler('viewFieldTemplateBuilding', callback);
        },
        add_onEditFieldTemplateBuilding: function (callback) {
            this._registerHandler('editFieldTemplateBuilding', callback);
        },
        remove_onViewFieldTemplateBuilding: function (callback) {
            this._registerHandler('viewFieldTemplateBuilding', callback);
        },
        remove_onEditFieldTemplateBuilding: function (callback) {
            this._registerHandler('editFieldTemplateBuilding', callback);
        }
    }
};

ModuleApp.prototype = {
    init: function (app, moduleName, applicationId, userData, dataServiceUrl, showSitefiniyBox, errorMessage403) {
        this.app = app;
        this.moduleName = moduleName;
        this.applicationId = applicationId;
        this.userData = userData;
        this.dataServiceUrl = dataServiceUrl;
        this.errorMessage403 = errorMessage403;
        this.validator = {};
        this.htmlEditor = null;
        this.mode = 1;

        var that = this;

        this.setCurrentGeoLocationPosition();
        this.initializeAddressFields();
        this.googleApiKey = null;
        /* View model */
        this.viewModel = kendo.observable({
            showSitefiniyBox: showSitefiniyBox,
            application: {},
            rootTypes: {},
            parentContentTypesPath: [],
            originalContentIds: [],
            currentParentId: '',
            parentTypeName: '',
            parentTypeNames: [],
            isEditable: false,
            hasLongTextField: false,
            type: {},
            item: {},
            searchCriteria: '',
            imageSource: '',
            imageFieldSource: '',
            previousUrl: '',
            dataSource: {},
            allowAccess: {
                hasLocationAccess: null,
                hasPhotosAccess: null,
                hasContactsAccess: null,
                isErrorLoggingEnabled: true
            },
            clickedImageFieldName: '',
            clickedImageAllowMultiple: '',
            showSearchBar: false,
            refreshScroller: false,
            logOut: function (e) {
                e.preventDefault();
                that.app.showLoading();
                that.logOut();
                that.app.hideLoading();
            },
            bindMasterView: function (e) {
                e.preventDefault();
               

                if (that.viewModel.parentTypeNames.length === 0) {
                    that.viewModel.parentTypeNames.push(moduleApp.viewModel.application.Name);
                    that.viewModel.set('parentTypeName', moduleApp.viewModel.application.Name);
                }

                //put the current items child into the array
                var currentArrLength = moduleApp.viewModel.parentContentTypesPath.length;
                if (currentArrLength > 0) {
                    if (moduleApp.viewModel.parentContentTypesPath[currentArrLength - 1] !== e.data.Id) {
                        moduleApp.viewModel.parentContentTypesPath.push(e.data.Id);
                    }
                }
                else {
                    moduleApp.viewModel.parentContentTypesPath.push(e.data.Id);
                    moduleApp.viewModel.originalContentIds.push({});
                }
                if (this.type && this.type.Id != e.data.Id) {
                    //clear fields
                    this.set('type', { Fields: [] });
                    this.set('type', e.data);
                    this.set('showSearchBar', false);
                    this.set('searchCriteria', '');
                    this.set('refreshScroller', true);
                    that.bindMasterView(e.data);
                }
                else {
                    this.set('refreshScroller', false);
                    that.app.navigate('#tabstrip-master-view');
                }
            },
            bindingMasterView: function (e) {
                e.sender.items().remove();
                if (this.refreshScroller) {
                    e.sender._bindScroller();
                    e.sender._scroller().scrollTo(0, 0);
                }
            },
            bindDetailsView: function (e) {
                //get parentItem Id
                var dataFieldType = $(e.target).get(0).getAttribute('data-option');
                if (dataFieldType == 'getDetails') {
                    moduleApp.viewModel.bindHierarchicalTypeDetailsView(e);
                    moduleApp.viewModel.set('parentTypeName', moduleApp.viewModel.type.Name);
                    moduleApp.viewModel.parentTypeNames.push(moduleApp.viewModel.type.Name);
                }
                else {
                    var parentItemId = e.dataItem.OriginalContentId,
                    currentType = moduleApp.viewModel.type;
                    moduleApp.viewModel.set('parentTypeName', moduleApp.viewModel.type.Name);
                    moduleApp.viewModel.parentTypeNames.push(moduleApp.viewModel.type.Name);
                    if (moduleApp.viewModel.originalContentIds[moduleApp.viewModel.originalContentIds.length - 1] !== parentItemId && moduleApp.viewModel.originalContentIds.length > 0) {
                        moduleApp.viewModel.originalContentIds.push(parentItemId);
                    }
                    //check if this type hasChild;
                    if (currentType.ChildTypeId !== "" && currentType.ChildTypeId !== moduleApp.emptyGuid && currentType.ChildTypeId !== undefined) {
                        moduleApp.viewModel.set('currentParentId', parentItemId);
                        var types = moduleApp.viewModel.application.Types;
                        var tempType = $.grep(types, function (n, i) {
                            return (n.Id === currentType.ChildTypeId);
                        });
                        e.data = tempType[0];
                        moduleApp.viewModel.bindMasterView(e);
                    }
                    else {
                        ShowLoading();
                        if (this.item.Id === e.dataItem.Id) {
                            //force refresh
                            var blankItem = kendo.observable(JSON.parse(this.type.BlankItem));
                            that.repository.processDataItem(blankItem, this.type);
                            this.set('item', blankItem);
                        }
                        that.repository.clearImageCache();
                        that.repository.clearTagsCache();
                        this.set('item', e.dataItem);
                        $.when(that.app.navigate('#tabstrip-details-view')).done(function () {
                            HideLoading();
                        });
                    }
                }
            },
            bindHierarchicalTypeDetailsView: function (e) {
                ShowLoading();
                if (this.item.Id === e.dataItem.Id) {
                    //force refresh
                    var blankItem = kendo.observable(JSON.parse(this.type.BlankItem));
                    that.repository.processDataItem(blankItem, this.type);
                    this.set('item', blankItem);
                }
                that.repository.clearImageCache();
                that.repository.clearTagsCache();
                this.set('item', e.dataItem);
                $.when(that.app.navigate('#tabstrip-details-view')).done(function () {
                    HideLoading();
                });
            },
            edit: function (e) {
                e.preventDefault();
                that.app.navigate('#tabstrip-edit-view');
            },
            destroy: function (e) {
                navigator.notification.confirm(
                    'Do you want to delete this item?',
                    function (confirmed) {
                        if (confirmed === true || confirmed === 1) {
                            that.app.showLoading();
                            that.viewModel.dataSource.remove(that.viewModel.item);
                            that.viewModel.dataSource.sync();
                        }
                    },
                    'Delete',
                    'Delete,Cancel'
                    );
            },
            save: function (e) {
                e.preventDefault();
                if (this.dataSource.hasChanges()) {
                    if (moduleApp.validator.validate()) {
                        that.app.showLoading();
                        this.dataSource.sync();
                    }
                }
                else {
                    that.app.navigate('#tabstrip-details-view');
                }
            },
            cancel: function (e) {
                e.preventDefault();

                var item, blankItem = kendo.observable(JSON.parse(this.type.BlankItem));
                this.dataSource.cancelChanges(this.item);
                this.dataSource.sync();
                if (this.item.isNew()) {
                    that.app.navigate('#tabstrip-master-view');
                }
                else {
                    //force refresh
                    item = $.extend({}, this.item);
                    that.repository.processDataItem(blankItem, this.type);
                    this.set('item', blankItem);
                    this.set('item', item);

                    that.app.navigate('#tabstrip-details-view');
                }
            },
            add: function (e) {
                e.preventDefault();
                that.repository.clearTagsCache();
                var blankItem = this.dataSource.add();
                that.repository.processDataItem(blankItem, this.type);
                this.set('item', blankItem);
                if (that.viewModel.currentParentId.length > 1) {
                    that.viewModel.item.SystemParentId = that.viewModel.currentParentId
                }
                that.app.navigate('#tabstrip-edit-view');
            },
            bindRecentMasterItems: function (e) {
                that.mode = 1;
                that.bindMaster(this.type);
            },
            bindNearestMasterItems: function (e) {
                that.mode = 0;
                that.bindMaster(this.type);
            },
            back: function (e) {
                e.preventDefault();
                that.viewModel.parentTypeNames.pop();
                if (that.viewModel.parentTypeNames.length > 0) {
                    that.viewModel.set('parentTypeName', that.viewModel.parentTypeNames[that.viewModel.parentTypeNames.length - 1]);
                }

                if (moduleApp.viewModel.parentContentTypesPath.length > 1) {
                    //bindMasterView to parent type and pop the element on the top of the array
                    that.viewModel.parentContentTypesPath.pop();
                    that.viewModel.originalContentIds.pop();
                    var types = that.viewModel.application.Types,
                    currentParentIdIndex = that.viewModel.parentContentTypesPath.length - 1,
                    newTypeId = that.viewModel.parentContentTypesPath[currentParentIdIndex]
                    tempType = $.grep(types, function (n, i) {
                        return (n.Id === newTypeId);
                    });
                    if (currentParentIdIndex > 0) {
                        that.viewModel.set('currentParentId', that.viewModel.originalContentIds[currentParentIdIndex]);
                    }
                    else {
                        that.viewModel.set('currentParentId', '');
                    }
                    e.data = tempType[0];
                    that.viewModel.bindMasterView(e);
                }
                else {
                    that.app.navigate('#tabstrip-application-types');
                    that.viewModel.set('parentContentTypesPath', []);
                    that.viewModel.set('originalContentIds', []);
                    that.viewModel.currentParentId = '';
                }
            },
            close: function (e) {
                e.preventDefault();
                that.viewModel.parentTypeNames.pop();
                that.viewModel.set('parentTypeName', moduleApp.viewModel.parentTypeNames[moduleApp.viewModel.parentTypeNames.length - 1])
                that.app.navigate('#tabstrip-master-view');
            },

            /* HTML Editor */
            showLongTextFieldEditor: function (e) {
                e.preventDefault();
                var src, value = '',
                fieldName = $(e.currentTarget).attr("data-field-name");
                if (this.item.hasOwnProperty(fieldName)) {
                    src = this.item[fieldName];
                    if (src) {
                        value = src;
                        if (value.hasOwnProperty("PersistedValue")) {
                            value = value["PersistedValue"];
                        }
                    }
                }
                var editorContainer = $("#tabstrip-edit-longTextField").find("#editor");
                $(editorContainer).attr("data-field-name", fieldName);
                //TODO: set z-index of view
                $('#tabstrip-edit-longTextField').css('z-index', 500);
                $.when(that.app.navigate('#tabstrip-edit-longTextField', 'overlay:up')).done(function () {
                    if (that.htmlEditor) {
                        that.htmlEditor.value(value);
                    }
                });
            },
            backFromLongTextFieldEditorToEditView: function (e) {
                e.preventDefault();
                var editorContainer = $("#tabstrip-edit-longTextField").find("#editor");
                var fieldName = $(editorContainer).attr("data-field-name");
                if (that.htmlEditor) {
                    var value = that.htmlEditor.value();
                    if (this.item.hasOwnProperty(fieldName)) {
                        src = this.item[fieldName];
                        if (typeof src !== 'undefined') {
                            if (src && src.hasOwnProperty('PersistedValue')) {
                                this.item.set(fieldName, { PersistedValue: value });
                            }
                            else {
                                this.item.set(fieldName, value);
                            }
                            moduleApp.viewModel.item.dirty = true;
                        }
                    }
                }
                that.app.navigate('#tabstrip-edit-view', 'overlay:up reverse');
            },
            /* Side Menu */
            openSideMenu: function (e) {
                event.stopImmediatePropagation();
                e.preventDefault();
                that.openSideMenu();
                e.sender.view().wrapper.one('touchend', that.closeSideMenu);
            },
            closeSideMenu: function (e) {
                e.preventDefault();
                that.closeSideMenu();
            },
            refreshMasterViewItems: function (e) {
                e.preventDefault();
                this.dataSource._page = 0;
                this.dataSource._skip = 0;
                that.repository.updateDataSource(that, this.dataSource);
                this.dataSource.read();
            },
            clearSearchCriteria: function (e) {
                e.preventDefault();
                this.set('searchCriteria', '');
                this.dataSource._page = 0;
                this.dataSource._skip = 0;
                that.repository.updateDataSource(that, this.dataSource);
                this.dataSource.read();
            },
            editorViewInit: function (e) {
                moduleApp.validator = $(e.sender.element).kendoValidator(
                    {
                    rules: {
                            mindate: function (input) {
                                var dateFormat, minDate, date;
                                if (input.filter('[type=datetime]').filter("[mindate]").length && input.val() !== '' && input.attr("mindate").length > 0) {
                                    dateFormat = input.attr('data-format');
                                    minDate = kendo.parseDate(input.attr("mindate"), 'd/M/yyyy');
                                    date = kendo.parseDate(input.val(), dateFormat);
                                    return date >= minDate;
                                }
                                return true;
                            },
                            maxdate: function (input) {
                                var dateFormat, maxDate, date;
                                if (input.filter('[type=datetime]').filter("[maxdate]").length && input.val() !== '' && input.attr("maxdate").length > 0) {
                                    dateFormat = input.attr('data-format');
                                    maxDate = kendo.parseDate(input.attr("maxdate"), 'd/M/yyyy');
                                    date = kendo.parseDate(input.val(), dateFormat);
                                    return date <= maxDate;
                                }
                                return true;
                            }
                        },
                    messages: {
                            mindate: function (input) {
                                return '{0} should be greater than or equal to {1}';
                            },
                            maxdate: function (input) {
                                return '{0} should be smaller than or equal to {1}';
                            }
                        }
                }).data('kendoValidator');
            },
            editViewBeforeShow: function (e) {
                if (moduleApp.viewModel.hasLongTextField && moduleApp.htmlEditor == null) {
                    moduleApp.htmlEditor = $("#tabstrip-edit-longTextField").find("#editor").kendoEditor({
                        tools: [
                            "formatBlock",
                            "bold",
                            "italic",
                            "underline",
                            "justifyFull"
                        ]
                    }).data('kendoEditor');
                }
            },
            goToSitefinityBox: function (e) {
                e.preventDefault();
                that.goToSitefinityBox();
            },
            /* Settings */
            goToSettings: function (e) {
                e.preventDefault();
                that.goToSettings();
            },
            onAllowAccessChange: function (e) {
                e.preventDefault();
                that.onAllowAccessChange();
            },

            /* Documents */
            bindDocumentDetailView: function (e) {
                moduleApp.repository.loadDocument(e.data, moduleApp.userData.website, function (src) {
                    if (device.platform === 'Android') {
                        var gap = window.cordova || window.Cordova || window.PhoneGap;
                        gap.exec(null, function (e) {
                            if (e === 'Class not found') {
                                //ChildBrowser plugin is not activated
                                //let's try to use InAppBrowser
                                window.open(src.MediaUrl, '_blank', 'location=no');
                            }
                            else {
                                showAlert('Download failed', 'Error occurred');
                            }
                        }, "ChildBrowser", "openExternal", [src.MediaUrl, false]);
                    }
                    else {
                        window.open(src.MediaUrl, '_blank', 'location=no');
                    }
                });
            },
            bindDocumentEditView: function (e) {
                moduleApp.repository.loadDocument(e.data, moduleApp.userData.website, function (src) {
                    if (that.Files.Documents.current.Id === src.Id) {
                        //force refresh
                        that.Files.Documents.current = {};
                    }
                    that.Files.Documents.current = src;
                    that.app.showLoading();
                    that.app.navigate('#edit-document');
                    that.app.hideLoading();
                });
            },
            bindDocumentAddView: function (e) {
                var reader = fileSystem.root.createReader();
                reader.readEntries(
                    function (entries) {
                        that.documentEntries = entries;
                        that.app.navigate('#add-document');
                    }, function (err) {
                    });
            },
            getDocumentsSource: function (e) {
                return that.documentEntries;
            },
            addDocument: function (e) {
                e.preventDefault();
                that.app.navigate('#tabstrip-edit-view');
            },
            deleteDocument: function (e) {
                that.Files.Documents.deleteCurrent();
            },

            /* Address */
            address: {
                countries: countries,
                states: [],
                showStatesSelector: false,
                showMap: false,
                showForm: false,
                currentFieldName: '',
                addressItem: '',
                previousUrl: {
                    address: '',
                    done: '',
                    cancel: ''
                },
                editView: {
                    back: function () {
                        //force update
                        moduleApp.viewModel.item.dirty = true;
                        that.app.navigate('#tabstrip-edit-view');
                    },
                    goToAddress: function (e) {
                        var that = this;
                        var item = this.get('item'),
                        addressFieldMode = $(e.currentTarget).attr('data-address-field-mode'),
                        fieldName = $(e.currentTarget).attr('data-field-name'),
                        addressContainer = $('#tabstrip-edit-address [data-field-type="AddressContainer"]'),
                        mapContainer = $('#tabstrip-edit-address [data-field-type="AddressMap"]'),
                        addressItem, countryCode;
                        moduleApp.viewModel.address.currentFieldName = fieldName;
                        var bindField = function () {
                            var map;
                            switch (addressFieldMode) {
                                case '0':
                                    countryCode = moduleApp.repository.getCountryCode(addressItem, fieldName);
                                    moduleApp.viewModel.address.changeCountry({ target: { value: countryCode || moduleApp.viewModel.address.countries[0].IsoCode } });
                                    kendo.bind(addressContainer.children(), addressItem);
                                    that.address.set('showMap', false);
                                    that.address.set('showForm', true);
                                    break;
                                case '1':
                                    map = moduleApp.getAddress(fieldName);
                                    that.address.set('showMap', true);
                                    that.address.set('showForm', false);
                                    mapContainer.html(map);
                                    break;
                                case '2':
                                    countryCode = moduleApp.repository.getCountryCode(addressItem, fieldName);
                                    moduleApp.viewModel.address.changeCountry({ target: { value: countryCode || moduleApp.viewModel.address.countries[0].IsoCode } });
                                    kendo.bind(addressContainer.children(), addressItem);
                                    map = moduleApp.getAddress(fieldName);
                                    that.address.set('showMap', true);
                                    that.address.set('showForm', true);
                                    mapContainer.html(map);
                                    break;
                            }
                        };
                        if (item && item.hasOwnProperty(fieldName)) {
                            that.address.previousUrl.set('address', window.location.hash);
                            moduleApp.repository.prepareEditAddressFieldTemplate($('#tabstrip-edit-address-field [data-address-field]'), fieldName);
                            $('#tabstrip-edit-address-field div').attr('data-field-name', fieldName);
                            if (!item[fieldName]) {
                                item.set(fieldName, moduleApp.repository.blankAddress);
                                moduleApp.repository.prepareAddressField(item, fieldName, addressFieldMode);
                            }
                            addressItem = moduleApp.repository.addressItem(item, fieldName);
                            moduleApp.viewModel.address.addressItem = addressItem || '';
                            $.when(moduleApp.app.navigate('#tabstrip-edit-address')).done(bindField);
                        }
                    }
                },
                refreshMap: function () {
                    var map = that.getAddress(that.viewModel.address.currentFieldName);
                    $('#tabstrip-edit-address-field li.addr-map-element div').html(map);
                },
                back: function () {
                    that.viewModel.address.refreshMap();
                    that.app.navigate('#:back');
                },

                showInMap: function (e) {
                    if ($(e.srcElement).is('div') || $(e.srcElement).is('img')) {
                        var fieldName = $(e.srcElement).parent().attr('data-field-name');
                        if (fieldName) {
                            moduleApp.viewModel.address.previousUrl.set('address', window.location.hash);
                            that.showInMap(fieldName, false);
                        }
                    }
                },

                changeCountry: function (e) {
                    if (states[e.target.value]) {
                        moduleApp.viewModel.address.set('states', states[e.target.value]);
                        moduleApp.viewModel.address.set('showStatesSelector', true);
                    }
                    else {
                        moduleApp.viewModel.address.set('states', []);
                        moduleApp.viewModel.address.set('showStatesSelector', false);
                        moduleApp.repository.clearStateCode(e.data, moduleApp.viewModel.address.currentFieldName);
                        if ((e.target.selectedIndex !== undefined) && (moduleApp.viewModel.address.showMap)) {
                            moduleApp.viewModel.address.changeAddress(e);
                        }
                    }
                },

                changeState: function (e) {
                    if ((e.target.selectedIndex !== undefined) && (moduleApp.viewModel.address.showMap)) {
                        moduleApp.viewModel.address.changeAddress(e);
                    }
                },

                changeAddress: function (e) {
                    var address = '',
                    addressField = moduleApp.viewModel.item[moduleApp.viewModel.address.currentFieldName],
                    country = $($(e.target.parentElement.parentElement).find('[data-address-field="CountryCode"]').get(0)).children(':selected').text(),
                    state = $($(e.target.parentElement.parentElement).find('[data-address-field="StateCode"]').get(0)).children(':selected').text();
                    zip = '',
                    street = '',
                    city = '';

                    if (moduleApp.repository.fieldSeparator === ".") {
                        zip = addressField.Zip || '';
                        street = addressField.Street || '';
                        city = addressField.City || '';
                    }
                    else {
                        zip = moduleApp.viewModel.item[moduleApp.viewModel.address.currentFieldName + moduleApp.repository.fieldSeparator + "Zip"] || '';
                        street = moduleApp.viewModel.item[moduleApp.viewModel.address.currentFieldName + moduleApp.repository.fieldSeparator + "Street"] || '';
                        city = moduleApp.viewModel.item[moduleApp.viewModel.address.currentFieldName + moduleApp.repository.fieldSeparator + "City"] || '';
                    }
                    state = state || '';
                    country = country || '';

                    //zip, street, city state, country
                    address = zip + ', ' + street + ',' + city + ' ' + state + ',' + country;
                    moduleApp.viewModel.address.findAddress(address);
                },

                findAddress: function (address) {
                    var response = { status: '', result: '' },
                    geocoder = new google.maps.Geocoder(),
                    bindAddressField = function (addressLoc) {
                        var addressObject = addressLoc.result,
                        latitudeField = moduleApp.repository.latitudeField,
                        longitudeField = moduleApp.repository.longitudeField;
                        if (addressObject !== '') {
                            moduleApp.viewModel.item[moduleApp.viewModel.address.currentFieldName][latitudeField] = addressObject[Object.keys(addressObject)[0]];
                            moduleApp.viewModel.item[moduleApp.viewModel.address.currentFieldName][longitudeField] = addressObject[Object.keys(addressObject)[1]];
                            moduleApp.viewModel.address.refreshMap();
                        }
                    },
                    bindAddressLocation = function (addressLoc) {
                        switch (addressLoc.status) {
                            case "ZERO_RESULTS", "OVER_QUERY_LIMIT":
                                break;
                            case "OK":
                                bindAddressField(addressLoc);
                                break;
                        }
                    };

                    geocoder.geocode({ 'address': address }, function (results, status) {
                        if (results[0] !== undefined && results[0].hasOwnProperty('geometry')) {
                            response.status = status;
                            response.result = results[0].geometry.location || '';
                            bindAddressLocation(response);
                        }
                    });
                },
            },

            /* Images */
            image: {
                previousUrl: {
                    image: '',
                    done: '',
                    cancel: ''
                },
                footer: {
                    isVisible: false
                },
                destroy: function (e) {
                    var scrollView = $("#PictureView").data("kendoMobileScrollView"),
                    page = scrollView.page,
                    fieldName = moduleApp.viewModel.clickedImageFieldName,
                    selectedPage = $(scrollView.wrapper).find("[data-role='page']")[scrollView.page],
                    selectedImageId = $(selectedPage).find('img').attr('data-field-id');

                    if (page !== 'NaN' && fieldName !== undefined && fieldName !== '') {
                        var value = $.grep(moduleApp.viewModel.item.get(fieldName), function (n, i) {
                            return n.ChildItemId !== selectedImageId;
                        });
                        moduleApp.viewModel.item.set(fieldName, new kendo.data.ObservableArray(value));
                        moduleApp.app.navigate(moduleApp.viewModel.image.previousUrl.image);
                    }
                },
                get: function () {
                    var item = this.item,
                    src = item[this.clickedImageFieldName];
                    return src ? src : kendo.observable([]);
                },
                clickedImage: function (e) {
                    this.clickedImageFieldName = e.sender.element.attr('data-field-name');
                    this.set('imageFieldSource', this.item.get(this.clickedImageFieldName));
                    this.clickedImageAllowMultiple = e.sender.element.attr('data-field-allowmultiple');
                    moduleApp.viewModel.image.previousUrl.image = window.location.hash;
                    $(e.sender.element.attr('href')).data("kendoMobileActionSheet").open();
                },
                slideShow: function (e) {
                    moduleApp.viewModel.image.previousUrl.set('done', window.location.hash);
                    var item = moduleApp.viewModel.get('item'),
                    fieldName = $(e.currentTarget).parent().parent().attr('data-field-name'),
                    footerVisibility = $(e.currentTarget).parent().parent().attr('data-field-footer');

                    this.clickedImageFieldName = fieldName;
                    this.set('imageFieldSource', this.item.get(this.clickedImageFieldName));

                    if (footerVisibility !== undefined && footerVisibility === "false") {
                        moduleApp.viewModel.image.footer.set('isVisible', false);
                    }
                    else {
                        moduleApp.viewModel.image.footer.set('isVisible', true);
                    }

                    if (item && item.hasOwnProperty(fieldName)) {
                        if (item[fieldName]) {
                            $.when(that.app.navigate('#tabstrip-gallery-slideshow')).done(function () {
                                var template = kendo.template($("#slideshowViewTemplate").html()),
                                content = kendo.render(template, item[fieldName]);
                                if (typeof $("#PictureView").data("kendoMobileScrollView") === "object") {
                                    var scrollView = $("#PictureView").data("kendoMobileScrollView");
                                    scrollView.content($.trim(content));
                                    var pageIndex = $("#PictureView>div [data-role='page']>[data-field-id='" + e.data.ChildItemId + "']").index("#PictureView>div [data-role='page']>img");
                                    pageIndex = pageIndex ? pageIndex : 0;
                                    scrollView.refresh();
                                    scrollView.scrollTo(pageIndex);
                                }
                                else {
                                    var scrollView = $("#PictureView")
                                    .kendoMobileScrollView()
                                    .data("kendoMobileScrollView");
                                    scrollView.content($.trim(content));
                                    var pageIndex = $("#PictureView>div [data-role='page']>[data-field-id='" + e.data.ChildItemId + "']").index("#PictureView>div [data-role='page']>img");
                                    pageIndex = pageIndex ? pageIndex : 0;
                                    scrollView.scrollTo(pageIndex);
                                }
                            });
                        }
                    }
                },
                cancel: function (e) {
                    e.preventDefault();
                    var previousUrl = moduleApp.viewModel.image.previousUrl.cancel;
                    if (previousUrl) {
                        moduleApp.app.navigate(previousUrl);
                    }
                    else {
                        that.app.navigate('#tabstrip-details-view');
                    }
                },
                save: function (e) {
                    e.preventDefault();
                    that.app.navigate('#tabstrip-edit-view');
                },
                done: function (e) {
                    e.preventDefault();
                    var previousUrl = moduleApp.viewModel.image.previousUrl.done;
                    if (previousUrl) {
                        moduleApp.app.navigate(previousUrl);
                    }
                    else {
                        that.app.navigate('#tabstrip-details-view');
                    }
                },
                choose: function (e) {
                    that.Files.Images._getPhotoFromLibrary.apply(that, arguments);
                },
                capture: function (e) {
                    that.Files.Images._capturePhoto.apply(that, arguments);
                },
                upload: function () {
                    that.app.showLoading();

                    var images = that.Files.Images;
                    moduleApp.repository.upload(moduleApp, that.viewModel.imageSource, images._contentType, images.providerName, images.libraryId, that.viewModel.image.fail, that.viewModel.image.success);
                },
                fail: function (error) {
                    moduleApp.app.hideLoading();

                    switch (error.http_status) {
                        case 401, 403:
                            confirm("User logged out or session expired! Click 'OK' to navigate to home page and login.");
                            moduleApp.app.navigate('#tabstrip-home');
                            break;
                        default:
                            this.set("errorMessage", error);
                    }

                    switch (error.code) {
                        case 1:
                            //error.FILE_NOT_FOUND_ERR
                            showAlert('This file was not found.', 'Error occurred');
                            moduleApp.app.navigate('#tabstrip-home');
                            brek;
                        case 2:
                            //error.INVALID_URL_ERR
                            showAlert('Check again your connection.', 'Error occurred');
                            moduleApp.app.navigate('#tabstrip-home');
                            brek;
                        case 3:
                            //error.CONNECTION_ERR
                            showAlert('Check again your connection.', 'Error occurred');
                            moduleApp.app.navigate('#tabstrip-home');
                            brek;
                    }
                },
                success: function (currentField) {
                    moduleApp.app.hideLoading();
                    var fieldName = moduleApp.viewModel.clickedImageFieldName;

                    if (moduleApp.viewModel.item.hasOwnProperty(fieldName)) {
                        if (typeof moduleApp.viewModel.item[fieldName] !== "object") {
                            moduleApp.viewModel.item.set(fieldName, new kendo.data.ObservableArray([]));
                            currentField.Ordinal = 0;
                        }
                        else {
                            currentField.Ordinal = moduleApp.viewModel.item[fieldName].length;
                        }

                        if (moduleApp.viewModel.clickedImageAllowMultiple === 'false') {
                            moduleApp.viewModel.item.set(fieldName, new kendo.data.ObservableArray([]));
                            moduleApp.viewModel.item.get(fieldName).push(currentField);
                            moduleApp.viewModel.set('imageFieldSource',
                                                    moduleApp.viewModel.item.get(moduleApp.viewModel.clickedImageFieldName));
                        }
                        else {
                            moduleApp.viewModel.item.get(fieldName).push(currentField);
                            moduleApp.viewModel.set('imageFieldSource',
                                                    moduleApp.viewModel.item.get(moduleApp.viewModel.clickedImageFieldName));
                            moduleApp.viewModel.item.dirty = true;
                        }
                    }
                },
                getCachedUri: function (source) {
                    return moduleApp.repository.getCachedImageUri(source);
                },
                getCachedThumbnailUri: function (source) {
                    moduleApp.repository.getCachedImageThumbnailUri(source);
                }
            },

            /* Taxonomies */
            taxonomy: {
                flat: {
                    classificationData: '',
                    searchCriteria: '',
                    dataSource: new kendo.data.DataSource({}),
                    setSelected: function (e) {
                        e.preventDefault();
                        ShowLoading();
                        var taxonId = e.dataItem.Id,
                        fieldName = e.dataItem.TaxonomyName,
                        values = moduleApp.viewModel.item.get(fieldName);
                        moduleApp.repository.clearTagsCache();
                        if ($.inArray(taxonId, values) === -1) {
                            values.push(taxonId);
                        }
                        $.when(moduleApp.app.navigate("#tabstrip-edit-view")).done(function () {
                            HideLoading();
                        });
                    },
                    applySearch: function (e) {
                        e.preventDefault();
                        moduleApp.repository.taxonomy.flat.applySearch(moduleApp);
                    },
                    clearSearchCriteria: function (e) {
                        e.preventDefault();
                        moduleApp.viewModel.taxonomy.flat.set('searchCriteria', '');
                        moduleApp.repository.taxonomy.flat.applySearch(moduleApp);
                    },
                    navigate: function (e) {
                        e.preventDefault();
                        moduleApp.app.navigate("#tabstrip-flat-taxon");
                        var classificationData = $(e.sender.element).attr('data-field-classification');
                        moduleApp.viewModel.taxonomy.flat.classificationData = classificationData;
                        moduleApp.repository.taxonomy.flat.getDataSource(moduleApp, classificationData, function (ds) {
                            moduleApp.viewModel.taxonomy.flat.set('dataSource', ds);
                            moduleApp.viewModel.taxonomy.flat.dataSource.sync();
                        });
                    },
                    back: function (e) {
                        e.preventDefault();
                        moduleApp.app.navigate("#tabstrip-edit-view");
                    },
                    destroy: function (e) {
                        e.preventDefault();
                        var id = $(e.currentTarget).attr('data-field-taxonid'),
                        fieldName = $(e.currentTarget).attr('data-field-name');

                        var value = $.grep(moduleApp.viewModel.item.get(fieldName), function (val, i) {
                            return val !== id;
                        });
                        moduleApp.repository.clearTagsCache();
                        moduleApp.viewModel.item.set(fieldName, new kendo.data.ObservableArray(value));
                    },
                    getData: function (fieldName, classificationData, success) {
                        if (fieldName) {
                            moduleApp.viewModel.taxonomy.flat.classificationData = classificationData;
                            moduleApp.repository.taxonomy.flat.getData(moduleApp, fieldName, classificationData, function (data) {
                                var tags = [];
                                $.each(data, function (index, value) {
                                    tags.push({ Id: value.Id, Title: value.Title, FieldName: fieldName });
                                });
                                if (typeof success == 'function') {
                                    success(tags);
                                }
                            });
                        }
                    }
                },
                hierarchical: {
                    get: function (fieldName) {
                        var item = this.get('item'),
                        id = item[fieldName];

                        var hierarchicalTaxonService = this.userData.website + '/Sitefinity/Services/Taxonomies/HierarchicalTaxon.svc/' + id + '/?mode=Simple&hierarchyMode=true&sortExpression=Title'

                        $.sitefinityAjax({
                            type: 'GET',
                            url: hierarchicalTaxonService,
                            dataType: 'json',
                            contentType: 'application/json; charset=utf-8',
                            success: function (data) {
                                return data.Title;
                            }
                        });
                        return '';
                    }
                }
            },
            getMediaDataSource: function (fieldName) {
                var item = this.get('item'),
                src = item[fieldName];

                return src ? src : kendo.observable([]);
            },

            //pull to refresh
            initPullToRefreshScroller: function (e) {
                var scroller = e.view.scroller;
                scroller.setOptions({
                    pullToRefresh: true,
                    pull: function () {
                        moduleApp.app.showLoading();
                        moduleApp.viewModel.set('showSearchBar', true);
                        moduleApp.viewModel.dataSource.read();
                        setTimeout(function () {
                            scroller.pullHandled();
                        }, 100);
                    }
                });
            }
        });
        $.event.trigger({ type: 'moduleAppReady' });
    },

    setCurrentGeoLocationPosition: function () {
        var that = this;

        // get current postion
        if (window.navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                that.position = position;
            });
        }
    },

    initializeAddressFields: function () {
        countries.unshift({ 'Name': '-- Select a Country --', 'IsoCode': "" });
        $.each(states, function (index, value) {
            states[index].unshift({ 'Abbreviation': "", 'Name': "-- Select a State --" });
        });
    },

    loadApplication: function (userData, moduleApp, providerName, callback, onerror) {
        var that = this,
        repositoryName = moduleApp.EverliveAPIKey ? 'everlive' : 'sitefinity';

        if (moduleApp.GoogleAPIKey && !that.googleScriptLoaded) {
            that.googleAPIKey = moduleApp.GoogleAPIKey;
            $.getScript('http://maps.google.com/maps/api/js?sensor=true&async=2&callback=moduleApp.mapApiLoaded&key=' + moduleApp.GoogleAPIKey, function () {
                that.googleScriptLoaded = true;
            }, function (statusText) {
                that.googleScriptLoaded = false;
            });
        }

        this.providerName = providerName;
        this.repository = getRepository(repositoryName, moduleApp.EverliveAPIKey, moduleApp.EverliveServiceUrl, moduleApp.EverliveServiceSchema, moduleApp.EverliveRealm);
        this.repository.loadApplication(moduleApp, userData, function (response) {
            that.processApplicationMetadata(response, that.typeNames);
            that.viewModel.set('application', response);
            that.viewModel.set('rootTypes', that.getRootTypes(response.Types));
            that.viewModel.set('isEditable', response.AppMode === 1);
            that.viewModel.set('EnableGeoLocationSearch', response.EnableGeoLocationSearch);
            that.getAllowAccessSettings(response.Id);
            if (typeof callback === 'function') {
                callback(response);
            }
        }, onerror);
    },

    mapApiLoaded: function () {
        this.googleScriptLoaded = true;
    },

    logOut: function () {
        var that = this;
        this.repository.logOut(this, function () {
            that.userData.accessToken = '';
            that.app.navigate('#tabstrip-home');
            that.app.hideLoading();
        }, function () {
            showAlert(
                'Error logging out!',
                'Log In'
                );
        });
    },

    bindMasterView: function (type) {
        this.type = type;
        this.viewModel.set('showRecentNearestOptions', this.getAddressFieldName(type) != '' && this.viewModel.get('EnableGeoLocationSearch'));
        this.checkIfHasLongTextField(this.type);
        this.bindMaster(this.type);
    },

    checkIfHasLongTextField: function (type) {
        moduleApp.viewModel.hasLongTextField = false;
        $.each(type.Fields, function (index, field) {
            if (field.TypeName == "LongText") {
                moduleApp.viewModel.hasLongTextField = true;
            }
        });
    },

    bindMaster: function (type) {
        var that = this,
        eventName,
        dataSource = this.repository.getTypeDataSource(that, type, function (e) {
            switch (e.type) {
                case 'read':
                    eventName = 'afterRead';
                    break;
                case 'create':
                    that.viewModel.item.accept(e.response.Item);
                    that.app.navigate('#tabstrip-master-view');
                    eventName = 'afterCreate';
                    break;
                case 'update':
                    that.viewModel.item.accept(e.response.Item);
                    that.app.navigate('#tabstrip-master-view');
                    eventName = 'afterUpdate';
                    break;
                case 'destroy':
                    that.app.navigate('#tabstrip-master-view');
                    eventName = 'afterDelete';
                    break;
            }
            that.Events._raiseEvent(eventName, e.response);
            that.app.hideLoading();
        }, function (e) {
            var errorMessage = that.errorMasterViewDataSource + e.errorThrown;
            if (e.xhr.status == 403 || e.xhr.status == 401) {
                errorMessage = that.errorMessage403;
                that.userData.accessToken = '';
                that.app.navigate('#tabstrip-home');
            }
            that.app.hideLoading();
            showAlert(
                errorMessage,
                'Log In'
                );
        });
        this.viewModel.set("dataSource", dataSource);
        dataSource.one("change",
                       function () {
                           that.app.navigate('#tabstrip-master-view');
                           that.viewModel.dataSource.sync();
                       });
        dataSource.read();
    },

    getModel: function (type) {
        var blankItem = JSON.parse(type.BlankItem),
        model = { 'id': 'Id', '_defaultId': this.emptyGuid, fields: {} };
        for (field in blankItem) {
            model.fields[field] = { 'defaultValue': blankItem[field] };
        }
        return kendo.data.Model.define(model);
    },

    getFieldViewTemplate: function (field) {
        var templateId,
        template = '';
        if (field.ArtificialField)
            return '';
        if (field.Name === this.viewModel.type.MainShortTextFieldName &&
            this.fieldsViewTemplatesMapping['MainShortText']) {
            templateId = this.fieldsViewTemplatesMapping['MainShortText'];
            template = kendo.Template.compile($('#' + templateId).html())(field);
        }
        else if (this.fieldsViewTemplatesMapping[field.TypeName]) {
            templateId = this.fieldsViewTemplatesMapping[field.TypeName];
            template = kendo.Template.compile($('#' + templateId).html())(field);
        }
        template = $.trim(template);
        var eventArgs = { 'Template': template, 'Field': field };
        this.Events._raiseEvent('viewFieldTemplateBuilding', eventArgs);
        return eventArgs.Template;
    },

    getFieldEditTemplate: function (field) {
        var templateId,
        template = '';
        if (field.ArtificialField)
            return '';
        if (field.Name === this.viewModel.type.MainShortTextFieldName &&
            this.fieldsEditTemplatesMapping['MainShortText']) {
            templateId = this.fieldsEditTemplatesMapping['MainShortText'];
            template = kendo.Template.compile($('#' + templateId).html())(field);
        }
        else if (this.fieldsEditTemplatesMapping[field.TypeName]) {
            templateId = this.fieldsEditTemplatesMapping[field.TypeName];
            template = kendo.Template.compile($('#' + templateId).html())(field);
        }
        template = $.trim(template);
        template = this.addFieldValidation(template, field);
        var eventArgs = { 'Template': template, 'Field': field };
        this.Events._raiseEvent('editFieldTemplateBuilding', eventArgs);
        return eventArgs.Template;
    },

    addFieldValidation: function (template, field) {
        var element = $('<div>').append($(template)),
        validationElement = element.find('[data-validation]'),
        pattern = '';
        if (validationElement && validationElement.length) {
            if (field.IsRequired) {
                validationElement.attr('required', 'required');
            }
            if (field.MinLength) {
                pattern = '.{' + field.MinLength + ',}'
                validationElement.attr('pattern', pattern);
            }
            if (field.MaxLength) {
                validationElement.attr('maxlength', field.MaxLength);
            }
            if (field.TypeName === 'Number') {
                if (field.MinValue !== undefined && field.MinValue !== null && field.MinValue.length > 0) {
                    validationElement.attr('min', field.MinValue);
                }
                if (field.MaxNumberRange !== undefined && field.MaxNumberRange !== null && field.MaxNumberRange.length > 0) {
                    validationElement.attr('max', field.MaxValue);
                }
            }
            else if (field.TypeName === 'DateTime') {
                if (field.MinValue !== undefined && field.MinValue !== null && field.MinValue.length > 0) {
                    validationElement.attr('mindate', field.MinValue);
                }
                if (field.MaxValue !== undefined && field.MaxValue !== null && field.MaxValue.length > 0) {
                    validationElement.attr('maxdate', field.MaxValue);
                }
            }
            if (field.RegularExpression) {
                validationElement.attr('pattern', field.RegularExpression);
            }
        }
        return $.trim(element.html());
    },

    updateUrlName: function (item, type) {
        var title = item[type.MainShortTextFieldName];
        if (title.hasOwnProperty('PersistedValue')) {
            title = title.PersistedValue;
        }
        item.UrlName.PersistedValue = title.toLowerCase().trim().replace(this.urlRegex, '-');
    },

    processApplicationMetadata: function (application, typeNames) {
        application.Types.forEach(function (type) {
            type.Fields.forEach(function (field) {
                field.TypeName = typeNames[field.FieldType];
            });
        });
    },

    getMainShortText: function (data) {
        var value = data[this.viewModel.type.MainShortTextFieldName];
        if (value && value.hasOwnProperty("PersistedValue")) {
            value = value["PersistedValue"];
        }
        return value;
    },
    
    getUserImage: function (data) {
        var url = "http://gartnerpcc.sitefinity.com/sitefinity/services/security/users.svc/" + data["LastModifiedBy"];
        var thumbnailUrl = this.authorData[data["Author"]];
        var author = data["Author"];
        if (thumbnailUrl == null) {
            $.sitefinityAjax(
                {

                url: url,
            
            
                success: function(userData) { 
                    thumbnailUrl = userData.AvatarThumbnailUrl;
                    $('*[data-author="' + author + '"] .user-icon').css('background-image', 'url("' + thumbnailUrl + '")');
                }
                
            
            
            });
        }
        this.authorData[data["Author"]] = thumbnailUrl;
        
        return thumbnailUrl;
    },

    goToSitefinityBox: function () {
        var that = this;
        moduleApp.viewModel.parentContentTypesPath = [];
        moduleApp.viewModel.originalContentIds = [];
        moduleApp.viewModel.parentTypeNames = [];
        moduleApp.viewModel.currentParentId = "";
        that.app.navigate('#tabstrip-applications');
    },

    /* Address Field*/
    showInMap: function (fieldName, draggable) {
        var that = this,
        mapCanvas = $('#map_canvas'),
        map = mapCanvas.gmap('get', 'map'),
        item = that.viewModel.get('item'),
        address = item[fieldName],
        latlng = new google.maps.LatLng(0, 0),
        latitudeField = this.repository.latitudeField,
        longitudeField = this.repository.longitudeField;

        if (address[latitudeField] && address[longitudeField]) {
            latlng = new google.maps.LatLng(address[latitudeField], address[longitudeField]);
            zoom = that.repository.addressProp(item, fieldName, 'MapZoomLevel') || 10;
        }

        if (typeof map !== "object") {
            map = mapCanvas.gmap(), setOptions({
                'zoomControlOptions': {
                    'position': google.maps.ControlPosition.LEFT_TOP
                }
            });
        }

        var panorama = map.getStreetView();
        panorama.setVisible(false);
        mapCanvas.gmap('clear', 'markers');

        var marker = mapCanvas.gmap('addMarker', {
            'position': latlng,
            'draggable': true,//draggable
            'bounds': false
        });

        marker.dragend(function (e) {
            item[fieldName].set(latitudeField, e.latLng.lat());
            item[fieldName].set(longitudeField, e.latLng.lng());
        });

        map.setOptions({
            'center': latlng,
            'zoom': zoom
        });

        that.app.navigate('#tabstrip-map');
    },

    getAddressFieldName: function (type) {
        for (var i = 0; i < type.Fields.length; i++) {
            if (type.Fields[i].FieldType == 13) {
                this.addressFieldName = type.Fields[i].Name;

                return this.addressFieldName;
            }
        }

        this.addressFieldName = '';
        return this.addressFieldName;
    },

    getAddress: function (fieldName) {
        this.setCurrentGeoLocationPosition();

        var mapImg = '';
        if (fieldName && this.googleScriptLoaded) {
            var item = this.viewModel.get('item'),
            address = item[fieldName],
            latitudeField = this.repository.latitudeField,
            longitudeField = this.repository.longitudeField;

            if (address) {
                if (address[latitudeField] === null || address[longitudeField] === null || address[latitudeField] === "" || address[longitudeField] === "") {
                    var lat = 0,
                    lng = 0;
                    if (moduleApp.position) {
                        lat = moduleApp.position.coords.latitude ? moduleApp.position.coords.latitude : 0;
                        lng = moduleApp.position.coords.longitude ? moduleApp.position.coords.longitude : 0;
                    }
                    else {
                        //set greenwich position
                        lat = 51.4788;
                        lng = 0.0106;
                    }
                    item[fieldName].set(latitudeField, lat);
                    item[fieldName].set(longitudeField, lng);
                    address = item[fieldName];
                }
                var zoom = this.repository.addressProp(item, fieldName, 'MapZoomLevel') || 8;
                // Use Google API to get a map of the current location
                var googleApis_map_Url = 'http://maps.googleapis.com/maps/api/staticmap?size=290x150&maptype=roadmap&zoom=' + zoom + '&sensor=true&key=' + moduleApp.googleAPIKey + '&markers=color:red%7C' + address[latitudeField] + ',' + address[longitudeField];
                mapImg = '<img src="' + googleApis_map_Url + '" />';
            }
        }
        return mapImg;
    },

    /* jQuery animations --- side menu animations --- */
    openSideMenu: function () {
        var sideMenu = $('#side-menu');
        if (sideMenu.is(":visible")) {
            this.closeSideMenu();
        }
        else {
            kendo.bind(sideMenu, this.viewModel);
            sideMenu.show();
            sideMenu.animate({ width: "80%" });
            $('div.km-view').animate({ 'margin-left': '80%' }, 400).delay(400).queue(function (next) {
                sideMenu.removeClass("hide-content");
                sideMenu.show();
                next();
            });
        }
    },

    closeSideMenu: function () {
        var sideMenu = $('#side-menu');
        if (sideMenu.is(":visible")) {
            sideMenu.animate({ width: "0px" }).addClass("hide-content");
            $('div.km-view').animate({ 'margin-left': '0px' }, 400).delay(400).queue(function (next) {
                sideMenu.removeClass("hide-content");
                sideMenu.hide();
                next();
            });
        }
    },
    

    

    /* Settings */
    goToSettings: function () {
        var that = this;
        that.app.navigate('#tabstrip-settings');
    },

    getAllowAccessSettings: function (applicationId) {
        var allowAccessObject = null,
        allowAccessValue = localStorage.getItem(applicationId);

        if (allowAccessValue) {
            try {
                allowAccessObject = JSON.parse(allowAccessValue);
            }
            catch (e) {
                allowAccessObject = null;
            }
            if (allowAccessObject) {
                this.viewModel.set("allowAccess", allowAccessObject);
            }
            else {
                allowAccessObject = this.viewModel.allowAccess;
                allowAccessObject.hasLocationAccess = true;
                allowAccessObject.hasPhotosAccess = true;
                allowAccessObject.hasContactsAccess = true;
                allowAccessObject.isErrorLoggingEnabled = true;
            }
        }
        else {
            allowAccessObject = this.viewModel.allowAccess;
            allowAccessObject.hasLocationAccess = true;
            allowAccessObject.hasPhotosAccess = true;
            allowAccessObject.hasContactsAccess = true;
            allowAccessObject.isErrorLoggingEnabled = true;
            var allowAccessControlString = JSON.stringify(allowAccessObject);
            localStorage.setItem(applicationId, allowAccessControlString);
        }
        this.viewModel.set("allowAccess", allowAccessObject);
    },

    setAllowAccessSettings: function (applicationId) {
        var that = this,
        allowAccessControlString = JSON.stringify(that.viewModel.allowAccess);

        localStorage.setItem(applicationId, allowAccessControlString);
    },

    onAllowAccessChange: function () {
        var that = this;
        that.setAllowAccessSettings(that.applicationId);
    },

    getChoiceText: function (value, fieldName) {
        var text = value,
        choices = [],
        field = $.grep(this.viewModel.type.Fields, function (item, index) {
            return item.Name === fieldName;
        });

        if (field && field.length > 0) {
            field = field[0];
        }

        choices = $.grep(field.Choices, function (item, index) {
            return (item.Value === value);
        });

        if (choices && choices.length > 0) {
            text = choices[0].Text;
        }
        return text;
    }
}

var moduleApp = new ModuleApp();

/* Kendo custom bindings*/
kendo.data.binders.shortText = kendo.data.Binder.extend({
    init: function (element, bindings, options) {
        //call the base constructor
        kendo.data.Binder.fn.init.call(this, element, bindings, options);

        var that = this;
        //listen for the change event of the element
        $(that.element).on("change", function () {
            that.change(); //call the change function
        });
    },
    refresh: function () {
        var binding = this.bindings['shortText'];
        var src = binding.source;
        var pathArr = [];
        if (binding.path) {
            pathArr = binding.path.split('.');
        }
        for (var i = 0; i < pathArr.length; i++) {
            var path = pathArr[i];
            if (src && src.hasOwnProperty(path)) {
                src = src[path];
            }
            else {
                src = undefined;
                break;
            }
        }
        var value = '';
        if (src) {
            value = src;
            if (value.hasOwnProperty("PersistedValue")) {
                value = value["PersistedValue"];
            }
        }
        var element = $(this.element);
        if (element.is('input') || element.is('textarea')) {
            $(this.element).val(value);
        }
        else {
            $(this.element).html(value);
        }
    },
    change: function () {
        var element = $(this.element);
        if (element.is('input') || element.is('textarea')) {
            var value = element.val();
            var binding = this.bindings['shortText'];
            var src = binding.source;
            var pathArr = [];
            if (binding.path) {
                pathArr = binding.path.split('.');
            }
            var path = '';
            var parent = src;
            for (var i = 0; i < pathArr.length; i++) {
                path = pathArr[i];
                if (src && src.hasOwnProperty(path)) {
                    parent = src;
                    src = src[path];
                }
                else {
                    src = undefined;
                    break;
                }
            }
            if (typeof src !== 'undefined') {
                if (src && src.hasOwnProperty('PersistedValue')) {
                    src.set('PersistedValue', value);
                }
                else {
                    parent.set(path, value);
                }
                moduleApp.viewModel.item.dirty = true;
            }
        }
    }
});

kendo.data.binders.choicesCheckBoxBinding = kendo.data.Binder.extend({
    init: function (element, bindings, options) {
        //call the base constructor
        kendo.data.Binder.fn.init.call(this, element, bindings, options);

        var that = this,
        element = $(this.element);
        //listen for the change event of the element
        element.on("change", function () {
            that.change(); //call the change function
        });

        element.find("input:checkbox").each(function (index) {
            currentSwitch = $(this).data("kendoMobileSwitch");
            if (currentSwitch === undefined) {
                currentSwitch = $(this).kendoMobileSwitch().data("kendoMobileSwitch");
            }
            currentSwitch.bind("change", function (e) {
                element.trigger('change');
            });
        });
    },
    refresh: function () {
        var binding = this.bindings['choicesCheckBoxBinding'],
        src = binding.source,
        element = $(this.element),
        pathArr = [],
        value, text, currentSwitch, checkBox;

        if (binding.path) {
            pathArr = binding.path.split('.');
        }
        for (var i = 0; i < pathArr.length; i++) {
            var path = pathArr[i];
            if (src && src.hasOwnProperty(path)) {
                src = src[path];
            }
            else {
                src = undefined;
                break;
            }
        }

        if (element.is('span')) {
            element.empty();
        }

        if (src) {
            if (src.length > 0) {
                for (var j = 0; j < src.length; j++) {
                    checkBox = src[j];
                    value = checkBox;
                    if (value.hasOwnProperty("PersistedValue")) {
                        value = value["PersistedValue"];
                    }
                    text = moduleApp.getChoiceText(value, path);

                    if (element.is('ul')) {
                        currentSwitch = element.find("input:checkbox[value=" + value + "]").data("kendoMobileSwitch");
                        if (currentSwitch === undefined) {
                            currentSwitch = element.find("input:checkbox[value=" + value + "]").kendoMobileSwitch().data("kendoMobileSwitch");
                        }
                        currentSwitch.check(true);
                    }
                    else {
                        text += "; ";
                        element.append(text);
                    }
                }
            }
            else {
                if (value === '') {
                    element.find("input:checkbox").each(function (index) {
                        currentSwitch = $(this).data("kendoMobileSwitch");
                        if (currentSwitch === undefined) {
                            currentSwitch = $(this).kendoMobileSwitch().data("kendoMobileSwitch");
                        }
                        currentSwitch.bind("change", function (e) {
                            element.trigger('change');
                        });
                        currentSwitch.check(false);
                    });
                }
            }
        }
    },
    change: function () {
        var binding = this.bindings['choicesCheckBoxBinding'],
        src = binding.source,
        pathArr = [],
        element = $(this.element),
        values, choiceValue, parent, path;

        if (element.is('ul')) {
            values = [];
            element.find("input:checkbox").each(function (index) {
                if ($(this).data("kendoMobileSwitch").check()) {
                    choiceValue = moduleApp.repository.getChoiceValue($(this).val());
                    values.push(choiceValue);
                }
            });

            if (binding.path) {
                pathArr = binding.path.split('.');
            }

            parent = src;
            for (var i = 0; i < pathArr.length; i++) {
                path = pathArr[i];
                if (src && src.hasOwnProperty(path)) {
                    parent = src;
                    src = src[path];
                }
                else {
                    src = undefined;
                    break;
                }
            }

            if (typeof parent !== 'undefined') {
                parent.set(path, values);
            }
        }
    }
});

kendo.data.binders.choicesDropDownBinding = kendo.data.Binder.extend({
    init: function (element, bindings, options) {
        //call the base constructor
        kendo.data.Binder.fn.init.call(this, element, bindings, options);

        var that = this;
        //listen for the change event of the element
        $(that.element).on("change", function () {
            that.change(); //call the change function
        });
    },
    refresh: function () {
        var binding = this.bindings['choicesDropDownBinding'],
        src = binding.source,
        element = $(this.element),
        pathArr = [],
        value, text, parent;

        if (binding.path) {
            pathArr = binding.path.split('.');
        }
        for (var i = 0; i < pathArr.length; i++) {
            var path = pathArr[i];
            if (src && src.hasOwnProperty(path)) {
                parent = src;
                src = src[path];
            }
            else {
                src = undefined;
                break;
            }
        }

        if (src) {
            value = src;
            if (value.hasOwnProperty("PersistedValue")) {
                value = value["PersistedValue"];
            }
            text = moduleApp.getChoiceText(value, path);
        }
        if (element.is('select')) {
            if (value === undefined) {
                element.find('option').get(0).selected = true;
                value = moduleApp.repository.getChoiceValue(element.find('option').get(0).value);
                parent[path] = value;
            }
            else {
                element.val(value);
            }
        }
        else {
            element.html(text);
        }
    },
    change: function () {
        var element = $(this.element),
        value = element.val(),
        binding = this.bindings['choicesDropDownBinding'],
        src = binding.source,
        pathArr = [],
        path, parent;

        if (element.is('select')) {
            if (binding.path) {
                pathArr = binding.path.split('.');
            }
            parent = src;
            for (var i = 0; i < pathArr.length; i++) {
                path = pathArr[i];
                if (src && (src[path] !== undefined)) {
                    parent = src;
                    src = src[path];
                }
                else {
                    src = undefined;
                    break;
                }
            }
            if (parent !== undefined) {
                value = moduleApp.repository.getChoiceValue(value);
                parent.set(path, value);
            }
        }
    }
});

kendo.data.binders.dateTimeBinding = kendo.data.Binder.extend({
    init: function (element, bindings, options) {
        //call the base constructor
        kendo.data.Binder.fn.init.call(this, element, bindings, options);

        var that = this;
        //listen for the change event of the element
        $(that.element).on("change", function () {
            that.change(); //call the change function
        });
        if ($(this.element).is('input')) {
            var options = {
                format: "dd MMM yyyy HH:mm"
            };
            var minDateValidation = $(this.element).attr("mindate");
            if (minDateValidation) {
                var minDateString = minDateValidation.split("/");
                options.min = new Date(parseInt(minDateString[2]),
                                       parseInt(minDateString[1]) - 1,
                                       parseInt(minDateString[0]), 0, 0, 0, 0);
            }
            var maxDateValidation = $(this.element).attr("maxdate");
            if (maxDateValidation) {
                var maxDateString = maxDateValidation.split("/");
                options.max = new Date(parseInt(maxDateString[2]),
                                       parseInt(maxDateString[1]) - 1,
                                       parseInt(maxDateString[0]), 0, 0, 0, 0);
            }
            $(this.element).kendoDateTimePicker(options);
        }
    },
    refresh: function () {
        var binding = this.bindings['dateTimeBinding'];
        var src = binding.source;
        var pathArr = [];
        if (binding.path) {
            pathArr = binding.path.split('.');
        }
        for (var i = 0; i < pathArr.length; i++) {
            var path = pathArr[i];
            if (src && src.hasOwnProperty(path)) {
                src = src[path];
            }
            else {
                src = undefined;
                break;
            }
        }
        var value = '';
        if (src) {
            if (src !== '') {
                value = moduleApp.repository.parseDate(src);
            }
            else {
                value = new Date();
            }
        }
        var element = $(this.element);
        if (element.is('input')) {
            var timepicker = $(this.element).data("kendoDateTimePicker");
            if (timepicker) {
                timepicker.value(value);
            }
        }
        else {
            $(this.element).html(kendo.format('{0:dd MMM yyyy HH:mm}', value));
        }
    },
    change: function () {
        var element = $(this.element);
        if (element.is('input')) {
            var timepicker = $(this.element).data("kendoDateTimePicker");
            var value = timepicker.value();
            var binding = this.bindings['dateTimeBinding'];
            var src = binding.source;
            var pathArr = [];
            if (binding.path) {
                pathArr = binding.path.split('.');
            }
            var path = '';
            var parent = src;
            for (var i = 0; i < pathArr.length; i++) {
                path = pathArr[i];
                if (src && src.hasOwnProperty(path)) {
                    parent = src;
                    src = src[path];
                }
                else {
                    src = undefined;
                    break;
                }
            }
            parent.set(path, moduleApp.repository.dateToString(value));
            moduleApp.viewModel.item.dirty = true;
        }
    }
});

kendo.data.binders.flatTaxonBinding = kendo.data.Binder.extend({
    refresh: function () {
        var binding = this.bindings['flatTaxonBinding'];
        var src = binding.source;
        var pathArr = [];
        if (binding.path) {
            pathArr = binding.path.split('.');
        }
        for (var i = 0; i < pathArr.length; i++) {
            var path = pathArr[i];
            if (src && src.hasOwnProperty(path)) {
                src = src[path];
            }
            else {
                src = undefined;
                break;
            }
        }
        var value = '',
        element = $(this.element),
        classification = element.attr('data-field-classification');
        if (src && classification) {
            moduleApp.viewModel.taxonomy.flat.getData(path, classification, function (data) {
                var content = '';
                element.empty();
                if (element.is('span')) {
                    var template = kendo.template($("#flatTaxonViewTemplate").html()),
                    content = kendo.render(template, data);
                    element.append(content);
                    kendo.bind(element.children(), moduleApp.viewModel);
                }
                else {
                    var template = kendo.template($("#flatTaxonEditTemplate").html()),
                    content = kendo.render(template, data);
                    element.append(content);
                    kendo.bind(element.children(), moduleApp.viewModel);
                }
            });
        }
    }
});

kendo.data.binders.imageSource = kendo.data.Binder.extend({
    refresh: function () {
        var binding = this.bindings['imageSource'],
        source = binding.source,
        attribute = binding.path,
        element = $(this.element),
        src = moduleApp.repository.getCachedImageThumbnailUri(source);

        if (src) {
            element.attr(attribute, src);
        }
        else {
            moduleApp.repository.loadImage(source, moduleApp.userData.website, function (src) {
                element.attr(attribute, src);
            });
        }
    }
});

kendo.data.binders.documentSource = kendo.data.Binder.extend({
    refresh: function () {
        var binding = this.bindings['documentSource'],
        src = binding.source,
        attribute = binding.path,
        element = $(this.element);

        moduleApp.repository.loadDocument(src, moduleApp.userData.website, function (src) {
            if (attribute == 'href')
                element.attr(attribute, src.MediaUrl);

            if (attribute == 'text')
                element.text(src.Filename);
        });
    }
});

kendo.data.binders.addressBinding = kendo.data.Binder.extend({
    init: function (element, bindings, options) {
        //call the base constructor
        kendo.data.Binder.fn.init.call(this, element, bindings, options);

        var that = this;
        //listen for the change event of the element
        $(that.element).on("change", function () {
            that.change(); //call the change function
        });
    },
    refresh: function () {
        var binding = this.bindings['addressBinding'];
        var src = binding.source;
        var pathArr = [];
        if (binding.path) {
            pathArr = binding.path.split('.');
        }
        for (var i = 0; i < pathArr.length; i++) {
            var path = pathArr[i];
            if (src && src.hasOwnProperty(path)) {
                src = src[path];
            }
            else {
                src = undefined;
                break;
            }
        }
        var value = '';
        var element = $(this.element);
        if (src) {
            value = moduleApp.getAddress(path);
        }
        element.html(value);
    },
    change: function () {
        var element = $(this.element);
        if (element.is('div')) {
            var value = [];
            element.find("input:checkbox[checked='checked']").each(function (index) {
                value.push({ 'PersistedValue': $(this).val() });
            });

            var binding = this.bindings['addressBinding'];
            var src = binding.source;
            var pathArr = [];
            if (binding.path) {
                pathArr = binding.path.split('.');
            }
            var path = '';
            var parent = src;
            for (var i = 0; i < pathArr.length; i++) {
                path = pathArr[i];
                if (src && (src[path] !== undefined)) {
                    parent = src;
                    src = src[path];
                }
                else {
                    src = undefined;
                    break;
                }
            }
            if (src !== undefined) {
                if (src !== null) {
                    parent[path] = value;
                }
                moduleApp.viewModel.item.dirty = true;
            }
        }
    }
});

kendo.data.binders.yasNoBinding = kendo.data.Binder.extend({
    init: function (element, bindings, options) {
        //call the base constructor
        kendo.data.Binder.fn.init.call(this, element, bindings, options);

        var that = this,
        element = $(this.element);
        //listen for the change event of the element
        element.on("change", function () {
            that.change(); //call the change function
        });

        element.find("input:checkbox").each(function (index) {
            currentSwitch = $(this).data("kendoMobileSwitch");
            if (currentSwitch === undefined) {
                currentSwitch = $(this).kendoMobileSwitch().data("kendoMobileSwitch");
            }
            currentSwitch.bind("change", function (e) {
                element.trigger('change');
            });
        });
    },
    refresh: function () {
        var binding = this.bindings['yasNoBinding'],
        src = binding.source,
        element = $(this.element),
        pathArr = [];

        if (binding.path) {
            pathArr = binding.path.split('.');
        }
        for (var i = 0; i < pathArr.length; i++) {
            var path = pathArr[i];
            if (src && src.hasOwnProperty(path)) {
                src = src[path];
            }
            else {
                src = undefined;
                break;
            }
        }

        if (element.is('span')) {
            element.empty();
        }

        if (src !== null) {
            if (element.is("li")) {
                if ($(element).find("input").data("kendoMobileSwitch")) {
                    $(element).find("input").data("kendoMobileSwitch").check(src);
                }
            }
            else {
                switch (src) {
                    case true:
                        element.html("yes");
                        break;
                    case false:
                        element.html("no");
                        break;
                }
            }
        }
    },
    change: function () {
        var binding = this.bindings['yasNoBinding'],
        src = binding.source,
        pathArr = [],
        element = $(this.element),
        value, parent, path;

        if (element.is('li')) {
            value = element.find("input:checkbox").data("kendoMobileSwitch").check();
            if (binding.path) {
                pathArr = binding.path.split('.');
            }

            parent = src;
            for (var i = 0; i < pathArr.length; i++) {
                path = pathArr[i];
                if (src && src.hasOwnProperty(path)) {
                    parent = src;
                    src = src[path];
                }
                else {
                    src = undefined;
                    break;
                }
            }

            if (typeof parent !== 'undefined') {
                parent.set(path, value);
            }
        }
    }
});

var fileSystem, documentRoot;

document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
function onDeviceReady() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, oDS, function (err) {
    });
}
function oDS(fs) {
    fileSystem = fs;
    documentRoot = fileSystem.root.fullPath;
}