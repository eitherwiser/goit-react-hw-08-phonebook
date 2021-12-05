import { useDispatch, useSelector } from "react-redux";
import * as authSelectors from "redux/auth/auth-selectors";
import * as operations from "redux/auth/auth-operations";

import s from './UserMenu.module.css'
//

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  

  return (
    <div className={s.phonebook_header}>
    <div className={s.logo__wrapper}>
      <span className={s.logo}>Phonebook</span>
    </div>
    <div className={s.user_menu__wrapper}>
      <span className={`material-icons ${s.avatar}`}>
        support_agent
      </span>
      <span className={s.name}>{name}</span>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        logout
      </button>
    </div>
  </div>
  );
}