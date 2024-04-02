import {useParams} from "react-router-dom";

const ProductView = () => {
    const {id} = useParams();
    return (
        <>
            <div>
                <h1>
                    产品阐述:{id}
                </h1>
            </div>
        </>
    )
}

export default ProductView
