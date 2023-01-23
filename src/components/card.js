// fetch json e receber o objeto
fetch('../../data.json')
.then(response => response.json())
.then(data => {
    const cardGrid = document.querySelector('.card-grid');
    data.forEach(e => {
        const id = e.id;
        const tag = e.tag;
        const title = e.title;
        const text = e.text;
        const name = e.name;
        const logo = window.location.origin + '/src/media/'+ e.logo;
        const banner = window.location.origin + '/src/media/'+ e.banner;
        const sdg = e.sdg;
        let sdgList = '';
        for (let i = 0; i < sdg.length; i++) {
            const element = `<span class="sdg ${sdg[i]}"></span>`;
            sdgList += element;
        }


        const div = document.createElement('div');
        div.classList.add('card');
        div.setAttribute('id', id);
        div.addEventListener('click',()=>{
            console.log('clicou');
            window.location.pathname = '/src/pages/ong-page/index.html';
        })
        // 

        div.innerHTML = `<div class="card-header">
        <img src="${banner}" alt="rover" />
    </div>
    <div class="card-body" onclick="redirect()">
        <span class="tag tag-${tag}">${tag}</span>
        <h4>
            ${title}
        </h4>
        <p>
            ${text}
        </p>
        <div class="user">
            <img src="${logo}" alt="user"/>
            <div class="user-info">
                <span class="mini-title">${name}</span>
                <div class="sdg-tags">
                ${sdgList}
                </div>
            </div>
        </div>
    </div>`
    cardGrid.appendChild(div);
    
})
})