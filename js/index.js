const redButtonFigureFront = document.querySelector('.red-button__figure_front');
const redButtonFigureBack = document.querySelector('.red-button__figure_back');
const redButtonText = document.querySelector('.red-button__text');
const modalDisclaimer = document.querySelector('.modal-disclaimer');
const modalDisclaimerButtonYes = document.querySelector('.modal-disclaimer__button_yes');
const isModalDisclaimer = modalDisclaimer && modalDisclaimerButtonYes;
const isRedButton = redButtonFigureFront && redButtonFigureBack && redButtonText;

if (isRedButton && isModalDisclaimer) {
  redButtonFigureFront.addEventListener('animationend', () => {
    redButtonText.innerText = "Do not push it, We said do not push it! Hey, don't do it!";
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
      "It's a well-known secret that Earth is under the thumb of the Lizard Squad. With the world's geopolitical scene getting real spicy, they've had to take some drastic steps. To dodge an actual World War III, they're rolling out its economic simulation via cryptocurrency - $WW3. Here's where you get to figure out which country's got the edge, let those feelings fly, make or break the bank, and build some epic communities. Y'all ready for this? Catch you on BASE.";
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
