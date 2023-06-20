

const PopularItems = ({item}) => {
    const {_id,name,recipe,image,price,category}=item
    return (
        <div className="flex gap-5">
            <img src={image} alt="" className="w-[100px] h-[100px]" style={{borderRadius: "0px 200px 200px 200px"}} />
            <div>
                <h2>{name}------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default PopularItems;