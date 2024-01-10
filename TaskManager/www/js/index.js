window.onload = function(){
    const addButton = document.getElementById('addButton');
    const resetButton = document.getElementById('resetButton');

    addButton.onclick = ajouterTache;
    resetButton.onclick = reinitialiserTache;
}

function ajouterTache(){
    const tache = document.getElementById('tache');
    const taskList = document.getElementById('taskList');
    const taskListDone = document.getElementById('taskListDone');

    if (tache.value){
        let newItem = document.createElement('li');
        newItem.innerHTML = tache.value;

        // $(newItem).on('swiperight', taskDone);
        $(newItem).on('swiperight', function(){
            taskListDone.appendChild(newItem);
            $(newItem).on('swipeleft', function(){
                taskList.appendChild(newItem);
            });
        });

        $(newItem).on('swipeleft', function(){
            $(this).hide('slow', removeTask);
        });

        // $(newItem).on('swipeleft', function(){
        //     $(this).hide(1500);
        // });

        taskList.appendChild(newItem);

        $(taskList).listview('refresh');
        tache.value='';
    }

    tache.focus();
}

function reinitialiserTache(){
    const taskList = document.getElementById('taskList');
    const taskListDone = document.getElementById('taskListDone');

    taskList.innerHTML = '';
    taskListDone.innerHTML = '';
}

function taskDone(){
    // $(this).toggleClass('done');
}
function removeTask(){
    $(this).remove();
}