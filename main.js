const onClickAdd = () => {
    const addText = document.querySelector('.input-text').value;
    document.querySelector('.input-text').value = "";
    createIncompleteList(addText);
}
    
    
    

 const deleteFromIncompleteList = (target) => {
    document.querySelector('.incomplete-list').removeChild(target);
}

const createIncompleteList = (text) => {
    const div = document.createElement('div');
    div.className = "list-row";

    const li = document.createElement("li")
    li.innerHTML = text;

    const completeButton = document.createElement('button');
    completeButton.innerHTML = "Done";
    completeButton.addEventListener('click', () => {
        deleteFromIncompleteList(completeButton.parentNode);

        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerHTML;

        addTarget.textContent = null;
        
        const li = document.createElement('li');
        li.innerHTML = text;
        console.log(text);

        const backButton = document.createElement('button');
        backButton.innerHTML = "Back";
        backButton.addEventListener('click', () => {
            const buckTarget = backButton.parentNode;
            console.log(buckTarget);
            document.querySelector('.complete-list').removeChild(buckTarget);

            const text2 = backButton.parentNode.firstElementChild.innerHTML;
            createIncompleteList(text2);
        });

        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        document.querySelector('.complete-list').appendChild(addTarget);
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener('click', () => {
        deleteFromIncompleteList(deleteButton.parentNode);
    });

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    document.querySelector('.incomplete-list').appendChild(div);
}

document.querySelector('.input-button').addEventListener('click',() => onClickAdd());