import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CAPSULE } from '../../utils/mutations';
import { Form, Input, Button, DatePicker, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';


const { TextArea } = Input;

const CapsuleDetails = () => {
    const navigate = useNavigate();
    const [createCapsule] = useMutation(CREATE_CAPSULE);
    
    const handleSubmit = async (values) => {
        const { title, openDate, letter } = values;
    
       
        const formattedOpenDate = openDate.format('YYYY-MM-DD');
    
        console.log('Submitting form with values:', { title, openDate: formattedOpenDate, letter });
    
        try {
            const response = await createCapsule({ 
                variables: { input: { title, openDate: formattedOpenDate, letter } } 
            });
    
            console.log('Server Response:', response);
        } catch (error) {
            console.error("Error creating capsule:", error);
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


