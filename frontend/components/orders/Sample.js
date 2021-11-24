import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../../redux/actions/orderActions";


const Sample = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const orderListMy = useSelector(state => state.orderListMy);
  const { loading, orders, error } = orderListMy
  console.log('the value appearing', loading)
  const userLogin = useSelector(state => state.userLogin)
  
  useEffect(() => {

    const init = async () => {
      await dispatch(listMyOrders())      
    }

    if (userLogin.userInfo.length !== 0) {
      init();
    } else {
      router.push('/');
    } 
  },[])


  return (
    <div>      
      <main
        className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        aria-labelledby="order-history-heading"
      >
        <div className="max-w-xl">
          <h1 id="order-history-heading" className="text-3xl font-extrabold tracking-tight text-gray-900">
            Order history
          </h1>
          <p className="mt-2 text-sm text-gray-500">            
          </p>
        </div>

      <div className="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
        {!loading &&          
            orders.map(value => (
            value.orderItems.map(order => (
              <div key={order._id} className="py-6 sm:flex">
                <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                  <img
                    src={order.imageSrc}
                    alt={order.imageAlt}
                    className="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48"
                  />
                  <div className="pt-1.5 min-w-0 flex-1 sm:pt-0">
                    <h3 className="text-sm font-medium text-gray-900">
                      <a href={order.href}>{order.name}</a>
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                      <span>{order.color}</span>{' '}
                      <span className="mx-1 text-gray-400" aria-hidden="true">
                        &middot;
                      </span>{' '}
                      <span>{order.size}</span>
                    </p>
                    <p className="mt-1 font-medium text-gray-900">{order.brand}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                  <p>Pickup Location:</p> {order.dropLocation}
                  
                </div>
              </div>
            ))
          ))}
        </div>        
      </main>     
    </div>
  );
}

export default Sample;