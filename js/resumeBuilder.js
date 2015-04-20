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
    $("#work-experiences").append(HTMLworkExperienceStart
        +HTMLworkExperienceLink.replace("%link%",work.jobs[job].link).replace("%image-source%",work.jobs[job].image_link)
        +HTMLworkExperiencePosition.replace("%position%",work.jobs[job].position)
        +HTMLworkExperienceEmployer.replace("%employer%",work.jobs[job].employer)
        +HTMLworkExperienceDate.replace("%date%",work.jobs[job].date)
        +HTMLworkExperienceDescription.replace("%description%",work.jobs[job].description));
}

var projects = {
    "projects": [
        {
            "title": "project1",
            "sponsor": "Cornell",
            "dates": "2015",
            "link": "http://tech.cornell.edu/",
            "image_link": "http://www.fallsofficial.com/files/2014/09/Cornell.png",
            "description": "this is project 1"
        },
        {
            "title": "project2",
            "sponsor": "Appinions",
            "dates": "2014",
            "link": "http://www.appinions.com/",
            "image_link": "https://pbs.twimg.com/profile_images/2597231983/jkjaf08nnf2pay487zra.jpeg",
            "description": "this is project 2"
        }
    ]
};

$("#resume-main").append(HTMLprojectExperiences);
for (project in projects.projects){
    $("#project-experiences").append(HTMLprojectExperienceStart
        +HTMLprojectExperienceLink.replace("%link%",projects.projects[project].link).replace("%image-source%",projects.projects[project].image_link)
        +HTMLprojectExperienceTitle.replace("%title%",projects.projects[project].title)
        +HTMLprojectExperienceSponsor.replace("%sponsor%",projects.projects[project].sponsor)
        +HTMLprojectExperienceDate.replace("%date%",projects.projects[project].dates)
        +HTMLprojectExperienceDescription.replace("%description%",projects.projects[project].description));
}

var education = {
    "schools": [
        {
            "school": "Cornell Tech",
            "location": "New York City, NY",
            "degree": "MBA",
            "dates": "2014-2015",
            "link": "http://tech.cornell.edu/",
            "image_link": "http://www.fallsofficial.com/files/2014/09/Cornell.png"
        },
        {
            "school": "MIT",
            "location": "Cambridge, MA",
            "degree": "BS",
            "major": "Mechanical Engineering",
            "dates": "2006-2010",
            "link": "web.mit.edu",
            "image_link": "http://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/321px-MIT_logo.svg.png"
        },
        {
            "school": "MIT",
            "location": "Cambridge, MA",
            "degree": "BS",
            "major": "Management Science",
            "dates": "2006-2010",
            "link": "web.mit.edu",
            "image_link": "http://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/321px-MIT_logo.svg.png"
        },
        {
            "school": "Udacity",
            "location": "",
            "degree": "Nano-Degree",
            "major": "Web Development",
            "dates": "2015",
            "link": "udacity.com",
            "image_link": "https://forums.udacity.com/upfiles/udacity-logo.jpg"
        }
    ]
};

$("#resume-main").append(HTMLeducationExperiences);
for (school in education.schools){
    var major = "";
    if(education.schools[school].major){
        major=HTMLeducationExperienceMajor.replace("%major%",education.schools[school].major);
    }
    $("#education-experiences").append(HTMLeducationExperienceStart
        +HTMLeducationExperienceLink.replace("%link%",education.schools[school].link).replace("%image-source%",education.schools[school].image_link)
        +HTMLeducationExperienceDegree.replace("%degree%",education.schools[school].degree)
        +major
        +HTMLeducationExperienceSchool.replace("%school%",education.schools[school].school)
        +HTMLeducationExperienceDate.replace("%date%",education.schools[school].dates));
}

var relevantTopics = {
    "topics": [
        {
            "text": "NLP",
            "relevance": "0.8"
        },
        {
            "text": "Product Management",
            "relevance": "0.8"
        },
        {
            "text": "Agile Development",
            "relevance": "0.8"
        },
        {
            "text": "Strategy",
            "relevance": "0.8"
        },
        {
            "text": "Wireframe",
            "relevance": "0.8"
        },
        {
            "text": "PowerPoint",
            "relevance": "0.8"
        },
        {
            "text": "Excel",
            "relevance": "0.8"
        },
        {
            "text": "Tableau",
            "relevance": "0.7"
        },
        {
            "text": "Microsoft Office",
            "relevance": "0.2"
        }
    ]
};

$("#resume-main").append(HTMLrelevantTopics);
for (topic in relevantTopics.topics) {
    if(relevantTopics.topics[topic].relevance/1>0.5){
        $("#topicList").append(HTMLrelevantTopic.replace("%topic%",relevantTopics.topics[topic].text));
    }
}

var fromTheWebColor = ["#3F51B5", "#D50000", "#109D59", "#FFC107"]







$("#resume-main").append(HTMLmap);

if(bio.social){
    $("#resume-main").append(HTMLsocialIconsBelow);
    for (network in bio.social) {
        $("#social-icons-below").append(HTMLsocialIcon.replace(/%social%/g,network).replace("%link%",bio.social[network].link));
    }
}


/*education.display = function(){
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
});*/

function inName(name){
    var name=name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}

//$("#resume-main").append(internationalizeButton);



$("#mapDiv").append(googleMap);


