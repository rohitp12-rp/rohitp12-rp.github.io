
// gsap animation 

let books = gsap.utils.toArray('.cover, .author, h3');
books.forEach(book => {
  gsap.to(book, { 
    x: 800,
    scrollTrigger: {
      trigger: book,
      start: '-50% center',
      end: '50% center',
      scrub: true
    }
  })
});
// let tl = gsap.timeline({
//     scrollTrigger:{
//         trigger: '.books',
//         start: '-50% center',
//         end: '50% center',
//         scrub: true,
//         markers: true
//     }
// })
// tl.to('.books',{
//     x:800
// })
// Smooth scroll 
// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)