const notesEl = document.querySelector('.notes');
const addBtn = document.querySelector('.note-add');

function createNote(title, text) {
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
        <div class="note-header">
            <p id="note-title">${title}</p>
            <textarea class="note-title-input" id="note-title-input" class"hidden">${title}</textarea>
            <div class="note-actions">
                <button class="note-edit"><i class="fa-solid fa-file-pen"></i></button>
                <button class="note-delete"><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>
        </div>
        <p id="note-text">${text}</p>
        <textarea id="note-textarea" class"hidden">${text}</textarea>
    `

    const editBtn = noteEl.querySelector('.note-edit');
    const deleteBtn = noteEl.querySelector('.note-delete');
    const titleEl = noteEl.querySelector('#note-title');
    const textEl = noteEl.querySelector('#note-text');
    const titleInputEl = noteEl.querySelector('#note-title-input');
    const textInputEl = noteEl.querySelector('#note-textarea');

    editBtn.addEventListener('click', (e) => {
        titleEl.classList.toggle('hiddens');
        textEl.classList.toggle('hiddens');

        titleInputEl.classList.toggle('hidden');
        textInputEl.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', (e) => {
        noteEl.remove();
    });

    titleInputEl.addEventListener('input', (e) => {
        titleEl.innerText = e.target.value;
    });

    textInputEl.addEventListener('input', (e) => {
        textEl.innerText = e.target.value;
    });

    return noteEl;
}

addBtn.addEventListener('click', (e) => {
    const el = createNote("Заголовок", "Ваш текст");
    notesEl.appendChild(el);
});

let changeThemeButtons = document.querySelectorAll('.changeTheme');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let theme = this.dataset.theme;
        applyTheme(theme);
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme'); 

if(activeTheme === null || activeTheme === 'light') { 
    applyTheme('light');
} else if (activeTheme === 'dark') { 
    applyTheme('dark');
}