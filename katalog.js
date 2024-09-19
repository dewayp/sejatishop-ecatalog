function showSubmenu(submenuId) {
    // Hide all submenus
    var submenus = document.querySelectorAll('.submenu');
    submenus.forEach(function (submenu) {
        submenu.style.display = 'none';
    });

    // Show the clicked submenu
    var submenu = document.getElementById(submenuId);
    submenu.style.display = 'block';
}

// When clicking on a size link, the PDF will be loaded into the iframe
document.querySelectorAll('.submenu ul li a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var pdfUrl = this.getAttribute('href');
        document.getElementById('catalogViewer').src = pdfUrl;
    });
});
