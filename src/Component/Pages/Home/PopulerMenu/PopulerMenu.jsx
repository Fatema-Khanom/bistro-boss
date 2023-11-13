import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';

const PopulerMenu = () => {
    const [menu,setMenu]=useState ([])
    useEffect (()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const populerItems = data.filter(item=>item.category ==='popular')
            setMenu(populerItems)
        })
    },[])
    return (
        <div>
            
                <SectionTitle  subHeading ={"Check it out"}
            heading={"Populer Iteams"}></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    menu.map(item=><MenuItem
                    key={item._id}
                    item={item}  >

                    </MenuItem>)
                }
            </div>
           
        </div>
    );
};

export default PopulerMenu;