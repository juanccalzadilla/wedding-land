import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  constructor(private storage: Storage) { }

  async uploadImage(file: File): Promise<string> {
    const folder = file.type.startsWith('video/') ? 'videos' : 'images';
    const filePath = `${folder}/${uuidv4()}_${file.name}`;
    const fileRef = ref(this.storage, filePath);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  }


}
