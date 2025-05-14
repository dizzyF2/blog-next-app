

import LoginForm from '@/app/components/LoginForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../auth';
import { redirect } from 'next/navigation';

async function Login() {
    const session = await getServerSession(authOptions)

    if (session) {
        redirect("/");
    }
    return (
        <LoginForm />
    )
}


export default Login