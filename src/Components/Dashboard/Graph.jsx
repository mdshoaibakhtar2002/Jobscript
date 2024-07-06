import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Stack } from '@mui/material';

// Register the necessary components in ChartJS
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Your data and configuration
const DATA_COUNT = 12;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

// Sample Utils object to simulate your Utils functions
const Utils = {
    months: (config) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    numbers: (config) => Array.from({ length: config.count }, () => Math.floor(Math.random() * (config.max - config.min + 1)) + config.min),
    CHART_COLORS: {
        red: 'rgba(54, 54, 54)',
        blue: 'rgba(232, 232, 232)'
    },
    transparentize: (color, opacity) => {
        const alpha = 1 - opacity;
        return color.replace('1)', `${alpha})`);
    }
};

const labels = Utils.months({ count: 7 });
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Applied',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
            stack: 'Stack 0'
        },
        {
            label: 'Selected',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
            stack: 'Stack 1',
        }
    ]
};

const Graph = () => {
    return (
        <Stack width={'100%'}>
            <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true} } }} />
        </Stack>
    );
};

export default Graph;
