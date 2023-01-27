import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {RxCross2} from "react-icons/rx";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import Image from "next/image";
import abhi from "../public/dev-abhi-wave.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import Dataanalysis from "../public/Data analysis.jpg";
import Numpy from "../public/Numpy.jpg";
import Pandas from "../public/Data analysis.jpg";
import Matplotlib from "../public/Data analysis.jpg";
import Seaborn from "../public/Data analysis.jpg";
import MachineLearning from "../public/Machine Learning.jpg";
import ScikitLearn from "../public/Scikit Learn.jpg";
import DeepLearning from "../public/Deep Learning.jpg";
import Pytorch from "../public/Pytorch.jpg";
import TensorFlow from "../public/TensorFlow.jpg";
import NaturalLanguageProcessing from "../public/Natural Language Processing.jpg";
import Spacy from "../public/spacy.jpg";
import NLTK from "../public/NLTK.jpg";
import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showsidebar, setshowsidebar ] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jeshmitha Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen ">
          <nav className="fixed top-0 left-0 bg-white w-full shadow p-4 z-40">
            {/*<h1 className="text-xl font-burtons dark:text-white"> 
              developedbyJesmitha
           </h1>*/}
            <div className=" flex justify-between items-center ">
            <span className="text-xl font-burtons dark:text-white cursor-pointer">
              developedbyJesmitha
            </span>
            <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
            <li className="mx-4 my-6 md:my-0">
                <a className="text-xl text-gray-800 hover:text-cyan-500 duration-500 no-underline "
                  href="#skill">Skills </a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a className="text-xl text-gray-800 hover:text-cyan-500 duration-500 no-underline"
                  href="#career">Career </a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a className="text-xl text-gray-800 hover:text-cyan-500 duration-500 no-underline"
                  href="#portfolio">Portfolio </a>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <a className="text-xl text-gray-800 hover:text-cyan-500 duration-500 no-underline"
                  href="#getintouch">Get in Touch</a>
              </li>
              {/* <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li> */}
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 no-underline"
                  href="/Resume_Jeshmitha.pdf"
                  download >
                  Resume
                </a>
              </li>
              
            </ul>
            <button onClick={(e)=>setshowsidebar(true)} className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group relative"> 
              <div className="w-5 h-1 bg-gray-600 mb-1"> </div>
              <div className="w-5 h-1 bg-gray-600 mb-1"> </div>
              <div className="w-5 h-1 bg-gray-600"> </div>
              
            </button>
            <div className={`fixed top-0  -right-full h-screen w-8/12 bg-white border transform transition-all duration-300 ${showsidebar && "right-0" }`}> 
               <button onClick={(e)=>setshowsidebar(false)} className=" text-2xl absolute right-4 top-4 cursor-pointer"> <RxCross2></RxCross2> </button> 
               <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
               <a className="no-underline text-gray-800" href="#skill" > <li className="hover:bg-gray-200 py-4 px-6 w-full">Skills </li> </a>
                <a className="no-underline text-gray-800" href="#career" ><li className="hover:bg-gray-200 py-4 px-6 w-full">Career </li></a>
               <a className="no-underline text-gray-800" href="#portfolio"><li className="hover:bg-gray-200 py-4 px-6 w-full">Portfolio</li></a>
               <a className="no-underline text-gray-800" href="#getintouch"><li className="hover:bg-gray-200 py-4 px-6 w-full">Get in Touch </li></a>
                <a className="no-underline text-gray-800" href="/Resume_Jeshmitha.pdf" download><li className="hover:bg-gray-200 py-4 px-6 w-full">Resume</li></a>
               </ul>
              </div>
            </div>
          </nav>
          {/*<script> 
            function Menu(e){

              let list =document.querySelector('ul');
               e.name ==='menu' ? (e.name="close" ,list.classlist.add('top-[80px]'),list.classlist.add('')) : e.name ="menu",list.classList.remove('top-[80px]'))
            }
          </script>*/}
          <div className="text-center mt-28">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Jesmitha Gunuganthi
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Machine Learning Researcher.
            </h3>
            <p className="text-md py-3 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              I am a data scientist and generative artist. Previously I went to
              National University of Singapore, EPFL and Duke University.
            </p>
            <p className="text-md py-3 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Besides data science and data storytelling, I also like
              contemporary art and travelling.
            </p>
            <p className="text-md py-3 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Having lived in China, Singapore, Switzerland and the United
              States, I understand English, Chinese and French.
            </p>
            <p className="text-md py-3 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              I have given talks and workshops such as Introduction To
              Visualization for Women Who Code and Drawing with Data Workshop at
              Airbnb APAC.
            </p>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:text-white">
            <Image alt=" " src={abhi} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section className="pt-28" id="skill" >
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Skills :</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 dark:text-white">
            <div className="flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                alt=" "
                className="rounded-md"
                src={Dataanalysis}
                width={150}
                height={150}
              />
              <h3 className=" text-gray-800 text-lg font-medium pt-8 pb-2">
                {" "}
                Data Analysis Using{" "}
              </h3>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Numpy{" "}
                <Image alt=" " src={"/Numpy.jpg"} width={30} height={30} />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Pandas{" "}
                <Image alt=" " src={"/Pandas.jpg"} width={80} height={80} />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Matplotlib
                <Image alt=" " src={"/Matplotlib.jpg"} width={80} height={80} />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Seaborn
                <Image alt=" " src={"/seaborn.jpg"} width={50} height={50} />
              </p>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                alt=" "
                className="rounded-md"
                src={MachineLearning}
                width={150}
                height={150}
              />
              <h3 className=" text-gray-800 text-lg font-medium pt-8 pb-2">
                {" "}
                Machine Learning{" "}
              </h3>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Scikit Learn
                <Image
                  alt=" "
                  src={"/Scikit Learn.jpg"}
                  width={120}
                  height={120}
                />
              </p>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                alt=" "
                className="rounded-md"
                src={DeepLearning}
                width={150}
                height={150}
              />
              <h3 className=" text-gray-800 text-lg font-medium pt-8 pb-2 ">
                {" "}
                Deep Learning Using{" "}
              </h3>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                PyTorch
                <Image alt=" " src={"/Pytorch.jpg"} width={80} height={80} />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                TensorFlow
                <Image alt=" " src={"/TensorFLow.jpg"} width={80} height={80} />
              </p>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                alt=" "
                src={"/Natural Language Processing.jpg"}
                width={100}
                height={100}
                className="rounded-md"
              />
              <h3 className="text-gray-800 text-lg font-medium pt-8 pb-2 ">
                {" "}
                NLP(Natural language Processing) Using
              </h3>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                NLTK
                <Image
                  className="rounded-md"
                  alt=" "
                  src={"/NLTK.jpg"}
                  width={70}
                  height={70}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                SpaCy
                <Image alt=" " src={"/Spacy.jpg"} width={70} height={70} />
              </p>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image alt=" " src={code} width={100} height={100} />
              <h3 className="text-gray-800 text-lg font-medium pt-8 pb-2 ">
                {" "}
                Programming & Data Structures
              </h3>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Python
                <Image
                  className="rounded-md"
                  alt=" "
                  src={"/Python-logo-notext.svg.png"}
                  width={40}
                  height={40}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Java
                <Image
                  className="rounded-md"
                  alt=" "
                  src={"/java-ar21.png"}
                  width={70}
                  height={70}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                C++{" "}
                <Image
                  className="rounded-md"
                  alt=" "
                  src={"/C++-Logo.wine.png"}
                  width={70}
                  height={70}
                />
              </p>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                alt=" "
                src="/coding.jpeg"
                width={100}
                height={50}
                className="rounded-md"
              />
              <h3 className="text-gray-800 text-lg font-medium pt-8 pb-2 ">
                {" "}
                Web Development Using
              </h3>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                HTML
                <Image
                  className="rounded-md"
                  alt=" "
                  src={"/html.webp"}
                  width={30}
                  height={30}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                CSS{" "}
                <Image
                  className="rounded-md"
                  alt=" "
                  src={"/css.webp"}
                  width={30}
                  height={30}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Flask
                <Image
                  className="rounded-md"
                  alt=" "
                  src={"/flask.png"}
                  width={70}
                  height={30}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                SQL
                <Image
                  className="rounded-md"
                  alt=" "
                  src={"/sql.png"}
                  width={50}
                  height={30}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                mongoDB{" "}
                <Image
                  className="rounded-xl"
                  alt=" "
                  src={"/mongodb.png"}
                  width={50}
                  height={30}
                />
              </p>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                alt=" "
                src="/aws.jpeg"
                width={100}
                height={100}
                className="rounded-md"
              />
              <h3 className="text-gray-800 text-lg font-medium pt-8 pb-2 ">
                {" "}
                AWS
              </h3>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Numpy
                <Image
                  className="rounded-xl"
                  alt=" "
                  src={"/Numpy.jpg"}
                  width={30}
                  height={30}
                />
              </p>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                alt=" "
                src="/tools.webp"
                width={100}
                height={100}
                className="rounded-md"
              />
              <h3 className="text-gray-800 text-lg font-medium pt-8 pb-2 ">
                {" "}
                Other tools
              </h3>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Git{" "}
                <Image
                  className="rounded-xl"
                  alt=" "
                  src={"/git.png"}
                  width={60}
                  height={30}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                LINUX
                <Image
                  className="rounded-xl"
                  alt=" "
                  src={"/linux.jpeg"}
                  width={60}
                  height={30}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Docker
                <Image
                  className="rounded-xl"
                  alt=" "
                  src={"/docker.png"}
                  width={70}
                  height={30}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Terraform
                <Image
                  className="rounded-xl"
                  alt=" "
                  src={"/teraform.png"}
                  width={70}
                  height={30}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Jupyter
                <Image
                  className="rounded-xl"
                  alt=" "
                  src={"/jupyter.png"}
                  width={80}
                  height={30}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Visual Studio Code
                <Image
                  className="rounded-xl"
                  alt=" "
                  src={"/vs-code.svg"}
                  width={30}
                  height={30}
                />
              </p>
              <p className=" text-gray-800 py-1 flex gap-2 items-center">
                Pycharm
                <Image
                  className="rounded-xl"
                  alt=" "
                  src={"/pycharm.png"}
                  width={50}
                  height={30}
                />
              </p>
            </div>
          </div>
        </section>
        <section className="pt-28" id="career">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Career :</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"></div>
          <VerticalTimeline lineColor="rgba(13,148,136, 0.7)">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(13,148,136, 0.7)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgba(13,148,136, 0.7)",
              }}
              date="2011 - present"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                padding: "0.5rem",
              }}
              icon={
                <div className="rounded-full mt-1">
                  <img
                    className="rounded-full"
                    src="https://www.pngitem.com/pimgs/m/35-357633_university-of-cincinnati-logo-university-of-cincinnati-college.png"
                    alt="UC"
                  ></img>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title mb-2">
                Machine Learning Researcher
              </h3>
              <div className="mb-2">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Video Summarization</Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <h3 className="vertical-timeline-element-title mb-2">
                Teaching Assistant
              </h3>
              <div>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Machine Learning</Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Cloud Computing</Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Data Structures</Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <p>University of Cincinnati</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(13,148,136, 0.7)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgba(13,148,136, 0.7)",
              }}
              date="2011 - present"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                padding: "0.5rem",
              }}
              icon={
                <div className="rounded-full mt-1">
                  <img
                    className="rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"
                    alt="Amazon Inc."
                  ></img>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title mb-2">
                System Development Intern
              </h3>
              <div className="mb-2">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>SPT Analysis Automation</Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>IRS Enhancement</Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <p>Amazon Inc.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(13,148,136, 0.7)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgba(13,148,136, 0.7)",
              }}
              date="2011 - present"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                padding: "0.5rem",
              }}
              icon={
                <div className="rounded-full mt-1">
                  <img
                    className="rounded-full"
                    src="https://media.glassdoor.com/sqll/235160/qvantel-squarelogo-1454999377271.png"
                    alt="Qvantel"
                  ></img>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title mb-2">
                Chine Learning Engineer [Innovation Team]
              </h3>
              <div className="mb-2">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Trending Analysis of Social Media
                    </Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      AI Chatbot - Customer Support
                    </Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Facebook Messenger Chatbot
                    </Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>AI powered Call Center</Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <p>Qvantel Software Solutions</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(13,148,136, 0.7)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgba(13,148,136, 0.7)",
              }}
              date="2011 - present"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                padding: "0.5rem",
              }}
              icon={
                <div className="rounded-full mt-1">
                  <img
                    className="rounded-full"
                    src="http://www.iiitnr.ac.in/sites/all/themes/iiit/G_300res.png"
                    alt="IIIT"
                  ></img>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title mb-2">
                Machine Learning Intern
              </h3>
              <div className="mb-2">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Machine Health Prediction
                    </Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <p>International Institute of Information Technology (IIIT)</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(13,148,136, 0.7)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgba(13,148,136, 0.7)",
              }}
              date="2011 - present"
              iconStyle={{
                background: "#fff",
                color: "#fff",
                padding: "0.5rem",
              }}
              icon={
                <div className="rounded-full mt-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/1200px-Tech_Mahindra_New_Logo.svg.png"
                    alt="Tech Mahindra"
                  ></img>
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title mb-2">
                Data Science Intern
              </h3>
              <div className="mb-2">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Restaurant Recommendation System
                    </Accordion.Header>
                    <Accordion.Body>
                      Worked on pre-autorization project end-to-end;
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <p>Tech Mahindra Inc.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
        <div> 
        <section className="pt-28" id="portfolio">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio :</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 dark:text-white">
            <div className="flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              
              <h3 className=" text-gray-800 text-lg font-medium pt-8 pb-2">
                {" "}
                Project 1{" "}
              </h3>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className=" text-gray-800 text-lg font-medium pt-8 pb-2">
                {" "}
                Project 2{" "}
              </h3>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className=" text-gray-800 text-lg font-medium pt-8 pb-2 ">
                {" "}
                Project 3{" "}
              </h3>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-gray-800 text-lg font-medium pt-8 pb-2 ">
                {" "}
                Project 4
              </h3>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-gray-800 text-lg font-medium pt-8 pb-2 ">
                {" "}
                Project 5
              </h3>
            </div>
            <div className=" flex  flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-gray-800 text-lg font-medium pt-8 pb-2 ">
                {" "}
                Project 6
              </h3>
            </div>
          </div>
          <section className="pt-28" id="getintouch">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Get in Touch</h3>
          </div>
          <div className="  text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
           <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white" href="https://www.linkedin.com/in/jeshmitha/"> <AiFillLinkedin  /></a>
           <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white" href="https://github.com/jeshmitha"> <AiFillGithub /></a>
           <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white"href="jeshmitha.gunuganti@gmail.com"> <AiFillMail /> </a>
          </div>
          </section>
        </section>
        </div>
      </main>
    </div>
  );
}
