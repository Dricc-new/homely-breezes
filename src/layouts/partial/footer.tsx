export function Footer() {
    return <footer className='bg-stone-950 text-stone-50 w-full'>
        <section className='container mx-auto pt-24 sm:pt-24'>
            <ul className='flex flex-wrap gap-4 justify-between w-full'>
                <li className='w-fit flex flex-col gap-2 mt-8'>
                    <h1 className='mb-2 text-xl font-semibold'>Address</h1>
                    <h3 className='font-light'>
                        200, Green road, Mongla,
                        <br />
                        New Yor City USA
                    </h3>
                    <a href="#" className='text-blue-400 underline underline-offset-8'>Get Direction</a>
                </li>

                <li className='w-fit flex flex-col gap-2 mt-8'>
                    <h1 className='mb-2 text-xl font-semibold'>Reservation</h1>
                    <a href="tel:+19 999 999 9999">+19 999 999 9999</a>
                    <a href="mailto:reservation@homelybreezes.com">reservation@homelybreezes.com</a>
                </li>

                <li className='w-fit flex flex-col gap-2 mt-8'>
                    <h1 className='mb-2 text-xl font-semibold'>Navigation</h1>
                    <div className='flex flex-col gap-2'>
                        <a href="#">Home</a>
                        <a href="#">Rooms</a>
                        <a href="#">About</a>
                        <a href="#">News</a>
                    </div>
                </li>

                <li className='w-fit flex flex-col gap-2 mt-8'>
                    <h1 className='mb-2 text-xl font-semibold'>Newsletter</h1>
                    <form action="">
                        <div className='flex items-center justify-between w-full overflow-hidden rounded pl-4 bg-white'>
                            <input placeholder='Enter your email' type="email" />
                            <button type="submit" className='p-2 px-4 bg-gradient-to-br from-blue-400 to-violet-700'>SignUp</button>
                        </div>
                    </form>
                    <h3 className='font-extralight'>Subscribe newsletter to get updates</h3>
                </li>
            </ul>
            <article className='flex max-sm:flex-col-reverse gap-4 justify-between items-center mt-10 py-4'>
                <h4 className='text-sm font-light text-center my-2'>Copyright ©2024 All rights reserved | Template made with ReactJS by Dricc-new</h4>
                <div className='flex items-center gap-4'>
                    <h1>Visit our</h1>
                    <a href="#" className='text-2xl'><i className='fab fa-facebook' /></a>
                    <a href="#" className='text-2xl'><i className='fab fa-twitter' /></a>
                    <a href="#" className='text-2xl'><i className='fab fa-instagram' /></a>
                </div>
            </article>
        </section>
    </footer>
}