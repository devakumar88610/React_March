import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { openAction, closeAction } from '../Redux/HandleClick/handleClickAction';
import Login from './Registration/Login';

const Modal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => {
        console.log(state.isOpen.isOpen);
        return state.isOpen.isOpen
    });

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') dispatch(closeAction());
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <button className='bg-blue-500 px-3 py-2 text-white rounded-full' onClick={() => dispatch(openAction())}>Open Modal</button>
            {isOpen && (
                <div className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-slate-900 bg-opacity-30 backdrop-blur-sm flex justify-center items-center`}
                    id='wrapper' onClick={handleClose}>

                    <div div className='w-[350]' >
                        <div className='flex justify-center mb-5' >
                            <AiOutlineClose className='w-8 h-8 text-white p-2 bg-red-500 rounded-full cursor-pointer'
                                onClick={() => dispatch(closeAction())} />
                        </div>
                        <div className='shadow-2xl bg-white rounded-2xl overflow-hidden'>
                            <Login />
                        </div>
                    </div >
                </div >
            )}
        </div>
    );
};

export default Modal;