class TeamManager {
  constructor(workers, equipeTitle, equipeParagraph, state) {
    this.workers = workers;
    this.equipeTitle = equipeTitle;
    this.equipeParagraph = equipeParagraph;

    this.clickedWorker = null;
    this.workerState = {
      currentBox: null,
      isShowingBox: false,
      isClicked: false
    };

    this.defaultEquipeTitle = this.equipeTitle.innerHTML;
    this.defaultEquipeParagraph = this.equipeParagraph.innerHTML;

    this.setupEventListeners();
  }

  showWorkerInfo(worker) {
    const title = worker.getAttribute(`data-${state}-title`);
    const paragraph = worker.getAttribute(`data-${state}-paragraph`);

    if (this.workerState.isClicked && this.workerState.currentBox === worker) {
      return;
    }

    if (this.workerState.currentBox === worker) {
      this.workerState.isShowingBox = false;
      this.equipeTitle.innerHTML = this.defaultEquipeTitle;
      this.equipeParagraph.innerHTML = this.defaultEquipeParagraph;
    } else {
      this.clickedWorker = worker;
      this.workerState.isClicked = true;
      this.workerState.currentBox = worker;
      this.workerState.isShowingBox = true;
      this.equipeTitle.innerHTML = title || this.defaultEquipeTitle;
      this.equipeParagraph.innerHTML = paragraph || this.defaultEquipeParagraph;
    }
  }

  handleWorkerClick(event) {
    const clickedWorker = event.target.closest('.team__worker');
    this.workers.forEach(worker => {
      if (worker === clickedWorker) {
        worker.classList.add('active');
        this.showWorkerInfo(clickedWorker);
      } else {
        worker.classList.remove('active');
      }
    });
  }

  setupEventListeners() {
    this.workers.forEach(worker => {
      worker.addEventListener('click', (event) => this.handleWorkerClick(event));
      worker.querySelector('img').addEventListener('click', (event) => {
        event.stopPropagation();
        this.handleWorkerClick(event);
      });
    });

    document.addEventListener('click', (event) => {
      const clickedElement = event.target;
      if (!clickedElement.classList.contains('team__worker')) {
        this.workerState.isClicked = false;
        this.workerState.isShowingBox = false;
        this.workerState.currentBox = null;
        this.equipeTitle.innerHTML = this.defaultEquipeTitle;
        this.equipeParagraph.innerHTML = this.defaultEquipeParagraph;
        this.workers.forEach(worker => worker.classList.remove('active'));
      }
    });
  }
}


const workers = document.querySelectorAll('.team__worker');
const equipeTitle = document.querySelector('.equipe__title');
const equipeParagraph = document.querySelector('.equipe__paragraph');
const state = 'worker'
const teamManager = new TeamManager(workers, equipeTitle, equipeParagraph, state);
