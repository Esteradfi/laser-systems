import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TableState {
    isChoiceType: boolean,
    newRowType: string,
    filter: string,
    data: Array<TableData>,
    newRow: TableData
}

export interface TableData {
    id: number | null,
    type: string,
    organization: string,
    content: string,
    date: string,
    transferred: string,
    address?: string,
    deliveryType?: string,
    envelope?: string,
    whoPassed?: string,
    datePassed?: string
}

const initialState: TableState = {
    isChoiceType: false,
    newRowType: '',
    filter: "all",
    data: [
        {
            id: 1,
            type: "incoming",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
            datePassed: '24.01.2023'
        },
        {
            id: 2,
            type: "incoming",
            organization: 'ЗАО ГК "НАВИГАТОР"',
            content: 'Счет №227 от 09.12.2022, акт сдачи-приемки работ по этапу №2 от 09.12.2022 к договору №1-06/22-ЛС от 11.01.2022 - 2 экз',
            date: '20.01.2023',
            transferred: 'Жукова',
            whoPassed: "курьер"
        },
        {
            id: 3,
            type: "incoming",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 4,
            type: "incoming",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 5,
            type: "incoming",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 6,
            type: "incoming",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 7,
            type: "incoming",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 8,
            type: "incoming",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 9,
            type: "outgoing",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 10,
            type: "incoming",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 11,
            type: "outgoing",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 12,
            type: "outgoing",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 13,
            type: "outgoing",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 14,
            type: "outgoing",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 15,
            type: "outgoing",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 16,
            type: "outgoing",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 17,
            type: "incoming",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 18,
            type: "outgoing",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 19,
            type: "incoming",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        },
        {
            id: 20,
            type: "outgoing",
            organization: 'ООО "Шторм"',
            content: 'акт №168 от 16.12.2022, акт №143 от 11.11.2022',
            date: '24.01.2023',
            transferred: 'Дучак',
        }
    ],
    newRow: {
        id: null,
        type: '',
        organization: '',
        content: '',
        date: '',
        transferred: '',
        address: '',
        deliveryType: '',
        envelope: '',
        whoPassed: '',
        datePassed: ''
    }
};

export const tableSlice = createSlice({
    name: 'Table',
    initialState,
    reducers: {
        changeIsChoiceType: (state, action: PayloadAction<boolean>) => {
            state.isChoiceType = action.payload;
        },
        changeNewRowType: (state, action: PayloadAction<string>) => {
            state.newRowType = action.payload;
        },
        addNewRow: (state, action: PayloadAction<TableData>) => {
            state.data.push(action.payload);
        },
        changeFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        }
    },
})

export const { changeIsChoiceType, changeNewRowType, addNewRow, changeFilter } = tableSlice.actions;
export default tableSlice.reducer;