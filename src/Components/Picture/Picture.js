import "./Picture.css";
import tabbyPhoto from './tabby.png';
import photo from './photo.png'

function Picture() {
    return (
        <div>
            <img src={photo} className="tabbyImg" />
        </div>
    )
};

export default Picture;