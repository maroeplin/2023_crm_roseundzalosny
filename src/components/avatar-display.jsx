import blankAvatar from '../images/IAFOR-Blank-Avatar-Image.jpg'

const AvatarDisplay = ({ticket}) => {
    return(
        <div className="avatar-container"> 
        <div className="image-container">
            <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'Foto von: ' + ticket.owner}/>
        </div>
        </div>
    )
}

export default AvatarDisplay