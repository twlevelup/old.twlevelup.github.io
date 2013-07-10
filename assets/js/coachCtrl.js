function coachCtrl($scope) {
  $scope.coaches = [
    {
      name: "Sam Gibson",
      title: "Man of American Steel",
      image: "/assets/img/coaches/sam-gibson.jpg",
      blurb: "<p>My Little Pony is an entertainment franchise developed by Hasbro which is marketed primarily to girls. It started as a line of plastic pony toys developed by Bonnie Zacherle, Charles Muenchinger and Steve D'Aguanno which have been produced since 1983.</p> <p>As a result of these qualities, Friendship Is Magic has not only proven a major success in its intended demographics,[6] but also unexpectedly gained significant followings in peripheral ones, such as teen and adult males. The show has also attracted media coverage for its fanbase, which has spawned numerous adult-themed parodies, mashups, and images, mostly outside its main target audience, especially seen on YouTube and DeviantArt.</p>"
    },
    {
      name: "Sam Massey",
      title: "Grad Recruiter/Actor/Writer/Thought wanderer and keeper of the peace",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Speaking at this year's AAGE annual conference about why we became no.1 grad employer in Australia...I'm still figuring it out!</p> <p>Grew up in a teen weeny village in England. Trained as an actor, got paid for 10 years to speak Shakespeare and entertain people, became a writer, joined ThoughtWorks London part-time in 2010, loved it, became grad recruiter in Oz in 2013, loved it even more. Still write/film stuff in my spare time. Lover of football (the European kind). Photographer and ocean swimmer. </p>"
    },
    {
      name: "Darren Smith",
      title: "Architect, Developer, and Principal Consultant",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Over 18 years experience in the IT industry, across Australia, China, USA and Canada. As a principal consultant with ThoughtWorks Australia, Darren possesses a unique ability to balance strategic thinking with delivering solutions that meet immediate needs.</p> <p>Specialties: Consulting, agile software development, and enterprise architecture.</p>"
    },
    {
      name: "Gareth Sutton",
      title: "Sales Master",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Consultative sales rep, looking to help customers find business and technical improvement. </p> <p>ThoughtWorks are the leaders in Agile, trying to change the way technology is delivered. Our consulting services range from developing awesome software through to helping you change the way you innovate. </p>"
    },
    {
      name: "Angus Irvine",
      title: "Senior Consultant at ThoughtWorks",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Agile Business Analyst with considerable experience in web projects across both the commercial product and business application spaces.</p> <p>Specialties:Requirements elicitation, user story creation, workshop facilitation, stakeholder management, iteration management, agile delivery.</p>"
    },
    {
      name: "Adam Hope",
      title: "Grad Recruiter/Actor/Writer/Thought wanderer and keeper of the peace",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Highly experienced Client Side Web Developer with strong skills in Web 2.0 technologies. A proven track record in delivering complex client side projects. Excellent reputation as an effective, reliable, results-oriented developer and team player.</p> <p>Particular expertise in building standards compliant and accessible user interface frameworks and components for a variety of web applications using XML, XSLT, HTML, JavaScript and CSS.</p> <p>Specialties:AJAX, Javascript, CSS, HTML, XML, XSLT, XHTML, Graphic Design, W3C AAA Compliance</p>"
    },
    {
      name: "James Gregory",
      title: "Senior Consultant at ThoughtWorks",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Code monkey. Breaker, fixer, do'er.</p>"
    },
      {
          name: "Julian Parry",
          title: "Batman",
          image: "http://www.placekitten.com/150/150",
          blurb: "<p>Hey now hey now</p>"
      },
    {
      name: "Andrew Jones",
      title: "Software Developer",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Specialties:Software development, GNU/Linux systems administration, web development.</p>"
    },
    {
      name: "Cassandra Hill",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Kate Wilson",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Peter Budd",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Sam Newman",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Alex Gibson",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Evgany Dudin",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Sam Massey",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Sam Massey",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Inny So",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Leonor Salazar",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Keith Wale",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Khali Young",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Sam Massey",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },
    {
      name: "Marina Chiovetti",
      title: "Batman",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Hey now hey now</p>"
    },

    {
      name: "Pete Chemsripong",
      title: "Professional Doodler",
      image: "http://www.placekitten.com/150/150",
      blurb: "<p>Pete has over 9 years of experience in the field of design - Freelance illustrator, Children art teacher, Comic artist, Sold-out corporate graphic designer, Web designer, Team lead, you name it. His current role as an Experience Designer get him close and personal with his passion - the intersection of art (being human) and technology. &quot;The Holy Grail&quot;, he said.</p> <p>Pete's art work was featured at the Art Gallery of NSW. His comic book can probably still be found from Dark Horse, despite him trying to erase everything about that project.</p> <p>And yes, he also code.</p>"
    }



  ];
}
