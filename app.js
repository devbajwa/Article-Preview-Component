//UI Vars
const icon = document.querySelector('#share-icon');
const shareDetailsDesktop = document.querySelector('#detailsDesktop');
const shareDetailsMobile = document.querySelector('#detailsMobile');
const path = document.querySelector('.path');

document.addEventListener('click', function(e){
    console.log(e.target);

  if(e.target == icon || e.target.parentElement.id == icon.id || e.target.parentElement.parentElement.id == icon.id){
    console.log(icon);
      showMe();
  }
  else{
    shareDetailsDesktop.style.opacity = '0';
    shareDetailsMobile.style.opacity = '0';
    icon.style.background = 'hsl(210, 46%, 95%)';
    path.setAttribute('fill', '#6E8098');
  }
})
//addEventListener

// icon.addEventListener('click', showMe);

function showMe(){
    // console.log(shareDetailsDesktop)
  shareDetailsDesktop.style.opacity = '1';
  shareDetailsMobile.style.opacity = '1';
  icon.style.background = "hsl(214, 17%, 51%)";
  path.setAttribute('fill', '#fff');
}

// document.body.addEventListener('click', hideMe);

// function hideMe(e){
//     console.log(shareDetailsDesktop)
//     console.log(e.target)

//   shareDetailsDesktop.style.opacity = '0';
// }