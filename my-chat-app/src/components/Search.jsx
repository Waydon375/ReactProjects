import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find user' />
      </div>
      <div className="userChat">
        <img src="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000" alt="" />
        <div className="userChatInfo">
            <span>Bean</span>
        </div>
      </div>
    </div>
  )
}

export default Search
