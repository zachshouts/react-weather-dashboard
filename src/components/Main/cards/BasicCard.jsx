

const BasicCard = (props) => {

    return (
        <>
            <div className='card bg-white w-full rounded-2xl drop-shadow-md'>
                <div className='row'>
                    <p className='text-xl text-text-secondary pl-7 py-5' style={{textDecoration: 'underline'}}>{props.title}</p>
                </div>
                <div className='row flex justify-center'>
                    <p className='text-4xl pl-7 py-5'>{props.value} { props.unit ? <span className="text-xl align-top">{props.unit}</span> : '' }</p>

                </div>
                <div className='row flex'>
                    <p className='text-xl pl-7 py-5'>{props.message}</p>
                </div>
            </div>
        </>
    );
}

export default BasicCard;