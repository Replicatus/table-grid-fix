export default {
    countCells: 7,
    massive: [
        {
            dataField: 'npg0',
            cols: 1,
            rows: 4,
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
            dataField: 'npg01',
            cols: 1,
            rows: 4,
            text: 'источник финансирования',
            class: 'd-flex flex-row align-center justify-start ',
            headerClass: 'align-end ',
            headerStyles: `min-width: 250px;`,
            order: 0,
            variable: false,
        },
        {
            dataField: 'npg11',
            cols: 3,
            rows: 1,
            text: 'Зачислено на обучение',
            order: 1,
            variable: false,
        },
        {
            dataField: 'npg12',
            cols: 2,
            rows: 1,
            text: 'Средний бал ЕГЭ',
            order: 2,
            variable: false,
        },
        {
            dataField: 'npg13',
            cols: 3,
            rows: 1,
            text: "в 2021/2022 учебном году",
            order: 3,
            variable: false,
        },
        {
            dataField: 'npg14',
            cols: 2,
            rows: 1,
            text: `в 2021/2022 учебном году`,
            order: 4,
            variable: false,
        },
        {
            dataField: 'npg31',
            cols: 1,
            rows: 1,
            text: `без вступит. испытаний`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg32',
            cols: 1,
            rows: 1,
            text: `с учетом ЕГЭ, общ.конкур.`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg33',
            cols: 1,
            rows: 1,
            text: `с учетом ЕГЭ по цел.квоте`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg34',
            cols: 1,
            rows: 1,
            text: `по общ. конкурсу`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg35',
            cols: 1,
            rows: 1,
            text: `по цел .квоте`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg36',
            cols: 1,
            rows: 1,
            text: `очно`,
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
            text: `очно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg39',
            cols: 1,
            rows: 1,
            text: `очно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg310',
            cols: 1,
            rows: 1,
            text: `очно`,
            order: 5,
            variable: false,
        },
        {
            dataField: 'npg',
            cols: 1,
            rows: 1,
            headerClass: 'd-flex flex-row justify-start',
            text: `1`,
            order: 6,
            variable: false,
        },
        {
            dataField: '',
            cols: 1,
            rows: 1,
            text: `3`,
            order: 7,
            variable: false,
        },
        {
            dataField: '',
            cols: 1,
            rows: 1,
            text: `4`,
            order: 8,
            variable: false,
        },
        {
            dataField: '',
            cols: 1,
            rows: 1,
            text: `5`,
            order: 9,
            variable: false,
        },
        {
            dataField: '',
            cols: 1,
            rows: 1,
            text: `6`,
            order: 7,
            variable: false,
        },
        {
            dataField: '',
            cols: 1,
            rows: 1,
            text: `7`,
            order: 8,
            variable: false,
        },
        {
            dataField: '',
            cols: 1,
            rows: 1,
            text: `8`,
            order: 9,
            variable: false,
        },
    ],
    massiveForRows: [
        {
            dataField: 'npg',
            cols: 1,
            rows: 1,
            order: 0,
            variable: true,
            class: 'justify-start d-flex flex-row text-left',
            rowsDataCalc: (row) => {
                return row.uslName ? 1 : 4;
            },
            colsDataCalc: (row) => {
                console.log(row.uslName , row.uslName ? 7 : 1)
                return row.uslName ? 7 : 1;
            },
        },
        {
            dataField: 'ff1',
            cols: 1,
            rows: 1,
            text: `за счет бюджетных ассигнований федерального бюджета`,
            order: 1,
            variable: true,
        },
        {
            dataField: 'e0sfo21Mpk',
            cols: 1,
            rows: 1,
            order: 2,
            variable: true,
        }, {
            dataField: 'esofo21Mpk',
            cols: 1,
            rows: 1,
            order: 3,
            variable: true,
        }, {
            dataField: 'escfo21Mpk',
            cols: 1,
            rows: 1,
            order: 4,
            variable: true,
        },{
            dataField: 'bsofo21Mpk',
            cols: 1,
            rows: 1,
            order: 5,
            variable: true,
        },{
            dataField: 'bscfo21Mpk',
            cols: 1,
            rows: 1,
            order: 6,
            variable: true,
        },
        {
            dataField: 'ff2',
            cols: 1,
            rows: 1,
            text: `за счет средств бюджета субъекта Российской Федерации`,
            order: 1,
            variable: true,
        },
        {
            dataField: 'e0sro21Mpk',
            cols: 1,
            rows: 1,
            order: 2,
            variable: true,
        }, {
            dataField: 'esoro21Mpk',
            cols: 1,
            rows: 1,
            order: 3,
            variable: true,
        }, {
            dataField: 'escro21Mpk',
            cols: 1,
            rows: 1,
            order: 4,
            variable: true,
        },{
            dataField: 'bsoro21Mpk',
            cols: 1,
            rows: 1,
            order: 5,
            variable: true,
        },{
            dataField: 'bscro21Mpk',
            cols: 1,
            rows: 1,
            order: 6,
            variable: true,
        },
        {
            dataField: 'ff3',
            cols: 1,
            rows: 1,
            text: `за счет местного бюджета`,
            order: 1,
            variable: true,
        },
        {
            dataField: 'e0smo21Mpk',
            cols: 1,
            rows: 1,
            order: 2,
            variable: true,
        }, {
            dataField: 'esomo21Mpk',
            cols: 1,
            rows: 1,
            order: 3,
            variable: true,
        }, {
            dataField: 'escmo21Mpk',
            cols: 1,
            rows: 1,
            order: 4,
            variable: true,
        },{
            dataField: 'bsomo21Mpk',
            cols: 1,
            rows: 1,
            order: 5,
            variable: true,
        },{
            dataField: 'bscmo21Mpk',
            cols: 1,
            rows: 1,
            order: 6,
            variable: true,
        },
        {
            dataField: 'ff4',
            cols: 1,
            rows: 1,
            text: `по договорам об оказании платных образовательных услуг`,
            order: 1,
            variable: true,
        },
        {
            dataField: 'e0spo21Mpk',
            cols: 1,
            rows: 1,
            order: 2,
            variable: true,
        }, {
            dataField: 'esopo21Mpk',
            cols: 1,
            rows: 1,
            order: 3,
            variable: true,
        }, {
            dataField: 'escpo21Mpk',
            cols: 1,
            rows: 1,
            order: 4,
            variable: true,
        },{
            dataField: 'bsopo21Mpk',
            cols: 1,
            rows: 1,
            order: 5,
            variable: true,
        },{
            dataField: 'bscpo21Mpk',
            cols: 1,
            rows: 1,
            order: 6,
            variable: true,
        },
    ]
}
