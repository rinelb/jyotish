import React from 'react';
import {useState} from 'react';
import UseSound from 'use-sound'
import mySound from '../data/audio/navagraha_mp3.mp3' // Your sound file path here

//const [message, setMessage] = useState('');

const testing = ()=>{

    const [playSound] = UseSound('paa.mp3')
    const list = ['ba.mp3','ca.mp3','bha.mp3']

    


    

//   const handleChange = event => {
//     setMessage(event.target.value);

    
//   };
    
    const MyButton= ()=>{


        playSound()
            
        }

        return(<><center>
                    <h1>About Me and the Site</h1>
                    <br/> 
                <h4>Welcome :)</h4>
                <br/>
                <p className='p-5'>Life tends to be filled with ups and downs. The "ups" take care of themselves 
                    ... it’s like riding a bike downhill you just enjoy. It’s the "downs" where we 
                    have to put in the efforts. I know it sounds upside down, downs should be easier, 
                    knowledge is like that, it’s confusingly simple. The more you analyse, the less 
                    simple you make it, the more confusing it becomes. As they say if you cannot explain 
                    it to a child and have them understand it, then sorry to say you don’t understand 
                    it or it’s something that is total Ludacris. Try this out, try to explain to a 
                    kid about debt and that the earth is trillions of dollars in debt ... lol, to 
                    who?! Definitely not me :P<br/><br/>This is what this site is about ... helping you through the downs, simplify 
                        (to the best of my understand at least) the complexity, and sharing my favourite 
                        things in life, fantasy/sci-fi books, food (vegetarian based), peace and happiness and silliness :D
                    </p>
                    <button onClick={playSound}>Play</button>
                    {/* <input
                    onChange={handleChange}
                    ></input> */}
                    

            </center>
            
        </>)
}

export default testing;