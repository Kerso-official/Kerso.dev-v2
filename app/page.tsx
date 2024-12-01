'use client'
import { Typewriter } from 'react-simple-typewriter'
export default function Home() {


    return (
        <>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <h1 className="text-7xl font-semibold" id="typewrite"><Typewriter words={['KERSO']} typeSpeed={70}/>
                    </h1>
                    <p className="text-4xl font-semibold"><Typewriter words={['App developer']} delaySpeed={2000}/></p>
                    <p className="text-4xl font-bold text-center">↓</p>
                </main>
            </div>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <h1 className="text-5xl">I can code in <Typewriter words={['HTML', 'JAVASCRIPT', 'C#']} cursor
                                                                       typeSpeed={70} deleteSpeed={70} loop/></h1>
                </div>
            </div>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <h1 className="text-5xl font-semibold">My projects: </h1>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                        <li>
                            <b>&quot;KERSO.DEV v3&quot;</b> This site (this is not on github yet)
                        </li>
                        <li>
                            <a href="https://github.com/Kerso-official/MpkCheck-v3"><b>&quot;MpkCheck&quot;</b></a> Web app for checking bus stop schedule online
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><b>&quot;QuizySP14&quot;</b> <i>Is not out yet ;3</i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-14 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <i className="text-xl">Copyright &copy; Kerso {new Date().getFullYear()}</i>
                <div
                    className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-bold text-xl">
                    <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                       href="https://github.com/Kerso-official">
                        <i>Github</i>
                    </a>
                    <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                       href="https://discord.com/users/1147582805803532478">
                        <i>Discord</i>
                    </a>
                    <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                       href="mailto:kerso@kerso.dev">
                        <i>Email</i>
                    </a>
                </div>
            </div>
        </>
    );
}
