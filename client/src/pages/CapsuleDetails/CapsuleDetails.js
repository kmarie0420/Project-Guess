import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CAPSULE } from '../../utils/mutations';
import { Form, Input, Button, DatePicker, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import UserContext from '../../UserContext';

const { TextArea } = Input;

const CapsuleDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    
    // Logging the user data from the context when the component renders
    console.log('User from context:', user);

    const [createCapsule] = useMutation(CREATE_CAPSULE);

    const handleSubmit = async (values) => {
        console.log('Received form values:', values); // Logging raw form values
        
        if (!user || !user._id) {
            console.error('User is not defined or missing _id attribute');
            return;
        }
        
        const { title, openDate, letter } = values;
        const formattedOpenDate = openDate.format('YYYY-MM-DD');
    
        const submitValues = { title, openDate: formattedOpenDate, letter, userId: user._id };
        console.log('Submitting form with formatted values:', submitValues);
    
        try {
            const response = await createCapsule({ 
                variables: { input: submitValues } 
            });
    
            console.log('Server Response after capsule creation:', response);
            if (response.data && response.data.createCapsule) {
                console.log('Capsule created:', response.data.createCapsule);
            } else {
                console.warn('Unexpected response structure from server');
            }
        } catch (error) {
            console.error("Error creating capsule:", error);
            if (error.graphQLErrors) {
                console.error("GraphQL Errors:", error.graphQLErrors);
            }
            if (error.networkError) {
                console.error("Network Errors:", error.networkError);
            }
        }
    };

    return (
        <Card title="Create New Capsule" style={{ maxWidth: '600px', margin: '40px auto' }}>
            <Button 
            type="link" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate('/')}
            style={{ marginBottom: '20px' }}
                >
                Back to Dashboard
            </Button>
            <Form layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input the title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Open Date"
                    name="openDate"
                    rules={[{ required: true, message: 'Please select the open date!' }]}
                >
                    <DatePicker format="YYYY-MM-DD" />
                </Form.Item>

                <Form.Item
                    label="Letter"
                    name="letter"
                    rules={[{ required: true, message: 'Please input the letter!' }]}
                >
                    <TextArea rows={10} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button 
                    type="default" 
                    onClick={() => navigate('/')}
                    style={{ marginLeft: '10px' }}
                        >
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default CapsuleDetails;


