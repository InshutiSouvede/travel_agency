import logo from '../../public/assets/icons/earth.svg'
export default function Nav(){
    return (
        <nav className='bg-[#F55A5A] flex justify-center h-14 items-center text-white gap-2'>
        <img src={logo} alt="logo" />
        <h1>my travel journal.</h1>
        </nav>
    )
}