// components/FileUpload.tsx
import React, { useState } from 'react';

export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    async function handleFileUpload() {
        if (!selectedFile) {
            console.log('No file selected.');
            return;
        }

        // Perform your upload logic here (e.g., send the file to the server)
        console.log('Uploading file:', selectedFile.name);

        // Reset the selected file
        setSelectedFile(null);
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.files || event.target.files.length === 0) {
            return; // User canceled file selection
        }
        const file = event.target.files[0];
        setSelectedFile(file);
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    );
}
