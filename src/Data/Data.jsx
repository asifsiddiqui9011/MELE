 import webdevelopment from "../assets/code.png";
// import ml from "../assets/ml.png";
// import cloudService from "../assets/server.png";
// import UIUX from "../assets/UIUX.png";
// import APPdev from "../assets/app.png";
import RAG from "../assets/project/RAG.png";
import AWS from "../assets/project/awslogo.png";

//our servivce images
import cloud from '../assets/cards/cloud.jpg'
import app from '../assets/cards/app.jpg'
import web from '../assets/cards/web.jpg'
import ml from '../assets/cards/ml.jpg'
import uiux from '../assets/cards/uxui.jpg'

//projects images
import pdf from '../assets/project/pdf.jpg'
import eCommerce from '../assets/project/eCommerce.jpg'
import library from '../assets/project/libraryManagement.jpg'
import course from '../assets/project/courseRecommendation.jpg'
import hindiLetter from '../assets/project/hindiletter.jpg'
import emotionDetection from '../assets/project/emotionDetection.jpg'
import image from '../assets/project/imageClassification.jpg'
import disease from '../assets/project/diseasePrediction.jpg'
import loan from '../assets/project/loanPrediction.jpg'
import tempoHouse from '../assets/project/tempohouse.jpg'
import grammar from '../assets/project/grmmaticalError.jpg'
import garbage from '../assets/project/garbagmanagement.jpg'
import faceRecognition from '../assets/project/faceRecognition.jpg'


const cards = [
  {
    title: "Web App Development",
    desc: "Our custom web development services include both front-end and back-end development. Whether it is enhancing an existing app or architecting an enterprise app, our developers are up for the challenge.",
    image: web,
  },
  {
    title: "Model Building (ML)",
    desc: "Our services include comprehensive steps such as data collection, preprocessing, model building, and deployment. We can integrate models into your website or use various Python frameworks. The choice of libraries and tools will be tailored to meet your specific needs.",
    image: ml,
  },
  {
    title: "Cloud Services",
    desc: "We leverage AWS's robust cloud infrastructure to ensure scalable, secure, and efficient solutions tailored to meet your specific needs. Whether integrating models into your website or using various AWS services, we customize our approach based on your preferences.",
    image: cloud,
  },
  {
    title: "UI/UX Design",
    desc: "Our design services ensure your website is not only functional but also beautiful, providing an exceptional delightful user experiences that resonate, Balancing aesthetics and usability for seamless digital journeys. ",
    image:uiux,
  },
  {
    title: "App Development",
    desc: "We offer end-to-end app development services for both mobile and web platforms. From design to deployment, our team builds user-friendly, high-performance apps using the latest technologies like React Native and Flutter. Whether you need a new app or an upgrade, we deliver solutions tailored to your business needs.",
    image: app,
  },
];

const projectsData = [
  {
    icon: webdevelopment,
    image:garbage,
    title: "Smart Garbage Management System",
    description:
      "We've crafted a Smart Garbage Management System for our client, featuring a React.js front-end and a Node.js and Express backend. Our unique solution integrates hardware and sensors to gather real-time data from garbage collectors, enhancing waste disposal efficiency and promoting environmental sustainability.",
     features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    icon: RAG,
    image:pdf,
    title: "RAG On Complex PDF Using LlamaParse, Langchain And Groq",
    description:"This project develops a Retrieval-Augmented Generation (RAG) system for complex PDFs using LlamaParse, LangChain, and Groq. LlamaParse parses intricate documents, LangChain manages language model interactions, and Groq ensures efficient processing. Together, they create a system that accurately extracts and responds to queries from detailed PDF content, enhancing data retrieval and knowledge extraction.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    icon: AWS,
    image:eCommerce,
    title:"Develop A Scalable E-Commerce Website Using Elastic Beanstalk For Deployment",
    description:"By leveraging AWS Elastic Beanstalk, we focused on developing an e-commerce application while AWS handles the infrastructure management. Elastic Beanstalk automatically scales the application, manages load balancing, and monitors health, making it an ideal platform for deploying scalable web applications. Integrating other AWS services like RDS, S3, CloudFront, and ElastiCache enhances the performance and reliability of the e-commerce website.",
   features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    image:disease,
    title:"Disease Prediction System",
    description:"It is a Glaucoma Disease Prediction System uses machine learning and medical imaging analysis to predict the likelihood of glaucoma, a condition that causes damage to the optic nerve and can lead to vision loss. By analyzing patient data such as retinal images, intraocular pressure, and other risk factors, the system helps in early detection and prevention. This assists healthcare professionals in diagnosing glaucoma at an early stage, allowing for timely intervention and treatment to prevent further vision impairment.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    image:library,
    title:"Library Management system",
    description:"A Library Management System is software designed to manage and automate the daily operations of a library. It helps in organizing, tracking, and managing books, users, and transactions such as borrowing and returning. The system enhances efficiency by streamlining cataloging, inventory management, and member services, making it easier for libraries to provide a seamless experience to users.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    image:loan,
    title:"Loan Prediction system",
    description:"A Loan Prediction System uses data analysis and machine learning to predict the likelihood of loan approval based on factors such as applicant income, credit score, employment history, and other financial data. It helps financial institutions automate the loan approval process, reduce risks, and make faster, more informed lending decisions. This system improves accuracy and efficiency while enhancing the customer experience.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    image:emotionDetection,
    title:"Emotion Detection System",
    description:"An Emotion Detection System utilizes artificial intelligence and machine learning to analyze facial expressions, voice tones, text, or physiological signals to identify human emotions such as happiness, sadness, anger, or fear. This technology is used in various applications, including customer service, mental health monitoring, and user experience enhancement, to better understand and respond to human feelings in real time.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    image:image,
    title:"Image Classification System",
    description:"An Image Classification System uses machine learning algorithms to categorize images into predefined classes or labels. By analyzing patterns, features, and visual data in images, the system can accurately identify objects, scenes, or activities. Image classification is widely used in fields such as healthcare (for medical image analysis), security (for facial recognition), and retail (for product categorization), making it an essential tool in automating and enhancing visual data processing.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    image:grammar,
    title:"Gramatical Error Prediction System",
    description:"A Grammatical Error Prediction System uses natural language processing (NLP) and machine learning algorithms to identify and predict potential grammar, punctuation, and syntax errors in written text. It helps users by providing real-time feedback and suggesting corrections, improving the overall quality and clarity of the writing. This system is commonly used in educational tools, writing assistants, and content creation platforms to enhance communication and language proficiency.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    image:hindiLetter,
    title:"Hindi Letter Detection",
    description:"A Hindi Letter Classification System uses machine learning techniques to automatically recognize and categorize Hindi characters from handwritten or printed text. By analyzing the shapes and patterns of Devanagari script, this system can accurately identify individual letters and improve tasks like document digitization, text recognition, and language processing. It is widely used in educational tools, OCR (Optical Character Recognition) applications, and language translation systems to facilitate the processing of Hindi text.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    image:course,
    title:"Course Recommendation System",
    description:"A Course Recommendation System utilizes data analysis and machine learning algorithms to suggest personalized courses to users based on their interests, academic history, learning goals, and preferences. It can analyze patterns such as previously completed courses, ratings, or peer feedback to deliver relevant suggestions, improving the learning experience. These systems are commonly used in e-learning platforms, helping students discover courses that best match their needs and skills, thereby enhancing engagement and knowledge growth.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    image:tempoHouse,
    title:"Tempo House E-commerce website",
    description:"It is an Automobile E-commerce Website enables users to browse, compare, and purchase vehicles online. It offers a seamless platform for customers to explore a wide range of new and used cars, view detailed specifications, compare models, and read customer reviews. With features like advanced search filters, virtual showrooms, financing options, and online booking, the website simplifies the car buying process. Additionally, integration of AI-driven tools for personalized recommendations and virtual assistance enhances user experience, making it a one-stop solution for automobile shopping.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  },
  {
    image:faceRecognition,
    title:"Face Recognition Attendence System",
    description:"A Face Recognition Attendance System uses facial recognition technology to automatically record attendance by identifying individuals based on their facial features. It captures real-time images of individuals and matches them against a pre-stored database of registered faces to mark attendance. This system is widely used in workplaces, schools, and events, offering a more efficient, contactless, and accurate alternative to traditional methods like manual roll calls or biometric scans, improving security and streamlining attendance management.",
    features: [
      "Real-time monitoring",
      "Efficient waste disposal",
      "Environmental sustainability",
    ],
    reviews: [
      {
        user: "Alice Johnson",
        rating: 5,
        review: "Incredible system, it made our waste management seamless and efficient.",
      },
      {
        user: "Mark Williams",
        rating: 4,
        review: "Great project, but it could use a few more optimization features.",
      },
    ],
  }
]

export { cards, projectsData };
