import webdevelopment from '../assets/code.png'
import ml from '../assets/ml.png'
import cloudService from '../assets/server.png'
import UIUX from "../assets/UIUX.png"
import APPdev from '../assets/app.png'
import RAG from '../assets/project/RAG.png'
import AWS from '../assets/project/awslogo.png'

const cards = [
  {
    title: "Web App Development",
    content:
      "Our custom web development services include both front-end and back-end development. Whether it is enhancing an existing app or architecting an enterprise app, our developers are up for the challenge.",
    image: webdevelopment,
  },
  {
    title: "Model Building (ML)",
    content:
      "Our services include comprehensive steps such as data collection, preprocessing, model building, and deployment. We can integrate models into your website or use various Python frameworks. The choice of libraries and tools will be tailored to meet your specific needs.",
    image: ml,
  },
  {
    title: "Cloud Services",
    content:
      "We leverage AWS's robust cloud infrastructure to ensure scalable, secure, and efficient solutions tailored to meet your specific needs. Whether integrating models into your website or using various AWS services, we customize our approach based on your preferences.",
    image: cloudService,
  },
  {
    title: "UI/UX Design",
    content:
      "Our design services ensure your website is not only functional but also beautiful, providing an exceptional user experience.",
    image: UIUX,
  },
  {
    title: "App Development",
    content:
      "We offer end-to-end app development services for both mobile and web platforms. From design to deployment, our team builds user-friendly, high-performance apps using the latest technologies like React Native and Flutter. Whether you need a new app or an upgrade, we deliver solutions tailored to your business needs.",
    image: APPdev,
  },
];



const cardData = [
  {
    icon: webdevelopment, 
    title: "Smart Garbage Management System",
    description:
      "We've crafted a Smart Garbage Management System for our client, featuring a React.js front-end and a Node.js and Express backend. Our unique solution integrates hardware and sensors to gather real-time data from garbage collectors, enhancing waste disposal efficiency and promoting environmental sustainability.",
  },
  {
    icon: RAG, 
    title: "RAG On Complex PDF Using LlamaParse, Langchain And Groq",
    description:
      "This project develops a Retrieval-Augmented Generation (RAG) system for complex PDFs using LlamaParse, LangChain, and Groq. LlamaParse parses intricate documents, LangChain manages language model interactions, and Groq ensures efficient processing. Together, they create a system that accurately extracts and responds to queries from detailed PDF content, enhancing data retrieval and knowledge extraction.",
  },
  {
    icon: AWS,
    title: "Develop A Scalable E-Commerce Website Using Elastic Beanstalk For Deployment",
    description:
      "By leveraging AWS Elastic Beanstalk, we focused on developing an e-commerce application while AWS handles the infrastructure management. Elastic Beanstalk automatically scales the application, manages load balancing, and monitors health, making it an ideal platform for deploying scalable web applications. Integrating other AWS services like RDS, S3, CloudFront, and ElastiCache enhances the performance and reliability of the e-commerce website.",
  },
];


export { cards ,cardData}
