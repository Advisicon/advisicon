var FacebookAppNamespace = {}; 
(function () {
    var facebookAddinId = 'd0702f76-652e-4902-9247-5a6895efc8db',
        addinInstalled,
        numOfPluginInitReady = 0,
        addinContentMarkups,
        appContentTemplate,
        plugin = function (name, description, key, id, defaultContent, content, installed, preinstalled) {
            return {
                name: name,
                description: description,
                key: key,
                id: id,
                defaultContent: defaultContent,
                content: content,
                installed: installed,
                preinstalled: preinstalled
            };
        },
        plugins;

    function SaveAppSettings(settingKeys, settingValues) {
        var context = SP.ClientContext.get_current(),
            web = context.get_web(),
            allProperties = web.get_allProperties(),
            i;
        context.load(allProperties);
        if (isArray(settingKeys) && isArray(settingValues) && settingKeys.length == settingValues.length) {
            for (i = 0; i < settingKeys.length ; i++) {
                allProperties.set_item(facebookAddinId + settingKeys[i], settingValues[i]);
            }
        } else {
            allProperties.set_item(facebookAddinId + settingKeys, settingValues);
        }
        web.update();

        context.executeQueryAsync(function () {
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }

    var isArray = function (values) {
        return Object.prototype.toString.call(values) === '[object Array]';
    };

    function EnableAddinApp() {
        $get("enableDisableAddinButton").disabled = true;

        var context = SP.ClientContext.get_current(),
            web = context.get_web(),
            fbAddinSettings = SP.Publishing.SiteServicesAddins.getSettings(context, new SP.Guid(facebookAddinId));
        context.load(fbAddinSettings);

        context.executeQueryAsync(function () {
            try {
                EnableFacebookAddin(!fbAddinSettings.get_enabled());
            } catch (err) {
                //Facebook addin is not installed
                if (!addinInstalled) {
                    InstallAndEnableFacebookAddin();
                } else {
                    ChangeUIWhenAddinEnabled(false);
                }
            }
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }

    function InstallAndEnableFacebookAddin() {
        var context = SP.ClientContext.get_current(),
            fbAddinSettings = new SP.Publishing.AddinSettings(context, new SP.Guid(facebookAddinId));
        context.load(fbAddinSettings);
        fbAddinSettings.set_title(FacebookApp.FacebookAppStrings.L_AddinTitle);
        fbAddinSettings.set_namespace('xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml"');
        fbAddinSettings.set_htmlStartBody('\
        <script> \
            function ReplaceFacebookTokens() { \
                var pageDataHrefs = document.querySelectorAll(\'div[data-href="{PAGE.URL}"]\'); \
                for (var i = 0; i < pageDataHrefs.length;i++) { \
                    pageDataHrefs[i].setAttribute("data-href",document.location.href);\
                }\
                var siteDataHrefs = document.querySelectorAll(\'div[data-href="{SITE.URL}"]\'); \
                for (var i = 0; i < siteDataHrefs.length;i++) { \
                    siteDataHrefs[i].setAttribute("data-href",SP.PageContextInfo.get_webAbsoluteUrl()); \
                }\
            }\
            if (_spBodyOnLoadFunctionNames != null){\
                _spBodyOnLoadFunctionNames.push("ReplaceFacebookTokens");\
            }\
        </script> \
        <div id="fb-root"></div> \
        <script>(function(d, s, id) { \
            var js, fjs = d.getElementsByTagName(s)[0];\
            if (d.getElementById(id)) return; \
            js = d.createElement(s); js.id = id; \
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";\
            fjs.parentNode.insertBefore(js, fjs); \
        }(document, \'script\', \'facebook-jssdk\'));</script>');
        fbAddinSettings.set_enabled(true);
        //Here we specify the html meta mappings
        var mappings = { 'og:title': 'Title', 'og:url': '{PAGE.URL}', 'og:image': 'FacebookImage' };
        fbAddinSettings.set_metaTagPagePropertyMappings(mappings);

        SP.Publishing.SiteServicesAddins.setSettings(context, fbAddinSettings);

        context.executeQueryAsync(function () {
            SaveAppSettings("Installed", "TRUE");
            ChangeUIWhenAddinEnabled(true);
            EnablePreInstalledPlugins();
            CreatePageColumn("FacebookImage");
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }

    function EnableFacebookAddin(enable) {
        var context = SP.ClientContext.get_current(),
            fbAddinSettings = SP.Publishing.SiteServicesAddins.getSettings(context, new SP.Guid(facebookAddinId));
        context.load(fbAddinSettings);
        fbAddinSettings.set_enabled(enable);
        SP.Publishing.SiteServicesAddins.setSettings(context, fbAddinSettings);

        context.executeQueryAsync(function () {
            ChangeUIWhenAddinEnabled(enable);
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }

    function CreatePageColumn(columnName) {
        var context = SP.ClientContext.get_current(),
            site = context.get_site(),
            web = site.get_rootWeb(),
            list = web.get_lists().getByTitle('Pages'),
            fields = list.get_fields(),
            columnToCreate = fields.getByInternalNameOrTitle(columnName);

        context.executeQueryAsync(function () {
        }, function (sender, args) {
            var newfieldXml = '<Field Name="' + columnName + '" ID=' + '"{' + SP.Guid.newGuid().toString() + '}"' + ' DisplayName="' + columnName + '" Type="Text" Hidden="False"></Field>';
            fields.addFieldAsXml(newfieldXml, true, SP.AddFieldOptions.addToAllContentTypes);
            list.update();
            context.executeQueryAsync(function () {
            }, function (sender, args) {
                PrintErrorMsg(args.get_message());
            });
            /*PrintErrorMsg(args.get_message());*/
        });
    }

    function EnablePreInstalledPlugins() {
        var i;
        for (i = 0; i < plugins.length; i++) {
            if (plugins[i].preinstalled == true) {
                EnableDisablePlugin(i, true);
            }
        }
    }

    function TogglePlugin(pluginIndex) {
        EnableDisablePlugin(pluginIndex, !plugins[pluginIndex].installed);
    }

    function EnableDisablePlugin(pluginIndex, enable) {
        var pluginInstalled = plugins[pluginIndex].installed;

        if (!pluginInstalled && enable) {
            plugins[pluginIndex].content = $get(plugins[pluginIndex].key + 'ButtonContent').value;
            var context = SP.ClientContext.get_current(),
                site = context.get_site(),
                fbAddinPlugin = new SP.Publishing.AddinPlugin(context);

            fbAddinPlugin.set_title(plugins[pluginIndex].name);
            fbAddinPlugin.set_description(plugins[pluginIndex].description);
            fbAddinPlugin.set_markup(plugins[pluginIndex].content);
            SP.Publishing.SiteServicesAddins.setPlugin(context, fbAddinPlugin);

            context.executeQueryAsync(function () {
                plugins[pluginIndex].installed = true;
                SaveAppSettings([plugins[pluginIndex].key, plugins[pluginIndex].id], ["TRUE", plugins[pluginIndex].content]);
                UpdatePluginArea(pluginIndex, plugins[pluginIndex].content);

            }, function (sender, args) {
                PrintErrorMsg(args.get_message());
            });
        }
        else if (pluginInstalled && !enable) {
            DeletePlugin(pluginIndex);
        }
    }

    function IsFacebookAddinInstalled() {
        var context = SP.ClientContext.get_current(),
            fbAddinSettings = SP.Publishing.SiteServicesAddins.getSettings(context, new SP.Guid(facebookAddinId));
        context.load(fbAddinSettings);

        context.executeQueryAsync(function () {
            try {
                ChangeUIWhenAddinEnabled(fbAddinSettings.get_enabled());
            } catch (err) {
                //Facebook addin is not installed
                ChangeUIWhenAddinEnabled(false);
            }
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }
    
    function ChangeUIWhenAddinEnabled(addinEnabled) {
        addinInstalled = addinEnabled;

        var addinStatus = $get("addinStatusLabel"),
            addinLink = $get("enableDisableAddinButton"),
            i;

        addinLink.disabled = false;
        if (addinEnabled) {
            addinStatus.style.display = "inline";
            addinStatus.innerHTML = FacebookApp.FacebookAppStrings.L_AddinEnabledStatus;
            addinLink.value = FacebookApp.FacebookAppStrings.L_DisableAddinButtonText;
            addinLink.title = FacebookApp.FacebookAppStrings.L_DisableAddinButtonText;
        }
        else {
            addinStatus.style.display = "none";
            addinLink.value = FacebookApp.FacebookAppStrings.L_EnableAddinButtonText;
            addinLink.title = FacebookApp.FacebookAppStrings.L_EnableAddinButtonText;
        }

        var pluginContent = $get('pluginContent');
        if (addinEnabled) {
            pluginContent.disabled = false;
            var controlsToDisable = pluginContent.getElementsByTagName("input");
            for (i = 0; i < controlsToDisable.length; i++) {
                if (controlsToDisable[i].id.indexOf("UpdateButton") == -1) {
                    controlsToDisable[i].disabled = false;
                }
            }
        } else {
            pluginContent.disabled = true;
            var controlsToDisable = pluginContent.getElementsByTagName("input");
            for (i = 0; i < controlsToDisable.length; i++) {
                controlsToDisable[i].disabled = true;
            }
        }
    }

    function UpdatePluginAreas() {
        var context = SP.ClientContext.get_current(),
            web = context.get_web(),
            allProperties = web.get_allProperties(),
            i;
        context.load(allProperties);
        context.executeQueryAsync(function () {
            try {
                allProperties.get_item(facebookAddinId + "Installed");
            } catch (err) {
                FirstTimeInitApp();
                return;
            }

            for (i = 0; i < plugins.length; i++) {
                try {
                    var pluginInstalled = allProperties.get_item(facebookAddinId + plugins[i].key);
                    if (pluginInstalled == 'TRUE') {
                        plugins[i].installed = true;
                    }
                } catch (err) {
                    plugins[i].installed = false;
                }

                try {
                    var pluginContent = allProperties.get_item(facebookAddinId + plugins[i].id);
                    plugins[i].content = pluginContent;
                    UpdatePluginArea(i, pluginContent);
                } catch (err) {
                    plugins[i].content = plugins[i].defaultContent;
                    UpdatePluginArea(i, plugins[i].defaultContent);
                }
            }
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }

    function FirstTimeInitApp() {
        var context = SP.ClientContext.get_current();
        for (var i = 0; i < plugins.length; i++) {
            var addinPlugin = SP.Publishing.SiteServicesAddins.getPlugin(context, plugins[i].name);
            context.load(addinPlugin);
            (function (pluginIndex, plugin) {
                context.executeQueryAsync(function () {
                    try {
                        plugins[pluginIndex].content = plugin.get_markup();
                        plugins[pluginIndex].installed = true;
                        UpdatePluginArea(pluginIndex, plugins[pluginIndex].content);
                        numOfPluginInitReady += 1;
                        if (numOfPluginInitReady == plugins.length) {
                            FirstTimeInitAppComplete();
                        }
                    } catch (err) {
                        plugins[pluginIndex].content = plugins[pluginIndex].defaultContent;
                        plugins[pluginIndex].installed = false;
                        UpdatePluginArea(pluginIndex, plugins[pluginIndex].content);
                        numOfPluginInitReady += 1;
                        if (numOfPluginInitReady == plugins.length) {
                            FirstTimeInitAppComplete();
                        }
                    }
                }, function (sender, args) {
                    PrintErrorMsg(args.get_message());
                });
            }(i, addinPlugin));
        }
    }

    function FirstTimeInitAppComplete() {
        var settingKeys = [];
        var settingValues = [];
        for (var i = 0; i < plugins.length; i++) {
            settingKeys.push(plugins[i].key);
            settingValues.push(plugins[i].installed ? "TRUE" : "FALSE");

            settingKeys.push(plugins[i].id);
            settingValues.push(plugins[i].content);
        }
        settingKeys.push("Installed");
        settingValues.push("TRUE");
        SaveAppSettings(settingKeys, settingValues);
    }

    function UpdatePluginArea(pluginIndex, pluginContent) {
        var pluginKey = plugins[pluginIndex].key;
        var pluginButtonStatus = $get(pluginKey + "ButtonStatus");
        var enableDisablePluginButton = $get(pluginKey + "EnableDisableButton");
        var pluginButtonContent = $get(pluginKey + "ButtonContent");
        var pluginButtonsArea = $get(pluginKey + "PluginButtonsArea");
        var buttonContentArea = $get(pluginKey + "ButtonContentArea");

        pluginButtonContent.value = pluginContent;

        if (plugins[pluginIndex].installed) {
            pluginButtonStatus.innerHTML = FacebookApp.FacebookAppStrings.L_PluginEnabledStatus;
            enableDisablePluginButton.value = FacebookApp.FacebookAppStrings.L_DisablePluginButtonText;
            pluginButtonStatus.style.display = "inline";
            pluginButtonsArea.style.display = "inline";
        }
        else {
            pluginButtonStatus.innerHTML = "";
            enableDisablePluginButton.value = FacebookApp.FacebookAppStrings.L_EnablePluginButtonText;
            pluginButtonsArea.style.display = "none";
            pluginButtonStatus.style.display = "none";
            buttonContentArea.style.display = "none";
        }
    }

    function DeletePlugin(pluginIndex) {
        var context = SP.ClientContext.get_current();
        SP.Publishing.SiteServicesAddins.deletePlugin(context, plugins[pluginIndex].name);
        context.executeQueryAsync(function () {
            plugins[pluginIndex].installed = false;
            UpdatePluginArea(pluginIndex, plugins[pluginIndex].content);

            SaveAppSettings(plugins[pluginIndex].key, "FALSE");
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    };

    function UpdatePlugin(pluginIndex, newPluginContent) {
        var context = SP.ClientContext.get_current(),
            fbAddinPlugin = new SP.Publishing.AddinPlugin(context);

        fbAddinPlugin.set_title(plugins[pluginIndex].name);
        fbAddinPlugin.set_description(plugins[pluginIndex].description);
        fbAddinPlugin.set_markup(newPluginContent);
        SP.Publishing.SiteServicesAddins.setPlugin(context, fbAddinPlugin);
        context.executeQueryAsync(function () {
            plugins[pluginIndex].content = newPluginContent;
            SaveAppSettings(plugins[pluginIndex].id, plugins[pluginIndex].content);
            UpdatePluginArea(pluginIndex, newPluginContent);

            $get(plugins[pluginIndex].key + "UpdateButton").disabled = true;
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }

    function StopEditPlugin(pluginIndex) {
        var pluginKey = plugins[pluginIndex].key;
        $get(pluginKey + "ButtonContent").value = plugins[pluginIndex].content;
        HideDisplayControlContentArea(plugins[pluginIndex].key + "ButtonContentArea");
        $get(plugins[pluginIndex].key + "UpdateButton").disabled = true;
    }

    function RestoreDefaultPlugin(pluginIndex) {
        var pluginKey = plugins[pluginIndex].key;
        $get(pluginKey + "ButtonContent").value = plugins[pluginIndex].defaultContent;
        $get(plugins[pluginIndex].key + "UpdateButton").disabled = false;
    }

    function PrintErrorMsg(errorMsg) {
        EnsureScript('SP.js', typeof SP.PageContextInfo, function () {
            if (!SP.UI.ModalDialog.get_childDialog()) {
                SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', {
                    url: '../Pages/Notification.aspx',
                    title: FacebookApp.FacebookAppStrings.L_NotificationPageTitle,
                    width: 500,
                    height: 350,
                    args: { message: errorMsg }
                })
            }
        });
    }

    function AcceptDisclaimer() {
        SaveAppSettings('FacebookAddinDisclaimer', "TRUE");
    }

    function CheckDisclaimer(initAppCallBack) {
        //Check disclaimer first
        var context = SP.ClientContext.get_current(),
            web = context.get_web(),
            allProperties = web.get_allProperties();
        context.load(allProperties);
        context.executeQueryAsync(function () {
            try {
                var disclaimerAccepted = allProperties.get_item('FacebookAddinDisclaimer');
                if (disclaimerAccepted == 'TRUE') {
                    initAppCallBack();
                }
            }
            catch (err) {
                EnsureScript('SP.js', typeof SP.PageContextInfo, function () {
                    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', {
                        url: '../Pages/Disclaimer.aspx',
                        title: FacebookApp.FacebookAppStrings.L_Disclaimer,
                        width: 500,
                        height: 350,
                        dialogReturnValueCallback: function (dlgResult, returnValue) {
                            if (dlgResult == SP.UI.DialogResult.OK) {
                                AcceptDisclaimer();
                                initAppCallBack();
                            }
                        }
                    })});
            }
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }

    function InitPageUI() {
        $get("addinContent").innerHTML += addinContentMarkups;

        var i, pluginContent = $get("pluginContent");
        for (i = 0; i < plugins.length; i++) {
            var appContentMarkups = appContentTemplate.format(plugins[i].key, plugins[i].name, plugins[i].description, i);
            pluginContent.innerHTML += appContentMarkups;
        }
    
        $get("appTitle").innerHTML = FacebookApp.FacebookAppStrings.L_AppTitle;

        var enableDisableAddinButton = $get("enableDisableAddinButton");
        enableDisableAddinButton.value = FacebookApp.FacebookAppStrings.L_EnablePluginButtonText;
        enableDisableAddinButton.title = FacebookApp.FacebookAppStrings.L_EnablePluginButtonText;
    }

    function InitAppGlobalVariables() {
        addinContentMarkups =
            ['<table class="app-addinContent">',
                '<tr>',
                '<td width="60%">',
                        '<h2 class="ms-accentText">',
                        FacebookApp.FacebookAppStrings.L_AddinTitle,
                    '</h2>',
                '</td>',
                '<td width="40%">',
                    '<input type="button" id="enableDisableAddinButton" title="' + FacebookApp.FacebookAppStrings.L_EnableAddinButtonText + '" value="' + FacebookApp.FacebookAppStrings.L_EnableAddinButtonText + '" onclick="FacebookAppNamespace.EnableAddinApp()"/>',
                    '<h2 id="addinStatusLabel" class="ms-featurestatus app-appEnableStatus" style="display: none"></h2>',
                '</td>',
            '</tr>',
            '<tr>',
                '<td>',
                    '<span>',
                        FacebookApp.FacebookAppStrings.L_AddinDescription,
                    '</span>',
                '</td>',
            '</tr>',
            '<tr>',
                '<td>',
                    '<h2 class="app-content-title">' + FacebookApp.FacebookAppStrings.L_SocialPluginTemplatesLabel + '</h2>',
                '</td>',
                '<td>',
                    '<a class="app-link-align" href="PagePropertyMapping.aspx">' + FacebookApp.FacebookAppStrings.L_PagePropertyMappingsLink + '</a>',
                '</td>',
            '</tr>',
            '</table>'].join('\n');

        appContentTemplate =
            ['<table class="plugin-table">',
                '<tr>',
                '<td width="60%">',
                     '<h2 class="ms-accentText">',
                        '{1}',
                    '</h2>',
                '</td>',
                '<td width="40%">',
                    '<input type="button" id="{0}EnableDisableButton" title="' + FacebookApp.FacebookAppStrings.L_EnablePluginButtonText + '" value="' + FacebookApp.FacebookAppStrings.L_EnablePluginButtonText + '" onclick="FacebookAppNamespace.TogglePlugin(\'{3}\')"/>',
                    '<span id="{0}ButtonStatus" class="ms-featurestatus plugin-table-enablePluginButton" style="display: none"></span>',
                '</td>',
            '</tr>',
            '<tr>',
                '<td>',
                    '<span>',
                        '{2}',
                    '</span>',
                '</td>',
            '</tr>',
            '<tr>',
                '<td>',
                    '<a id="{0}HideDisplayButton" href="javascript:FacebookAppNamespace.HideDisplayControlContentArea(\'{0}ButtonContentArea\')">' + FacebookApp.FacebookAppStrings.L_ConfigurePluginButtonText + '</a>',
                '</td>',
            '</tr>',
            '<tr>',
                '<td colspan="2">',
                    '<div id="{0}ButtonContentArea" style="display: none">',
                        '<div>',
                            '<textarea id="{0}ButtonContent" name="{0}Update" rows="6" cols="100" onKeyDown="$get(\'{0}UpdateButton\').disabled = false;"></textarea>',
                        '</div>',
                        '<div style="padding-top: 10px; width:700px;">',
                            '<a href="http://developers.facebook.com/docs/reference/plugins/{0}/" target="_new">' + FacebookApp.FacebookAppStrings.L_GoToFacebookForStyles + '</a>',
                            '<div id="{0}PluginButtonsArea" style="float:right;" >',
                                '<input type="button" id="{0}UpdateButton" title="' + FacebookApp.FacebookAppStrings.L_UpdatePluginButtonText + '" value="' + FacebookApp.FacebookAppStrings.L_UpdatePluginButtonText + '" disabled="true" onclick="FacebookAppNamespace.UpdatePlugin(\'{3}\', $get(\'{0}ButtonContent\').value)"/>',
                                '<input type="button" id="{0}RestoreDefaultButton" title="' + FacebookApp.FacebookAppStrings.L_RestorePluginToDefaultButtonText + '" value="' + FacebookApp.FacebookAppStrings.L_RestorePluginToDefaultButtonText + '" onclick="FacebookAppNamespace.RestoreDefaultPlugin(\'{3}\')"/>',
                                '<input type="button" id="{0}StopEditButton" title="' + FacebookApp.FacebookAppStrings.L_CancelButtonText + '" value="' + FacebookApp.FacebookAppStrings.L_CancelButtonText + '" onclick="FacebookAppNamespace.StopEditPlugin(\'{3}\')"/>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</td>',
            '</tr>',
            '</table>'].join('\n');
        
        plugins = [];
        plugins.push(new plugin(FacebookApp.FacebookAppStrings.L_LikeButtonTitle,
                            FacebookApp.FacebookAppStrings.L_LikeButtonDescription,
                            "like", "FB1",
                            '<div class="fb-like" data-send="true" data-width="450" data-show-faces="true"></div>',
                            null, false, true));

        plugins.push(new plugin(FacebookApp.FacebookAppStrings.L_SendButtonTitle,
                            FacebookApp.FacebookAppStrings.L_SendButtonDescription,
                            "send", "FB2",
                            '<div class="fb-send" data-href="{PAGE.URL}"></div>',
                            null, false, true));

        plugins.push(new plugin(FacebookApp.FacebookAppStrings.L_SubscribeButtonTitle,
                            FacebookApp.FacebookAppStrings.L_SubscribeButtonDescription,
                            "subscribe", "FB3",
                           '<div class="fb-subscribe" data-href="https://www.facebook.com/zuck" data-show-faces="true" data-width="450"></div>',
                            null, false, true));

        plugins.push(new plugin(FacebookApp.FacebookAppStrings.L_CommentsTitle,
                            FacebookApp.FacebookAppStrings.L_CommentsDescription,
                            "comments", "FB4",
                            '<div class="fb-comments" data-href="{PAGE.URL}" data-num-posts="2" data-width="470"></div>',
                            null, false, true));

        plugins.push(new plugin(FacebookApp.FacebookAppStrings.L_ActivityFeedTitle,
                            FacebookApp.FacebookAppStrings.L_ActivityFeedDescription,
                            "activity", "FB5",
                            '<div class="fb-activity" data-width="300" data-height="300" data-header="true" data-recommendations="false"></div>',
                            null, false, false));

        plugins.push(new plugin(FacebookApp.FacebookAppStrings.L_RecommendationsBoxTitle,
                            FacebookApp.FacebookAppStrings.L_RecommendationsBoxDescription,
                            "recommendations", "FB6",
                            '<div class="fb-recommendations" data-width="300" data-height="300" data-header="true"></div>',
                            null, false, false));

        plugins.push(new plugin(FacebookApp.FacebookAppStrings.L_LikeBoxTitle,
                            FacebookApp.FacebookAppStrings.L_LikeBoxDescription,
                            "like-box", "FB7",
                            '<div class="fb-like-box" data-href="http://www.facebook.com/platform" data-width="292" data-show-faces="true" data-stream="true" data-header="true"></div>',
                            null, false, true));

        plugins.push(new plugin(FacebookApp.FacebookAppStrings.L_FacepileTitle,
                            FacebookApp.FacebookAppStrings.L_FacepileDescription,
                            "facepile", "FB9",
                            '<div class="fb-facepile" data-href="{SITE.URL}" data-max-rows="1" data-width="300"></div>',
                            null, false, true));
    }

    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g,
            function (match, number)
            { return typeof args[number] != 'undefined' ? args[number] : match; });
    };

    function HideDisplayControlContentArea(contentAreaId) {
        var controlContentArea = $get(contentAreaId);
        controlContentArea.setAttribute("style", controlContentArea.style.display != "none" ? "display:none" : "display:inline");
    }

    function OnFacebookAppLoads() {
        InitAppGlobalVariables();
        InitPageUI();
        IsFacebookAddinInstalled();
        UpdatePluginAreas();
    }


    var pageProperties = ["{SITE.URL}", "{PAGE.URL}"];
    var propertyMapping = function (metadata, property) {
        return { "metadata": metadata, "property": property };
    };
    var propertyMappings = [];

    function InitPropertyMappingTable(mappings) {
        var i, metadatas, properties;
        for (meta in mappings) {
            if (!mappings.hasOwnProperty(meta)) {
                continue;
            }
            AddPropertyMapping(meta, mappings[meta]);
        }
    }

    function AddPropertyMapping(metadata, property) {
        var propertyMappingTable = document.getElementById("propertyMappingTable");
        var row = document.createElement("TR")
        var metadataInputColumn = document.createElement("TD")
        var metadataInput = document.createElement("INPUT")
        metadataInput.id = "metadataInput" + propertyMappings.length;
        metadataInput.setAttribute("type", "text");
        metadataInput.setAttribute("value", metadata);
        metadataInputColumn.appendChild(metadataInput);

        var propertiesOptions = document.createElement("SELECT");
        propertiesOptions.id = "propertyMapping" + propertyMappings.length;
        for (var i = 0; i < pageProperties.length; i++) {
            var option = document.createElement('option');
            option.text = pageProperties[i];
            option.value = pageProperties[i];
            if (pageProperties[i] == property) {
                option.setAttribute("selected", "selected");
            }
            propertiesOptions.options.add(option);
        }

        var propertiesColumn = document.createElement("TD");
        propertiesColumn.appendChild(propertiesOptions);

        var removeMappingColumn = document.createElement("TD");
        var removingMappingButton = document.createElement("A");
        removingMappingButton.setAttribute("href", "javascript:FacebookAppNamespace.RemovePropertyMapping(" + propertyMappings.length + ")");
        removingMappingButton.innerHTML = FacebookApp.FacebookAppStrings.L_RemoveButtonText;
        removeMappingColumn.appendChild(removingMappingButton);

        row.appendChild(metadataInputColumn);
        row.appendChild(propertiesColumn);
        row.appendChild(removeMappingColumn);

        mappingRows = propertyMappingTable.getElementsByTagName("TR");
        mappingRows[mappingRows.length - 1].parentNode.insertBefore(row, mappingRows[mappingRows.length - 1]);

        propertyMappings.push(new propertyMapping(metadata, property));
    }

    function RemovePropertyMapping(index) {
        var propertyMappingTable = document.getElementById("propertyMappingTable"),
            mappingRows = propertyMappingTable.getElementsByTagName("TR"),
            i;
        mappingRows[index + 1].parentNode.removeChild(mappingRows[index + 1]);

        propertyMappings.splice(index, 1);

        var metadataInputs = propertyMappingTable.getElementsByTagName("INPUT");
        for (i = 0; i < metadataInputs.length; i++) {
            metadataInputs[i].id = "metadataInput" + i;
        }

        var removingMappingButtons = propertyMappingTable.getElementsByTagName("A");
        for (i = 0; i < removingMappingButtons.length; i++) {
            removingMappingButtons[i].setAttribute("href", "javascript:FacebookAppNamespace.RemovePropertyMapping(" + i + ")");
        }

        var propertiesSelects = propertyMappingTable.getElementsByTagName("SELECT");
        for (i = 0; i < propertiesSelects.length; i++) {
            propertiesSelects[i].id = "propertyMapping" + i;
        }
    }

    function AddNewPropertyMapping() {
        if (propertyMappings.length == 0 || IsValidMetadata(propertyMappings.length - 1)) {
            AddPropertyMapping("", "");
        }
    }

    function IsValidMetadata(index) {
        var metadata = document.getElementById("metadataInput" + index);
        return metadata.value.replace(/^\s+|\s+$/g, '').length != 0;
    }

    function SavePropertyMappings() {
        $get("saveButton").disabled = true;

        var i,
        newPropertyMappings = {};
        for (i = 0; i < propertyMappings.length; i++) {
            var metadata = document.getElementById("metadataInput" + i);
            var property = document.getElementById("propertyMapping" + i);
            if (metadata.value.replace(/^\s+|\s+$/g, '').length != 0) {
                newPropertyMappings[metadata.value] = property.value;
            }
        }

        var context = SP.ClientContext.get_current(),
            addinSettings = SP.Publishing.SiteServicesAddins.getSettings(context, new SP.Guid(facebookAddinId));
        context.load(addinSettings);
        addinSettings.set_metaTagPagePropertyMappings(newPropertyMappings);
        SP.Publishing.SiteServicesAddins.setSettings(context, addinSettings);

        context.executeQueryAsync(function () {
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }

    function StopEditPropertyMappings() {
        var propertyMappingTable = $get("propertyMappingTable"),
            mappingRows = propertyMappingTable.getElementsByTagName("TR"),
            i, rowLength;
        for (i = 1; i < mappingRows.length - 1;) {
            rowLength = mappingRows.length - 1;
            mappingRows[i].parentNode.removeChild(mappingRows[i]);
            if (rowLength == mappingRows.length - 1) {
                i += 1;
            }
        }
        propertyMappings = [];

        GetPropertyMappings();
    }

    function CreatePageColumn(columnName) {
        var context = SP.ClientContext.get_current(),
            site = context.get_site(),
            web = site.get_rootWeb(),
            list = web.get_lists().getByTitle('Pages'),
            fields = list.get_fields(),
            columnToCreate = fields.getByInternalNameOrTitle(columnName);

        context.executeQueryAsync(function () {
        }, function (sender, args) {
            var newfieldXml = '<Field Name="' + columnName + '" ID=' + '"{' + SP.Guid.newGuid().toString() + '}"' + ' DisplayName="' + columnName + '" Type="Text" Hidden="False"></Field>';
            fields.addFieldAsXml(newfieldXml, true, SP.AddFieldOptions.addToAllContentTypes);
            list.update();
            context.executeQueryAsync(function () {
            }, function (sender, args) {
                PrintErrorMsg(args.get_message());
            });
            /*PrintErrorMsg(args.get_message());*/
        });
    }

    function InitPropertyMappingPageUI() {
        $get("appTitle").innerHTML = FacebookApp.FacebookAppStrings.L_AppTitle;

        $get("addinTitle").innerHTML = FacebookApp.FacebookAppStrings.L_AddinTitle;
        $get("enableDisableAddinButton").value = FacebookApp.FacebookAppStrings.L_EnableAddinButtonText;
        $get("enableDisableAddinButton").onclick = EnableAddinApp;
        $get("addinDescription").innerHTML = FacebookApp.FacebookAppStrings.L_PagePropertyMappingsDescription;
        $get("pagePropertyMappingsTitle").innerHTML = FacebookApp.FacebookAppStrings.L_PagePropertyMappingsLabel;
        $get("pluginsLink").innerHTML = FacebookApp.FacebookAppStrings.L_SocialPluginsLink;

        var addNewMappingLink = $get("addNewMappingLink");
        addNewMappingLink.innerHTML = FacebookApp.FacebookAppStrings.L_AddNewMappingLabel;
        addNewMappingLink.setAttribute("href", "javascript:FacebookAppNamespace.AddNewPropertyMapping()");

        $get("metadataInputLabel").innerHTML = FacebookApp.FacebookAppStrings.L_MetadataLabel + ":";
        $get("pagePropertiesLabel").innerHTML = FacebookApp.FacebookAppStrings.L_PagePropertiesLabel + ":";

        var saveButton = $get("saveButton");
        saveButton.value = FacebookApp.FacebookAppStrings.L_SaveButtonText;
        saveButton.onclick = SavePropertyMappings;

        var cancelButton = $get("cancelButton");
        cancelButton.value = FacebookApp.FacebookAppStrings.L_CancelButtonText;
        cancelButton.onclick = StopEditPropertyMappings;
    }

    function GetPageProperties() {
        var context = SP.ClientContext.get_current(),
            site = context.get_site(),
            web = site.get_rootWeb(),
            list = web.get_lists().getByTitle('Pages'),
            fields = list.get_fields(), i;

        context.load(fields);
        context.executeQueryAsync(function () {
            var count = fields.get_count();
            for (i = 0; i < count; i++) {
                var field = fields.itemAt(i);
                if (field.get_hidden() == true) {
                    continue;
                }
                pageProperties.push(field.get_internalName());
            }
            GetPropertyMappings();
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }

    function GetPropertyMappings() {
        var context = SP.ClientContext.get_current(),
            addinSettings = SP.Publishing.SiteServicesAddins.getSettings(context, new SP.Guid(facebookAddinId));
        context.load(addinSettings);

        context.executeQueryAsync(function () {
            InitPropertyMappingTable(addinSettings.get_metaTagPagePropertyMappings());
            ChangeUIWhenAddinEnabled(addinSettings.get_enabled());
        }, function (sender, args) {
            PrintErrorMsg(args.get_message());
        });
    }

    function OnPropertyMappingPageLoads() {
        InitPropertyMappingPageUI();
        GetPageProperties();
    }

    FacebookAppNamespace.OnPropertyMappingPageLoads = OnPropertyMappingPageLoads;
    FacebookAppNamespace.AddNewPropertyMapping = AddNewPropertyMapping;
    FacebookAppNamespace.RemovePropertyMapping = RemovePropertyMapping;

    FacebookAppNamespace.OnFacebookAppLoads = OnFacebookAppLoads;
    FacebookAppNamespace.EnableAddinApp = EnableAddinApp;
    FacebookAppNamespace.TogglePlugin = TogglePlugin;
    FacebookAppNamespace.HideDisplayControlContentArea = HideDisplayControlContentArea;
    FacebookAppNamespace.UpdatePlugin = UpdatePlugin;
    FacebookAppNamespace.RestoreDefaultPlugin = RestoreDefaultPlugin;
    FacebookAppNamespace.StopEditPlugin = StopEditPlugin;
}());

