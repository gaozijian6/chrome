window.addEventListener("load", () => {
    const blogContainerAside = document.querySelector('.blog_container_aside');
    blogContainerAside?.style.setProperty('display', 'none', 'important');

    const blogContentBox = document.querySelector('.blog-content-box');
    blogContentBox.style.setProperty('z-index', '100', 'important');
    blogContentBox.style.setProperty('left', '-360px', 'important');
    blogContentBox.style.setProperty('width', '95vw', 'important');

});
