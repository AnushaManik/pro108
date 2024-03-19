var cat = 0;
var dog = 0;
var tiger = 0;
var elephant = 0;
var hear = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/i7zydpFE0/model.json' , modelReady);
}

function modelReady(){
    Classifier.classify(gotResults) ;
 }

 function gotResults(error,results){
 if(error){
 console.error(error);
 }
 else{
     console.log(results);
     random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
       random_number_b = Math.floor(Math.random() * 255) + 1;
 
  
 document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
 document.getElementById("result_label").innerHTML = "Detected dog - "+dog+", Detected cat - "+cat+",Detected tiger - "+tiger+", Detected elephant - "+elephant+"";
 
 document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
 document.getElementById("animal_voices").innerHTML = "Detected voice is of - " + results[0].label;
 
 img = document.getElementById("animal_images");
 
   if (results[0].label == "meowing") 
   { img.src = 'cat.jpg';
cat = cat + 1; }
     else if (results[0].label == "barking") 
     {
      img.src = 'dog.avif';
     dog = dog + 1;
      } 
      else if (results[0].label == "roaring") 
      { 
      
      img.src = 'tiger.jpg'; 
      tiger = tiger + 1;
     }
     else if (results[0].label == "trumpet") 
      { 
      
      img.src = 'elephant.jpg'; 
      elephant = elephant + 1;
     }
      else{ 
      img.src = 'hear.png'; 
      hear = hear + 1;
     }
 
 }   
    } 
   
 