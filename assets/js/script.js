const tabmenu = document.querySelectorAll(".js-tabmenu li");
const tabcontent = document.querySelectorAll(".js-tabcontainer .instalacoes-item");

(() => {

    if (tabmenu.length && tabcontent.length) {
        tabcontent[0].classList.add("is-active");

        function openTab(index) {
            tabcontent.forEach((content) => {
                content.classList.remove("is-active");
            })

            tabcontent[index].classList.add("is-active");
        }

        tabmenu.forEach((link, index) => {
            link.addEventListener('click', () => {
                openTab(index);
            })
        })
    }

})();