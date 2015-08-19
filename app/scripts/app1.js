/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  ///* jshint undef: true, unused: true */
  ///* global NUTELLA */
  //var nutella = NUTELLA.init('127.0.0.1', 'wallcology', 'default', 'wallcology_admin',
  //  function(success) {
  //    if (success) {
  //      console.log('Successfully connected nutella!');
  //    } else {
  //      console.log('Error connecting!');
  //    }
  //});
  //
  //
  //nutella.setResourceId('r_id');
  //
  //nutella.location.ready( function() {
  //  //console.log(nutella.location.resources);
  //});
  //
  //nutella.net.subscribe('wallcology_admin_channel', function(message, channel) {
  //  console.log('message ' + message +  ' on channel' + channel);
  //});

  app.doAddUser = function(e) {
    console.log('DO ADD USER' + e);
    var rosterList = document.querySelector('roster-list');
    rosterList.createEmptyUser();
  };

  app.doDeletUser = function(e) {
    console.log('DO DELETE USER' + e);
    var rosterList = document.querySelector('roster-list');
    rosterList.deleteUser(e);
  };

  app.statesLoaded = function(e) {
    console.log('STATESLOAD' + e);
  };

  app.lastResponse = function(e) {
    console.log('STATES' + e);
  };
  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });
  //
  //// See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {

    var addUserButton = document.querySelector('#add-user');

    addUserButton.addEventListener('doAddUser', function() {

    });


    // imports are loaded and elements have been registered
  });


})(document);
