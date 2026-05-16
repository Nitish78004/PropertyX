import React, { useEffect } from 'react'
import { MdWidthFull } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const Navigate = useNavigate();

    useEffect(() => {
        // Navigate('/login');

    }, [])
    return (
        <>

            {/* <h1>Not Found</h1> */}
            <div className="row">
                <div className="col-sm-2">
                    <div className="col-sm-7">
                        <img src='/public/error.jpg' alt='' />
                    </div>
                    <div className="col-sm-2"></div>

                </div>
            </div>


        </>
    )
}

export default NotFound;