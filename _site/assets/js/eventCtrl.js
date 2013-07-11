function eventCtrl($scope) {
    $scope.events = [
        {
            name: "Level Up EXP",
            date: "22 June 2013",
            description: "University students graduate every year, and enter the workforce often unprepared for what they encounter. On 22nd June, 2013 we hope to change that. We are bringing together computer science and information technology students with professional technical visionaries and engineers to explore the future together.",
            photobook: "https://www.facebook.com/media/set/?set=a.341968892598851.1073741832.334505716678502&type=3",
            photos: [
                { img: "/assets/img/events/lvlxp-1.jpg" },
                { img: "/assets/img/events/lvlxp-2.jpg" },
                { img: "/assets/img/events/lvlxp-3.jpg" },
                { img: "/assets/img/events/lvlxp-4.jpg" }
            ],
            testimonial: [
                { text: "Good to know what's actually happening outside of Uni"},
                { text: "I wish I could do both tracks"},
                { text: "Thank you ThoughtWorks for taking time on a weekend of conducting an insightful and very helpful session"},
                { text: "Very informative"},
                { text: "Good high level understanding of concepts"},
                { text: "Awesome session"},
                { text: "Inspiring"}
            ]
        },
        {
            name: "Level Up One",
            date: "12 March 2013",
            description: "The LevelUp program took those interested in going above and beyond regular textbook learning through a course of six sessions over six weeks, designed to equip participants with the skills and knowledge needed to bridge the gap between university and working life.",
            photobook: "https://www.facebook.com/media/set/?set=a.334512056677868.1073741828.334505716678502&type=1",
            photos: [
                { img: "/assets/img/events/lvlone-1.jpg" },
                { img: "/assets/img/events/lvlone-2.jpg" },
                { img: "/assets/img/events/lvlone-3.jpg" },
                { img: "/assets/img/events/lvlone-4.jpg" }
            ],
            testimonial: [
                { text: "Great coverage of a broad topic. I didn't know what to expect at first & was greatly impressed with ThoughtWorker's ability to impart knowledge"},
                { text: "Well fed; chillaxed nature"},
                { text: "Hands on - very practical"},
                { text: "Love how the program is relaxed and not too corporate or formal"},
                { text: "Thanks for the experience"},
                { text: "Every ThoughtWorker's contribution for different sessions"},
                { text: "Like the tasks! The playdough game, the UFO game etc - they were fun and helped for understanding"}
            ]
        }

    ];
}
