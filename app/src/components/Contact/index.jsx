import './style.scss'
import { useRef, useState, useEffect } from 'react';
import { IMaskInput } from 'react-imask';
import { toast } from 'react-toastify'

function Contact() {
    const [phoneNumber, setPhoneNumber] = useState('')
    const chatID = '2142441156'
    const token = '7088426009:AAG2-waAtp0EGc0XxX-9mmGkMKBRxAlCV9M'
    const ref = useRef(null)
    const inputRef = useRef(null)

    const handleAccept = (value) => {
        setPhoneNumber(value)
    }

    useEffect(() => {
        const timeout = localStorage.getItem('timeout');
        if (timeout && new Date().getTime() < timeout) {
            const waitTime = Math.ceil((timeout - new Date().getTime()) / 1000);
            toast.info(`Подождите ${(waitTime / 60).toFixed(1)} минут перед следующей попыткой`, {
                theme: "dark",
                autoClose:1000
            });
        }
    }, []);

    async function handleSubmit() {
        const attempts = parseInt(localStorage.getItem('attempts')) || 0;
        const timeout = localStorage.getItem('timeout');

        if (timeout && new Date().getTime() < timeout) {
            const waitTime = Math.ceil((timeout - new Date().getTime()) / 1000);
            toast.info(`Подождите ${(waitTime / 60).toFixed(1)} минут перед следующей попыткой`, {
                theme: "dark",
                autoClose: 1000
            });
            return;
        }

        if (attempts < 3) {
            if (phoneNumber.length == 0) {
                toast.warning('Заполните форму!!!', {
                    theme: "dark"
                });
            } else {
                try {
                    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=+7${phoneNumber}`);
                    if (response.ok) {
                        toast.success('Успешно отправлено!', {
                            theme: "dark"
                        });
                    } else {
                        throw new Error('Ошибка при отправке');
                    }
                } catch (error) {
                    console.error('Ошибка:', error);
                    toast.error('Ошибка при отправке', {
                        theme: "dark"
                    });
                }
            }
            localStorage.setItem('attempts', attempts + 1);
        } else {
            const newTimeout = new Date().getTime() + 5 * 60 * 1000; // 5 минут
            localStorage.setItem('timeout', newTimeout);
            localStorage.setItem('attempts', 0);
            toast.error('Вы исчерпали свои попытки. Подождите 5 минут.', {
                theme: "dark"
            });
        }

    }
    return (
        <>
            <div className="contact-wrapper" id='contact'>
                <div className="contact">
                    <div className="form-container">
                        <div className="title">Чтобы сделать заказ, укажите ваш телефон</div>
                        <div className="desc">Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания</div>
                        <div className="form">
                            <IMaskInput
                                mask='+7 (000) 000-00-00'
                                definitions={{
                                    '0': {
                                        mask: Number,
                                        lazy: false // делает символ всегда видимым
                                    }
                                }}
                                overwrite={true} // позволяет перезаписывать символы
                                unmask={true} // возвращает значение без маски
                                ref={ref}
                                inputRef={inputRef}
                                onAccept={handleAccept}
                                value={phoneNumber}
                                id='phone-number'
                                placeholder='Номер телефона'
                            />

                            <button className='yellow-button' onClick={handleSubmit}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;