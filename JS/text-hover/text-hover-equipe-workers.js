function createBoxHandler(boxClass, titleSelector, paragraphSelector, state) {
  const boxes = document.querySelectorAll(`.${boxClass}`);
  const title = document.querySelector(titleSelector);
  const paragraph = document.querySelector(paragraphSelector);

  let boxState = {
    currentBox: null,
    isShowingBox: false,
    isClicked: false
  };

  const defaultTitle = title.innerHTML;
  const defaultParagraph = paragraph.innerHTML;

  boxes.forEach(box => {
    const boxTitle = box.getAttribute(`data-${state}-title`);
    const boxParagraph = box.getAttribute(`data-${state}-paragraph`);

    box.addEventListener('click', () => {
      if (boxState.isClicked && boxState.currentBox === box) {
        return;
      }

      if (boxState.currentBox === box) {
        boxState.isShowingBox = false;
        title.innerHTML = defaultTitle;
        paragraph.innerHTML = defaultParagraph;
      } else {
        clickedBox = box;
        boxState.isClicked = true;
        boxState.currentBox = box;
        boxState.isShowingBox = true;
        title.innerHTML = boxTitle || defaultTitle;
        paragraph.innerHTML = boxParagraph || defaultParagraph;
      }
    });

    box.addEventListener('mouseover', () => {
      if (boxState.isShowingBox) {
        return;
      }

      title.innerHTML = boxTitle || defaultTitle;
      paragraph.innerHTML = boxParagraph || defaultParagraph;
    });

    box.addEventListener('mouseout', () => {
      if (boxState.isShowingBox) {
        return;
      }

      title.innerHTML = defaultTitle;
      paragraph.innerHTML = defaultParagraph;
    });
  });

  function bgClicker(event) {
    const clickedBox = event.target.closest(`.${boxClass}`);
    boxes.forEach(box => {
      if (box === clickedBox) {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    });
  }

  boxes.forEach(box => {
    box.addEventListener('click', bgClicker);
  });

  document.addEventListener('click', function (event) {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains(boxClass)) {
      boxState.isClicked = false;
      boxState.isShowingBox = false;
      boxState.currentBox = null;
      title.innerHTML = defaultTitle;
      paragraph.innerHTML = defaultParagraph;
      boxes.forEach(box => box.classList.remove('active'));
    }
  });
}

// Usando a função para criar instâncias para cada conjunto de elementos
createBoxHandler('team__worker', '.equipe__title', '.equipe__paragraph', 'worker');
createBoxHandler('contrato__process', '.contrato__text__title', '.contrato__text__paragraph', 'contrato');
createBoxHandler('investment', '.investment-tree__title', '.investment-tree__paragraph', 'investment');
createBoxHandler('ppm__demanda', '.ppm__text__title', '.ppm__text', 'demanda');
