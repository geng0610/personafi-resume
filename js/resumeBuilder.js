
var projects = {
    "projects": [
        {
            "title": "project1",
            "dates": "2015",
            "description": "this is project 1",
            "images": [
                "images/me.png",
                "images/fry.jpg"
            ]
        },
        {
            "title": "project2",
            "dates": "2014",
            "description": "this is project 2",
            "images": [
                "images/197x148.gif",
                "images/fry.jpg"
            ]
        }
    ]
};
var bio = {
    "profile_pic": "images/me.png",
    "name": "Geng Tan",
    "description": "MBA Candidate, Cornell Tech",
    "e_mails": [
        "geng0610@gmail.com",
        "geng@personafi.io"
    ],
    "personal_website": [
        "http://personafi.io/",
        "http://www.projectsbygeng.com/"
    ],
    "contacts": {
        "location": "new york"
    },
    "social":{
        "facebook": {"link":"https://www.facebook.com/geng.tan"},
        "linkedin": {"link":"https://www.linkedin.com/in/gengt"},
        "twitter": {"link":"https://www.twilio.com/geng0610"},
        "googleplus": {"link":"https://plus.google.com/+GengTan/"},
        "angellist": {"link":"https://angel.co/geng-tan"},
        "github": {"link":"https://github.com/geng0610"},
        "instagram": {"link":"https://instagram.com/geng0610"},
        "pinterest": {"link":"https://www.pinterest.com/geng0610/"},
        "vine": {"link":"https://vine.co/"},
        "quora": {"link":"http://www.quora.com/Geng-Tan"},
        "youtube": {"link":"https://www.youtube.com/user/geng0610"}
    }
};


$("#header").append(HTMLheaderPic.replace("%profile-pic%",bio.profile_pic));
$("#header").append(HTMLheaderDetail);
$("#header-details").append(HTMLheaderName.replace("%name%",bio.name));
$("#header-details").append(HTMLheaderDescription.replace("%header-description%",bio.description));
$("#header-details").append(HTMLheaderEmail);
$("#header-details").append(HTMLheaderWebsite);
$("#personal-e-mail").append(HTMLheaderEmailText.replace("%personal-e-mail%",bio.e_mails[0]));
$("#personal-e-mail").append(HTMLheaderEmailEnd);
$("#personal-website").append(HTMLheaderWebsiteText.replace("%personal-website%",bio.personal_website[0]));
$("#personal-website").append(HTMLheaderWebsiteEnd);

if(bio.social){
    $("#resume-main").append(HTMLsocialIcons);
    for (network in bio.social) {
        $("#social-icons").append(HTMLsocialIcon.replace(/%social%/g,network).replace("%link%",bio.social[network].link));
    }
}

var work = {
    "jobs": [
        {
            "employer": "Cornell",
            "position": "MBA Student",
            "location": "New York",
            "date": "2014-2015",
            "link": "http://tech.cornell.edu/",
            "image_link": "http://www.fallsofficial.com/files/2014/09/Cornell.png",
            "description": "First MBA Class at Cornell Tech"
        },
        {
            "employer": "Appinions",
            "position": "Analyst",
            "location": "New York",
            "date": "2012-2014",
            "link": "http://www.appinions.com/",
            "image_link": "https://pbs.twimg.com/profile_images/2597231983/jkjaf08nnf2pay487zra.jpeg",
            "description": "Product Management"
        }
    ]
};

$("#resume-main").append(HTMLworkExperiences);
for (job in work.jobs){
    $("#work-experiences").append(HTMLworkExperienceStart+HTMLworkExperienceLink.replace("%llink%",work.jobs[job].link).replace("%image-source%",work.jobs[job].image_link)+HTMLworkExperiencePosition.replace("%position%",work.jobs[job].position)+HTMLworkExperienceEmployer.replace("%employer%",work.jobs[job].employer)+HTMLworkExperienceDate.replace("%date%",work.jobs[job].date)+HTMLworkExperienceDescription.replace("%description%",work.jobs[job].description));
}
//$("#work-experiences").append(HTMLworkExperienceStart+HTMLworkExperienceLink+HTMLworkExperiencePosition+HTMLworkExperienceEmployer+HTMLworkExperienceDate+HTMLworkExperienceDescription);


/*bio.display = function(){
        if (bio){
        $("#header").append(HTMLheaderPic.replace("%profile-pic%",bio.profile_pic));
        //$("#header").prepend(HTMLbioPic.replace("%data%",bio.image));
        //$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
        //$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
    };

    if (bio.contacts){
        if(bio.contacts.contactGeneric)
            $("#topContacts").append(HTMLcontactGeneric.replace("%data%",bio.contacts.mobile));
        if(bio.contacts.mobile)
            $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
        if(bio.contacts.email)
            $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
        if(bio.contacts.twitter)
            $("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
        if(bio.contacts.github)
            $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
        if(bio.contacts.blog)
            $("#topContacts").append(HTMLblog.replace("%data%",bio.contacts.blog));
        if(bio.contacts.location)
            $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
    };
};*/


//bio.display();

var education = {
    "schools": [
        {
            "name": "Cornell",
            "location": "new york",
            "degree": "MBA",
            "majors": [
                "MBA"
            ],
            "dates": "2014-2015",
            "url": "www.cornell.edu"
        },
        {
            "name": "MIT",
            "location": "Cambridge, MA",
            "degree": "BA",
            "majors": [
                "MechE",
                "Management"
            ],
            "dates": "2006-2010",
            "url": "web.mit.edu"
        }
    ],
    "onlineClasses": [
        {
            "title": "Nano-Degree",
            "school": "Udacity",
            "dates": "2015",
            "url": "www.udacity.com"
        }
    ]
};

education.display = function(){
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        if (education.schools[school].majors.length > 0) {
            for(major in education.schools[school].majors){
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedMajor);
            }
        };
    }
    if (education.onlineClasses) {
        $(".education-entry:last").append(HTMLonlineClasses);
        for (onlineClass in education.onlineClasses){
            //$("#education").append(HTMLonlineStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
            $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
}


education.display(); 



work.display = function(){
    for (job in work.jobs){
    	$("#workExperience").append(HTMLworkStart);
    	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    	var formattedEmployerTitle = formattedEmployer +formattedTitle+formattedDates+formattedLocation+formattedDescription;
    	$(".work-entry:last").append(formattedEmployerTitle);
    };
};

work.display();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

function inName(name){
    var name=name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}

$("#main").append(internationalizeButton);


projects.display = function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for(image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        };
    }
}


projects.display(); 

$("#mapDiv").append(googleMap);


