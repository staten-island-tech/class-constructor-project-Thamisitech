class Album{
    constructor(name, year, url) {
        this.name = name;
        this.year = year;
        this.url = url;
    }
}

class UI {
    addAlbumToList(album) {
        const display = document.querySelector('.display');

        let html = '<div class="display-profile flex-row"><div class="display-name">%name%</div><div class="display-year">%year%</div><div class="display-pic"><img src="%url%"alt=""></div><div class="remove-profile">Remove President! X</div>'
        let newHtml = html.replace('%name%', album.name);
        newHtml = newHtml.replace('%year%', album.year);
        newHtml = newHtml.replace('%url%', album.url);
        document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);


    }

    clearFields(){
        document.getElementById('name').value = '';
        document.getElementById('year').value = '';
        document.getElementById('url').value = '';
    }

    deleteAlbum(target){
        if(target.className === 'remove-profile') {
            target.parentElement.remove();
        }
    }
}

//Event Listener for Album
document.getElementById('form').addEventListener('submit', function(e){
    //Get Values
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const url = document.getElementById('url').value;

    //inmstantiate new album
    const album = new Album(name, year, url);
    //console.log(album);

    const ui = new UI();
    console.log(ui);

    ui.addAlbumToList(album);

    ui.clearFields();

    e.preventDefault();
});

//delete

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.deleteAlbum(e.target);

    ui.clearFields();

    e.preventDefault();
})