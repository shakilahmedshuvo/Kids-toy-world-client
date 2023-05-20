import { Link, useRouteError } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    useTitle('404 Error')
    return (
        <div className='text-center text-2xl text-warning mt-1'>
            <div className='w-[75%] mx-auto'>
                <img
                    className='mx-auto w-1/2 h-2/4'
                    src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1684440044~exp=1684440644~hmac=b166e72c23920b03bfc8526b79fbd502d2db42c34e5db296c82dae88f9496e7c" alt="" />
            </div>
            <h2 className='mb-5 font-extrabold text-5xl'>
                <span className='text-warning'>
                    ERROR
                </span> {status || 404}
            </h2>
            <p className='font-bold mb-4'>
                {error?.message}
            </p>
            <Link
                to='/'
                className='no-underline px-5 py-3 font-bold rounded bg-warning text-slate-600 mb-20'
            >
                Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;