

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600 ,
    delay: 450,
    reset: true,
});

sr.reveal('.header-logo',{delay:150, origin: 'left'});
sr.reveal('.header-list',{delay:200, origin: 'top'});
sr.reveal('.home-logo',{delay:300, origin: 'left'});
sr.reveal('.home-text',{delay:300, origin: 'right'});
sr.reveal('.about-text',{delay:150, origin: 'top'});
sr.reveal('header',{delay:150, origin: 'top'});
sr.reveal('.services',{delay:150, origin: 'bottom'});
sr.reveal('form',{delay:150, origin: 'left'});

