document.addEventListener('DOMContentLoaded', () => {
    const githubForm = document.getElementById('github-form')
    githubForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.search.value)
    fetch(`https://api.github.com/search/users?q=${e.target.search.value}`)
    .then(resp => resp.json())
    .then(data => data.items.map(item => {
        console.log(data)
        const div = document.createElement('div')
        const li = document.createElement('li')
        const users = document.getElementById('user-list')
        const h2 = document.createElement('h2')
        h2.textContent = item.login
        const img = document.createElement('img')
        img.src = item.avatar_url
        const a = document.createElement('a')
        a.href = item.repos_url
        a.innerText = 'Profile'
        li.append(h2, img, div, a)
        users.append(li)

    } ))
    })
    
    
})





// function renderSearch(search){ 
    // const container = document.getElementById('github-container')
    //     const users = document.getElementById('users-list')
    //     const repos =  document.getElementById('repos-list')
    //     const li = document.createElement('li')

    // }
    // '<h2>`${items.login}`</h2>
    // <img src="`${toy.image}`" class="toy-avatar" />
    // <p>4 interpolate</p>
    // <button class="like-btn" id="`${toy.id}">Like ❤️</button>
    // </div>'