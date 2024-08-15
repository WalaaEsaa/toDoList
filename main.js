var input = document.querySelector('input');
//catch element .addTask > button
var btn = document.querySelector('.addTask > button')
btn.addEventListener('click', addList)



function addList(e) {
    var notComplet = document.querySelector('.notCompleted')
    var Complet = document.querySelector('.Completed')
    var newLi = document.createElement('li')

    //two check and delete btn
    var checkBtn = document.createElement('button')
    var delBtn = document.createElement('button')

    //display content icon of 2 button
    checkBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'

    if (input.value !== '') {
        newLi.textContent = input.value;
        input.value = ''
        notComplet.appendChild(newLi)
        newLi.appendChild(checkBtn)
        newLi.appendChild(delBtn)
    }


    checkBtn.addEventListener('click', function () {
        var parent = this.parentNode;
        parent.remove();
        Complet.appendChild(parent);
        checkBtn.style.display='none'

    })

    delBtn.addEventListener('click', function () {
        var parent = this.parentNode;
        parent.remove();

    })
    return false

}
