function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    //fetch('http://localhost:8081/test')
    //.then(res => res.json())
    //.then(function(res) {
      //  document.getElementById('results').innerHTML = res.message})

    let data = { theText: formText};


fetch('/api', {
  method: "POST",
  header:{
    'Content-Type': 'application/json'
  },
  mode:"cors",
  body: JSON.stringify(data),
})

.then(res => res.json())
   .then(data => {
     document.getElementById("text_polarity").innerHTML = data.polarity;
     document.getElementById("text_subjectivity").innerHTML =
       data.subjectivity;
     document.getElementById("text_polarity_confidence").innerHTML =
       data.polarity_confidence;
     document.getElementById("text_subjectivity_confidence").innerHTML =
       data.subjectivity_confidence;
   });
}


export { handleSubmit }
