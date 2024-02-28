import React, { useState } from "react";

const App = () => {
	const questions = [
		{
			questionText: "What is the capital of France ?",
			answerOptions: [
				{ answerText: "London", isCorrect: false },
				{ answerText: "Tokyo", isCorrect: false },
				{ answerText: "Abu Dhabi", isCorrect: false },
				{ answerText: "Paris", isCorrect: false },
			],
		},
		{
			questionText: "who is the CEO of Stark Industries ?",
			answerOptions: [
				{ answerText: "Pepper Stark", isCorrect: true },
				{ answerText: "Tony Stark", isCorrect: false },
				{ answerText: "Natasha Ramonoff", isCorrect: false },
				{ answerText: "Happy", isCorrect: false },
			],
		},
		{
			questionText: "Where is Stark Tower Located ? ",
			answerOptions: [
				{ answerText: "New York", isCorrect: true },
				{ answerText: "Los Angeles", isCorrect: false },
				{ answerText: "Behind Tea Stall", isCorrect: false },
				{ answerText: "Mumbai", isCorrect: false },
			],
		},
		{
			questionText: "Who is Thanoes ?",
			answerOptions: [
				{ answerText: "A Villian", isCorrect: true },
				{ answerText: "A Hero", isCorrect: false },
				{ answerText: "Not Sure", isCorrect: false },
				{ answerText: "Both", isCorrect: false },
			],
		},
		{
			questionText: "Who is the best superhero of all time ?",
			answerOptions: [
				{ answerText: "Superman", isCorrect: false },
				{ answerText: "Iron Man", isCorrect: false },
				{ answerText: "Thor", isCorrect: false },
				{ answerText: "Batman", isCorrect: true },
			],
		},
		{
			questionText: "Why Batman doesn't uses guns ?",
			answerOptions: [
				{ answerText: "He don't have any!!!", isCorrect: false },
				{ answerText: "He doesn't believe in killing..", isCorrect: true },
				{ answerText: "He is shy", isCorrect: false },
				{ answerText: "Doesn't know how to use", isCorrect: false },
			],
		},
		{
			questionText: "What drives Batman ?",
			answerOptions: [
				{ answerText: "Love", isCorrect: false },
				{ answerText: "Anger", isCorrect: false },
				{ answerText: "Hate", isCorrect: false },
				{ answerText: "Vengeance", isCorrect: true },
			],
		},
		{
			questionText: "What makes Batman differ from other heroes ?",
			answerOptions: [
				{ answerText: "Money", isCorrect: false },
				{ answerText: "Looks", isCorrect: false },
				{ answerText: "Powers", isCorrect: false },
				{ answerText: "Indomitable will", isCorrect: true },
			],
		},
		{
			questionText: "What is the superpower of Batman ?",
			answerOptions: [
				{ answerText: "Money", isCorrect: false },
				{ answerText: "Fame", isCorrect: false },
				{ answerText: "Ultra-Mindset", isCorrect: true },
				{ answerText: "Fighting Skills", isCorrect: false },
			],
		},
		{
			questionText: "Why Batman fights criminals being a Billionaire?",
			answerOptions: [
				{ answerText: "Its fun beating criminal asses.", isCorrect: false },
				{ answerText: "He likes being a hero", isCorrect: false },
				{ answerText: "He is a symbol of Justice", isCorrect: true },
				{ answerText: "He is bored,thats why.", isCorrect: false },
			],
		},
		{
			questionText: "who is richest among them ?",
			answerOptions: [
				{ answerText: "Batman", isCorrect: true },
				{ answerText: "SuperMan (haa, Paperboy)", isCorrect: false },
				{ answerText: "Tony Stark", isCorrect: false },
				{ answerText: "Dr Strange", isCorrect: false },
			],
		},
		{
			questionText: "who has trained Batman ?",
			answerOptions: [
				{ answerText: "He trained himself.", isCorrect: false },
				{ answerText: "Gotham City Police", isCorrect: false },
				{ answerText: "Ras-al-ghul", isCorrect: true },
				{ answerText: "He goes to karate classes", isCorrect: false },
			],
		},
		{
			questionText: "What makes Batman relate to you ?",
			answerOptions: [
				{ answerText: "You both are Orphans,Oops", isCorrect: false },
				{ answerText: "He Rich,You don't", isCorrect: false },
				{ answerText: "His principles", isCorrect: true },
				{ answerText: "His Rizz", isCorrect: false },
			],
		},
		{
			questionText: "Who hurt you recently ?",
			answerOptions: [
				{ answerText: "Nobody", isCorrect: true },
				{ answerText: "My Girlfriend", isCorrect: true },
				{ answerText: "My Family", isCorrect: true },
				{ answerText: "Myself", isCorrect: true },
			],
		},
		{
			questionText: "Are you crying like a little girl ?",
			answerOptions: [
				{ answerText: "What !!! No", isCorrect: true },
				{ answerText: "I don't cry", isCorrect: false },
				{ answerText: "I am Grown Ass Man!!! ", isCorrect: true },
				{ answerText: "Not sure", isCorrect: false },
			],
		},
		{
			questionText: "  If you build a fort, drive a Ford, and fill out a form, then what do you eat soup with ?",
			answerOptions: [
				{ answerText: "with fork", isCorrect: false },
				{ answerText: "with spoon", isCorrect: false },
				{ answerText: "With cup ", isCorrect: true },
				{ answerText: "No soup for me", isCorrect: false },
			],
		},

		{
			questionText: "  Which animal describes your personality ?",
			answerOptions: [
				{ answerText: "Sloth", isCorrect: true },
				{ answerText: "Bear", isCorrect: true },
				{ answerText: "Monkey", isCorrect: true },
				{ answerText: "Lion", isCorrect: true },
			],
		},
		{
			questionText: " Do you like this quiz ?",
			answerOptions: [
				{ answerText: "Nope,Go watch Pogo", isCorrect: true },
				{ answerText: "yes,very much", isCorrect: true },
				{ answerText: "Not really ", isCorrect: true },
				{ answerText: "hmmmm", isCorrect: true },
			],
		},


	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);




	const handleAnswerButtonClick = (isCorrect) => {
		let nextQuestion = currentQuestion + 1;
		let totalScore = 0;
		if (isCorrect === true) {
			totalScore = score + 1;
			setScore(totalScore);
		}

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			setTimeout(() => {
				setCurrentQuestion(0);
				setScore(0);
				setShowScore(false);
			}, 2500);
		}
	};

	return (
		<div className=" container-fluid app">
			<div className="row">
				<header>
					<h1>
						Welcome to React Quiz 
					</h1>
				</header>
				{showScore ? (
					<h3>
						{" "}
						You have scored {score} out of {questions.length}
					</h3>
				) : (
					<>
						<div className="col-lg-6  question-section">
							<div>
								<h3>
									Q.{currentQuestion + 1}{" "}
									{questions[currentQuestion].questionText}
								</h3>
							</div>
						</div>

						<div className="col-lg-6  answer-section">
							{questions[currentQuestion].answerOptions.map((item) => {
								return (
									<button
										type="button"
										className="btn btn-primary"
										onClick={() => handleAnswerButtonClick(item.isCorrect)}
									>
										{" "}
										{item.answerText}{" "}
									</button>
								);
							})}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default App;
