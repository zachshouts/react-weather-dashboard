import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const UVCard = (props) => {

    return (
        <>
            <div className='card bg-white w-full h-full rounded-2xl drop-shadow-md'>
                <div className='row'>
                    <p className='text-xl text-text-secondary pl-7 py-5'>{props.title}</p>
                </div>
                <div className='row w-full overflow-clip'>
                    <div className='progress-container w-36 h-36 mx-auto'>
                        <CircularProgressbar
                            value={props.value}
                            text={props.value}
                            circleRatio={0.5}
                            maxValue={15}
                            strokeWidth={20}
                            styles={{
                                trail: {
                                    strokeLinecap: 'butt',
                                    transform: 'rotate(-90deg)',
                                    transformOrigin: 'center center',
                                },
                                path: {
                                    strokeLinecap: 'butt',
                                    transform: 'rotate(-90deg)',
                                    transformOrigin: 'center center',
                                    stroke: 'orange'
                                },
                                text: {
                                    fill: 'black',
                                    fontSize: '2rem'
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UVCard;