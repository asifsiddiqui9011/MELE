 import webdevelopment from "../assets/code.png";
// import ml from "../assets/ml.png";
// import cloudService from "../assets/server.png";
// import UIUX from "../assets/UIUX.png";
// import APPdev from "../assets/app.png";
import RAG from "../assets/project/RAG.png";
import AWS from "../assets/project/awslogo.png";
//import img from '../../assets/project/awslogo.png'
import cloud from '../assets/cards/cloud.jpg'
import app from '../assets/cards/app.jpg'
import web from '../assets/cards/web.jpg'
import ml from '../assets/cards/ml.jpg'
import uiux from '../assets/cards/uxui.jpg'
import pdf from '../assets/project/pdf.jpg'
import eCommerce from '../assets/project/eCommerce.jpg'
import library from '../assets/project/libraryManagement.jpg'
import course from '../assets/project/libraryManagement.jpg'
import hindiLetter from '../assets/project/pdf.jpg'
import emotionDetection from '../assets/project/faceRecognition.jpg'
import image from '../assets/project/imageClassification.jpg'
import disease from '../assets/project/diseasePrediction.jpg'
import loan from '../assets/project/loanPrediction.jpg'


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

const cardData = [
  {
    icon: webdevelopment,
    image:pdf,
    title: "Smart Garbage Management System",
    description:
      "We've crafted a Smart Garbage Management System for our client, featuring a React.js front-end and a Node.js and Express backend. Our unique solution integrates hardware and sensors to gather real-time data from garbage collectors, enhancing waste disposal efficiency and promoting environmental sustainability.",
  },
  {
    icon: RAG,
    image:pdf,
    title: "RAG On Complex PDF Using LlamaParse, Langchain And Groq",
    description:
      "This project develops a Retrieval-Augmented Generation (RAG) system for complex PDFs using LlamaParse, LangChain, and Groq. LlamaParse parses intricate documents, LangChain manages language model interactions, and Groq ensures efficient processing. Together, they create a system that accurately extracts and responds to queries from detailed PDF content, enhancing data retrieval and knowledge extraction.",
  },
  {
    icon: AWS,
    image:eCommerce,
    title:
      "Develop A Scalable E-Commerce Website Using Elastic Beanstalk For Deployment",
    description:
      "By leveraging AWS Elastic Beanstalk, we focused on developing an e-commerce application while AWS handles the infrastructure management. Elastic Beanstalk automatically scales the application, manages load balancing, and monitors health, making it an ideal platform for deploying scalable web applications. Integrating other AWS services like RDS, S3, CloudFront, and ElastiCache enhances the performance and reliability of the e-commerce website.",
  },
  {
    image:disease,
    title:"Disease Prediction System",
    description:"A Disease Prediction System uses machine learning and data analysis to forecast the likelihood of diseases based on patient data such as medical history, lifestyle, and genetic factors. It enables early detection, helping healthcare providers to offer personalized treatments and take preventive measures, ultimately improving patient outcomes and reducing healthcare costs."
  },
  {
    image:library,
    title:"Library Management system",
    description:"A Library Management System is software designed to manage and automate the daily operations of a library. It helps in organizing, tracking, and managing books, users, and transactions such as borrowing and returning. The system enhances efficiency by streamlining cataloging, inventory management, and member services, making it easier for libraries to provide a seamless experience to users."
  },
  {
    image:loan,
    title:"Loan Prediction system",
    description:"A Loan Prediction System uses data analysis and machine learning to predict the likelihood of loan approval based on factors such as applicant income, credit score, employment history, and other financial data. It helps financial institutions automate the loan approval process, reduce risks, and make faster, more informed lending decisions. This system improves accuracy and efficiency while enhancing the customer experience."
  },
  {
    image:emotionDetection,
    title:"Emotion Detection System",
    description:"An Emotion Detection System utilizes artificial intelligence and machine learning to analyze facial expressions, voice tones, text, or physiological signals to identify human emotions such as happiness, sadness, anger, or fear. This technology is used in various applications, including customer service, mental health monitoring, and user experience enhancement, to better understand and respond to human feelings in real time."
  },
  {
    image:image,
    title:"Image Classification System",
    description:"An Image Classification System uses machine learning algorithms to categorize images into predefined classes or labels. By analyzing patterns, features, and visual data in images, the system can accurately identify objects, scenes, or activities. Image classification is widely used in fields such as healthcare (for medical image analysis), security (for facial recognition), and retail (for product categorization), making it an essential tool in automating and enhancing visual data processing."
  },
  {
    image:pdf,
    title:"Gramatical Error Prediction System",
    description:"A Grammatical Error Prediction System uses natural language processing (NLP) and machine learning algorithms to identify and predict potential grammar, punctuation, and syntax errors in written text. It helps users by providing real-time feedback and suggesting corrections, improving the overall quality and clarity of the writing. This system is commonly used in educational tools, writing assistants, and content creation platforms to enhance communication and language proficiency."
  },
  {
    image:hindiLetter,
    title:"Hindi Letter Detection",
    description:"A Hindi Letter Classification System uses machine learning techniques to automatically recognize and categorize Hindi characters from handwritten or printed text. By analyzing the shapes and patterns of Devanagari script, this system can accurately identify individual letters and improve tasks like document digitization, text recognition, and language processing. It is widely used in educational tools, OCR (Optical Character Recognition) applications, and language translation systems to facilitate the processing of Hindi text."
  },
  {
    image:course,
    title:"Course Recommendation System",
    description:"A Course Recommendation System utilizes data analysis and machine learning algorithms to suggest personalized courses to users based on their interests, academic history, learning goals, and preferences. It can analyze patterns such as previously completed courses, ratings, or peer feedback to deliver relevant suggestions, improving the learning experience. These systems are commonly used in e-learning platforms, helping students discover courses that best match their needs and skills, thereby enhancing engagement and knowledge growth."
  }
];

export { cards, cardData };
