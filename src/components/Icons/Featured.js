import React from 'react'

const Icon = ({ style = {marginRight: 5},
    fill = '#fff',
    width = ' 475.085px',
    className = '',
    height = '475.085px',
    viewBox = '0 0 475.084 475.085' }) => {
    return(
        <svg
            width={width}
            style={style}
            height={height}
            viewBox={viewBox}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
        <g fill={fill}>
	        <path d="M362.296,125.055c-2.851-2.853-6.092-4.28-9.706-4.287c-0.77,0-1.902,0.193-3.432,0.572L236.1,149.319L284.917,17.13
		c0.951-1.903,1.431-3.614,1.431-5.139c0-3.234-1.242-6.04-3.713-8.42C280.161,1.188,277.115,0,273.501,0h-93.645
		c-3.045,0-5.708,0.855-7.994,2.568c-2.284,1.715-3.809,3.905-4.568,6.567l-57.386,235.546c-0.953,4.564,0.284,8.277,3.711,11.135
		c2.473,2.099,5.421,3.139,8.848,3.139c1.524,0,2.666-0.089,3.427-0.281l115.914-28.838l-56.244,230.691
		c-0.76,3.045-0.333,5.899,1.287,8.562c1.619,2.669,4.047,4.476,7.281,5.427c1.903,0.377,3.239,0.568,3.999,0.568
		c5.52,0,9.514-2.375,11.991-7.136l154.172-330.332C366.389,133.049,365.728,128.86,362.296,125.055z"/>
        </g>
    </svg>
    )
}

export default Icon