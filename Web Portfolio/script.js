const hireBtn = document.querySelector('.hire-btn');
const profilePic = document.querySelector('.profile-pic');

hireBtn.addEventListener('mouseenter', () => {
    profilePic.style.filter = 'grayscale(0)';
});

hireBtn.addEventListener('mouseleave', () => {
    profilePic.style.filter = 'grayscale(100)';
});