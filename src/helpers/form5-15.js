export default {
    countCells: 10,
    massive: [
        {
            dataField: 'npg0',
            cols: 1,
            rows: 3,
            text: 'НПС (код и наименование)',
            class: 'd-flex flex-row align-center justify-start ',
            headerClass: 'align-end ',
            headerStyles: `min-width: 350px;`,
            order: 0,
            variable: false,
            // template: (row) => {
            //     return row.sprKcpGroupId + ' - ' + row.sprKcpGroupName
            // }
        },
        {
            dataField: 'npg11',
            cols: 6,
            rows: 1,
            text: 'Обучающихся (искл. квоту иностр.граждан)',
            order: 1,
            variable: false,
        },
        {
            dataField: 'npg111',
            cols: 3,
            rows: 1,
            text: 'Иностр.граждан, обучающихся по квоте',
            order: 1,
            variable: false,
        },
        {
            dataField: 'npg12',
            cols: 3,
            rows: 1,
            text: 'на 1.01.2020 г.',
            order: 2,
            variable: false,
        },
        {
            dataField: 'npg13',
            cols: 3,
            rows: 1,
            text: "на 1.01.2021 г.",
            order: 3,
            variable: false,
        },
        {
            dataField: 'npg14',
            cols: 3,
            rows: 1,
            text: `на 1.01.2021 г.`,
            order: 4,
            variable: false,
        },
        {
            dataField: 'npg31',
            cols: 1,
            rows: 1,
            text: `очно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg32',
            cols: 1,
            rows: 1,
            text: `очно-заочно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg33',
            cols: 1,
            rows: 1,
            text: `заочно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg34',
            cols: 1,
            rows: 1,
            text: `очно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg35',
            cols: 1,
            rows: 1,
            text: `очно-заочно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg36',
            cols: 1,
            rows: 1,
            text: `заочно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg37',
            cols: 1,
            rows: 1,
            text: `очно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg38',
            cols: 1,
            rows: 1,
            text: `очно-заочно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg39',
            cols: 1,
            rows: 1,
            text: `заочно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg',
            cols: 1,
            rows: 1,
            headerClass: 'd-flex flex-row justify-start',
            class: 'justify-start d-flex flex-row text-left',
            text: `1`,
            order: 6,
            variable: true,
        },
        {
            dataField: 'nosgo20Nk1',
            cols: 1,
            rows: 1,
            text: `3`,
            order: 7,
            variable: true,
        },
        {
            dataField: 'nosgv20Nk1',
            cols: 1,
            rows: 1,
            text: `4`,
            order: 8,
            variable: true,
        },
        {
            dataField: 'nosgz20Nk1',
            cols: 1,
            rows: 1,
            text: `5`,
            order: 9,
            variable: true,
        },
        {
            dataField: 'nosgo21Nk1',
            cols: 1,
            rows: 1,
            text: `6`,
            order: 7,
            variable: true,
        },
        {
            dataField: 'nosgv21Nk1',
            cols: 1,
            rows: 1,
            text: `7`,
            order: 8,
            variable: true,
        },
        {
            dataField: 'nosgz21Nk1',
            cols: 1,
            rows: 1,
            text: `8`,
            order: 9,
            variable: true,
        },
        {
            dataField: 'noqgo21Dop',
            cols: 1,
            rows: 1,
            text: `9`,
            order: 7,
            variable: true,
        },
        {
            dataField: 'noqgv21Dop',
            cols: 1,
            rows: 1,
            text: `10`,
            order: 8,
            variable: true,
        },
        {
            dataField: 'noqgz21Dop',
            cols: 1,
            rows: 1,
            text: `11`,
            order: 9,
            variable: true,
        },
    ]
}
