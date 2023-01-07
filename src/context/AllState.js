import React, {useState} from 'react'
import UserContext from './AllContext'

const AllState = (props) => {
    const [curPage, setCurPage] = useState(1)
    const [plan, setPlan] = useState('Arcade')
    const [timePlan, setTimePlan] = useState('Monthly')
    const [onlineAdd, setOnlineAdd] = useState(false)
    const [storageAdd, setStorageAdd] = useState(false)
    const [profileAdd, setProfileAdd] = useState(false)

  return (
      <UserContext.Provider value={{
          curPage, setCurPage, plan, setPlan, timePlan, setTimePlan,
        onlineAdd, setOnlineAdd, storageAdd, setStorageAdd, profileAdd, setProfileAdd
      }}>
          {props.children}
    </UserContext.Provider>
  )
}

export default AllState