import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from "./styles/firstSection.module.css";
import Image from 'next/image';

export default function QuestionsSection({slug}) {
    const questionSectionRef = useRef();

    const chatlog = useRef([
    {"role": "system", "content": `You are a helpful assistant that answers questions on ${slug.split("-")[0]} on a website called Food Hub`},
    ])

    const [aiQuestion, setAiQuestion] = useState("");

    const [questionsAsked, setQuestionsAsked] = useState([]);

    const [answerLoading, setAnswerLoading] = useState(false);

    const [profileImageUrl, setProfileImageUrl] = useState("");
  
    const askAiQuestion = async (e) => {
        e.preventDefault();

        if(aiQuestion !== ""){
            setAnswerLoading(true);

            var previous_question = aiQuestion;

            setAiQuestion("");

            var oldQuestions = [...questionsAsked];

            oldQuestions.push({"role": "user", "message": previous_question});

            setQuestionsAsked(oldQuestions);

            var myHeaders = new Headers();

            myHeaders.append("Authorization", `Token ${process.env.NEXT_PUBLIC_TOKEN}`);

            var formdata = new FormData();
            
            chatlog.current.push({"role": "user", "content": previous_question});

            formdata.append("question", JSON.stringify(chatlog.current));

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
            };

            var res = await fetch(`${process.env.NEXT_PUBLIC_API}food/askAIQuestion`, requestOptions)

            var data = await res.json();

            // var oldQuestions = [...questionsAsked]

            // oldQuestions.push({"role": "user", "message": previous_question})

            oldQuestions.push({"role": "assistant", "message": data["response"]})

            setQuestionsAsked(oldQuestions);

            chatlog.current.push({"role": "assistant", "content": data["response"]});

            setAnswerLoading(false);
        }
    }

    useEffect(()=>{
      var profile_image = localStorage.getItem("profile_image");
  
      if(profile_image !== null){
        setProfileImageUrl(JSON.parse(profile_image)["profile_image"]);
      }
    }, [])

    return (
        <div className={styles.chat_and_ai_button_container}>
        <div ref={questionSectionRef} className={styles.questionSection}>
          <h2>AI Assistant</h2>

          <form onSubmit={(e)=>{askAiQuestion(e)}} method='post' className={styles.message_content_section}>
            <div className={styles.chat_window}>
              <div className={styles.output}>
                {
                    questionsAsked.length == 0 ?
                    <p className={styles.no_question}>Please ask any question to our helpful assistant</p>
                    :
                    questionsAsked.map((question, index)=>
                        <div key={index} className={styles.profile_container}>
                            {
                                question.role !== "user" ?
                                <div className={styles.profile_pic}></div>
                                :
                                <div className={styles.profile_pic2}>
                                    {/* <img src="/placeholder.png" alt="Profile Image" /> */}
                                    <Image
                                      src={profileImageUrl}
                                      alt='Profile Image'
                                      height={100}
                                      width={100}
                                    />
                                </div>
                            }
                            <p>:</p>
                            <p className={styles.response}>{question.message}</p>
                        </div>
                    )
                }
                {
                    answerLoading == true &&
                    <p className={styles.no_question}>Please wait...</p>
                }
              </div>
            </div>

            <div className={styles.message_compose_section}>
              <input value={aiQuestion} onChange={(e)=>{setAiQuestion(e.target.value)}} className={styles.message} type="text" placeholder={`Ask about ${slug.split("-")[0]}`} />
              <button className={styles.send}>Send</button>
            </div>
          </form>
        </div>

        <div className={styles.ai_button_container}>
          <p>AI Chat</p>
          <div onClick={(e)=>{
            if(questionSectionRef.current.style.display == "none" || questionSectionRef.current.style.display == ""){
              questionSectionRef.current.style.display = "block";
            }else{
              questionSectionRef.current.style.display = "none";
            }
          }} className={styles.ai_chat_button}>
            <img src="/logo2.png" alt="Chat logo" />
          </div>
        </div>
      </div>
    )
}
