let navWidth=$('.navigationBar').outerWidth();
$('.navigationBar').css({'left':`-${navWidth}`});
$('#navIcon').click(function(){
  navWidth=$('.navigationBar').outerWidth();
  if($('.navigationBar').css('left')=='0px'){
    $('.navigationBar').css({'left':`-${navWidth}`});
        }
  else{
    $('.navigationBar').css({'left':'0'});
    $('#navIcon').css({'display':'none'});
    $('#navExitIcon').css({'display':'block'});
     }
})

$("#navExitIcon").click(function(){
  navWidth=$('.navigationBar').outerWidth();
  $('.navigationBar').css({'left':`-${navWidth}`});
  $('#navIcon').css({'display':'block'})
  $('#navExitIcon').css({'display':'none'})


})

var namecheck=0;
var phonecheck=0;
var emailcheck=0;
var agecheck=0;
var passwordcheck=0;
var repasswordcheck=0;


$('#name').keyup(function(){
  var nameRejex = /^[A-Z][a-z]{2,10}$/;
  if (nameRejex.test($('#name').val()))
  {
    $('#name').removeClass('is-invalid');
    $('#name').addClass('is-valid');
    $('#nameAlert').addClass('d-none')
    $('#nameAlert').css({'top':'0%'});
    namecheck=1;
    
  }
  else   
  {
    $('#name').removeClass('is-valid');
    $('#name').addClass('is-invalid');
    $('#nameAlert').removeClass('d-none')
    $('#nameAlert').css({'top':'100%'});
    namecheck=0;
  }

})
$('#phone').keyup(function(){
  var phoneRejex = /^(002)?01[0125][0-9]{8}$/;
  if (phoneRejex.test($('#phone').val()))    //lw tmm(valid)
  {

    $('#phone').removeClass('is-invalid');
    $('#phone').addClass('is-valid');
    $('#phoneAlert').addClass('d-none')
    $('#phoneAlert').css({'top':'0%'});
    phonecheck=1;
  }
  else   
  {
    $('#phone').removeClass('is-valid');
    $('#phone').addClass('is-invalid');
    $('#phoneAlert').removeClass('d-none')
    $('#phoneAlert').css({'top':'100%'});
    phonecheck=0;
  }


})
$('#email').keyup(function(){
  var emailRejex = /^[a-zA-Z]{3,10}@(hotmail|gmail).com$/;
  if (emailRejex.test($('#email').val()))
  {
    $('.btnSubmit').removeAttr('disabled');
    $('#email').removeClass('is-invalid');
    $('#email').addClass('is-valid');
    $('#emailAlert').addClass('d-none')
    $('#emailAlert').css({'top':'0%'});
    emailcheck=1;
  }
  else   
  {
    $('.btnSubmit').attr('disabled');
    $('#email').removeClass('is-valid');
    $('#email').addClass('is-invalid');
    $('#emailAlert').removeClass('d-none')
    $('#emailAlert').css({'top':'100%'});
    emailcheck=0;
  }


})
$('#age').keyup(function(){
  var ageRejex = /^[1-9][0-9]{0,1}$/;
  if (ageRejex.test($('#age').val()))
  {
    $('.btnSubmit').removeAttr('disabled');
    $('#age').removeClass('is-invalid');
    $('#age').addClass('is-valid');
    $('#ageAlert').addClass('d-none')
    $('#ageAlert').css({'top':'0%'});
    agecheck=1;
  }
  else   
  {
    $('.btnSubmit').attr('disabled');
    $('#age').removeClass('is-valid');
    $('#age').addClass('is-invalid');
    $('#ageAlert').removeClass('d-none')
    $('#ageAlert').css({'top':'100%'});
    agecheck=0;
  }


})
var password="";
$('#password').keyup(function(){
  var passwordRejex = /^[A-Za-z0-9_@]{8,15}$/;
  if (passwordRejex.test($('#password').val()))    //lw tmm(valid)
  {
    $('.btnSubmit').removeAttr('disabled');
    $('#password').removeClass('is-invalid');
    $('#password').addClass('is-valid');
    $('#passwordAlert').addClass('d-none')
    $('#passwordAlert').css({'top':'0%'});
    password=$('#password').val();
    passwordcheck=1;
  }
  else   
  {
    $('.btnSubmit').attr('disabled');
    $('#password').removeClass('is-valid');
    $('#password').addClass('is-invalid');
    $('#passwordAlert').removeClass('d-none')
    $('#passwordAlert').css({'top':'100%'});
    passwordcheck=0;
  }


})
$('#repassword').keyup(function(){
  if (($('#repassword').val())==password)   
  {
    $('.btnSubmit').removeAttr('disabled');
    $('#repassword').removeClass('is-invalid');
    $('#repassword').addClass('is-valid');
    $('#repasswordAlert').addClass('d-none')
    $('#repasswordAlert').css({'top':'0%'});
    repasswordcheck=1;
  }
  else   
  {
    $('.btnSubmit').attr('disabled');
    $('#repassword').removeClass('is-valid');
    $('#repassword').addClass('is-invalid');
    $('#repasswordAlert').removeClass('d-none')
    $('#repasswordAlert').css({'top':'100%'});
    repasswordcheck=0;
  }


})


$('#contactUs input').keyup(function(){
  console.log(namecheck);
if(namecheck&&phonecheck&&emailcheck&&agecheck&&passwordcheck&&repasswordcheck){
  console.log('true');
  $('.btnSubmit').removeAttr('disabled');
}
else{
  console.log('false');
  $('.btnSubmit').attr('disabled',true);
}

})
var urls={
  Trending:"https://api.themoviedb.org/3/trending/all/day?api_key=49cc9f2a380f62bc488da385da9dc449",
  Popular:"https://api.themoviedb.org/3/movie/popular?api_key=49cc9f2a380f62bc488da385da9dc449",
  'Top Rated':"https://api.themoviedb.org/3/movie/top_rated?api_key=49cc9f2a380f62bc488da385da9dc449",
  Upcoming:"https://api.themoviedb.org/3/movie/upcoming?api_key=49cc9f2a380f62bc488da385da9dc449",
  'Now Playing':"https://api.themoviedb.org/3/movie/now_playing?api_key=49cc9f2a380f62bc488da385da9dc449",
}
var urlsArr=[
 "https://api.themoviedb.org/3/trending/all/day?api_key=49cc9f2a380f62bc488da385da9dc449",
  "https://api.themoviedb.org/3/movie/popular?api_key=49cc9f2a380f62bc488da385da9dc449",
  "https://api.themoviedb.org/3/movie/top_rated?api_key=49cc9f2a380f62bc488da385da9dc449",
  "https://api.themoviedb.org/3/movie/upcoming?api_key=49cc9f2a380f62bc488da385da9dc449",
  "https://api.themoviedb.org/3/movie/now_playing?api_key=49cc9f2a380f62bc488da385da9dc449",
]
let currentUrl=urls["Now Playing"];
$('.navigationBar a').click(function(){
var innerText=$(this).text();
currentUrl=urls[innerText];
getdata(displayData);
})

let outPut=''
async function getdata(dataToDisplay){
  var data =await fetch(currentUrl);
  var finaldata=await data.json();
  dataToDisplay(finaldata);
  outPut=finaldata;

}
getdata(displayData);



function displayData(finaldata) {
  var catrona=[];
  for (let i= 0; i < finaldata.results.length; i++) {
    var title=''
    if(finaldata.results[i].name==undefined){
      title=finaldata.results[i].title;
    } 
    else{
      title=finaldata.results[i].name;
    }
  catrona+=(`
    <div class="col-md-4 py-2 ">
    <div class="movie shadow position-relative">
      <img src="https://image.tmdb.org/t/p/original/${finaldata.results[i].poster_path}" alt="film">
      <div class="movieLayer position-absolute">
        <div class="info p-0">
          <h2>${title}</h2>
          <p>${finaldata.results[i].overview}</p>
          <p>${finaldata.results[i].vote_average.toFixed(1)}</p>
          <p>${finaldata.results[i].release_date}</p>
        </div>
      </div>
    </div>
  </div>
    `)
  }
  $('.moviesData').html(catrona);
}


$('#search').keyup(function() {
  for(i=0;i<urlsArr.length;i++){
    currentUrl=urlsArr[1];
    getdata(search)
  let searchTxt =$('#search').val();
  let catrona = [];
  for (let i = 0; i < outPut.results.length; i++) {
     if ((outPut.results[i].title).toLowerCase().includes(searchTxt.toLowerCase())){
      catrona+=(`
      <div class="col-md-4 py-2 ">
      <div class="movie shadow position-relative">
        <img src="https://image.tmdb.org/t/p/original/${outPut.results[i].poster_path}" alt="film">
        <div class="movieLayer position-absolute">
          <div class="info p-0">
            <h2>${outPut.results[i].title}</h2>
            <p>${outPut.results[i].overview}</p>
            <p>${outPut.results[i].vote_average.toFixed(1)}</p>
            <p>${outPut.results[i].release_date}</p>
          </div>
        </div>
      </div>
    </div>
      `)
    }
    $('.moviesData').html(catrona);
  }
  

  }
})

$('#movies').keyup(function() {
  let searchTxt =$('#movies').val();
  let catrona = [];
  for (let i = 0; i < outPut.results.length; i++) {
     if ((outPut.results[i].title).toLowerCase().includes(searchTxt.toLowerCase())){
      catrona+=(`
      <div class="col-md-4 py-2 ">
      <div class="movie shadow position-relative">
        <img src="https://image.tmdb.org/t/p/original/${outPut.results[i].poster_path}" alt="film">
        <div class="movieLayer position-absolute">
          <div class="info p-0">
            <h2>${outPut.results[i].title}</h2>
            <p>${outPut.results[i].overview}</p>
            <p>${outPut.results[i].vote_average.toFixed(1)}</p>
            <p>${outPut.results[i].release_date}</p>
          </div>
        </div>
      </div>
    </div>
      `)
    }
    $('.moviesData').html(catrona);
  }
  

  }
)

function search(){};