class Album{
    constructor(title, artist, url) {
        this.title = title;
        this.artist = artist;
        this.url = url;
    }
}

class UI {
    addAlbumToList(album) {
        const display = document.querySelector('.display');

        let html = '<div class="display-album flex-row"><div class="display-title">%title%</div><div class="display-artist">%artist%</div><div class="display-cover"><img src="%url%"alt=""></div><div class="remove-album">Remove Waifu! X</div>'
        let newHtml = html.replace('%title%', album.title);
        newHtml = newHtml.replace('%artist%', album.artist);
        newHtml = newHtml.replace('%url%', album.url);
        document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);


    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('artist').value = '';
        document.getElementById('url').value = '';
    }

    deleteAlbum(target){
        if(target.className === 'remove-album') {
            target.parentElement.remove();
        }
    }
}

//Event Listener for Album
document.getElementById('form').addEventListener('submit', function(e){
    //Get Values
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const url = document.getElementById('url').value;

    //inmstantiate new album
    const album = new Album(title, artist, url);
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