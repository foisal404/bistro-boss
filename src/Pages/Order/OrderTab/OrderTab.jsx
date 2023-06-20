
import FoodCard from '../../../components/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10 justify-items-center">
            {
                items.map(food=><FoodCard key={food._id} item={food}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;