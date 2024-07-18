import fuji from '../assets/images/fuji.png'
import map from '../assets/icons/map.svg'
export default function Nav(){
    return (
        <section>
            <div className="card--img">
                <img src={fuji} alt="fuji" />
            </div>
            <div className="card--stats">
            <img src={map} alt="map" />
            <h2>Japan</h2>
            <a href="#">View on Google Maps</a>
            </div>
            <h1 className="card--title">Mount Fuji</h1>
            <h3 className="card--subtitle">12 Jan, 2021 - 24 Jan, 2021</h3>
            <p className="card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </section>
    )
}