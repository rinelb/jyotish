"use client"
import React from 'react';
import {useState,useEffect} from 'react';
import UseSound from 'use-sound'
import Question from '../data/table/Grahatable.json'
// import mySound from '../data/audio/t_mp3.mp3' // Your sound file path here



const Dummy = ()=>{

    const [newMessage, setNewMessage] = useState(["./ba.mp3","./ba.mp3","./ba.mp3","./ba.mp3"]);
    const [newAns, setNewAns] = useState(["./ba.mp3","./ba.mp3","./ba.mp3","./ba.mp3"]);
    const [s1, setS1] = useState(["../data/audio/ba.mp3","../data/audio/ba.mp3","../data/audio/ba.mp3","../data/audio/ab.mp3"]);
    const [s2, setS2] = useState(["../data/audio/ba.mp3","../data/audio/ba.mp3","../data/audio/ba.mp3","../data/audio/ba.mp3"]);
    const [ buttonNext, setButtonNext ]  = useState("Click here to Start");
    const [showAns, setShowAns] = useState(false);
    const [showQuest, setShowQuest] = useState(false);
 
    const [playSound] = UseSound(s1[0])
    const [playSound1] = UseSound(s1[0])
    const [playSound2] = UseSound(s1[1])
    const [playSound3] = UseSound(s1[2])
    const [playSound4] = UseSound(s1[3])


    const [aplaySound] = UseSound(s2[0])
    const [aplaySound1] = UseSound(s2[0])
    const [aplaySound2] = UseSound(s2[1])
    const [aplaySound3] = UseSound(s2[2])
    const [aplaySound4] = UseSound(s2[3])
    const list = ["Malefic or benefic","signify","relative","cabinet","adidevata","pratyadhidevata","sex","element","dosha","varna","guna","dhatu","vahana","grains","area","tastes","direction","directional strength","tree","cloth colour","season","time all rasi/ gati","Exaltation point","Debilitation point","own rasi","moola trikona","friend","neutral","enemy","maturity age","aspect"]
    const listG = ["Sun","Moon","Mars","Mecury","Jupiter","Venus","Saturn","Rahu","Keto"]
    const listGD = ["Sun","Mon","Mar","Mec","Jup","Ven","Sat","Rah","Ket"]
    
    const data = Question.map((item) => ({
      row: item.row,
      Sun: item.Sun,
      Mon: item.Moon,
      Mar: item.Mars,
      Mec: item.Mecury,
      Jup: item.Jupiter,
      Ven: item.Venus,
      Sat: item.Saturn,
      Rah: item.Rahu,
      Ket: item.Keto,
      
  }));


    const rowMax = 32;
    const colMax = 10;

    const [col,setCol] = useState([1,1,1,1]);
    const [row,setRow] = useState([1,1,1,1]);

    const [question1,SetQuestion1] = useState("");
    const [answer1,setAnswer1] = useState("");

    const [question2,SetQuestion2] = useState("");
    const [answer2,setAnswer2] = useState("");

    const [question3,SetQuestion3] = useState("");
    const [answer3,setAnswer3] = useState("");

    const [question4,SetQuestion4] = useState("");
    const [answer4,setAnswer4] = useState("");

    const randomRow= ()=>{

      setRow(Math.floor(Math.random() * (rowMax - 1 + 1)) + 1);
      
      
          
      }

      function test(row,col){
        console.log( "from function col = ",col ," row = ",row)
        switch (col){
        case "Sun":
          return data[row].Sun
          break
          case "Mon":
            return data[row].Mon
            break
        case "Mar":
          return data[row].Mar
          break
        case "Mec":
          return data[row].Mec
          break
        case "Jup":
          return data[row].Jup
          break
        case "Ven":
          return data[row].Ven
          break
        case "Sat":
          return data[row].Sat
          break
        case "Rah":
          return data[row].Rah
          break
          case "Ket":
          return data[row].Ket
          break

        }
      }


 //Runs only on the first render
      useEffect(() => {
        console.log(" ---------------- useeffect  ---------- ")
        const col0 =  Math.floor(Math.random() * (colMax - 1 + 0)) + 0
        const col1 =  Math.floor(Math.random() * (colMax - 1 + 0)) + 0
        const col2 =  Math.floor(Math.random() * (colMax - 1 + 0)) + 0
        const col3 =  Math.floor(Math.random() * (colMax - 1 + 0)) + 0
        
        const col0L = listGD[col0]
        const col1L = listGD[col1]
        const col2L = listGD[col2]
        const col3L = listGD[col3]


        const row0 = (Math.floor(Math.random() * (rowMax - 1 + 0)) + 0);
        const row1 = (Math.floor(Math.random() * (rowMax - 1 + 0)) + 0);
        const row2 = (Math.floor(Math.random() * (rowMax - 1 + 0)) + 0);
        const row3 = (Math.floor(Math.random() * (rowMax - 1 + 0)) + 0);
        let soundQuestion;
         
        
        let temp = listG[col0];
        SetQuestion1(temp + " " +list[row0])
        const q1 = temp + " " +list[row0]
        let tempAns = test(row0,col0L)
        const a1 = tempAns
        setAnswer1(tempAns)
        
        
        let temp1 = listG[col1];
        SetQuestion2(temp1 + " " +list[row1])
        const q2 = temp1 + " " +list[row1]
        let tempAns1 = test(row1,col1L)
        const a2 = tempAns1
        setAnswer2(tempAns1)

        let temp2 = listG[col2];
        SetQuestion3(temp2 + " " +list[row2])
        const q3 = temp2 + " " +list[row2]
        let tempAns2 = test(row2,col2L)
        const a3 = tempAns2
        setAnswer3(tempAns2)


        let temp3 = listG[col3];
        SetQuestion4(temp3 + " " +list[row3])
        let tempAns3 = test(row3,col3L)
        const q4 = temp3 + " " +list[row3]
        setAnswer4(tempAns3)
        const a4 = tempAns3


      setNewMessage([q1,q2,q3,q4])
      setNewAns([a1,a2,a3,a4])
      const soundIndex = row0 +1
      const temps1 = "./a"+soundIndex+".mp3"
      const soundIndex1 = row1 +1
      const temps2 = "./a"+soundIndex1+".mp3"
      const soundIndex2 = row2 +1
      const temps3 = "./a"+soundIndex2+".mp3"
      const soundIndex3 = row3 +1
      const temps4 = "./a"+soundIndex3+".mp3"
      setS1([temps1,temps2,temps3,temps4])


      const asoundIndex = col0 +1
      const atemps1 = "./s"+asoundIndex+".mp3"
      const asoundIndex1 = col1 +1
      const atemps2 = "./s"+asoundIndex1+".mp3"
      const asoundIndex2 = col2 +1
      const atemps3 = "./s"+asoundIndex2+".mp3"
      const asoundIndex3 = col3 +1
      const atemps4 = "./s"+asoundIndex3+".mp3"
      setS2([atemps1,atemps2,atemps3,atemps4])
      
      //SetQuestions()

      console.log(" ---------------- end useeffect  ---------- ")

        
       
      }, []);

     

      const randomCol= ()=>{

        setCol(Math.floor(Math.random() * (colMax - 1 + 1)) + 1);
        
        
            
        }
  

    
  const  NextQuestion= ()=>{
    setShowAns(false)
    setShowQuest(true)
    setButtonNext("Next")
    console.log(" ---------------- next question  ---------- ")
          console.log("s1 ",s1[0]," ",s1[1]," ",s1[2]," ",s1[3])

          console.log("newMessage  ",newMessage[0]," ",newMessage[1]," ",newMessage[2]," ",newMessage[3])
          console.log("newAns ",newAns[0]," ",newAns[1]," ",newAns[2]," ",newAns[3])

          const q1 =  newMessage[1]
          const q2 = newMessage[2]
          const q3 = newMessage[3]

          const a1 =  newAns[1]
          const a2 = newAns[2]
          const a3 = newAns[3]

          const temps1 =  s1[1]
          const temps2 = s1[2]
          const temps3 = s1[3]

          const atemps1 =  s2[1]
          const atemps2 = s2[2]
          const atemps3 = s2[3]

 
          const rowv= (Math.floor(Math.random() * (rowMax - 1 + 0)) + 0);
          const colv = Math.floor(Math.random() * (colMax - 1 + 0)) + 0
          console.log("col - ",colv , " row - ",rowv);

          let temp = listG[colv];
        
          const q4 = temp + " " +list[rowv]
          const colL = listGD[colv]
          let tempAns = test(rowv,colL)
         
          const a4 = tempAns

        

        // newMessage[3] = soundQuestion


        console.log("q1 ",q1," ",q2," ",q3," ",q4)

        console.log("a  ",a1," ",a2," ",a3," ",a4)
      

        setNewMessage([q1,q2,q3,q4]);
        setNewAns([a1,a2,a3,a4])
      const soundIndex = rowv +1
      const temps4 = "./a"+soundIndex+".mp3"
      console.log("temp  ",temps1," ",temps2," ",temps3," ",temps4)
      setS1([temps1,temps2,temps3,temps4])


      
      const asoundIndex3 = colv +1 
      const atemps4 = "./s"+asoundIndex3+".mp3"

      console.log("atemp  ",atemps1," ",atemps2," ",atemps3," ",atemps4)
      setS2([atemps1,atemps2,atemps3,atemps4])


      aplaySound2()
      const timer = setTimeout(() => {
        playSound2()
      }, 2000);
        

        //setValue(soundQuestion)

        console.log(" ---------------- end next question  ---------- ")
       }







       const  SetQuestions= ()=>{

        newMessage[0]= newMessage[1]
        newMessage[1]= newMessage[2]


        randomRow();
        randomCol();
        console.log("col - ",col , " row - ",row);
        let soundQuestion;
        for (let i = 0; i < rowMax*colMax; i++) {
          if ((data[i].col === col) & (data[i].row === row))
          {
            console.log(data[i].label);
            soundQuestion = data[i].label
          }
      } 
      newMessage[3] = soundQuestion
      setNewMessage(newMessage); 
     }
    



    
  // };
    
    const playSoundButton= ()=>{

        //console.log("message button  = ",message)
        //playSound1()
        
        
            
        }

        const showAnser= ()=>{
         if (showAns)
         {
          setShowAns(false)
         }else{
          setShowAns(true)
         }
        }

       

        return(<><center>
                    <h1>That Big Table Testing :)</h1>
                    <br/> 
               
                <br/>                
                {showQuest && <h1> {newMessage[0]} </h1>}<br></br>

                 {showAns && <h1><b>{newAns[0]}</b></h1>}



                 {/* <p className='p-5'>
                 {newMessage[1]}  - <b>{newAns[1]}</b>
                 </p>

                 <p className='p-5'>
                 {newMessage[2]}  - <b>{newAns[2]}</b>
                 </p>

                 <p className='p-5'>
                 {newMessage[3]}  - <b>{newAns[3]}</b>
                 </p> */}
                   <button  style={{ width: "100%", height: "150px",background:"greenyellow"}} onClick={NextQuestion}>{buttonNext}</button><br></br><br></br>
                    <button  style={{ width: "50%", height: "100px",background:"yellow"}} onClick={showAnser}>Show Answer</button>

                 


                    

            </center>
            
        </>)
}

export default Dummy;