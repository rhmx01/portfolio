import React from 'react';

const Title = ({title, icon, color}) => {
    return (
        // <div>
        //     <div className="flex items-center">
        //         <img src={icon} alt={"rachid hamma ali" + title} className="w-10 p-1 rounded-md mr-2"/>
        //         <h4 className="about-titles ">{title}</h4>
        //     </div>
        //     <hr className="about-divider mb-5"/>
        // </div>
        <div className="sectiontitle">
            <h2 style={{color: color}}>{title}</h2>
            <span className="headerLine"/>
        </div>
    );
};

export default Title;