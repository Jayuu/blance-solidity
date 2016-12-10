import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Gigs = new Mongo.Collection('gigs');

var myData = {
   title: "value 1...",
   description: "value 2...",
   budget: "value 3...",
   category: "value 4...",
   createdAt:  new Date() // current time
}

Gigs.insert(myData);
var findCollection = Gigs.find().fetch();
console.log(findCollection);
