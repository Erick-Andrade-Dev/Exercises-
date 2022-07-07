window.onload = function () {
    let select = document.querySelector('select')
    select.addEventListener('change', function () {
    let selected = select.selectedOptions    
    document.body.style.backgroundColor = select.value 
    localStorage.setItem('background-color', select.value)
    })
    
    let font = document.querySelector('input[name="font-size"]');
    
    font.addEventListener('change', function() {
        let textP = document.querySelector('p');
        textP.style.fontSize = `${font.value}px`;
        localStorage.setItem('font-sizepx', `${font.value}px`)      
    })
    
    let backgroundColor = localStorage.getItem('background-color')
    document.body.style.backgroundColor = backgroundColor
    
    
    
    let selectFont = document.querySelector('#textColor')   
    selectFont.addEventListener('change', function() {
        let selectColorFont = selectFont.selectedOptions
        let storeP = document.querySelector('p')
        storeP.style.color = selectFont.value
        localStorage.setItem('colorFont', selectFont.value );
        
    })
    const fontpx = localStorage.getItem('font-sizepx');
   
    const textP = document.querySelector('p');
    textP.style.fontSize = fontpx     
    /////////////////////////////////////////////////////////////
    const corText = localStorage.getItem('colorFont');

    const colorText = document.querySelector('p')
    colorText.style.color = corText
    
    
}

////////////////////////////////
