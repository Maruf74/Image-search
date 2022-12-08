const API_KEY =`19535515-46d1c051007f6c9ef0928da25`;
const URL = `https://pixabay.com/api/?key=19535515-46d1c051007f6c9ef0928da25&q=yellow+flowers&image_type=photo&pretty=true`;
let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');
let out = document.querySelector('#output');


let id = 0;

const getURL = (query) => {
    return `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&pretty=true`;
};

const getPhotoHTML = (ul, lul) => {
    id++
    return `<div class="col-2 mt-3">
            <div class="rounded shadow border">
            <button type="button" class="btn w-100" data-bs-toggle="modal" data-bs-target="#id${id}">
            <img width="100%" height="150" src="${ul}" alt="">
            </button>
                    ${id}
            </div>
        </div>
        



        <div  class="modal fade" id="id${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div style="width:900px;" class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <img width="100%" height="600" src="${lul}" alt="">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
        
        
        
        
        
        
        `;
};



const lodPhoto = (query) => {
    out.innerHTML =" "
    axios
        .get(getURL(query))
        .then((res) =>{
            const photos = res.data.hits;
            console.log(photos);
            
            photos.forEach((photo) =>{
                out.innerHTML += getPhotoHTML(photo.previewURL, photo.largeImageURL)
            })

        })
}



btn.addEventListener('click',()=>{
    let query = inp.value;
    if(query.length>0){
        lodPhoto(query)
        
    }
})