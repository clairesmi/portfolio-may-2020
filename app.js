window.addEventListener('DOMContentLoaded', init)

function init() {
  const project = document.querySelectorAll('.project')
  const image = document.querySelectorAll('.project-image')
  const detail = document.querySelectorAll('.detail-text')
  const detailBackground = document.querySelectorAll('.detail')
  const detailText = document.createElement('div')
  const about = document.querySelector('.about')
  const name = document.querySelector('.name')
  const devTitle = document.querySelector('.dev-title')
  const contactLogos = document.querySelector('.contact-logos')

  const html = document.querySelector('html')
  const mode = document.querySelector('.mode')
  const time = new Date
  const hours = time.getHours()

  let timer 
  
  function setTheme() {
    if (hours > 20 && hours < 24 || hours > 0 && hours < 7 ) {
      html.dataset.theme = 'dark'
      mode.innerHTML = 'Day'
      about.style.color = '#F9F8F8'
      name.style.color = '#3CBBB1'
      devTitle.style.color = 'black'
      contactLogos.style.opacity = '1'
      project.forEach(el => el.style.boxShadow = '0px 0px 0px 0px')
      detailBackground.forEach(el => el.style.backgroundColor = '#141414')
      // style mode button
    } else {
      html.dataset.theme = 'light'
      mode.innerHTML = 'Night'
      about.style.color = '#272838'
      name.style.color = '#8661C1'
      devTitle.style.color = '#272838'
      project.forEach(el => el.style.boxShadow = '2px 2px 15px 1px lightgrey')
      detailBackground.forEach(el => el.style.backgroundColor = '#272838')
      // style mode button
    }
    mode.addEventListener('click', toggleMode)
  }
  setTheme()
  
  function toggleMode() {
    if (html.dataset.theme === 'light') {
      html.dataset.theme = 'dark' 
      mode.innerHTML = 'Day'
      about.style.color = '#F9F8F8'
      name.style.color = '#3CBBB1'
      devTitle.style.color = 'black'
      detailBackground.forEach(el => el.style.backgroundColor = '#141414')
      project.forEach(el => el.style.boxShadow = '0px 0px 0px 0px')
    } else {
      html.dataset.theme = 'light'
      mode.innerHTML = 'Night'
      mode.style.opacity = '0.45'
      about.style.color = '#272838'
      name.style.color = '#8661C1'
      devTitle.style.color = '#272838'
      detailBackground.forEach(el => el.style.backgroundColor = '#272838')
      project.forEach(el => el.style.boxShadow = '2px 2px 15px 1px lightgrey')
    }
  }

  
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
    }
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