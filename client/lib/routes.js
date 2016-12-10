FlowRouter.route("/", {
	name: "Home",
	action() {
		BlazeLayout.render("blanceHome",{
			main: "Home"
		})
	}
});

FlowRouter.route("/Author", {
	name: "Author",
	action() {
		BlazeLayout.render("author",{
			main: "Author"
		})
	}
});


FlowRouter.route("/Publisher", {
	name: "Publisher",
	action() {
		BlazeLayout.render("publisher",{
			main: "Publisher"
		})
	}
});

FlowRouter.route("/Login", {
	name: "Login",
	action() {
		BlazeLayout.render("login",{
			main: "Login"
		})
	}
});


FlowRouter.route("/Signup", {
	name: "Signup",
	action() {
		BlazeLayout.render("signup",{
			main: "Signup"
		})
	}
});


FlowRouter.route("/PublisherLogin", {
	name: "PublisherLogin",
	action() {
		BlazeLayout.render("login",{
			main: "PublisherLogin"
		})
	}
});


FlowRouter.route("/PublisherSignup", {
	name: "PublisherSignup",
	action() {
		BlazeLayout.render("signup",{
			main: "PublisherSignup"
		})
	}
});


FlowRouter.route("/AuthorLogin", {
	name: "AuthorLogin",
	action() {
		BlazeLayout.render("login",{
			main: "AuthorLogin"
		})
	}
});


FlowRouter.route("/AuthorSignup", {
	name: "AuthorSignup",
	action() {
		BlazeLayout.render("signup",{
			main: "AuthorSignup"
		})
	}
});


FlowRouter.route("/GigForm", {
	name: "GigForm",
	action() {
		BlazeLayout.render("gigForm",{
			main: "GigForm"
		})
	}
});
