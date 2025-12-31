google.charts.load('current', {
    packages: ['corechart', 'geochart']
});

google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    const geoData = google.visualization.arrayToDataTable([
        ['Country', 'Views'],
        ['United States', 300],
        ['United Kingdom', 200],
        ['Canada', 150],
        ['Australia', 200],
        ['India', 1000],
        ['Russia', 1000],
        ['South Africa', 1000],
        ['Ukraine', 400],
        // ['China', 1000],
        ['Canada', 400],
    ]);

    const geoOptions = {
        backgroundColor: 'transparent',
        datalessRegionColor: '#222634',
        colorAxis: { colors: ['#4da3ff'] }
    };

    new google.visualization.GeoChart(
        document.getElementById('geoChart')
    ).draw(geoData, geoOptions);
}

google.charts.setOnLoadCallback(drawDonut);

function drawDonut() {
    const data = google.visualization.arrayToDataTable([
        ['Source', 'Views'],
        ['tryangle.com', 1045],
        ['Unknown', 249],
        ['serenberry.org', 39],
        ['trevorglass.net', 33],
        ['evanpotter.com', 30],
        ['Other', 58]
    ]);

    const options = {
        pieHole: 0.75,
        backgroundColor: 'transparent',
        legend: 'none',
        pieSliceText: 'none',
        colors: ['#4da3ff','#37d0c3','#9bff88','#b48cff','#ffd66e','#6b7280'],
        chartArea: { width: '90%', height: '90%' }
    };

    const chart = new google.visualization.PieChart(
        document.getElementById('donutChart')
    );

    chart.draw(data, options);

    // Center text
    document.getElementById('donutChart').insertAdjacentHTML(
        'beforeend',
        `<div class="donut-center">
            <strong>1,480</strong>
            <span>views</span>
        </div>`
    );
}
let overviewChartInstance;

// document.addEventListener('DOMContentLoaded', function () {

//     const canvas = document.getElementById('overviewChart');

//     if (!canvas) {
//         console.error('overviewChart canvas not found');
//         return;
//     }

//     const ctx = canvas.getContext('2d');

//     overviewChartInstance = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ['Aug 1','Aug 5','Aug 10','Aug 15','Aug 20','Aug 25'],
//             datasets: [
//                 {
//                     label: 'Views',
//                     data: [320, 450, 380, 520, 410, 600],
//                     borderColor: '#4da3ff',
//                     backgroundColor: 'transparent',
//                     borderWidth: 2,
//                     tension: 0.4,
//                     pointRadius: 3
//                 },
//                 {
//                     label: 'Plays',
//                     data: [280, 390, 460, 410, 530, 480],
//                     borderColor: '#9bff88',
//                     backgroundColor: 'transparent',
//                     borderWidth: 2,
//                     tension: 0.4,
//                     pointRadius: 3
//                 }
//             ]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//                 legend: {
//                     labels: { color: '#9aa4bf' }
//                 }
//             },
//             scales: {
//                 x: { ticks: { color: '#6f7896' } },
//                 y: { ticks: { color: '#6f7896' } }
//             }
//         }
//     });

// });



let overviewChart;

function initOverviewChart() {
    const canvas = document.getElementById('overviewChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    overviewChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Aug 1','Aug 5','Aug 10','Aug 15','Aug 20','Aug 25'],
            datasets: [
                {
                    label: 'Views',
                    data: [350, 350, 440, 120, 225, 500],
                    borderColor: '#4da3ff',
                    tension: 0.4
                },
                {
                    label: 'Likes',
                    data: [320, 450, 380, 520, 410, 600],
                    borderColor: '#ff7722',
                    tension: 0.4
                },
                {
                    label: 'Plays',
                    data: [280, 390, 460, 410, 530, 480],
                    borderColor: '#9bff88',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false
        }
    });
}

document.addEventListener('DOMContentLoaded', initOverviewChart);
