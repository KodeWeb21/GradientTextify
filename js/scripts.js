const $options = document.querySelector('.options');
const btnStyleActive = "card__btn--active";
let btnOrientationActive;
let btnPositionActive;
let position = "";
let orientationCanva;
const canvaText = document.querySelector('.canva__text');
const primaryColorInput = document.querySelector('.color1');
const secondColorInput = document.querySelector('.color2');
const primaryRange = document.querySelector('.range1');
const secondRange = document.querySelector('.range2');
const applyStyleCss = () =>{
    if(orientationCanva === 'linear'){
        canvaText.style = ` background: #DFA3CF; background: linear-gradient(to ${position}, ${primaryColorInput.value} ${primaryRange.value}%, ${secondColorInput.value} ${secondRange.value}%);-webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }`;
    }else{
        canvaText.style = `background: #DFA3CF; background: radial-gradient(to ${position}, ${primaryColorInput.value} ${primaryRange.value}%, ${secondColorInput.value} ${secondRange.value}%);-webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        }`;
    }
}

const changeStateBtn = (btnElement, prevBtn) =>{
    if(prevBtn) prevBtn.classList.remove(btnStyleActive)

    btnElement.classList.add(btnStyleActive);
    prevBtn = btnElement;

    if(btnElement.matches('.btn-position')) position = btnElement.dataset.position;

    if(btnElement.matches('.btn-orientation')) orientationCanva = btnElement.dataset.orientation;

    applyStyleCss();
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
        applyStyleCss();
    }

    if(target.matches('.range')){
        const textRange = target.nextElementSibling;
        textRange.textContent = `${target.value}%`;
        applyStyleCss();
    }
})
