import React from 'react';
import { ethers } from 'ethers';
import GetContract from '../hooks/GetContract';
import LoanVaultABI from '../ABIs/LoanVaultABI.json';
import { useState } from 'react';
import { useEffect } from 'react';

const Advanced = () => {

    const LoanVault = GetContract('0x212B73ca2774A2f271fE4DA4F2F25973ed2DC516', LoanVaultABI);

    const[advance,setAdvance]=useState('');

    const getAdvance=async()=>{
        var tx = await LoanVault.getAdvance('0',ethers.utils.parseEther(advance));
        console.log(tx);
    }

    return ( 
        <div className='flex flex-col w-[40%] bg-white p-6 rounded-2xl' >
            <p className='text-2xl font-bold text-slate-900' >Take Advance</p>
            <hr className='mt-2 mb-2 border-slate-900' />
            <input className='p-1 bg-slate-100 w-[100%] rounded-xl px-2 ' placeholder={"Advanced Amount"} onChange={(e)=>setAdvance(e.target.value)} />
            <button className='w-full h-fit p-2 mt-2 bg-slate-900 text-white rounded-xl' onClick={()=>getAdvance()} >Take Advance</button>
        </div>

     );
}
 
export default Advanced;