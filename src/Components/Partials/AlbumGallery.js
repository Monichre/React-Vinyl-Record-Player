import React, {Component} from 'react'
import '../../AlbumGallery.css'

// Order
// View Player
// Player

const ViewPlayer = () => (
    <div className="view view--player">
    <button className="control-button control-button--back" aria-label="Back to album slideshow">
        <svg className="icon icon--arrow">
            <use xlinkHref="#icon-arrow"></use>
        </svg>
    </button>
    <div className="player-info">
        <h2 className="artist artist--player">Lena Glass</h2>
        <h3 className="title title--player">Blue Moments</h3>
        <span className="year year--player">1999</span>
    </div>
    <div className="player-stand">
        <div className="visualizer"></div>
        <span className="song"></span>
        <div className="player__controls">
            <button className="player-button player-button--rotate" aria-label="Rotate LP">
                <svg className="icon icon--rotate">
                    <use xlinkHref="#icon-rotate"></use>
                </svg>
            </button>
            <button className="player-button player-button--playstop" aria-label="Play or Stop">
                <svg className="icon icon--play icon--hidden">
                    <use xlinkHref="#icon-play"></use>
                </svg>
                <svg className="icon icon--stop">
                    <use xlinkHref="#icon-stop"></use>
                </svg>
            </button>
        </div>
    </div>


    <div className="effects">
        
        <button className="effects__button effects__button--vinyleffect effects__button--active" aria-label="Toggle Vinyl effect">
            <svg className="icon icon--effect">
                <use xlinkHref="#icon-effect"></use>
            </svg>
        </button>
        
        <div className="effects__irs">
            <button className="effects__button">
                <svg className="icon icon--touchthrough icon--ir-cathedral">
                    <use xlinkHref="#icon-ir-cathedral"></use>
                </svg>
            </button>
            <button className="effects__button">
                <svg className="icon icon--touchthrough icon--ir-acoustic">
                    <use xlinkHref="#icon-ir-acoustic"></use>
                </svg>
            </button>
            <button className="effects__button">
                <svg className="icon icon--touchthrough icon--ir-stadium">
                    <use xlinkHref="#icon-ir-stadium"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
)

const Player = () => (
    <div className="player">
    <div className="player__element player__element--lp">
        <div className="player__element-inner">
            <svg className="player__svg-lp" viewBox="0 0 800 800">
                <title>LP</title>
                <path fill="#181819" d="M400,1C179.6,1,1,179.6,1,400s178.6,399,399,399s399-178.6,399-399S620.4,1,400,1zM400,409.8c-5.4,0-9.8-4.4-9.8-9.8s4.4-9.8,9.8-9.8s9.8,4.4,9.8,9.8S405.4,409.8,400,409.8z" />
                <g stroke-width="1.5" stroke="#141415" fill="#181819">
                    <path d="M400,20C190.1,20,20,190.1,20,400s170.1,380,380,380s380-170.1,380-380S609.9,20,400,20z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,30C195.7,30,30,195.6,30,400s165.7,370,370,370s370-165.7,370-370S604.3,30,400,30z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,40C201.2,40,40,201.2,40,400s161.2,360,360,360s360-161.2,360-360S598.8,40,400,40z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,50C206.7,50,50,206.7,50,400s156.7,350,350,350s350-156.7,350-350S593.3,50,400,50z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,60C212.2,60,60,212.2,60,400s152.2,340,340,340s340-152.2,340-340S587.8,60,400,60z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,70C217.8,70,70,217.8,70,400s147.8,330,330,330s330-147.8,330-330S582.2,70,400,70z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,80C223.3,80,80,223.3,80,400s143.3,320,320,320s320-143.3,320-320S576.7,80,400,80z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,90C228.8,90,90,228.8,90,400s138.8,310,310,310s310-138.8,310-310S571.2,90,400,90z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,100c-165.7,0-300,134.3-300,300s134.3,300,300,300s300-134.3,300-300S565.7,100,400,100z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,110c-160.2,0-290,129.8-290,290s129.8,290,290,290s290-129.8,290-290S560.2,110,400,110z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,120c-154.6,0-280,125.4-280,280s125.4,280,280,280s280-125.4,280-280S554.6,120,400,120z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,130c-149.1,0-270,120.9-270,270s120.9,270,270,270s270-120.9,270-270S549.1,130,400,130z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,140c-143.6,0-260,116.4-260,260s116.4,260,260,260s260-116.4,260-260S543.6,140,400,140z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,150c-138.1,0-250,111.9-250,250s111.9,250,250,250s250-111.9,250-250S538.1,150,400,150z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,160c-132.5,0-240,107.5-240,240s107.5,240,240,240s240-107.5,240-240S532.5,160,400,160z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,170c-127,0-230,103-230,230s103,230,230,230s230-103,230-230S527,170,400,170z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,180c-121.5,0-220,98.5-220,220s98.5,220,220,220s220-98.5,220-220S521.5,180,400,180z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,190c-116,0-210,94-210,210s94,210,210,210s210-94,210-210S516,190,400,190z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                    <path d="M400,200c-110.5,0-200,89.5-200,200s89.5,200,200,200s200-89.5,200-200S510.5,200,400,200z M399.2,414.8c-8.6,0-15.5-6.9-15.5-15.5s6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5S407.8,414.8,399.2,414.8z"/>
                </g>
                <path id="cover" fill="#4bb749" opacity="0" d="M400,262.1c-76.1,0-137.9,61.7-137.9,137.9S323.9,537.9,400,537.9S537.9,476.1,537.9,400S476.1,262.1,400,262.1z M400,411.7c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S406.4,411.7,400,411.7z" />
                <defs>
                    <clipPath id="coverClip">
                        <path fill="#4bb749" d="M400,262.1c-76.1,0-137.9,61.7-137.9,137.9S323.9,537.9,400,537.9S537.9,476.1,537.9,400S476.1,262.1,400,262.1z M400,411.7c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S406.4,411.7,400,411.7z" />
                    </clipPath>
                </defs>
                <image xlinkHref="img/album11.jpg" x="250" y="250" height="300px" width="300px" clipPath="url(#coverClip)"/>
                <text className="lp-side-label lp-side-label--a" transform="matrix(1 0 0 1 381.8867 509.8047)" style="opacity:0.2; font-family:'Arial'; font-size:50.4557px;">A</text>
                <text className="lp-side-label lp-side-label--b" transform="matrix(-1 0 0 1 418.2188 509.8047)" style="opacity:0.2; font-family:'Arial'; font-size:50.4557px;">B</text>
            </svg>
        </div>
    </div>
    <div className="player__element player__element--tonearm">
        <svg className="player__svg-tonearm" >
            <use xlinkHref="#icon-tonearm"></use>
        </svg>
    </div>
</div>
)
const View = () => (
    <div className="view view--single">
    <div className="single" id="album-1" data-side1="mp3/Stolen_Dreams_Backing_Track.mp3,mp3/Dream_On_This_Side.mp3,mp3/Beautiful_Paranoia.mp3" data-side2="mp3/Rock_On.mp3,mp3/Old_Man_and_the_Sea_II.mp3,mp3/Dawn's_Battle.mp3">
        <div className="img-wrap img-wrap--single">
            <img className="img img--single" src="img/album1.jpg" alt="album1" />
        </div>
        <span className="number">01<span className="number__total">12</span></span>
        <h2 className="artist artist--single">Lena Glass</h2>
        <h3 className="title title--single">Blue Moments</h3>
        <span className="year year--single">1999</span>
    </div>
    <div className="single" id="album-2" data-side1="mp3/Beyond_Jupiter.mp3,mp3/To_Free_Me.mp3,mp3/Caves_of_Steel.mp3" data-side2="mp3/Luna's_Little_Friend.mp3,mp3/Stolen_Dreams_Backing_Track.mp3,mp3/Dream_On_This_Side.mp3">
        <div className="img-wrap img-wrap--single">
            <img className="img img--single" src="img/album2.jpg" alt="album2" />
        </div>
        <span className="number">02<span className="number__total">12</span></span>
        <h2 className="artist artist--single">Peekaboo</h2>
        <h3 className="title title--single">Clear Nonsense</h3>
        <span className="year year--single">1984</span>
    </div>

    

    <button className="control-button control-button--back" aria-label="Back to grid view">
        <svg className="icon icon--arrow">
            <use xlinkHref="#icon-arrow"></use>
        </svg>
    </button>
</div>
)

export default class AlbumGallery extends Component {
    componentDidMount(){

        const body = document.querySelector('body')
        let script = document.createElement('div')
        script.setAttribute('src', 'js/main.js')
        body.appendChild(script)

    }
    render() {
        return (
            <div className="AlbumGallery">
                <svg class="hidden">
			        <defs>
                        <symbol id="icon-lp-mini" viewBox="0 0 800 800">
                            <title>LP Mini</title>
                            <g style={{fill: '#181819', stroke: '#141415', strokeWidth: 1.5}}>
                                <circle cx="400" cy="400" r="380" />
                                <circle cx="400" cy="400" r="370" />
                                <circle cx="400" cy="400" r="360" />
                                <circle cx="400" cy="400" r="350" />
                                <circle cx="400" cy="400" r="340" />
                                <circle cx="400" cy="400" r="330" />
                                <circle cx="400" cy="400" r="320" />
                                <circle cx="400" cy="400" r="310" />
                                <circle cx="400" cy="400" r="300" />
                                <circle cx="400" cy="400" r="290" />
                                <circle cx="400" cy="400" r="280" />
                                <circle cx="400" cy="400" r="270" />
                                <circle cx="400" cy="400" r="260" />
                                <circle cx="400" cy="400" r="250" />
                                <circle cx="400" cy="400" r="240" />
                                <circle cx="400" cy="400" r="230" />
                                <circle cx="400" cy="400" r="220" />
                                <circle cx="400" cy="400" r="210" />
                                <circle cx="400" cy="400" r="200" />
                            </g>
                        </symbol>
                    </defs>
                </svg>
                    <main>
                        <div className="view view--grid view--current">
                            <ul className="album-grid">
                                {this.props.albums.map((album) => (
                                    <li className="grid__item">
                                        <a className="grid__link" href="#album-1" data-playlist-1= "" data-playlist-2="audio/songStolen_Dreams_Backing_Track.mp3">
                                            <div className="img-wrap img-wrap--grid">
                                                <svg className="lp lp--grid">
                                                    <use xlinkHref="#icon-lp-mini"></use>
                                                </svg>
                                                <img className="img img--grid" src={album.fields.albumPhoto.fields.file.url} alt="album1" />
                                            </div>
                                            <span className="year">1999</span>
                                            <h3 className="title">{album.fields.albumTitle}</h3>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        
                        </div>
                    <div className="deco-expander"></div>
                
                
                </main>
            </div>
        )
    }
}
