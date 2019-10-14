export const getImageType = (src) => {
    return new Promise((resolve) => {
        if (!src || typeof src !== "string") resolve("");
        
        const image = new Image();
        image.src = src;

        image.addEventListener('load', () => { 
            if ((image.width || image.height) === 0) {
                resolve("");
            }
            switch (true) {
                case image.width === image.height:
                    resolve("square");
                    break;
                case image.width > image.height:
                    resolve("landscape");
                    break; 
                case image.width < image.height:
                    resolve("portrait");
                    break;
                default: 
                    resolve("");
                    return; 
              }
        });
    });
}