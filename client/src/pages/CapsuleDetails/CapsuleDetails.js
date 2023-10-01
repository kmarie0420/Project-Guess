import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CAPSULE } from '../../utils/mutations';

const CapsuleDetails = () => {
    const [createCapsule] = useMutation(CREATE_CAPSULE);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const title = event.target.title.value;  
        const openDate = event.target.openDate.value;
        const letter = event.target.letter.value; 

        
        console.log('Title:', title);
        console.log('Open Date:', openDate);
        console.log('Letter:', letter);

        try {
            const response = await createCapsule({ 
                variables: { input: { title, openDate, letter } } 
            });

          
            console.log('Server Response:', response);
            
        } catch (error) {
            console.error("Error creating capsule:", error);
        }
    };

    return (
        <div>
            <h1>Create New Capsule</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" required />
                </div>
                <div>
                    <label>Open Date:</label>
                    <input type="date" name="openDate" required />
                </div>
                <div>
                    <label>Letter:</label>
                    <textarea name="letter" rows="10" required></textarea> {/* Text area for the letter */}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CapsuleDetails;

