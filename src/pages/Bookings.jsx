import '../styles/bookings.css'
export default function Bookings() {
    return (
        <div className="bookingsMain">
            <div className="bookingsHero"><h1 className="headerText">Book Me</h1></div>
            <p className="bookingsDescription">We’d love to hear from you. For ministrations, events, or anything else, <br />
                kindly fill out the form below and we’ll be in touch.
            </p>
            <div className="bookingsForm">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfd7xf9ExxcfiamK2ZF-WkUHBZybAfgA93EjujcpL3ATJdD3w/viewform?embedded=true" 
                width="640" height="3474" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> 
            </div>
            
        </div>
    )
}