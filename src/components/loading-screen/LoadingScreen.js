import './LoadingScreen.scss'
import logo from '../../assets/netflix.png';

function LoadingScreen() {
    return (
        <div class="container-loading">
            <img className="logo-loading" src={logo} alt="Netflix" />
            <div className="loader loader-1">
                <div className="loader-outter"></div>
                <div className="loader-inner"></div>
            </div>
        </div>
    )
}

export default LoadingScreen
