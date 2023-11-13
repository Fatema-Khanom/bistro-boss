

const MenuItem = ({item}) => {
    const {image,price,name,recipe}=item ;
    return (
        <div className='flex '>
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div className="text-left ml-2">
                <p className="uppercase">{name}-----------</p>
                <p className="">{recipe}</p>
            </div>
            <p className="text-yellow-600 ">${price}</p>
        </div>
    );
};

export default MenuItem;