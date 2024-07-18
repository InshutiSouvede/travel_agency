import fuji from '../assets/images/fuji.png'
import map from '../assets/icons/map.svg'
export default function Nav() {
    return (
        <section className='p-10 flex gap-[19px] '>
            <div className="card--img w-[470px] ">
                <img src={fuji} className='w-full' alt="fuji" />
            </div>
            <div className='text-xs flex flex-col justify-evenly py-5'>
                <div className="card-- flex gap-5 ">
                    <div className='flex gap-2'><img src={map} alt="map" />
                        <span className='uppercase'>Japan</span></div>
                    <a className='underline text-[#918E9B]' href="#">View on Google Maps</a>
                </div>
                <h1 className="card--title h-10 font-bold text-2xl">Mount Fuji</h1>
                <h3 className="card--subtitle font-bold">12 Jan, 2021 - 24 Jan, 2021</h3>
                <p className="card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>

        </section>
    )
}