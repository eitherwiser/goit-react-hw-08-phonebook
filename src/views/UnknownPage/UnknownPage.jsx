import { Link} from "react-router-dom";

import s from './UnknownPage.module.css';
//

const UnknownPage = () => {

    return (
    <div className={s.wrapper}>
        <span class={`material-icons ${s.icon}`}>travel_explore</span>
      <div>
          <span className={s.navigation}>The page you a looking for dasn`t exist.</span> <br/>
          <span className={s.navigation}> <Link to={'../login'}>Return to Phonebook</Link></span>
      </div>      
    </div>
  )
};

export default UnknownPage;