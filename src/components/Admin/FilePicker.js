import { useState, useCallback, useEffect } from 'react';
import { Pane, FileUploader, FileCard } from 'evergreen-ui';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FilePicker({ setSelectedFile }) {
    const [files, setFiles] = useState([]);
    const [fileRejections, setFileRejections] = useState([]);

    const handleChange = useCallback((files) => setFiles([files[0]]), []);
    const handleRejected = useCallback((fileRejections) => setFileRejections([fileRejections[0]]), []);
    const handleRemove = useCallback(() => {
        setFiles([]);
        setFileRejections([]);
    }, []);

	useEffect(() => {
		const checkSelectedFile = async () => {
			if(files.length !== 0) {
				setSelectedFile(files[0]);
			}
		}

		checkSelectedFile();
	}, [files])

    return (
        <Pane>
            <FileUploader
                maxSizeInBytes={50 * 1024 ** 2}
                maxFiles={1}
                onChange={handleChange}
                onRejected={handleRejected}
                renderFile={(file) => {
                    const { name, size, type } = file;
                    const fileRejection = fileRejections.find((fileRejection) => fileRejection.file === file);
                    const { message } = fileRejection || {};
                    return (
                        <FileCard
                            key={name}
                            isInvalid={fileRejection != null}
                            name={name}
                            onRemove={handleRemove}
                            sizeInBytes={size}
                            type={type}
                            validationMessage={message}
                        />
                    );
                }}
                values={files}
            />
        </Pane>
    );
}
