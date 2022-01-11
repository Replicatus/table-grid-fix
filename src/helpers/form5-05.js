export default {
    countCells: 6,
    massive: [
        {
            dataField: 'npg0',
            cols: 1,
            rows: 2,
            text: 'НПС (код и наименование)',
            class: 'd-flex flex-row align-start justify-start ',
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
            cols: 4,
            rows: 1,
            text: 'Свидетельство о профессионально-общественной аккредитации образовательных программ\t\t\t\t\t\t\t\n',
            order: 1,
            variable: false,
        },
        {
            dataField: 'npg16',
            cols: 1,
            rows: 2,
            text: "Примечания (заполняется при необходимости)",
            order: 1,
            variable: false,
        },
        {
            dataField: 'npg12',
            cols: 1,
            rows: 1,
            text: 'серия и номер\n' +
                'бланка свидетельства\t\n',
            order: 2,
            variable: false,
        },
        {
            dataField: 'npg13',
            cols: 1,
            rows: 1,
            text: "серия и номер бланка приложения",
            order: 3,
            variable: false,
        },
        {
            dataField: 'npg14',
            cols: 1,
            rows: 1,
            text: `дата выдачи свидетельства`,
            order: 4,
            variable: false,
        },
        {
            dataField: 'npg15',
            cols: 1,
            rows: 1,
            text: `дата окончания действия `,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg',
            cols: 1,
            rows: 1,
            headerClass: 'd-flex flex-row justify-start',
            class: 'justify-start d-flex flex-row',
            text: `1`,
            order: 6,
            variable: true,
            template: (row) => {
                return row.sprKcpGroupId + ' - ' + row.sprKcpGroupName
            }
        },
        {
            dataField: 'gpsnm22K21',
            cols: 1,
            rows: 1,
            text: `3`,
            order: 7,
            variable: true,
            styles: 'justify-content: unset; text-align: center; text-align: center;',
            props: (row, cell, loading) => {
                return {
                    value: row[cell.dataField],
                    title: 'серия и номер бланка свидетельства',
                    cell: cell,
                    id: row.id,
                    row: row,
                    loading: loading,
                }
            },
        },
        {
            dataField: 'gpsnp22K21',
            cols: 1,
            rows: 1,
            text: `4`,
            order: 8,
            variable: true,
            styles: 'justify-content: unset; text-align: center;',
            props: (row, cell, loading) => {
                return {
                    value: row[cell.dataField],
                    title: 'серия и номер бланка приложения',
                    cell: cell,
                    id: row.id,
                    row: row,
                    loading: loading,
                }
            },
        },
        {
            dataField: 'gpdtb22K21',
            cols: 1,
            rows: 1,
            text: `5`,
            order: 9,
            variable: true,
            styles: 'justify-content: unset; text-align: center;',
            props: (row, cell, loading) => {
                return {
                    value: row[cell.dataField],
                    title: 'дата выдачи свидетельства\n' +
                        'дата окончания ',
                    cell: cell,
                    id: row.id,
                    row: row,
                    loading: loading,
                }
            },
        },
        {
            dataField: 'gpdte22K21',
            cols: 1,
            rows: 1,
            text: `6`,
            order: 10,
            variable: true,
            styles: 'justify-content: unset; text-align: center;',
            props: (row, cell, loading) => {
                return {
                    value: row[cell.dataField],
                    title: 'дата окончания действия',
                    cell: cell,
                    id: row.id,
                    row: row,
                    loading: loading,
                }
            },
        },
        {
            dataField: 'gptxt22K21',
            cols: 1,
            rows: 1,
            text: `7`,
            order: 11,
            variable: true,
            styles: 'justify-content: unset; text-align: center;',
            props: (row, cell, loading) => {
                return {
                    value: row[cell.dataField],
                    title: 'Примечания (заполняется при необходимости)',
                    cell: cell,
                    id: row.id,
                    row: row,
                    loading: loading,
                }
            },
        },
    ]
}
