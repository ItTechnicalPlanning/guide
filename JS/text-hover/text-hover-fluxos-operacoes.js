// Text Manipulator - Tree - 'Fluxo de Operações'

const treeBranches = document.querySelectorAll('.tree__branch');
const operacoesParagraph = document.querySelector('.fluxos__container__paragraph');
const defaultOperacoesParagraph = operacoesParagraph.innerHTML;

treeBranches.forEach(treeBranch => {
    const paragraph = treeBranch.getAttribute('data-tree-paragraph');

    treeBranch.addEventListener('mouseover', () => {
        operacoesParagraph.innerHTML = paragraph;
    });
    treeBranch.addEventListener('mouseout', () => {
        operacoesParagraph.innerHTML = defaultOperacoesParagraph;
    });
});