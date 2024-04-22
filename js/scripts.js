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
const code = document.querySelector('.property__gradient');

const showCode = (styles) =>{
    code.textContent = styles;
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

const updateColorHex = (target) =>{
    const textColor = target.nextElementSibling;
    textColor.textContent = target.value;
    applyStyleCss();
}

const applyStyleCss = () =>{
    let styleCanva;
   
    if(orientationCanva === "linear"){
        canvaText.style = `
        background: #121FCF;
        background: linear-gradient(to ${position}, ${primaryColorInput.value} ${primaryRange.value}%, ${secondColorInput.value} ${secondRange.value}%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    `;
        styleCanva = `linear-gradient(to ${position}, ${primaryColorInput.value} ${primaryRange.value}%, ${secondColorInput.value} ${secondRange.value}%)`
    }

    if(orientationCanva === "radial"){
        canvaText.style = `
        background: #121FCF;
        background: radial-gradient(circle farthest-corner at ${position}, ${primaryColorInput.value} ${primaryRange.value}%, ${secondColorInput.value} ${secondRange.value}%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        `;

        styleCanva = ` radial-gradient(circle farthest-corner at ${position}, ${primaryColorInput.value} ${primaryRange.value}%, ${secondColorInput.value} ${secondRange.value}%)`
    }

    showCode(styleCanva);
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
       updateColorHex(target);
    }

    if(target.matches('.range')){
        const textRange = target.nextElementSibling;
        textRange.textContent = `${target.value}%`;
        applyStyleCss();
    }
})

canvaText.addEventListener('focusout',()=>{
    if(canvaText.textContent.trim() === "") canvaText.textContent = "CSS TEXT GRADIENT"
})

document.body.addEventListener('click',(e)=>{
    const target = e.target;
    if(target.matches('.box__color')){
        const parent = target.closest(".box__gradient");
        const color1 = parent.children[0].dataset.color;
        const color2 = parent.children[1].dataset.color;
        primaryColorInput.value = color1;
        secondColorInput.value = color2;
        updateColorHex(primaryColorInput);
        updateColorHex(secondColorInput)

    }
})