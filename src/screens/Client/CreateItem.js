import { useState, useCallback, useEffect } from 'react';
import { Pane, FileUploader, FileCard } from 'evergreen-ui';
import { Container, Form, Menu } from 'semantic-ui-react';
import { Image, Alert } from 'react-ui';
import logo1 from '../../static/delirate_new.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL || 'http://192.168.1.7:8080';

export default function CreateItemScreen() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    const navigate = useNavigate();
    
    useEffect(() => {
        
        if(user.role !== 'retailer') {
            navigate('/', { state: {message: 'You are allowed to access this page'}});
        }
    }, [user, navigate])
    
    const [files, setFiles] = useState([]);
    const [fileRejections, setFileRejections] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        model: '',
        sku: '',
        price: '',
        brand: '',
        origin: '',
        description: '',
    });


    const [msg, setMsg] = useState({
        content: '',
        color: '',
    });

    const handleChange = useCallback((files) => setFiles([files[0]]), []);
    const handleRejected = useCallback((fileRejections) => setFileRejections([fileRejections[0]]), []);
    const handleRemove = useCallback(() => {
        setFiles([]);
        setFileRejections([]);
    }, []);

    const clearInput = () => {
        setFormData({
            model: '',
            sku: '',
            price: '',
            brand: '',
            origin: '',
            description: '',
        });

        setTimeout(() => {
            setMsg({ content: '', color: '' });
        }, 3000);
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('file', files[0]); // Append the file
        formDataToSend.append('model', formData.model); // Append form data
        formDataToSend.append('brand', formData.brand);
        formDataToSend.append('sku', formData.sku);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('origin', formData.origin);
        formDataToSend.append('desc', `<pre>${formData.description}</pre>`);
        formDataToSend.append('folder', `/${user.email}/items`);
        formDataToSend.append('distributor', user.hashed_email);

        try {
            if (files[0] && formData.model && formData.brand && formData.origin && formData.description) {
                setIsLoading(true);
                const response = await axios.post(apiUrl + '/item/create', formDataToSend, {
                    headers: {
                        'Folder-Path': `/${user.email}/items`,
                        'Content-Type': 'multipart/form-data',
                    },
                });
                
                const result = response.data;
                console.log(result);
                if (result.success) {
                    setTimeout(() => {
                        clearInput();
                        setIsLoading(false);
                        setMsg({ ...msg, content: result.msg, color: 'lightgreen' });
                    }, 1000);
                } else {
                    setTimeout(() => {
                        setIsLoading(false);
                        setMsg({ ...msg, content: result.msg, color: '#C94E4E' });
                    }, 1000);
                }
            } else {
                setIsLoading(false);
                setMsg({ ...msg, content: 'Some information still empty', color: '#C94E4E' });
            }

            // Handle the response from the server as needed
        } catch (error) {
            setIsLoading(false);
            setMsg({ ...msg, content: 'File upload error: ' + error, color: '#C94E4E' });
        }
    };

    return (
        <Container alignText="left">
            <div className="">
                <Form {...(isLoading && { loading: true })}>
                    <Menu widths={1}>
                        <Menu.Item className="bg-x" name="Create Item" />
                    </Menu>
                    <Image css={{ width: '300px', marginBottom: '40px' }} src={logo1} />
                    <Form.Group className='px-5' widths="equal">
                        <Form.Input
                            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                            value={formData.model}
                            fluid
                            placeholder="Model"
                        />
                    </Form.Group>

                    <Form.Group className='px-5' widths="equal">
                        <Form.Input
                            value={formData.sku}
                            onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                            fluid
                            placeholder="Sku"
                        />
                        <Form.Input
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            fluid
                            type='number'
                            placeholder="Price"
                        />
                    </Form.Group>
                    <Form.Group className='px-5' widths="equal">
                        <Form.Input
                            value={formData.brand}
                            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                            fluid
                            placeholder="Brand"
                        />
                        <Form.Input
                            value={formData.origin}
                            onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                            fluid
                            placeholder="Origin"
                        />
                    </Form.Group>

                    <Form.TextArea className='px-5'
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Description..."
                    />
                    <Pane className='px-5' Width={650}>
                        <FileUploader
                            maxSizeInBytes={50 * 1024 ** 2}
                            maxFiles={1}
                            onChange={handleChange}
                            onRejected={handleRejected}
                            renderFile={(file) => {
                                const { name, size, type } = file;
                                const fileRejection = fileRejections.find(
                                    (fileRejection) => fileRejection.file === file,
                                );
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
                    <Alert css={{ color: `${msg.color}`, border: '0' }}>{msg.content}</Alert>
                    <Form.Button onClick={handleSubmit}>Submit</Form.Button>
                    <div className='py-2'></div>
                </Form>
            </div>
        </Container>
    );
}
