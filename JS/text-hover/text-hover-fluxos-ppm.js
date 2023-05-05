const demandaBoxes = document.querySelectorAll('.ppm__demanda');
const demandaTitle = document.querySelector('.ppm__text__title');
const demandaText = document.querySelector('.ppm__text');

let clickedDemandaBox = null;
let demandaBoxState = {
  currentBox: null,
  isShowingBox: false,
  isClicked: false
};

const defaultDemandaTitle = demandaTitle.innerHTML;
const defaultDemandaText = demandaText.innerHTML;

demandaBoxes.forEach(demandaBox => {
  const title = demandaBox.getAttribute('data-demanda-title');
  const paragraph = demandaBox.getAttribute('data-demanda-text');

  demandaBox.addEventListener('click', () => {
    if (demandaBoxState.isClicked && demandaBoxState.currentBox === demandaBox) {
      return;
    }

    if (demandaBoxState.currentBox === demandaBox) {
      demandaBoxState.isShowingBox = false;
      demandaTitle.innerHTML = defaultDemandaTitle;
      demandaText.innerHTML = defaultDemandaText;
    } else {
      clickedDemandaBox = demandaBox;
      demandaBoxState.isClicked = true;
      demandaBoxState.currentBox = demandaBox;
      demandaBoxState.isShowingBox = true;
      demandaTitle.innerHTML = title || defaultDemandaTitle;
      demandaText.innerHTML = paragraph || defaultDemandaText;
    }
  });

  demandaBox.addEventListener('mouseover', () => {
    if (demandaBoxState.isShowingBox) {
      return;
    }

    const title = demandaBox.getAttribute('data-demanda-title');
    const paragraph = demandaBox.getAttribute('data-demanda-text');
    demandaTitle.innerHTML = title || defaultDemandaTitle;
    demandaText.innerHTML = paragraph || defaultDemandaText;

    
  });

  demandaBox.addEventListener('mouseout', () => {
    if (demandaBoxState.isShowingBox) {
      return;
    }

    demandaTitle.innerHTML = defaultDemandaTitle;
    demandaText.innerHTML = defaultDemandaText;
  });
});



function demandaBgClicker(event) {
    const clickedBox = event.target.closest('.ppm__demanda');
    
    if (!clickedBox) return;
    
    demandaBoxes.forEach(demandaBox => {
      if (demandaBox === clickedBox) {
        demandaBox.classList.add('active');
      } else {
        demandaBox.classList.remove('active');
      }
    });
  }
  
  function iconClicker(event) {
    const clickedIcon = event.target.closest('.icon-demanda');
    if (clickedIcon) {
      const clickedBox = clickedIcon.closest('.ppm__demanda');
      if (clickedBox) {
        demandaBgClicker(event);
      }
    }
  }
  
  demandaBoxes.forEach(demandaBox => {
      demandaBox.addEventListener('click', demandaBgClicker);
      const icon = demandaBox.querySelector('.icon-demanda');
      icon.addEventListener('click', iconClicker);
  });
  
  




// Quando clicar fora da caixa, voltar para o padrão
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains('ppm__demanda')) {
      demandaBoxState.isClicked = false;
      demandaBoxState.isShowingBox = false;
      demandaBoxState.currentBox = null;
      demandaTitle.innerHTML = defaultDemandaTitle;
      demandaText.innerHTML = defaultDemandaText;
      demandaBoxes.forEach(demandaBox => demandaBox.classList.remove('active'));
    }
  });