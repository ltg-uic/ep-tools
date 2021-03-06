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
  //var nutella = NUTELLA.init('ltg.evl.uic.edu', 'wallcology', 'default', 'store_relationships',
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


  app.showAlert = function() {
    console.log('HE IAM A ALERT');
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

    //var ironAjax = document.querySelector('#userAjax');
    //ironAjax.addEventListener('response', function() {
    //  var users = ironAjax.lastResponse;
    //
    //  for (var i = 0; i < users.length; i++) {
    //    console.log(users[i].name);
    //    //Do something
    //  }
    //});
      // imports are loaded and elements have been registered
  });


  //window.logAndContinue = function() {
  //  var missing = Polymer.waitingFor();
  //  if (missing.length) {
  //    missing.forEach(function(el) {
  //      console.warn('Waiting for: ' + el.getAttribute('name'));
  //    });
  //    console.warn('Forcing element registration.');
  //    Polymer.forceReady();
  //  }
  //}


})(document);
