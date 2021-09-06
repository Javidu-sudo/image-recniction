Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_qualty:90,
});
camera = document.getElementById("camera");
Webcam.attach(camera)
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">'
    })
}
console.log("ml5"+ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modleLoded)
function modleLoded(){
    console.log("loded status loded")
}
function identify(){
    img = document.getElementById("capture_image")
    classifier.classify(img, got_result)
}
function got_result(error, results){
if (error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("result-object").innerHTML = results[0].label
    document.getElementById('result-accuracy').innerHTML = results[0].confidence.toFixed(3)
}
}