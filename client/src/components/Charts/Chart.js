import React, { useContext } from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'
import { AppContext } from '../../context/AppContext'
import "./Chart.scss";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

defaults.global.legend.position = 'bottom'

export const ChartV = () => {
    const { darkMode } = useSelector((state) => state.theme);

    const context = useContext(AppContext);

    const { t } = useTranslation();

    return (
        <AppContext.Provider>
        
            <div className={darkMode ? "chart-containerDarkMode" : "chart-container"}>

                    <Doughnut height={400}
                        data={{
                            labels: [`${t("expenses")}`, `${t("incomes")}`],
                            datasets: [
                                {
                                    label: '# of votes',
                                    data: [context.tempExpense, context.tempIncome],
                                    backgroundColor: [
                                        'rgba(217, 30, 24, 0.75)',
                                        'rgba(54, 162, 235, 0.75)',
                                    ],
                                    borderColor: [
                                        'rgba(217, 30, 24, 1)',
                                        'rgba(54, 162, 235, 1)',
                                    ],
                                    borderWidth: 3,
                                }
                            ]
                        }}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                            legend: {
                                labels: {
                                    fontSize: 16,
                                },
                            },
                            layout: {
                                padding: {
                                    left: 10,
                                    right: 10,
                                    top: 5,
                                    bottom: 3
                                }
                            }

                        }} />

                </div>
        </AppContext.Provider>
    );
}
