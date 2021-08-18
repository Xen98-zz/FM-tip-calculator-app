const actives = document.getElementsByClassName('active');

const removeActive = () => {
    for(let i = 0; i < actives.length; i++) {
        actives[i].classList.remove('active');
    }
}

export default removeActive;