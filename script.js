document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabPanels.forEach(panel => panel.classList.remove('active'));
            tabPanels[index].classList.add('active');
        });
    });
});