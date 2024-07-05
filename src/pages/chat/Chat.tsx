import React, { useState } from 'react'
import ChartHeader from '../../Components/chat/ChartHeader'

import ChatList from '../../Components/chat/ChatList'
import ChatPlace from '../../Components/chat/ChatPlace'
import { useGetVendorQuery } from '../../Redux/features/ChatSlice'
import ChatSearch from '../../Components/chat/ChatSearch'

const Chat = () => {
    const myId = "bca80aa7-5759-4793-9988-270396d36612"
    const { data, error, isLoading:vendorLoading } = useGetVendorQuery(myId);
    const vendors = data ? data.vendors : []
    const [selectedUser,setSelectedUser] = useState({})

    const handelSelect = (data:any)=>{
        setSelectedUser(data)
    }

   
    return (
        <div className='w-full h-screen  flex flex-col gap-[10px] bg-gray-100'>
            <ChartHeader />
            <div className=' flex flex-row w-full gap-[10px] p-2'>
                <div className='flex flex-col  w-1/4 '>
                    <ChatSearch  handelSelect={handelSelect} />
                    <div className='flex mt-2 border-b-[6px] flex-row justify-between gap-[10px] bg-white rounded-t-[12px] border-primary p-3 w-1/3'>
                        <span>Chats</span>
                        <span className='w-[20px] h-[20px] bg-primary text-white flex items-center justify-center rounded-full text-[12px]'>2</span>
                    </div>
                    <ChatList selectedUser={selectedUser} handelSelect={handelSelect} vendors={vendors} isLoading={vendorLoading}/>
                  
                </div>
                <ChatPlace selectedUser={selectedUser}/>
            </div>

        </div>
    )
}

export default Chat