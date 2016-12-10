import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './imports/startup/accounts-configuration.js';
import './imports/ui/onlyIfLoggedIn.js';
import './imports/ui/customLogin.js';

import './main.html';


Template.publisherNav.helpers({
  currentUser: function() {
    console.log(Meteor.userId());
    return Meteor.userId();
  }
})

Template.homeGigs.helpers({
  gigs() {
    console.log("Template.homeGigs.");
    // Show newest tasks at the top
    return Gigs.find({}, { sort: { createdAt: -1 } });
  },
});
