const gateBoxes = document.querySelectorAll('.fluxo__gate__box');

gateBoxes.forEach(gateBox => {
  const gateBoxText = gateBox.querySelector('.gate__box__text');
  const gateBoxResp = gateBox.getAttribute('data-gate-resp');
  const defaultBoxText = gateBoxText.innerHTML;

  gateBox.addEventListener('mouseover', () => {
    gateBoxText.innerHTML = gateBoxResp;
  });
  
  gateBox.addEventListener('mouseout', () => {
    gateBoxText.innerHTML = defaultBoxText;
  });
});



