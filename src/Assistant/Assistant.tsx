import React from 'react'
import classNames from 'classnames'
import './Assistant.css'

import { IAssistantProps } from '../type'
import { DownloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const Assistant: React.FC<IAssistantProps> = props => {
  return (
    <div className={classNames('rce-container-clist', props.className, 'w-full')}>
      <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
        <div className='bg-white p-8 rounded-lg shadow-lg'>
          <h1 className='text-2xl font-bold text-gray-900'>Hello, RUNOOB!</h1>
          <p className='mt-4 text-gray-600'>菜鸟教程，学的不仅是技术，更是梦想！</p>
          <button className='mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>点我试试</button>
          <Button className='ml-5' type='primary' shape='round' icon={<DownloadOutlined />} size={'large'} />
        </div>
      </div>
    </div>
  )
}

export default Assistant
