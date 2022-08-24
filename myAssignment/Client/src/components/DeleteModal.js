import React from 'react';

const DeleteModal = () => {
    return (
        <div>
            <div className='deleteModal'>
                <h1>Are you sure?</h1>
                <h3>Once you have deleted the item it will be gone for good...</h3>
                <button className='primary-btn'>Delete Product</button>
                <button className='secondary-btn'>Cancelkl8i</button>
            </div>
            
        </div>
    );
};

export default DeleteModal;