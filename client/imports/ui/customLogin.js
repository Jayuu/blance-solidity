import './customLogin.html';

Template.signup.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.signupEmail.value;
    var passwordVar = event.target.signupPassword.value;
    var signupName = event.target.signupName.value;

    Accounts.createUser({
      username: signupName,
      email: emailVar,
      password: passwordVar
    },function(err) {
      if (err)
      console.log(err);
      else{
        console.log('success!');
        reRoute();
      }
    });
  }
});
Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.loginEmail.value;
    var passwordVar = event.target.loginPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar,function(err) {
      if (err)
      console.log(err);
      else{
        reRoute();
      }
    });
  }
});

Accounts.onLogin(function() {
  reRoute();
});

function reRoute(){

  var path = FlowRouter.current().path;
  // we only do it if the user is in the login page
  console.log('reRoute redirecting!');

  if(path === "/PublisherLogin"){
    FlowRouter.go("/Publisher");
  }
  if(path === "/AuthorLogin"){
    FlowRouter.go("/Author");
  }
  if(path === "/Login"){
    FlowRouter.go("/");
  }
}
// This is for logout
Template.publisherNav.events({
  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});

Template.authornav.events({
  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
  }
});
