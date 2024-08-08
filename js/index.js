const redButtonFigureFront = document.querySelector('.red-button__figure_front');
const redButtonFigureBack = document.querySelector('.red-button__figure_back');
const redButtonText = document.querySelector('.red-button__text');
const modalDisclaimer = document.querySelector('.modal-disclaimer');
const modalDisclaimerButtonYes = document.querySelector('.modal-disclaimer__button_yes');
const isModalDisclaimer = modalDisclaimer && modalDisclaimerButtonYes;
const isRedButton = redButtonFigureFront && redButtonFigureBack && redButtonText;

if (isRedButton && isModalDisclaimer) {
  redButtonFigureFront.addEventListener('animationend', () => {
    redButtonText.innerText = "Don't you dare hit that button! We mean it. Just don't!";
    redButtonFigureBack.addEventListener('click', () => {
      modalDisclaimer.classList.add('active');
    });

    modalDisclaimerButtonYes.addEventListener('click', () => {
      const redButtonBlock = document.querySelector('.red-button');
      redButtonBlock.style.display = 'none';
      modalDisclaimer.classList.remove('active');
      document.body.classList.remove('hidden');
    });
  });
}

const textSectionButton = document.querySelector('.text-section__button');
const textSectionText = document.querySelector('.text-section__text');

if (textSectionButton && textSectionText) {
  textSectionButton.addEventListener('click', () => {
    textSectionText.innerText =
      'We all know the drill—reptilians are the real big bosses of the planet. Since some folks are teetering on the brink of sparking World War 3, our scaly leaders are stepping up, coming out of the shadows to wage their own war against the crazies. Their plan to whip up a new economy is gonna help dodge a real war and let folks blow off some steam. $WW3 is set to be the fix-it-all solution. Ready to see where you stand in this wild world? Catch you soon!';
  });
}

const aboutTokenButton = document.querySelector('.about-token__button');
const aboutTokenText = document.querySelector('.about-token__text');

if (aboutTokenButton && aboutTokenText) {
  aboutTokenButton.addEventListener('click', () => {
    aboutTokenText.innerText =
      "This token could flip your life upside down, for better or worse. But let's keep it a hundred, chances are you're gonna lose it all. Or maybe not? Either way, it's gonna be wild and fun. Just keep your cool, though that's rich coming from us, considering you hit that red button we told you not to touch just a few minutes ago. Remember: BASE NETWORK, minimum transfer amount is 0.05 $ETH, use your own wallet (no CEXs). Good luck!";
  });
}

const aboutTokenAddressNumber = document.querySelector('.about-token__address-number');
const aboutTokenAddressButton = document.querySelector('.about-token__address-button');

if (aboutTokenAddressNumber && aboutTokenAddressButton) {
  aboutTokenAddressButton.addEventListener('click', () => {
    navigator.clipboard.writeText(aboutTokenAddressNumber.innerText);
  });
}

const presaleSoonTranslateButton = document.querySelector('.presale-soon__controls-button');
const presaleSoonText = document.querySelector('.presale-soon__text');

if (presaleSoonTranslateButton && presaleSoonText) {
  presaleSoonTranslateButton.addEventListener('click', () => {
    presaleSoonText.classList.add('active');
  });
}
