const logo = document.querySelector(".logo");
const rendered = document.querySelector(".rendered-content");

logo.addEventListener("click", () => {
  window.location.pathname = "/index.html";
});

window.addEventListener("load", () => {
    const dataRequested = JSON.parse(sessionStorage.getItem('chave'));
    fetch('../pages.json')
.then(response => response.json())
.then(data => {
    let contentJSON;
    data.forEach(e => {
        console.log(e.id);
        if(e.id == dataRequested){
            contentJSON = e;
        }
    })
    
    const sdgList = contentJSON.impact.sdgList;
    let listContent = '';
        for (let i = 0; i < sdgList.length; i++) {
            const element = `<div id="${sdgList[i].sdg}" class="sdg-refer">
                <div class="sdg"></div>
                <div class="sdg-text">${sdgList[i].sdgText}</div>
            </div>`;
            listContent += element;
        }

    rendered.innerHTML += `    <section class="profile-header">
    <div class="caroussel"></div>
    <div class="profile-box">
        <div class="profile-photo"></div>
        <div class="title">
            <h1 class="name">${contentJSON.header.name}</h1>
            <p class="slogan">${contentJSON.header.slogan}</p>
        </div>
    </div>
    </section>
    <section class="principal">
    <aside class="side-box">
        <span class="info-line">
            <span class="material-symbols-sharp">call</span>
            <span class="info-content">${contentJSON.principal.data.contact}</span>
        </span>
        <span class="info-line">
            <span class="material-symbols-sharp">location_on</span>
            <span class="info-content">${contentJSON.principal.data.address}</span>
        </span>
        <span class="info-line">
            <span class="material-symbols-sharp">category</span>
            <span class="info-content">${contentJSON.principal.data.category}</span>
        </span>
        <span class="info-line">
            <span class="material-symbols-sharp">supervisor_account</span>
            <span class="info-content">${contentJSON.principal.data.president}</span>
        </span>
        <span class="info-line">
            <span class="material-symbols-sharp">domain</span>
            <span class="info-content">${contentJSON.principal.data.domain}</span>
        </span>
        <span class="info-line">
            <span class="material-symbols-sharp">badge</span>
            <span class="info-content">${contentJSON.principal.data.cnpj}</span>
        </span>
        <span class="info-line">
            <span class="material-symbols-sharp">mail</span>
            <span class="info-content">${contentJSON.principal.data.email}</span>
        </span>
        <span class="info-line">
            <span class="material-symbols-sharp">link</span>
            <span class="info-content">${contentJSON.principal.data.estatuto}</span>
        </span>
        <span class="info-line">
            <span class="material-symbols-sharp">calendar_month</span>
            <span class="info-content">${contentJSON.principal.data.dateOfBirth}</span>
        </span>
    </aside>
    <main class="content">
        <h1>${contentJSON.principal.content.title}</h1>
        <p>${contentJSON.principal.content.paragraph}</p>
    </main>
    </section>
    <section class="impact">
    <aside class="side-box">
        <h1>Agenda 2030</h1>
        <div class="sdg-list">
            ${listContent}
        </div>

    </aside>
    <main class="content">
        <h1>${contentJSON.principal.content.title}</h1>
        <p>${contentJSON.principal.content.paragraph}</p>
    </main>
    </section>`;
    })
});
