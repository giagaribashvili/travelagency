const images = [
    'https://s3-alpha-sig.figma.com/img/f970/61df/06638a851bd17f7057bcf6fa1bb04afc?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSrzfqeNatTaEsq5SMXLwKePqgxrsqC~n0VPJHgCQDUsEpPcg-u1ZRcMdL5GliDDAid~HR3WtbQl7pNABjgTCTyHrOe06Kz~xZ39X0El1oq8MVVqnZ-C2uD8~d1zoC2opzhUmlnca9uv53~hKGHyvHJUGqXIZ~Sf41VRems9WdFRdOX-J8H~xxY0yByC6LGdFv9gxES1F15W-VaC3O7NEwFnki0-j3mi8W4qMMoZPyf2yoOeObbg9795L6OFEGwW-staZ0Xgy~-fUyzfNNBtsvPSjf-p4a5WROweAGPjiheHc4xQ3xQKJiUN1aHPpG36LGP1B~Jki7RpY300lf8XYw__',
    'https://s3-alpha-sig.figma.com/img/b138/3f3d/049e7e32f8b6137191c3b673c975ca31?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MoYBqVWQW4yDd1FpnISZkou1ArfZaYFRf-yxHmuCKYjlIdf4x~h3TPql-N~PuCgibv2ZqYKdNelCPyCJfohbY1ZuWH1oYhJtgeBSV1ywOIxSPtSQYUpzA8mdfm5ceyFYf52GO-Iz9SLTbj7RsaNHBR4NTurSYTrfRziF8Hk4p9etTCzuJAvMbRgV2t9RzSIIWN1Kk9ZxzcKb5JWwFJt4PDIvq-KdqNVxp9w3lC4oU~tcHTNnR2OHCv4B0ws9NoYJmCjR9sqINa0zdFs2SIp4M40WplS5TJYI1y4Yx4MgXx~E6t-swe~oe8rzhwKyaA2GOWl1Q8jVKFuzkE3Hy8TARg__',
    'https://s3-alpha-sig.figma.com/img/604a/e8b7/bdeb76439435bcdd5226f9f7e62e314f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NGUDO46kWSScg7O2AlbunSrsnkO2X~VqZFqlExe4A4tzFPIib1gWqplJIoFJJS4b4jcxpPZHintq4bbA7YMkwVTVprUc2K7gbEmlWYAO7iwv8CoOvfQSPqDgNFEIRQIc~GInL9r-7iqJ5ZmBv0Nx4ESbKX11sT-~OopiXwtBOk7VAJS5DMvKFYuc2vUG7sZQBl6hqSAIX2tk2O~1y~TxotBNRvHfmSBrPXFfl8-GLf7v-4K1Hbjws48CReP3fTDpK5JfWw-7Y1aq6wwMQ2JrwZEMqA0Lndx-KWm8Fmcs5tq7dfB-okluVyrj9ehn5QTfxIgLcYihlDAtMc09GMyyhw__',
    '/img/bambukebi.jpg',
];

class Carousel{
    constructor(container){
        this.track = container.querySelector('.carousel-track');
        this.currentIndex = images.length;
        this.setupCarousel();
        this.addEventListeners(container);
    }

    setupCarousel(){
        const allimg = [...images, ...images, ...images, ...images];
        allimg.forEach((src, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `<img src="${src}" alt="Image ${index}">`;
            this.track.appendChild(slide);
        });
        this.updatePosition;
    }

    updatePosition() {
        this.track.style.transform = `translateX(-${this.currentIndex * (100/3)}%)`;
      }


      addEventListeners(container) {
        container.querySelector('.prev').addEventListener('click', () => this.prev());
        container.querySelector('.next').addEventListener('click', () => this.next());
        
        this.track.addEventListener('transitionend', () => {
          if (this.currentIndex <= images.length/2) {
            this.track.style.transition = 'none';
            this.currentIndex += images.length;
            this.updatePosition();
            setTimeout(() => {
              this.track.style.transition = 'transform 1.5s ease-out';
            });
          } else if (this.currentIndex >= this.track.children.length - images.length - 3) {
            this.track.style.transition = 'none';
            this.currentIndex -= images.length;
            this.updatePosition();
            setTimeout(() => {
              this.track.style.transition = 'transform 1.5s ease-out';
            });
          }
        });
      }

      next() {
        this.currentIndex++;
        this.updatePosition();
      }

      prev() {
        this.currentIndex--;
        this.updatePosition();
      }
    }

new Carousel(document.querySelector('.carousel-container'));
    