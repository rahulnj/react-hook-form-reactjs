import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([
    {
      code: 1,
      type: 'mobile',
      value: '1234567890',
    },
    {
      code: 1,
      type: 'phone',
      value: '0987654321',
    },
    {
      code: 1,
      type: 'email',
      value: 'someone@gmail.com',
    },
  ])

  return (
    <form className='container'>
      <div className='app'>
        <div className='fieldWrapper'>
          <label htmlFor='type'>Type</label>
          <input type='text' readOnly />
        </div>
        <div className='fieldWrapper'>
          <label htmlFor='value'>Value</label>
          <input type='text' />
        </div>
        <div className='fieldWrapper'>
          <label htmlFor='remark'>Remark</label>
          <input type='text' value={'none'} readOnly />
        </div>
      </div>
      <div className='fieldWrapper'>
        <button type='submit'>Edit</button>
      </div>
    </form>
  )
}

export default App
