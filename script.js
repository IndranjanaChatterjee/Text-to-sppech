let speaking=true;


let txt;
txt=document.getElementById("text");
document.getElementById("convert").addEventListener("click",()=>
{
  
  const speech=window.speechSynthesis;
  let content=document.getElementById("convert");
  
  
  
  const utterance=new SpeechSynthesisUtterance(txt.value);
  console.log(txt.value);
  
  
  speech.speak(utterance);
  document.getElementById("im").src="i.png";
  if(speaking)
  {
    content.innerText="Pause";
    speaking=false;
    speech.resume();
    console.log("pause");
    document.getElementById("im").src="i.png";
  }
  else
  {
    content.innerText="Resume";
    speaking=true;
    speech.pause();
    console.log("resume");
    document.getElementById("im").src="mon.png";

  }
  
  
  
})
