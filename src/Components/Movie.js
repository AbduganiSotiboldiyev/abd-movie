export default function Movie(props) {
    const {Title,Year, imdbID,Type,Poster} = props;

    return (
        <div key={imdbID} className="card movie" >
            <img src={Poster} className="card-img-top img_card" alt="rasm"/>
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text card_year">{Year} <span>{Type}</span></p>
                <p className="info">loremdgmlewigdsmfk dg njeugjbejk
                    e gege gewg
                    g ewgew
                </p>
            </div>
        </div>
    )
}