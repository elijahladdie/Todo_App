/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { MessageOutlined, MoreOutlined } from '@ant-design/icons'

import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

const Todo = ({ todos, setShowEdit }) => {
   

    return (
        <>
            {todos && 
            todos.map((todo) => todo && (
                <Card
                    key={todo?.id * Math.random()}
                    
                    actions={[
                        <div className='flex justify-between px-4'>

                            <div className="flex items-center -space-x-3">
                                <img alt="natali craig"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                    className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
                                <img alt="Tania Andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                    className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
                                <img alt="Tania Andrew"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                    className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
                            </div>
                            <span className='flex gap-2 items-center' >
                                <MessageOutlined className='text-lg' />
                                5
                            </span>
                        </div>
                    ]}
                    className='h-fit w-full mb-1'
                >
                    <div className='flex justify-between w-full pb-3 '>
                        {todo && todo?.completed  ? <h1 className='text-custom-green bg-custom-light-green px-3 rounded capitalize font-bold'> Completed</h1> : <h1 className='text-custom-sky-blue bg-custom-light-blue px-3 rounded capitalize font-bold'>In Progress</h1>}
                        <h1><MoreOutlined onClick={()=> setShowEdit(todo)}/></h1>
                       
                    </div>
                    <Meta
                        title={todo?.dodo && todo.todo.split(" ")[0]}
                        description={todo.todo}
                    />

                </Card>
            ))}
        </>
    )
}

export default Todo
