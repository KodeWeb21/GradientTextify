const $options = document.querySelector('.options');

$options.addEventListener('click',(e)=>{
    const target = e.target;
   
})

$options.addEventListener('input',(e)=>{
    const target = e.target;
    if(target.matches(".color")){
        const textColor = target.nextElementSibling;
        textColor.textContent = target.value;
    }
})
