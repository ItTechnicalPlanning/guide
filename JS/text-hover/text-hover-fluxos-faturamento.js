// Text Manipulator - 'Fluxo de Faturamento'

const boxProcess = document.querySelectorAll('.fluxo__process__box');
const faturamentoTitle = document.querySelector('.process__text__title');
const faturamentoParagraph = document.querySelector('.process__text__paragraph');

let clickedBox = null;
let boxState = {
  currentBox: null,
  isShowingBox: false,
  isClicked: false
};

const defaultFaturamentoTitle = faturamentoTitle.innerHTML;
const defaultFaturamentoParagraph = faturamentoParagraph.innerHTML;

boxProcess.forEach(box => {
  const title = box.getAttribute('data-box-title');
  const paragraph = box.getAttribute('data-box-paragraph');

  box.addEventListener('click', () => {
    if (boxState.isClicked && boxState.currentBox === box) {
      return;
    }

    if (boxState.currentBox === box) {
      boxState.isShowingBox = false;
      faturamentoTitle.innerHTML = defaultFaturamentoTitle;
      faturamentoParagraph.innerHTML = defaultFaturamentoParagraph;
    } else {
      clickedBox = box;
      boxState.isClicked = true;
      boxState.currentBox = box;
      boxState.isShowingBox = true;
      faturamentoTitle.innerHTML = title || defaultFaturamentoTitle;
      faturamentoParagraph.innerHTML = paragraph || defaultFaturamentoParagraph;
    }
  });

  box.addEventListener('mouseover', () => {
    if (boxState.isShowingBox) {
      return;
    }

    const title = box.getAttribute('data-box-title');
    const paragraph = box.getAttribute('data-box-paragraph');
    faturamentoTitle.innerHTML = title || defaultFaturamentoTitle;
    faturamentoParagraph.innerHTML = paragraph || defaultFaturamentoParagraph;

    
  });

  box.addEventListener('mouseout', () => {
    if (boxState.isShowingBox) {
      return;
    }

    faturamentoTitle.innerHTML = defaultFaturamentoTitle;
    faturamentoParagraph.innerHTML = defaultFaturamentoParagraph;
  });
});



// mantem a caixa vermelha enquanto está clicado

function handleBoxClick(event) {
  const clickedBox = event.target;
  boxProcess.forEach(box => {
    if (box === clickedBox) {
      box.classList.add('active');
      box === clickedBox
      console.log(box === clickedBox)

    } else {
      box.classList.remove('active');
    }
    
  });

}

boxProcess.forEach(box => {
  box.addEventListener('click', handleBoxClick);

});


// Quando clicar fora da caixa, voltar para o padrão
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains('fluxo__process__box')) {
      boxState.isClicked = false;
      boxState.isShowingBox = false;
      boxState.currentBox = null;
      faturamentoTitle.innerHTML = defaultFaturamentoTitle;
      faturamentoParagraph.innerHTML = defaultFaturamentoParagraph;
      boxProcess.forEach(box => box.classList.remove('active'));
    }
  });
  