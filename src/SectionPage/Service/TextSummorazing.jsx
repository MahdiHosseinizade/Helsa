import { Link } from "react-router-dom";
import Btn from "../../components/common/btn";

const TextSummorazing = () => {
    return (
        <div className="bg-purple-200 flex text-center justify-center">
            <Link to='/service/summorize'>
                <Btn
                    className="block p-4 bg-purple-100  hover:bg-purple-500 hover:text-purple-50 m-4"
                    >
                    خلاصه سازی متن
                </Btn>
            </Link>
        </div>
    );
}
 
export default TextSummorazing;