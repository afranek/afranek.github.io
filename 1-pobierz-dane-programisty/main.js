$('.getData').click(function() {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', {
        mode: 'cors',
        method: 'GET',
    })
    .then(res => res.json())
    .then(resJSON => {
        console.log(resJSON);
        const newDiv = $('<div id="dane-programisty"></div>')
        newDiv.insertAfter($(".getData"));
        // newDiv.append(resJSON)
        newDiv.append(resJSON.imie,' ',resJSON.nazwisko,' ',resJSON.firma,' ',resJSON.zawod)
        
    });
    

});

