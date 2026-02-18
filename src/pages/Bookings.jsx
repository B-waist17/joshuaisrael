import '../styles/bookings.css'
export default function Bookings() {
    return (
        <div className="bookingsMain">
            <div className="bookingsHero"><h1 className="headerText">Book Me</h1></div>
            <p className="bookingsDescription">We’d love to hear from you. For ministrations, events, or anything else, <br />
                kindly fill out the form below and we’ll be in touch.
            </p>
            <div className="bookingsForm">
                <iframe className='form' src="https://docs.google.com/forms/d/e/1FAIpQLSdD2LfSQSQoySvW1VTwq__W89lIJeZ2QckaN9QO2lkVonApOg/viewform?embedded=true" 
                width="1200px" height="2715" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>  
            </div>
            
        </div>
    )
}