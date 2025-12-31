$('#toggleBtn').on('click', function () {

    $('#sidebar').toggleClass('collapsed');

    setTimeout(() => {

        if (overviewChart) {
            overviewChart.destroy();
            overviewChart = null;
        }

        initOverviewChart();

    }, 310); // CSS transition time
});