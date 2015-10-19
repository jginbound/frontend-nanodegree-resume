/*
Author: Johnny Garces
Learned this with Udacity
 */

/***********************************************
OBJECTS GO HERE: BIO, WORK, EDUCATION, PROJECTS
***********************************************/
$('#mapDiv').append(googleMap);
// Why must map div be the first thing to be included here in resumeBuilder.js? I've tried adding it to the bottom, and it didn't show a map//


//bio object
var skills = ['Business scaling' , 'Full-process Design', 'Front-end Engineering'];


 var bio = {
 	name: 'Johnny Garces',
 	role: 'Inbound Marketer and Front End Developer',
 	image: 'http://exclaim.ca/images/madtv.jpg',
 	contacts: {
 		email: 'garces.johnny@gmail.com',
 		twitter: '@johnnyghotplots',
 		github: 'jginbound',
 		mobile: '917-123-4567',
 		location: 'New York City'
 	},
 	message: 'Check out my resume!',
 	skill: skills, 

 	display: function(){

 		var formattedName = HTMLheaderName.replace('%data%', bio.name)
 		var formattedRole = HTMLheaderRole.replace('%data%', bio.role)
 		var formattedImage = HTMLbioPic.replace('%data%', bio.image)
 		var formattedEmail = HTMLmobile.replace('%data%', bio.contacts.email);
 		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
 		var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
 		var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.message);
 		var formattedMobile =  HTMLmobile.replace('%data%', bio.contacts.mobile);

 		//create a for loop for skills//
 		$('#header').prepend(formattedName, formattedRole);
 		$('#topContacts').prepend(formattedEmail, formattedTwitter, formattedGitHub, formattedMobile);
 		$('#personal-info').append(formattedImage, formattedWelcome, HTMLskillsStart);
 		for(skills in bio.skill){
 			var formattedSkills = HTMLskills.replace('%data%', bio.skill[skills]);
 			$('#skills').append(formattedSkills);
 		}
 		// console.log('yoo I got display to work!');

 	}
 }; 

bio.display();


console.log(bio);


//Work Object
var work = {

	jobs: [

		{
		employer: 'U.S. Peace Corps',
		title: 'Founder: Hot Plots Film Club',
		dates: '2009-2012',
		location: 'Hashemite Kingdom of Jordan',
		description: 'Youth development with a focus on filmmaking',
		},

		{
		employer: 'HubSpot',
		title: 'Inbound Professor',
		dates: '2013-2014',
		location: 'Cambridge, MA',
		description: 'Trained our 10k HubSpot clients on the inbound marketing methodology with the HubSpot software. Specific areas of inbound marketing included: SEO, Keywords Research, Social Media Marketing, and Anayltics.'	
		},

		{employer: 'Triple Threat Agency',
		title: 'Co-founder',
		dates: '2015-present',
		location: 'Santa Monica, CA',
		description: "Launched a full-service agency specializing in: Mobile app development, website development, and film production. "
		}
	],
	display: function(){
		$('#workExperience').append(HTMLworkStart);
		for(var i=0; i<work.jobs.length; i++){
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[i].title);
			var formattedEmployerTitle= formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace('%data%',work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description)
			$('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
		}
		// console.log('yay got display in work object to work!');
	}
};

work.display();


//projects object
var projects = {

	project : [
	{
		title: 'HairOnPurpse Website',
		date: 'August 2015',
		description: 'Customized Wordpress Theme for the HairOnPurpose organization. Skills used: Wordpress Development, Customization, Migration',
		images: ['http://placepu.gs/200/200', 'https://placekitten.com/g/500/300']
	},
	{
		title: 'MyNeighbor App',
		date: 'September 2015',
		description: "Design internal tools webpages for generating contextual information on MyNeighbor's users. Skills used: Sass, Handlebars, jQuery",
		images: ['http://placepu.gs/200/200', 'https://placekitten.com/g/500/300']
	},
	{
		title: 'Education Equity Act Website',
		date: 'September 2015',
		description: 'Developed website built with Jekyll Theme. Skills used: Bootstrap, Jekyll development, jQuery'
	}
		
	],
	display: function(){
		console.log('hey i got projects to work');
		$('#projects').append(HTMLprojectStart);
		for(var i=0; i<projects.project.length; i++){
		  var formattedProjectName = HTMLprojectTitle.replace('%data%', projects.project[i].title);
		  var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.project[i].date);
		  var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.project[i].description);
		  var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.project[i].images[i]);
		  $('.project-entry').append(formattedProjectName, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
		}
	}		
}
projects.display();

//education object

// var education = {
// 	schools: [

// 	{
// 		name: 'Middlebury College',
// 		graduation: '2009',
// 		location: 'Middlebury, VT',
// 		major: 'Philosophy',
// 		courses: ['Intro to Philosophy', 'Logic', 'Contemporary Moral Issues', 'Kierkegaard, Marx, and Nietzsche'],
// 		url: 'http://www.middlebury.edu'
// 	}, 

// 	{
// 		name: 'American University',
// 		graduation: '2008',
// 		location: 'Washington, DC',
// 		major: 'International Business and Trade',
// 		courses: ['MacroEconomic Theory, Trade Deficits, Chinese Business Relations'],
// 		url: 'http://www.american.edu'
// 	}
// 	],

// 	display: function(){
// 		$('#education').append(HTMLschoolStart);
// 		console.log(education.schools[0].location);
// 	}
// };

// education.display();
var education = {
	"schools" : [
	{
		"name" : "Donetsk State Institute of Artificial Intelligence",
		"location" : "Donetsk, Ukraine",
		"degree" : "bachelor", 
		"majors" : "computer science",
		"dates" : "2001 - 2005",
		"url" : "donntu.edu.ua"
	},
	{
		"name" : "Donetsk State Institute of Artificial Intelligence",
		"location" : "Donetsk, Ukraine",
		"degree" : "master", 
		"majors" : "computer science",
		"dates" : "2005 - 2006",
		"url" : "donntu.edu.ua"
	}],
	"online courses" : [{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "udacity",
		"dates" : "2014 - 2015",
		"url" : "https://www.udacity.com/course/nd001"
	}],
	display: function(){
		console.log('I got education to work');
	}
};
education.display();





// MAP




