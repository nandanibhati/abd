// Data for subcategories and their respective quizzes
const subcategoryData = {
  anatomy: [
    "Set-1",
    "Set-2",
    "Set-3",
    "Set-4",
    "Set-5",
    "Set-6",
    "Set-7",
    "Set-8",
    "Set-9",
    "Set-10",
  ],
  surgery: [
    "Set-1",
    "Set-2",
    "Set-3",
    "Set-4",
    "Set-5",
    "Set-6",
    "Set-7",
    "Set-8",
    "Set-9",
    "Set-10",
  ],
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

  // Clear previous subcategory options
  subcategorySelect.innerHTML = "";

  if (category && subcategoryData[category]) {
    subcategoryData[category].forEach((subcat) => {
      const option = document.createElement("option");
      option.value = subcat;
      option.innerText = subcat;
      subcategorySelect.appendChild(option);
    });
    subcategorySection.classList.remove("hidden"); // Show the subcategory dropdown
  } else {
    subcategorySection.classList.add("hidden"); // Hide subcategory dropdown if no category is selected
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
        question:
          "Which congenital deformity is shown in the image?<br><img src='images/6.jpeg' alt='Vertebral Level Image' />",
        options: [
          "Anencephaly",
          "Craniorachischisis",
          "Meningomyelocele",
          "Spina bifida occulta",
        ],
        answer: 2,
      },
      {
        question:
          "Post-delivery a female is complaining of pain in the anterolateral aspect of the thigh. Which nerve is most likely to be damaged?",
        options: [
          "Femoral nerve",
          "Lateral femoral cutaneous nerve",
          "Obturator nerve",
          "Tibial nerve",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following conditions is shown in the image?<br><img src='images/1.jpeg' alt='Condition Image' />",
        options: [
          "Biceps muscle rupture",
          "Humerus shaft fracture",
          "Radial nerve injury",
          "Triceps muscle injury",
        ],
        answer: 2,
      },
      {
        question:
          "A patient complains of pain and swelling below the ear. He cannot close his left eye completely and is having difficulty in eating food. Which nerve is most likely to be damaged?",
        options: [
          "Greater auricular nerve",
          "Auriculotemporal nerve",
          "Facial nerve",
          "Inferior alveolar nerve",
        ],
        answer: 2,
      },
      {
        question:
          "A patient is suffering from aortic dissection. Injury to which marked structure in the image will cause hiccups?<br><img src='images/2.jpeg' alt='Aortic Dissection Image' />",
        options: ["A", "B", "C", "D"],
        answer: 0,
      },
      {
        question:
          "Which underlying cause is responsible for the congenital deformity shown in the image?<br><img src='images/3.jpeg' alt='Congenital Deformity Image' />",
        options: [
          "Morulation",
          "Neurulation",
          "Lateral rotation",
          "Gastrulation",
        ],
        answer: 1,
      },
      {
        question:
          "At which time does the talus bone get ossified in the intrauterine life?",
        options: ["3 months", "6 months", "7 months", "9 months"],
        answer: 2,
      },
      {
        question: "Identify the arrow-marked structure in the given image.",
        options: [
          "External capsule",
          "Internal capsule",
          "Claustrum",
          "Globus pallidus",
        ],
        answer: 1,
      },
      {
        question:
          "Which embryological basis is correct about the malformation shown in the image?",
        options: [
          "Abnormal fusion of the maxillary and medial nasal processes",
          "Abnormal fusion of the maxillary and lateral nasal processes",
          "Abnormal fusion of the medial nasal and lateral nasal processes",
          "Abnormal fusion of the mandibular and lateral nasal processes",
        ],
        answer: 0,
      },
      {
        question:
          "In the given image which landmark carries splenic vessels?<br><img src='images/6.jpeg' alt='Splenic Vessels Image' />",
        options: ["A", "B", "C", "D"],
        answer: 2,
      },
      {
        question:
          "If the fracture occurs at an arrow-marked location, then which nerve is most likely to be involved?<br><img src='images/7.jpeg' alt='Fracture Image' />",
        options: [
          "Ulnar nerve",
          "Median nerve",
          "Radial nerve",
          "Musculocutaneous nerve",
        ],
        answer: 2,
      },
      {
        question:
          "Which structure passes through the arrow-marked area?<br><img src='images/8.jpeg' alt='Structure Image' />",
        options: [
          "Inferior vena cava",
          "Thoracic duct",
          "Sympathetic trunk",
          "Esophagus",
        ],
        answer: 1,
      },
      {
        question:
          "If the paracentral lobule of the brain is involved, then which region of the body will be affected?",
        options: [
          "Brain and neck",
          "Trunk and leg",
          "Trunk and arm",
          "Perineum and leg",
        ],
        answer: 3,
      },
      {
        question:
          "During the examination, when a patient was asked to stand on the left foot, a drop of the right hip/side was observed. Which muscles are paralyzed in this case?",
        options: [
          "Right gluteus medius and gluteus minimus",
          "Left gluteus medius and gluteus minimus",
          "Right gluteus maximus",
          "Left gluteus maximus",
        ],
        answer: 1,
      },
      {
        question:
          "At the level of the elbow, fracture is observed as seen in the image. Due to this, the forearm is pulseless. Which of the following structures is most likely injured?<br><img src='images/9.jpeg' alt='Elbow Fracture Image' />",
        options: [
          "Brachial artery",
          "Radial artery",
          "Ulnar artery",
          "Anterior interosseous artery",
        ],
        answer: 0,
      },
      {
        question:
          "A cyst is observed at the anterior border of the sternocleidomastoid in a 25-year-old man. This cyst is due to persistence of which of the following cleft?",
        options: ["1st", "2nd", "3rd", "4th"],
        answer: 1,
      },
      {
        question:
          "Identify the type of epithelium shown in the image.<br><img src='images/10.jpeg' alt='Epithelium Image' />",
        options: [
          "Transitional epithelium",
          "Keratinized stratified squamous epithelium",
          "Nonkeratinized stratified squamous epithelium",
          "Ciliated pseudostratified columnar epithelium",
        ],
        answer: 0,
      },
      {
        question:
          "The section along the frontal plane (as shown in diagram) is called:<br><img src='images/11.jpeg' alt='Frontal Plane Image' />",
        options: ["Sagittal", "Coronal", "Transverse", "Median"],
        answer: 1,
      },
      {
        question:
          "Identify the arrow marked follicle.<br><img src='images/12.jpeg' alt='Follicle Image' />",
        options: ["Primordial", "Primary", "Preantral", "Antral"],
        answer: 3,
      },
      {
        question: "Fallopian tube epithelium is:",
        options: [
          "Simple squamous",
          "Ciliated cuboidal",
          "Ciliated columnar",
          "Pseudostratified columnar",
        ],
        answer: 2,
      },
      {
        question:
          "The marked cell in the HPE image of thyroid follicles secrete which hormone?<br><img src='images/13.jpeg' alt='Thyroid Follicles Image' />",
        options: ["Thyroxine", "Calcitonin", "Adrenaline", "Prolactin"],
        answer: 0,
      },
      {
        question:
          "What is the embryological basis of the following congenital anomaly?<br><img src='images/14.jpeg' alt='Congenital Anomaly Image' />",
        options: [
          "Nonclosure of anterior neuropore",
          "Nonclosure of posterior neuropore",
          "Nonclosure of entire neural tube",
          "Nonclosure of skull bones",
        ],
        answer: 1,
      },
      {
        question:
          "Identify the encircled structure:<br><img src='images/28.jpeg' alt='Encircled Structure' />",
        options: ["Pterion", "Glabella", "Asterion", "Nasion"],
        answer: 0,
      },
      {
        question:
          "Ductus arteriosus develops from which pharyngeal arch artery?",
        options: ["3", "4", "5", "6"],
        answer: 1,
      },
      {
        question: "Structure developing in dorsal mesogastrium:",
        options: ["Lesser omentum", "Falcriform ligament", "Spleen", "Liver"],
        answer: 2,
      },
      {
        question:
          "Skin receptor responsible for detecting rapid vibration sense.",
        options: [
          "Meissner corpuscle",
          "Pacinian corpuscle",
          "Merkel cell",
          "Ruffini's corpuscle",
        ],
        answer: 1,
      },
      {
        question:
          "Failure of closure of rostral neuropore at 25th day leads to:",
        options: [
          "Craniorachischisis",
          "Spina bifida",
          "Anencephaly",
          "Hydranencephaly",
        ],
        answer: 2,
      },
      {
        question: "Fetal midgut rotates in intrauterine life by:",
        options: [
          "270 degree clockwise",
          "360 degree clockwise",
          "270 degree anticlockwise",
          "360 degree anticlockwise",
        ],
        answer: 0,
      },
      {
        question: "Rotation of mid gut loop occurs around:",
        options: [
          "Superior mesenteric artery",
          "Inferior mesenteric artery",
          "Middle-colic artery",
          "Superior rectal artery",
        ],
        answer: 0,
      },
      {
        question: "Neural crest cell migration is due to:",
        options: [
          "Heparin",
          "Heparan sulfate",
          "Dermal sulfate",
          "None of the above",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following is the derivative of ultimobranchial body?",
        options: [
          "Thyroid",
          "Parafollicular (C) cells",
          "Capsule of thyroid",
          "2nd branchial pouch",
        ],
        answer: 1,
      },
      {
        question:
          "Which of the following is the derivative of tumor from Rathke's pouch?",
        options: [
          "Meningioma",
          "Craniopharyngioma",
          "Ependymoma",
          "Low grade glioma",
        ],
        answer: 1,
      },
      {
        question: "Hardest bone of the body is:",
        options: [
          "Head of humerus",
          "Calcaneum",
          "Tibial condyle",
          "Osseous labyrinth",
        ],
        answer: 3,
      },
      {
        question:
          "Which of the following structure is derived from umbilical artery?",
        options: [
          "Ligamentum arteriosum",
          "Medial umbilical ligament",
          "Ligamentum venosum",
          "Ligamentum teres",
        ],
        answer: 1,
      },
      {
        question: "Labia majora is homologous to ____ in a male.",
        options: [
          "Glans penis",
          "Scrotum",
          "Corpus cavernosa",
          "Shaft of penis",
        ],
        answer: 1,
      },
      {
        question: "Morula cell stage has how many cells?",
        options: ["8", "16", "32", ">64"],
        answer: 1,
      },
      {
        question: "Umbilical cord has:",
        options: [
          "One artery, two veins and umbilical artery going to fetus",
          "One artery, two veins and umbilical artery going to placenta",
          "Two arteries and one vein, umbilical artery supplying towards fetus",
          "Two arteries and one vein, umbilical vein supplying towards fetus",
        ],
        answer: 3,
      },
      {
        question:
          "In the Umbilical cord which of the following structure does not get obliterated during fetal life?",
        options: [
          "Vitelline duct",
          "Vitelline vessels",
          "Allantois",
          "Umbilical vessels",
        ],
        answer: 2,
      },
      {
        question: "What is correct about embryogenesis?",
        options: [
          "Branchial cleft: Mesoderm",
          "Branchial arch: Ectoderm",
          "Branchial pouch: Endoderm",
          "All are correct",
        ],
        answer: 2,
      },
      {
        question: "Superior vena cava is derived from:",
        options: [
          "Aortic arch",
          "Pharyngeal arch",
          "Cardinal vein",
          "Vitelline vein",
        ],
        answer: 2,
      },
      {
        question: "Arch of aorta is derived from:",
        options: [
          "2nd Aortic arch",
          "3rd Aortic arch",
          "3rd pharyngeal arch",
          "4th pharyngeal arch",
        ],
        answer: 3,
      },
      {
        question: "Common carotid artery is derived from:",
        options: [
          "2nd aortic arch",
          "3rd pharyngeal arch",
          "4th pharyngeal arch",
          "6th pharyngeal arch",
        ],
        answer: 1,
      },
      {
        question: "Stylohyoid ligament is derived from:",
        options: [
          "1st branchial arch",
          "2nd branchial arch",
          "1st branchial pouch",
          "2nd branchial pouch",
        ],
        answer: 1,
      },
      {
        question:
          "Sphenomandibular ligament is derived from which branchial arch?",
        options: ["1", "2", "3", "4"],
        answer: 1,
      },
      {
        question:
          "Which of the following is a derivative of the 2nd branchial arch?",
        options: [
          "Stylohyoid ligament",
          "Sphenomandibular ligament",
          "Spine of sphenoid",
          "Greater cornu of hyoid",
        ],
        answer: 0,
      },
    ],

    //set-2 starts here --

    "Set-2": [
      {
        question: "Lesser cornu of hyoid bone is derived from which arch?",
        options: [
          "1st mandibular arch",
          "2nd branchial arch",
          "3rd branchial arch",
          "4th branchial arch",
        ],
        answer: 1, // Correct answer: 2nd branchial arch
      },
      {
        question:
          "Superior portion of hyoid bone is derived from which branchial arch?",
        options: ["1", "II", "III", "IV"],
        answer: 1, // Correct answer: II
      },
      {
        question:
          "All of the following muscles are derived from the 6th branchial arch, EXCEPT:",
        options: [
          "Lateral cricoarytenoid",
          "Posterior cricoarytenoid",
          "Interarytenoid",
          "Cricothyroid",
        ],
        answer: 3, // Correct answer: Cricothyroid
      },
      {
        question:
          "Which of the following does not develop from branchial pouch?",
        options: [
          "Superior parathyroid",
          "Inferior parathyroid",
          "Thymus",
          "Thyroid",
        ],
        answer: 3, // Correct answer: Thyroid
      },
      {
        question: "The auricle develops from:",
        options: [
          "1st branchial cleft",
          "1st branchial arch",
          "1st and 3rd branchial arch",
          "1st and 2nd branchial arch",
        ],
        answer: 3, // Correct answer: 1st and 2nd branchial arch
      },
      {
        question: "Inferior parathyroid gland develops from:",
        options: [
          "Branchial arch 3rd",
          "Branchial arch 4th",
          "Branchial pouch 3rd",
          "Branchial pouch 4th",
        ],
        answer: 2, // Correct answer: Branchial pouch 3rd
      },
      {
        question: "Tonsil is derived from:",
        options: ["1st pouch", "2nd pouch", "3rd pouch", "4th pouch"],
        answer: 1, // Correct answer: 2nd pouch
      },
      {
        question:
          "Which of the following is not derived from 1st pharyngeal pouch?",
        options: [
          "Middle ear",
          "Eustachian tube",
          "Tympanic membrane",
          "Palatine tonsils",
        ],
        answer: 3, // Correct answer: Palatine tonsils
      },
      {
        question: "External auditory canal is formed from:",
        options: [
          "Ventral part of 1st cleft",
          "Dorsal part of 1st cleft",
          "Ventral part of 2nd cleft",
          "Dorsal part of 2nd cleft",
        ],
        answer: 1, // Correct answer: Dorsal part of 1st cleft
      },
      {
        question: "Lower 1/3 of vagina is formed by:",
        options: [
          "Mesonephric duct",
          "Paramesonephric duct",
          "Sinovaginal bulb",
          "Mesoderm of mullerian duct",
        ],
        answer: 2, // Correct answer: Sinovaginal bulb
      },
      {
        question: "Hypoblast forms:",
        options: [
          "Notochord",
          "Apical ligament of atlas",
          "Endoderm",
          "Prochordal plate",
        ],
        answer: 2, // Correct answer: Endoderm
      },
      {
        question: "First organ to attain functional maturity is:",
        options: ["CVS", "CNS", "GIT", "Lungs"],
        answer: 0, // Correct answer: CVS
      },
      {
        question: "Gastrulation occurs in which week of embryonic development?",
        options: ["Week 1", "Week 2", "Week 3", "Week 4"],
        answer: 2, // Correct answer: Week 3
      },
      {
        question: "First germ layer to be formed is:",
        options: [
          "Ectoderm",
          "Endoderm",
          "Mesoderm",
          "All of them develop simultaneously",
        ],
        answer: 1, // Correct answer: Endoderm
      },
      {
        question: "Notochord is formed by:",
        options: ["Nucleus pulposus", "Epiblast", "Hypoblast", "Myeloblast"],
        answer: 1, // Correct answer: Epiblast
      },
      {
        question: "Homeobox gene is responsible for:",
        options: [
          "Segmental organization of embryo in cranio-caudal direction",
          "Proper organization along dorsal-ventral axis",
          "Stimulation for lengthening of limbs",
          "All of the above",
        ],
        answer: 0, // Correct answer: Segmental organization of embryo in cranio-caudal direction
      },
      {
        question: "Chromaffin cells are derived from:",
        options: ["Neural crest", "Ectoderm", "Neuroectoderm", "Endoderm"],
        answer: 0, // Correct answer: Neural crest
      },
      {
        question: "Proximal umbilical artery forms:",
        options: [
          "Superior vesical artery",
          "Median umbilical fold",
          "Lateral umbilical fold",
          "Ligamentum teres",
        ],
        answer: 0, // Correct answer: Superior vesical artery
      },
      {
        question: "Ligamentum teres is a remnant of:",
        options: [
          "Ductus venosus",
          "Ductus arteriosus",
          "Hypogastric artery",
          "Umbilical vein",
        ],
        answer: 3, // Correct answer: Umbilical vein
      },
      {
        question: "Remnant of ductus venosus will be:",
        options: [
          "Ligamentum teres",
          "Ligamentum venosum",
          "Ligamentum arteriosum",
          "Falciform ligament",
        ],
        answer: 1, // Correct answer: Ligamentum venosum
      },
      {
        question: "Left horn of sinus venosus forms:",
        options: [
          "Coronary sinus",
          "Smooth part of right atrium",
          "Superior vena cava",
          "Inferior vena cava",
        ],
        answer: 0, // Correct answer: Coronary sinus
      },
      {
        question: "Stapedial artery is derived from which aortic arch?",
        options: ["1", "2", "3", "4"],
        answer: 1, // Correct answer: 2
      },
      {
        question: "Fossa ovalis is a remnant of:",
        options: ["Septum primum", "Septum secundum", "Bulbus cordis", "Conus"],
        answer: 1, // Correct answer: Septum secundum
      },
      {
        question: "In a fetus, testis lies at superficial inguinal ring at:",
        options: ["6th month", "7th month", "8th month", "9th month"],
        answer: 1, // Correct answer: 7th month
      },
      {
        question: "Pons is derived from:",
        options: [
          "Metencephalon",
          "Myelencephalon",
          "Mesencephalon",
          "Prosencephalon",
        ],
        answer: 0, // Correct answer: Metencephalon
      },
      {
        question: "Glomerulus is derived from:",
        options: [
          "Metanephros",
          "Mesonephros",
          "Ureteric bud",
          "Urogenital sinus",
        ],
        answer: 0, // Correct answer: Metanephros
      },
      {
        question: "Prostate gland is derived from:",
        options: [
          "Urogenital sinus",
          "Urogenital folds",
          "Labioscrotal swelling",
          "Gubernaculum",
        ],
        answer: 0, // Correct answer: Urogenital sinus
      },
      {
        question: "Collecting duct is derived from:",
        options: ["Ureteric bud", "Mesonephros", "Metanephros", "Allantois"],
        answer: 0, // Correct answer: Ureteric bud
      },
      {
        question: "Synovial fluid is produced by:",
        options: [
          "Type A synoviocytes",
          "Type B synoviocytes",
          "Type C synoviocytes",
          "Type D synoviocytes",
        ],
        answer: 1, // Correct answer: Type B synoviocytes
      },
      {
        question: "Blue cartilage is:",
        options: ["Hyaline", "Elastic", "Fibrocartilage", "Synchondrosis"],
        answer: 2, // Correct answer: Fibrocartilage
      },
      {
        question: "Tyson's glands are:",
        options: [
          "Apocrine glands",
          "Holocrine gland",
          "Eccrine gland",
          "Endocrine gland",
        ],
        answer: 1, // Correct answer: Holocrine gland
      },
      {
        question: "Fecal fistula at the umbilicus is due to:",
        options: [
          "Persistent urachus",
          "Persistent vitellointestinal duct",
          "Raspberry tumor",
          "Sister Joseph nodules",
        ],
        answer: 1, // Correct answer: Persistent vitellointestinal duct
      },
      {
        question: "Ribs develop from:",
        options: [
          "Endothoracic fascia",
          "Para-axial mesenchyme",
          "Deep intercostal fascia",
          "Superficial intercostal fascia",
        ],
        answer: 1, // Correct answer: Para-axial mesenchyme
      },
      {
        question: "Pituitary develops from:",
        options: [
          "Posterior neural ridge",
          "Rathke pouch",
          "Neural crest",
          "Neural plate",
        ],
        answer: 1, // Correct answer: Rathke pouch
      },
      {
        question: "What is true about spermatogenesis?",
        options: [
          "It takes 74 days",
          "Takes place in spermatic cord",
          "Meiosis occurs only after secondary spermatocyte",
          "Spermatid is from spermatozoa",
        ],
        answer: 0, // Correct answer: It takes 74 days
      },
      {
        question: "Which of the following has the largest size?",
        options: [
          "Spermatogonium",
          "Primary spermatocyte",
          "Secondary spermatocyte",
          "Spermatozoa",
        ],
        answer: 1, // Correct answer: Primary spermatocyte
      },
      {
        question:
          "Spermatogonium to spermatozoon transformation takes place in:",
        options: ["64 days", "74 days", "84 days", "94 days"],
        answer: 1, // Correct answer: 74 days
      },
      {
        question: "Sperm acquires motility in:",
        options: [
          "Seminiferous tubule",
          "Fallopian tube",
          "Epididymis",
          "Spermatic cord",
        ],
        answer: 2, // Correct answer: Epididymis
      },
      {
        question:
          "All the following statements about seminal vesicles are true; EXCEPT:",
        options: [
          "Stores the spermatozoa",
          "Actively depends on the level of testosterone",
          "Secretion has abundant fructose",
          "Lined by pseudostratified columnar epithelium",
        ],
        answer: 0, // Correct answer: Stores the spermatozoa
      },
      {
        question:
          "At what stage of embryonic development does an embryo normally begin to implant in the endometrium?",
        options: [
          "Blastocyst",
          "Four-cell stage",
          "Morula",
          "Trilaminar embryo",
        ],
        answer: 0, // Correct answer: Blastocyst
      },
      {
        question: "Embryo term is used till:",
        options: [
          "12 weeks after LMP",
          "10 weeks after fertilization",
          "10 weeks after LMP",
          "8 weeks of fertilization",
        ],
        answer: 1, // Correct answer: 10 weeks after fertilization
      },
      {
        question: "Fetal stage is termed:",
        options: [
          "From the day of implantation",
          "From 6th week of gestation",
          "From 8th week of gestation",
          "From 10th week of gestation",
        ],
        answer: 2, // Correct answer: From 8th week of gestation
      },
      {
        question: "Which is not a derivative of midgut?",
        options: ["Appendix", "Jejunum", "Ascending colon", "Descending colon"],
        answer: 3, // Correct answer: Descending colon
      },
      {
        question: "Which of the following artery mainly supplies hind gut?",
        options: [
          "Celiac trunk",
          "Superior mesenteric artery",
          "Inferior mesenteric artery",
          "Rectal artery",
        ],
        answer: 2, // Correct answer: Inferior mesenteric artery
      },
      {
        question: "Adrenal medulla is derived from:",
        options: ["Ectoderm", "Endoderm", "Mesoderm", "Neural crest"],
        answer: 3, // Correct answer: Neural crest
      },
      {
        question: "Germ cells develop from:",
        options: [
          "Yolk sac",
          "Surface ectoderm",
          "Coelomic endoderm",
          "Trophoblastic layer",
        ],
        answer: 0, // Correct answer: Yolk sac
      },
      {
        question: "How many ossification centers are there for the hyoid bone?",
        options: ["5", "6", "7", "8"],
        answer: 1, // Correct answer: 6
      },
      {
        question: "Trigone of urinary bladder develops from:",
        options: ["Endoderm", "Ectoderm", "Mesoderm", "None of the above"],
        answer: 2, // Correct answer: Mesoderm
      },
      {
        question: "What are the vessels in umbilical cord?",
        options: [
          "1 artery, 2 veins",
          "2 arteries, 1 vein",
          "1 artery, 1 vein",
          "2 arteries, 2 veins",
        ],
        answer: 1, // Correct answer: 2 arteries, 1 vein
      },
      {
        question: "Testosterone in male is secreted from:",
        options: [
          "Leydig cell",
          "Sertoli cell",
          "Seminal vesicle",
          "Epididymis",
        ],
        answer: 0, // Correct answer: Leydig cell
      },
    ],

    //set3 starts here --

    "Set-3": [
      {
        question: "Gallbladder is lined by:",
        options: [
          "Ciliated columnar cells",
          "Brush bordered columnar epithelium",
          "Striated columnar epithelium",
          "Pseudostratified columnar cells",
        ],
        answer: 1, // Correct answer: Brush bordered columnar epithelium
      },
      {
        question: "Hassall's corpuscles are found in:",
        options: ["Liver", "Spleen", "Kidney", "Thymus"],
        answer: 3, // Correct answer: Thymus
      },
      {
        question: "Malphigian corpuscles are seen in:",
        options: ["Thyroid", "Kidney", "Neurons", "Liver"],
        answer: 1, // Correct answer: Kidney
      },
      {
        question: "Cord of Billroth is seen in:",
        options: ["Liver", "Spleen", "Kidney", "Thymus"],
        answer: 1, // Correct answer: Spleen
      },
      {
        question: "T cells are derived from:",
        options: ["Tonsils", "Spleen", "Thalamus", "Thymus"],
        answer: 3, // Correct answer: Thymus
      },
      {
        question: "Name the type of joint present at the arrow marked region:",
        options: ["Synchondrosis", "Syndesmosis", "Symphysis", "Synostosis"],
        answer: 1, // Correct answer: Syndesmosis
      },
      {
        question:
          "A patient presents to the emergency room with pain and swelling in the right shoulder. A fracture of the clavicle is suspected. The most common site of fracture is:",
        options: [
          "Junction of medial 1/3 and lateral 2/3",
          "Junction of medial 2/3 and lateral 1/3",
          "Medial 1/3",
          "Lateral 1/3",
        ],
        answer: 1, // Correct answer: Junction of medial 2/3 and lateral 1/3
      },
      {
        question:
          "In case of frozen shoulder, the marked muscle is involved. Identify which movement has been compromised at the joint:",
        options: ["Abduction", "Adduction", "Flexion", "Extension"],
        answer: 0, // Correct answer: Abduction
      },
      {
        question: "Identify the arrow marked tendon:",
        options: [
          "Abductor pollicis longus",
          "Abductor pollicis brevis",
          "Extensor pollicis longus",
          "Extensor pollicis brevis",
        ],
        answer: 2, // Correct answer: Extensor pollicis longus
      },
      {
        question:
          "Biceps brachii functions as which type of muscle for lifting forearm?",
        options: ["Prime mover", "Fixator", "Antagonist", "Synergist"],
        answer: 0, // Correct answer: Prime mover
      },
      {
        question:
          "A known case of leprosy has presented with the following deformity. The nerve compromised is:",
        options: ["Ulnar", "Median", "Ulnar and median", "Radial"],
        answer: 0, // Correct answer: Ulnar
      },
      {
        question: "The tendon marked 'X' in the given image is:",
        options: [
          "Flexor digitorum superficialis",
          "Flexor digitorum profundus",
          "Flexor carpi radialis",
          "Flexor carpi ulnaris",
        ],
        answer: 1, // Correct answer: Flexor digitorum profundus
      },
      {
        question:
          "A young computer operator presents with tingling sensation and paresthesia on the medial side of the hand. Which structure is most likely affected?",
        options: ["A", "B", "C", "D"],
        answer: 0, // Correct answer: A
      },
      {
        question: "The highlighted muscle is supplied by which nerve?",
        options: [
          "Axillary nerve",
          "Ulnar nerve",
          "Median nerve",
          "Musculocutaneous nerve",
        ],
        answer: 0, // Correct answer: Axillary nerve
      },
      {
        question: "Nerve involved in injury to the marked structure:",
        options: [
          "Axillary nerve",
          "Ulnar nerve",
          "Median nerve",
          "Radial nerve",
        ],
        answer: 0, // Correct answer: Axillary nerve
      },
      {
        question:
          "Which of the following nerves get compromised in a lesion at the arrow marked area?",
        options: [
          "Axillary nerve",
          "Radial nerve",
          "Median nerve",
          "Ulnar nerve",
        ],
        answer: 1, // Correct answer: Radial nerve
      },
      {
        question:
          "An injury to the shown area can lead to fracture of which bone?",
        options: ["Scaphoid", "Lunate", "Trapezium", "Hamate"],
        answer: 0, // Correct answer: Scaphoid
      },
      {
        question:
          "Which muscle originates from the medial epicondyle of the humerus?",
        options: [
          "Supinator",
          "Pronator teres",
          "Pronator quadratus",
          "Brachioradialis",
        ],
        answer: 1, // Correct answer: Pronator teres
      },
      {
        question:
          "A patient presents with hypothenar muscle wasting and loss of sensation of medial one and a half digits. Which nerve is involved?",
        options: [
          "Ulnar nerve",
          "Median nerve",
          "Radial nerve",
          "Musculocutaneous nerve",
        ],
        answer: 0, // Correct answer: Ulnar nerve
      },
      {
        question: "Identify the muscle marked in the diagram.",
        options: [
          "Teres major",
          "Teres minor",
          "Infraspinatus",
          "Supraspinatus",
        ],
        answer: 1, // Correct answer: Teres minor
      },
      {
        question: "Inferior scapular angle is at which level?",
        options: ["T4", "T6", "T8", "T2"],
        answer: 1, // Correct answer: T6
      },
      {
        question:
          "Flexion, adduction, and medial rotation of the arm is done by which muscle?",
        options: [
          "Pectoralis minor",
          "Pectoralis major",
          "Subclavius",
          "Serratus anterior",
        ],
        answer: 1, // Correct answer: Pectoralis major
      },
      {
        question: "Upper lateral cutaneous nerve of the arm is a branch of:",
        options: [
          "Radial nerve",
          "Ulnar nerve",
          "Axillary nerve",
          "Musculocutaneous nerve",
        ],
        answer: 2, // Correct answer: Axillary nerve
      },
      {
        question: "Identify the marked bone:",
        options: ["Capitulum", "Olecranon", "Trochlea", "Radial head"],
        answer: 1, // Correct answer: Olecranon
      },
      {
        question: "Retraction of the scapula is by:",
        options: [
          "Serratus anterior",
          "Trapezius",
          "Suprascapularis",
          "Deltoid muscle",
        ],
        answer: 1, // Correct answer: Trapezius
      },
      {
        question:
          "In a patient with a fracture of the upper radius and ulna, insertion of pronator teres muscle, which movement is restricted?",
        options: [
          "Pronation",
          "Supination",
          "Hyperpronation",
          "Hyperabduction",
        ],
        answer: 0, // Correct answer: Pronation
      },
      {
        question:
          "Which of the following is the insertion of the shown muscle?",
        options: [
          "Radial tuberosity",
          "Olecranon process",
          "Radial head",
          "Medial malleolus",
        ],
        answer: 0, // Correct answer: Radial tuberosity
      },
      {
        question: "Coracoid process of the scapula is:",
        options: [
          "Pressure epiphysis",
          "Traction epiphysis",
          "Atavistic epiphysis",
          "Aberrant epiphysis",
        ],
        answer: 1, // Correct answer: Traction epiphysis
      },
      {
        question:
          "Which of the following is not a component of the carpal tunnel?",
        options: [
          "Ulnar nerve",
          "Median nerve",
          "Flexor digitorum superficialis",
          "Flexor digitorum profundus",
        ],
        answer: 0, // Correct answer: Ulnar nerve
      },
      {
        question: "Which structure passes through Guyon's canal?",
        options: [
          "Ulnar nerve",
          "Median nerve",
          "Radial nerve",
          "Flexor carpi radialis",
        ],
        answer: 0, // Correct answer: Ulnar nerve
      },
      {
        question: "Which is the nerve root of the biceps jerk?",
        options: ["C5-C6", "C6-C8", "C7-C8", "C8-T1"],
        answer: 0, // Correct answer: C5-C6
      },
      {
        question: "Angle of humeral torsion is — degrees:",
        options: ["15", "35", "135", "164"],
        answer: 2, // Correct answer: 135
      },
      {
        question: "Which carpal bone has a hook?",
        options: ["Capitate", "Lunate", "Hamate", "Pisiform"],
        answer: 2, // Correct answer: Hamate
      },
      {
        question: "Which is the 1st carpal bone to ossify?",
        options: ["Capitate", "Lunate", "Hamate", "Pisiform"],
        answer: 0, // Correct answer: Capitate
      },
      {
        question: "Which is not a part of the proximal row of carpal bones?",
        options: ["Scaphoid", "Lunate", "Triquetral", "Hamate"],
        answer: 3, // Correct answer: Hamate
      },
      {
        question: "Which is the most commonly fractured carpal bone?",
        options: ["Hamate", "Lunate", "Scaphoid", "Capitate"],
        answer: 2, // Correct answer: Scaphoid
      },
      {
        question: "Articulation of pisiform bone is with:",
        options: ["Triquetrum", "Lunate", "Scaphoid", "Trapezoid"],
        answer: 0, // Correct answer: Triquetrum
      },
      {
        question: "Middle trunk of the brachial plexus is formed of:",
        options: ["C6, C7", "C7, C8", "C8, T1", "C7"],
        answer: 3, // Correct answer: C7
      },
      {
        question: "Regimental band anesthesia is due to lesion of:",
        options: [
          "Musculocutaneous nerve",
          "Axillary nerve",
          "Long thoracic nerve",
          "Spinal accessory nerve",
        ],
        answer: 1, // Correct answer: Axillary nerve
      },
      {
        question: "Screwing movement in the upper limb is possible with:",
        options: ["Brachioradialis", "Anconeus", "Supinator", "Pronator teres"],
        answer: 2, // Correct answer: Supinator
      },
      {
        question: "Radial artery ends as:",
        options: [
          "Superficial palmar arch",
          "Deep palmar arch",
          "Both of the above",
          "Profunda brachii artery",
        ],
        answer: 1, // Correct answer: Deep palmar arch
      },
      {
        question: "The largest bursa in the body is:",
        options: [
          "Prepatellar bursa",
          "Subacromial bursa",
          "Infrapatellar bursa",
          "Trochanteric bursa",
        ],
        answer: 3, // Correct answer: Trochanteric bursa
      },
      {
        question: "Which is the nerve passing through the medial epicondyle?",
        options: ["Ulnar", "Radial", "Median", "Posterior interosseous"],
        answer: 0, // Correct answer: Ulnar
      },
      {
        question:
          "Anastomosis of the subscapular artery is formed by all EXCEPT:",
        options: [
          "Transverse cervical artery",
          "Suprascapular artery",
          "1st part of the subclavian artery",
          "Axillary artery",
        ],
        answer: 2, // Correct answer: 1st part of the subclavian artery
      },
      {
        question: "Which structure is present in the anatomical snuff box?",
        options: [
          "Ulnar artery",
          "Radial artery",
          "Median nerve",
          "Radial nerve",
        ],
        answer: 1, // Correct answer: Radial artery
      },
      {
        question: "Anatomical snuff box contains:",
        options: [
          "Axillary nerve",
          "Radial artery",
          "Brachial artery",
          "Ulnar artery",
        ],
        answer: 1, // Correct answer: Radial artery
      },
      {
        question:
          "The medial boundary of the anatomical snuff box is formed by the:",
        options: [
          "Ext. pollicis brevis",
          "Ext. carpi radialis longus",
          "Extensor pollicis longus",
          "Ext. carpi radialis brevis",
        ],
        answer: 2, // Correct answer: Extensor pollicis longus
      },
      {
        question: "Surgical neck fracture leads to EXCEPT:",
        options: [
          "Teres major palsy",
          "Teres minor palsy",
          "Weakness of abduction",
          "Deltoid muscle palsy",
        ],
        answer: 0, // Correct answer: Teres major palsy
      },
      {
        question:
          "Which of the following artery is affected in anterior shoulder dislocation?",
        options: ["Radial", "Axillary", "Median", "Ulnar"],
        answer: 1, // Correct answer: Axillary
      },
      {
        question:
          "Which among the following muscles receives dual nerve supply?",
        options: [
          "Flexor digitorum profundus",
          "Flexor digitorum superficialis",
          "Palmaris longus",
          "Extensor carpi radialis",
        ],
        answer: 0, // Correct answer: Flexor digitorum profundus
      },
    ],
    "Set-4": [
      {
        question:
          "All of the following structures are passing deep to the flexor retinaculum; EXCEPT:",
        options: [
          "Flexor pollicis longus",
          "Flexor digitorum superficialis",
          "Palmaris longus",
          "Flexor digitorum profundus",
        ],
        answer: 2, // Correct answer: Palmaris longus
      },
      {
        question:
          "Which structure passes superficial to the flexor retinaculum?",
        options: [
          "Ulnar nerve",
          "Median nerve",
          "Flexor digitorum superficialis",
          "Flexor digitorum profundus",
        ],
        answer: 0, // Correct answer: Ulnar nerve
      },
      {
        question: "Root value to axillary nerve:",
        options: ["C5, C6", "C6, C7", "C5, C6, C7", "C6, C7, C8"],
        answer: 0, // Correct answer: C5, C6
      },
      {
        question: "Musculocutaneous nerve arises from which cord?",
        options: [
          "Medial cord",
          "Lateral cord",
          "Anterior cord",
          "Posterior cord",
        ],
        answer: 1, // Correct answer: Lateral cord
      },
      {
        question: "Root of radial nerve:",
        options: [
          "C6, C7, T1",
          "C5, C6, C7, T1",
          "C4, C5, C6, C7, C8, T1",
          "C6, C7, C8",
        ],
        answer: 1, // Correct answer: C5, C6, C7, T1
      },
      {
        question: "Winging of the scapula is due to damage of:",
        options: [
          "Axillary nerve",
          "Long thoracic nerve",
          "Median nerve",
          "Ulnar nerve",
        ],
        answer: 1, // Correct answer: Long thoracic nerve
      },
      {
        question: "Winging of the scapula is due to paralysis of:",
        options: [
          "Serratus anterior muscle",
          "Latissimus dorsi muscle",
          "Rhomboid major muscle",
          "Pectoralis major muscle",
        ],
        answer: 0, // Correct answer: Serratus anterior muscle
      },
      {
        question: "'Dropped shoulder' occurs due to paralysis of:",
        options: ["Teres minor", "Deltoid", "Teres major", "Trapezius"],
        answer: 3, // Correct answer: Trapezius
      },
      {
        question: "Trapezius muscle is attached to all structures; EXCEPT:",
        options: ["First rib", "Clavicle", "Scapula", "Occiput"],
        answer: 0, // Correct answer: First rib
      },
      {
        question: "All of the following show ulnar nerve injury; EXCEPT:",
        options: [
          "Clawing of medial 2 digits",
          "Abductor pollicis palsy",
          "Adductor pollicis palsy",
          "Weak grip",
        ],
        answer: 3, // Correct answer: Weak grip
      },
      {
        question: "Pointing finger injury is due to injury of which nerve?",
        options: [
          "Radial nerve",
          "Ulnar nerve",
          "Median nerve",
          "Axillary nerve",
        ],
        answer: 2, // Correct answer: Median nerve
      },
      {
        question: "Clawhand is due to:",
        options: [
          "Median nerve",
          "Ulnar nerve",
          "Median and ulnar both",
          "Radial nerve",
        ],
        answer: 1, // Correct answer: Ulnar nerve
      },
      {
        question: "Ape thumb deformity is due to injury of which nerve?",
        options: [
          "Radial nerve",
          "Ulnar nerve",
          "Median nerve",
          "Axillary nerve",
        ],
        answer: 2, // Correct answer: Median nerve
      },
      {
        question:
          "Compression of which of the following nerves leads to carpal tunnel syndrome?",
        options: [
          "Ulnar nerve",
          "Median nerve",
          "Radial nerve",
          "Both a and b",
        ],
        answer: 1, // Correct answer: Median nerve
      },
      {
        question: "Median nerve supplies all; EXCEPT:",
        options: [
          "Abductor pollicis longus",
          "Pronator quadratus",
          "Flexor pollicis longus",
          "Flexor carpi radialis",
        ],
        answer: 0, // Correct answer: Abductor pollicis longus
      },
      {
        question: "All are muscles of the rotator cuff; EXCEPT:",
        options: [
          "Teres major",
          "Teres minor",
          "Infraspinatus",
          "Supraspinatus",
        ],
        answer: 0, // Correct answer: Teres major
      },
      {
        question: "Most common injured muscle in the rotator cuff is:",
        options: [
          "Supraspinatus muscle",
          "Infraspinatus muscle",
          "Teres minor",
          "Subscapularis",
        ],
        answer: 0, // Correct answer: Supraspinatus muscle
      },
      {
        question:
          "In a man lifting up a suitcase, downward dislocation of the glenohumeral joint is prevented by:",
        options: [
          "Deltoid",
          "Latissimus dorsi",
          "Coracobrachialis",
          "Supraspinatus",
        ],
        answer: 3, // Correct answer: Supraspinatus
      },
      {
        question: "Short head of biceps is innervated by:",
        options: [
          "Musculocutaneous nerve",
          "Radial nerve",
          "Axillary nerve",
          "Median nerve",
        ],
        answer: 0, // Correct answer: Musculocutaneous nerve
      },
      {
        question: "Muscle which covers both elbow and shoulder joint:",
        options: [
          "Biceps",
          "Biceps brachialis",
          "Coracobrachialis",
          "Long head of triceps brachii",
        ],
        answer: 0, // Correct answer: Biceps
      },
      {
        question: "Which one of the following is a multipennate muscle?",
        options: [
          "Tibialis anterior",
          "Deltoid",
          "Tibialis posterior",
          "Latissimus dorsi",
        ],
        answer: 1, // Correct answer: Deltoid
      },
      {
        question: "Fracture of the shaft of the humerus leads to:",
        options: [
          "Radial nerve injury",
          "Ulnar nerve injury",
          "Median nerve injury",
          "Musculocutaneous nerve injury",
        ],
        answer: 0, // Correct answer: Radial nerve injury
      },
      {
        question: "Posterior wall of the axilla is formed by all; EXCEPT:",
        options: [
          "Teres major",
          "Subscapularis",
          "Supraspinatus",
          "Latissimus dorsi",
        ],
        answer: 2, // Correct answer: Supraspinatus
      },
      {
        question:
          "Location of level III axillary lymph node in relation to pectoralis minor is:",
        options: ["Anterior", "Posterior", "Superior", "Inferior"],
        answer: 1, // Correct answer: Posterior
      },
      {
        question: "Supination and pronation of the upper limb is due to:",
        options: [
          "Wrist joint",
          "Radioulnar joint",
          "Elbow joint",
          "Carpometacarpal joint",
        ],
        answer: 1, // Correct answer: Radioulnar joint
      },
      {
        question: "Medial border of cubital fossa is formed by:",
        options: [
          "Pronator teres",
          "Brachioradialis",
          "Supinator",
          "Brachialis",
        ],
        answer: 0, // Correct answer: Pronator teres
      },
      {
        question: "All are contents of the cubital fossa; EXCEPT:",
        options: [
          "Ulnar artery",
          "Median nerve",
          "Biceps tendon",
          "Brachial artery",
        ],
        answer: 0, // Correct answer: Ulnar artery
      },
      {
        question:
          "Boundary of the triangle of auscultation is formed by; EXCEPT:",
        options: [
          "Scapula",
          "Trapezius",
          "Serratus anterior",
          "Latissimus dorsi",
        ],
        answer: 2, // Correct answer: Serratus anterior
      },
      {
        question: "Which arterial pulse is being taken?",
        options: [
          "Anterior tibial artery",
          "Posterior tibial artery",
          "Dorsalis pedis artery",
          "Medial plantar artery",
        ],
        answer: 2, // Correct answer: Dorsalis pedis artery
      },
      {
        question:
          "The examiner is palpating which artery in the following diagram?",
        options: [
          "Anterior tibial",
          "Posterior tibial",
          "Dorsalis pedis",
          "Medial plantar",
        ],
        answer: 2, // Correct answer: Dorsalis pedis
      },
      {
        question: "The dermatome of the area marked with arrow is:",
        options: ["L2", "L3", "L4", "L5"],
        answer: 1, // Correct answer: L3
      },
      {
        question:
          "Nerve involved in the difficulty in eversion of foot and loss of sensation in dorsal aspect of foot is:",
        options: [
          "Deep peroneal nerve",
          "Superficial peroneal nerve",
          "Sural nerve",
          "Saphenous nerve",
        ],
        answer: 1, // Correct answer: Superficial peroneal nerve
      },
      {
        question: "Which muscle tendon is stretched in patellar tendon reflex?",
        options: [
          "Biceps femoris",
          "Quadriceps femoris",
          "Adductor magnus",
          "Quadratus",
        ],
        answer: 1, // Correct answer: Quadriceps femoris
      },
      {
        question:
          "A 45-year-old policeman comes from duty with complaint of pain in right leg and starts from right buttock. On examination, pulse in right popliteal fossa was absent whereas in left side it was normal. The block is at which level?",
        options: ["Femoral", "External iliac", "Popliteal", "Articular"],
        answer: 1, // Correct answer: External iliac
      },
      {
        question: "What is the name of marked artery?",
        options: [
          "Posterior tibial artery",
          "Deep phalangeal artery",
          "Lateral planter",
          "Medial plantar",
        ],
        answer: 0, // Correct answer: Posterior tibial artery
      },
      {
        question: "Identify the arrow marked tarsal in the given image:",
        options: ["Cuboid", "Navicular", "Talus", "Cuneiform"],
        answer: 2, // Correct answer: Talus
      },
      {
        question: "Posterior tibial artery pulse is felt:",
        options: [
          "Between medial malleolus & medial border of tendon calcaneus in inversion",
          "Between medial malleolus & medial border of tendon calcaneus in eversion",
          "Between medial malleolus & lateral border of tendon calcaneus in inversion",
          "Between medial malleolus & lateral border of tendon calcaneus in eversion",
        ],
        answer: 0, // Correct answer: Between medial malleolus & medial border of tendon calcaneus in inversion
      },
      {
        question: "Identify the marked muscle tendon in the diagram:",
        options: [
          "Flexor hallucis longus",
          "Extensor hallucis longus",
          "Extensor digitorum longus",
          "Tibialis anterior",
        ],
        answer: 1, // Correct answer: Extensor hallucis longus
      },
      {
        question: "Abduction at the hip joint is done by:",
        options: [
          "Gluteus maximus",
          "Obturator internus",
          "Quadratus femoris",
          "Gluteus medius",
        ],
        answer: 3, // Correct answer: Gluteus medius
      },
      {
        question: "Tibial and common peroneal nerve supplies:",
        options: [
          "Adductor magnus muscle",
          "Adductor longus muscle",
          "Gracilis muscle",
          "Biceps femoris muscle",
        ],
        answer: 3, // Correct answer: Biceps femoris muscle
      },
      {
        question:
          "Which of the following muscle is supplied by obturator nerve?",
        options: [
          "Gluteus medius",
          "Obturator internus",
          "Sartorius",
          "Adductor brevis",
        ],
        answer: 3, // Correct answer: Adductor brevis
      },
      {
        question: "Which of the following muscle is evertor of foot?",
        options: [
          "Tibialis anterior muscle",
          "Tibialis posterior",
          "Peroneus longus muscle",
          "Extensor digitorum longus",
        ],
        answer: 2, // Correct answer: Peroneus longus muscle
      },
      {
        question: "Most common nerve damaged in leg:",
        options: [
          "Common peroneal nerve",
          "Femoral nerve",
          "Sciatic nerve",
          "Tibial nerve",
        ],
        answer: 0, // Correct answer: Common peroneal nerve
      },
      {
        question: "Femoral triangle base is formed by:",
        options: [
          "Medial border of sartorius",
          "Inguinal ligament",
          "Medial border of adductor longus",
          "Iliacus",
        ],
        answer: 1, // Correct answer: Inguinal ligament
      },
      {
        question: "Medial compartment of thigh is supplied by which nerve?",
        options: [
          "Tibial nerve",
          "Obturator nerve",
          "Femoral nerve",
          "Common peroneal nerve",
        ],
        answer: 1, // Correct answer: Obturator nerve
      },
      {
        question: "First web space of foot is supplied by:",
        options: [
          "Common peroneal nerve",
          "Superficial peroneal nerve",
          "Deep peroneal nerve",
          "Sural nerve",
        ],
        answer: 2, // Correct answer: Deep peroneal nerve
      },
      {
        question: "Which bone in foot is not attached by any muscle?",
        options: ["Talus", "Calcaneum", "Metatarsals", "Fibula"],
        answer: 0, // Correct answer: Talus
      },
      {
        question: "Which muscle originates from anterior superior iliac spine?",
        options: [
          "Iliofemoral ligament",
          "Sartorius",
          "Vastus lateralis",
          "Vastus medialis",
        ],
        answer: 1, // Correct answer: Sartorius
      },
    ],
    //set 5 starts here --

    "Set-5": [
      {
        question: "Tibialis posterior muscle is supplied by which nerve?",
        options: [
          "Posterior tibial nerve",
          "Deep peroneal nerve",
          "Femoral nerve",
          "Sural nerve",
        ],
        answer: 0, // Correct answer: Posterior tibial nerve
      },
      {
        question: "Adductor canal lateral boundary is formed by:",
        options: [
          "Adductor longus",
          "Rectus medialis",
          "Vastus lateralis",
          "Vastus medialis",
        ],
        answer: 3, // Correct answer: Vastus medialis
      },
      {
        question: "Which is true about the origin of the Femoral nerve root?",
        options: [
          "Anterior division of L1, L2, L3, L4 ventral rami",
          "Anterior division of L1, L2, L3 ventral rami",
          "Posterior division of L2, L3, L4 ventral rami",
          "Posterior division of L1, L2, L3 ventral rami",
        ],
        answer: 2, // Correct answer: Posterior division of L2, L3, L4 ventral rami
      },
      {
        question: "Which is the muscle marked as A in the femoral triangle?",
        options: ["Iliacus", "Psoas major", "Pectineus", "Adductor longus"],
        answer: 2, // Correct answer: Pectineus
      },
      {
        question: "Biceps femoris does which of the following function?",
        options: [
          "Adduction of knee",
          "Flexion of knee",
          "Extension of knee",
          "Abduction of knee",
        ],
        answer: 1, // Correct answer: Flexion of knee
      },
      {
        question: "Chief extensor of thigh at hip joint is supplied by:",
        options: [
          "Inferior gluteal nerve",
          "Superior gluteal nerve",
          "Sciatic nerve",
          "Peroneal nerve",
        ],
        answer: 0, // Correct answer: Inferior gluteal nerve
      },
      {
        question: "Which of the following muscles is an evertor of foot?",
        options: [
          "Peroneus tertius",
          "Tibialis anterior",
          "Extensor hallucis longus",
          "Extensor digitorum",
        ],
        answer: 0, // Correct answer: Peroneus tertius
      },
      {
        question: "What is the nerve supply of popliteus muscle?",
        options: [
          "Tibial nerve",
          "Popliteal nerve",
          "Common peroneal nerve",
          "Deep peroneal nerve",
        ],
        answer: 0, // Correct answer: Tibial nerve
      },
      {
        question: "Which is not a cause of positive Trendelenburg sign?",
        options: [
          "Paralysis of gluteus maximus",
          "Congenital dislocation of hip",
          "Ununited fracture of neck",
          "Coxa vara",
        ],
        answer: 0, // Correct answer: Paralysis of gluteus maximus
      },
      {
        question:
          "Which of the following nerve injury leads to positive Trendelenburg test?",
        options: [
          "Inferior gluteal",
          "Obturator",
          "Tibial",
          "Superior gluteal nerve",
        ],
        answer: 3, // Correct answer: Superior gluteal nerve
      },
      {
        question: "Trendelenburg test is done for:",
        options: [
          "Gluteus medius, minimus",
          "Gluteus maximus, minimus",
          "Gluteus maximus, medius",
          "Gluteus maximus, medius, minimus",
        ],
        answer: 0, // Correct answer: Gluteus medius, minimus
      },
      {
        question: "Capsule of knee joint is supplied by:",
        options: [
          "Genital branch of genitofemoral nerve",
          "Femoral branch of genitofemoral nerve",
          "Genicular branch of obturator nerve",
          "Femoral branch of obturator nerve",
        ],
        answer: 2, // Correct answer: Genicular branch of obturator nerve
      },
      {
        question: "Fabella is present in:",
        options: [
          "Medial head of gastrocnemius",
          "Lateral head of gastrocnemius",
          "Adductor magnus",
          "Adductor longus",
        ],
        answer: 1, // Correct answer: Lateral head of gastrocnemius
      },
      {
        question: "Which is the nerve supply of soleus muscle?",
        options: [
          "Tibial nerve",
          "Common peroneal nerve",
          "Superficial peroneal nerve",
          "Deep peroneal nerve",
        ],
        answer: 0, // Correct answer: Tibial nerve
      },
      {
        question: "What is true about iliotibial tract?",
        options: [
          "Thickening of fascia lata",
          "Gluteus medius is inserted into it",
          "Insertion at medial aspect of tibia",
          "Runs along the medial aspect of thigh",
        ],
        answer: 0, // Correct answer: Thickening of fascia lata
      },
      {
        question:
          "Which muscle is responsible for sitting to standing position?",
        options: [
          "Gluteus medius",
          "Gluteus maximus",
          "Gluteus minimus",
          "Tensor fascia lata",
        ],
        answer: 1, // Correct answer: Gluteus maximus
      },
      {
        question: "All are branches of femoral artery; EXCEPT:",
        options: [
          "Superficial epigastric artery",
          "Superficial circumflex artery",
          "Inferior epigastric artery",
          "Descending genicular artery",
        ],
        answer: 2, // Correct answer: Inferior epigastric artery
      },
      {
        question: "Gluteus maximus is inserted on:",
        options: [
          "Lesser trochanter",
          "Gluteal tuberosity",
          "Iliotibial tract",
          "Iliac crest",
        ],
        answer: 2, // Correct answer: Iliotibial tract
      },
      {
        question:
          "Iliotibial band has insertion of all of the following muscles; EXCEPT:",
        options: [
          "Tensor fasciae latae",
          "Gluteus maximus",
          "Gluteus minimus",
          "Vastus lateralis",
        ],
        answer: 2, // Correct answer: Gluteus minimus
      },
      {
        question: "Which is the longest muscle of the body?",
        options: [
          "Sartorius",
          "Extraocular muscle",
          "External oblique",
          "Popliteal muscle",
        ],
        answer: 0, // Correct answer: Sartorius
      },
      {
        question:
          "Which of the following muscles has attachment on the capsule of hip joint?",
        options: [
          "Sartorius",
          "Rectus femoris",
          "Vastus lateralis",
          "Vastus medialis",
        ],
        answer: 1, // Correct answer: Rectus femoris
      },
      {
        question: "This muscle is part of hamstrings muscle:",
        options: [
          "Semimembranosus",
          "Gracilis",
          "Short head of biceps femoris",
          "Sartorius",
        ],
        answer: 0, // Correct answer: Semimembranosus
      },
      {
        question: "Gluteus medius is supplied by:",
        options: [
          "Superior gluteal nerve",
          "Inferior gluteal nerve",
          "Nerve to obturator internus",
          "Nerve to quadratus femoris",
        ],
        answer: 0, // Correct answer: Superior gluteal nerve
      },
      {
        question: "Which of the following nerve supplies gluteus maximus?",
        options: [
          "Superior gluteal nerve",
          "Inferior gluteal nerve",
          "Anterior gluteal nerve",
          "Posterior gluteal nerve",
        ],
        answer: 1, // Correct answer: Inferior gluteal nerve
      },
      {
        question: "Which is the nerve supplying gamellus inferior muscle?",
        options: [
          "Nerve to obturator internus",
          "Nerve to obturator externus",
          "Nerve to quadratus femoris",
          "Ventral rami to S1 and S2",
        ],
        answer: 2, // Correct answer: Nerve to quadratus femoris
      },
      {
        question:
          "All of the following structures pass through lesser sciatic foramen; EXCEPT:",
        options: [
          "Pudendal nerve",
          "Internal pudendal vessels",
          "Nerve to obturator internus",
          "Nerve to obturator externus",
        ],
        answer: 3, // Correct answer: Nerve to obturator externus
      },
      {
        question: "Which is the main extensor of knee?",
        options: [
          "Biceps femoris",
          "Quadriceps femoris",
          "Semitendinosus",
          "Semimembranosus",
        ],
        answer: 1, // Correct answer: Quadriceps femoris
      },
      {
        question: "Which muscle is responsible for unlocking of knee?",
        options: [
          "Popliteus",
          "Quadriceps femoris",
          "Semitendinosus",
          "Semimembranosus",
        ],
        answer: 0, // Correct answer: Popliteus
      },
      {
        question: "Which of the following bone has no muscle attachment?",
        options: ["Navicular", "Calcaneum", "Talus", "Cuboid"],
        answer: 2, // Correct answer: Talus
      },
      {
        question:
          "In injury to the neck of fibula, which of the following nerve is usually injured?",
        options: [
          "Superficial peroneal nerve",
          "Deep peroneal nerve",
          "Common peroneal nerve",
          "Tibial nerve",
        ],
        answer: 2, // Correct answer: Common peroneal nerve
      },
      {
        question: "Medial border of Hesselbach's triangle is formed by:",
        options: [
          "Linea alba",
          "Linea semilunaris",
          "Inferior epigastric artery",
          "Conjoint tendon",
        ],
        answer: 1, // Correct answer: Linea semilunaris
      },
      {
        question:
          "Poupart's ligament forms which border of Hesselbach's triangle?",
        options: ["Anterior", "Posterior", "Superior", "Inferior"],
        answer: 3, // Correct answer: Inferior
      },
      {
        question:
          "All of the following are true about lateral cutaneous nerve of thigh; EXCEPT:",
        options: [
          "Supplies skin over the lateral skin of thigh",
          "Supplies skin over the medial aspect of thigh",
          "Arises from L1 and L3",
          "It is a purely sensory nerve",
        ],
        answer: 1, // Correct answer: Supplies skin over the medial aspect of thigh
      },
      {
        question: "What is the nerve root value of superior gluteal nerve?",
        options: ["L1, S1, S2", "L2, S1, S2", "L5, S1, S2", "L5, S2, S3"],
        answer: 2, // Correct answer: L5, S1, S2
      },
      {
        question: "Root value of the posterior cutaneous nerve of the thigh:",
        options: ["S1, S2, S3", "S2, S3, S4", "S1, S2, S3", "S1, S2, S4"],
        answer: 0, // Correct answer: S1, S2, S3
      },
      {
        question: "Root value of sciatic nerve is:",
        options: [
          "S1, S2, S3",
          "L4, L5, S1, S2, S3",
          "L1, L2, S1",
          "L1, L2, L3",
        ],
        answer: 1, // Correct answer: L4, L5, S1, S2, S3
      },
      {
        question: "Nerve root of pudendal nerve is:",
        options: ["S2, S3, S4", "S1, S2, S3", "S1, S2, S4", "S2, S3, S5"],
        answer: 0, // Correct answer: S2, S3, S4
      },
      {
        question:
          "Identify the arrow marked structure in the dissected specimen:",
        options: [
          "Oesophagus",
          "Superior vena cava",
          "Inferior vena cava",
          "Descending aorta",
        ],
        answer: 2, // Correct answer: Inferior vena cava
      },
      {
        question: "The marked line corresponds to vertebral level:",
        options: ["T-12", "L-1", "L-2", "L-3"],
        answer: 1, // Correct answer: L-1
      },
      {
        question: "Identify the chamber marked with arrow:",
        options: [
          "Right atrium",
          "Left atrium",
          "Right ventricle",
          "Left ventricle",
        ],
        answer: 0, // Correct answer: Right atrium
      },
      {
        question:
          "The neurovascular bundle in anterior wall of abdomen lies between:",
        options: [
          "External and internal oblique muscle",
          "Internal oblique and transverse abdominis muscle",
          "External oblique and transversus abdominis",
          "Transversus abdominis and transversalis fascia",
        ],
        answer: 1, // Correct answer: Internal oblique and transverse abdominis muscle
      },
      {
        question: "Structure marked in the image will terminate at:",
        options: [
          "Junction of left jugular vein and subclavian vein",
          "Brachiocephalic vein",
          "Superior vena cava",
          "Right subclavian vein",
        ],
        answer: 0, // Correct answer: Junction of left jugular vein and subclavian vein
      },
      {
        question:
          "A baby at 9 to 10 months develops which curvature in the vertebral spine?",
        options: [
          "Secondary curvature at cervical spine",
          "Secondary curvature at thoracic spine",
          "Secondary curvature at lumbar spine",
          "Secondary curvature at sacral spine",
        ],
        answer: 2, // Correct answer: Secondary curvature at lumbar spine
      },
      {
        question: "Identify the structure marked with pointer:",
        options: [
          "Hepatic artery",
          "Hepatic vein",
          "Inferior vena cava",
          "Portal vein",
        ],
        answer: 3, // Correct answer: Portal vein
      },
      {
        question: "Testicular artery is a branch of:",
        options: [
          "Common iliac artery",
          "Abdominal aorta",
          "Internal iliac artery",
          "External iliac artery",
        ],
        answer: 1, // Correct answer: Abdominal aorta
      },
      {
        question:
          "Which of the following structure is present over the mediastinal surface of right lung?",
        options: ["Azygos vein", "Right thoracic duct", "Aorta", "Trachea"],
        answer: 0, // Correct answer: Azygos vein
      },
      {
        question:
          "Which of the following structures is not found in superior mediastinum?",
        options: [
          "Pulmonary trunk",
          "Thymus",
          "Left intercostal artery",
          "Arch of aorta",
        ],
        answer: 0, // Correct answer: Pulmonary trunk
      },
      {
        question: "Which of these is true about bronchopulmonary segment?",
        options: [
          "Nonresectable",
          "Spherical in shape",
          "Artery is intersegmental",
          "Pulmonary veins are intersegmental",
        ],
        answer: 3, // Correct answer: Pulmonary veins are intersegmental
      },
      {
        question: "Left anterior descending artery is a branch of:",
        options: [
          "Right coronary artery",
          "Left coronary artery",
          "Ascending aorta",
          "Coronary sinus",
        ],
        answer: 1, // Correct answer: Left coronary artery
      },
      {
        question:
          "VAN (vein, artery, nerve) sequence is present in intercostal space at:",
        options: [
          "Upper border of rib",
          "Middle border of rib",
          "Lower border of rib",
          "Middle portion of intercostal space",
        ],
        answer: 2, // Correct answer: Lower border of rib
      },
    ],
    "Set-6": [
      {
        question: "Which of the following rib is known as floating rib?",
        options: ["8", "9", "10", "11"],
        answer: 3, // Correct answer: 11
      },
      {
        question: "Which is not a true rib?",
        options: ["5th", "6th", "7th", "8th"],
        answer: 3, // Correct answer: 8th
      },
      {
        question:
          "Xiphoid process unites with the body at age of how many years?",
        options: ["10", "20", "30", "40"],
        answer: 2, // Correct answer: 30
      },
      {
        question: "Which structure passes through foramen of Langer?",
        options: ["Inguinal canal", "Tail of spence", "CN V3", "CN VII"],
        answer: 1, // Correct answer: Tail of spence
      },
      {
        question: "Sappey’s plexus drains?",
        options: ["Breast", "Thyroid", "Adrenal", "Porta hepatis"],
        answer: 0, // Correct answer: Breast
      },
      {
        question: "Lingula is which part of lung?",
        options: [
          "Left lower lobe",
          "Right lower lobe",
          "Left upper lobe",
          "Right upper lobe",
        ],
        answer: 2, // Correct answer: Left upper lobe
      },
      {
        question: "Which muscle is involved in violent expiratory efforts?",
        options: [
          "Diaphragm",
          "Latissimus dorsi",
          "External oblique",
          "Internal intercostal",
        ],
        answer: 1, // Correct answer: Latissimus dorsi
      },
      {
        question: "Right coronary artery supplies all; EXCEPT:",
        options: [
          "Azygos vein",
          "Right thoracic duct",
          "Posterior part of interventricular septum",
          "Anterior interventricular groove",
        ],
        answer: 0, // Correct answer: Azygos vein
      },
      {
        question: "Base of the heart is formed by:",
        options: ["RA", "RV", "LA", "LV"],
        answer: 2, // Correct answer: LA (Left Atrium)
      },
      {
        question: "All of these form right heart border; EXCEPT?",
        options: ["SVC", "Right atrium", "Right ventricle", "Right ventricle"],
        answer: 2, // Correct answer: Right ventricle
      },
      {
        question: "What is the length of trachea?",
        options: ["5 cm", "10 cm", "20 cm", "25 cm"],
        answer: 2, // Correct answer: 20 cm
      },
      {
        question: "What is the diameter of trachea?",
        options: ["0.5 cm", "2 cm", "3 cm", "5 cm"],
        answer: 1, // Correct answer: 2 cm
      },
      {
        question:
          "Most commonly foreign body lodges in which part of esophagus?",
        options: [
          "Where it crosses the aortic arch",
          "Cricopharyngeus",
          "Where it is crossed by left bronchus",
          "Where it pierces the diaphragm",
        ],
        answer: 1, // Correct answer: Cricopharyngeus
      },
      {
        question: "Which is not an accessory muscle of respiration?",
        options: [
          "Sternocleidomastoid",
          "Scaleneus",
          "Erector spinae",
          "None of these",
        ],
        answer: 2, // Correct answer: Erector spinae
      },
      {
        question: "75% respiration is due to:",
        options: [
          "Diaphragm",
          "Internal intercostals",
          "Intercostals",
          "Serratus anterior",
        ],
        answer: 0, // Correct answer: Diaphragm
      },
      {
        question: "Which is the motor supply of diaphragm?",
        options: [
          "Phrenic nerve",
          "Thoracodorsal nerve",
          "Intercostals",
          "Sympathetic nerves",
        ],
        answer: 0, // Correct answer: Phrenic nerve
      },
      {
        question: "Intercostal veins drain into:",
        options: [
          "Left subclavian vein",
          "Internal jugular vein",
          "Azygos vein",
          "Inferior vena cava",
        ],
        answer: 2, // Correct answer: Azygos vein
      },
      {
        question: "Celiac artery is seen at which vertebral level?",
        options: ["T9", "T10", "T12", "L2"],
        answer: 2, // Correct answer: T12
      },
      {
        question: "Identify the branch originating from Celiac trunk:",
        options: [
          "Splenic artery",
          "Left gastric artery",
          "Left gastroepiploic artery",
          "Left renal artery",
        ],
        answer: 0, // Correct answer: Splenic artery
      },
      {
        question: "Tail of pancreas is present in:",
        options: [
          "Gastrosplenic ligament",
          "Splenorenal ligament",
          "Hepatogastric ligament",
          "Gastro-duodenal ligament",
        ],
        answer: 1, // Correct answer: Splenorenal ligament
      },
      {
        question: "Sternum attached to scapula via:",
        options: ["Manubrium", "First rib", "Second rib", "Clavicle"],
        answer: 3, // Correct answer: Clavicle
      },
      {
        question: "Vasa Brevia is the name of:",
        options: [
          "Long gastric arteries",
          "Short gastric arteries",
          "Duodenal arteries",
          "Renal arteries",
        ],
        answer: 1, // Correct answer: Short gastric arteries
      },
      {
        question: "Identify the part of duodenum marked below:",
        options: ["1st part", "2nd part", "3rd part", "4th part"],
        answer: 1, // Correct answer: 2nd part
      },
      {
        question: "Cords of Billroth in spleen are found in:",
        options: ["White pulp", "Trabecular zone", "Red pulp", "Mantle zone"],
        answer: 2, // Correct answer: Red pulp
      },
      {
        question:
          "Which is the watershed area of inferior mesenteric artery and internal iliac artery?",
        options: [
          "Griffith's point",
          "Sigmoid colon",
          "Ano rectal junction",
          "Sudeck's point",
        ],
        answer: 3, // Correct answer: Sudeck's point
      },
      {
        question: "Portal vein starts at level of:",
        options: ["L2", "L3", "L4", "L5"],
        answer: 0, // Correct answer: L2
      },
      {
        question: "Which is not a derivative of dorsal mesogastrium?",
        options: [
          "Greater omentum",
          "Gastrosplenic ligament",
          "Gastro-phrenic ligament",
          "Coronary ligament",
        ],
        answer: 3, // Correct answer: Coronary ligament
      },
      {
        question:
          "Which of the following is not a part of pancreatic blood supply?",
        options: [
          "Splenic vein",
          "Right suprarenal gland",
          "Aorta",
          "Left crus of diaphragm",
        ],
        answer: 1, // Correct answer: Right suprarenal gland
      },
      {
        question: "Smallest branch of celiac artery is:",
        options: [
          "Right gastric artery",
          "Splenic artery",
          "Left gastric artery",
          "Cystic artery",
        ],
        answer: 2, // Correct answer: Left gastric artery
      },
      {
        question:
          "Constriction of diaphragm will not cause constriction of which opening?",
        options: [
          "Aortic opening",
          "Esophageal opening",
          "IVC opening",
          "Thoracic duct aperture",
        ],
        answer: 0, // Correct answer: Aortic opening
      },
      {
        question: "Identify the intestinal segment:",
        options: ["Ileum", "Jejunum", "Caecum", "Large intestine"],
        answer: 1, // Correct answer: Jejunum
      },
      {
        question: "Shape of left adrenal gland:",
        options: ["Oval", "Semilunar", "Triangular", "Trapezoid"],
        answer: 1, // Correct answer: Semilunar
      },
      {
        question:
          "All of the following form boundary of Left suprarenal gland; EXCEPT:",
        options: [
          "Greater sac of stomach forms anterior border",
          "Psoas major forms posterior border",
          "Spleen forms anterolateral border",
          "Left kidney forms inferior border",
        ],
        answer: 1, // Correct answer: Psoas major forms posterior border
      },
      {
        question: "What is the weight of adrenal gland?",
        options: ["4 grams", "8 grams", "10 grams", "15 grams"],
        answer: 0, // Correct answer: 4 grams
      },
      {
        question: "Aortic hiatus pierces diaphragm at what level?",
        options: ["T8", "T10", "T11", "T12"],
        answer: 3, // Correct answer: T12
      },
      {
        question:
          "Structures passing through aortic opening in diaphragm are EXCEPT:",
        options: ["Aorta", "Azygos vein", "Thoracic duct", "Vagus nerve"],
        answer: 3, // Correct answer: Vagus nerve
      },
      {
        question:
          "Right phrenic nerve passes through this diaphragmatic opening:",
        options: [
          "Aortic opening",
          "Caval opening",
          "Esophageal opening",
          "Phrenic nerve opening",
        ],
        answer: 1, // Correct answer: Caval opening
      },
      {
        question:
          "Structures passing through esophageal opening are all; EXCEPT:",
        options: [
          "Esophagus",
          "Phrenic nerve",
          "Vagus nerve",
          "Gastric artery branches",
        ],
        answer: 1, // Correct answer: Phrenic nerve
      },
      {
        question:
          "Which of the following structures does not pass through diaphragm?",
        options: ["Aorta", "IVC", "Esophagus", "Cisterna chyli"],
        answer: 3, // Correct answer: Cisterna chyli
      },
      {
        question: "All of the following vessels are valveless; EXCEPT:",
        options: [
          "Inferior vena cava",
          "Superior vena cava",
          "Pulmonary vein",
          "Internal jugular vein",
        ],
        answer: 3, // Correct answer: Internal jugular vein
      },
      {
        question:
          "Which of the following vessels has valve to prevent backflow of blood?",
        options: [
          "Internal jugular vein",
          "Portal vein",
          "Superior vena cava",
          "Inferior vena cava",
        ],
        answer: 0, // Correct answer: Internal jugular vein
      },
      {
        question: "All are muscular arteries; EXCEPT?",
        options: [
          "Aorta",
          "Femoral artery",
          "Popliteal artery",
          "Splenic artery",
        ],
        answer: 0, // Correct answer: Aorta
      },
      {
        question: "Inferior vena cava is formed at which level:",
        options: ["L2", "L3", "L4", "L5"],
        answer: 3, // Correct answer: L5
      },
      {
        question: "Portal vein forms at which vertebral level?",
        options: ["L1", "L5", "S1", "S5"],
        answer: 0, // Correct answer: L1
      },
      {
        question: "Brunner glands are seen in:",
        options: [
          "Duodenum",
          "Esophagus",
          "Cardia of stomach",
          "Small intestine",
        ],
        answer: 0, // Correct answer: Duodenum
      },
      {
        question: "Brunner's gland in the duodenum secretes:",
        options: ["Mucus alkaline", "Acid", "Pepsin", "Gastrin"],
        answer: 0, // Correct answer: Mucus alkaline
      },
      {
        question:
          "All of the following form visceral relation of spleen; EXCEPT:",
        options: [
          "Fundus of stomach",
          "Left kidney",
          "Splenic flexure of colon",
          "Duodenum",
        ],
        answer: 3, // Correct answer: Duodenum
      },
      {
        question: "Which of the following forms the posterior wall of kidney?",
        options: [
          "Latissimus dorsi",
          "Quadratus lumborum",
          "Transverse abdominis",
          "External oblique",
        ],
        answer: 1, // Correct answer: Quadratus lumborum
      },
      {
        question:
          "Which of the following is not in anterior relationship with left kidney?",
        options: [
          "Jejunal flexure",
          "Splenic flexure",
          "Head of pancreas",
          "Left suprarenal gland",
        ],
        answer: 2, // Correct answer: Head of pancreas
      },
      {
        question: "Which of these is present anterior to right kidney?",
        options: [
          "Suprarenal gland",
          "Right colic flexure",
          "Intestinal looping",
          "Duodenum 2nd part",
        ],
        answer: 3, // Correct answer: Duodenum 2nd part
      },
    ],

    "Set-7": [
      {
        question:
          "Which of the following structure will affect or stop the ascent of kidney in fetal development?",
        options: [
          "Superior mesenteric artery",
          "Inferior mesenteric artery",
          "Left splenic vein",
          "Celiac trunk",
        ],
        answer: 0, // Correct answer: Superior mesenteric artery
      },
      {
        question: "Kidney cortex contains:",
        options: [
          "Loop of Henle",
          "Pyramids",
          "Collecting tubule and duct",
          "Calyces",
        ],
        answer: 2, // Correct answer: Collecting tubule and duct
      },
      {
        question: "Which is the longest part of duodenum?",
        options: ["First part", "Second part", "Third part", "Fourth part"],
        answer: 2, // Correct answer: Third part
      },
      {
        question: "Which of the following is dermatome of umbilicus:",
        options: ["T8", "T10", "T12", "L1"],
        answer: 1, // Correct answer: T10
      },
      {
        question: "Commonest position of the appendix is:",
        options: ["Paracecal", "Retrocecal", "Pelvic", "Subcecal"],
        answer: 1, // Correct answer: Retrocecal
      },
      {
        question: "Which is the least common position of appendix?",
        options: ["Retrocecal", "Preileal", "Postileal", "Pelvic"],
        answer: 1, // Correct answer: Preileal
      },
      {
        question: "All are tributaries of portal vein; EXCEPT:",
        options: [
          "Left gastric vein",
          "Right gastric vein",
          "Inferior pancreatoduodenal vein",
          "Superior mesenteric vein",
        ],
        answer: 2, // Correct answer: Inferior pancreatoduodenal vein
      },
      {
        question: "Which are the correct boundaries of Calot's triangle?",
        options: [
          "Cystic artery, liver, right hepatic duct",
          "Cystic duct, liver, common hepatic duct",
          "Cystic duct, liver, cystic artery",
          "Common bile duct, cystic duct, liver",
        ],
        answer: 1, // Correct answer: Cystic duct, liver, common hepatic duct
      },
      {
        question: "Superior boundary of Calot's triangle is formed by:",
        options: [
          "Hepatic duct",
          "Superior surface of liver",
          "Inferior surface of liver",
          "Cystic duct",
        ],
        answer: 1, // Correct answer: Superior surface of liver
      },
      {
        question:
          "All of the structures pass through Calot's triangle; EXCEPT:",
        options: [
          "Portal vein",
          "Cystic artery",
          "Right hepatic artery",
          "Lymph node of Lund",
        ],
        answer: 0, // Correct answer: Portal vein
      },
      {
        question: "Structures at the transpyloric plane include all; EXCEPT:",
        options: [
          "Fundus of gallbladder",
          "Termination of portal vein",
          "Hilum of kidneys",
          "Pylorus of stomach",
        ],
        answer: 1, // Correct answer: Termination of portal vein
      },
      {
        question: "Which is true regarding portal venous system?",
        options: [
          "Whole system is valveless",
          "Valves are present at the junction of superior mesenteric artery and splenic artery",
          "Valves are present in the intrahepatic system",
          "There are about 10–12 valves along the entire course",
        ],
        answer: 0, // Correct answer: Whole system is valveless
      },
      {
        question: "Chief cells are found in which area of stomach?",
        options: ["Fundus", "Pit", "Neck", "Body"],
        answer: 3, // Correct answer: Body
      },
      {
        question: "Average weight of spleen in adult:",
        options: ["5 ounce", "7 ounce", "14 ounce", "21 ounce"],
        answer: 1, // Correct answer: 7 ounce
      },
      {
        question: "Which is the most mobile part of rectum?",
        options: ["Upper 1/3", "Middle 1/3", "Lower 1/3", "Lower 2/3"],
        answer: 0, // Correct answer: Upper 1/3
      },
      {
        question: "What is the length of rectum?",
        options: ["5 cm", "12 cm", "15 cm", "20 cm"],
        answer: 2, // Correct answer: 15 cm
      },
      {
        question:
          "Which of the following is not in posterior relationship to rectum?",
        options: [
          "Sacral vertebra",
          "Superior rectal artery",
          "Seminal vesicles",
          "Middle rectal artery",
        ],
        answer: 2, // Correct answer: Seminal vesicles
      },
      {
        question: "Opening of anal epithelium is made up of:",
        options: ["Squamous cell", "Columnar", "Transitional", "Cuboidal"],
        answer: 0, // Correct answer: Squamous cell
      },
      {
        question: "The puborectalis covers anorectal angle:",
        options: ["Completely", "Anteriorly", "Posteriorly", "Laterally"],
        answer: 1, // Correct answer: Anteriorly
      },
      {
        question: "All of the following arteries supply pancreas; EXCEPT:",
        options: [
          "Gastroduodenal artery",
          "Superior mesenteric artery",
          "Inferior mesenteric artery",
          "Pancreatic branch of splenic artery",
        ],
        answer: 2, // Correct answer: Inferior mesenteric artery
      },
      {
        question:
          "Which of the following is not a ventral branch of abdominal aorta?",
        options: [
          "Gonadal artery",
          "Celiac trunk",
          "Superior mesenteric artery",
          "Inferior mesenteric artery",
        ],
        answer: 0, // Correct answer: Gonadal artery
      },
      {
        question:
          "All of the following are branches of external iliac artery; EXCEPT:",
        options: [
          "Femoral artery",
          "Deep circumflex artery",
          "Inferior epigastric artery",
          "Gonadal artery",
        ],
        answer: 3, // Correct answer: Gonadal artery
      },
      {
        question: "Name the dural venous sinus arrow marked in the radiograph:",
        options: [
          "Straight sinus",
          "Superior sagittal sinus",
          "Inferior sagittal sinus",
          "Confluence of sinuses",
        ],
        answer: 1, // Correct answer: Superior sagittal sinus
      },
      {
        question: "Identify the arrow marked structure in the radiograph:",
        options: ["Midbrain", "Pons", "Medulla oblongata", "Spinal cord"],
        answer: 1, // Correct answer: Pons
      },
      {
        question:
          "In unilateral hypoglossal nerve lesion, position of tongue on protrusion is:",
        options: [
          "Midline",
          "Deviates to ipsilateral side",
          "Deviates to contralateral side",
          "No protrusion possible",
        ],
        answer: 1, // Correct answer: Deviates to ipsilateral side
      },

      {
        question: "Identify the muscle shown in the figure below:",
        options: [
          "Inter-arytenoid",
          "Longitudinal muscle of esophagus",
          "Circular muscle of esophagus",
          "Trachealis",
        ],
        answer: 1,
      },
      {
        question:
          "A patient presented where physician noted that all extraocular muscles have been paralyzed. The most probable level of lesion is:",
        options: ["Midbrain", "Pons", "Upper medulla", "Lower medulla"],
        answer: 1,
      },
      {
        question: "The marked structure is:",
        options: ["Epiglottis", "Uvula", "Glottis", "Tongue"],
        answer: 0,
      },
      {
        question:
          "Termination of spinal cord in a newborn lies at which vertebral level?",
        options: [
          "Lower border of L1",
          "Lower border of L2",
          "Lower border of L3",
          "Lower border of S2",
        ],
        answer: 2,
      },
      {
        question: "Identify the muscle marked 'X' in the given image:",
        options: [
          "Styloglossus",
          "Genioglossus",
          "Hyoglossus",
          "Palatoglossus",
        ],
        answer: 1,
      },
      {
        question: "All are paired cartilages; EXCEPT:",
        options: ["Arytenoid", "Corniculate", "Thyroid", "Cuneiform"],
        answer: 2,
      },
      {
        question: "Which of the following is an abductor of vocal cords?",
        options: [
          "Posterior cricoarytenoid",
          "Lateral cricoarytenoid",
          "Cricothyroid",
          "Thyroarytenoid",
        ],
        answer: 0,
      },
      {
        question: "All of the following are true; EXCEPT:",
        options: [
          "A - Caudate nucleus",
          "B - Thalamus",
          "C - Lentiform nucleus",
          "D - Internal capsule",
        ],
        answer: 3,
      },
      {
        question: "Corticospinal tract crosses at the level of:",
        options: ["Midbrain", "Pons", "Upper medulla", "Lower medulla"],
        answer: 2,
      },
      {
        question: "Killian's dehiscence is seen between:",
        options: [
          "Cricopharyngeus and thyropharyngeus",
          "Stylopharyngeus and palatopharyngeus",
          "Palatopharyngeus and salpingopharyngeus",
          "Stylopharyngeus and salpingopharyngeus",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is the safety muscle of the tongue?",
        options: [
          "Genioglossus",
          "Hyoglossus",
          "Palatoglossus",
          "Styloglossus",
        ],
        answer: 0,
      },
      {
        question:
          "Lacrimal gland is supplied through parasympathetic system. It is supplied by which ganglion?",
        options: [
          "Ciliary ganglion",
          "Otic ganglion",
          "Pterygopalatine",
          "Submandibular",
        ],
        answer: 2,
      },
      {
        question: "The structure which doesn't pass through the parotid gland?",
        options: [
          "Facial nerve",
          "Internal carotid artery",
          "Branch of external carotid artery",
          "Retromandibular vein",
        ],
        answer: 1,
      },
      {
        question: "Protraction of jaw is due to which of the following muscle?",
        options: [
          "Serratus anterior",
          "Pectoralis major",
          "Pectoralis minor",
          "Lateral pterygoid",
        ],
        answer: 3,
      },
      {
        question: "Middle meningeal artery is a branch of:",
        options: [
          "Maxillary artery",
          "Mandibular artery",
          "Facial artery",
          "Ophthalmic artery",
        ],
        answer: 0,
      },
      {
        question: "The muscle which is required to open the eustachian tube:",
        options: [
          "Tensor veli palatini muscle",
          "Salpingo pharyngeous",
          "Tensor veli tympani",
          "Levator veli palatini",
        ],
        answer: 0,
      },
      {
        question: "Identify the structure marked with arrow:",
        options: ["Midbrain", "Pons", "Medulla oblongata", "Platysma"],
        answer: 1,
      },
      {
        question: "Killian's dehiscence is formed due to:",
        options: [
          "Superior constrictor muscle",
          "Inferior constrictor muscle",
          "Middle pharyngeal constrictor muscle",
          "Esophageal fibers",
        ],
        answer: 0,
      },
      {
        question:
          "Glossopharyngeal nerve supplies which of the following gland?",
        options: [
          "Parotid gland",
          "Submandibular gland",
          "Sublingual gland",
          "Lacrimal gland",
        ],
        answer: 0,
      },
      {
        question:
          "Which branch of facial nerve supplies muscles of the lower lip?",
        options: [
          "Temporal branch",
          "Cervical branch",
          "Buccal branch",
          "Mandibular branch",
        ],
        answer: 3,
      },
      {
        question: "Lower lip blood supply:",
        options: [
          "Angular artery",
          "Lateral nasal artery",
          "Labial artery",
          "Greater palatine artery",
        ],
        answer: 2,
      },
      {
        question: "Landmark of facial nerve in parotid gland:",
        options: [
          "Tragal pointer",
          "Anterior belly of digastric muscle",
          "Helical point",
          "Suprameatal triangle",
        ],
        answer: 0,
      },
      {
        question: "Trismus is due to spasm of which muscle?",
        options: [
          "Orbicularis",
          "Lateral pterygoid",
          "Mentalis",
          "Medial pterygoid",
        ],
        answer: 1,
      },
      {
        question: "Accessory muscle of mastication:",
        options: ["Risorius", "Orbicularis oris", "Buccinator", "Platysma"],
        answer: 3,
      },
      {
        question: "Parotid duct opens into:",
        options: [
          "First mandibular molar",
          "First maxillary pre-molar",
          "Second mandibular molar",
          "Second maxillary molar",
        ],
        answer: 2,
      },
    ],
  },
  surgery: {
    "Set-1": [
      //ques-compleated
      {
        // 1
        question:
          "A 65-year-old patient presents with progressive anemia and fatigue. Which of the following is usual protocol for screening for colon cancer in this patient?",
        options: [
          "Flexible sigmoidoscopy",
          "Colonoscopy",
          "Barium enema",
          "Fecal occult blood",
        ],
        answer: 3, // Correct answer: Colonoscopy
      },
      {
        // 2
        question:
          "A 65-year-old man developed a burn injury 5 years ago. He has recently developed this lesion in the same area. What is the probable diagnosis?<br><img src='images/s2.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Marjolin's ulcer",
          "Venous ulcer",
          "Arterial ulcer",
          "Infected burn wound",
        ],
        answer: 0, // Correct answer: Marjolin's ulcer
      },
      {
        // 3
        question:
          "Which material is the mesh used for Lichtenstein repair of hernia?",
        options: [
          "Polyglycolic acid",
          "Polypropylene",
          "Polyacrylamide",
          "Polyglactin",
        ],
        answer: 1, // Correct answer: Polypropylene
      },
      {
        // 4
        question:
          "A 65-year-old patient presents with complaints of nonprogressive dysphagia with halitosis. He says that he develops regurgitation of food items eaten in earlier meals and recent episodes occurred even when he was lying in a supine position. What is the first differential diagnosis in this patient?",
        options: [
          "Achalasia cardia",
          "Pulsion diverticulum",
          "Esophageal cancer",
          "Bronchiectasis",
        ],
        answer: 1, // Correct answer: Pulsion diverticulum
      },
      {
        // 5
        question:
          "A 67-year-old man presents after undergoing a Billroth II gastrectomy operation with complaints of diarrhea 20 minutes after meals. What should be the initial management?",
        options: [
          "Small frequent meals based on fat and protein",
          "Reverse Billroth II to Billroth I procedure",
          "Insulin plus glucose",
          "PPI plus amoxicillin",
        ],
        answer: 0, // Correct answer: Small frequent meals based on fat and protein
      },
      {
        // 6
        question: "Identify the instrument shown in the given image.<br><img src='images/s6.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Veress needle",
          "Sprotte needle",
          "Quincke needle",
          "Hasson's cannula",
        ],
        answer: 0, // Correct answer: Veress needle
      },
      {
        // 7
        question:
          "Involvement of which of the following leads to this clinical presentation?<br><img src='images/s7.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["Arteries", "Veins", "Lymphatics", "Nerves"],
        answer: 2, // Correct answer: Lymphatics
      },
      {
        // 8
        question:
          "A patient with inflammatory breast cancer involves 2/3rd of breast surface and peau d'orange appearance is in which stage?",
        options: ["T4a", "T4b", "T4c", "T4d"],
        answer: 3, // Correct answer: T4d
      },
      {
        //9
        question:
          "A patient is suffering from diarrhea, dermatitis, alopecia, rash involving face, perineum, and delayed wound healing after a minor surgery. This can be explained by deficiency of which of the following?",
        options: ["a. Zinc", "b. Magnesium", "c. Niacin", "d. Vitamin C"],
        answer: 0, // Correct answer: Zinc
      },
      {
        //10
        question:
          "Identify the maneuver shown here:<br><img src='images/s10.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "-Kocher maneuver",
          "-Pringle maneuver",
          "-Cattell maneuver",
          "-Mattox maneuver",
        ],
        answer: 1, // Correct answer: Pringle maneuver
      },
      {
        //11
        question: " Which of the following is not a layer of the esophagus?",
        options: ["a. Mucosa", "b. Submucosa", "c. Serosa", "d. Muscularis"],
        answer: 2, // Correct answer: Serosa
      },
      {
        //12
        question:
          "Identify the following image:<br><img src='images/s12.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Trichobezoar",
          "b. Phytobezoar",
          "c. Lactobezoar",
          "d. Gangrene of stomach",
        ],
        answer: 0, // Correct answer: Trichobezoar
      },
      {
        //13
        question:
          " A 30-year-old patient says that a pre-existing lesion has suddenly increased in size in the last 6 months. Diagnosis is:<br><img src='images/s13.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Basal cell carcinoma",
          "b. Squamous cell carcinoma",
          "c. Melanoma",
          "d. Junctional melanocytic nevus",
        ],
        answer: 2, // Correct answer: Melanoma
      },
      {
        //14
        question:
          "A 25-year-old male presents with midline swelling in the neck that measures 2 x 2 cm in size and moves upward on swallowing and tongue protrusion. What is the treatment of choice for this condition?",
        options: [
          "a. Sistrunk operation",
          "b. Commando operation",
          "c. Local irradiation",
          "d. Radioiodine ablation",
        ],
        answer: 0, // Correct answer: Sistrunk operation
      },
      {
        //15
        question:
          "Which is the most common fluid preferred for managing intraoperative fluid loss?",
        options: [
          "a. Normal saline",
          "b. Ringer lactate",
          "c. Blood",
          "d. Colloids",
        ],
        answer: 0, // Correct answer: Ringer lactate
      },
      {
        //16
        question:
          "A 45-year-old patient admitted in ICU is having sudden onset respiratory distress. CXR is shown here. Diagnosis is:<br><img src='images/s16.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Pneumothorax",
          "b. Pleural effusion",
          "c. ARDS",
          "d. Cardiogenic pulmonary edema",
        ],
        answer: 0, // Correct answer: Pneumothorax
      },
      {
        // 17
        question:
          "Child is having cystic swelling in the floor of the mouth which is bluish red in color for the past 5 years. It shows positive transillumination. Diagnosis is:",
        options: [
          "Pleomorphic adenoma",
          "Dermoid cyst",
          "Ranula",
          "Cystic hygroma",
        ],
        answer: 2, // Correct answer: Cystic hygroma
      },
      {
        // 18
        question:
          "For staging of intestinal cancer, which of the following should be considered?",
        options: [
          "Lymph node involvement",
          "Depth of invasion",
          "Metastasis",
          "Size of tumor",
        ],
        answer: 1, // Correct answer: Depth of invasion
      },
      {
        // 19
        question:
          "A 65-year-old female underwent radiation therapy for recurrence of breast cancer. Two weeks later she is having odynophagia, nausea, and vomiting. She says her weight has reduced further. Which of the following is responsible for this presentation?",
        options: [
          "Radiation esophagitis",
          "Esophageal cancer",
          "Candida infection",
          "Gastritis",
        ],
        answer: 0, // Correct answer: Radiation esophagitis
      },
      {
        //20
        question:
          "Which of the following conditions is depicted in the given CT image?<br><img src='images/s20.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Cirrhosis",
          "b. Hepatocellular cancer",
          "c. Renal cell cancer",
          "d. Congenital adrenal hyperplasia",
        ],
        answer: 3, // Correct answer: Hepatocellular cancer
      },
      {
        //21
        question:
          "Which of the following is the preferred treatment in this condition in a patient with RTA?<br><img src='images/s21.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Elective hyperventilation",
          "b. Craniotomy with evacuation",
          "c. Anticoagulants",
          "d. Conservative management",
        ],
        answer: 1, // Correct answer: Craniotomy with evacuation
      },
      {
        //22
        question:
          "A 20-year-old patient presents with complaints of palpitations, daily headaches which are found to be due to hypertension and diaphoresis. Workup shows elevated metanephrine values. Which of the following is the preferred imaging modality for this patient?",
        options: [
          "a. MIBG scan",
          "b. MRI abdomen",
          "c. Sestamibi scan",
          "d. CT chest",
        ],
        answer: 1, // Correct answer: MRI abdomen
      },
      {
        //23
        question:
          "A 30-year-old male has suffered an open manhole injury and presents with blood at the meatus. Which of the following is the most likely injury in this patient?",
        options: [
          "a. Rupture of bulbar urethra",
          "b. Rupture of membranous urethra",
          "c. Rupture of prostatic urethra",
          "d. Rupture of penile urethra",
        ],
        answer: 0, // Correct answer: Rupture of bulbar urethra
      },
      {
        //24
        question:
          "Which investigation should be done for this patient presenting with recurrent episodes of flank pain?<br><img src='images/s24.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Double J-stent",
          "b. Nephrostomy tube",
          "c. PCNL",
          "d. Cystostomy",
        ],
        answer: 0, // Correct answer: PCNL (Percutaneous Nephrolithotomy)
      },
      {
        //25
        question:
          " A 30-year-old patient presented with severe abdominal pain in the emergency. CT abdomen is scheduled but delayed as the patient was hypotensive. The following findings were noted on the abdominal wall. What is the diagnosis of this patient?<br><img src='images/s25.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Acute pancreatitis",
          "b. Fat necrosis",
          "c. Necrotizing fasciitis",
          "d. Pseudo-obstruction colitis",
        ],
        answer: 0, // Correct answer: Necrotizing fasciitis
      },
      {
        // 26
        question:
          "Which of the following is the correct site for doing needle thoracostomy?",
        options: [
          "Upper border of lower rib",
          "Lower border of upper rib",
          "Middle part of intercostal space",
          "Upper part of intercostal space",
        ],
        answer: 0, // Correct answer: Upper border of lower rib
      },
      {
        // 27
        question: "Which of the following statements is correct about triage?",
        options: [
          "Red - Ambulatory",
          "Yellow - Stable need observation",
          "Black - Minor injuries",
          "Green - Life threatening",
        ],
        answer: 1, // Correct answer: Yellow - Stable need observation
      },
      {
        // 28
        question:
          "Which of the following is the cause of constriction of the esophagus at 23 cm from the incisors?",
        options: [
          "Cricopharyngeal sphincter",
          "Left bronchus",
          "Right bronchus",
          "Aortic arch",
        ],
        answer: 3, // Correct answer: Left bronchus
      },
      {
        // 29
        question: "Which of the following is not a component of qSOFA?",
        options: [
          "Serum lactate ≥ 2 mmol/L",
          "RR ≥ 22",
          "GCS ≤ 15",
          "SBP < 100 mm Hg",
        ],
        answer: 0, // Correct answer: Serum lactate ≥ 2 mmol/L
      },
      {
        // 30
        question:
          "Which of the following is the cause of the condition given in the image here?<br><img src='images/s30.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Superficial dermal lymphatics",
          "Deep dermal lymphatics",
          "Artery",
          "Chest wall fixation",
        ],
        answer: 0, // Correct answer: Deep dermal lymphatics
      },
      {
        // 31
        question:
          "Genetic testing for mutation in BRCA1 and BRCA2 genes should be checked in all, except:",
        options: [
          "Men with breast cancer",
          "Women with breast cancer diagnosed after 50 years of age",
          "Bilateral breast cancer",
          "Breast and ovarian cancer",
        ],
        answer: 1, // Correct answer: Women with breast cancer diagnosed after 50 years of age
      },
      {
        // 32
        question:
          "A 4-year-old female was brought to the emergency department with a complaint of accidental ingestion of a coin while playing. Child is having drooling and cannot even drink water. A chest X-ray of the child is given here. Which of the following will be the management for this patient?<br><img src='images/s32.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Esophagoscopy",
          "Bronchoscopy",
          "Heimlich maneuver",
          "Wait and watch",
        ],
        answer: 0, // Correct answer: Esophagoscopy
      },
      {
        // 33
        question:
          "A patient came to OPD with complaints of pus discharge and pain in the perianal region. After further investigation, the diagnosis of fistula-in-ano was made. Gold standard investigation for diagnosis of fistula-in-ano is:",
        options: ["MRI", "CT", "X-ray", "Endoanal ultrasound"],
        answer: 0, // Correct answer: Endoanal ultrasound
      },
      {
        // 34
        question:
          "All of the following are true regarding the condition in the image given here, except:<br><img src='images/s34.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Necrosis of perineum",
          "Scrotal support",
          "Increased incidence in diabetics",
          "Polymicrobial etiology",
        ],
        answer: 1, // Correct answer: Scrotal support
      },
      {
        // 35
        question:
          "Identify the instrument shown in the image:<br><img src='images/s35.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Linear stapler",
          "b. Circular stapler",
          "c. Curved stapler",
          "d. Skin stapler",
        ],
        answer: 3, // Correct answer: a. Linear stapler
      },
      {
        // 36
        question:
          "Which of the following is the best description of the type of graft as shown in the image?<br><img src='images/s36.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["Xenograft", "Allograft", "Autograft", "Isograft"],
        answer: 2, // Correct answer: Autograft
      },
      {
        // 37
        question:
          "A 27-year-old male presented to surgery OPD with complaints of dragging sensation in groin which causes problems in daily commuting to work. There is a mass felt near the right side of the inguinal region as shown in the image. On examination, it is found to be expansile mass with presence of cough impulse. What will be the management of this patient?<br><img src='images/s37.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Hernioplasty",
          "Herniotomy",
          "Wait and watch",
          "Herniorrhaphy",
        ],
        answer: 0, // Correct answer: Hernioplasty
      },
      {
        // 38
        question:
          "Which of the following is the gold standard treatment choice for varicose veins?",
        options: [
          "a. Thermal ablation",
          "b. Stripping procedure",
          "c. Subfascial endoscopic perforator surgery",
          "d. Phlebectomy",
        ],
        answer: 0, // Correct answer: a. Thermal ablation
      },

      {
        // 39
        question:
          "A 25-year-old male met with a bike accident and was brought to the emergency department by his relatives. On examination, he is beginning to develop features of hypovolemic shock and his urine output has started to decrease. Which of the following is the likely stage of shock in this patient?",
        options: ["a. Class I", "b. Class II", "c. Class III", "d. Class IV"],
        answer: 1, // Correct answer: b. Class II
      },

      {
        // 40
        question:
          "A 67-year-old male patient is a known case of testicular carcinoma and presented to the hospital for follow-up. Which of the following Lymph node is the first to be involved in a case of metastasis?",
        options: [
          "a. Iliac LN",
          "b. Paracaval LN",
          "c. Inguinal LN",
          "d. Para-aortic LN",
        ],
        answer: 3, // Correct answer: d. Para-aortic LN
      },

      {
        // 41
        question:
          "A 50-year-old woman presented to the hospital with complaint of mass felt in the right breast with visible ulceration of breast. On examination, the 5 cm hard mass is palpated with axillary node involvement. What will be the TNM staging of this patient?",
        options: [
          "a. cT3a N1 M0",
          "b. cT4b N1 M0",
          "c. pT3a N1 M0",
          "d. pT4b N1 M0",
        ],
        answer: 1, // Correct answer: a. cT3a N1 M0
      },

      {
        // 42
        question:
          "Which of the following is not a component of Child-Turcotte-Pugh score?",
        options: [
          "a. Total bilirubin",
          "b. Serum albumin",
          "c. Ascites",
          "d. aPTT",
        ],
        answer: 3, // Correct answer: d. aPTT
      },

      {
        // 43
        question:
          "Which of the following organism is the causative agent of gas gangrene?",
        options: [
          "a. Clostridium perfringens",
          "b. Clostridium septicum",
          "c. Clostridium novyi",
          "d. Clostridium difficile",
        ],
        answer: 0, // Correct answer: a. Clostridium perfringens
      },

      {
        // 44
        question: "Which of the following is not used as a graft in the CABG?",
        options: [
          "a. LIMA",
          "b. Great saphenous vein",
          "c. Radial artery",
          "d. Intercostal artery",
        ],
        answer: 3, // Correct answer: d. Intercostal artery
      },

      {
        // 45
        question:
          "A 36-year-old female patient had recently undergone laparotomy. What will be the feature of wound dehiscence seen in this patient?",
        options: [
          "a. Serosanguineous discharge",
          "b. Rebound Tenderness",
          "c. Hypotension",
          "d. Severe abdominal pain",
        ],
        answer: 0, // Correct answer: a. Serosanguineous discharge
      },
      {
        // 46
        question:
          "A 55-year-old male was brought to the emergency department with history of fall from stairs. On examination, the patient has a head injury. A Non-contrast Computed Tomography (NCCT) head was done for this patient which is shown here. Which of the following is the most likely diagnosis?<br><img src='images/s46.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["a. EDH", "b. SAH", "c. ICH", "d. SDH"],
        answer: 0, // Correct answer: d. SDH (Subdural Hematoma)
      },

      {
        // 47
        question:
          "Which of the following will not have bilateral hydronephrosis?",
        options: [
          "a. Phimosis",
          "b. Posterior urethral valve",
          "c. Urethral stricture",
          "d. Retrocaval ureter",
        ],
        answer: 3, // Correct answer: a. Phimosis
      },
      {
        // 48
        question:
          "Which of the following is the treatment of the condition shown in the image?<br><img src='images/s48.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. ESWL",
          "b. PCNL",
          "c. Ureteroscopy",
          "d. Reassurance to the patient",
        ],
        answer: 1, // Correct answer: b. PCNL (Percutaneous Nephrolithotomy)
      },
      {
        //49
        question:
          "A CT image of a patient is given here. What is the most likely diagnosis?<br><img src='images/s49.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Hydronephrosis",
          "b. Horseshoe kidney",
          "c. Polycystic kidney",
          "d. Renal cell cancer",
        ],
        answer: 1, // Correct answer: b. Horseshoe kidney
      },
      {
        //50
        question:
          "Which of the following procedure has least chance of recurrence of duodenal ulcer?",
        options: [
          "a. Gastrectomy",
          "b. Gastroenterostomy",
          "c. Selective Vagotomy and drainage",
          "d. Highly selective vagotomy",
        ],
        answer: 3, // Correct answer: d. Highly selective vagotomy
      },
    ],
    "Set-2": [
      {
        // 51
        question:
          "Which of the following is a universal feature in all types of shock?",
        options: [
          "Decrease in tissue perfusion",
          "Reduced Peripheral resistance",
          "Decrease in RR",
          "Cold extremities",
        ],
        answer: 0, // Correct answer: Decrease in tissue perfusion
      },
      {
        // 52
        question:
          "A 54-year-old male patient presented to the surgery OPD with complaints of lesions in the buccal mucosa. He has a history of chewing pan masala for more than 30 years. What can be done in this patient for management?<br><img src='images/s52.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Local surgical excision/release",
          "Reassure the patient",
          "Sclerotherapy",
          "Vitamin supplementation",
        ],
        answer: 0, // Correct answer: Local surgical excision/release
      },
      {
        // 53
        question:
          "A homosexual man complains of painful defecation and prolapsing mass from anus, which does not reduce and has foul-smelling discharge. On examination, cauliflower-like mass was seen. On biopsy, diagnosis of squamous cell carcinoma was made. Which of the following is the preferred treatment option?",
        options: [
          "Abdominoperineal resection",
          "Chemotherapy",
          "Chemoradiation",
          "Radiotherapy"
        ],
        answer: 2 // Correct answer: Chemoradiation
      },
      {
        // 54
        question:
          "The condition shown in the image is due to nonfusion of:<br><img src='images/s54.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Medial nasal process and maxillary process",
          "Lateral nasal process and maxillary process",
          "Maxillary process and mandible",
          "Palatine process"
        ],
        answer: 0 // Correct answer: Medial nasal process and maxillary process
      },
      {
        // 55
        question:
          "A diabetic patient developed DVT along with necrolytic erythema migrans. What is the most likely cause?",
        options: [
          "Glucagonoma",
          "Gastrinoma",
          "Insulinoma",
          "Somatostatinoma"
        ],
        answer: 0 // Correct answer: Glucagonoma
      },
      {
        // 56
        question: "Increased tone of LES is due to:",
        options: [
          "Decreased substance P in LES",
          "Decreased Ach receptors in LES",
          "Decreased NO in LES",
          "Absent Meissner's plexus in esophagus"
        ],
        answer: 2 // Correct answer: Decreased NO in LES
      },
      {
        // 57
        question:
          "All of the following are correct about neuroblastoma; except:",
        options: [
          "Lymphatic spread",
          "Early lung metastasis",
          "Treatment is chemotherapy followed by surgery",
          "Most common intra-abdominal malignancy in children"
        ],
        answer: 1 // Correct answer: Early lung metastasis
      },
      {
        // 58
        question: "Which of the following is not true about IHPS?",
        options: [
          "Presents with nonbilious vomiting",
          "USG is 100% sensitive to detect IHPS",
          "Caused by hypertrophy of inner longitudinal muscles",
          "Occurs in first born male"
        ],
        answer: 2 // Correct answer: Caused by hypertrophy of inner longitudinal muscles
      },
      {
        // 59
        question: "Select the correctly matched options:",
        options: [
          "EDH: Pinpoint pupil",
          "Penetrating injury to eustachian tube: CSF otorrhea",
          "Liver injury: Kehr's sign",
          "Mastoid bruising: Skull base fracture"
        ],
        answer: 3 // Correct answer: Mastoid bruising: Skull base fracture
      },
      {
        // 60
        question: "Most important risk factor for acute mastitis is:",
        options: [
          "Breast engorgement",
          "Cracked nipple",
          "Failure of lactation",
          "Massage"
        ],
        answer: 1 // Correct answer: Cracked nipple
      },
      {
        // 61
        question: "Which nerve is damaged in this presentation?<br><img src='images/s61.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Radial nerve",
          "Ulnar nerve",
          "Median nerve",
          "Axillary nerve"
        ],
        answer: 0 // Correct answer: Radial nerve (based on common presentations)
      },
      {
        // 62
        question:
          "A chronic alcoholic patient who was suffering from C.L.D, presented with hematemesis. What can be the most appropriate cause of hematemesis?",
        options: [
          "Esophageal varices",
          "Mallory Weiss tear",
          "Boerhaave syndrome",
          "Peptic ulcer disease"
        ],
        answer: 0 // Correct answer: Esophageal varices
      },
      {
        // 63
        question:
          "A sick child is brought to your ER with bilious vomiting. What will be the most appropriate test to diagnose the condition?",
        options: [
          "Barium swallow",
          "Barium meal",
          "Barium meal follow through",
          "CECT of abdomen"
        ],
        answer: 3 // Correct answer: CECT of abdomen
      },
      {
        // 64
        question: "Identify the pathology in the newborn baby as shown in the image:<br><img src='images/s64.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Meningocele",
          "Congenital megacolon",
          "Imperforate anus",
          "Pyloric stenosis"
        ],
        answer: 2 // Correct answer: Imperforate anus
      },
      {
        // 65
        question: "Best investigation for GERD:",
        options: [
          "24-hour ambulatory pH monitoring",
          "Upper GI endoscopy",
          "CECT",
          "MRI"
        ],
        answer: 0 // Correct answer: 24-hour ambulatory pH monitoring
      },
      {
        // 66
        question:
          "A patient has undergone surgery as shown in the image. After the operation, 30 minutes after taking the meal, the patient develops pallor, dizziness, and sweating. What is the diagnosis?<br><img src='images/s66.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Reflux gastritis",
          "Dumping syndrome",
          "Post vagotomy diarrhea",
          "Frey's syndrome"
        ],
        answer: 1 // Correct answer: Dumping syndrome
      },
      {
        // 67
        question: "Identify the pathology in the image given:<br><img src='images/s67.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Acute pancreatitis",
          "Liver abscess",
          "Acute cholecystitis",
          "Hollow viscus perforation"
        ],
        answer: 3 // Correct answer: Hollow viscus perforation
      },
      {
        // 68
        question: "This is the specimen removed from the stomach of a young female patient. You should now send this patient for which consult?<br><img src='images/s68.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Pediatrician",
          "Psychiatrist",
          "Cardiologist",
          "Dermatologist"
        ],
        answer: 1 // Correct answer: Psychiatrist
      },
      {
        // 69
        question: "A 35-year-old female presented to emergency with upper abdominal pain radiating to back. On X-ray, colon cut-off sign was seen. What is the diagnosis?",
        options: [
          "Acute pancreatitis",
          "Acute appendicitis",
          "Chronic pancreatitis",
          "Acute cholecystitis"
        ],
        answer: 0 // Correct answer: Acute pancreatitis
      },
      {
        // 70
        question: "A patient presented with symptoms of dysphagia, retrosternal pain, and regurgitation of food items eaten the day before. What is the diagnosis?",
        options: [
          "Patterson Kelly syndrome",
          "Achalasia cardia",
          "Esophageal diverticula",
          "Reflux esophagitis"
        ],
        answer: 2 // Correct answer: Achalasia cardia
      },
      {
        // 71
        question: "A 50-year-old female who had total gastrectomy 10 years ago, presented with neurological symptoms. Which type of anemia is most likely to be seen in this patient?",
        options: [
          "Iron deficiency anemia",
          "Megaloblastic anemia",
          "Aplastic anemia",
          "Hemolytic anemia"
        ],
        answer: 1 // Correct answer: Megaloblastic anemia
      },
      {
        // 72
        question:
          "Which of the following vitamin deficiency will be seen in a female with Crohn's disease, in whom the terminal ileum has been removed?",
        options: [
          "Vitamin B12 deficiency",
          "Vitamin C deficiency",
          "Vitamin K deficiency",
          "Niacin deficiency",
        ],
        answer: 0, // Correct answer: Vitamin B12 deficiency
      },
      {
        // 73
        question:
          "A 40-year-old patient presented with passage of mucus and blood in the stool. On sigmoidoscopy, inflammation was seen, mainly in the rectum. On biopsy, crypt abscess was detected. What is the most probable diagnosis?",
        options: [
          "Ulcerative colitis",
          "Irritable bowel syndrome",
          "Crohn's disease",
          "Pseudomembranous colitis",
        ],
        answer: 0, // Correct answer: Ulcerative colitis
      },
      {
        // 74
        question:
          "A patient suffering from inflammatory bowel disease presented with peritonitis following ileal perforation. Exploratory laparotomy was done. Which of the following should be preferred?",
        options: [
          "Ileostomy followed by definitive surgery later",
          "Ileal pouch anal anastomosis",
          "Resection of diseased segment with anastomosis with normal segment",
          "Right hemicolectomy with ileo-transverse anastomosis",
        ],
        answer: 0, // Correct answer: Ileostomy followed by definitive surgery later
      },
      {
        // 75
        question:
          "A patient is taking broad spectrum antibiotics for a long period of time and presented with diarrhea. Which of the following is the causative organism for this?",
        options: [
          "Clostridium botulinum",
          "Clostridium tetani",
          "Clostridium difficile",
          "Clostridium perfringens",
        ],
        answer: 2, // Correct answer: Clostridium difficile
      },
      {
        // 76
        question:
          "A 7-week pregnant female presented to emergency with pain in the right lower abdomen. On USG, acute appendicitis was diagnosed. What is the best management?",
        options: [
          "Ochsner-Sherren regime",
          "Emergency appendectomy",
          "Termination of pregnancy",
          "Give antibiotics and wait till second trimester",
        ],
        answer: 1, // Correct answer: Emergency appendectomy
      },
      {
        // 77
        question:
          "A 5-year-old child was brought to the hospital with a history of constipation. Even after taking prescribed stool softeners, the child was able to pass stool only once per week. The mother also tells that when the child was born, he passed greenish stool only after 48 hours of birth. Which of the following should be done in this child?",
        options: [
          "Ask the mother to give a high fiber diet",
          "Plain X-ray abdomen",
          "Barium enema and anorectal manometry",
          "Surgical treatment",
        ],
        answer: 2, // Correct answer: Barium enema and anorectal manometry
      },
      {
        // 78
        question: "Short chain fatty acids are absorbed in:",
        options: ["Stomach", "Small intestine", "Cecum", "Large intestine"],
        answer: 3, // Correct answer: Large intestine
      },
      {
        // 79
        question:
          "A patient presented in the emergency with pain in the right iliac fossa. The patient was clinically stable for 2 days, but then his symptoms started worsening. He was offered the treatment of extraperitoneal drainage. What would be the most likely pathology in this patient?",
        options: [
          "Perinephric abscess",
          "Appendicular abscess",
          "Ruptured ectopic pregnancy",
          "Acute cholecystitis",
        ],
        answer: 1, // Correct answer: Appendicular abscess
      },
      {
        // 80
        question:
          "An elderly woman who did not eat food for the last 2 days presented with bilious vomiting. X-ray abdomen is shown below. What is the diagnosis?<br><img src='images/s80.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Distal obstruction in the small intestine",
          "Proximal obstruction in the small intestine",
          "Pseudo obstruction",
          "Distal colonic obstruction",
        ],
        answer: 0, // Correct answer: Proximal obstruction in the small intestine
      },
      {
        // 81
        question: "What is the site of maximum pain in acute appendicitis?",
        options: [
          "McBurney's point",
          "Flank region",
          "Right upper abdomen",
          "Umbilicus",
        ],
        answer: 0, // Correct answer: McBurney's point
      },
      {
        // 82
        question:
          "What is the diagnosis on the basis of the image given below?<br><img src='images/s82.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Pancreas divisum",
          "Annular pancreas",
          "Duodenal atresia",
          "Hypertrophic pyloric stenosis",
        ],
        answer: 1, // Correct answer: Annular pancreas
      },
      {
        // 83
        question:
          "The chest X-ray of a 4-day-old neonate with respiratory distress and a scaphoid abdomen is shown below. What is the diagnosis?<br><img src='images/s83.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Pneumonia",
          "Bochdalek hernia",
          "Hiatus hernia",
          "Pneumothorax",
        ],
        answer: 1, // Correct answer: Bochdalek hernia
      },
      {
        // 84
        question:
          "A 3-week-old male child was brought to the emergency with multiple episodes of non-bilious vomiting. Barium meal image is given below. What is the diagnosis?<br><img src='images/s84.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Duodenal atresia",
          "Congenital hypertrophic pyloric stenosis",
          "Annular pancreas",
          "Gastric ulcer",
        ],
        answer: 1, // Correct answer: Congenital hypertrophic pyloric stenosis
      },
      {
        // 85
        question:
          "The given postoperative X-ray abdomen is shown below. What is the most common electrolyte abnormality that can cause this condition?<br><img src='images/s85.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Hypokalemia",
          "Hyperkalemia",
          "Hyponatremia",
          "Hypernatremia",
        ],
        answer: 0, // Correct answer: Hypokalemia
      },
      {
        // 86
        question:
          "A 25-year-old young female presented with abdominal swelling. The swelling was moving perpendicular to the line of attachment of the mesentery. What is the most probable diagnosis?",
        options: [
          "Spigelian hernia",
          "Peritoneal cyst",
          "Pseudocyst of pancreas",
          "Chylolymphatic cyst",
        ],
        answer: 3, // Correct answer: Chylolymphatic cyst
      },
      {
        // 87
        question:
          "While performing surgery on a 2-year-old child for acute appendicitis, the structure shown in the image was found, 2 feet proximal to the ileocecal junction and measuring 2 inches in length. What is the diagnosis?<br><img src='images/s87.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Meckel's diverticulum",
          "Appendicitis",
          "Sarcoma",
          "Zenker's diverticulum",
        ],
        answer: 0, // Correct answer: Meckel's diverticulum
      },
      {
        // 88
        question:
          "What is the name of the stoma created after surgery for colon cancer, as shown in the image?<br><img src='images/s88.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Loop colostomy",
          "End colostomy",
          "Loop ileostomy",
          "End ileostomy",
        ],
        answer: 2, // Correct answer: End colostomy
      },
      {
        // 89
        question:
          "A patient has been complaining of wetting of underwear with profuse purulent discharge even after multiple cleaning attempts. What is the most probable diagnosis?<br><img src='images/s89.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Pilonidal cyst",
          "Perianal abscess",
          "Hemorrhoids",
          "Anal fistula",
        ],
        answer: 3, // Correct answer: Anal fistula
      },
      {
        // 90
        question:
          "What is the diagnosis on the basis of the image given below?<br><img src='images/s90.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Perianal abscess",
          "Anorectal fistula",
          "Haemorrhoids",
          "Pilonidal sinus",
        ],
        answer: 0, // Correct answer: Anorectal fistula
      },
      {
        // 91
        question:
          "What is the diagnosis on the basis of the image given below?<br><img src='images/s91.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Umbilical hernia",
          "Paraumbilical hernia",
          "Epigastric hernia",
          "Inguinal hernia",
        ],
        answer: 1, // Correct answer: Paraumbilical hernia
      },
      {
        // 92
        question:
          "A newborn was having herniation of liver and small intestine via umbilicus, which was covered with membranes. What is the most probable diagnosis?",
        options: [
          "Epigastric hernia",
          "Ectopia vesicae",
          "Omphalocele",
          "Gastroschisis",
        ],
        answer: 2, // Correct answer: Omphalocele
      },
      {
        // 93
        question: "Dohlman operation is done for?",
        options: [
          "Pharyngeal pouch",
          "Esophageal web",
          "Anal stenosis",
          "Schatzki ring",
        ],
        answer: 0, // Correct answer: Pharyngeal pouch
      },
      {
        // 94
        question: "Specific tumor marker for carcinoma pancreas is:",
        options: ["CA19-9", "CEA", "Neuron-specific enolase", "AFP"],
        answer: 0, // Correct answer: CA19-9
      },
      {
        // 95
        question:
          "Which of the following is the characteristic feature associated with Barrett's esophagus?",
        options: [
          "Squamous metaplasia",
          "Gastric metaplasia with goblet cells",
          "Intestinal metaplasia with goblet cells",
          "Severe dysplasia",
        ],
        answer: 2, // Correct answer: Intestinal metaplasia with goblet cells
      },
      {
        // 96
        question:
          "The given image of barium swallow suggests the diagnosis of:<br><img src='images/s96.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Achalasia cardia",
          "Diffuse esophageal spasm",
          "Nutcracker esophagus",
          "Carcinoma esophagus",
        ],
        answer: 0, // Correct answer: Achalasia cardia
      },
      {
        // 97
        question:
          "A 35-year-old obese man underwent Laparoscopic Nissen's fundoplication for GORD. 6 hours post-operatively, he feels fine and is stable. Which of the following is the most appropriate step in management of this patient?",
        options: [
          "Monitor vitals hourly",
          "Insert chest tube and monitor hourly drain",
          "Perform ABG serially",
          "Respiratory muscles and lower limb physiotherapy",
        ],
        answer: 0, // Correct answer: Respiratory muscles and lower limb physiotherapy
      },
      {
        // 98
        question:
          "What is the diagnosis based on the given image of barium enema?<br><img src='images/s98.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Hirschsprung's disease",
          "Sigmoid volvulus",
          "Carcinoma colon",
          "Intussusception",
        ],
        answer: 3, // Correct answer: Sigmoid volvulus
      },
      {
        // 99
        question:
          "A resected appendix specimen is shown below. The patient had raised serum chromogranin levels. What is the diagnosis?<br><img src='images/s99.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Mucocele",
          "Mucinous cystadenocarcinoma",
          "Adenocarcinoma with signet cell appearance",
          "Carcinoid tumor",
        ],
        answer: 3, // Correct answer: Carcinoid tumor
      },
      {
        // 100
        question:
          "Which of the following is not an incision used for appendicectomy?",
        options: [
          "Kocher's incision",
          "Rutherford Morrison incision",
          "Lanz incision",
          "Grid-iron incision",
        ],
        answer: 0, // Correct answer: Kocher's incision
      },
    ],
    "Set-3": [//question -compleated
      {
        // 101
        question:
          "Which of the following is not done in a case of fissure in ano?",
        options: [
          "Sitz bath",
          "Topical calcium channel blockers",
          "Proctoscopy",
          "High fiber diet",
        ],
        answer: 2, // Correct answer: Proctoscopy
      },
      // 102
      {
        question:
          "A 20-year-old female diagnosed with adenocarcinoma of the stomach presents with the following lesion on examination. What is the diagnosis?<br><img src='images/s102.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/> ",
        options: [
          "Sister Mary Joseph nodule",
          "Busacca nodule",
          "Infected umbilical hernia",
          "Lisch nodule",
        ],
        answer: "0",
      },
      {
        // 103
        question: "A child of 6 months was presented with the following presentation. What is the management protocol?<br><img src='images/s103.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Surgery if persistence beyond 2 years of age even if asymptomatic",
          "Surgery if persistence beyond 5 years of age only if symptomatic",
          "Immediate surgery",
          "Hernioplasty"
        ],
        answer: 0, // Correct answer: Surgery if persistence beyond 2 years of age even if asymptomatic
      },
      {
        // 104
        question: "A 28-year-old alcoholic patient walks to the hospital with complaints of multiple episodes of vomiting and chest pain after binge drinking. On per abdomen examination, release sign is noted. X-ray abdomen in standing position shows pneumoperitoneum. The most probable reason for this presentation is:",
        options: [
          "Boerrhave syndrome",
          "Tension pneumothorax",
          "PUD perforation",
          "Mallory Weiss tear"
        ],
        answer: 2, // Correct answer: PUD perforation
      },
      {
        // 105
        question: "Triad of abdominal pain, fever, and jaundice is called:",
        options: [
          "Charcot's triad",
          "Saint's triad",
          "Virchow triad",
          "Murphy's triad"
        ],
        answer: 0, // Correct answer: Charcot's triad
      },
      {
        // 106
        question: "A 32-year-old man presented with fever and pain in upper right hypochondrium after food intake. Investigation of choice:",
        options: [
          "CECT",
          "Ultrasound",
          "MRI",
          "HRCT"
        ],
        answer: 1, // Correct answer: Ultrasound
      },
      {
        // 107
        question: "All of the following are true about Crohn's disease; EXCEPT:",
        options: [
          "Recurrence is more common",
          "Rectum is involved",
          "Serpiginous ulcers are formed",
          "Transmural involvement"
        ],
        answer: 1, // Correct answer: Rectum is involved
      },
      {
        // 108
        question: "A 7-day-old infant presents with bilious vomiting and gross abdominal distention with absent bowel sounds. X-ray abdomen shows multiple gas-filled loops. Diagnosis is:",
        options: [
          "Hirschsprung disease",
          "Congenital Hypertrophic pyloric stenosis",
          "Duodenal atresia",
          "Malrotation of gut"
        ],
        answer: 3, // Correct answer: Malrotation of gut
      },
      {
        // 109
        question: "Meconium ileus is a presentation seen in which of the following diseases?",
        options: [
          "Mucoviscidosis",
          "Hirschsprung disease",
          "Ileal atresia",
          "Congenital aganglionosis"
        ],
        answer: 0, // Correct answer: Mucoviscidosis
      },
      {
        // 110
        question: "Which is the first investigation to be done in case of a neonate presenting with frothiness in mouth and dyspnea?",
        options: [
          "Bronchoscopy with injection of methylene blue",
          "NG Tube insertion and CXR to check position of tube",
          "CT chest",
          "Endoscopy"
        ],
        answer: 1, // Correct answer: NG Tube insertion and CXR to check position of tube
      },
      {
        // 111
        question: "Seat Belt injury leads to:",
        options: [
          "Splenic laceration",
          "Splenic contusion",
          "Gut ischemia",
          "Mesenteric adenitis"
        ],
        answer: 2, // Correct answer: Splenic laceration
      },
      {
        // 112
        question: "What is the location of Killian dehiscence?",
        options: [
          "Below Superior constrictor",
          "Below Inferior constrictor",
          "Below cricopharyngeal muscle",
          "Below upper 1/3rd of smooth muscle of oesophagus"
        ],
        answer: 0, // Correct answer: Below Superior constrictor
      },
      {
        // 113
        question: "MC immediate complication of splenectomy:",
        options: [
          "Hemorrhage",
          "Fistula",
          "Bleeding from gastric mucosa",
          "Pancreatitis"
        ],
        answer: 0, // Correct answer: Hemorrhage
      },
      {
        // 114
        question: "Best treatment strategy for Anal cancer:",
        options: [
          "Chemoradiation",
          "Surgery",
          "Radiation",
          "Chemotherapy"
        ],
        answer: 0, // Correct answer: Chemoradiation
      },
      {
        // 115
        question: "Which is false about Crohn's disease?",
        options: [
          "No occurrence after surgery",
          "Aphthous ulcer",
          "Skip lesions",
          "Fistula formation"
        ],
        answer: 0, // Correct answer: No occurrence after surgery
      },
      {
        // 116
        question: "Which of the following is not done in Carcinoma oesophagus?",
        options: [
          "Biopsy",
          "pH-metry",
          "CT chest",
          "PET scan"
        ],
        answer: 1, // Correct answer: pH-metry
      },
      {
        // 117
        question: "A 30-year-old man presents with a four days history of right iliac fossa pain. USG image is shown below. Which is the best management algorithm?<br><img src='images/s117.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Ochsner-Sherren regimen",
          "Urgent appendectomy",
          "Extraperitoneal drainage and parenteral antibiotics",
          "Percutaneous drainage and parenteral antibiotics"
        ],
        answer: 0, // Correct answer: Urgent appendectomy
      },
      {
        // 118
        question: "Comment on the diagnosis of a film shown of a 65-year-old man with acute abdomen.<br><img src='images/s118.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Ileocolic intussusception",
          "Sigmoid volvulus",
          "Toxic megacolon",
          "Colocolic intussusception"
        ],
        answer: 3, // Correct answer: Sigmoid volvulus
      },
      {
        // 119
        question: "Surgery is indicated in Ulcerative Colitis in all; EXCEPT:",
        options: [
          "Toxic megacolon",
          "Colonic perforation",
          "Colonic obstruction",
          "Refractory fistula"
        ],
        answer: 3, // Correct answer: Colonic obstruction
      },
      {
        // 120
        question: "Which is the most common site of carcinoma of the esophagus?",
        options: [
          "Lower 1/3rd",
          "Middle 1/3rd",
          "Upper 1/3rd",
          "GE junction"
        ],
        answer: 1, // Correct answer: Lower 1/3rd
      },
      {
        // 121
        question: "A 9-month-old child presents with excessive cry, right iliac fossa sausage lump and blood in stools. What is the best treatment?",
        options: [
          "IVF-antibiotic-NG tube",
          "IVF-antibiotic-air enema",
          "IVF-antibiotics-barium enema",
          "IVF-antibiotics-warm saline enema"
        ],
        answer: 1, // Correct answer: IVF-antibiotic-air enema
      },
      {
        // 122
        question: "Metastatic liver disease is found in____% of patients undergoing surgery for primary colorectal cancer?",
        options: [
          "10%",
          "15%",
          "33%",
          "75%"
        ],
        answer: 2, // Correct answer: 33%
      },
      {
        // 123
        question: "Which is the most common cause of hypergastrinemia?",
        options: [
          "Postvagotomy",
          "Regular use of PPI",
          "Resection of small intestine",
          "Atrophic gastritis"
        ],
        answer: 1, // Correct answer: Regular use of PPI
      },
      {
        // 124
        question: "What prefix symbol is used to describe the administration of neo-adjuvant treatment given in colorectal cancer?",
        options: [
          "h",
          "p",
          "y",
          "z"
        ],
        answer: 2, // Correct answer: y
      },
      {
        // 125
        question: "A 20-year-old patient presents with RIF pain and fever. USG is shown in image. Diagnosis is:<br><img src='images/s125.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Acute appendicitis",
          "Intussusception",
          "Volvulus",
          "Intestinal obstruction"
        ],
        answer: 0, // Correct answer: Acute appendicitis
      },
      {
        // 126
        question: "Gastric outlet obstruction leads to:",
        options: [
          "Hypochloremic metabolic alkalosis",
          "Hyperchloremic metabolic acidosis",
          "Hypernatremic metabolic alkalosis",
          "Hyponatremic metabolic acidosis"
        ],
        answer: 0, // Correct answer: Hypochloremic metabolic alkalosis
      },
      {
        // 127
        question: "Dysphagia lusoria is due to:",
        options: [
          "Aberrant blood vessel",
          "Esophageal diverticulum",
          "Duodenal obstruction",
          "Gastric outlet obstruction"
        ],
        answer: 0, // Correct answer: Aberrant blood vessel
      },
      {
        // 128
        question: "Which is the most common site of origin of peritoneal deposits?",
        options: [
          "Stomach cancer",
          "Colorectal cancer",
          "Pancreatic cancer",
          "Ovarian cancer"
        ],
        answer: 3, // Correct answer: Colorectal cancer
      },
      {
        // 129
        question: "What does the arrow in the given CT abdomen show?<br><img src='images/s129.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Left adrenal gland",
          "Pancreas",
          "Lesser omentum",
          "Epiploic foramen"
        ],
        answer: 1, // Correct answer: Left adrenal gland
      },
      {
        // 130
        question: "Which of the following is associated with Gardner syndrome?",
        options: [
          "Retinoblastoma",
          "Neuroblastoma",
          "Desmoid tumor",
          "Dermoid cyst"
        ],
        answer: 2, // Correct answer: Desmoid tumor
      },
      {
        // 131
        question: "Hypertrophic pyloric stenosis presents at:",
        options: [
          "3 day",
          "3 weeks",
          "3 month",
          "3 years"
        ],
        answer: 1, // Correct answer: 3 weeks
      },
      {
        // 132
        question: "A 40-year-old chronic alcoholic presents with distended abdomen, hematemesis and fresh blood in stool. On examination, huge ascites and distended veins over abdominal wall are noted. Most likely cause of hematemesis is:",
        options: [
          "Esophagitis",
          "Esophageal varices",
          "Esophageal cancer",
          "Erosion of gastroduodenal artery"
        ],
        answer: 1, // Correct answer: Esophageal varices
      },
      {
        // 133
        question: "A 30-year-old known alcoholic presents to the emergency with massive Upper GIT bleeding. On examination pulse = 110/min and BP = 80/60. First step to be taken is:",
        options: [
          "Cold saline lavage",
          "Immediate BT",
          "Transfer for urgent sclerotherapy",
          "Large bore cannula for IVF"
        ],
        answer: 3, // Correct answer: Large bore cannula for IVF
      },
      {
        // 134
        question: "Which is the rarest position of appendix?",
        options: [
          "Retro-caecal",
          "Post-ileal",
          "Pre-ileal"
        ],
        answer: 1, // Correct answer: Post-ileal
      },
      {
        // 135
        question: "Which is the best way to diagnose lower small intestine obstruction?",
        options: [
          "Pain abdomen",
          "Multiple air fluid levels",
          "Profuse bilious vomiting",
          "Feculent vomiting"
        ],
        answer: 1, // Correct answer: Feculent vomiting
      },
      {
        // 136
        question: "What is the location of first constriction of esophagus from the incisor tooth?",
        options: [
          "15 cm",
          "18 cm",
          "25 cm",
          "40 cm"
        ],
        answer: 0, // Correct answer: 18 cm
      },
      {
        // 137
        question: "Which is the best investigation for dysphagia?",
        options: [
          "Enteroscopy",
          "Barium swallow",
          "Barium enema",
          "Barium meal follow through"
        ],
        answer: 1, // Correct answer: Barium swallow
      },
      {
        // 138
        question: "What is incorrect about Zenker's diverticulum?",
        options: [
          "Regurgitation of previous day food",
          "Halitosis",
          "Located at Killian's triangle",
          "Metabolic alkalosis"
        ],
        answer: 3, // Correct answer: Metabolic alkalosis
      },
      {
        // 139
        question: "Achalasia Cardia presents with all; EXCEPT:",
        options: [
          "Halitosis",
          "Regurgitation of previous day's food",
          "Dysphagia (liquids > solids)",
          "Corkscrew esophagus"
        ],
        answer: 3, // Correct answer: Corkscrew esophagus
      },
      {
        // 140
        question: "Achalasia cardia presents with all; EXCEPT:",
        options: [
          "Increased lower esophagus sphincter tone",
          "Normal peristalsis",
          "Dilatation proximally",
          "Malignancy"
        ],
        answer: 1, // Correct answer: Normal peristalsis
      },
      {
        // 141
        question: "Dysphagia mainly for liquids is seen with:",
        options: [
          "Achalasia cardia",
          "Zenker diverticulum",
          "Barrett's esophagus",
          "Diffuse esophageal spasm"
        ],
        answer: 0, // Correct answer: Achalasia cardia
      },
      {
        // 142
        question: "Lower esophageal sphincter tone is due to:",
        options: [
          "Vasoactive intestinal peptide",
          "Nitrous oxide",
          "Acetylcholine",
          "Pancreatic polypeptide"
        ],
        answer: 2, // Correct answer: Acetylcholine
      },
      {
        // 143
        question: "Pseudo-achalasia is seen with:",
        options: [
          "Chagas disease",
          "Scleroderma",
          "Tumor infiltration",
          "Diffuse esophageal spasm"
        ],
        answer: 2, // Correct answer: Tumor infiltration
      },
      {
        // 144
        question: "Which Metaplasia occurs in lower esophagus of smokers?",
        options: [
          "Gastric metaplasia",
          "Goblet cells intestinal metaplasia",
          "Esophageal metaplasia",
          "Intestinal dysplasia"
        ],
        answer: 1, // Correct answer: Goblet cells intestinal metaplasia
      },
      {
        // 145
        question: "Which of the following is more prone to carcinoma?",
        options: [
          "Barrett's esophagus",
          "Boerhaave syndrome",
          "Mallory Weiss tear",
          "Esophageal varices"
        ],
        answer: 0, // Correct answer: Barrett's esophagus
      },
      {
        // 146
        question: "Scoring of esophageal reflux is done by:",
        options: [
          "Ranson score",
          "Gleason score",
          "Alvarado score",
          "De Meester scoring"
        ],
        answer: 3, // Correct answer: De Meester scoring
      },
      {
        // 147
        question: "Which is the best investigation for detecting esophageal perforation?",
        options: [
          "CXR",
          "CT chest",
          "Upper G.I. endoscopy",
          "CT chest with contrast"
        ],
        answer: 3, // Correct answer: CT chest with contrast
      },
      {
        // 148
        question: "Para-esophageal hernia is best diagnosed by:",
        options: [
          "Chest X-ray",
          "Barium study",
          "CT scan",
          "Endoscopic ultrasound"
        ],
        answer: 1, // Correct answer: CT scan
      },
      {
        // 149
        question: "To differentiate malignancy from benign lesion in GIT, what is the investigation of choice?",
        options: [
          "USG",
          "Biopsy",
          "Endoscopy",
          "P.E.T scan"
        ],
        answer: 1, // Correct answer: Biopsy
      },
      {
        // 150
        question: "Dysphagia lusoria is due to:",
        options: [
          "Aberrant right subclavian artery",
          "Aberrant left subclavian artery",
          "Aberrant internal carotid artery",
          "Aberrant innominate artery"
        ],
        answer: 0, // Correct answer: Aberrant right subclavian artery
      }
      
                            
    ],
    "Set-4": [
      //ques-compleated , img
      {
        // 151
        question: "Boerhaave syndrome is:",
        options: [
          "Spontaneous Rupture of esophagus",
          "Traumatic rupture of esophagus",
          "Tear at gastro-esophageal junction",
          "Foreign body esophagus",
        ],
        answer: 0, // Correct answer: Spontaneous Rupture of esophagus
      },
      {
        // 152
        question:
          "Which is the most important factor for development of appendicitis and its complications?",
        options: [
          "Bacterial proliferation",
          "Age",
          "Increased dietary fiber",
          "Bowel lumen obstruction",
        ],
        answer: 3, // Correct answer: Bowel lumen obstruction
      },
      {
        // 153
        question: "Mc-burey's point is:",
        options: [
          "1/3rd distance from left anterior superior iliac spine",
          "2/3rd distance from the anterior superior iliac spine",
          "1/3rd distance from the umbilicus to ASIS",
          "1/3rd distance from right anterior superior iliac spine",
        ],
        answer: 3, // Correct answer: 1/3rd distance from the umbilicus to ASIS
      },
      {
        // 154
        question:
          "A 25-year-old young male presented with a tender mass in right iliac fossa. On physical examination he has pain and fixed flexed hip. Diagnosis is:",
        options: ["Psoas abscess", "Appendicitis", "Amoeboma", "Ileocaecal TB"],
        answer: 1, // Correct answer: Psoas abscess
      },
      {
        // 155
        question:
          "Which is the best guide to finding appendix intra operatively?",
        options: [
          "Locate ileo-ceacal junction",
          "Locate the blind tube of appendix",
          "Locate the anterior taenia of the caecum",
          "Locate the mesenteric supply",
        ],
        answer: 2, // Correct answer: Locate ileo-ceacal junction
      },
      {
        // 156
        question:
          "Identify the structure shown in the given picture<br><img src='images/s156.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Appendix",
          "Meckel diverticulum",
          "Diverticulosis",
          "Ligament of Treitz",
        ],
        answer: 0, // Correct answer: Appendix
      },
      {
        // 157
        question:
          "What will be the location of the appendix in silent appendix?",
        options: ["Pelvic", "Preileal", "Retrocaecal", "Pelvic"],
        answer: 2, // Correct answer: Retrocaecal
      },

      {
        // 158
        question: "MANTREL score is done for:",
        options: [
          "Acute appendicitis",
          "Acute pancreatitis",
          "Acute cholecystitis",
          "Acute salpingitis",
        ],
        answer: 0, // Correct answer: Acute appendicitis
      },
      {
        // 159
        question:
          "In a child, which of the following diseases is misdiagnosed as appendicitis?",
        options: [
          "Gastroenteritis",
          "Lymphadenitis",
          "Intussusception",
          "All of these",
        ],
        answer: 3, // Correct answer: Lymphadenitis
      },
      {
        // 160
        question: "Ochsner Sherren regimen is used for management of:",
        options: [
          "Appendicular mass",
          "Appendicular abscess",
          "Appendicitis",
          "Peritonitis following appendicitis",
        ],
        answer: 0, // Correct answer: Appendicular mass
      },
      {
        // 161
        question: "What is true about Carcinoid tumor?",
        options: [
          "Always benign",
          "Kulchitsky cell tumor",
          "Present with paroxysmal hypertension",
          "Punch biopsy is diagnostic",
        ],
        answer: 1, // Correct answer: Kulchitsky cell tumor
      },
      {
        // 162
        question: "Carcinoid tumor is seen most commonly in?",
        options: ["Ileum", "Rectum", "Appendix", "Duodenum"],
        answer: 0, // Correct answer: Appendix
      },
      {
        // 163
        question: "What is incorrect about peritonitis?",
        options: [
          "Most common cause is P.U.D.",
          "Bile causes more damage than blood in peritoneum",
          "X-ray abdomen shows Gas under diaphragm",
          "Absence of free gas rules out peritonitis",
        ],
        answer: 3, // Correct answer: Absence of free gas rules out peritonitis
      },
      {
        // 164
        question:
          "Which is the most common organism seen in gastrointestinal perforation peritonitis?",
        options: [
          "Staph aureus",
          "Pneumococcus",
          "Anaerobic streptococcus",
          "Coagulase-negative staphylococci",
        ],
        answer: 2, // Correct answer: Anaerobic streptococcus
      },
      {
        // 165
        question: "Non-intestinal peritonitis in females is caused by:",
        options: ["E. coli", "Klebsiella", "Chlamydia", "Bacteroides"],
        answer: 2, // Correct answer: Chlamydia
      },
      {
        // 166
        question: "Which is the most common tumor of retro-peritoneum?",
        options: ["Stroma", "Sarcoma", "Teratoma", "Retro-teratoma"],
        answer: 1, // Correct answer: Sarcoma
      },
      {
        // 167
        question:
          "What is the most common presentation of retroperitoneal tumor?",
        options: [
          "Abdominal pain",
          "Hydronephrosis",
          "Constipation",
          "Abdominal lump",
        ],
        answer: 3, // Correct answer: Abdominal pain
      },
      {
        // 168
        question: "Adult patient developing intussusception is due to?",
        options: [
          "Carcinoid tumor",
          "Mesenteric insufficiency",
          "Villous adenoma",
          "Bariatric surgery",
        ],
        answer: 2, // Correct answer: Villous adenoma
      },
      {
        // 169
        question:
          "All are true about intestinal obstruction radiographically; EXCEPT?",
        options: [
          "Supine abdominal film is done",
          "More than 2 air fluid levels",
          "Small intestine dilation >3 cm",
          "Pneumatosis intestinalis",
        ],
        answer: 3, // Correct answer: Pneumatosis intestinalis
      },
      {
        // 170
        question: "Best treatment protocol of an enterogenic cyst?",
        options: [
          "Enucleation",
          "Resection with intestine part",
          "Aspiration with marsupialization",
          "Observe",
        ],
        answer: 1, // Correct answer: Enucleation
      },
      {
        // 171
        question:
          "On removing whole colon (total colectomy) what will be the most common complication?",
        options: [
          "Anastomotic leak",
          "Dyselectrolytemia",
          "Death",
          "Fulminant sepsis",
        ],
        answer: 0, // Correct answer: Dyselectrolytemia
      },
      {
        // 172
        question: "Which of the following is NOT seen in pyloric stenosis?",
        options: [
          "Projectile vomiting",
          "Paradoxical aciduria",
          "Bilious vomiting",
          "Metabolic acidosis",
        ],
        answer: 2, // Correct answer: Bilious vomiting
      },
      {
        // 173
        question: "Congenital pyloric stenosis presents with?",
        options: [
          "Hypokalemic metabolic acidosis",
          "Hypokalemic metabolic alkalosis",
          "Hyperkalemic metabolic acidosis",
          "Hyperkalemic metabolic alkalosis",
        ],
        answer: 1, // Correct answer: Hypokalemic metabolic alkalosis
      },
      {
        // 174
        question:
          "In Hypertrophic pyloric stenosis, which of the following is seen?",
        options: [
          "Metabolic acidosis",
          "Metabolic alkalosis",
          "Metabolic alkalosis with paradoxical bicarbonaturia",
          "All of the above",
        ],
        answer: 1, // Correct answer: All of the above
      },
      {
        // 175
        question:
          "Which of the following polyp is least likely to turn malignant?",
        options: [
          "Inflammatory polyp",
          "Familial adenomatous polyposis",
          "Hamartomatous polyp",
          "Hyperplastic polyp",
        ],
        answer: 3, // Correct answer: Hyperplastic polyp
      },
      {
        // 176
        question: "All are surgical indications in Crohn's disease; EXCEPT:",
        options: [
          "Colonic obstruction",
          "Refractory fistula",
          "Massive hemorrhage",
          "Toxic megacolon",
        ],
        answer: 3, // Correct answer: Toxic megacolon
      },
      {
        // 177
        question:
          "A child is passing blood with act of defecation. The probable diagnosis is?",
        options: [
          "Juvenile rectal polyp",
          "Adenomatous polyposis",
          "Rectal ulcer",
        ],
        answer: 0, // Correct answer: Juvenile rectal polyp
      },
      {
        // 178
        question: "Earliest complication of ileostomy is:",
        options: ["Obstruction", "Necrosis", "Diarrhea", "Post Surgery"],
        answer: 1, // Correct answer: Necrosis
      },
      {
        // 179
        question:
          "Post resection of terminal ileum, deficiency of which of the following vitamins is seen along with Steatorrhea?",
        options: ["B₁₂", "B₉", "C", "B₆"],
        answer: 0, // Correct answer: B₁₂
      },
      {
        // 180
        question: "Denver shunt is used in:",
        options: ["Ascites", "Dialysis", "Raised ICP", "Headache"],
        answer: 0, // Correct answer: Raised ICP
      },
      {
        // 181
        question: "ROME criteria is for?",
        options: [
          "IBS",
          "Colonic cancer",
          "Ulcerative colitis",
          "Colonic hemangioma",
        ],
        answer: 0, // Correct answer: IBS
      },
      {
        // 182
        question: "What is the cause of chronic tropical pancreatitis?",
        options: [
          "Parasitic infection",
          "Malnutrition",
          "Idiopathic",
          "Genetic",
        ],
        answer: 1, // Correct answer: Malnutrition
      },
      {
        // 183
        question: "Severity of pancreatitis can be best assessed by:",
        options: [
          "Serial Serum amylase",
          "Stool trypsin levels",
          "RANSON Score",
          "ARDS development",
        ],
        answer: 2, // Correct answer: RANSON Score
      },
      {
        // 184
        question: "Which is not included in APACHE score?",
        options: [
          "Serum bilirubin",
          "GCS score",
          "pH of blood",
          "Age of patient",
        ],
        answer: 0, // Correct answer: Serum bilirubin
      },
      {
        // 185
        question: "What is the most common complication after ERCP?",
        options: [
          "Acute pancreatitis",
          "Pseudopancreatic cyst",
          "Chronic pancreatitis",
          "Necrotizing pancreatitis",
        ],
        answer: 0, // Correct answer: Acute pancreatitis
      },
      {
        // 186
        question: "Lisch nodule is seen in:",
        options: [
          "Neurofibromatosis",
          "Multiple endocrine neoplasia 2A",
          "Turcot syndrome",
          "Familial adenomatous polyposis",
        ],
        answer: 0, // Correct answer: Neurofibromatosis
      },
      {
        // 187
        question: "In case of annular pancreas, what is the surgery of choice?",
        options: [
          "Duodeno-duodenostomy",
          "Duodenojejunostomy",
          "Pancreato-jejunostomy",
          "Porto-enterostomy",
        ],
        answer: 0, // Correct answer: Duodeno-duodenostomy
      },
      {
        // 188
        question: "Not an early post-operative complication of splenectomy is:",
        options: [
          "Thrombocytosis",
          "Splenosis",
          "Sub diaphragmatic abscess",
          "Pulmonary complications",
        ],
        answer: 1, // Correct answer: Sub diaphragmatic abscess
      },
      {
        // 189
        question: "Which of the following is a side effect of vagotomy?",
        options: [
          "Delayed gastric emptying",
          "Gastric atony",
          "Diarrhea",
          "All of these",
        ],
        answer: 3, // Correct answer: All of these
      },
      {
        // 190
        question: "Pseudo obstruction of intestine is also known as:",
        options: [
          "Hartmann's syndrome",
          "Ozili's syndrome",
          "Ogilvie's syndrome",
          "Mirizzi syndrome",
        ],
        answer: 2, // Correct answer: Ogilvie's syndrome
      },
      {
        // 191
        question: "What is the most common site of gastric ulcer?",
        options: [
          "Duodenal cap",
          "Lesser curvature",
          "Second part of duodenum",
          "Greater curvature",
        ],
        answer: 1, // Correct answer: Lesser curvature
      },
      {
        // 192
        question:
          "Posterior perforation of ulcer in Antral canal will lead to fluid deposition in:",
        options: [
          "Greater Omentum",
          "Right Sub-phrenic abscess",
          "Sub-hepatic space",
          "Lesser sac",
        ],
        answer: 3, // Correct answer: Lesser sac
      },
      {
        // 193
        question: "Purtscher's Retinopathy is due to:",
        options: [
          "Acute pancreatitis",
          "Chronic pancreatitis",
          "Meckel's diverticulum",
          "Diverticulitis",
        ],
        answer: 0, // Correct answer: Acute pancreatitis
      },
      {
        // 194
        question: "What is the etiology of type-A gastritis?",
        options: [
          "Hypersensitivity reaction I",
          "Autoimmune",
          "Bacterial",
          "Viral",
        ],
        answer: 1, // Correct answer: Autoimmune
      },
      {
        // 195
        question: "What is the most common location of lymphoma in the GIT?",
        options: ["Stomach", "Ileum", "Mesentery", "Colon"],
        answer: 0, // Correct answer: Stomach
      },
      {
        // 196
        question: "Sister Mary Joseph nodule is commonly seen with:",
        options: ["Ovarian CA", "Colon CA", "Pancreatic CA", "Stomach CA"],
        answer: 3, // Correct answer: Stomach CA
      },
      {
        // 197
        question: "Krukenburg tumor originates from:",
        options: ["Liver", "Stomach", "Ovary", "Gallbladder"],
        answer: 1, // Correct answer: Ovary
      },
      {
        // 198
        question: "Angiodysplasia is seen in:",
        options: [
          "Stomach of adult",
          "Jejunum of a child",
          "Left side of the colon",
          "Right side of the colon",
        ],
        answer: 3, // Correct answer: Right side of the colon
      },
      {
        // 199
        question: "Which of the following is not a type of mesenteric cyst?",
        options: [
          "Mesothelial",
          "Enterogenous",
          "Chylolymphatic",
          "Epidermoid",
        ],
        answer: 3, // Correct answer: Epidermoid
      },
      {
        // 200
        question: "What is the most common type of mesenteric cyst?",
        options: [
          "Simple (mesothelial cyst)",
          "Chylolymphatic cyst",
          "Enterogenous",
          "Dermoid",
        ],
        answer: 1, // Correct answer: Simple (mesothelial cyst)
      },
    ],
    "Set-5": [
      //ques-compleated, img
      {
        // 201
        question: "Immunoproliferative lymphoma presents with:",
        options: [
          "a. Obstruction",
          "b. Peritonitis",
          "c. Chronic diarrhea",
          "d. Tenesmus",
        ],
        answer: 2, // Correct answer: a. Obstruction
      },
      {
        // 202
        question:
          "Which of the following is used for initial management of rectal prolapse in children?",
        options: [
          "a. Digital positioning",
          "b. Transanal surgery",
          "c. Injection sclerotherapy",
          "d. Resection rectopexy",
        ],
        answer: 0, // Correct answer: a. Digital positioning
      },
      {
        // 203
        question: "Which is not a cause of acute anal pain?",
        options: [
          "a. Thrombosed hemorrhoids",
          "b. Acute anal fissure",
          "c. Fistula in ano",
          "d. Perianal abscess",
        ],
        answer: 2, // Correct answer: c. Fistula in ano
      },
      {
        // 204
        question: "Which of the following is seen in case of fistula in ano?",
        options: [
          "a. Purulent discharge with bleeding",
          "b. Serous discharge with bleeding",
          "c. Painful bleeding with constipation",
          "d. Painless bleeding with constipation",
        ],
        answer: 0, // Correct answer: a. Purulent discharge with bleeding
      },
      {
        // 205
        question:
          "Goodall's rule in fistula in ano is used for distinguishing:",
        options: [
          "a. High and low fistula",
          "b. Anterior and posterior fistula",
          "c. External and internal fistula",
          "d. Lateral and medial fistula",
        ],
        answer: 2, // Correct answer: a. High and low fistula
      },
      {
        // 206
        question: "Which is the most common cancer of anus?",
        options: [
          "a. Adenocarcinoma",
          "b. Squamous cell CA",
          "c. Melanoma",
          "d. Basaloid",
        ],
        answer: 1, // Correct answer: b. Squamous cell CA
      },
      {
        // 207
        question: "Which is the most common cancer of anus?",
        options: [
          "a. Squamous",
          "b. Basaloid",
          "c. Cuboidal",
          "d. Cloacogenic",
        ],
        answer: 0, // Correct answer: b. Basaloid
      },
      {
        // 208
        question: "Anal cancer is associated with:",
        options: [
          "a. Human papillomavirus virus",
          "b. EBV",
          "c. HTLV-1",
          "d. Polyoma virus",
        ],
        answer: 0, // Correct answer: a. Human papillomavirus virus
      },
      {
        // 209
        question:
          "What is the most common site of metastases of carcinoma rectum?",
        options: ["a. Lung", "b. Liver", "c. Brain", "d. Vertebra"],
        answer: 1, // Correct answer: b. Liver
      },
      {
        // 210
        question:
          "The following image shows:<br><img src='images/s210.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Rectal prolapse",
          "b. Fistula in ano",
          "c. Perianal abscess",
          "d. Rectal cancer",
        ],
        answer: 0, // Correct answer: a. Rectal prolapse
      },
      {
        // 211
        question: "MC complication after hemorrhoidectomy:",
        options: [
          "a. Prolapse",
          "b. Urine retention",
          "c. Fecal incontinence",
          "d. Bleeding",
        ],
        answer: 1, // Correct answer: d. Bleeding
      },
      {
        // 212
        question: "What is incorrect about anal canal?",
        options: [
          "a. 1/3rd above dentate line and 2/3rd below the dentate line",
          "b. Extraperitoneal",
          "c. Anoderm is painful",
          "d. Keratinization",
        ],
        answer: 0, // Correct answer: b. Extraperitoneal
      },
      {
        // 213
        question: "What is true about Ischiorectal fossa boundaries?",
        options: [
          "a. Anterior border is formed by inferior fascia of urogenital diaphragm",
          "b. Superior border is formed by Gluteus Maximus",
          "c. Lateral border is formed by Levator Ani",
          "d. Posterior border is formed by obturator internus muscle",
        ],
        answer: 0, // Correct answer: a. Anterior border is formed by inferior fascia of urogenital diaphragm
      },
      {
        // 214
        question:
          "What is the diagnosis?<br><img src='images/s214.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Perforation by Ascariasis",
          "b. Volvulus by Ascariasis",
          "c. Ascending cholangitis by Ascariasis",
          "d. Solitary ascariasis in the bowel",
        ],
        answer: 3, // Correct answer: a. Perforation by Ascariasis
      },
      {
        // 215
        question:
          "A 30-year-old lady presents with a mobile breast lump which she describes as breast mouse. Most likely diagnosis?",
        options: [
          "a. Phyllodes tumor",
          "b. Fibroadenoma",
          "c. Invasive ductal carcinoma",
          "d. Breast abscess",
        ],
        answer: 1, // Correct answer: a. Phyllodes tumor
      },
      {
        // 216
        question:
          "A female presented with pain and redness of the right breast. She is lactating for the last 3 months. On examination, the local temperature is raised and cracked nipple is noted. Ultrasound of breast was suggestive of significant liquid collection. What will be the treatment in this lady?",
        options: [
          "a. Antibiotics",
          "b. Multiple needle aspiration",
          "c. Incision and drainage",
          "d. Breast support",
        ],
        answer: 2, // Correct answer: b. Multiple needle aspiration
      },
      {
        // 217
        question:
          "A lady presented with a breast lump in the lower outer quadrant of the breast which was histologically confirmed as invasive breast cancer of no special type. Which of the following has better prognosis?",
        options: [
          "a. Mucinous breast cancer",
          "b. Overexpression of Her-2 neu gene",
          "c. High mitotic index",
          "d. Axillary lymph node involvement",
        ],
        answer: 0, // Correct answer: a. Mucinous breast cancer
      },
      {
        // 218
        question:
          "Which of the following breast cancers has the best prognosis?",
        options: [
          "a. Triple negative breast cancer",
          "b. Luminal A",
          "c. Her-2 neu",
          "d. Luminal B",
        ],
        answer: 1, // Correct answer: b. Luminal A
      },
      {
        // 219
        question:
          "A 25-year-old female presented with a history of painful, red, fluctuating 2 cm mass in the right breast after 3 days of delivery. On ultrasound, collection was present. Which of the following is the most appropriate management?",
        options: [
          "a. Antibiotics and follow-up for 3 days",
          "b. Hot fermentation",
          "c. Express the milk every three hours",
          "d. Incision and drainage",
        ],
        answer: 3, // Correct answer: d. Incision and drainage
      },
      {
        // 220
        question:
          "A 32-year-old female presented to OPD with a single, asymptomatic mobile lump in the right breast, noticed during routine breast self-examination. The lump was patient deemed to be benign. What advice will you give to the patient?",
        options: [
          "a. Observation + regular follow-up",
          "b. Excise + histology",
          "c. Biopsy",
          "d. Give danazol",
        ],
        answer: 0, // Correct answer: a. Observation + regular follow-up
      },
      {
        // 221
        question:
          "In the pathological examination of breast cancer, what can be the likely diagnosis?",
        options: [
          "a. Ductal carcinoma in situ",
          "b. Lobular carcinoma",
          "c. Invasive ductal carcinoma NOS",
          "d. Phyllodes tumor",
        ],
        answer: 0, // Correct answer: a. Ductal carcinoma in situ
      },
      {
        // 222
        question:
          "A 30-year-old patient presented to OPD with a right-sided breast lump. On examination, it was hard and irregular in shape but mobile over the chest wall. What is the most probable diagnosis?<br><img src='images/s222.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Breast abscess",
          "b. Breast cancer",
          "c. Phyllodes tumor",
          "d. Fibroadenoma",
        ],
        answer: 2, // Correct answer: b. Breast cancer
      },
      {
        // 223
        question:
          "After breast cancer surgery, the patient developed following abnormality. Which of the following is the possible reason?<br><img src='images/s223.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Injury to long thoracic nerve",
          "b. Paralysis of latissimus dorsi muscle",
          "c. Paralysis of deltoid muscle",
          "d. Paralysis of suprascapular nerve",
        ],
        answer: 0, // Correct answer: a. Injury to long thoracic nerve
      },
      {
        // 224
        question:
          "In a patient with solitary thyroid swelling, what is the investigation the surgeon should advise before thyroid surgery?",
        options: ["a. TFT", "b. FNAC", "c. Ultrasound", "d. Biopsy"],
        answer: 0, // Correct answer: b. FNAC
      },
      {
        // 225
        question:
          "A lactating female presented with complaints of pain in the right breast. On examination, the affected breast was engorged. Baby refused to feed from the affected breast. What is the preferred treatment option?",
        options: [
          "a. Antibiotics only",
          "b. NSAIDs",
          "c. Warm compresses",
          "d. Incision and drainage with antibiotics",
        ],
        answer: 3, // Correct answer: d. Incision and drainage with antibiotics
      },
      {
        // 226
        question: "Which patient has better prognosis in breast cancer?",
        options: [
          "a. Luminal A",
          "b. Luminal B",
          "c. Triple negative",
          "d. Her-2 neu positive",
        ],
        answer: 0, // Correct answer: a. Luminal A
      },
      {
        // 227
        question:
          "Dye Sentinel Lymph node biopsy is injected in which of the following sites?",
        options: ["a. Axilla", "b. Tail of spence", "c. Areola", "d. Nipple"],
        answer: 2, // Correct answer: a. Axilla
      },
      {
        // 228
        question: "Correct description about Paget's disease of breast?",
        options: [
          "a. Eczema of skin of nipple",
          "b. Eczema of skin of areola",
          "c. Mastitis carcinomatosa",
          "d. Atrophic scirrhous carcinoma",
        ],
        answer: 0, // Correct answer: a. Eczema of skin of nipple
      },
      {
        // 229
        question: "MC benign breast tumor?",
        options: [
          "a. Fibroadenoma",
          "b. Fibroadenosis",
          "c. DCIS",
          "d. Phyllodes tumor",
        ],
        answer: 0, // Correct answer: a. Fibroadenoma
      },
      {
        // 230
        question: "Breast triple assessment contains all, EXCEPT?",
        options: [
          "a. Clinical examination",
          "b. Auxiliary sampling",
          "c. USG",
          "d. FNAC and biopsy",
        ],
        answer: 1, // Correct answer: b. Auxiliary sampling
      },
      {
        // 231
        question:
          "Which of the following is not an indication for Fibroadenoma surgery?",
        options: [
          "a. Patient's decision",
          "b. Size more than 5 cm",
          "c. Complex type",
          "d. Recurrence",
        ],
        answer: 0, // Correct answer: a. Patient's decision
      },
      {
        // 232
        question:
          "In a breast lump of 4 cm no nodal metastasis is present. Which is the stage of breast cancer?",
        options: ["a. Stage I", "b. Stage II", "c. Stage III", "d. Stage IV"],
        answer: 1, // Correct answer: b. Stage II
      },
      {
        // 233
        question: "Peau d'orange appearance in breast cancer is seen with?",
        options: ["a. T4A", "b. T4B", "c. T4C", "d. T4D"],
        answer: 1, // Correct answer: b. T4B
      },
      {
        // 234
        question: "Breast cancer more than 5 cm is defined as stage?",
        options: ["a. T1", "b. T2", "c. T3", "d. T4"],
        answer: 2, // Correct answer: d. T4
      },
      {
        // 235
        question:
          "What is the diagnosis of a 30-year-old woman with breast lump on examination of breast?<br><img src='images/s235.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "a. Fibroadenoma",
          "b. Breast cancer",
          "c. Fibroadenosis",
          "d. Brodie's Serocystic disease",
        ],
        answer: 1, // Correct answer: b. Breast cancer
      },
      {
        // 236
        question: "Which is the most common quadrant for carcinoma Breast?",
        options: [
          " Lower outer",
          " Lower inner",
          " Upper outer",
          " Upper inner",
        ],
        answer: 2, // Correct answer: a. Lower outer
      },
      {
        // 237
        question: "Which is the most common Familial Breast cancer gene?",
        options: ["BRCA1", "BRCA2", "Li-Fraumeni syndrome", "STK11"],
        answer: 0, // Correct answer: a. BRCA1
      },
      {
        // 238
        question: "Skin of nipple and areola drains to which lymph node?",
        options: [
          " Anterior axillary",
          " Supra-clavicular",
          " Central",
          " Infra-clavicular",
        ],
        answer: 0, // Correct answer: b. Supra-clavicular
      },
      {
        // 239
        question:
          "A 25-year-old female presents with a breast lump and green discharge from inverted nipples. What is the differential diagnosis?",
        options: [
          " Duct ectasia",
          " Mastitis",
          " Carcinoma",
          " Paget's disease",
        ],
        answer: 0, // Correct answer: a. Duct ectasia
      },
      {
        // 240
        question:
          "Young female with painless, mobile lump of 4 cm in breast. What is the diagnosis?",
        options: [
          " Breast abscess",
          " Mastitis",
          " Fibroadenoma",
          " Peau d'orange",
        ],
        answer: 2, // Correct answer: c. Fibroadenoma
      },
      {
        // 241
        question: "Which breast cancer involves both breasts?",
        options: [
          " Lobular carcinoma",
          " Mucoid carcinoma",
          " Ductal carcinoma",
          " Ductal carcinoma in situ",
        ],
        answer: 0, // Correct answer: a. Lobular carcinoma
      },
      {
        // 242
        question:
          "A biopsy of the opposite breast is considered in which of the following types of breast carcinoma?",
        options: [
          " Comedo carcinoma",
          " Medullary carcinoma",
          " Mucinous carcinoma",
          " Lobular carcinoma",
        ],
        answer: 3, // Correct answer: c. Mucinous carcinoma
      },
      {
        // 243
        question:
          "What is correct regarding Peau d'orange in breast carcinoma?",
        options: [
          " Infiltration of Cooper's ligament with cancer cells",
          " Infiltration of skin of breast with cancer cells",
          " Associated with lobular carcinoma of breast",
          " Good prognosis",
        ],
        answer: 0, // Correct answer: d. Good prognosis
      },
      {
        // 244
        question:
          "Tissue diagnosis of breast lump in a pregnant lady is made by:",
        options: [" FNAC", " Core cut biopsy", " Mammography", " MRI"],
        answer: 1, // Correct answer: a. FNAC
      },
      {
        // 245
        question:
          "Which is the next investigation to be done for a painful lump in a lactating woman?",
        options: [" Mammography", " USG", " MRI", " FNAC"],
        answer: 1, // Correct answer: b. USG
      },
      {
        // 246
        question: "All are true about Paget's disease of breast, EXCEPT?",
        options: [
          " It is often bilateral",
          " Crusting of areola skin",
          " Lumpectomy is performed usually",
          " Paget cells are positive for HER2/neu",
        ],
        answer: 0, // Correct answer: c. Lumpectomy is performed usually
      },
      {
        // 247
        question:
          "In breast conservative surgery, the healthy margin excised is typically?",
        options: ["a. 1 cm", "b. 2 cm", "c. 3 cm", "d. 4 cm"],
        answer: 0, // Correct answer: b. 2 cm
      },
      {
        // 248
        question:
          "A 35-year-old female came to your clinic with a lump as shown in the image. What will be the initial screening method?<br><img src='images/s248.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["a. USG", "b. MRI", "c. Mammogram", "d. FNAC"],
        answer: 0, // Correct answer: a. USG
      },
      {
        // 249
        question: "Breast cancer is called stage 4 when there is?",
        options: [
          "a. Involvement of chest wall",
          "b. Satellite lesion",
          "c. Ulceration of surface skin",
          "d. Spreads to adrenal gland",
        ],
        answer: 3, // Correct answer: d. Spreads to adrenal gland
      },
      {
        // 250
        question: "As per AJCC breast cancer staging, T4 is:",
        options: [
          "a. Distant metastasis",
          "b. Satellite lesions",
          "c. Spread to contralateral axillary lymph nodes",
          "d. Sentimental lymph node involvement",
        ],
        answer: 1, // Correct answer: b. Satellite lesions
      },
    ],
    "Set-6": [
      //ques-compleated, img
      {
        //251
        question:
          "Which is the most important prognostic factor for carcinoma breast?",
        options: [
          "HER2/Neu",
          "Histology grade",
          "Tumor staging",
          "Tumor growth rate",
        ],
        answer: 2,
      },
      {
        //252
        question:
          "What is the probable diagnosis?<br><img src='images/s252.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Mastitis",
          "Mondor disease",
          "Cystosarcoma phyllodes",
          "Paget disease",
        ],
        answer: 0,
      },
      {
        //253
        question: "Sentinel node biopsy is done for all, EXCEPT?",
        options: [
          "Colon carcinoma",
          "Ocular cancer",
          "Breast cancer",
          "Malignant melanoma",
        ],
        answer: 1,
      },
      {
        //254
        question:
          "Stage of 3 cm breast cancer involving 4 axillary lymph nodes is?",
        options: ["Stage I", "Stage II", "Stage III", "Stage IV"],
        answer: 2,
      },
      {
        //255
        question:
          "A 28-year-old female presents with infiltrating breast carcinoma with 1 cm hard lump, T1-N0-M0. What is the best treatment?",
        options: [
          "Radical mastectomy",
          "Simple mastectomy",
          "Extended radical mastectomy",
          "Super radical mastectomy",
        ],
        answer: 1,
      },
      {
        //256
        question:
          "A 65-year-old male presented with weakness, lethargy, excessive cold intolerance and slow ankle reflex. TSH = 16 mU/L (normal: 0.4-4.0 mU/L) and T4 = 0.3 ng/dL (normal: 0.6-1.6 ng/dL) and T3 = 70 pg/dL (normal: 230-619 pg/dL). What would be the most appropriate management?",
        options: [
          "Start levothyroxine at 100 microgram and decrease the dose gradually",
          "Start levothyroxine at 25 microgram and increase the dose gradually",
          "Start levothyroxine at 25 microgram and decrease dose gradually",
          "Give Liothyronine and T4 drug simultaneously",
        ],
        answer: 1,
      },
      {
        //257
        question:
          "A 23-year-old male presented with profuse sweating and headache. What investigation should be done in this case?",
        options: [
          "24 hours urinary metanephrines",
          "24 hours urinary 5-HIAA",
          "24 hours urinary HVA",
          "24 hours urinary chromogranin A",
        ],
        answer: 0,
      },
      {
        // 258
        question:
          "A patient presented with the presence of a thyroid swelling and weight loss. The physician found presence of cervical adenopathy. Total thyroidectomy with radical neck dissection was performed. Histopathology of the resected specimen is shown below. Which is the most likely diagnosis?<br><img src='images/s258.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          " Papillary carcinoma thyroid",
          " Follicular carcinoma thyroid",
          " Medullary carcinoma thyroid",
          " Anaplastic carcinoma thyroid",
        ],
        answer: 0, // Correct answer: a. Papillary carcinoma thyroid
      },
      {
        // 259
        question:
          "A 35-year-old woman presented with complaints of palpitations and weight loss on examination, sinus tachycardia is present and the following lesion was noticed in the skin of the patient. What is the clinical diagnosis?<br><img src='images/s259.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          " Hypothyroidism",
          " Hyperthyroidism",
          " Filariasis",
          " Milroy's disease",
        ],
        answer: 1, // Correct answer: b. Hyperthyroidism
      },
      {
        // 260
        question:
          "A 27-year-old woman presents with 26 weeks of gestation with thyroid lesion which is found to be papillary carcinoma of thyroid. Which is the best treatment for patient?",
        options: [
          " Thyroid ablation using radioactive Iodine",
          " Total thyroidectomy",
          " Observation",
          " Hemi-thyroidectomy",
        ],
        answer: 1, // Correct answer: b. Total thyroidectomy
      },
      {
        // 261
        question: "Sebaceous cyst is not seen in?",
        options: [" Back", " Soles", " Scalp", " Scrotum"],
        answer: 1, // Correct answer: b. Soles
      },
      {
        // 262
        question:
          "Patient complains of painless swelling over the face with difficulty in swallowing. The appearance of face is shown. The probable diagnosis is:<br><img src='images/s262.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          " Acute parotitis",
          " Cancer of parotid gland",
          " Angioedema of face",
          " Acute Sialadenitis",
        ],
        answer: 1, // Correct answer: b. Cancer of parotid gland
      },
      {
        // 263
        question:
          "A 35-year-old lady has presented with a 6-month painless fluctuant, non-transilluminant swelling with a thin watery discharge. Clinical diagnosis is:<br><img src='images/s263.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          " Hypothyroidism",
          " Hyperthyroidism",
          " TB",
          " Milroy's disease",
        ],
        answer: "a", // Correct answer: a. Hypothyroidism
      },
      {
        // 264
        question: "Lid lag sign is also known as:",
        options: [
          " Stellwag's sign",
          " Von Graefe's sign",
          " Dalrymple sign",
          " Mobius sign",
        ],
        answer: "1", // Correct answer: b. Von Graefe's sign
      },
      {
        // 265
        question:
          "Which is the most common malignancy of the endocrine system?",
        options: [
          " Thyroid cancer",
          " Pancreatic cancer",
          " Pituitary adenoma",
          " Adrenal malignancy",
        ],
        answer: 0, // Correct answer: a. Thyroid cancer
      },
      // 266
      {
        question:
          "Which of the following is the most useful investigation for thyroid function?",
        options: ["TSH", "T3", "T4", "Thyroglobulin"],
        answer: 0,
      },
      // 267
      {
        question: "Papillary carcinoma of thyroid is spread via?",
        options: ["Lymphatic", "Hematogenous", "Local spread", "All of these"],
        answer: 0,
      },
      // 268
      {
        question: "Which iodine isotope is used for thyroid ablation?",
        options: ["Iodine 131", "Iodine 123", "Iodine 213", "Iodine 132"],
        answer: 0,
      },
      // 269
      {
        question:
          "Which is the most common nerve to be damaged in thyroid surgery?",
        options: [
          "Recurrent laryngeal nerve",
          "Inferior laryngeal nerve",
          "External branch of superior laryngeal nerve",
          "Internal branch of superior laryngeal nerve",
        ],
        answer: 0,
      },
      // 270
      {
        question:
          "Which is the tumor marker for medullary carcinoma of thyroid?",
        options: ["Albumin", "TSH", "Thyroglobulin", "Calcitonin"],
        answer: 3,
      },
      // 271
      {
        question: "Which cancer arises from C-cells of thyroid?",
        options: ["Follicular", "Anaplastic", "Papillary", "Medullary"],
        answer: 3,
      },
      // 272
      {
        question: "Which thyroid cancer is associated with radiation exposure?",
        options: [
          "Medullary",
          "Papillary",
          "Follicular",
          "Anaplastic carcinoma",
        ],
        answer: 1,
      },
      // 273
      {
        question: "Which thyroid tumor has the best prognosis?",
        options: ["Papillary", "Follicular", "Anaplastic", "Medullary"],
        answer: 0,
      },
      // 274
      {
        question:
          "A male patient with euthyroid state presents with the following condition. What is the diagnosis?<br><img src='images/s274.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Thyroglossal cyst",
          "Multiple nodular goiter",
          "Solitary thyroid nodule",
          "Toxic nodular goiter",
        ],
        answer: 1, // Please provide the answer if known
      },
      {
        //275
        question:
          "FNAC can diagnose all of the following thyroid lesions, EXCEPT:",
        options: [
          "Anaplastic carcinoma",
          "Papillary carcinoma",
          "Follicular carcinoma",
          "Medullary carcinoma",
        ],
        answer: 2,
      },

      {
        //276
        question:
          "Which of the following is not a landmark of facial nerve during superficial parotidectomy?",
        options: [
          "Tragus",
          "Mastoid process",
          "Posterior belly of digastric muscle",
          "Zygomatic bone",
        ],
        answer: 3,
      },
      {
        //277
        question: "Which is the most common parotid gland tumor?",
        options: [
          "Warthin's tumor",
          "Mucoepidermoid carcinoma",
          "Pleomorphic adenoma",
          "Adenoid cystic carcinoma",
        ],
        answer: 2,
      },
      {
        //278
        question: "Nerve invasion is seen in which type of parotid carcinoma?",
        options: [
          "Muco-epidermoid carcinoma",
          "Adenoid cystic carcinoma",
          "Malignant mixed tumors",
          "Acinic cell carcinoma",
        ],
        answer: 1,
      },
      {
        //279
        question: "Warthin's tumor is tumor of which gland?",
        options: [
          "Parotid gland",
          "Submandibular gland",
          "Lingual gland",
          "Minor salivary glands",
        ],
        answer: 0,
      },
      {
        //280
        question:
          "Most commonly salivary gland fistula starts from which gland?",
        options: [
          "Parotid gland",
          "Salivary gland",
          "Submandibular glands",
          "Sublingual glands",
        ],
        answer: 0, // Correct answer: Parotid gland // Question 280
      },
      {
        //281
        question: "Salivary gland stone is formed most commonly in:",
        options: [
          "Submandibular gland",
          "Mandibular gland",
          "Sublingual gland",
          "Parotid gland",
        ],
        answer: 0,
      },
      {
        //282
        question: "What is the surgery of choice for pleomorphic adenoma?",
        options: [
          "Superficial parotidectomy",
          "Total parotidectomy",
          "Radical parotidectomy",
          "Radiotherapy",
        ],
        answer: 0,
      },
      {
        //283
        question:
          "A 14-year-old boy presented to the OPD. His scrotum was empty on the left side. On clinical examination, the left testis was found in the superficial inguinal pouch. What is the most likely diagnosis?",
        options: [
          "Cryptorchidism",
          "Left undescended testis",
          "Left ectopic testis",
          "Retractile testis",
        ],
        answer: 2,
      },
      {
        //284
        question:
          "A 25-year-old male presented with vague dragging sensation in the scrotum. On clinical examination, a bag of worm feel was noted in the scrotum on the left side. However, the left testis was normal. What can be the likely diagnosis?",
        options: [
          "Left hydrocele",
          "Inguinal hernia",
          "Epididymoorchitis",
          "Left varicocele",
        ],
        answer: 3,
      },
      {
        //285
        question: "What is the pathological grading used for prostate cancer?",
        options: [
          "Bloom Richardson",
          "Gleason's",
          "Fuhrman nuclear grading",
          "Ranson Score",
        ],
        answer: 1,
      },
      {
        //286
        question:
          " Which of the following isotope is used in the treatment of prostate cancer?",
        options: ["I-131", "I-125", "I-123", "I-121"],
        answer: 1, // Correct answer: I-125 // Question 286
      },
      {
        //287
        question:
          " A patient presented with herniation of intestine loop which passes along the spermatic cord and reaches till the cremaster muscle. What is the type of hernia?",
        options: [
          "Femoral hernia",
          "Indirect inguinal hernia",
          "Direct inguinal hernia",
          "Obturator hernia",
        ],
        answer: 1,
      },

      {
        //288
        question:
          "A 5-month-old baby was brought to the hospital with bilateral undescended testis. What is the most appropriate treatment?",
        options: [
          "Immediate orchidopexy",
          "Wait and watch for spontaneous resolution",
          "GnRH for one month and if no descent then surgical treatment",
          "Wait for 2 years",
        ],
        answer: 2,
      },

      {
        //289
        question:
          "A 40-year-old male patient presented with testicular swelling and one mass over supraclavicular area and one over the umbilical region. What is the diagnosis? (Most Recent Question Dec. 2021)",
        options: [
          "Testicular tumor",
          "Testicular torsion",
          "Spermatocele",
          "Acute epididymo-orchitis",
        ],
        answer: 0,
      },

      {
        //290
        question:
          "A 30-year-old male patient presented with scrotal enlargement. On work-up, LDH was significantly raised with normal alpha-feto protein and hCG. Histopathology is shown below. What is the most likely diagnosis? <br><img src='images/s290.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["Teratoma", "Seminoma", "Choriocarcinoma", "Yolk sac tumor"],
        answer: 1,
      },

      {
        //291
        question: "Three testicle appearance is seen in:",
        options: [
          "Acute epididymo-orchitis",
          "Vaginal hydrocele",
          "Spermatocele",
          "Testicular torsion",
        ],
        answer: 2,
      },
      // 292
      {
        question:
          "A 50-year-old patient felt heaviness in the left scrotum. He suspected he had developed cancer, so he came to the emergency department. There was no pain or tenderness. Transillumination test was negative. What is the most likely diagnosis?",
        options: [
          "Acute epididymo-orchitis",
          "Vaginal hydrocele",
          "Varicocele",
          "Testicular torsion",
        ],
        answer: 2,
      },
      // 293
      {
        question:
          "Which of the following viruses is responsible for causing Orchitis?",
        options: ["Adeno virus", "Herpes virus", "Polio virus", "Mumps virus"],
        answer: 3,
      },
      // 294
      {
        question:
          "An elderly male is having metastasis in the lumbar vertebra and pelvic bone. What is the most likely diagnosis in this patient?",
        options: [
          "Testicular cancer",
          "Lung cancer",
          "Colon cancer",
          "Prostate cancer",
        ],
        answer: 3,
      },
      // 295
      {
        question:
          "In a newborn baby with empty scrotum, testis was found to be lying close to the peritoneum. Which of the following may help in the testis reaching into the scrotum?",
        options: [
          "GnRH analogues",
          "Testosterone",
          "Cold compresses",
          "Manually bring the testis down to the bottom of the scrotum",
        ],
        answer: 0,
      },
      // 296
      {
        question: "Deep inguinal ring is a defect in:",
        options: [
          "External oblique muscle aponeurosis",
          "Transversus abdominis muscle aponeurosis",
          "Internal oblique muscle aponeurosis",
          "Fascia transversalis",
        ],
        answer: 3,
      },
      // 297
      {
        question:
          "A boy in the gym lifted the equipment and suddenly felt pain in the groin. He came to the hospital. On examination, swelling was felt in the left inguinal canal. What should be the next step?",
        options: [
          "NSAIDs and send the patient home",
          "Immediate exploration",
          "FNAC and USG",
          "Coconut bandage to hold the swelling up",
        ],
        answer: 0,
      },
      // 298
      {
        question:
          "A patient with irreducible groin hernia was brought to the emergency. What should be the next step?",
        options: [
          "Exploratory laparotomy",
          "Attempt Reduction followed by elective surgery",
          "Attempt Reduction in emergency surgery",
          "Attempt reduction under local anesthesia",
        ],
        answer: 1,
      },
      // 299
      {
        question:
          "In a newborn male baby, the mother found an empty scrotum. On examination, the left testis is in the inguinal region and the right testis is in the perineum. Which of the following is correct? (Most Recent Question Aug 2020)",
        options: [
          "Right testis is undescended and left testis is ectopic",
          "Left testis is undescended and right testis is ectopic",
          "Both testes are undescended",
          "Both testes are ectopic",
        ],
        answer: 1,
      },
      // 300
      {
        question:
          "Identify the abnormal condition given below.<br><img src='images/s300.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Testicular torsion",
          "Hydrocele",
          "Varicocele",
          "Testicular atrophy",
        ],
        answer: 0,
      },
    ],
    "Set-7": [
      //ques-compleated
      {
        // 301
        question: "Bell Clapper testis predisposes to?",
        options: [
          "Torsion testis",
          "Varicocele",
          "Cancer of testis",
          "Hydrocele",
        ],
        answer: 0, // Correct answer: Torsion testis
      },
      {
        // 302
        question:
          "In NYHUS classification, which of these is called Type 3A hernia?",
        options: ["Femoral", "Direct", "Indirect", "Pantaloons"],
        answer: 1, // Correct answer: Direct
      },
      {
        // 303
        question:
          "A 40-year-old patient was being operated for direct hernia. During surgery, two sacs were seen. The diagnosis is?",
        options: [
          "Pantaloons hernia",
          "Richter hernia",
          "Spigelian hernia",
          "Littre hernia",
        ],
        answer: 0, // Correct answer: Pantaloons hernia
      },
      {
        // 304
        question:
          "A 30-year-old obese male patient presents with complete inguinal hernia and on examination doughy consistency is felt with dull note on percussion. This suggests that the contents of the hernia sac contain:",
        options: [
          "Omentum",
          "Large intestine",
          "Small intestine",
          "Encysted ascitic fluid",
        ],
        answer: 0, // Correct answer: Omentum
      },
      {
        // 305
        question: "Deep inguinal ring is a defect in aponeurosis of:",
        options: [
          "External oblique muscle of abdomen",
          "Internal oblique muscle of abdomen",
          "Transverse abdominis muscle",
          "Transversalis fascia",
        ],
        answer: 3, // Correct answer: Transversalis fascia
      },
      {
        // 306
        question:
          "A 3-year-old child presents with red scrotal swelling which shows self-resolution by next day morning and is maximum in the evening with positive transillumination test. What is the diagnosis?",
        options: [
          "Scrotal abscess",
          "Congenital hydrocele",
          "Secondary abscess",
          "Infantile hydrocele",
        ],
        answer: 1, // Correct answer: Congenital hydrocele
      },
      {
        // 307
        question: "Hydrocele in a child is managed by:",
        options: [
          "Herniotomy",
          "Plication of sac",
          "Eversion of sac",
          "Inversion of sac",
        ],
        answer: 0, // Correct answer: Herniotomy
      },
      {
        // 308
        question: "What is not true about hernia in children?",
        options: [
          "Conservative management if patient is asymptomatic",
          "Hernia treatment is done with herniotomy",
          "Absorbable mesh is not used",
          "Long-standing hernia decreases chances of incarceration",
        ],
        answer: 0, // Correct answer: Long-standing hernia decreases chances of incarceration
      },
      {
        // 309
        question: "The content of Littre's hernia is?",
        options: [
          "Omentum",
          "Bladder",
          "Meckel's diverticulum",
          "Part of circumference of intestine",
        ],
        answer: 2, // Correct answer: Meckel's diverticulum
      },
      {
        // 310
        question:
          "A 15-year-old male presents with pain in inguinal and lower abdomen. On examination, tenderness over non-reducible swelling with negative cough impulse is noted. What is the diagnosis?",
        options: [
          "Strangulated hernia",
          "Testicular torsion",
          "Scrotal abscess",
          "Femoral hernia",
        ],
        answer: 0, // Correct answer: Strangulated hernia
      },
      {
        // 311
        question: "Femoral hernia presents:",
        options: [
          "Below and lateral to pubic tubercle",
          "Above and medial to pubic tubercle",
          "Below and medial to pubic tubercle",
          "Above and lateral to pubic tubercle",
        ],
        answer: 2, // Correct answer: Below and medial to pubic tubercle
      },
      {
        // 312
        question: "All are true about femoral hernia; EXCEPT?",
        options: [
          "Common in nulliparous women",
          "Lockwood infra-inguinal approach is used",
          "Cough impulse is present",
          "Higher incidence of strangulation than inguinal hernia",
        ],
        answer: 2, // Correct answer: Cough impulse is present
      },
      {
        // 313
        question: "Which hernia has the highest rate of strangulation?",
        options: [
          "Direct inguinal hernia",
          "Indirect inguinal hernia",
          "Femoral hernia",
          "Incisional hernia",
        ],
        answer: 2, // Correct answer: Femoral hernia
      },
      {
        // 314
        question: "Which of the following hernia presents as emergency?",
        options: [
          "Direct inguinal hernia",
          "Indirect inguinal hernia",
          "Femoral hernia",
          "Incisional hernia",
        ],
        answer: 2, // Correct answer: Femoral hernia
      },
      {
        // 315
        question: "Double sac hernia is known as:",
        options: [
          "Richter hernia",
          "Cooper's hernia",
          "Littre's hernia",
          "Spigelian hernia",
        ],
        answer: 1, // Correct answer: Cooper's hernia
      },
      {
        // 316
        question:
          "A patient has direct inguinal hernia. On operation, intraoperative indirect inguinal hernia is seen. What is the diagnosis?",
        options: [
          "Maydl's hernia",
          "Velpeau hernia",
          "Petit hernia",
          "Saddle bag hernia",
        ],
        answer: 3, // Correct answer: Saddle bag hernia
      },
      {
        // 317
        question:
          "Meckel's diverticulum forms wall in case of which of hernia?",
        options: [
          "Ritcher's hernia",
          "Spigelian hernia",
          "Cooper's hernia",
          "Littre's hernia",
        ],
        answer: 3, // Correct answer: Littre's hernia
      },
      {
        // 318
        question: "Spigelian hernia is:",
        options: [
          "Hernia through petit triangle",
          "Hernia passing through obturator canal",
          "Hernia through linea alba",
          "Hernia at level of arcuate line",
        ],
        answer: 3, // Correct answer: Hernia at level of arcuate line
      },
      {
        // 319
        question: "What is the location of Bochdalek hernia?",
        options: [
          "Posterolateral",
          "Anteroposterior",
          "Anterolateral",
          "Posteromedial",
        ],
        answer: 0, // Correct answer: Posterolateral
      },
      {
        // 320
        question:
          "A 25-year-old male presents with fever and red, swollen scrotum. Upon examination, the testis is felt separate from the epididymis because of marked swelling in the epididymis. What is the diagnosis?",
        options: [
          "Testicular torsion",
          "Epididymo-orchitis",
          "Fournier's gangrene",
          "Testicular cancer",
        ],
        answer: 1, // Correct answer: Epididymo-orchitis
      },
      {
        // 321
        question:
          "A 14-year-old child is having problems with urination for the last 3 months. You have introduced a contrast dye from the urethra to visualize and understand the problem. Name this investigation most likely?<br><img src='images/s321.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Micturating cystourethrogram",
          "Retrograde urethrogram",
          "Antegrade pyelography",
          "Retrograde pyelography",
        ],
        answer: 1, // Correct answer: Retrograde urethrogram
      },
      {
        // 322
        question:
          "Which of the following pathology will have irregular margins of the urinary bladder with the organism found around the ureteric orifice?",
        options: [
          "Tuberculosis",
          "Schistosomiasis",
          "Transitional cell bladder carcinoma",
          "Papilloma urinary bladder",
        ],
        answer: 0, // Correct answer: Schistosomiasis
      },
      {
        // 323
        question:
          "The internal opening in the fistula in Ano usually begins from:",
        options: [
          "Mucocutaneous junction",
          "Crypt at dentate line",
          "Anal verge",
          "Anorectal junction",
        ],
        answer: 1, // Correct answer: Crypt at dentate line
      },
      {
        // 324
        question:
          "A 47-year-old man presented with a renal mass on the lower pole of the right kidney with 7 x 5 x 3 cm size. What is the preferred treatment option?",
        options: [
          "Partial nephrectomy",
          "Total radical nephrectomy",
          "ESWL",
          "Radiotherapy",
        ],
        answer: 1, // Correct answer: Partial nephrectomy
      },
      {
        // 325
        question:
          "Which of the following is the most common type of renal stone?",
        options: [
          "Triple phosphate",
          "Uric acid",
          "Cysteine",
          "Calcium oxalate",
        ],
        answer: 3, // Correct answer: Calcium oxalate
      },
      {
        // 326
        question: "Whitaker test is done in:",
        options: [
          "Posterior urethral valves",
          "Hydronephrosis to compare abdominal and urinary bladder pressure",
          "Ureterocele",
          "Benign prostatic hyperplasia",
        ],
        answer: 1, // Correct answer: Hydronephrosis to compare abdominal and urinary bladder pressure
      },
      {
        // 327
        question:
          "A patient was operated for benign prostatic hyperplasia. On evaluation, carcinoma prostate was detected. On further work up, the patient was found to have metastasis. Which of the following drug should be used for the management?",
        options: ["Cisplatin", "Leuprolide", "Adriamycin", "BCG"],
        answer: 1, // Correct answer: Leuprolide
      },
      {
        // 328
        question:
          "A 35-year-old woman was brought to the hospital with a history of continuous dribbling of urine with normal voiding pattern. What is the most likely cause?",
        options: [
          "Posterior urethral valve",
          "Ureteric opening distal to external urinary sphincter",
          "Urinary tract infection",
          "Vesicoureteric reflux",
        ],
        answer: 1, // Correct answer: Ureteric opening distal to external urinary sphincter
      },
      {
        // 329
        question:
          "A 54-year-old multiparous female presents with leakage of urine while coughing or laughing. This is called:",
        options: [
          "Vesicovaginal fistula",
          "Urethrovaginal fistula",
          "Urge incontinence",
          "Stress incontinence",
        ],
        answer: 3, // Correct answer: Stress incontinence
      },
      {
        // 330
        question:
          "An 80-year-old male presented with a ballotable mass in the left flank region. On examination, painless hematuria is documented on urine microscopy. Most likely cause in this patient:",
        options: [
          "Hydronephrosis",
          "Pyelonephritis",
          "Renal cell carcinoma",
          "Polycystic kidney disease",
        ],
        answer: 2, // Correct answer: Renal cell carcinoma
      },
      {
        // 331
        question:
          "What is the diagnosis on the basis of the image given below?<br><img src='images/s331.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Ectopic ureter",
          "Ureterocele",
          "Duplication",
          "Bifid ureter",
        ],
        answer: 1, // Correct answer: Ureterocele
      },
      {
        // 332
        question:
          "A patient of RTA with pelvic fracture was brought to the emergency. On evaluation, the proximal membranous urethra was found to be injured. What is the immediate management?",
        options: [
          "Suprapubic cystostomy",
          "Laparotomy",
          "Foleys catheterization",
          "Emergency repair",
        ],
        answer: 0, // Correct answer: Suprapubic cystostomy
      },
      {
        // 333
        question:
          "What is the diagnosis on the basis of the image given below?<br><img src='images/s333.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Prostatic stone",
          "Bladder stone",
          "Schistosomiasis",
          "Ureteric stone",
        ],
        answer: 1, // Correct answer: Bladder stone
      },
      {
        // 334
        question:
          "A patient presented to OPD with complaints of severe pain during erection and abnormal curvature of the penis for the last 6 months. What is the most probable diagnosis?",
        options: [
          "Peyronie's disease",
          "Paraphimosis",
          "Balanoposthitis",
          "Priapism",
        ],
        answer: 0, // Correct answer: Peyronie's disease
      },
      {
        // 335
        question:
          "A young guy comes to your OPD with the complaint that he develops pain in the penis during erection and cannot have sex. Which is the likely diagnosis?",
        options: [
          "Paraphimosis",
          "Phimosis",
          "Hypospadias",
          "Peyronie's disease",
        ],
        answer: 3, // Correct answer: Paraphimosis
      },
      {
        // 336
        question:
          "A patient presents with complaints of palpitations. On examination, her heart rate is 110/min and BP 140/100 mm Hg. She tells you that her mother has recently expired due to Renal cell cancer. Which investigation would you perform to manage this case?",
        options: [
          "Serum hydroxy indole acetic acid levels",
          "Serum hydroxy-tryptamine levels",
          "24 hours urinary V.M.A levels",
          "24 hours urinary fractionated metanephrines",
        ],
        answer: 3, // Correct answer: 24 hours urinary fractionated metanephrines
      },
      {
        // 337
        question: "Which of the following is false related to renal stones?",
        options: [
          "Most common type of stone is triple phosphate",
          "Stone can be removed via ureter",
          "Most of the renal stones can be removed by ESWL",
          "Stones <5 mm can be managed conservatively",
        ],
        answer: 0, // Correct answer: Most common type of stone is triple phosphate
      },
      {
        // 338
        question: "What is the diagnosis based on the given image of IVP?<br><img src='images/s338.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Ureterocele",
          "Ectopic ureteric orifice",
          "PUJ obstruction",
          "Posterior urethral valve",
        ],
        answer: 0, // Correct answer: Ureterocele
      },
      {
        // 339
        question:
          "After alcohol consumption, patient went to the bathroom, slipped, and developed pain in the suprapubic region. On examination, abdominal distention was present without suprapubic bulge. Heart rate and blood pressure were normal. What is the most probable diagnosis?",
        options: [
          "Membranous urethral injury",
          "Acute urinary retention",
          "Intraperitoneal bladder rupture",
          "Extraperitoneal bladder rupture",
        ],
        answer: 3, // Correct answer: Extraperitoneal bladder rupture
      },
      {
        // 340
        question:
          "A 60-year-old patient presented with excruciating low backache not responding to painkillers. His PSA levels are 100 ng/ml, and MRI spine shows lesions at L5-S1. DRE shows an asymmetrically enlarged, stony hard prostate. Which of the following drugs is indicated for treatment?",
        options: ["Somatostatin", "Goserelin", "Terlipressin", "Testosterone"],
        answer: 1, // Correct answer: Goserelin
      },
      {
        // 341
        question:
          "A male infant with urinary retention was found to have bilateral hydronephrosis and a history of recurrent urinary tract infections. What is the most probable diagnosis?",
        options: [
          "PUJ obstruction",
          "Posterior urethral valves",
          "Horseshoe kidney",
          "Retrocaval ureter",
        ],
        answer: 1, // Correct answer: Posterior urethral valves
      },
      {
        // 342
        question:
          "A 62-year-old female underwent PCNL for kidney stone and returns with chills and fever after 2 days. What is the most likely complication?",
        options: [
          "Bacterial sepsis",
          "Acute pancreatitis",
          "Splenic injury",
          "Ureteric stricture",
        ],
        answer: 0, // Correct answer: Bacterial sepsis
      },
      {
        // 343
        question:
          "Prostatic cancer is mostly seen in which part of the prostate gland?",
        options: ["Posterior", "Lateral", "Medial", "Anterior"],
        answer: 0, // Correct answer: Posterior
      },
      {
        // 344
        question:
          "In kidney transplantation donar organ will be placed at which site ?<br><img src='images/s344.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Left Kidney fossa",
          "Right Iliac fossa",
          "Retroperitoneal space",
          "Retropubic space",
        ],
        answer: 1, // Correct answer: Right Iliac fossa
      },
      {
        // 345
        question:
          "A 40-year-old man is suffering from heaviness in the scrotum. A bag of worms feel is observed on scrotal examination and the swelling is seen to reduce in the supine position. What is the best treatment?",
        options: [
          "Suction drainage",
          "Varicocelectomy",
          "Jaboulay procedure",
          "Herniotomy",
        ],
        answer: 1, // Correct answer: Varicocelectomy
      },
      {
        // 346
        question:
          "Which of these is the best for management of a 3cm stone in the renal pelvis without evidence of hydronephrosis?",
        options: [
          "ESWL",
          "PCNL",
          "Antegrade pyeloplasty",
          "Retrograde pyeloplasty",
        ],
        answer: 1, // Correct answer: ESWL
      },
      {
        // 347
        question: "Germ cell tumor not seen in males:",
        options: [
          "Choriocarcinoma",
          "Seminoma",
          "Sertoli cell tumor",
          "Teratoma",
        ],
        answer: 2, // Correct answer: Sertoli cell tumor
      },
      {
        // 348
        question: "Cutoff for diagnosis of Priapism is? ",
        options: ["1 hour", "2 hours", "3 hours", "4 hours"],
        answer: 2, // Correct answer: 3 hours
      },
      {
        // 349
        question:
          "A person could not pass urine after suffering from pelvic fracture. On examination, vitals are stable but the bladder is not palpable. What is the probable diagnosis?",
        options: [
          "Membranous urethra rupture",
          "Bulbar urethra rupture",
          "Recto-urethral injury",
          "Intraperitoneal rupture of bladder",
        ],
        answer: 0, // Correct answer: Membranous urethra rupture
      },
      {
        // 350
        question:
          "The kidney stone whose development is insensitive to pH of urine is:",
        options: [
          "Calcium oxalate",
          "Triple phosphate",
          "Uric acid",
          "Cystine",
        ],
        answer: 0, // Correct answer: Cystine
      },
    ],
    "Set-8": [
      //ques-compleated answer matched
      {
        // 351
        question:
          "A 60-year-old smoker male patient presents with painless gross hematuria for 1 day. IVU shows a 1.2 cm filling defect at the lower pole of the infundibulum. Which is the next best investigation to be done?",
        options: ["Cystoscopy", "Urine cytology", "USG abdomen", "DMSA scan"],
        answer: 0, // Correct answer: Cystoscopy
      },
      {
        // 352
        question:
          "A 70-year-old man after TURP for BPH develops seizures in the postoperative state. What is the diagnosis?",
        options: [
          "Water intoxication",
          "Anesthetic over-dosage",
          "Mismatched blood transfusion",
          "Malignant hyperthermia",
        ],
        answer: 0, // Correct answer: Water intoxication
      },
      {
        // 353
        question: "What does the following image show?",
        options: [
          "Misplaced Cu-T 380Ag",
          "Fecolith",
          "Ureterocele",
          "Appendicolith",
        ],
        answer: 2, // Correct answer: Misplaced Cu-T 380Ag
      },
      {
        // 354
        question:
          "What is the best treatment for metastatic advanced prostate carcinoma?",
        options: [
          "T.U.R.P",
          "Androgen ablation",
          "Chemotherapy",
          "Radical prostatectomy",
        ],
        answer: 1, // Correct answer: Androgen ablation
      },
      {
        // 355
        question: "Seminoma spreads by?",
        options: [
          "Hematogenous route",
          "Direct route",
          "Lymphatics",
          "Directly by spermatic cord",
        ],
        answer: 2, // Correct answer: Lymphatics
      },
      {
        // 356
        question:
          "In a person if testis cancer is suspected, which test is to be done first?",
        options: ["Scrotal USG", "MRI", "FNAC", "PET/CT"],
        answer: 0, // Correct answer: Scrotal USG
      },
      {
        // 357
        question:
          "A 28-year-old patient from Bihar presents with on and off pain in the right scrotum and then gradual onset swelling develops over the duration of 2 years. The transillumination test is positive. The top of the testis can be reached. The probable diagnosis is?",
        options: [
          "Right hydrocele",
          "Right inguinal hernia",
          "Right epididymal cyst",
          "Right encysted hydrocele of cord",
        ],
        answer: 0, // Correct answer: Right encysted hydrocele of cord
      },
      {
        // 358
        question:
          "A 50-year-old patient complains of pain and swelling in the right side of the scrotum for two days. He tells that this swelling has been gradually increasing in size with a dragging sensation for 2 years. On examination, there is a large inguinoscrotal irreducible swelling with extreme tenderness and redness. What is the probable diagnosis?<br><img src='images/s353.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Right hydrocele",
          "Right strangulated inguinal hernia",
          "Right testicular torsion",
          "Right pyocele",
        ],
        answer: 2, // Correct answer: Right strangulated inguinal hernia
      },
      {
        // 359
        question:
          "A young boy of 18 years of age presents with pain in the groin for 2 days. On examination, the testis seems high and the cremasteric reflex is absent. Elevation of the testis worsens the pain. What is the probable diagnosis?",
        options: [
          "Right testicular torsion",
          "Right strangulated hernia",
          "Right inguinal hernia",
          "Right epididymo-orchitis",
        ],
        answer: 0, // Correct answer: Right testicular torsion
      },
      {
        // 360
        question: "Which is the most common type of renal stone?",
        options: [
          "Calcium oxalate",
          "Triple phosphate",
          "Struvite stone",
          "Urate stone",
        ],
        answer: 0, // Correct answer: Calcium oxalate
      },
      {
        // 361
        question: "Which renal stone is radiolucent?",
        options: [
          "Uric acid",
          "Calcium oxalate",
          "Triple phosphate",
          "Calcium phosphate",
        ],
        answer: 0, // Correct answer: Uric acid
      },
      {
        // 362
        question: "Stag horn calculi associated with proteus infection are:",
        options: [
          "Uric acid stones",
          "Triple phosphate stones",
          "Calcium oxalate stones",
          "Cystine stones",
        ],
        answer: 1, // Correct answer: Triple phosphate stones
      },
      {
        // 363
        question: "Alkaline urine is seen in:",
        options: [
          "Uric acid stone",
          "Oxalate stone",
          "Triple phosphate stone",
          "Cystine stone",
        ],
        answer: 2, // Correct answer: Triple phosphate stone
      },
      {
        // 364
        question: "What is the cause of urinary retention?",
        options: [
          "Vaginal fibroid",
          "Cervical fibroid",
          "Uterine fibroid",
          "Subserosal fibroid",
        ],
        answer: 1, // Correct answer: Uterine fibroid
      },
      {
        // 365
        question:
          "What is the most useful investigation for calculus in ureteric colic?",
        options: ["CECT", "NCCT", "USG", "X-ray"],
        answer: 1, // Correct answer: NCCT
      },
      {
        // 366
        question: "Transitional cell carcinoma is seen in",
        options: ["Prepuce", "Testis", "Prostate", "Urinary bladder"],
        answer: 3, // Correct answer: Urinary bladder
      },
      {
        // 367
        question: "Which is the most common tumor of the urinary bladder?",
        options: [
          "Squamous cell cancer",
          "Carcinosarcoma",
          "Transitional cell cancer",
          "Clear cell cancer",
        ],
        answer: 2, // Correct answer: Transitional cell cancer
      },
      {
        // 368
        question:
          "What is the most common clinical presentation of bladder cancer?",
        options: [
          "Painful urinary stasis",
          "Painless urinary stasis",
          "Painful hematuria",
          "Painless hematuria",
        ],
        answer: 3, // Correct answer: Painless hematuria
      },
      {
        // 369
        question:
          "What is the most common clinical subtype of transitional cell carcinoma of the bladder?",
        options: [
          "Local Metastatic",
          "Distant metastasis",
          "Superficial",
          "Deep",
        ],
        answer: 2, // Correct answer: Superficial
      },
      {
        // 370
        question:
          "All are true about transitional cell cancer of the urinary tract; EXCEPT:",
        options: [
          "Bladder is a frequent site",
          "Most common risk factor is smoking",
          "Females and males are equally affected",
          "Vitamin A is effective against bladder CA",
        ],
        answer: 2, // Correct answer: Females and males are equally affected
      },
      {
        // 371
        question:
          "Rupture of the urethra above the deep perineal pouch causes urine retention in which region?",
        options: [
          "Medial aspect of thigh",
          "Scrotum",
          "True pelvis only",
          "Anterior abdominal wall",
        ],
        answer: 2, // Correct answer: Anterior abdominal wall
      },
      {
        // 372
        question:
          "Which amongst the following is the most common cause of UTP?",
        options: [
          "Instrumentation",
          "Urethral diverticulum",
          "Bladder stones",
          "Pregnancy",
        ],
        answer: 0, // Correct answer: Instrumentation
      },
      {
        // 373
        question: "Spider leg sign on IVP suggests?",
        options: [
          "Renal stone",
          "Polycystic kidney",
          "Hypernephroma",
          "Hydronephrosis",
        ],
        answer: 1, // Correct answer: Polycystic kidney
      },
      {
        // 374
        question: "Adder head appearance on IVP is seen in",
        options: [
          "Ureteral duplication",
          "Ureterocele",
          "Ureteric hypoplasia",
          "Polycystic kidneys",
        ],
        answer: 1, // Correct answer: Ureterocele
      },
      {
        // 375
        question: "Reinke's crystals are seen in?",
        options: [
          "Leydig cells",
          "Sertoli cells",
          "Curschmann spirals",
          "Creola bodies",
        ],
        answer: 0, // Correct answer: Leydig cells
      },
      {
        // 376
        question: "Which is the most common testicular tumor?",
        options: ["Seminoma", "Teratoma", "Sertoli cell tumor", "Chorio-CA"],
        answer: 0, // Correct answer: Seminoma
      },
      {
        // 377
        question:
          "Which is the first lymph node involved in lymph node metastasis in testicular tumor?",
        options: [
          "Inguinal",
          "Para aortic",
          "External iliac",
          "Internal iliac",
        ],
        answer: 1, // Correct answer: Para aortic
      },
      {
        // 378
        question: "Which is the most specific marker for prostate cancer?",
        options: ["P.S.A", "P.A.P", "Transrectal USG", "N.S.E"],
        answer: 0, // Correct answer: P.S.A
      },
      {
        // 379
        question: "What is incorrect about PSA?",
        options: [
          "Liquefaction of seminal coagulum",
          "Produced by both normal cells and malignancy",
          "Increased with prostatitis",
          "Persists in blood even after prostatectomy",
        ],
        answer: 3, // Correct answer: Persists in blood even after prostatectomy
      },
      {
        // 380
        question:
          "A 70-year-old man with prostate cancer was given radiotherapy. The recurrence of the cancer is monitored biochemically by",
        options: [
          "Androgens levels",
          "Prostate specific antigen and carcino-embryonic antigen",
          "Prostate specific antigen only",
          "ALP and CEA",
        ],
        answer: 2, // Correct answer: Prostate specific antigen only
      },
      {
        // 381
        question:
          "Three glass urine test with first glass specimen of urine showing threads is diagnostic of",
        options: ["Urethritis", "Prostatitis", "Cystitis", "Epididymitis"],
        answer: 1, // Correct answer: Prostatitis
      },
      {
        // 382
        question: "Prostate cancer spreads to the vertebral column via?",
        options: [
          "Bateson plexus",
          "Inferior hypogastric plexus",
          "Superior hypogastric plexus",
          "All of the above",
        ],
        answer: 0, // Correct answer: Bateson plexus
      },
      {
        // 383
        question: "What is the indication for Radical prostatectomy?",
        options: [
          "Localized prostate cancer, life expectancy < 10 years",
          "Localized prostate cancer, life expectancy > 10 years",
          "Locally advanced prostate cancer, life expectancy < 10 years",
          "Locally advanced disease with extension to lateral pelvic fascia",
        ],
        answer: 1, // Correct answer: Localized prostate cancer, life expectancy > 10 years
      },
      {
        // 384
        question: "Which of the following is correct about the image given<br><img src='images/s384.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Horse shoe kidney",
          "Undescended left kidney",
          "Congenital absent left kidney",
          "Papillary carcinoma",
        ],
        answer: 0, // Correct answer: Horse shoe kidney
      },
      {
        // 385
        question: "The given picture shows<br><img src='images/s385.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Renal cell cancer",
          "Hydronephrosis",
          "Polycystic kidneys",
          "Nephrolithiasis",
        ],
        answer: 0, // Correct answer: Hydronephrosis
      },
      {
        // 386
        question: "What does the given picture show?<br><img src='images/s385.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Foreign body",
          "Bladder stone",
          "Bladder diverticulum",
          "Fecolith",
        ],
        answer: 1, // Correct answer: Fecolith
      },
      {
        // 387
        question: "What is the probable diagnosis?<br><img src='images/s387.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["Chancroid", "Carcinoma penis", "Chancre", "Bowen disease"],
        answer: 1, // Correct answer: Carcinoma penis
      },
      {
        // 388
        question: "In carcinoma penis tumor staging, stage III involves:",
        options: [
          "Shaft of penis",
          "Inguinal lymph node metastasis operable",
          "Inguinal lymph node metastasis inoperable",
          "Confined to prepuce",
        ],
        answer: 1, // Correct answer: Inguinal lymph node metastasis inoperable
      },
      {
        // 389
        question:
          "A 5-year-old child pulls penis skin while urinating. Upon examination there is erythema and edema over the prepuce. What is the diagnosis?",
        options: [
          "Hypospadias",
          "Urethral Stone",
          "Posterior urethral valve",
          "Phimosis",
        ],
        answer: 3, // Correct answer: Phimosis
      },
      {
        // 390
        question: "Chordee is associated with:",
        options: [
          "Epispadias",
          "Hypospadias",
          "Phimosis",
          "Posterior urethral valve",
        ],
        answer: 1, // Correct answer: Hypospadias
      },
      {
        // 391
        question: "The treatment of balanitis xerotica obliterans (BXO) is",
        options: [
          "Chemotherapy",
          "Circumcision",
          "Radiotherapy",
          "Partial amputation of penis",
        ],
        answer: 1, // Correct answer: Circumcision
      },
      {
        // 392
        question:
          "Which is a major cause of death in renal transplant patients?",
        options: ["Uremia", "Malignancy", "Rejection", "Infection"],
        answer: 3, // Correct answer: Infection
      },
      {
        // 393
        question:
          "A 50-year-old patient who has undergone cholecystectomy a few days back presented with upper abdominal pain. MRCP was done which showed evidence of bile-leak from the cystic duct stump. The patient is hemodynamically stable. Which of the following should be done in the management of this patient?",
        options: [
          "CECT",
          "ERCP and stenting",
          "Exploratory laparotomy",
          "Conservative treatment with antibiotics",
        ],
        answer: 3, // Correct answer: ERCP and stenting
      },
      {
        // 394
        question: "Which of the following is a type III choledochal cyst?<br><img src='images/s394.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["A", "B", "C", "D"],
        answer: 2, // Correct answer: C
      },
      {
        // 395
        question:
          "A 30-year-old female was incidentally diagnosed with gall bladder polyp of 0.5 cm on ultrasound. Patient was asymptomatic. What is the next step in the management?",
        options: [
          "Laparoscopic cholecystectomy",
          "Open cholecystectomy",
          "CECT abdomen",
          "Reassure the patient and follow-up",
        ],
        answer: 3, // Correct answer: Reassure the patient and follow-up
      },
      {
        // 396
        question: "What do you expect in a patient after gallbladder removal?",
        options: [
          "Weight loss",
          "Steatorrhea",
          "Hypoglycemia",
          "High cholesterol",
        ],
        answer: 1, // Correct answer: Steatorrhea
      },
      {
        // 397
        question:
          "A patient underwent laparoscopic cholecystectomy for gallbladder stone. After operation, patient was sent home on the same day. Patient came back on another day with complaints of right upper quadrant pain. Liver function test was done and it was normal. WBC count was 13000/ Cu.mm. What is the most probable diagnosis?",
        options: [
          "Bile leak at site",
          "CBD stone",
          "Acute pancreatitis",
          "Right lobar pneumonia",
        ],
        answer: 0, // Correct answer: Bile leak at site
      },
      {
        // 398
        question:
          "A patient with chronic liver disease presents with history of hematemesis and melena. On endoscopy, esophageal varices were present. On the day of evaluation, repeat bleeding occurred and the patient died. What is the most likely cause of death?",
        options: [
          "Esophageal varices bleeding",
          "Hypovolemic shock",
          "Cardiogenic shock",
          "Neurogenic shock",
        ],
        answer: 1, // Correct answer: Hypovolemic shock
      },
      {
        // 399
        question:
          "A chronic liver disease patient presented to OPD with pain and tenderness all over the abdomen. Ascitic fluid examination revealed neutrophils 500/mm². What is the next best step?",
        options: [
          "IV ceftriaxone",
          "Large fluid paracentesis",
          "IV albumin plus midodrine",
          "IV octreotide",
        ],
        answer: 0, // Correct answer: IV ceftriaxone
      },
      {
        // 400
        question:
          "A patient presented with pain in the right hypochondrium. Blood investigations showed Serum bilirubin levels = 5mg% and ALP = 200mg%. What should be the initial investigation in this patient?",
        options: [
          "USG abdomen",
          "CECT abdomen",
          "Hepatitis A and Hepatitis E markers",
          "HIDA scan",
        ],
        answer: 0, // Correct answer: USG abdomen
      },
    ],
    "Set-9": [
      //ques-compleated, answer match
      {
        // 401
        question:
          "A pregnant woman underwent ultrasound during follow-up. The incidental finding is given in the image. What is the diagnosis?<br><img src='images/s401.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Simple hepatic cyst",
          "Multiple gallstones",
          "Amoebic liver abscess",
          "Renal stone",
        ],
        answer: 0, // Correct answer: Simple hepatic cyst
      },
      {
        // 402
        question:
          "Gallstone impinging on the cystic duct with dilatation of the common hepatic duct suggests the diagnosis of:",
        options: [
          "Mirizzi's syndrome",
          "Acute cholecystitis",
          "Cholesterolosis",
          "Porcelain gallbladder",
        ],
        answer: 0, // Correct answer: Mirizzi's syndrome
      },
      {
        // 403
        question:
          "A 45-year-old male patient presented with abdominal pain and hepatomegaly. Ultrasound image is given below. What is the most probable diagnosis?<br><img src='images/s403.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Hydatid cyst",
          "Amebic liver abscess",
          "Pyogenic liver abscess",
          "Simple hepatic cyst",
        ],
        answer: 0, // Correct answer: Hydatid cyst
      },
      {
        // 404
        question:
          "Which of the following is implicated in the development of angiosarcoma of the liver?",
        options: ["Copper", "Zinc", "Arsenic", "Iron"],
        answer: 2, // Correct answer: Arsenic
      },
      {
        // 405
        question:
          "The image of gallbladder specimen is given below. What is the most probable diagnosis?<br><img src='images/s405.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Carcinoma gallbladder",
          "Mixed gallbladder stone",
          "Gallbladder polyp",
          "Strawberry gallbladder",
        ],
        answer: 0, // Correct answer: Carcinoma gallbladder
      },
      {
        // 406
        question:
          "A 6-year-old child is brought with high fever with rigors for 5 days with pain in the right hypochondrium. On examination, the patient is anicteric and tenderness is noted in the right upper quadrant. What is the best investigation for this case?",
        options: ["USG", "Serology", "SGOT/LFT", "Contrast CT scan"],
        answer: 3, // Correct answer: USG
      },
      {
        // 407
        question: "AFP is a tumor marker for which of the following?",
        options: ["HCC", "RCC", "Oncocytoma", "Chordoma"],
        answer: 0, // Correct answer: HCC
      },
      {
        // 408
        question: "Comment on the image shown below.<br><img src='images/s408.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Percutaneous Transhepatic cholangiogram",
          "T tube cholangiogram",
          "E.R.C.P",
          "HIDA scan",
        ],
        answer: 2, // Correct answer: T tube cholangiogram
      },
      {
        // 409
        question:
          "Which of the following is correct about Zollinger Ellison syndrome?",
        options: [
          "Associated with MEN 1",
          "Most common site is stomach",
          "Best test for diagnosis is pentagastrin test",
          "Metastasis to adjacent gut",
        ],
        answer: 0, // Correct answer: Associated with MEN 1
      },
      {
        // 410
        question: "Which ligament is compressed in the Pringle maneuver?",
        options: [
          "Hepatoduodenal ligament",
          "Gastroduodenal ligament",
          "Gastrohepatic ligament",
          "Lienorenal ligament",
        ],
        answer: 0, // Correct answer: Hepatoduodenal ligament
      },
      {
        // 411
        question: "A patient comes with RUQ pain. The USG image shows?<br><img src='images/s411.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Cholelithiasis",
          "Cholecystitis",
          "Cholangiocarcinoma",
          "Porcelain Gallbladder",
        ],
        answer: 0, // Correct answer: Cholecystitis
      },
      {
        // 412
        question:
          "A 28-year-old man from Bihar develops right hypochondriac pain. USG shows 5 x 5 x 4 cm abscess in left lobe of liver. Hydatid serology is negative. What is the treatment?",
        options: [
          "Anti-Amoebic drugs",
          "Aspiration + Anti amoebic drugs",
          "Catheter drainage Anti amoebic drugs",
          "Percutaneous aspiration and infusion of scolicidal agents",
        ],
        answer: 1, // Correct answer: Percutaneous aspiration and infusion of scolicidal agents
      },
      {
        // 413
        question: "Aflatoxin leads to?",
        options: [
          "Liver cancer",
          "Hepatic adenoma",
          "Bladder cancer",
          "Retinoblastoma",
        ],
        answer: 0, // Correct answer: Liver cancer
      },
      {
        // 414
        question:
          "What is the ideal management of a hemodynamically unstable patient with suspected liver injury?",
        options: [
          "Inotropic support",
          "Exploratory Laparotomy",
          "Rapid transfusion of fresh blood",
          "Rapid infusion of iv crystalloids",
        ],
        answer: 2, // Correct answer: Exploratory Laparotomy
      },
      {
        // 415
        question:
          "A 40-year-old patient is having high grade fever associated with abdominal pain in right upper quadrant, with hepatomegaly and liver dullness on percussion. What is the clinical diagnosis?",
        options: [
          "Pyogenic liver abscess",
          "Amoebic liver abscess",
          "Hydatid cyst",
          "Neoplastic growth",
        ],
        answer: 1, // Correct answer: Pyogenic liver abscess
      },
      {
        // 416
        question: "Anchovy sauce pus is seen in:",
        options: [
          "Amoebic liver abscess",
          "Pyogenic liver abscess",
          "Hydatid cyst",
          "Cold abscess",
        ],
        answer: 0, // Correct answer: Amoebic liver abscess
      },
      {
        // 417
        question:
          "A patient has obstructive jaundice. USG can tell all of the following: EXCEPT?",
        options: [
          "Number of stones in CBD",
          "Peritoneal deposits",
          "Size of liver",
          "Extrahepatic versus intrahepatic causes",
        ],
        answer: 1, // Correct answer: Peritoneal deposits
      },
      {
        // 418
        question:
          "The organism associated with fish consumption which causes carcinoma gallbladder",
        options: [
          "Clonorchis sinensis",
          "Gnathostoma",
          "Strongyloides cantonensis",
          "H. diminuta",
        ],
        answer: 0, // Correct answer: Clonorchis sinensis
      },
      {
        // 419
        question:
          "A 30-year-old lady presents with fever and pain in right hypochondrium with presents breath catch up upon palpation. What is the clinical diagnosis?",
        options: [
          "Acute pancreatitis",
          "Acute cholecystitis",
          "Acute appendicitis",
          "Acute mediastinitis",
        ],
        answer: 1, // Correct answer: Acute cholecystitis
      },
      {
        // 420
        question: "Charcot triad is used for",
        options: [
          "Acute cholangitis",
          "Acute cholecystitis",
          "Cholelithiasis",
          "Gall bladder CA",
        ],
        answer: 0, // Correct answer: Acute cholangitis
      },
      {
        // 421
        question: "Murphy sign is seen in:",
        options: [
          "Acute appendicitis",
          "Acute cholecystitis",
          "Acute pancreatitis",
          "Acute cholangitis",
        ],
        answer: 1, // Correct answer: Acute cholecystitis
      },
      {
        // 422
        question:
          "Which of the following is Not associated with elevation of Right hemi-diaphragm:",
        options: [
          "Amebic abscess",
          "Pyogenic abscess",
          "Cholecystitis",
          "Sub diaphragmatic abscess",
        ],
        answer: 2, // Correct answer: Cholecystitis
      },
      {
        // 423
        question:
          "Liver biopsy is indicated for diagnosis/evaluation of all; EXCEPT?",
        options: [
          "Autoimmune hepatitis",
          "Storage disorders",
          "Hemangioma",
          "Hepatocellular carcinoma",
        ],
        answer: 2, // Correct answer: Hemangioma
      },
      {
        // 424
        question: "Which is the most common benign liver tumor?",
        options: [
          "Hemangioma",
          "Hepatocellular carcinoma",
          "Hepatoma",
          "Secondaries",
        ],
        answer: 0, // Correct answer: Hemangioma
      },
      {
        // 425
        question: "Pringle's maneuver is mainly used to control bleeding from",
        options: ["IVC", "Cystic artery", "Hepatic artery", "Hepatic vein"],
        answer: 2, // Correct answer: Hepatic artery
      },
      {
        // 426
        question: "What is the true color of cholesterol stone?",
        options: ["Black", "Dark yellow", "Brown", "Pale yellow"],
        answer: 3, // Correct answer: Pale yellow
      },
      {
        // 427
        question: "In Hemolytic anemia which stones are commonly seen?",
        options: [
          "Pigment stone",
          "Cholesterol stone",
          "Mixed stone",
          "All of these",
        ],
        answer: 0, // Correct answer: Pigment stone
      },
      {
        // 428
        question: "Aspirin protects against all; EXCEPT?",
        options: ["MI", "Stroke", "Colorectal cancer", "Liver cancer"],
        answer: 3, // Correct answer: Liver cancer
      },
      {
        // 429
        question:
          "What severity of head injury does Glasgow coma scale of 10 denote?",
        options: ["Mild", "Moderate", "Severe", "Moribund"],
        answer: 1, // Correct answer: Moderate
      },
      {
        // 430
        question:
          "Which of the following types of esophageal cancer is most likely to present with progressive difficulty swallowing and weight loss?",
        options: [
          "Adenocarcinoma",
          "Small cell carcinoma",
          "Transitional cell carcinoma",
          "Squamous cell carcinoma",
        ],
        answer: 3, // Correct answer: Squamous cell carcinoma
      },
      {
        // 431
        question:
          "Which of the following is the most appropriate treatment for the given condition?<br><img src='images/s431.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Sclerotherapy",
          "Incision and drainage",
          "Radiotherapy",
          "Surgical excision",
        ],
        answer: 3, // Correct answer: Incision and drainage
      },
      {
        // 432
        question:
          "In case of type 3 branchial fistula, the internal opening is located in which part of the pharynx?",
        options: [
          "Pyriform sinus",
          "Tonsillar fossa",
          "External auditory canal",
          "Cricopharyngeus muscle",
        ],
        answer: 0, // Correct answer: Pyriform sinus
      },
      {
        // 433
        question: "Cleft lip results from:",
        options: [
          "Failure of fusion of maxillary and median",
          "Failure of fusion of 2 palatine shelves",
          "Separation of the nasal septum and vomer from the palatine processes",
          "Anteroposterior orientation of muscles responsible for closure of velopharynx",
        ],
        answer: 0, // Correct answer: Failure of fusion of maxillary and median
      },
      {
        // 434
        question:
          "What is the preferred management of the given condition in the image?<br><img src='images/s434.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Surgical excision",
          "Intralesional steroids",
          "Chemotherapy",
          "Radiotherapy",
        ],
        answer: 0, // Correct answer: Surgical excision
      },
      {
        // 435
        question:
          "A player after head injury with ball, became unconscious and fell on the ground. All other teammates came to help him, suddenly he got up and started playing again. After some time, player suddenly fell on the ground. What is the type of injury?",
        options: [
          "Extradural hematoma",
          "Subdural hematoma",
          "Diffuse axonal injury",
          "Subarachnoid hemorrhage",
        ],
        answer: 0, // Correct answer: Extradural hematoma
      },
      {
        // 436
        question:
          "The image of patient after a lifesaving procedure is given. Identify the procedure?<br><img src='images/s436.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Nasotracheal intubation",
          "Needle cricothyrodotomy",
          "Endotracheal intubation",
          "Tracheostomy",
        ],
        answer: 3, // Correct answer: Needle cricothyrodotomy
      },
      {
        // 437
        question:
          "A patient presented with neck swelling with purulent discharge, whose image is given below. What is the diagnosis?",
        options: [
          "Cystic hygroma",
          "Collar stud abscess",
          "Brachial fistula",
          "Thyroglossal cyst",
        ],
        answer: 1, // Correct answer: Collar stud abscess
      },
      {
        // 438
        question:
          "A 65-year-old man patient presents with pulsatile swelling in the neck below the angle of jaw. It produces an outward expansile impulse. Which of the following is the most probable diagnosis?",
        options: [
          "Normal phenomenon",
          "Parapharyngeal abscess",
          "Carotid body tumor",
          "Cystic hygroma",
        ],
        answer: 2, // Correct answer: Carotid body tumor
      },
      {
        // 439
        question: "Which of the following statements is correct about ranula?",
        options: [
          "Mainly a retention cyst",
          "Characteristic Translucent",
          "Related to submandibular gland",
          "Diagnosed by FNAC",
        ],
        answer: 1, // Correct answer: Mainly a retention cyst
      },
      {
        // 440
        question: "All are premalignant conditions of the oral cavity, EXCEPT:",
        options: [
          "Chronic hyperplastic candidiasis",
          "Oral submucosal fibrosis",
          "Oral lichen planus",
          "Leukoplakia",
        ],
        answer: 2, // Correct answer: Chronic hyperplastic candidiasis
      },
      {
        // 441
        question: "Comment on the diagnosis of this 60-year-old man.<br><img src='images/s411.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Basal cell Cancer",
          "Plunging Ranula",
          "Epulis",
          "SCC of lip",
        ],
        answer: 3, // Correct answer: SCC of lip
      },
      {
        // 442
        question: "MC subtype of Rodent ulcer is?",
        options: [
          "Superficial spreading",
          "Acral lentiginous",
          "Nodulocystic",
          "Pigmented",
        ],
        answer: 2, // Correct answer: Superficial spreading
      },
      {
        // 443
        question:
          "Which among the following is the cause of submucosal fibrosis?",
        options: [
          "Alcohol",
          "Candidiasis",
          "Betel nut chewing",
          "Pan leaf chewing",
        ],
        answer: 2, // Correct answer: Betel nut chewing
      },
      {
        // 444
        question: "Which nerve is involved in thoracic outlet syndrome?",
        options: [
          "Pain and paraesthesia in axillary nerve distribution",
          "Pain and paraesthesia in median nerve distribution",
          "Pain and paraesthesia in radial nerve distribution",
          "Pain and paraesthesia in ulnar nerve distribution",
        ],
        answer: 3, // Correct answer: Pain and paraesthesia in median nerve distribution
      },
      {
        // 445
        question: "Pott puffy tumor is seen at:",
        options: [
          "Frontal bone",
          "Temporal bone",
          "Occipital bone",
          "Sphenoid bone",
        ],
        answer: 0, // Correct answer: Frontal bone
      },
      {
        // 446
        question: "Cranio-pharyngioma is a brain tumor arising from?",
        options: [
          "Rathke pouch",
          "Neurohypophysis",
          "Posterior pituitary",
          "Median eminence",
        ],
        answer: 0, // Correct answer: Rathke pouch
      },
      {
        // 447
        question:
          "A biker develops a head injury and non-contrast CT scan shows presence of Lentiform hemorrhage. What is the diagnosis?",
        options: [
          "Extradural bleeding",
          "Subdural bleeding",
          "Intraparenchymal bleeding",
          "Intraventricular bleeding",
        ],
        answer: 0, // Correct answer: Extradural bleeding
      },
      {
        // 448
        question: "Metastasis to neck lymph nodes is from?",
        options: [
          "Breast cancer",
          "Nasopharyngeal cancer",
          "Adrenal carcinoma",
          "Stomach cancer",
        ],
        answer: 1, // Correct answer: Nasopharyngeal cancer
      },
      {
        // 449
        question: "What is the most common malignant brain tumor?",
        options: [
          "Astrocytoma",
          "Glioblastoma multiform",
          "Oligodendroglioma",
          "Ependymoma",
        ],
        answer: 0, // Correct answer: Glioblastoma multiform
      },
      {
        // 450
        question: "Stereotactic radiotherapy is used for treatment of?",
        options: [
          "Brain tumor",
          "Lung carcinoma",
          "Cervical cancer",
          "Renal carcinoma",
        ],
        answer: 0, // Correct answer: Brain tumor
      },
    ],
    "Set-10": [//ques-compleated, answer -match
      {
        // 451
        question: "Which of the following tumors is cured by radiation?",
        options: ["Rhabdomyosarcoma", "Neuroblastoma", "Chloroma", "Seminoma"],
        answer: 3, // Correct answer: Seminoma
      },
      {
        // 452
        question:
          "Which is the most common secondary malignancy in retinoblastoma?",
        options: [
          "Ewing's sarcoma",
          "Osteosarcoma",
          "Chondrosarcoma",
          "Rhabdomyosarcoma",
        ],
        answer: 1, // Correct answer: Osteosarcoma
      },
      {
        // 453
        question: "All are seen in Trotters' triad; EXCEPT:",
        options: [
          "Unilateral conductive hearing loss",
          "Ipsilateral earache and facial pain",
          "Ipsilateral paralysis of the soft palate",
          "Seen with juvenile nasopharyngeal angiofibroma",
        ],
        answer: 3, // Correct answer: Seen with juvenile nasopharyngeal angiofibroma
      },
      {
        // 454
        question: "What is true about tongue cancer?",
        options: [
          "Most common type is adenocarcinoma",
          "Cervical lymph node metastasis is universally present",
          "MC site is on Lateral margin",
          "Slurring of speech is a common complaint",
        ],
        answer: 2, // Correct answer: MC site is on Lateral margin
      },
      {
        // 455
        question: "What is the most common site of tongue cancer?",
        options: [
          "Base of tongue",
          "Tip of tongue",
          "Lateral margin of tongue",
          "Posterior attachment of tongue",
        ],
        answer: 2, // Correct answer: Lateral margin of tongue
      },
      {
        // 456
        question: "What is your diagnosis?<br><img src='images/s456.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Cleft lip",
          "Cleft palate",
          "Cleft lip and palate",
          "Bifid uvula",
        ],
        answer: 2, // Correct answer: Cleft lip and palate
      },
      {
        // 457
        question: "Secretory sinus in neck, moving upon deglutination",
        options: [
          "Branchial sinus",
          "Pilonidal cyst",
          "Thyroglossal fistula",
          "Sublingual dermoid cyst",
        ],
        answer: 2, // Correct answer: Branchial sinus
      },
      {
        // 458
        question:
          "A newborn has a swelling in neck due to soft cystic mass with transillumination test positive. What is the diagnosis?",
        options: [
          "Potato tumor",
          "Branchial cyst",
          "Cystic hygroma",
          "Carotid body tumor",
        ],
        answer: 2, // Correct answer: Cystic hygroma
      },
      {
        // 459
        question:
          "All of the following are true regarding cystic hygroma; EXCEPT",
        options: [
          "Brilliantly transilluminant",
          "Mostly on posterior neck region",
          "Lined by endothelium",
          "Lined by columnar epithelium",
        ],
        answer: 3, // Correct answer: Lined by columnar epithelium
      },
      {
        // 460
        question:
          "A 45-year-old smoker complains of calf pain on walking 400 meters. In follow-up visits he says that he starts developing pain on walking 100 meters only. Gradually he starts having pain even during sleeping, thereby he prefers to sleep with legs dangling which makes him feel better. What is the most likely pathology in this patient?",
        options: [
          "Venous claudication",
          "Neurological claudication",
          "Sciatica",
          "Rest pain",
        ],
        answer: 3, // Correct answer: Rest pain
      },
      {
        // 461
        question:
          "Which of the following is used in the treatment for a female who has color change of digits as white, blue, and red on cold exposure?",
        options: ["CCB", "Beta blockers", "Alpha blockers", "NSAID"],
        answer: 0, // Correct answer: CCB
      },
      {
        // 462
        question:
          "A male patient with history of smoking presented with black necrotic index finger as shown below. What is the diagnosis?<br><img src='images/s462.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Ainhum",
          "Raynaud's phenomenon",
          "Fournier's gangrene",
          "Buerger's disease",
        ],
        answer: 3, // Correct answer: Buerger's disease
      },
      {
        // 463
        question:
          "A 50-year-old female underwent total hip replacement after fracture of the neck of femur, for which she developed breathlessness and was brought to the emergency. What is the most likely cause of this condition?",
        options: [
          "Venous thromboembolism",
          "Air embolism",
          "Systemic embolism",
          "Fat embolism",
        ],
        answer: 0, // Correct answer: Fat embolism
      },
      {
        // 464
        question:
          "Which of the following is the investigation of choice for pulmonary embolism?",
        options: ["Ultrasound", "CECT chest", "Doppler", "CT angiography"],
        answer: 3, // Correct answer: CT angiography
      },
      {
        // 465
        question: "What is the origin of ulcer, given in the image?<br><img src='images/s465.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Venous ulcer",
          "Arterial ulcer",
          "Diabetic ulcer",
          "Pressure ulcer",
        ],
        answer: 0, // Correct answer: Arterial ulcer
      },
      {
        // 466
        question:
          "A bedridden patient developed low-grade fever, pain in the calf region, and pedal edema. It is related to:",
        options: [
          "Cellulitis",
          "DVT",
          "Necrotizing fasciitis",
          "Varicose vein",
        ],
        answer: 1, // Correct answer: DVT
      },
      {
        // 467
        question:
          "A 60-year-old patient presents with restricted ambulation and prolonged bed rest due to acute lumbago, presenting with severe pain in left leg below the knee. On examination, discoloration of the left calf with significantly increased girth is noted. What is the clinical diagnosis?<br><img src='images/s467.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Acute lymphangitis",
          "Superficial migratory thrombophlebitis",
          "Deep vein thrombosis",
          "Milroy disease",
        ],
        answer: 2, // Correct answer: Deep vein thrombosis
      },
      {
        // 468
        question:
          "A patient had blunt injury to his calf during a hit-and-run accident. On examination, there was pain on passive stretching and distal pulses were feeble. What is the most probable diagnosis?",
        options: [
          "Compartment syndrome",
          "Necrotizing fasciitis",
          "Buerger's disease",
          "DVT",
        ],
        answer: 0, // Correct answer: Compartment syndrome
      },
      {
        // 469
        question: "Correct about cellulitis is?",
        options: [
          "Nonsuppurative and noninvasive",
          "Suppurative and invasive",
          "Nonsuppurative and invasive",
          "Suppurative and invasive",
        ],
        answer: 2, // Correct answer: Suppurative and invasive
      },
      {
        // 470
        question:
          "Long term diabetic patient walked barefoot a few miles on hot sand. He developed blisters on feet and legs. What is the most probable diagnosis?<br><img src='images/s470.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Diabetic foot",
          "Necrotizing fasciitis",
          "Burn",
          "Chilblains",
        ],
        answer: 1, // Correct answer: Burn
      },
      {
        // 471
        question:
          "A patient of varicose veins came to hospital; intern was on duty. Which test he shall perform to evaluate for saphenofemoral incompetence?",
        options: [
          "Brodie Trendelenberg test I",
          "Brodie Trendelenburg test II",
          "Perthes test",
          "Thomas test",
        ],
        answer: 0, // Correct answer: Brodie Trendelenburg test II
      },
      {
        // 472
        question:
          "Which ulcer is likely to develop in a long standing chronic venous ulcer?",
        options: [
          "Marjolin ulcer",
          "Apthous ulcer",
          "Bazin ulcer",
          "Arterial ulcer",
        ],
        answer: 0, // Correct answer: Bazin ulcer
      },
      {
        // 473
        question:
          "Which complication is seen after Varicose vein stripping procedure?",
        options: [
          "Neuralgia",
          "Deep vein thrombosis",
          "Acrocyanosis",
          "Telangiectasia",
        ],
        answer: 0, // Correct answer: Neuralgia
      },
      {
        // 474
        question:
          "Most common complication of below knee stripping of Varicose veins is:",
        options: ["Haemorrhage", "Thromboembolism", "Neuralgia", "Infection"],
        answer: 2, // Correct answer: Infection
      },
      {
        // 475
        question: "Which is the most common site of peripheral aneurysm?",
        options: [
          "Femoral artery",
          "Radial artery",
          "Popliteal artery",
          "Brachial artery",
        ],
        answer: 2, // Correct answer: Popliteal artery
      },
      {
        // 476
        question: "Intermittent claudication is defined as pain?",
        options: [
          "At rest",
          "On first step of walking",
          "Relieved on standing still",
          "Increase on limb dependency",
        ],
        answer: 2, // Correct answer: On first step of walking
      },
      {
        // 477
        question:
          "Which of the following is the best management for radiation induced occlusive disease of carotid artery?",
        options: [
          "Low dose aspirin",
          "Carotid angioplasty and stenting",
          "Carotid endarterectomy",
          "Carotid bypass procedure",
        ],
        answer: 1, // Correct answer: Carotid angioplasty and stenting
      },
      {
        // 478
        question:
          "All of the following result after chronic edema to legs; EXCEPT?",
        options: [
          "Marjolin's ulcer",
          "Thickening of skin",
          "Soft tissue infections",
          "Varicose veins",
        ],
        answer: 3, // Correct answer: Marjolin's ulcer
      },
      {
        // 479
        question: "Buerger disease affects which layers of artery?",
        options: [
          "Tunica media",
          "Tunica adventitia",
          "Tunica intima",
          "All of the above",
        ],
        answer: 3, // Correct answer: All of the above
      },
      {
        // 480
        question: "All are true about Buerger disease; EXCEPT:",
        options: [
          "Ulnar artery and peroneal arteries involved",
          "Nerve involvement present",
          "Small acral vessels of limb involvement cause hypohidrosis",
          "Phlebitis migrans",
        ],
        answer: 2, // Correct answer: Phlebitis migrans
      },
      {
        // 481
        question:
          "Patient presents with varicose vein with sapheno-femoral incompetence with normal perforators. The best management plan is:",
        options: [
          "Endovascular stripping",
          "Sclerotherapy",
          "Sapheno-femoral flush ligation",
          "Saphenofemoral flush ligation with stripping",
        ],
        answer: 3, // Correct answer: Sapheno-femoral flush ligation
      },

      {
        // 482
        question: "Thromboangiitis obliterans involves?",
        options: ["Arteries", "Veins", "Nerves", "All of these"],
        answer: 3, // Correct answer: Arteries
      },

      {
        // 483
        question: "Hoffman Tinel sign is seen in?",
        options: [
          "Deep vein thrombosis",
          "Nerve regeneration",
          "Pulmonary embolism",
          "Upper motor neuron lesion",
        ],
        answer: 1, // Correct answer: Nerve regeneration
      },
      {
        // 484
        question: "Split skin graft is composed of:",
        options: [
          "Only epidermis",
          "Epidermis and partial dermis",
          "Epidermis and deep dermis",
          "Epidermis, dermis and subcutaneous fat",
        ],
        answer: 1, // Correct answer: Epidermis and partial dermis
      },

      {
        // 485
        question:
          "A 30-year-old lady after fire-works accident presented with burns from the neck down to the lower back. What will be the preferred sequence of treatment?",
        options: [
          "First debridement then resuscitation then grafting",
          "First debridement then grafting and then resuscitation",
          "First resuscitation then grafting and then debridement",
          "First resuscitation then debridement and then grafting",
        ],
        answer: 3, // Correct answer: First resuscitation then debridement and then grafting
      },

      {
        // 486
        question:
          "Which of the following is the best method for hair removal to avoid surgical site infection?",
        options: [
          "Shaving site with razor the morning of operation",
          "Hair clippers inside the operation theater",
          "Shaving site with a razor the night before operation",
          "Depilatory creams before the operation",
        ],
        answer: 1, // Correct answer: Hair clippers inside the operation theater
      },

      {
        // 487
        question:
          "A patient suffered from injury 3 days ago following which he was brought to tertiary care hospital. What would be the initial treatment in this patient?<br><img src='images/s487.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Debridement and rotational advancement flap closure",
          "Debridement and primary closure",
          "Amputation",
          "Debridement and hyperbaric oxygen",
        ],
        answer: 3, // Correct answer: Debridement and hyperbaric oxygen
      },
      {
        // 488
        question:
          "Which of the following incisions is cosmetically preferred for appendicectomy?<br><img src='images/s488.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["A", "B", "C", "D"],
        answer: 2, // Correct answer: A
      },
      {
        // 489
        question:
          "A 60-year-old female presented in a state of shock and abdominal distension. She has a history of prolonged use of NSAIDs. Chest X-ray is given below. Identify the condition.<br><img src='images/s489.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Pneumothorax",
          "Pleural effusion",
          "Hydropneumothorax",
          "Perforation of peptic ulcer",
        ],
        answer: 3, // Correct answer: Perforation of peptic ulcer
      },
      {
        // 490
        question:
          "What is the cause of cannon ball appearance on chest X-ray as shown below?<br><img src='images/s490.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Tuberculosis",
          "Carcinoma lung",
          "Lung metastasis",
          "Fungal infection",
        ],
        answer: 2, // Correct answer: Lung metastasis
      },
      {
        // 491
        question: "Popcorn calcification on chest X-ray is seen in:",
        options: [
          "Pulmonary hamartoma",
          "Bronchogenic carcinoma",
          "Aspergilloma",
          "Mesothelioma",
        ],
        answer: 0, // Correct answer: Pulmonary hamartoma
      },
      {
        // 492
        question:
          "A 50-year-old patient presented with a history of chronic cough, occasional hemoptysis, and weight loss. Golden 'S' sign was seen on the chest X-ray. What is the diagnosis?<br><img src='images/s492.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Tuberculosis",
          "Bronchogenic carcinoma",
          "Mesothelioma",
          "Aspergilloma",
        ],
        answer: 1, // Correct answer: Bronchogenic carcinoma
      },
      {
        // 493
        question:
          "A child was brought to the emergency by the mother with difficulty in swallowing for the past few hours. The child was able to speak. X-ray was taken. Identify the location of foreign body.<br><img src='images/s493.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["Esophagus", "Trachea", "Mediastinum", "Artifact of X-ray"],
        answer: 0, // Correct answer: Esophagus
      },
      {
        // 494
        question: "Pressure sores are formed when the pressure is above:",
        options: ["5 mm Hg", "10 mm Hg", "20 mm Hg", "30 mm Hg"],
        answer: 3, // Correct answer: 20 mm Hg
      },

      
      

      {
        //495
        question:
          "After resection of a lipoma over the neck region, the patient developed an elevated scar within the operative site with an itching sensation. What is the diagnosis?",
        options: [
          "Hypertrophic scar",
          "Stitch granuloma",
          "Granulomatous scar",
          "Keloid",
        ],
        answer: 0,
      },

      {
        //496
        question:
          "A patient of RTA was brought to the emergency with BP of 80/90 mm Hg. FAST was positive. Fluid resuscitation was done but the patient was not improving. What is the next best step?",
        options: [
          "Observation",
          "CECT",
          "Diagnostic laparoscopy",
          "Exploratory laparotomy",
        ],
        answer: 3,
      },
      //497
      {
        question:
          "A trauma patient was brought to the emergency. There was raised JVP, cold clammy skin, heart sounds were not audible clearly, and neck veins were engorged. The patient died in the hospital, and autopsy showed the following image. What is the most likely cause of death in this patient?<br><img src='images/s497.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Cardiac tamponade",
          "Fat necrosis",
          "Hemothorax",
          "Intestinal perforation",
        ],
        answer: 0,
      },

      {
        // 498
        question:
          "A patient presented in the emergency after head trauma. On examination, he was able to open his eyes on painful stimuli, shows withdrawal movement, and used inappropriate words. What is the Glasgow coma score of this patient?",
        options: ["E3M5V4", "E2M3V3", "EIM3V3", "E2M3V2"],
        answer: 1, // Correct answer: E2M3V3
      },
      {
        // 499
        question:
          "A chronic smoker presented to the emergency. His X-ray chest was done which showed the following. Probable diagnosis in this patient:<br><img src='images/s499.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Pneumothorax",
          "Tension pneumothorax",
          "Hemothorax",
          "Hydropneumothorax",
        ],
        answer: 1, // Correct answer: Tension pneumothorax
      },
      {
        // 500
        question:
          "What is the probable cause of the condition shown in the given X-ray?<br><img src='images/s500.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Pleural effusion",
          "Perforation peritonitis",
          "Sigmoid volvulus",
          "Intestinal obstruction",
        ],
        answer: 1, // Correct answer: Pleural effusion
      },
    ],
    "Set-11": [//ques-compleated, answer -matched
      // 501
      {
        question: "Radioisotope used in thyroid cancer treatment:",
        options: ["I 131", "99 Tc", "89 St", "133 Cs"],
        answer: 0,
      },
      // 502
      {
        question: "Most common radioisotope used in PET scan:",
        options: ["18F", "13C", "14C", "All of these"],
        answer: 0,
      },
      // 503
      {
        question:
          "A patient with injury to the right side of the chest presented to the emergency. The chest X-ray is given below. What is the preferred treatment option?<br><img src='images/s503.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Chest tube insertion on left side",
          "Conservative management",
          "Chest tube insertion on right side",
          "Thoracotomy",
        ],
        answer: 2,
      },
      // 504
      {
        question:
          "The patient developed this lesion over the chest after 6 months of surgery. What is the diagnosis?",
        options: [
          "Atrophic scar",
          "Keloid",
          "Hypertrophic scar",
          "Contracture",
        ],
        answer: 1,
      },
      // 505
      {
        question:
          "Which of the following fluids should not be given to a patient with a head injury?",
        options: [
          "Normal saline",
          "Hypertonic saline",
          "Ringer lactate",
          "5% dextrose",
        ],
        answer: 3,
      },
      // 506
      {
        question:
          "What kind of shock is seen in a patient with profuse bleeding per rectum, cold clammy extremities, and CVP of 2 cm H₂O?",
        options: ["Cardiogenic", "Neurogenic", "Hypovolemic", "Distributive"],
        answer: 2,
      },
      // 507
      {
        question:
          "What is the best method to check for the correct placement of a central venous catheter?",
        options: ["Measure PaCO₂", "Measure pH", "Chest X-ray", "Temperature"],
        answer: 2,
      },
      // 508
      {
        question:
          "A patient was brought to the emergency. Immediate and fast crystalloid IV transfusion has to be done. Which color IV cannula should be used for giving the fluids?",
        options: ["Blue", "Pink", "Orange", "Green"],
        answer: 2,
      },
      // 509
      {
        question:
          "What is the diagnosis on the basis of the image given below?<br><img src='images/s509.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Cellulitis",
          "Folliculitis with abscess",
          "Erysipelas",
          "Carbuncle",
        ],
        answer: 3,
      },
      // 510
      {
        question: "Which fluid should be given in severe head injury?",
        options: [
          "5% dextrose",
          "Normal saline",
          "Hypertonic saline",
          "Ringer lactate",
        ],
        answer: 2,
      },
      // 511
      {
        question:
          "A 30-year-old patient presents with acute abdomen. X-ray abdomen was done in standing position. Which of the following is correct about the management of this condition?<br><img src='images/s511.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Drain the peritoneal fluid",
          "X-ray guided drainage of peritoneal accumulation",
          "Exploratory laparotomy",
          "Insert flatus tube and perform barium studies",
        ],
        answer: 2,
      },
      // 512
      {
        question:
          "In a train accident, there were 74 dead, 64 severely injured, 20 moderately injured, and 32 mildly injured. Color-coding in triage from highest to lowest priority is:",
        options: [
          "Green - Yellow - Red - Black",
          "Yellow - Red - Green - Black",
          "Black - Yellow - Red - Green",
          "Red - Yellow - Green - Black",
        ],
        answer: 3,
      },
      // 513
      {
        question:
          "Mandatory exploration is required in the injuries of which zones of retroperitoneum?<br><img src='images/s513.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["Zone 1", "Zone 2", "Zone 3", "Zone 1 and 3"],
        answer: 0,
      },
      // 514
      {
        question:
          "A 40-year-old patient with femur fracture develops respiratory distress on the second day of admission to the orthopedics department. CXR shows multiple pulmonary infiltrates. The most probable clinical diagnosis is:",
        options: [
          "Fat embolism",
          "Pulmonary embolism",
          "Air embolism",
          "Tropical pulmonary eosinophilia",
        ],
        answer: 0,
      },
      // 515
      {
        question:
          "A 20-year-old man presented to the emergency department after falling from a motorbike. The investigation of choice should be:",
        options: ["CECT", "MRI", "NCCT", "MRI"],
        answer: 2,
      },
      // 516
      {
        question:
          "Which of the following components of ALVARADO score has a value assigned as 2?",
        options: [
          "Elevated body temperature",
          "Leukocytosis",
          "Shift to left",
          "Migratory RIF pain",
        ],
        answer: 1,
      },
      // 517
      {
        question:
          "Patient categorization on the basis of chances of survival in disaster management is called?",
        options: ["Mitigation", "Tagging", "Surge capacity", "Triage"],
        answer: 3,
      },
      // 518
      {
        question:
          "A patient presented to emergency after RTA with multiple rib fractures. He is conscious, speaking single words, and BP was 90/40 mm Hg. What is the immediate next step?",
        options: [
          "Urgent IV fluid administration",
          "Intubate the patient",
          "Chest X-ray",
          "Insert needle in 2nd intercostal space",
        ],
        answer: 3,
      },
      // 519
      {
        question: "Correct procedure of inserting Nasogastric tube is:",
        options: [
          "Supine with neck flexed",
          "Supine with neck extended",
          "Sitting with neck flexed",
          "Sitting with neck extended",
        ],
        answer: 2,
      },
      // 520
      {
        question:
          "Calculate the GCS of a patient exhibiting eye opening on pain, conscious but confused, and exhibits flexion on painful noxious stimuli to the arm:",
        options: ["8", "9", "10", "11"],
        answer: 2,
      },
      // 521
      {
        question: "Most appropriate management of recurrent keloid is:",
        options: [
          "Excisional surgery",
          "Intramarginal excision followed by radiation",
          "Cryosurgery",
          "Silicone gel sheeting",
        ],
        answer: 1,
      },
      // 522
      {
        question: "Which of the following is not scanned by FAST ultrasound?",
        options: ["Pericardium", "Pleural cavity", "Spleen", "Liver"],
        answer: 1,
      },
      // 523
      {
        question:
          "Prophylactic antibiotics to minimize Surgical Site Infections (SSI) should be given when?",
        options: [
          "60 minutes before skin incision",
          "1-3 hours before skin incision",
          "At time of surgical incision",
          "Night before surgery for peaking of effect",
        ],
        answer: 0,
      },
      // 524
      {
        question: "Which procedure is done in the management of a Ranula?",
        options: [
          "Incision and drainage",
          "Aspiration",
          "Excision",
          "Sclerosant injection",
        ],
        answer: 2,
      },
      // 525
      {
        question:
          "Which of the following is best for the diagnosis of pheochromocytoma?",
        options: [
          "24-hour urinary Vanillyl Mandelic acid",
          "24-hour urinary Fractionated Metanephrine",
          "24-hour Urinary Hydroxy indole acetic acid",
          "24-hour Urinary Hydroxy tryptamine",
        ],
        answer: 1,
      },
      // 526
      {
        question: "Comment on the diagnosis?<br><img src='images/s526.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Sebaceous cyst",
          "Implantation dermoid",
          "Angular dermoid",
          "Lipoma",
        ],
        answer: 0,
      },
      // 527
      {
        question: "Comment on the diagnosis?<br><img src='images/s527.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Lipoma",
          "Encephalocele",
          "Cystic hygroma",
          "Lymphadenopathy",
        ],
        answer: 0,
      },
      // 528
      {
        question:
          "Which organ has the highest chances of Graft rejection response?",
        options: ["Cornea", "Gut", "Liver", "Skin"],
        answer: 1,
      },
      // 529
      {
        question:
          "In hypovolemic shock, which organ should be assessed for determining under-perfusion?",
        options: ["Kidney", "Heart", "Lung", "Liver"],
        answer: 0,
      },
      // 530
      {
        question:
          "Which of the following is not a hospital-acquired infection?",
        options: ["Pneumonia", "S.T.D.", "UTI", "Bloodstream infection"],
        answer: 1,
      },
      // 531
      {
        question:
          "Amount of blood loss in class III circulatory failure/hemorrhagic shock?",
        options: ["<15%", "15-30%", "30-40%", ">40%"],
        answer: 2,
      },
      // 532
      {
        question: "Identify the lesion shown.<br><img src='images/s532.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: ["Wet gangrene", "Dry gangrene", "Frost bite", "Ainhum"],
        answer: 0,
      },
      // 533
      {
        question:
          "The following patient has presented after chest trauma. On examination crepitus is felt. The clinical diagnosis is?<br><img src='images/s533.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Subcutaneous Emphysema",
          "Gas gangrene",
          "Acute tubular necrosis",
          "SVC syndrome",
        ],
        answer: 0,
      },
      // 534
      {
        question: "What is the GCS for a brain dead patient?",
        options: ["3", "5", "6", "8"],
        answer: 0,
      },
      
      
      // 535
      {
        question:
          "A 50 kg patient has 40% burn of the body surface area. BP 90/60 mm Hg. Calculate the ringer lactate solution to be given for the first 8 hours of fluid:",
        options: ["1L", "2L", "4L", "8L"],
        answer: 2,
      },
      // 536
      {
        question:
          "Which is the best method to administer oxygen in case of burns of airways?",
        options: [
          "Elective intubation",
          "Mask",
          "Nasal prongs",
          "Tracheostomy",
        ],
        answer: 0,
      },
      // 537
      {
        question:
          "In which of the following conditions is Fogarthy catheter used?",
        options: [
          "Acute limb ischemia",
          "Tube thoracotomy with underwater seal",
          "Suprapubic drainage of bladder",
          "Total parenteral nutrition",
        ],
        answer: 0,
      },
      // 538
      {
        question: "Which of the following needle is used to suture skin?",
        options: [
          "Cutting needle",
          "Reverse Cutting needle",
          "Round body needle",
          "Straight needle with eye",
        ],
        answer: 0, // Correct answer: Cutting needle
      },
      // 539
      {
        question: "Shock index is defined as?",
        options: ["Pulse rate/BP", "BP/Pulse rate", "CVP/PCWP", "PCWP/CVP"],
        answer: 0, // Correct answer: Pulse rate/BP
      },
      // 540
      {
        question: "Which is used to control bleeding?",
        options: ["Pressure", "Packing", "Position", "All of these"],
        answer: 3, // Correct answer: All of these
      },
      // 541
      {
        question: "What is the preferred fluid used in burns after 24 hours?",
        options: [
          "Ringer lactate",
          "Colloids",
          "Hypertonic saline",
          "Switch to oral or parenteral nutrition",
        ],
        answer: 1, // Correct answer: Colloids
      },
      // 542
      {
        question:
          "A patient presents with a knife stab wound to the lower neck. Pulse rate is 110/min with BP = 100/70 mm Hg. What is the next step?",
        options: [
          "Immediate wound exploration",
          "Formal wound exploration in OT in GA",
          "Put stent to prevent pneumothorax",
          "Urgent angiography",
        ],
        answer: 3, // Correct answer: Formal wound exploration in OT in GA
      },
      // 543
      {
        question:
          "A patient with abdominal trauma is brought to casualty. On examination, the vitals are stable with no evidence of peritonitis. Next best step is?",
        options: [
          "Urgent exploratory laparotomy",
          "CT Abdomen",
          "FAST",
          "Diagnostic peritoneal lavage",
        ],
        answer: 2, // Correct answer: CT Abdomen
      },
      // 544
      {
        question: "Class I haemorrhagic shock is caused by loss of blood (ml):",
        options: ["750", "1000", "1500", "2000"],
        answer: 0, // Correct answer: 750
      },
      // 545
      {
        question: "Fogarty catheter is used in which of the following?",
        options: [
          "Acute limb ischemia",
          "Suprapubic catheterization of Urinary bladder",
          "Deflating sigmoid volvulus",
          "Coronary stenting",
        ],
        answer: 0, // Correct answer: Acute limb ischemia
      },
      // 546
      {
        question:
          "A patient underwent inguinal lymph node dissection and drain was placed. On the 10th day, severe bleeding occurs. What type of bleeding is this?",
        options: [
          "Reactionary hemorrhage",
          "Secondary hemorrhage",
          "Primary hemorrhage",
          "Tertiary hemorrhage",
        ],
        answer: 1, // Correct answer: Secondary hemorrhage
      },
      // 547
      {
        question:
          "A 25-year-old patient with abdominal trauma presents with hypovolemic shock and is unresponsive to crystalloids. What is the next step?",
        options: [
          "Albumin",
          "Colloids",
          "Blood transfusion",
          "Immediate laparoscopy",
        ],
        answer: 2, // Correct answer: Blood transfusion
      },
      {
        // 548
        question: "Which is the best parameter to monitor Hypovolemic shock?",
        options: [
          "Urine output",
          "Respiratory rate",
          "Blood pressure",
          "Pulse rate",
        ],
        answer: 0, // Correct answer: Urine output
      },
      {
        // 549
        question:
          "A 25-year-old patient presents in emergency with abdominal trauma. Why is FAST done?",
        options: [
          "Detection of pericardial fluid accumulation",
          "Detection of bowel lacerations",
          "Detection of Mesenteric Tear",
          "Detection of aortic transection",
        ],
        answer: 0, // Correct answer: Detection of pericardial fluid accumulation
      },
      {
        // 550
        question: "Increased cardiac output is seen in which shock?",
        options: ["Septic shock", "Anaphylaxis", "Neurogenic", "Hemolysis"],
        answer: 0, // Correct answer: Septic shock
      },
    ],
    "Set-12":[//ques-compleated, answer-matched
      {
        // 551
        question: "What is given immediately in hemorrhagic shock?",
        options: [
          "Packed RBC",
          "Colloids",
          "Crystalloids",
          "Isotonic fluids"
        ],
        answer: 2 // Correct answer: Crystalloids
      },
      {
        // 552
        question: "Plasma expanders are most useful in which shock?",
        options: [
          "Septic shock",
          "Vasovagal shock",
          "Neurogenic shock",
          "Cardiogenic shock"
        ],
        answer: 0 // Correct answer: Septic shock
      },
      {
        // 553
        question: "Neurogenic shock is caused by:",
        options: [
          "Burns",
          "Dehydration",
          "Hemorrhage",
          "Anesthesia"
        ],
        answer: 3 // Correct answer: Anesthesia
      },
      {
        // 554
        question: "Which is the preferred fluid in a poly-traumatic patient with shock?",
        options: [
          "Ringer lactate",
          "Normal saline",
          "Dextran",
          "Dextrose-normal saline"
        ],
        answer: 1 // Correct answer: Ringer lactate
      },
      {
        // 555
        question: "Which is the first fluid of choice in Hypovolemic shock?",
        options: [
          "Dextran",
          "Normal saline",
          "Dextrose-normal saline",
          "Hartmann solution"
        ],
        answer: 1 // Correct answer: Normal saline
      },
      {
        // 556
        question: "All are criteria for Systemic Inflammatory Response Syndrome (SIRS) in children EXCEPT:",
        options: [
          "Tachycardia",
          "Hypotension",
          "Fever",
          "Leukocytosis"
        ],
        answer: 1 // Correct answer: Hypotension
      },
      {
        // 557
        question: "A newborn boy has lumbosacral meningomyelocele and is awaiting surgical repair. The sac is best protected with sterile gauze piece soaked with:",
        options: [
          "Mercurochrome",
          "Tincture benzoin",
          "Methylene blue",
          "Normal saline"
        ],
        answer: 3 // Correct answer: Normal saline
      },
      {
        // 558
        question: "In 1 mL of 0.9% normal saline, the content of Na is:",
        options: [
          "0.1 mEq",
          "0.3 mEq",
          "0.5 mEq",
          "10 mEq"
        ],
        answer: 0 // Correct answer: 0.5 mEq
      },
      {
        // 559
        question: "In 1 mL of 3 percent saline, what is the quantity of sodium?",
        options: [
          "0.5 mEq",
          "1 mEq",
          "10 mEq",
          "50 mEq"
        ],
        answer: 0 // Correct answer: 1 mEq
      },
      {
        // 560
        question: "In IV fluids, what percentage of total parenteral nutrition energy is supplied by glucose?",
        options: [
          "20%",
          "30%",
          "40%",
          "50%"
        ],
        answer: 3 // Correct answer: 50%
      },
      {
        // 561
        question: "According to the 'rule of 9,' what is the percentage of burn for a hand?",
        options: [
          "1%",
          "5%",
          "9%",
          "14%"
        ],
        answer: 0 // Correct answer: 9%
      },
      {
        // 562
        question: "What is the body surface area involved in burns of the perineum?",
        options: [
          "1%",
          "3%",
          "5%",
          "9%"
        ],
        answer: 0 // Correct answer: 1%
      },
      {
        // 563
        question: "What is the best solution for burns?",
        options: [
          "NS 0.9%",
          "Ringer's lactate",
          "25% dextrose",
          "Colloid"
        ],
        answer: 1 // Correct answer: Ringer's lactate
      },
      {
        // 564
        question: "All are given for the management of burns EXCEPT?",
        options: [
          "Hypotonic solutions",
          "Albumin",
          "25% dextrose",
          "Hartmann solution/ATLS"
        ],
        answer: 0 // Correct answer: Hypotonic solutions
      },
      {
        // 565
        question: "What is the first fluid preferred in a burn patient?",
        options: [
          "Crystalloids",
          "Colloids",
          "Any of above",
          "Both of above"
        ],
        answer: 0 // Correct answer: Crystalloids
      },
      {
        // 566
        question: "All are true about a burn patient EXCEPT:",
        options: [
          "Hematemesis is an early complication",
          "For head and neck burn, exposure treatment is done",
          "Stridor can be present",
          "Most common infection is by Pseudomonas"
        ],
        answer: 0 // Correct answer: Hematemesis is an early complication
      },
      {
        // 567
        question: "What is the cause of death in a 70% burns patient in whom enteral feeding is not given?",
        options: [
          "Dehydration",
          "Malnutrition",
          "Electrolyte imbalance",
          "Bacterial infection"
        ],
        answer: 0 // Correct answer: Bacterial infection
      },
      {
        // 568
        question: "A burn patient is brought to emergency. Upon examination, he was found dead. What could be the possible cause?",
        options: [
          "Sepsis",
          "Hypoxia",
          "Malnutrition",
          "Hypovolemia"
        ],
        answer: 3 // Correct answer: Hypoxia
      },
      {
        // 569
        question: "Which is true about burns?",
        options: [
          "Above 5% of surface area must be involved to produce shock",
          "Inhaled hot gas will not cause supraglottic airway burn and laryngeal edema",
          "Early elective intubation is safest",
          "If oral fluids are to be used, salt must be avoided"
        ],
        answer: 2 // Correct answer: Early elective intubation is safest
      },
      {
        // 570
        question: "What is correct about 3rd-degree burns?",
        options: [
          "Erythema and painful",
          "Erythema and painless",
          "Painless and cherry red",
          "Painful and cherry red"
        ],
        answer: 2 // Correct answer: Painless and cherry red
      },
      {
        // 571
        question: "Which virus causes infection in burn patients?",
        options: [
          "HSV",
          "CMV",
          "EBV",
          "VZV"
        ],
        answer: 0 // Correct answer: HSV
      },
      {
        // 572
        question: "What is the cause of death in burns?",
        options: [
          "Sepsis",
          "Shock",
          "Dyselectrolytemia",
          "ARDS"
        ],
        answer: 0 // Correct answer: Sepsis
      },
      {
        // 573
        question: "Burns present as all of the following EXCEPT:",
        options: [
          "Sepsis",
          "Shock",
          "Acute kidney injury",
          "Air embolism"
        ],
        answer: 3 // Correct answer: Air embolism
      },
      {
        // 574
        question: "Middle area of face fracture (Le-Fort fracture) is characterized by all EXCEPT:",
        options: [
          "Proptosis",
          "Lengthening of face",
          "Enophthalmos",
          "Ecchymosis"
        ],
        answer: 0 // Correct answer: Enophthalmos
      },
      {
        // 575
        question: "In Brown-Sequard syndrome ipsilateral loss will be of?",
        options: [
          "Pain",
          "Temperature",
          "Tactile discrimination",
          "Proprioception"
        ],
        answer: 3 // Correct answer: Proprioception
      },
      {
        // 576
        question: "Blow out injury with ptosis occurs due to damage to:",
        options: [
          "Zygomatic arch",
          "Orbital floor",
          "Sphenoid bone",
          "Palatine and maxillary bones"
        ],
        answer: 1 // Correct answer: Orbital floor
      },
      {
        // 577
        question: "Fournier gangrene is caused by:",
        options: [
          "Clostridium welchii",
          "Clostridium septicum",
          "Anaerobic Streptococcus",
          "Bacillus subtilis"
        ],
        answer: 2 // Correct answer: Anaerobic Streptococcus
      },
      {
        // 578
        question: "Continuous burrowing ulcer is caused by?",
        options: [
          "Streptococcus viridans",
          "Streptococcus pyogenes",
          "Staphylococcus aureus",
          "Microaerophilic streptococcus"
        ],
        answer: 3 // Correct answer: Microaerophilic streptococcus
      },
      {
        // 579
        question: "All of the following are released/increased in surgical stress; EXCEPT:",
        options: [
          "ADH",
          "Insulin",
          "ACTH",
          "Cortisol"
        ],
        answer: 1 // Correct answer: Insulin
      },
      {
        // 580
        question: "All are true about Keloid; EXCEPT:",
        options: [
          "May be familial",
          "Arises on sternum",
          "Subsides over time",
          "Hyperkeratotic"
        ],
        answer: 2 // Correct answer: Subsides over time
      },
      {
        // 581
        question: "Which organ is most commonly affected by blunt trauma to the abdomen?",
        options: [
          "Spleen",
          "Intestine",
          "Liver",
          "Mesentery"
        ],
        answer: 0 // Correct answer: Spleen
      },
      {
        // 582
        question: "Wound dehiscence occurs after how many days following surgery?",
        options: [
          "2-4 days",
          "Within 2 days",
          "5-12 days",
          ">2 weeks"
        ],
        answer: 2 // Correct answer: 5-12 days
      },
      {
        // 583
        question: "What does split thickness of skin graft mean?",
        options: [
          "Is a skin graft including the epidermis and part of the dermis",
          "Is a skin graft including the epidermis and complete dermis",
          "Is a skin graft including part of the epidermis and part of the dermis",
          "Is a skin graft including part of the epidermis and whole of the dermis"
        ],
        answer: 0 // Correct answer: Is a skin graft including the epidermis and part of the dermis
      },
      {
        // 584
        question: "What is a xenograft?",
        options: [
          "Transplantation of organs from a 1st degree relative",
          "Transplantation of organs from unrelated donor",
          "Transplantation of tissues from self",
          "Transplantation of living tissues/organs from one species to another"
        ],
        answer: 3 // Correct answer: Transplantation of living tissues/organs from one species to another
      },
      {
        // 585
        question: "Fibrosis is seen in all; EXCEPT:",
        options: [
          "Marjolin's ulcers",
          "Buruli ulcer",
          "Venous ulcer",
          "Peptic ulcer"
        ],
        answer: 1 // Correct answer: Peptic ulcer
      },
      {
        // 586
        question: "Carcinoma developed in a scar is called?",
        options: [
          "Sarcoma",
          "Adenocarcinoma",
          "Dermoid tumor",
          "Marjolin's ulcer"
        ],
        answer: 3 // Correct answer: Marjolin's ulcer
      },
      {
        // 587
        question: "Osteomyelitis first occurs in:",
        options: [
          "Metaphysis",
          "Epiphysis",
          "Diaphysis",
          "All of these"
        ],
        answer: 0 // Correct answer: Metaphysis
      },
      {
        // 588
        question: "Clean and small wound heals by",
        options: [
          "Primary intention",
          "Secondary intention",
          "Tertiary intention",
          "All of these"
        ],
        answer: 0 // Correct answer: Primary intention
      },
      {
        // 589
        question: "Female patient with injury on her scalp, hair was shaved and sutures were put. On which day sutures should be removed?",
        options: [
          "8-10 days",
          "2 weeks",
          "3 weeks",
          "1 month"
        ],
        answer: 0 // Correct answer: 8-10 days
      },
      {
        // 590
        question: "What is incorrect about Laparoscopy?",
        options: [
          "Smaller incisions",
          "Minimal postoperative pain",
          "Trocar injury in patients with low body mass index",
          "Recovery time is longer"
        ],
        answer: 3 // Correct answer: Recovery time is longer
      },
      {
        // 591
        question: "A guy driving a car fast suddenly slams on the brakes. He was wearing a seat belt. The organ most likely to be affected is:",
        options: [
          "Liver",
          "Spleen",
          "Mesentery",
          "Kidney"
        ],
        answer: 2 // Correct answer: Mesentery
      },
      {
        // 592
        question: "A motorcyclist after multiple trauma is having hypoventilation. What is the cause?",
        options: [
          "Damage to respiratory centre",
          "Damage to respiratory apparatus",
          "Both a and b",
          "None of the above"
        ],
        answer: 0 // Correct answer: Both a and b
      },
      {
        // 593
        question: "What is the best investigation for a hemodynamically stable patient with blunt abdominal trauma?",
        options: [
          "CECT abdomen",
          "MRI abdomen",
          "Diagnostic Peritoneal lavage",
          "FAST"
        ],
        answer: 0 // Correct answer: CECT abdomen
      },
      {
        // 594
        question: "Painful lockjaw is seen in all of the following; EXCEPT?",
        options: [
          "Tetany",
          "Temporomandibular joint abscess",
          "Mandibular abscess",
          "Odontogenic pulp abscess"
        ],
        answer: 0 // Correct answer: Tetany
      },
      {
        // 595
        question: "What is the most common site of basal cell carcinoma in lips?",
        options: [
          "Upper lip",
          "Central 1/3",
          "Lower lip",
          "Commissures"
        ],
        answer: 2 // Correct answer: Lower lip
      },
      {
        // 596
        question: "Fracture of neck of fibula leads to which nerve injury?",
        options: [
          "Common peroneal nerve",
          "Obturator nerve",
          "Genitofemoral nerve",
          "Posterior tibial nerve"
        ],
        answer: 0 // Correct answer: Common peroneal nerve
      },
      {
        // 597
        question: "What is the most common nosocomial infection acquired by a patient undergoing surgery?",
        options: [
          "S.I.R.S",
          "Surgical site infection",
          "Pneumonia",
          "Catheter-based infection"
        ],
        answer: 1 // Correct answer: Surgical site infection
      },
      {
        // 598
        question: "Upon aspiration in supine position, food particles go most commonly to?",
        options: [
          "Right lower lobe superior basal",
          "Right lower lobe postero basal",
          "Left lower lobe superior basal",
          "Left lower lobe postero basal"
        ],
        answer: 0 // Correct answer: Right lower lobe postero basal
      },
      {
        // 599
        question: "What is the management of Epidermoid Carcinoma?",
        options: [
          "5FU + external beam radiation",
          "Mitomycin + external beam radiation",
          "External beam radiation",
          "Surgery + Imiquimod"
        ],
        answer: 3 // Correct answer: Mitomycin + external beam radiation
      },
      {
        // 600
        question: "In TNM staging, N = ?",
        options: [
          "Nature of tumor",
          "Number of tumors",
          "Number of lymph nodes involved",
          "Metastasis"
        ],
        answer: 2 // Correct answer: Number of lymph nodes involved
      }
    ],
    "Set-13":[//question , answer -compleated
      {
        // 601
        question: "A patient presented to emergency with complaints of headache. Patient described it as the worst headache of his life. CT image is given below. What is the diagnosis?<br><img src='images/s601.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Extradural hemorrhage",
          "Subdural hemorrhage",
          "Migraine",
          "Subarachnoid hemorrhage"
        ],
        answer: 3, // Correct answer: Subarachnoid hemorrhage
      },
      {
        // 602
        question: "A 55-year old woman working in the office, suffered a head trauma after a road traffic accident. Which of the following is associated with lucid interval?",
        options: [
          "Acute subdural hemorrhage",
          "Chronic subdural hemorrhage",
          "Subarachnoid hemorrhage",
          "Extradural hemorrhage"
        ],
        answer: 3, // Correct answer: Extradural hemorrhage
      },
      {
        // 603
        question: "A 50-year-old man was brought to emergency after road traffic accident. He was diagnosed with cerebral edema. Which of the following drug should be used?",
        options: [
          "Steroids",
          "Mannitol",
          "Acetazolamide",
          "Glycerol"
        ],
        answer: 1, // Correct answer: Mannitol
      },
      {
        // 604
        question: "Battle sign is:<br><img src='images/s604.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Bruising on mastoid",
          "CSF rhinorrhea",
          "Periorbital ecchymosis",
          "Acute mastoiditis"
        ],
        answer: 0, // Correct answer: Bruising on mastoid
      },
      {
        // 605
        question: "A patient suffered from road traffic accident 6 hours before he was brought to the emergency with altered sensorium. His Glasgow coma score was 12. CT scan of head was done which is as shown below. He is most likely suffering from:<br><img src='images/s605.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Subdural hematoma",
          "Extradural hematoma",
          "Subarachnoid hemorrhage",
          "Infracerebral hematoma"
        ],
        answer: 1, // Correct answer: Subdural hematoma
      },
      {
        // 606
        question: "A 50-year-old patient presented with development of intractable seizures. CT Head shows intracranial space occupying lesion for which a CT guided biopsy was done. The histopathology reported presence of psammoma bodies. Which of the following is the most likely diagnosis of this patient?<br><img src='images/s606.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Astrocytoma",
          "Ependymoma",
          "Meningioma",
          "Medulloblastoma"
        ],
        answer: 2, // Correct answer: Meningioma
      },
      {
        // 607
        question: "A 40-year-old man is brought to emergency with loss of consciousness following RTA. GCS is 8/15 and patient was having decerebrate rigidity. MRI head was performed and the image is given below. Which of the following is the diagnosis?<br><img src='images/s607.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Subarachnoid hemorrhage",
          "Subdural hemorrhage",
          "Cerebral amyloid angiopathy",
          "Diffuse axonal injury"
        ],
        answer: 3, // Correct answer: Diffuse axonal injury
      },
      {
        // 608
        question: "What should be the best treatment in a patient who presented in the emergency with respiratory distress and was noticed having dilated neck veins? CXR is shown below:<br><img src='images/s608.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Endotracheal intubation",
          "Needle Thoracostomy",
          "Tracheostomy",
          "Thoracocentesis"
        ],
        answer: 1, // Correct answer: Needle Thoracostomy
      },
      {
        // 609
        question: "Patient has undergone surgical procedure for a lung pathology where his pre-operative and post-operative chest-X-rays are shown below. What can be the likely diagnosis in this patient?<br><img src='images/s609.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Right pneumothorax",
          "Left pneumothorax",
          "Right Empyema",
          "Left empyema"
        ],
        answer: 2, // Correct answer: Left pneumothorax
      },
      {
        // 610
        question: "Best results in Coronary artery bypass grafting are obtained by:",
        options: [
          "Long saphenous vein",
          "Internal mammary artery",
          "Poly tetra fluoro ethylene",
          "Gastroepiploic artery"
        ],
        answer: 1, // Correct answer: Internal mammary artery
      },
      {
        // 611
        question: "An elderly male is undergoing renal transplantation. He received the graft from the twin brother. This graft is known as:",
        options: [
          "Autograft",
          "Isograft",
          "Allograft",
          "Xenograft"
        ],
        answer: 1, // Correct answer: Isograft
      },
      {
        // 612
        question: "What is the name of the given instrument?<br><img src='images/s612.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Ovum forceps",
          "Allis tissue forceps",
          "Sponge holding forceps",
          "Babcock's forceps"
        ],
        answer: 3, // Correct answer: Sponge holding forceps
      },
      {
        // 613
        question: "Identify the condition shown in the image which has been progressively increasing for the last 6 months.<br><img src='images/s613.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Basal cell carcinoma",
          "Squamous cell carcinoma",
          "Malignant melanoma",
          "Nevus"
        ],
        answer: 2, // Correct answer: Basal cell carcinoma
      },
      {
        // 614
        question: "Cutaneous horn as shown in the image is associated with which of the following skin cancer?<br><img src='images/s614.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Basal cell carcinoma",
          "Squamous cell carcinoma",
          "Malignant melanoma",
          "Actinic keratosis"
        ],
        answer: 1, // Correct answer: Squamous cell carcinoma
      },
      {
        // 615
        question: "Comment on the diagnosis from the image shown below of a patient from rural India?<br><img src='images/s615.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Cervical lymphadenopathy with occult primary",
          "Castleman disease",
          "Sepfuloderma",
          "Reactive lymphadenopathy"
        ],
        answer: 2, // Correct answer: Cervical lymphadenopathy with occult primary
      },
      {
        // 616
        question: "Which of the following organisms is responsible for causing this lesion shown on the face of the patient?<br><img src='images/s616.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Streptococcus",
          "Staphylococcus",
          "Bacteroides",
          "Fungus"
        ],
        answer: 0, // Correct answer: Staphylococcus
      },
      {
        // 617
        question: "A lady with 50% TBSA burn with involvement of dermis and subcutaneous tissue came to the emergency department. Burns will be classified as:",
        options: [
          "1st degree",
          "2nd degree superficial",
          "2nd degree deep",
          "3rd degree burn"
        ],
        answer: 3, // Correct answer: 2nd degree deep
      },
      {
        // 618
        question: "Rodent ulcer is seen in?",
        options: [
          "Squamous cell carcinoma",
          "Rhinophyma",
          "Basal cell cancer",
          "Adenocarcinoma"
        ],
        answer: 2, // Correct answer: Basal cell cancer
      },
      {
        // 619
        question: "Most common oral cancer",
        options: [
          "Squamous cell carcinoma",
          "Adenocarcinoma",
          "Transition cell carcinoma",
          "Mucoepidermoid"
        ],
        answer: 0, // Correct answer: Squamous cell carcinoma
      },
      {
        // 620
        question: "Identify the condition shown in the image:<br><img src='images/s620.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Port wine stain",
          "Strawberry nevus",
          "Erythema multiforme",
          "Exanthem Nodosum"
        ],
        answer: 0, // Correct answer: Port wine stain
      },
      {
        // 621
        question: "Which instrument is shown below?<br><img src='images/s621.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Artery forceps",
          "Kocher forceps",
          "Allis forceps",
          "Babcock forceps"
        ],
        answer: 0, // Correct answer: Kocher forceps
      },
      {
        // 622
        question: "Which instrument is shown below?<br><img src='images/s622.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Tongue depressor",
          "Doyen retractor",
          "Self-retaining retractor",
          "Langenbeck's retractor"
        ],
        answer: 0, // Correct answer: Self-retaining retractor
      },
      {
        // 623
        question: "In TNM staging, T indicates:",
        options: [
          "Size of tumor",
          "Nodal metastasis",
          "Distant metastasis",
          "Depth of invasion"
        ],
        answer: 0, // Correct answer: Size of tumor
      },
      {
        // 624
        question: "A 65-year-old patient presents with low backache and low-grade fever. X-ray spine shows:<br><img src='images/s624.png' alt='Vertebral Level Image' width='98%' style='max-height: 350px;'/>",
        options: [
          "Osteomyelitis",
          "Osteomalacia",
          "Hypoparathyroidism",
          "Metastasis"
        ],
        answer: 3, // Correct answer: Osteomyelitis
      },
      {
        // 625
        question: "What is correct regarding descent of testes during fetal stage?",
        options: [
          "Gestational age 1-7 months in abdomen",
          "Gestational age 1-7 months in inguinal canal",
          "Gestational age 7-9 months in scrotum",
          "Gestational age lies in 7-9 months in abdomen"
        ],
        answer: 0, // Correct answer: Gestational age 7-9 months in scrotum
      },
      {
        // 626
        question: "Which is not a derivative of midgut?",
        options: [
          "Appendix",
          "Jejunum",
          "Ascending colon",
          "Descending colon"
        ],
        answer: 3, // Correct answer: Descending colon
      },
      {
        // 627
        question: "All are true about amoebic liver abscess; EXCEPT?",
        options: [
          "Sterile pus",
          "Amoebae reach the right lobe > left lobe",
          "Intercostal tenderness",
          "Hepatocellular jaundice"
        ],
        answer: 3, // Correct answer: Hepatocellular jaundice
      },
      {
        // 628
        question: "A 30-year-old patient presents with pain in right hypochondrium for 5 days with soft and tender liver and intercostal tenderness. He complains of catch in breath on inspiration and has a non-productive cough. On examination, the lung fields are clear, patient looks pale and emaciated. What is the probable diagnosis?",
        options: [
          "Amoebic liver abscess",
          "Pyogenic liver abscess",
          "Hydatid cyst",
          "Hepatic adenoma"
        ],
        answer: 0, // Correct answer: Amoebic liver abscess
      },
      {
        // 629
        question: "Strawberry Gallbladder is seen in?",
        options: [
          "Cholesterolosis",
          "Porcelain Gall bladder",
          "Mirizzi syndrome",
          "Wegener's granulomatosis"
        ],
        answer: 0, // Correct answer: Cholesterolosis
      },
      {
        // 630
        question: "All are features of Saint's triad; EXCEPT?",
        options: [
          "Gall stones",
          "Diverticulitis",
          "Hiatus hernia",
          "Cholesterosis"
        ],
        answer: 3, // Correct answer: Cholesterosis
      },
      {
        // 631
        question: "Bent inner tube sign is seen in:",
        options: [
          "Volvulus",
          "Intussusception",
          "Intestinal obstruction",
          "Gastric antral vascular ectasia"
        ],
        answer: 0, // Correct answer: Volvulus
      },
      {
        // 632
        question: "Bird beak sign on barium enema is seen in?",
        options: [
          "Achalasia cardia",
          "Sigmoid volvulus",
          "Carcinoma esophagus",
          "Carcinoma sigmoid colon"
        ],
        answer: 1, // Correct answer: Sigmoid volvulus
      },
      {
        // 633
        question: "All are common causes of ileal obstruction; EXCEPT:",
        options: [
          "Adhesions",
          "Obstructed hernia",
          "Stricture",
          "Hirschsprung's disease"
        ],
        answer: 3, // Correct answer: Hirschsprung's disease
      },
      {
        // 634
        question: "What is the most common site of GIST?",
        options: [
          "Stomach",
          "Liver",
          "Kidney",
          "Brain"
        ],
        answer: 0, // Correct answer: Stomach
      },
      {
        // 635
        question: "What is the most common site of lymphoma of GIST?",
        options: [
          "Stomach",
          "Duodenum",
          "Ileum",
          "Colon"
        ],
        answer: 0, // Correct answer: Stomach
      },
      {
        // 636
        question: "The most common cause of intestinal obstruction in infants is:",
        options: [
          "Intussusception",
          "Congenital bands",
          "Necrotising enterocolitis",
          "Sigmoid volvulus"
        ],
        answer: 0, // Correct answer: Intussusception
      },
      {
        // 637
        question: "The vessel which needs to be ligated in a patient with a bleeding peptic duodenal ulcer is:",
        options: [
          "Left gastroepiploic artery",
          "Gastroduodenal artery",
          "Left gastric artery",
          "Superior Pancreatico-duodenal artery"
        ],
        answer: 1, // Correct answer: Gastroduodenal artery
      },
      {
        // 638
        question: "All the following are True regarding FAST-EXCEPT.",
        options: [
          "It cannot reliably exclude injury in penetrating trauma",
          "It detects free fluid in the abdomen or pericardium",
          "It is accurate in detecting <50 ml of free blood",
          "It is focused abdominal sonar for trauma"
        ],
        answer: 2, // Correct answer: It is accurate in detecting <50 ml of free blood
      },
      {
        // 639
        question: "Wolfe Graft is:",
        options: [
          "Thin split thickness graft",
          "Medium thickness split thickness skin graft",
          "Full thickness skin graft",
          "Thick split thickness skin graft"
        ],
        answer: 1, // Correct answer: Medium thickness split thickness skin graft
      },
      {
        // 640
        question: "Pringle maneuver may be required for treatment of:",
        options: [
          "Bleeding Esophageal Varices",
          "Mesenteric Ischemia",
          "Injury to Tail of Pancreas",
          "Liver Laceration"
        ],
        answer: 3, // Correct answer: Liver Laceration
      },
      {
        // 641
        question: "Optional timing of administration of prophylactic antibiotic for surgical patients is:",
        options: [
          "One hour prior to induction of anaesthesia",
          "At the induction of anaesthesia",
          "Any time during the surgical procedure",
          "One hour after induction"
        ],
        answer: 1, // Correct answer: One hour prior to induction of anaesthesia
      },
      {
        // 642
        question: "What is the raw material used in nylon suture?",
        options: [
          "Polyester polymer",
          "Polyamide polymer",
          "Polyethylene terephthalate",
          "Polybutylene terephthalate"
        ],
        answer: 1, // Correct answer: Polyamide polymer
      },
      {
        // 643
        question: "All the following statements are true regarding torsion of testis; EXCEPT",
        options: [
          "Anatomical abnormality is unilateral and contralateral testis should not be fixed",
          "Prompt exploration and twisting & fixation is the only way to save the torted testis",
          "Most common between 10 & 25 years of age",
          "Inversion of testis is the most common predisposing cause"
        ],
        answer: 0, // Correct answer: Inversion of testis is the most common predisposing cause
      },
      {
        // 644
        question: "'Fifth vital sign' commonly elicited by anaesthesiologists on surgical patients is:",
        options: [
          "FiO2",
          "Pain",
          "Core temperature",
          "Blood pressure"
        ],
        answer: 1, // Correct answer: Pain
      },
      {
        // 645
        question: "The most common cancer of oral cavity is",
        options: [
          "Adenocarcinoma",
          "Melanoma",
          "Sarcoma",
          "Squamous cell carcinoma"
        ],
        answer: 3, // Correct answer: Squamous cell carcinoma
      },
      {
        // 646
        question: "Barrett's esophagus is diagnosed by",
        options: [
          "Squamous metaplasia",
          "Intestinal metaplasia",
          "Squamous dysplasia",
          "Intestinal dysplasia"
        ],
        answer: 1, // Correct answer: Intestinal metaplasia
      },
      {
        // 647
        question: "Boerhaave's syndrome is due to?",
        options: [
          "Drug induced esophagus perforation",
          "Corrosive injury",
          "Spontaneous perforation",
          "Gastroesophageal reflux disease"
        ],
        answer: 2, // Correct answer: Spontaneous perforation
      },
      {
        // 648
        question: "Which one of the following is not a treatment of Gastroesophageal Variceal hemorrhage?",
        options: [
          "Sclerotherapy",
          "Sengstaken tube",
          "Trans-jugular intrahepatic Porta-caval shunt",
          "Gastric freezing"
        ],
        answer: 3, // Correct answer: Gastric freezing
      },
      {
        // 649
        question: "'Limey bile' is?",
        options: [
          "Present in the CBD",
          "Thin and clear",
          "Like toothpaste emulsion in the gallbladder",
          "Bacteria rich"
        ],
        answer: 2, // Correct answer: Like toothpaste emulsion in the gallbladder
      }
            
    ],
  },
};

// Function to load quiz questions based on the selected category and subcategory
function loadQuiz(category, subcategory) {
  const quizStartTime = new Date().getTime();

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

      optionInput.addEventListener("change", () => {
        const inputs = optionsDiv.querySelectorAll('input[type="radio"]');
        inputs.forEach((input) => {
          const label = input.parentElement;
          const feedback = label.querySelector(".feedback");
          if (feedback) feedback.remove();
          label.style.border = "";
        });

        const feedbackIcon = document.createElement("span");
        feedbackIcon.classList.add("feedback");
        feedbackIcon.style.marginLeft = "10px";
        const label = optionInput.parentElement;

        if (parseInt(optionInput.value) === q.answer) {
          // Fill the background with green for correct answers
          label.style.backgroundColor = "green";
          label.style.color = "white"; // Change text color for better visibility
          label.style.border = "3px solid green";
          inputs.forEach((input) => (input.disabled = true)); // Disable all inputs after selection
        } else {
          // Fill the background with red for incorrect answers
          label.style.backgroundColor = "red";
          label.style.color = "white"; // Change text color for better visibility
          label.style.border = "3px solid red";
          optionInput.disabled = true; // Disable only the incorrect input

          // Highlight the correct answer with green
          inputs.forEach((input) => {
            if (parseInt(input.value) === q.answer) {
              const correctLabel = input.parentElement;
              correctLabel.style.backgroundColor = "green";
              correctLabel.style.color = "white"; // Change text color for better visibility
              correctLabel.style.border = "2px solid green";
            }
          });

          // Disable all inputs after selection
          inputs.forEach((input) => (input.disabled = true));
        }

        label.appendChild(feedbackIcon);
      });

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
      optionsDiv.appendChild(optionLabel);
    });

    questionDiv.appendChild(optionsDiv);
    questionDiv.style.borderBottom = "1px solid black";
    questionDiv.style.paddingBottom = "10px";
    questionDiv.style.marginBottom = "20px";
    questionsDiv.appendChild(questionDiv);
  });

  quizContainer.classList.remove("hidden"); // Show the quiz once questions are loaded
}

// Function to submit the quiz and calculate the score
let quizStartTime; // Declare quizStartTime globally to capture start time

function loadQuiz(category, subcategory) {
  quizStartTime = new Date().getTime(); // Record start time here

  const quizContainer = document.getElementById("quiz-container");
  const questionsDiv = document.getElementById("questions");
  questionsDiv.innerHTML = ""; // Clear any previous quiz questions

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

      optionInput.addEventListener("change", () => {
        const inputs = optionsDiv.querySelectorAll('input[type="radio"]');
        inputs.forEach((input) => {
          const label = input.parentElement;
          const feedback = label.querySelector(".feedback");
          if (feedback) feedback.remove();
          label.style.border = "";
        });

        const feedbackIcon = document.createElement("span");
        feedbackIcon.classList.add("feedback");
        feedbackIcon.style.marginLeft = "10px";
        const label = optionInput.parentElement;

        if (parseInt(optionInput.value) === q.answer) {
          label.style.backgroundColor = "green";
          label.style.color = "white";
          label.style.border = "3px solid green";
          inputs.forEach((input) => (input.disabled = true));
        } else {
          label.style.backgroundColor = "red";
          label.style.color = "white";
          label.style.border = "3px solid red";
          optionInput.disabled = true;

          inputs.forEach((input) => {
            if (parseInt(input.value) === q.answer) {
              const correctLabel = input.parentElement;
              correctLabel.style.backgroundColor = "green";
              correctLabel.style.color = "white";
              correctLabel.style.border = "2px solid green";
            }
          });

          inputs.forEach((input) => (input.disabled = true));
        }

        label.appendChild(feedbackIcon);
      });

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
      optionsDiv.appendChild(optionLabel);
    });

    questionDiv.appendChild(optionsDiv);
    questionDiv.style.borderBottom = "1px solid black";
    questionDiv.style.paddingBottom = "10px";
    questionDiv.style.marginBottom = "20px";
    questionsDiv.appendChild(questionDiv);
  });

  quizContainer.classList.remove("hidden");
}

function submitQuiz() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const subcategory = params.get("subcategory");

  if (!quizData[category] || !quizData[category][subcategory]) {
    alert("No quiz data found for the selected category and subcategory.");
    return;
  }

  const totalQuestions = quizData[category][subcategory].length;
  let score = 0;

  quizData[category][subcategory].forEach((q, index) => {
    const selectedOption = document.querySelector(
      `input[name="question-${index}"]:checked`
    );
    if (selectedOption && parseInt(selectedOption.value) === q.answer) {
      score++;
    }
  });

  const quizEndTime = new Date().getTime(); // Calculate end time
  const timeTaken = Math.floor((quizEndTime - quizStartTime) / 1000); // Time in seconds

  window.location.href = `result.html?score=${score}&total=${totalQuestions}&time=${timeTaken}`;
}

// Function to handle result page URL and display the score
function displayResult() {
  const urlParams = new URLSearchParams(window.location.search);
  const score = urlParams.get("score");
  const total = urlParams.get("total");

  if (score !== null && total !== null) {
    document.getElementById(
      "result"
    ).innerText = `You scored ${score} out of ${total}`;
  } else {
    document.getElementById("result").innerText = "No score available.";
  }
}
