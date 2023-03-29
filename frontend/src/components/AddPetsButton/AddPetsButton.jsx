import React, { useState } from 'react';

const AddPetsButton = () => {
    console.log('Get pet information.');
    return ( <div>
        <button oncClick={AddPetsButton}> Add Pets</button>
    </div> );
}
 
export default AddPetsButton;
