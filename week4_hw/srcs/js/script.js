document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('gnb');
    const menuLinks = document.querySelectorAll('.main-menu > li > a');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            nav.classList.toggle('active');
        });
    });

    document.addEventListener('click', () => {
        if (nav) nav.classList.remove('active');
    });


    setTimeout(() => {
        const slider = document.querySelector('.slide-container');
        if (slider) slider.classList.add('active');
    }, 300);


    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            document.querySelectorAll('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });


    const modal = document.getElementById('modal-overlay');
    const openPopup = document.getElementById('target-popup');
    const closeBtn = document.getElementById('close-popup');

    if (openPopup) {
        openPopup.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});