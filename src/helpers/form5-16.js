export default {
    countCells: 5,
    massive: [
        {
            dataField: 'npg0',
            cols: 3,
            rows: 2,
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
            cols: 1,
            rows: 1,
            text: 'Принятых на обучение\n' +
                '\n' +
                'в 2020 г.\n',
            order: 1,
            variable: false,
        },
        {
            dataField: 'npg111',
            cols: 1,
            rows: 1,
            text: 'Выпускников\n' +
                '\n' +
                'в 2020 г.\n',
            order: 1,
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
            dataField: 'npg34',
            cols: 1,
            rows: 1,
            text: `очно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg',
            cols: 3,
            rows: 1,
            headerClass: 'd-flex flex-row justify-start',
            class: 'justify-start d-flex flex-row text-left',
            text: `1`,
            order: 6,
            variable: true,
        },
        {
            dataField: 'npsgs21Nk1',
            cols: 1,
            rows: 1,
            text: `3`,
            order: 7,
            variable: true,
        },
        {
            dataField: 'nvsgs21Nk1',
            cols: 1,
            rows: 1,
            text: `4`,
            order: 8,
            variable: true,
        },
    ]
}
