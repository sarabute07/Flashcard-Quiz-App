document.addEventListener('DOMContentLoaded', () => {
  const flashcards = [
    { question: 'What does IDE stand for in programming?', answer: 'Integrated Development Environment' },
    { question: 'Who is the founder of Tesla?', answer: 'Elon Musk' },
    { question: 'Which country won the first ever ICC T20 World Cup?', answer: 'India' }
  ];

  let currentCard = 0;

  const flashcardElement = document.getElementById('flashcard');
  const questionElement = document.getElementById('question');
  const answerElement = document.getElementById('answer');

  function displayCard() {
    questionElement.textContent = flashcards[currentCard].question;
    answerElement.textContent = flashcards[currentCard].answer;
    flashcardElement.classList.remove('is-flipped');
  }

  document.getElementById('flip-card').addEventListener('click', () => {
    flashcardElement.classList.toggle('is-flipped');
  });

  document.getElementById('next-card').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    displayCard();
  });

  displayCard();
});
