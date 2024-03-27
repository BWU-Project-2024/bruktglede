'use client';

import { login } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { Input } from './Input';

const loginInitialState = {
    message: '',
    errors: {
        email: '',
        password: '',
        credentials: '',
        unknown: '',
    },
};

const Form = () => {
    const [formState, formAction] = useFormState(login, loginInitialState);

    return (
        <form action={formAction} className='space-y-4 w-full max-w-sm'>
            <Input required name='email' placeholder='email' />
            <Input
                required
                name='password'
                type='password'
                placeholder='password'
            />
            <button type='submit'>
                submit
            </button>
        </form>
    )
}