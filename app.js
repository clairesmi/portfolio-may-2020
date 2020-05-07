window.addEventListener('DOMContentLoaded', init)

function init() {
  const project = document.querySelectorAll('.project')
  const image = document.querySelectorAll('.project-image')
  const detail = document.querySelectorAll('.detail-text')
  const detailText = document.createElement('div')
  
  let timer 
  
  project.forEach(el => el.appendChild(detailText))
  image.forEach((elem, i) => elem.id = i)
  detail.forEach((elem, i) => elem.classList.add(i))
  image.forEach(elem => elem.addEventListener('click', handleClick))
  detail.forEach(elem => elem.addEventListener('click', handleResetCard))
  
  function handleClick() {
    const id = event.target.id
    if (project[id].children[0].classList.contains('hidden')) {
      project[id].classList.add('show-detail', 'animated', 'flipInY')
      project[id].children[0].classList.remove('hidden')
      project[id].children[1].classList.add('hidden')

      setTimeout(() => {
        project.forEach(el => el.classList.remove('animated', 'flipInY'))
      }, 700)
      // timer = setTimeout(function() {
      //   flipCard(id)
      // }, 5000)
    }
    
    // function flipCard(id) {
    //   project[id].classList.add('animated', 'flipInY')
    //   project[id].classList.remove('show-detail')
    //   project[id].children[0].classList.add('hidden')
    //   project[id].children[1].classList.remove('hidden')
    //   setTimeout(() => {
    //     project.forEach(el => el.classList.remove('animated', 'flipInY'))
    //   }, 700)
    // }
  }
  
  function handleResetCard() {
    if (event.target.classList.contains('detail-text')) {
      clearTimeout(timer)
      const id = event.target.classList[1]
      project[id].classList.add('animated', 'flipInY')
      project[id].classList.remove('show-detail')
      project[id].children[0].classList.add('hidden')
      project[id].children[1].classList.remove('hidden')

      setTimeout(() => {
        project.forEach(el => el.classList.remove('animated', 'flipInY'))
      }, 700)
    }
  }
  
}