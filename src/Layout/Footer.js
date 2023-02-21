export default function Footer(){
    return (
        <div className="footer bg-light">
            <div className="container">
            <h1 className="#">Footer</h1>
           <span>{new Date().getFullYear()}: copyright</span> 
            </div>

        </div>
    )
}