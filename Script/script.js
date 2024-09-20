var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var listsContainer = document.getElementById('listsContainer');
listsContainer.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function addList() {
    const listTitle = document.getElementById('ListInput').value;
    if (listTitle === '') {
        alert('Please enter a title for the list.');
        return;
    }

    const listsContainer = document.getElementById('listsContainer');
    const newList = document.createElement('div');
    newList.className = 'container';

    newList.innerHTML = `
        <div class="header">
            <h2>${listTitle}</h2>
            <input type="text" placeholder="Title...">
            <span onclick="addItem(this)" class="addBtn">Add</span>
        </div>
        <ul></ul>
        <button class="deleteBtn" onclick="deleteList(this)">X</button>
    `;

    listsContainer.appendChild(newList);
    document.getElementById('ListInput').value = '';

    const deleteBtn = newList.querySelector('.deleteBtn');
    deleteBtn.onclick = function() {
        deleteList(this);
    }
}

function addItem(button) {
    const input = button.previousElementSibling;
    const itemText = input.value;
    if (itemText === '') {
        alert('You must write something!');
        return;
    }

    const ul = button.parentElement.nextElementSibling;
    const li = document.createElement('li');
    li.textContent = itemText;
    ul.appendChild(li);
    input.value = '';

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function deleteList(button) {
    const confirmation = confirm('Are you sure you want to delete this list?');
    if (confirmation) {
        const list = button.closest('.container');
        list.remove();
    }
}