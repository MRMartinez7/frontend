import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    console.log(file);
    const imgref = ref(this.storage, `image/`+ name)
    uploadBytes(imgref, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))

  }
  getImages(){
    const imageRef = ref(this.storage, 'image')
    list(imageRef)
    .then(async response =>{
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La Url es: " +  this.url);
      }
    })
    .catch(error => console.log(error))
    

  }
}
