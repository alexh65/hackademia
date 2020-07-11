const signs = {
  "capricorn":  {
    "element" : "earth: practical and grounded",
    "qualities" : "cardinal: take action and start initiatives",
    "ruler" : "Saturn",
    "representation" : "The Goat",
    "perfect match" : "Virgo",
    "imperfect match" : "Gemini",
    "professional" : "Capricorns are serious, pragmatic, and organized - but definitely not boring. You have the charisma and enthusiasm to lead a team. You're not intimidated or annoyed by authority — you know that with hard work, ambition, and commitment, you too can be at the top.",
    "career path" : "Capricorns run a tight ship, so they're great at being a manager or administrator for a number of career paths or companies. Your production and administrative skills are some of the best, and you work well in corporate environments with set hierarchies that let you achieve the next rung on the ladder. You also make great engineers, architects, and design-adjacent employees, as you're one for details."
  },
  "aquarius":  {
    "element" : "air: intellectual and curious",
    "qualities" : "fixed: steady, consistent forces that maintain movement",
    "ruler" : "Uranus",
    "representation" : "The Water Bearer",
    "perfect match" : "Sagittarius",
    "imperfect match" : "Cancer",
    "professional" : "Aquarians are true, free spirits. But don't mistake this for flighty workers — they're hardworking, albeit with an out-of-the-box attitude. You are adept at handling team assignments as well as working on your own. You tend to come up with ideas that at first thought are wacky before being deemed brilliant.",
    "career path" : "Science or tech (if you can explore new theories or applications), graphic design or photography, and even project management — if you get to explore new ways of doing something. You're also an ideal entrepreneur or independent contractor, as you rebel against corporate culture and work best on your own schedule."
  },
  "pisces":  {
    "element" : "water: intuitive and emotional",
    "qualities" : "mutable: well-suited to change and transformation",
    "ruler" : "Neptune",
    "representation" : "The Fish",
    "perfect match" : "Scorpio",
    "imperfect match" : "Virgo",
    "professional" : "Pisces are as flexible as they come when it comes to the workforce—you're not concerned about proving yourself to others, you're only concerned with doing the best you can. You're compassionate and highly intuitive—making you great in areas that are both healing and restorative, like the arts and medicine.",
    "career path" : "Anything having to do with healthcare (where you can heal others) is an ideal fit. Think nurse, doctor, physical therapist, psychologist, etc. You also thrive in the arts, like dance and music."
  },
  "aries":  {
    "element" : "fire: passionate and exuberant",
    "qualities" : "cardinal: take action and start initiatives",
    "ruler" : "Mars",
    "representation" : "The Ram",
    "perfect match" : "Libra",
    "imperfect match" : "Taurus",
    "professional" : "Aries' are natural born leaders, however they have a tendency to start a lot of projects without finishing all of them. However, with a supportive team of friends and colleagues, you are unstoppable!",
    "career path" : "Anything having to do with competition or physicality is right up your alley. Think: outdoor guide, personal trainer, athlete, or working for a sports organization. And a CEO or other management professional isn't far off — you like being in control, and do best when you can offer your insight to a support team to execute."
  },
  "taurus":  {
    "element" : "earth: practical and grounded",
    "qualities" : "fixed: steady, consistent forces that maintain movement",
    "ruler" : "Venus",
    "representation" : "The Bull",
    "perfect match" : "Scorpio",
    "imperfect match" : "Sagittarius",
    "professional" : "Taurus' are grounded and practical, making you ideal in the workplace, as they can easily maneuver from leader to follower (or vice versa) in any situation. You are naturally inclined to lead by example, and your hard work and dedication is something to admire. However, you can be stubborn, which may be off-putting in team situtions, so you need to be careful about picking their battles.",
    "career path" : "Taurus' thrive in an environment that rewards tenacity and dedication, and tend to value a steady routine. They are also great with money and practical financial advice, making them ideal for banking and finance careers"
  },
  "gemini":  {
    "element" : "air: intellectual and curious",
    "qualities" : "mutable: well-suited to change and transformation",
    "ruler" : "Mercury",
    "representation" : "The Twins",
    "perfect match" : "Sagittarius",
    "imperfect match" : "Capricorn",
    "professional" : "Geminis thrive in fast-paced, stimulating environments that offer you variety and the chance to interact with many different things. You can quickly move through anything at rapid speed, but beware: this also means you can get bored, and quickly, if not given a diverse task list.",
    "career path" : "Anything that requires relaying information and keeping up with tons of different topics is an ideal career path for Gemini, so teaching and communications are perfect for them. You're mentally active and love to process a lot of different aspects of a project, so being a go-between of sorts would also work well—think PR and publicity or project manager."
  },
  "cancer":  {
    "element" : "water: intuitive and emotional",
    "qualities" : "cardinal: take action and start initiatives",
    "ruler" : "The Moon",
    "representation" : "The Crab",
    "perfect match" : "Taurus",
    "imperfect match" : "Aquarius",
    "professional" : "Cancers are the most traditional, nurturing sign of the zodiac, so you like to lead by example and can handle responsibility with ease. You are great caretakers, and excel in careers that let you give advice or solve problems. You don't do as well in careers where you can't see your work making a difference or getting results.",
    "career path" : "Cancers make natural childcare workers and nannies, but they also make amazing social workers, human resource employees, lawyers, teachers, and executives. Furthermore, they excel in positions relating to healthcare and wellness."
  },
  "leo":  {
    "element" : "fire: passionate and exuberant",
    "qualities" : "fixed: steady, consistent forces that maintain movement",
    "ruler" : "The Sun",
    "representation" : "The Lion",
    "perfect match" : "Sagittarius",
    "imperfect match" : "Scorpio",
    "professional" : "Leo's love inspiring others to be the best they can be, and can make great leaders and teachers. However, you have a tendency to be high-maintenance and can often disrupt team environments, but usually win everyone over at the end with your charm and good nature.",
    "career path" : "Teaching, politics and management roles are a great fit for a Leo, as they make magnetic leaders. Furthermore, anything having to do with entertaining others — such as acting, music, movie work, or even costume design can also pique their interest!"
  },
  "virgo":  {
    "element" : "earth: practical and grounded",
    "qualities" : "mutable: well-suited to change and transformation",
    "ruler" : "Mercury",
    "representation" : "The Virgin",
    "perfect match" : "Scorpio",
    "imperfect match" : "Sagittarius",
    "professional" : "Virgo's perfectionist and compassionate nature means you deal well with mass amounts of information and know what to do when emotions run high. As a leader, you're practical and protective, while demanding the best from others, and as an employee you're considerate and take direction well.",
    "career path" : "Virgos do extremely well in the service and care industries (as servers, running shops, working the front desk, and as therapists) while they also excel at anything that requires mass amounts of research or stats: think fact-checker and editor, technician, translator, or detective"
  },
  "libra":  {
    "element" : "air: intellectual and curious",
    "qualities" : "cardinal: take action and start initiatives",
    "ruler" : "Venus",
    "representation" : "The Scales",
    "perfect match" : "Libra",
    "imperfect match" : "Virgo",
    "professional" : "Libras are social and adept at bringing people together so you're a great mediator in and out of the office. Reading people and understanding people's motivations comes naturally to you, and you can often use this to your advantage in any job or career field.",
    "career path" : "Law enforcement and justice are natural fits for you. You're a people person at heart, so working with others is crucial to your happiness — think hospitality, customer service, diplomats, travel agents, and even a wedding planner."
  },
  "scorpio":  {
    "element" : "water: intuitive and emotional",
    "qualities" : "fixed: steady, consistent forces that maintain movement",
    "ruler" : "Pluto",
    "representation" : "The Scorpion",
    "perfect match" : "Pisces",
    "imperfect match" : "Aries",
    "professional" : "Scorpios thrive in the midst of intelligence organizations, top-level or secret negotiations or handling confidential papers or very expensive goods. You also love a challenge and to investigate, and your intensity is legendary, which can work in a variety of fields.",
    "career path" : "You would be at home in the surgery room or as a secret agent, as well as working in crisis management. You're also great with resource management and logistics, and would make an outstanding chief financial officer."
  },
  "sagittarius":  {
    "element" : "fire: passionate and exuberant",
    "qualities" : "mutable: well-suited to change and transformation",
    "ruler" : "Jupiter",
    "representation" : "The Archer",
    "perfect match" : "Aquarius",
    "imperfect match" : "Taurus",
    "professional" : "Sagittarius have a knack for conversing with others, inspiring morale, working hard as team player, adapting to change, and encouraging others to enjoy the jobs that they do. Translation? You're kind of good at everything when it comes to working.",
    "career path" : "You love to travel and learn from others in every part of the world, so any job related to the travel industry is a good one, as is any job that has travel as a big part of the job—think consulting or tourism. Since you love inspiring others, you're also great as a teacher, youth program leader, or working for a non-profit."
  }
}
