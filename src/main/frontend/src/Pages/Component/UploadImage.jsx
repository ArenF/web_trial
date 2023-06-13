import { ref, getDownloadURL, listAll, uploadBytes, getStorage } from "firebase/storage";
import { storage } from "../../firebase";
import { useState } from "react";



export const upload = (imageUpload) => {
  if (imageUpload === null) return;
  if (imageUpload.name === undefined) return;

  const imageRef = ref(storage, `images/${imageUpload.name}`);
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
      console.log(url);
    });
  });
}

export const GetImage = async (key) => {
  getDownloadURL(ref(storage, 'images/' + key))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'


    // Or inserted into an <img> element
    const img = document.getElementsByClassName(key);
    for (let i = 0; i < img.length; i++) {
      img.item(i).setAttribute('src', url);
    }
  })
  .catch((error) => {
    // Handle any errors
  });
};

export const showUp = () => {
  const imageListRef = ref(storage, 'image/');
  listAll(imageListRef).then((respone) => {
    respone.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        console.log(url);
      });
    });
  });
}
// const imageListRef = ref(storage, 'image/');
// useEffect(() => {
//   listAll(imageListRef).then((response) => {
//     response.items.forEach((item) => {
//       getDownloadURL(item).then((url) => {
//         setImageList((prev) => [...prev, url]);
//       });
//     });
//   });
// }, []);
