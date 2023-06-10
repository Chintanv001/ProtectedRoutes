import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

const Profile = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h3>Profile</h3>
        <button onClick={()=>dispatch({type:'logout'})}>Logout</button>
    </div>
  )
}

export default Profile