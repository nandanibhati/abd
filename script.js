// Data for subcategories and their respective quizzes
const subcategoryData = {
  anatomy: ["Set-1", "Set-2", "Geometry", "Trigonometry"],
  science: ["Physics", "Chemistry", "Biology"],
  history: ["Ancient", "Medieval", "Modern"],
  geography: ["Continents", "Countries", "Cities"],
  sports: ["Football", "Tennis", "Cricket"],
  art: ["Renaissance", "Modern", "Baroque"],
};

// Function to load subcategories dynamically based on the selected category
function loadSubcategories() {
  const category = document.getElementById("category").value;
  const subcategorySelect = document.getElementById("subcategory");
  const subcategorySection = document.getElementById("subcategory-section");

  // Clear any previous subcategory options
  subcategorySelect.innerHTML = "";

  if (category) {
    subcategoryData[category].forEach((subcat) => {
      const option = document.createElement("option");
      option.value = subcat;
      option.innerText = subcat;
      subcategorySelect.appendChild(option);
    });
    subcategorySection.classList.remove("hidden"); // Show the subcategory dropdown
  } else {
    subcategorySection.classList.add("hidden"); // Hide the subcategory dropdown if no category is selected
  }
}

// Function to start the quiz by navigating to a new page with URL parameters for category and subcategory
function startQuiz() {
  const category = document.getElementById("category").value;
  const subcategory = document.getElementById("subcategory").value;

  if (category && subcategory) {
    // Redirect to quiz page with category and subcategory as URL parameters
    window.location.href = `quiz.html?category=${category}&subcategory=${subcategory}`;
  } else {
    alert("Please select both a category and subcategory to start the quiz.");
  }
}

// Data for quiz questions organized by category and subcategory
const quizData = {
  anatomy: {
    "Set-1": [
      {
        question:
          "A patient underwent extraction of 3rd molar tooth and after this the patient was observed to have a loss of sensation from the anterior 2/3rd of the tongue and floor of the mouth. Which nerve is most likely to be damaged?",
        options: [
          "Hypoglossal nerve",
          "Lingual nerve",
          "Accessory nerve",
          "Inferior alveolar nerve",
        ],
        answer: 1,
      },
      {
        question:
          "A person had a road traffic accident and suffered from injury to the membranous urethra. Which will be the location of collection of urine due to this injury?",
        options: [
          "Superficial perineal pouch",
          "Peritoneal cavity",
          "Anterior abdominal wall",
          "Ischiorectal fossa",
        ],
        answer: 0,
      },
      {
        question:
          "A needle has to be inserted by an intern for thoracentesis. Which is the most preferred site for this clinical procedure?",
        options: [
          "Lower border of the upper rib",
          "Upper border of the lower rib",
          "Middle of the intercostal space",
          "Lower border of the lower rib",
        ],
        answer: 1,
      },
      {
        question:
          "What is the vertebral level for the red-colored line shown in the image?<br><img src='images/4.jpeg' alt='Vertebral Level Image' />",
        options: ["L2-L3", "L3-L4", "L4-L5", "L5-S1"],
        answer: 2,
      },
      {
        question:
          "A maid in the house complained of pain and swelling at the knee. Which bursa can be involved in this condition?<br><img src='images/5.jpeg' alt='Vertebral Level Image' />",
        options: ["A", "B", "C", "D"],
        answer: 0,
      },
      {
        question: "Which congenital deformity is shown in the image?<br><img src='images/6.jpeg' alt='Vertebral Level Image' />",
        options: [
          "Anencephaly",
          "Craniorachischisis",
          "Meningomyelocele",
          "Spina bifida occulta",
        ],
        answer: 2,
      },
    ],
  },
  science: {
    Physics: [
      {
        question: "What is the speed of light?",
        options: ["3x10^8 m/s", "1x10^6 m/s", "5x10^8 m/s", "2x10^8 m/s"],
        answer: 0,
      },
    ],
    Chemistry: [
      {
        question: "What is H2O?",
        options: ["Water", "Oxygen", "Hydrogen", "Carbon"],
        answer: 0,
      },
    ],
  },
};

// Function to load quiz questions based on the selected category and subcategory
function loadQuiz(category, subcategory) {
  const quizContainer = document.getElementById("quiz-container");
  const questionsDiv = document.getElementById("questions");
  questionsDiv.innerHTML = ""; // Clear any previous quiz questions

  // Check if quiz data exists for the selected category and subcategory
  if (!quizData[category] || !quizData[category][subcategory]) {
    document.body.innerHTML = "<h1>No quiz available for this subcategory</h1>";
    return;
  }

  // Loop through each quiz question and dynamically create the quiz interface
  quizData[category][subcategory].forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionLabel = document.createElement("label");
    questionLabel.innerHTML = `${index + 1}. ${q.question}`;

    questionDiv.appendChild(questionLabel);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    q.options.forEach((option, optionIndex) => {
      const optionLabel = document.createElement("label");

      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = `question-${index}`;
      optionInput.value = optionIndex;

      // Change border color on answer selection and add tick/cross icons
      optionInput.addEventListener("change", () => {
        const inputs = optionsDiv.querySelectorAll('input[type="radio"]'); // Select all radio inputs within the optionsDiv

        // Clear feedback and outline from all options
        inputs.forEach((input) => {
          input.style.outline = ""; // Clear previous outlines

          // Remove any existing feedback icon from the label
          const label = input.parentElement; // Get the parent label of the input (radio button)
          const feedback = label.querySelector(".feedback");
          if (feedback) {
            feedback.remove(); // Remove the previous feedback icon (✔ or ✘)
          }
        });

        // Create a span for the feedback (✔ or ✘)
        const feedbackIcon = document.createElement("span");
        feedbackIcon.classList.add("feedback"); // Add a class for styling, if needed
        feedbackIcon.style.marginLeft = "10px"; // Add spacing between text and icon

        const label = optionInput.parentElement; // Get the label for the current selected input

        // If the user selects the correct answer
        if (parseInt(optionInput.value) === q.answer) {
          feedbackIcon.innerHTML = "✔"; // Show green checkmark for correct answer
          feedbackIcon.style.color = "green"; // Set color to green
          // label.style.outline = "2px solid green";          // Correct answer, green outline

          // Disable all inputs after selecting the correct answer
          inputs.forEach((input) => {
            input.disabled = true; // Disable all inputs after correct answer is selected
          });
        }
        // If the user selects an incorrect answer
        else {
          feedbackIcon.innerHTML = "✘"; // Show red cross for incorrect answer
          feedbackIcon.style.color = "red"; // Set color to red
          // label.style.outline = "2px solid red";            // Incorrect answer, red outline

          // Disable the selected input so that it can't be changed
          optionInput.disabled = true;

          // Immediately show the correct answer with green checkmark
          inputs.forEach((input) => {
            if (parseInt(input.value) === q.answer) {
              const correctLabel = input.parentElement; // Get the label of the correct answer
              const correctFeedback = document.createElement("span"); // Create a new feedback icon for the correct answer
              correctFeedback.innerHTML = "✔"; // Green checkmark for the correct answer
              correctFeedback.style.color = "green"; // Set color to green
              correctFeedback.style.marginLeft = "10px"; // Add spacing

              correctLabel.appendChild(correctFeedback); // Append the checkmark
              // correctLabel.style.outline = "2px solid green";         // Green outline for the correct answer
            }
          });

          // Disable all inputs after showing the correct answer
          inputs.forEach((input) => {
            input.disabled = true; // Disable all inputs after incorrect answer is selected
          });
        }

        // Append the feedback icon (✔ or ✘) to the label
        label.appendChild(feedbackIcon);
      });

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
      optionsDiv.appendChild(optionLabel);
    });

    questionDiv.appendChild(optionsDiv);

    // Add a light border below each question
    questionDiv.style.borderBottom = "1px solid #ddd";
    questionDiv.style.paddingBottom = "10px";
    questionDiv.style.marginBottom = "20px"; // Space between questions

    questionsDiv.appendChild(questionDiv);
  });

  quizContainer.classList.remove("hidden"); // Show the quiz once questions are loaded
}

// Function to submit the quiz and calculate the score
function submitQuiz() {
  // Get the category and subcategory from URL parameters
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const subcategory = params.get("subcategory");

  // Check if quiz data exists for the selected category and subcategory
  if (!quizData[category] || !quizData[category][subcategory]) {
    alert("No quiz data found for the selected category and subcategory.");
    return;
  }

  const totalQuestions = quizData[category][subcategory].length;
  let score = 0;

  // Loop through each question and check the selected answers
  quizData[category][subcategory].forEach((q, index) => {
    const selectedOption = document.querySelector(
      `input[name="question-${index}"]:checked`
    );
    if (selectedOption && parseInt(selectedOption.value) === q.answer) {
      score++;
    }
  });

  // Navigate to the result page with the score and total questions as URL parameters
  window.location.href = `result.html?score=${score}&total=${totalQuestions}`;
}

// Function to restart the quiz
function restartQuiz() {
  window.location.reload();
}

// Function to handle result page URL and display the score
function displayResult() {
  const urlParams = new URLSearchParams(window.location.search);
  const score = urlParams.get("score");
  const total = urlParams.get("total");

  // Display score on the result page
  if (score !== null && total !== null) {
    document.getElementById(
      "result"
    ).innerText = `You scored ${score} out of ${total}`;
  } else {
    document.getElementById("result").innerText = "No quiz data available.";
  }
}
