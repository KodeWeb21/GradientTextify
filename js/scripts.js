const $options = document.querySelector('.options');
const btnStyleActive = "card__btn--active";
let btnOrientationActive = document.querySelector(".btn-orientation:nth-child(1)");
let btnPositionActive = document.querySelector(".btn-position:nth-child(1)");
const positionOfLinear = document.querySelector(".linear-options");
const positionOfRadial = document.querySelector(".radial-options");
let position = "top";
let orientationCanva = "linear";
const canvaText = document.querySelector('.canva__text');
const primaryColorInput = document.querySelector('.color1');
const secondColorInput = document.querySelector('.color2');
const primaryRange = document.querySelector('.range1');
const secondRange = document.querySelector('.range2');
const code = document.querySelector('.code');

const showCode = () =>{
    const styleCanva = canvaText.style.cssText;
    code.textContent = styleCanva;
}

const positionActives = () =>{
    if(btnOrientationActive.dataset.orientation === "linear"){
        positionOfRadial.classList.add('hide');
        positionOfLinear.classList.remove('hide');
    }else{
        positionOfLinear.classList.add('hide');
        positionOfRadial.classList.remove('hide');
    }
}

const applyStyleCss = () =>{
   
    if(orientationCanva === "linear"){
        canvaText.style = `
        background: #121FCF;
        background: linear-gradient(to ${position}, ${primaryColorInput.value} ${primaryRange.value}%, ${secondColorInput.value} ${secondRange.value}%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `;

    }

    if(orientationCanva === "radial"){
        canvaText.style = `
        background: #121FCF;
        background: radial-gradient(circle farthest-corner at ${position}, ${primaryColorInput.value} ${primaryRange.value}%, ${secondColorInput.value} ${secondRange.value}%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        `;
    }

    showCode();
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
        positionActives();
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

showCode()