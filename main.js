prediction1 = ""
prediction2 = ""
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5MwxUW8vo/model.json", modelloaded);
function modelloaded(){
    console.log("model is loaded");
}
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90, 
}) ;
Camera = document.getElementById("camera");
Webcam.attach("#Camera");
function Takesnapshot(){
    Webcam.snap(function(D_URI){
        document.getElementById("result").innerHTML = '<img id ="Captureimage"src = "'+D_URI+'" />';
        console.log(D_URI);
    });
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is"+prediction1;
    speak_data2 = "The second prediction is"+prediction2;
    var utter = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utter);
}

function Check(){
    img = document.getElementById("Captureimage");
    classifier.classify(img, gotResults);
}
function gotResults(error, Results){
    if(error){
        console.log(error)
    } else{
        console.log(Results);
        document.getElementById("Hand_Gestures").innerHTML = Results[0].label;
        document.getElementById("Hand_Gestures2").innerHTML = Results[1].label;
        prediction1 = Results[0].label;
        prediction2 = Results[1].label;
        speak()
            if(Results[0].label=="Bye/Hi"){
                document.getElementById("Gesture1").innerHTML = " &#128400;"
            } if(Results[0].label=="Peace"){
                document.getElementById("Gesture1").innerHTML = "&#9996;"
            } if(Results[0].label=="Good Job"){
                document.getElementById("Gesture1").innerHTML = "&#128077;"
            }    if(Results[0].label=="Bad Job"){
                    document.getElementById("Gesture1").innerHTML = "&#128078;"
            }  if(Results[0].label=="Cool"){
                document.getElementById("Gesture1").innerHTML = "&#129304;"
            }
             if(Results[1].label=="Bye/Hi"){
                document.getElementById("Gesture2").innerHTML = " &#128400;"
            } if(Results[1].label=="Peace"){
                document.getElementById("Gesture2").innerHTML = "&#9996;"
            } if(Results[1].label=="Good Job"){
                document.getElementById("Gesture2").innerHTML = "&#128077;"
            }  if(Results[1].label=="Bad Job"){
                document.getElementById("Gesture2").innerHTML = "&#128078;"
            } if(Results[1].label=="Cool"){
                document.getElementById("Gesture2").innerHTML = "&#129304;"
            }

        
    };
}