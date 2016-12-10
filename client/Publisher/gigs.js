Template.gigForm.events({
  'submit': function(event) {
    event.preventDefault();

  console.log("Gig clic");
  var title = event.target.title.value;
  var description = event.target.description.value;
  var budget = event.target.budget.value;
  var category = event.target.category.value;

  // Insert a task into the collection
  Gigs.insert({
    title:  title,
    description:   description,
    budget:budget,
    category:  category,
    createdAt: new Date(), // current time
  },function(err,records){
    console.log("Record added as "+records[0]._id);
  });

  var findCollection = Gigs.find().fetch();
  console.log(findCollection);

  // Clear form
  event.target.title.value = '';
  event.target.description.value = '';
  event.target.budget.value = '';
  }
});

// Template.gigForm.events({
//   'submit .new-gig'(event) {
    // console.log("Gig clic");
    //
    // // Prevent default browser form submit
    // event.preventDefault();
    //
    // var title = event.target.title.value;
    // var description = event.target.description.value;
    // var budget = event.target.budget.value;
    // var category = event.target.category.value;
    //
    // // Insert a task into the collection
    // Gigs.insert({
    //   title:  title,
    //   description:   description,
    //   budget:budget,
    //   category:  category,
    //   createdAt: new Date(), // current time
    // },function(err,records){
    //   console.log("Record added as "+records[0]._id);
    // });
    //
    // var findCollection = Gigs.find().fetch();
    // console.log(findCollection);
    //
    // // Clear form
    // event.target.title.value = '';
    // event.target.description.value = '';
    // event.target.budget.value = '';
//   },
// });
