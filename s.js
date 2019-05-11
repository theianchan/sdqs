var questions = {
	"r1": [
		"If you could be famous for one thing, what would it be?",
		"If you could go back in time, what year would you travel to?",
		"If you could trade lives with one person for an entire day who would it be?",
		"If your life turned in a movie, which actor would play you?",
		"Name a song that would be your life's anthem.",
		"What is one quote that you live by?",
		"What is something that is popular now that annoys you?",
		"What is the one thing you've always wanted to do?",
		"What is your best talent?",
		"What is your spirit animal?",
		"What was the last concert you went to?",
		"What was the weirdest movie you've watched?",
		"What was your favourite subject in school?",
		"Where do you most want to travel, but have never been?",
		"Which is your favourite restaurant in town?",
		"Which TV show do you want your life to be like?",
		"Is there a teacher that you wish you could call up and thank?",
		"Do you daydream more about the future or your past?",
		"Do you believe you’re going to be a good parent?",
		"Do you have any recurring dreams or nightmares?"
	],
	"r2": [
		"Do you have a secret hunch about how you will die?",
		"For what in your life do you feel most grateful?",
		"Given the choice of anyone in the world, whom would you want as a dinner guest?",
		"If you could change anything about the way you were raised, what would it be?",
		"If you could wake up tomorrow having gained any one quality or ability, what would it be?",
		"Name three things you and your partner appear to have in common.",
		"Take two minutes and tell your partner your life story in as much detail as possible.",
		"Tell your partner something that you like about them.",
		"Tell your partner the story behind the last picture you took on your phone.",
		"Time freezes for everyone but you for one day. What do you do?",
		"What is the craziest, most outrageous thing you want to achieve?",
		"What would constitute a \"perfect\" day for you?",
		"What's the sweetest thing you've done or someone's done for you?",
		"When did you last sing to yourself? To someone else?",
		"Where gets you out of bed in the mornings?",
		"Would you rather be famous when you are alive and forgotten when you die or unknown when you are alive but famous after you die?",
		"Do you think your parents are proud of where you are in life?",
		"What do you do when you feel lonely?",
		"What scares you the most about growing old?",
		"What don’t you regret that you probably should?"
	],
	"r3": [
		"Complete this sentence: \"I wish I had someone with whom I could share ... \"",
		"Do you believe in soulmates? Have you met her/him?",
		"How close and warm is your family? Do you feel your childhood was happier than most other people’s?",
		"If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
		"If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
		"If you were going to become a close friend with your partner, please share what would be important for him or her to know.",
		"If you were to die this evening, what would you most regret not having told someone? Why haven’t you told them yet?",
		"Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
		"Spend the rest of the round staring into your partner's eyes, no conversation allowed.",
		"Tell your partner the story behind the last text you sent.",
		"What do you value most in a friendship?",
		"What does friendship mean to you?",
		"What is the greatest accomplishment of your life?",
		"What is your most treasured memory?",
		"What’s the biggest lie you’ve ever told a significant other?",
		"Your house, containing everything you own, catches fire. You can save one item, no people or pets. What is it and why?",
		"What would instantly make you fall out of love with someone?",
		"How long did it take you to learn to love yourself?",
		"What do you do when you’re feeling lonely?",
		"Tell your partner one thing, big or small, that you've never told anyone else."
	],
	"inq": [
		"What were you hoping to change in your life by joining INQ? Did that change happen?",
		"What moment on INQ (or any dance team you've been on) have you been proudest of?",
		"Tell your partner the story of how you became a dancer.",
		"What's the most ambitious thing you've ever dreamed about doing as a dancer?"
	]
}

function getRandFromArray(a) {
	return a[Math.floor(Math.random() * a.length)];
}

function repeatMarkup(m, i) {
	var markup = ""
	while (i > 0) {
		markup += m;
		i--;
	}
	return markup;
}

function updateQuestion(i) {
	if (Math.random() < 0.05) {
		$("#hh").html(repeatMarkup("<img class='icon' src='unicorn.png'>", 3));
		$("#qq").text(getRandFromArray(questions["inq"]));
		return;
	}
	var level = 
	$("#hh").html(repeatMarkup("<img class='icon' src='spice.png'>", i));
	$("#qq").text(getRandFromArray(questions["r" + i]));
}

$(document).ready(function() {
	$("#r1").click(function() {updateQuestion(1);});
	$("#r2").click(function() {updateQuestion(2);});
	$("#r3").click(function() {updateQuestion(3);});
	$("#ra").click(function() {
		var i = getRandFromArray([1, 2, 3]);
		updateQuestion(i);
	});

});