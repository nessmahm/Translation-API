import {React,useState} from 'react'
import Button from 'react-bootstrap/Button';
import { AiOutlineClose } from 'react-icons/ai';

function Home() {
    const [inputText , setInputText] = useState()
    const [outputText , setOutputText] = useState("Select a language")
    const [isTranslated, setIsTranslated] = useState();
    const [language , setLanguage] = useState("ar")
    const [translated,setTranslated]=useState()
 const translate = () => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: `[{"Text":"${inputText}"}]`
    };
    
    fetch(`${process.env.REACT_APP_Base_URL}${language}${process.env.REACT_APP_Query_Params}`, options)
        .then(response => {
            if(response.status !==200){
            setTranslated(false)
            console.log("there's an error");
            return ; 
            }
            setTranslated(true)
            response.json()
        .then(response => { console.log(response) 
                            setOutputText(response[0].translations[0].text) 
                          }) 
        })
        .catch(err => { setTranslated(false)
                        console.error(err)});
}
    return (
    <div className='home'>
                <div className='top'>
                <Button className="button" variant="dark" onClick={translate}>Translate</Button>
                
                </div>
                <div className="top-row">
                    <select
                    name="languages"
                    id="languages"
                    className="form-select"
                    onChange={(e)=>setLanguage(e.target.value)}
                    >
                        <option  value="ar">Arabic</option>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>
            <div className='container'>
                <div className='form'>
                 <textarea placeholder='Enter text'
                           value = {inputText}
                           onChange={  e => setInputText(e.target.value)} ></textarea>
                 <AiOutlineClose
                    className="icon-btn close-btn"
                    onClick = { ()=>setInputText('')}
                 />            
                </div>
                <div className='result'>
                    
                    
                    {translated===false ? 
                    <span>Translated False</span>
                    : 
                    
                    inputText!=='' ? outputText : <p>"Select a language"  </p>

                    }
                    
                    
                </div>
            </div>   
    
    </div>

  )
}

export default Home