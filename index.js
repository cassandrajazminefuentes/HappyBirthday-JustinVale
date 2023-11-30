function showHide(group) {
  var elements = document.getElementsByClassName(group);

  for (var i = 0; i < elements.length; i++) {
    if (
      elements[i].style.display === "none" ||
      elements[i].style.display === ""
    ) {
      elements[i].style.display = "block";
    } else {
      elements[i].style.display = "none";
    }
  }
}

// BACKGROUND COLOR

function colorOrange() {
  var body = document.body;
  body.style.backgroundColor = "lightsalmon";
}

function colorBlue() {
  var body = document.body;
  body.style.backgroundColor = "azure";
}

function colorLavender() {
  var body = document.body;
  body.style.backgroundColor = "lavender";
}

// TEXT COLOR

function colorWhite() {
  var body = document.body;
  body.style.color = "white";
  body.style.textShadow = "2px 2px 2px black";
}

function colorBlack() {
  var body = document.body;
  body.style.color = "black";
  body.style.textShadow = "2px 2px 2px white";
}

function colorGray() {
  var body = document.body;
  body.style.color = "gray";
}

// TIME

// // Set the date we're counting down to
// const countDownDate = new Date("November 30, 2023 00:00:00").getTime();

// // Update the countdown every 1 second
// const x = setInterval(function () {
//   // Get the current date and time
//   const now = new Date().getTime();

//   // Calculate the remaining time
//   const distance = countDownDate - now;

//   // Calculate days, hours, minutes, and seconds
//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the countdown in the respective HTML elements
//   document.getElementById("days").innerHTML = days + "d ";
//   document.getElementById("hours").innerHTML = hours + "h ";
//   document.getElementById("minutes").innerHTML = minutes + "m ";
//   document.getElementById("seconds").innerHTML = seconds + "s ";

//   // If the countdown is over, display a message
//   if (distance < 0) {
//     clearInterval(x);
//     // Change 'countdown' to the appropriate id in your HTML
//     document.getElementById("days").innerHTML = "HAPPY BIRTHDAY!!!";
//   }
// }, 1000);

//QUIZ
const questions = [
  {
    question: "When did we confess?",
    answers: ["June 12, 2023", "June 16, 2023", "June 11, 2023"],
    correctAnswer: "June 12, 2023",
  },
  {
    question: "What two colors represent us?",
    answers: ["Green & Pink", "Red & Blue", "Black & Purple"],
    correctAnswer: "Red & Blue",
  },
  {
    question: "What type of date was our first date?",
    answers: ["Normal Date", "Double Date", "Triple Date"],
    correctAnswer: "Double Date",
  },
  {
    question: "Where were we gonna take the mirror pic on June 11, 2023?",
    answers: ["McDonald's", "Daiso Japan", "Penshoppe"],
    correctAnswer: "Penshoppe",
  },
  {
    question: "What did we name our cat in our Minecraft world on the phone?",
    answers: ["Dory", "Spider-Cat", "Max"],
    correctAnswer: "Dory",
  },
];

function checkAnswers() {
  let score = 0;

  questions.forEach((q, index) => {
    const selectedAnswer = document.querySelector(
      `input[name="q${index + 1}"]:checked`
    );

    if (!selectedAnswer) {
      alert(`Please answer question ${index + 1}!`);
      return;
    }

    const userAnswer = selectedAnswer.value;
    const correctAnswer = q.correctAnswer;

    if (userAnswer === correctAnswer) {
      score++;
    }
  });

  displayResult(`You scored ${score} out of ${questions.length}!`);
}

function displayResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;
}

// VIDEO 
document.addEventListener('DOMContentLoaded', function () {
  var videos = document.querySelectorAll('video');

  videos.forEach(function (video) {
      video.addEventListener('play', function () {
          pauseOtherVideos(video);
      });
  });

  function pauseOtherVideos(currentVideo) {
      videos.forEach(function (video) {
          if (video !== currentVideo) {
              video.pause();
          }
      });
  }
});


// GIFT
function toggleIcon(container, event) {
  // Check if the click event originated from an input field
  if (event.target.tagName.toLowerCase() === 'input') {
    return;
  }

  // Toggle the 'opened' class on the container
  container.classList.toggle('opened');
}

// AUDIO 
const audioElements = document.querySelectorAll('.songs audio');

    audioElements.forEach((audio, index) => {
        audio.addEventListener('ended', () => {
            // Play the next audio when the current one ends
            const nextIndex = (index + 1) % audioElements.length;
            audioElements[nextIndex].play();
        });
    });

    // Start playing the first audio
    audioElements[0].play();

// NAV BAR
    function showSection(clickedLink, sectionId) {
    // Hide all sections
  var sections = document.querySelectorAll('section');
  sections.forEach(function(section) {
      section.style.display = 'none';
  });

  // Show the selected section
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
      selectedSection.style.display = 'block';
  }
  if (selectedSection) {
    // Smooth scroll to the top of the section
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }


    // // Remove 'active' class from all links
    // const navLinks = document.querySelectorAll('nav a');
    // navLinks.forEach(link => link.classList.remove('active'));

    // // Add 'active' class to the clicked link
    // clickedLink.classList.add('active');
}
