console.log("connected");

const circles = document.querySelectorAll('button.circle');
const textarea = document.querySelector('textarea');
const check = document.querySelector('button.button');

//turning off spell check
textarea.spellcheck = false;

//testing i grabbed the circles
console.log(circles);
console.log(check);


//for each circle look at data 
circles.forEach(circle => circle.addEventListener('click', (event) => {
    console.log(event.target.closest('button.circle').dataset.name);
    printLetter(event);
  
  }));

  //print corresponding letter to textarea
  function printLetter(event) {
      textarea.value += event.target.closest('button.circle').dataset.name;
      console.log('added');
  };



//AUDIO PLAYER JS
turkish = ['Grigo, "Gerçekten bilmiyorum," diyor', 'Ardından, emlak vergisi adını aldı', 'Şimdi ise elli altı sandalyesi olacak', 
'Ne tür değişiklikler yapılması planlanıyor', 'Katılım oranı da diğer bir değişken', 'Konuktan sonraki öncelik, eğitim', 'Lükse yer kalmıyor',
'Patlamanın on kilometre uzaktan işitildiği bildirildi', 'Turnuvaya on üç ülkeden doksan sporcu katıldı', 
'Arnavutluk terörle mücadele çabalarını arttırıyor', 'Fiyatın altmış altı Euro olduğu bildirildi', 'Projenin sonuçları Nisan ayında yayınlandı',
'Belki bu kez onların zamanı gelmiştir', 'Sizce sizi efsane yapan ne', 'Paranın onda biri hibe olarak verilecek'];

english = ['Grigo is saying, "I really don\'t know"', 'Afterwards, it got named the property tax', 'But now, he will have fifty six chairs',
'What kind of changes are being planned', 'The participation rate is another variable', 'The priority after the guest is education',
'There\'s not going to be any room for luxury', 'It was reported that the explosion was heard from 10 kilometers away', 
'Ninety athletes from thirteen countries have joined the tournament', 'Albania is increasing its efforts on fighting against terrorism',
'The price was reported to be sixty six Euros', 'The results of the project was published on April', 'Maybe it\'s their turn this time',
'What do you think that makes you a legend', 'A tenth of the money will be given as a grant'];

var currentSong = 0;




function audioPlayer(){
    
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e){
       e.preventDefault(); 
       $("#audioPlayer")[0].src = this;
       $("#audioPlayer")[0].play();
       $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");

        console.log(currentSong);
        answer = turkish[currentSong];
        console.log(answer);


    });
};


// function checkAnswer() {
    
//     userAnswer = textarea.value;
//     if(userAnswer === answer){
//         console.log('correct');
//     }else{
//         console.log('so close the right answer is ' + answer);

//     }
    
// }


check.onclick = function() {

  let results = document.querySelector('.showAnswer');
  results.innerHTML ='';

  console.log(textarea.value);
  userAnswer = textarea.value;

  htmlRight =`
  <h2>That's right.</h2>`;

  htmlWrong =` 
  <h2> Nice try. the correct answer is ${answer}`;

  if(userAnswer === answer){
      console.log('correct');
      results.insertAdjacentHTML('beforeend', htmlRight);

  }else{
      console.log('so close the right answer is ' + answer);
      results.insertAdjacentHTML('beforeend', htmlWrong);

  }
  

};

