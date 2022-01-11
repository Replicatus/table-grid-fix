export default {
    countCells: 7,
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
            cols: 3,
            rows: 1,
            text: 'Принятых на обучение (искл. квоту иностр.граждан)',
            order: 1,
            variable: false,
        },
        {
            dataField: 'npg111',
            cols: 3,
            rows: 1,
            text: 'Выпускников (искл. квоту иностр.граждан)',
            order: 1,
            variable: false,
        },
        {
            dataField: 'npg12',
            cols: 3,
            rows: 1,
            text: ' на 1.10.2021 г.',
            order: 2,
            variable: false,
        },
        {
            dataField: 'npg13',
            cols: 3,
            rows: 1,
            text: " на 1.10.2021 г.",
            order: 3,
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
            dataField: 'npsgo21Vp1',
            cols: 1,
            rows: 1,
            text: `3`,
            order: 7,
            variable: true,
        },
        {
            dataField: 'npsgv21Vp1',
            cols: 1,
            rows: 1,
            text: `4`,
            order: 8,
            variable: true,
        },
        {
            dataField: 'npsgz21Vp1',
            cols: 1,
            rows: 1,
            text: `5`,
            order: 9,
            variable: true,
        },
        {
            dataField: 'nvsgo21Vp1',
            cols: 1,
            rows: 1,
            text: `6`,
            order: 7,
            variable: true,
        },
        {
            dataField: 'nvsgv21Vp1',
            cols: 1,
            rows: 1,
            text: `7`,
            order: 8,
            variable: true,
        },
        {
            dataField: 'nvsgz21Vp1',
            cols: 1,
            rows: 1,
            text: `8`,
            order: 9,
            variable: true,
        },
    ]
}