import { render } from '@testing-library/react'
import * as reduxHooks from 'react-redux'

import Spreadsheet from '../Spreadsheet/Spreadsheet'
import { columns } from '../../data'

const items = [
  {
    id: 1, 
    username: 'Матвей Селиверстов', 
    phone: '(919) 885-88-51', 
    email: 'Marian_69@yahoo.com', 
    register_date: '2023-07-09',
    updatedAt: '2023-07-09T20:34:52.582Z',
  },
  {
    id: 2, 
    username: 'Юрий Туров', 
    phone: '(941) 758-28-43', 
    email: 'Marian_69@yahoo.com', 
    register_date: '2023-07-09',
    updatedAt: '2023-07-09T20:34:52.582Z',
  },
  {
    id: 3, 
    username: 'Дмитрий Смирнов', 
    phone: '(941) 268-38-44', 
    email: 'Marian_69@yahoo.com', 
    register_date: '2023-07-09',
    updatedAt: '2023-07-09T20:34:52.582Z',
  },
]

jest.mock('react-redux')

describe('Spreadsheet', () => {
  it('Должен создавать компонент Spreadsheet с пустым массивом', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(items)

    const view = render(<Spreadsheet headerTable={columns} />)

    expect(view).toMatchSnapshot()
  })
})