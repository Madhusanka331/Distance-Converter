(function(){
    'use strict'
    let convertType = 'miles';
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(event){
        let key = event.code;
        if (key === 'KeyK'){
            convertType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Convertor";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
            
        }
        else if(key === 'KeyM'){
            convertType = 'Miles';
            heading.innerHTML = "Miles to Kilometers Convertor";
            intro.innerHTML = "Type in a number of Miles and click the button to convert the distance to Kilometers.";
        }
    });
    document.addEventListener('submit', function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if( distance ){
            if( convertType == "miles"){
                const converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles convert to ${converted} kilimeters`;
            }
            else{
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers convert to ${converted} miles`;
            }
        }
        else{
            answerDiv.innerHTML = '<h2>Please Provide a Number</h2>';
        }
    })
})();