const workers = document.querySelectorAll('.team__worker');
const equipeTitle = document.querySelector('.equipe__title');
const equipeParagraph = document.querySelector('.equipe__paragraph');

let clickedWorker = null;
let workerState = {
  currentBox: null,
  isShowingBox: false,
  isClicked: false
};

const defaultEquipeTitle = equipeTitle.innerHTML;
const defaultEquipeParagraph = equipeParagraph.innerHTML;

workers.forEach(worker => {
  const title = worker.getAttribute('data-worker-title');
  const paragraph = worker.getAttribute('data-worker-paragraph');

  worker.addEventListener('click', () => {
    if (workerState.isClicked && workerState.currentBox === worker) {
      return;
    }

    if (workerState.currentBox === worker) {
      workerState.isShowingBox = false;
      equipeTitle.innerHTML = defaultEquipeTitle;
      equipeParagraph.innerHTML = defaultEquipeParagraph;
    } else {
      clickedWorker = worker;
      workerState.isClicked = true;
      workerState.currentBox = worker;
      workerState.isShowingBox = true;
      equipeTitle.innerHTML = title || defaultEquipeTitle;
      equipeParagraph.innerHTML = paragraph || defaultEquipeParagraph;
    }
  });

  worker.addEventListener('mouseover', () => {
    if (workerState.isShowingBox) {
      return;
    }

    const title = worker.getAttribute('data-worker-title');
    const paragraph = worker.getAttribute('data-worker-paragraph');
    equipeTitle.innerHTML = title || defaultEquipeTitle;
    equipeParagraph.innerHTML = paragraph || defaultEquipeParagraph;

    
  });

  worker.addEventListener('mouseout', () => {
    if (workerState.isShowingBox) {
      return;
    }

    equipeTitle.innerHTML = defaultEquipeTitle;
    equipeParagraph.innerHTML = defaultEquipeParagraph;
  });
});



// mantem a caixa vermelha enquanto está clicado

function handleWorkerClick(event) {
  const clickedWorker = event.target;
  workers.forEach(worker => {
    if (worker === clickedWorker) {
      worker.classList.add('active');
      worker === clickedWorker
      console.log(worker === clickedWorker)

    } else {
      worker.classList.remove('active');
    }
    
  });

}

workers.forEach(worker => {
  worker.addEventListener('click', handleWorkerClick);

});


// Quando clicar fora da caixa, voltar para o padrão
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains('team__worker')) {
      workerState.isClicked = false;
      workerState.isShowingBox = false;
      workerState.currentBox = null;
      equipeTitle.innerHTML = defaultEquipeTitle;
      equipeParagraph.innerHTML = defaultEquipeParagraph;
      workers.forEach(worker => worker.classList.remove('active'));
    }
  });
  