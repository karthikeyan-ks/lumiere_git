import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from '../Footer';
import './Ui.css';
function Ui(props) {
    const location=useLocation();
    const eventName=location.state.eventName;
    const eventType=location.state.eventType;
    console.log(eventName,eventType);
    const completeDetail={
        technical:{
            Hackathon:{
                description:"A programming contest where the winners are awards awesome gifts",
                rules:['Open Event', 'Maximum 3 photo per participant', 'theme will be provided', 'No sort of editing is allowed', 'Judgement will be based on creativity ,captions and overall impact', 'Other rules will be provided on spot', 'Watermark can be added.But opacity should be 30%', 'photo should not be exposed'],
                guidelines:['Open Event', 'Maximum 3 photo per participant', 'theme will be provided', 'No sort of editing is allowed', 'Judgement will be based on creativity ,captions and overall impact', 'Other rules will be provided on spot', 'Watermark can be added.But opacity should be 30%', 'photo should not be exposed'],
                img:"https://media.istockphoto.com/id/1125107251/vector/hackathon-background-hack-marathon-coding-event-glitch-poster-and-saturated-binary-data-code.jpg?s=2048x2048&w=is&k=20&c=dou3pP406eYNo4gMPJ4joMPp5MF6aWZG75BwB-eRbx8=",
                eventname:"Hackathon",
                EventHead:"someone",
                date:"18/03/2023",
            },
            event1:{
                description:"",
                rules:[],
                guidelines:[],
                img:"",
                eventname:"",
                EventHead:"",
                date:"",
            },
            event2:{
                description:"",
                rules:[],
                guidelines:[],
                img:"",
                eventname:"",
                EventHead:"",
                date:"",
            }/**
            ..upto n event
             */


        },
        general:{
            event1:{
                description:"",
                rules:[],
                guidelines:[],
                img:"",
                eventname:"",
                EventHead:"",
                date:"",
            },
            event2:{
                description:"",
                rules:[],
                guidelines:[],
                img:"",
                eventname:"",
                EventHead:"",
                date:"",
            }
        },
        publicity:{
            event1:{
                description:"",
                rules:[],
                guidelines:[],
                img:"",
                eventname:"",
                EventHead:"",
                date:"",
            },
            event2:{
                description:"",
                rules:[],
                guidelines:[],
                img:"",
                eventname:"",
                EventHead:"",
                date:"",
            }

        },
        cultural:{
            event1:{
                description:"",
                rules:[],
                guidelines:[],
                img:"",
                eventname:"",
                EventHead:"",
                date:"",
            },
            event2:{
                description:"",
                rules:[],
                guidelines:[],
                img:"",
                eventname:"",
                EventHead:"",
                date:"",
            }
        },
        workshop:{
            event1:{
                description:"",
                rules:[],
                guidelines:[],
                img:"",
                eventname:"",
                EventHead:"",
                date:"",
            },
            event2:{
                description:"",
                rules:[],
                guidelines:[],
                img:"",
                eventname:"",
                EventHead:"",
                date:"",
            }

        }
    };
    console.log(completeDetail[eventType][eventName].eventname);
    // eslint-disable-next-line
    const [rules] = useState(completeDetail[eventType][eventName].rules)
    const [list, setList] = useState([]);
    // eslint-disable-next-line
    //['Open Event', 'Maximum 3 photo per participant', 'theme will be provided', 'No sort of editing is allowed', 'Judgement will be based on creativity ,captions and overall impact', 'Other rules will be provided on spot', 'Watermark can be added.But opacity should be 30%', 'photo should not be exposed']
    const [guidelines] = useState(completeDetail[eventType][eventName].guidelines)
    const [glist, setgList] = useState([]);
    // eslint-disable-next-line
    // eslint-disable-next-line
    const [description]=useState(completeDetail[eventType][eventName].description);
    // eslint-disable-next-line
    const [img,setImg]=useState(completeDetail[eventType][eventName].img);
    // eslint-disable-next-line
    const [EventName]=useState(completeDetail[eventType][eventName].eventname);
    // eslint-disable-next-line
    const [EventHead]=useState(completeDetail[eventType][eventName].EventHead);
    // eslint-disable-next-line
    const [date]=useState(completeDetail[eventType][eventName].date);
    useEffect(() => {
        setList([]);
        for (let i = 0; i < rules.length; i++) {
            setList((prev) => [...prev, (<div key={"div"+i} className="uimini"><li key={"li"+i}>{rules[i]}</li></div>)]);
        }
    }, [rules])
    // eslint-disable-next-line
    useEffect(()=>{
        setgList([]);
        for(let i=0;i<guidelines.length;i++){
            setgList(prev=>[...prev,(<div key={"div"+i} className="uimini"><li key={"li"+i}>{rules[i]}</li></div>)]);
        }
    },[guidelines])
    return (<div className="uimain">
        <div id="h1" className="uih1">
            <h1>{EventName}</h1>
        </div>
        <div className="uicontainer">
            <img className="uiimg" onLoad={(eve)=>{
                console.log("triggered")
                var red = document.getElementById('h1');
                red.style.backgroundImage = 'linear-gradient(to bottom, rgba(20,30,47,.5),rgba(0,0,0,1)),url("'+img+'")';
            }}
             src={img} alt={img}></img>
            <div className="uidescbox">
                <div className="uiAbout">
                    <h2 className="uih2">About</h2>
                    <div className="uiline">
                        uuvuyuyvu
                    </div>
                    <p className="uip">{description}</p>
                    <div className="bottom">
                        <button className="uibutton">register</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="uicontainer">
            <div className="uidescbox">
                <div className="uiAbout">
                    <h2 className="uih2">Event details</h2>
                    <div className="uiline">
                        uuvuyuyvu
                    </div>
                    
                    <div className="uieventdetail">
                    <div style={{marginTop:".5%",marginLeft:".5%",paddingLeft:"1%",fontSize:"4vw" ,width:"fit-content",maxWidth:"30vw",border:"solid white 2px"}}>
                            <h4>Event Name</h4>
                            <p className="uip">{EventName}</p>
                    </div>
                        <div style={{marginTop:".5%",marginLeft:".5%",paddingLeft:"1%",fontSize:"4vw" ,width:"fit-content",maxWidth:"30vw",border:"solid white 2px"}}>
                            <h4>Event Head</h4>
                            <p className="uip">{EventHead}</p>
                        </div>
                        <div style={{marginTop:".5%",marginLeft:".5%",paddingLeft:"1%",fontSize:"4vw" ,width:"fit-content",maxWidth:"30vw",border:"solid white 2px"}}>
                            <h4>date and time</h4>
                            <p className="uip">{date}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="uicontainer">
            <div className="uidescbox">
                <div className="uiAbout">
                    <h2 className="uih2">rules</h2>
                    <div className="uiline">
                        line
                    </div>
                    <ol  className="uiol">
                        {list}
                    </ol >
                </div>
            </div>
            <img className="uiimg" src={img} alt={img}></img>
        </div>
        <div className="uicontainer">
            <div className="uidescbox">
                <div className="uiAbout">
                    <h2 className="uih2">Guidelines</h2>
                    <div className="uiline">
                        uuvuyuyvu
                    </div>
                    <ol  className="uiol">
                        {glist}
                    </ol >
                </div>
            </div>
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>)
}
export default Ui;
//background-image: url("https://png.pngtree.com/background/20210714/original/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-picture-image_1250295.jpg");
//#0c1559