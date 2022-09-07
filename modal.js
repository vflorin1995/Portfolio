const worksData = {
  mobileImg: ['./img/picture1.png', './img/picture2.png', './img/picture3.png', './img/picture4.png'],
  desktopImg: ['./img/picture1d.png', './img/picture4.png', './img/picture1.png', './img/picture2.png'],
  imgAlt: ['project-image1', 'project-image2', 'project-image3', 'project-image4'],
  desktopTitle: ['Tonic', 'Multi-Post Stories', 'Facebook 360', 'Uber navigation'],
  cardDetail1: ['CANOPY', 'FACEBOOK', 'FACEBOOK', 'UBER'],
  cardDetail2: ['Canopy', 'Canopy', 'Canopy', 'Canopy'],
  cardDetail4: ['Back End Dev', 'Back End Dev', 'Back End Dev', 'Back End Dev'],
  cardDetail6: ['2015', '2015', '2015', '2015'],
  mobileTitle: ['Tonic', 'Multi-Post Stories', 'Tonic', 'Multi-Post Stories'],
  desktopDescription: ['A daily selection of privately personalized reads; no accounts or sign-ups required', 'Experimental content creation feature that allows users to add to an existing story over the course of the day without spamming theri friends', 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR', 'A smart assistant to make driving more safe, efficient and more fun by unlocking your most expensive computer, your car'],
  mobileDescription: ['A daily selection of privately personalized reads; no accounts or sign-ups required', 'A daily selection of privately personalized reads; no accounts or sign-ups required', 'A daily selection of privately personalized reads; no accounts or sign-ups required', 'A daily selection of privately personalized reads; no accounts or sign-ups required'],
  technologies1: ['html', 'html', 'html', 'html'],
  technologies2: ['css', 'css', 'css', 'css'],
  technologies3: ['javaScript', 'javaScript', 'javaScript', 'javaScript'],
};

const section = document.getElementById('modal');

for (let i = 0; i < worksData.mobileImg.length; i += 1) {
  let mainDiv = document.createElement('div');
  mainDiv.className = 'projects';
  if (i % 2 === 1) {
    mainDiv.className = 'projects right';
  }

  let mobileImg = document.createElement('img');
  mobileImg.src = worksData.mobileImg[i];
  mobileImg.className = 'project-image hide-pe-mare';
  mobileImg.alt = worksData.imgAlt[i];

  let desktopImg = document.createElement('img');
  desktopImg.src = worksData.desktopImg[i];
  desktopImg.className = 'project-image hide-pe-mic';
  mobileImg.alt = worksData.imgAlt[i];

  let descriptionDiv = document.createElement('div');
  descriptionDiv.className = 'img-description unu';

  let desktopTitle = document.createElement('h3');
  desktopTitle.className = 'card-title hide-pe-mic-lista';
  desktopTitle.innerText = worksData.desktopTitle[i];

  let list = document.createElement('ul');
  list.className = 'card-details';

  let listitem1 = document.createElement('li');
  listitem1.className = 'hide-pe-mic-lista';
  listitem1.innerText = worksData.cardDetail1[i];

  let listitem2 = document.createElement('li');
  listitem2.className = 'hide-pe-mare-lista';
  listitem2.innerText = worksData.cardDetail2[i];

  let listitem3 = document.createElement('li');
  listitem3.innerText = '|';

  let listitem4 = document.createElement('li');
  listitem4.innerText = worksData.cardDetail4[i];

  let listitem5 = document.createElement('li');
  listitem5.innerText = '|';

  let listitem6 = document.createElement('li');
  listitem6.innerText = worksData.cardDetail6[i];

  let mobileTitle = document.createElement('h3');
  mobileTitle.className = 'card-title hide-pe-mare-lista';
  mobileTitle.innerText = worksData.mobileTitle[i];

  let desktopDescription = document.createElement('p');
  desktopDescription.className = 'card-description hide-pe-mic-lista';
  desktopDescription.innerText = worksData.desktopDescription[i];

  let mobileDescription = document.createElement('p');
  mobileDescription.className = 'card-description hide-pe-mare-lista';
  mobileDescription.innerText = worksData.mobileDescription[i];

  let techList = document.createElement('ul');
  techList.className = 'card-list';

  let technologies1 = document.createElement('li');
  technologies1.className = 'card-tech';
  technologies1.innerText = worksData.technologies1[i];

  let technologies2 = document.createElement('li');
  technologies2.className = 'card-tech';
  technologies2.innerText = worksData.technologies2[i];

  let technologies3 = document.createElement('li');
  technologies3.className = 'card-tech';
  technologies3.innerText = worksData.technologies3[i];

  let button = document.createElement('button');
  button.type = 'button';
  button.innerText = 'See Project';

  techList.append(technologies1, technologies2, technologies3);
  list.append(listitem1, listitem2, listitem3, listitem4, listitem5, listitem6);
  descriptionDiv.append(desktopTitle, list, mobileTitle,
    desktopDescription, mobileDescription, techList, button);
  mainDiv.append(mobileImg, desktopImg, descriptionDiv);
  section.appendChild(mainDiv);
}

/* Modal window */

const popUp = document.getElementById('popUp');
const buttons = Array.from(document.querySelectorAll('#modal button'));
let btnIndex;

let mobileTitlePop = document.createElement('h3');
let desktopTitlePop = document.createElement('h3');
let closeButton = document.createElement('h3');
let titleContainer = document.createElement('div');
let mobileImgPop = document.createElement('img');
let desktopImgPop = document.createElement('img');
let imgContainer = document.createElement('div');
let descriptionPop = document.createElement('ul');
let description1 = document.createElement('li');
let description2 = document.createElement('li');
let description3 = document.createElement('li');
let description4 = document.createElement('li');
let description5 = document.createElement('li');
let description6 = document.createElement('li');
let mobDescription = document.createElement('p');
let deskDescription = document.createElement('p');
let techListPop = document.createElement('ul');
let techItem1 = document.createElement('li');
let techItem2 = document.createElement('li');
let techItem3 = document.createElement('li');
let buttonContainer = document.createElement('div');
let seeLiveBtn = document.createElement('button');
let seeSourceBtn = document.createElement('button');
let techBtn = document.createElement('div');
let descTech = document.createElement('div');

buttons.forEach((button) => {
  button.addEventListener('click',function () {
    btnIndex= buttons.indexOf(button);
    console.log(btnIndex);
    popUp.classList.remove('displayNone');
    popUp.classList.add('showModal');

    mobileTitlePop.innerText=worksData.mobileTitle[btnIndex];
    mobileTitlePop.className = 'hide-pe-mare-lista modalTitle';
    desktopTitlePop.innerText=worksData.desktopTitle[btnIndex];
    desktopTitlePop.className = 'hide-pe-mic-lista modalTitle';
    closeButton.innerText='x';
    closeButton.className='closeButtonPop';
    titleContainer.append(mobileTitlePop, desktopTitlePop, closeButton);
    titleContainer.className='buttonFlex justify height';


    
    descriptionPop.className = 'card-details';
    description1.className = 'hide-pe-mic-lista';
    description1.innerText = worksData.cardDetail1[btnIndex];
    description2.className = 'hide-pe-mare-lista';
    description2.innerText = worksData.cardDetail2[btnIndex];
    description3.innerText = '|';
    description4.innerText = worksData.cardDetail4[btnIndex];
    description5.innerText = '|';
    description6.innerText = worksData.cardDetail6[btnIndex];
    descriptionPop.append(description1, description2, description3, description4, description5, description6);

    mobileImgPop.src = worksData.mobileImg[btnIndex];
    mobileImgPop.className = 'project-image hide-pe-mare buttonFlexOne';
    mobileImgPop.alt = worksData.imgAlt[btnIndex];

    desktopImgPop.src = worksData.desktopImg[btnIndex];
    desktopImgPop.className = 'hide-pe-mic project-image buttonFlexOne imgHeight';
    desktopImgPop.alt = worksData.imgAlt[btnIndex];

    imgContainer.className = 'buttonFlex';
    imgContainer.append(mobileImgPop, desktopImgPop);


    
    mobDescription.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s';
    mobDescription.className = 'card-description hide-pe-mare-lista';
    deskDescription.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esse';
    deskDescription.className = 'card-description hide-pe-mic-lista';

    techListPop.className = 'card-list';
    techItem1.className = 'card-tech';
    techItem1.innerText = worksData.technologies1[btnIndex];
    techItem2.className = 'card-tech';
    techItem2.innerText = worksData.technologies2[btnIndex];
    techItem3.className = 'card-tech';
    techItem3.innerText = worksData.technologies3[btnIndex];
    techListPop.append(techItem1, techItem2, techItem3);

    seeLiveBtn.type = 'button';
    seeLiveBtn.innerText = 'See Live';
    seeLiveBtn.className = 'buttonFlexOne margin-none';
    seeSourceBtn.type = 'button';
    seeSourceBtn.innerText = 'See Source';
    seeSourceBtn.className = 'buttonFlexOne margin-none';
    buttonContainer.append(seeLiveBtn, seeSourceBtn);
    buttonContainer.className = 'buttonFlex';


    techBtn.append(techListPop, buttonContainer);
    descTech.append(mobDescription, deskDescription,techBtn);
    descTech.className = 'gridGrid';

    let mainDivPop = document.createElement('div');
    mainDivPop.className = 'modalWindow';

    mainDivPop.append(titleContainer, descriptionPop, imgContainer, descTech);
    popUp.appendChild(mainDivPop);

  });
});

closeButton.addEventListener('click', closePop);
function closePop () {
  popUp.classList.remove('showModal');
  popUp.classList.add('displayNone');
  popUp.innerText = '';
}





/*
<div class="projects">
    <img src="./img/picture1.png" class="project-image hide-pe-mare" alt="project-image1">
    <img src="./img/picture1d.png" class="hide-pe-mic project-image " alt="project-image1">
    <div class="img-description">
        <h3 class="card-title hide-pe-mic-lista">Tonic</h3>
        <ul class="card-details">
            <li class="hide-pe-mic-lista">CANOPY</li>
            <li class="hide-pe-mare-lista">Canopy</li>
            <li>|</li>
            <li>Back End Dev</li>
            <li>|</li>
            <li>2015</li>
        </ul>
        <h3 class="card-title hide-pe-mare-lista">Tonic</h3>
        <p class="card-description">A daily selection of privately personalized reads; no accounts or sign-ups required</p>
        <ul class="card-list">
            <li class="card-tech">html</li>
            <li class="card-tech">css</li>
            <li class="card-tech">javaScript</li>
        </ul>
        <button type="button">See project</button>
    </div>
</div>
*/
