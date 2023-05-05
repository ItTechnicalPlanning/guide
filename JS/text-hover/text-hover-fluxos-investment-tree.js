const investmentTree = document.querySelectorAll('.investment');
const investmentTreeTitle = document.querySelector('.investment-tree__title');
const investmentTreeText = document.querySelector('.investment-tree__paragraph');

let clickedInvestmentTree = null;
let investmentTreeState = {
  currentBox: null,
  isShowingBox: false,
  isClicked: false
};

const defaultInvestmentTreeTitle = investmentTreeTitle.innerHTML;
const defaultInvestmentTreeText = investmentTreeText.innerHTML;

investmentTree.forEach(investment => {
  const title = investment.getAttribute('data-investment-title');
  const paragraph = investment.getAttribute('data-investment-paragraph');

  investment.addEventListener('click', () => {
    if (investmentTreeState.isClicked && investmentTreeState.currentBox === investment) {
      return;
    }

    if (investmentTreeState.currentBox === investment) {
      investmentTreeState.isShowingBox = false;
      investmentTreeTitle.innerHTML = defaultInvestmentTreeTitle;
      investmentTreeText.innerHTML = defaultInvestmentTreeText;
    } else {
      clickedInvestmentTree = investment;
      investmentTreeState.isClicked = true;
      investmentTreeState.currentBox = investment;
      investmentTreeState.isShowingBox = true;
      investmentTreeTitle.innerHTML = title || defaultInvestmentTreeTitle;
      investmentTreeText.innerHTML = paragraph || defaultInvestmentTreeText;
    }
  });

  investment.addEventListener('mouseover', () => {
    if (investmentTreeState.isShowingBox) {
      return;
    }

    const title = investment.getAttribute('data-investment-title');
    const paragraph = investment.getAttribute('data-investment-paragraph');
    investmentTreeTitle.innerHTML = title || defaultInvestmentTreeTitle;
    investmentTreeText.innerHTML = paragraph || defaultInvestmentTreeText;

    
  });

  investment.addEventListener('mouseout', () => {
    if (investmentTreeState.isShowingBox) {
      return;
    }

    investmentTreeTitle.innerHTML = defaultInvestmentTreeTitle;
    investmentTreeText.innerHTML = defaultInvestmentTreeText;
  });
});



// mantem a caixa vermelha enquanto está clicado

function investmentBgClicker(event) {
  const clickedBox = event.target;
  investmentTree.forEach(investment => {
    if (investment === clickedBox) {
      investment.classList.add('active');
      investment === clickedBox
      console.log(investment === clickedBox)

    } else {
      investment.classList.remove('active');
    }
    
  });

}

investmentTree.forEach(investment => {
  investment.addEventListener('click', investmentBgClicker);

});





// Quando clicar fora da caixa, voltar para o padrão
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (!clickedElement.classList.contains('investment')) {
      investmentTreeState.isClicked = false;
      investmentTreeState.isShowingBox = false;
      investmentTreeState.currentBox = null;
      investmentTreeTitle.innerHTML = defaultInvestmentTreeTitle;
      investmentTreeText.innerHTML = defaultInvestmentTreeText;
      investmentTree.forEach(investment => investment.classList.remove('active'));
    }
  });