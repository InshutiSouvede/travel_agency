import map from '../../public/assets/icons/map.svg'
export default function Card(props) {
    console.log("prope",props)
    return (
        <section className='p-10 xl:p-20 lg:w-3/4 m-auto grid grid-cols-[30%_60%] gap-5'>
            <div className="card--img">
                {/* relative path from the public folder */}
                <img src={`./assets/images/${props.img}`}  className='w-full' alt="fuji" />
            </div>
            <div className='text-xs md:text-lg xl:text-2xl flex flex-col justify-evenly py-5'>
                <div className="card-- flex gap-5 ">
                    <div className='flex gap-2'><img src={map} alt="map" />
                        <span className='uppercase'>{props.place}</span></div>
                    <a className='underline text-[#918E9B]' href="#">View on Google Maps</a>
                </div>
                <h1 className="card--title h-10 md:h-14 font-bold text-2xl md:text-4xl">{props.title}</h1>
                <h3 className="card--subtitle font-bold">{props.duration}</h3>
                <p className="card--description">{props.description}</p>
            </div>

        </section>
    )
}