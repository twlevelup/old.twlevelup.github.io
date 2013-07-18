function programCtrl($scope) {
  $scope.programs = [
    {
      week: "Week 1",
      summary: "Introduction / Agile Fundamentals / Team forming",
      description: "<p>Welcome to the program! We'll start by showing you how software development works in the real world - what's good, what's bad, and why we're all about agile. </p> <p>Once we're all grounded, we'll introduce you to the project you'll be working on (spoiler - its a video game), and we'll setup the teams that you'll be delivering in!</p>",
      preReading: [
        {
          link: "http://www.agilemanifesto.org/",
          title: "The Agile Manifesto"
        },
        {
          link: "http://www.youtube.com/watch?v=4u5N00ApR_k",
          title: "Want to run an agile project?"
        }
      ]
    },

    {
      week: "Week 2",
      summary: "Language fundamentals",
      description: "For those keen on coding we'll show you the ropes for what we will use, and then its time to get your hands dirty. Not a coder? No problem - we'll take you over to the dark side and show you the fundamentals of analysis, design and project management.",
      preReading: [
        {
          link: "http://www.lua.org/",
          title: "LUA"
        },
        {
          link: "https://github.com/",
          title: "Source Control - GitHub"
        },
        {
          link: "http://love2d.org/",
          title: "LOVE - The graphics engine"
        }
      ]
    },
    {
      week: "Week 3",
      summary: "Testing fundamentals / User testing",
      description: "Quality software is about more than just great code. From unit testing to user testing, we'll teach you the value of a test first philosophy, and show you how to put it into practice. Not a tester? Yes you are! Ensuring quality is <strong>everyone's</strong> responsibility.",
      preReading: [
        {
          link: "http://www.satisfice.com/blog/",
          title: "James Bach - Software Testing"
        },
        {
          link: "http://shake.luaforge.net/manual.html",
          title: "Shake - Lua Testing Framework"
        },
        {
          link: "http://specificationbyexample.com/key_ideas.html",
          title: "Specification by Example"
        }
      ]
    },
    {
      week: "Week 4",
      summary: "Continuous Integration / Continuous Design / Continuous Delivery",
      description: "Fail fast! This week is all about integration and deployment, and why both should happen as often as possible. ",
      preReading: [
        {
          link: "http://www.youtube.com/watch?v=IBghnXBz3_w",
          title: "Jez Humble - Continuous Delivery"
        },
        {
          link: "http://www.youtube.com/watch?v=szr0ezLyQHY",
          title: "Nordstrom - Innovation Lab"
        },
        {
          link: "http://www.martinfowler.com/articles/continuousIntegration.html",
          title: "Martin Fowler - Continuous Integration"
        }
      ]
    },
    {
      week: "Week 5",
      summary: "Project work / Guest lectures",
      description: "Halfway! Now its time for the serious heavy lifting on your project. As project teams, you'll decide what help you need and what (if any) theory you want us to teach to help you get your software over the line. Plus planning and elaboration of features to be built, standups and mini showcases and retrospectives",
      preReading: [
        {
          link: "http://dannorth.net/whats-in-a-story/",
          title: "What's in a Story?"
        },
        {
          link: "http://www.scrumalliance.org/community/articles/2013/february/iteration-retrospective-activity-turn-the-tables",
          title: "Agile Retrospectives - Ideas for exercises"
        }
      ]
    },
    {
      week: "Week 6",
      summary: "Project work / Guest lectures",
      description: "More development of features from the backlog as teams, trying to adopt outputs from the retrospective to improve delivery. Rotation of roles to give people the opportunity to step outside their comfort zone. Plus any support that you need to get things done.",
      preReading: [
        {
          link: "http://www.startuplessonslearned.com/",
          title: "Lean Startup"
        }
      ]
    },
    {
      week: "Week 7",
      summary: "Project work / Guest lectures",
      description: "3rd week of delivery with continued focus on completing features. Starting to realise time is running out and that we need to make sure the most valuable and important features are released.",
      preReading: [
        {
          link: "http://www.agilemodeling.com/essays/prioritizedRequirements.htm",
          title: "Prioritisation of Backlogs"
        },
        {
          link: "http://www.mountaingoatsoftware.com/scrum/product-backlog",
          title: "What is a product Backlog?"
        },
      ]
    },
    {
      week: "Week 8",
      summary: "Project work / Guest lectures",
      description: "Final week for delivery. Take that chance to do something you havent done before in the project team. And that last minute rush to ensure things are done.",
      preReading: [
        {
          link: "https://leanpub.com/pride-and-paradev",
          title: "Pride & Paradev - A chance to be whatever you want to be"
        }
      ]
    },
    {
      week: "Week 9",
      summary: "Showcase / Retro",
      description: "Done? Lets see some working software! Time to show off what we've delivered, and then look back to learn from the journey. What have we learned on this project that we could use to do better next time? After that, we'll cap off the semester in style with some social drinks, and celebrate your first software project!",
      preReading: [
        {
          link: "http://www.youtube.com/watch?v=qa6nv2QC67M",
          title: "Showcase"
        },
        {
          link: "http://www.agileacademy.com.au/agile/sites/default/files/Agile%20Practices%20-%20Showcase.pdf",
          title: "Guidelines for showcases"
        }
      ]
    }
  ];
}
