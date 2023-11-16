const contratoProcessBoxes = document.querySelectorAll('.contrato__process');
const contratoProcessTitle = document.querySelector('.contrato__text__title');
const contratoProcessParagraph = document.querySelector('.contrato__text__paragraph');

let clickedContractBox = null;
let contractBoxState = {
  currentBox: null,
  isShowingBox: false,
  isClicked: false
};

const defaultContratoProcessTitle = contratoProcessTitle.innerHTML;
const defaultContratoProcessParagraph = contratoProcessParagraph.innerHTML;

contratoProcessBoxes.forEach(contratoProcessBox => {
  const title = contratoProcessBox.getAttribute('data-contrato-title');
  const paragraph = contratoProcessBox.getAttribute('data-contrato-paragraph');

  contratoProcessBox.addEventListener('click', () => {
    if (contractBoxState.isClicked && contractBoxState.currentBox === contratoProcessBox) {
      return;
    }

    if (contractBoxState.currentBox === contratoProcessBox) {
      contractBoxState.isShowingBox = false;
      contratoProcessTitle.innerHTML = defaultContratoProcessTitle;
      contratoProcessParagraph.innerHTML = defaultContratoProcessParagraph;
    } else {
      clickedContractBox = contratoProcessBox;
      contractBoxState.isClicked = true;
      contractBoxState.currentBox = contratoProcessBox;
      contractBoxState.isShowingBox = true;
      contratoProcessTitle.innerHTML = title || defaultContratoProcessTitle;
      contratoProcessParagraph.innerHTML = paragraph || defaultContratoProcessParagraph;
    }
  });

  contratoProcessBox.addEventListener('mouseover', () => {
    if (contractBoxState.isShowingBox) {
      return;
    }

    const title = contratoProcessBox.getAttribute('data-contrato-title');
    const paragraph = contratoProcessBox.getAttribute('data-contrato-paragraph');
    contratoProcessTitle.innerHTML = title || defaultContratoProcessTitle;
    contratoProcessParagraph.innerHTML = paragraph || defaultContratoProcessParagraph;

    
  });

  contratoProcessBox.addEventListener('mouseout', () => {
    if (contractBoxState.isShowingBox) {
      return;
    }

    contratoProcessTitle.innerHTML = defaultContratoProcessTitle;
    contratoProcessParagraph.innerHTML = defaultContratoProcessParagraph;
  });
});



function contractBgClicker(event) {
  const clickedBox = event.target;
  contratoProcessBoxes.forEach(contratoProcessBox => {
    if (contratoProcessBox === clickedBox) {
      contratoProcessBox.classList.add('active');
      contratoProcessBox === clickedBox
      console.log(contratoProcessBox === clickedBox)

    } else {
      contratoProcessBox.classList.remove('active');
    }
    
  });

}

contratoProcessBoxes.forEach(contratoProcessBox => {
  contratoProcessBox.addEventListener('click', contractBgClicker);

});


// Quando clicar fora da caixa, voltar para o padrão
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains('contrato__process')) {
      contractBoxState.isClicked = false;
      contractBoxState.isShowingBox = false;
      contractBoxState.currentBox = null;
      contratoProcessTitle.innerHTML = defaultContratoProcessTitle;
      contratoProcessParagraph.innerHTML = defaultContratoProcessParagraph;
      contratoProcessBoxes.forEach(contratoProcessBox => contratoProcessBox.classList.remove('active'));
    }
  });