const socialMediaData = {
  github: 'dam450',
  youtube: 'user/D3v14nz',
  facebook: '',
  instagram: 'ev4nd7o',
  twitter: 'ev4nd7o'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${socialMediaData[social]}`
  }
}

function getGithubUserData(user) {
  const url = `https://api.github.com/users/${user}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      gitUserName.textContent = data.login
      gitBio.textContent = data.bio
      gitLink.href = data.html_url
      photo.src = data.avatar_url
      document.title = `${data.name} - DoWhile 2021`
    })
}

changeSocialMediaLinks()
getGithubUserData(socialMediaData.github)
