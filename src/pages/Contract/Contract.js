import { useForm } from 'react-hook-form'
import BaseInput from '../../components/input'
import './index.css'

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BaseTextarea } from '../../components/textarea';
import { BaseSelect } from '../../components/select';
import { BaseCheckbox } from '../../components/checkbox';
import gradient from '../../resources/img/GRADIENT.png'
import { baseAxios } from '../../configs/axios';
import { useState } from 'react';

const URL_SEND_MAIL = 'mail/send'

const schema = yup.object().shape({
    name: yup.string().required('Username is required'),
    from: yup.string().email('Invalid email format').required('Email is required'),
    tel: yup.string(),
    companyName: yup.string(),
    contents: yup.string().required("Contents is required"),
    policy: yup.bool()
});




export const Contract = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            policy: false,
            inquiry: 'Inquiries about products'
        }
    })


    const templateHtml = (values) => {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        color: #333;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .email-container {
                        margin: 20px 0;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #0056b3;
                        font-size: 22px;
                        margin-bottom: 20px;
                    }
                    .field {
                        margin-bottom: 15px;
                    }
                    .field label {
                        font-weight: bold;
                        display: block;
                        margin-bottom: 5px;
                    }
                    .field p {
                        margin: 0;
                        padding: 0;
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 12px;
                        color: #777;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <h1>New Inquiry Received</h1>
                    <div class="field">
                        <label for="name">Inquiry Item</label>
                        <p id="name">${values.inquiry}</p>
                    </div>
                    <div class="field">
                        <label for="name">Name</label>
                        <p id="name">${values.name}</p>
                    </div>
                    <div class="field">
                        <label for="mail-address">Mail Address</label>
                        <p id="mail-address">${values.from}</p>
                    </div>
                    <div class="field">
                        <label for="tel">TEL</label>
                        <p id="tel">${values.tel}</p>
                    </div>
                    <div class="field">
                        <label for="company-name">Company Name</label>
                        <p id="company-name">${values.companyName}</p>
                    </div>
                    <div class="field">
                        <label for="contents">Contents of Inquiry</label>
                        <p id="contents">${values.contents}</p>
                    </div>
                    <div class="footer">
                        <p>Thank you for handling this inquiry. We appreciate your attention.</p>
                    </div>
                </div>
            </body>
            </html>
        `
    }


    const onSubmit = async (values) => {
        console.log(values)
        if (values?.policy !== true) {
            window.alert("You must agree to the privacy policy")
            return;
        }

        const subject = `New Inquiry from ${values.name}`
        const html = templateHtml(values)
        const res = await baseAxios.post(URL_SEND_MAIL, {
            subject,
            html,
            from: values.from
        })
        reset()
        window.alert("Send successfully!")
    }

    return <div className="wrapper-container contract">
        <div className='container'>
            <img src={gradient} alt='gradient' className='contract-gradient' />
            <h2 className="contract-title">
                ACCESS
            </h2>
            <div className="contract-address">
                <div className="contract-address_wrapper">
                    <div className='contract-address-tag'>
                        <div className='contract-address_info'>
                            <p>Adress</p>
                            <p>4F BPR Place Kamiyacho, 1-11-9 Azabudai, Minato-ku, Tokyo, 106-0041, Japan</p>
                        </div>
                        <div className='contract-address_info'>
                            <p>TEL</p>
                            <p>03-6453-7565</p>
                        </div>
                        <div className='contract-address_info'>
                            <p>FAX</p>
                            <p>03-6435-2027</p>
                        </div>
                        <div className='contract_firm-name'>【Corporate Law Office】Mori Hamada＆Matsumoto</div>
                    </div>
                    <div className='contract-maps'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6483.349375822503!2d139.7353466393886!3d35.66038580744577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b99bb111efd%3A0x4d48f4f2b41eaa4e!2sAzabudai%2C%20Minato%20City%2C%20Tokyo%20106-0041%2C%20Japan!5e0!3m2!1sen!2s!4v1724141842232!5m2!1sen!2s" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <h2 className="contract-title mt-12">
                CONTRACT
            </h2>
            <p className='contract-title_des'>Please fill out the form below and send it to us.</p>
            <div className='contract-form'>
                <form onSubmit={handleSubmit(onSubmit)} className='form-wrapper'>
                    <BaseSelect
                        options={[
                            {
                                label: 'Inquiries about products',
                                value: 'Inquiries about products'
                            },
                            {
                                label: 'Other inquiries',
                                value: 'Other inquiries'
                            }
                        ]}
                        control={control}
                        name={'inquiry'}
                        label="Inquiry Item"
                    />
                    <BaseInput
                        control={control}
                        name={'name'}
                        label="Name"
                    />
                    <BaseInput
                        control={control}
                        name={'from'}
                        label="Mail Address"
                    />
                    <BaseInput
                        control={control}
                        name={'tel'}
                        label="TEL"
                        isRequired={false}
                    />
                    <BaseInput
                        control={control}
                        name={'companyName'}
                        label="Company Name"
                        isRequired={false}
                    />
                    <BaseTextarea
                        control={control}
                        name={'contents'}
                        label="Contents of Inquiry"
                        rows={10}
                    />
                    <p className='contract-policy'>Please confirm the privacy policy and press the check box.</p>
                    <div className='contract-privacy'>
                        <BaseCheckbox
                            control={control}
                            name={'policy'}
                            label={'I agree to the privacy policy'}
                        />
                    </div>
                    <div className='wrapper-btn'>
                        <button type='submit' className='button-submit'>Confirmation Screen</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}