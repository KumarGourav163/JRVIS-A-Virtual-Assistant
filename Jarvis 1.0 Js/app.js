const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Gourav...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master Gourav...")
    }

    else{
        speak("Good Evenining Gourav Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})




function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Gourav Sir, How May I Help You?");
    }

    else if(message.includes('how')){
        speak("I Am Fine Gourav Sir");
    }
    else if(message.includes("tell me a joke")){
        speak("Sure, Do You Know What Is The Largest Word In English, Smile Because There Is A Mile Between First And Last Letter Ha Ha Ha Ha");
    }
    if(message.includes('rohit') || message.includes('sonu')){
        speak("randi ka bachha, madharchod, tohar mai ke chodo");
    }
    if(message.includes('baby')){
        speak("I love soo much lo mo baby, mo dhana, mo janu, mo sona");
    }
    else if(message.includes("open google")){
        window.open("https://www.google.com/", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open youtube")){
        window.open("https://www.youtube.com/", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://www.facebook.com/", "_blank");
        speak("Opening Facebook...")
    }
    else if(message.includes("open instagram")){
        window.open("https://www.instagram.com/", "_blank");
        speak("Opening Instagram...")
    }
    else if(message.includes("open gmail")){
        window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        speak("Opening gmail...")
    }
    else if(message.includes("open photos")){
        window.open("https://photos.google.com/", "_blank");
        speak("Opening google photos...")
    }
    else if(message.includes("open telegram")){
        window.open("https://telegram.org/dl", "_blank");
        speak("Opening telegram...")
    }
    else if(message.includes("open chat")){
        window.open("https://whatsapp.com/dl/", "_blank");
        speak("Opening whatsapp...")
    }
    else if(message.includes("open twitter")){
        window.open("https://twitter.com/home", "_blank");
        speak("Opening twitter...")
    }
    else if(message.includes("open job")){
        window.open("https://www.linkedin.com/feed/", "_blank");
        speak("Opening linkedin...")
    }
    else if(message.includes("open flipkart")){
        window.open("https://www.flipkart.com/", "_blank");
        speak("Opening flipkart...")
    }
    else if(message.includes("open amazon")){
        window.open("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=678802104188&hvpos=&hvnetw=g&hvrand=8858946930720962569&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007799&hvtargid=kwd-10573980&hydadcr=14453_2371562&gad_source=1", "_blank");
        speak("Opening amazon...")
    }
    else if(message.includes("open project")){
        window.open("https://github.com/", "_blank");
        speak("Opening github...")
    }
    else if(message.includes("open gpt")){
        window.open("https://chat.openai.com/", "_blank");
        speak("Opening chat gpt...")
    }
    else if(message.includes("open map")){
        window.open("https://www.google.com/maps/@20.2801152,85.8718208,12z?authuser=0&entry=ttu", "_blank");
        speak("Opening google map...")
    }
    else if(message.includes("open music")){
        window.open("https://open.spotify.com/", "_blank");
        speak("Opening spotify...")
    }
    else if(message.includes("open prime")){
        window.open("https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root", "_blank");
        speak("Opening amazon prime video...")
    }
    else if(message.includes("open netflix")){
        window.open("https://www.netflix.com/in/", "_blank");
        speak("Opening netflix...")
    }
    else if(message.includes("open snap")){
        window.open("https://www.snapchat.com/", "_blank");
        speak("Opening snapchat...")
    }
    else if(message.includes("open play store")){
        window.open("https://play.google.com/store/apps?hl=en_IN&gl=US", "_blank");
        speak("Opening google play store...")
    }
    else if(message.includes("open contacts")){
        window.open("https://contacts.google.com/", "_blank");
        speak("Opening google your google contacts...")
    }
    else if(message.includes("open drive")){
        window.open("https://drive.google.com/drive/u/0/home", "_blank");
        speak("Opening google drive...")
    }






    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }





    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }





    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }






    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}