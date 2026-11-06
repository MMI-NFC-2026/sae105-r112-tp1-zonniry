const paragraphe = document.querySelector('#a-mettre-en-rouge');
paragraphe.style.color = "red";
const enrougesuiteaclick = document.querySelector('#en-rouge-suite-a-click');
enrougesuiteaclick.addEventListener ('click', (evt) => {
  evt.target.style.color = "red";
});
collH2 = document.querySelectorAll("h2");
collH2.forEach((elm)=>{
    elm.addEventListener('click', (evt) => {
        evt.target.style.color = "red";
    });
});