// Import Link to convert the h1 tag to an anchor tag with href leading back to blogs page
import {Link} from "react-router-dom";
const Info = () => {
    return (
        <Link to='/blogs' ><h1> Product Info </h1></Link>
        
        
    )
}

export default Info;