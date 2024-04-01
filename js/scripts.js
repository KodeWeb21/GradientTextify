const $options = document.querySelector('.options');
const btnStyleActive = "card__btn--active";
let btnOrientationActive;
let btnPositionActive;
const changeStateBtn = (btnElement, prevBtn) =>{
    if(prevBtn){
        prevBtn.classList.remove(btnStyleActive)
    }
    btnElement.classList.add(btnStyleActive);
    prevBtn = btnElement;
    return prevBtn;
}


$options.addEventListener('click',(e)=>{
    const target = e.target;
   
    if(target.matches(".btn-orientation")){
        btnOrientationActive = changeStateBtn(target,btnOrientationActive);
    }

    if(target.matches(".btn-position")){
        btnPositionActive = changeStateBtn(target, btnPositionActive);
    }
})

$options.addEventListener('input',(e)=>{
    const target = e.target;
    if(target.matches('.color')){
        const textColor = target.nextElementSibling;
        textColor.textContent = target.value;
    }

    if(target.matches('.range')){
        const textRange = target.nextElementSibling;
        textRange.textContent = `${target.value}%`;
    }
})
