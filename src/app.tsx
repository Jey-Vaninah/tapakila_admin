import { Admin, Resource } from "react-admin";

import { dataProvider } from "./providers";
import { UserList } from "./operations/user/user-list";
import { UserShow } from "./operations/user/user-show";
import { UserEdit } from "./operations/user/user-edit";
import { UserCreate } from "./operations/user/user-create";
import { EventList } from "./operations/event/event-list";
import { EventShow } from "./operations/event/event-show";
import { EventCreate } from "./operations/event/event-create";
import { EventEdit } from "./operations/event/event-edit";

export const App = () => {
  return (
    <Admin title="Tapakila Admin" dataProvider={dataProvider}>
      <Resource
        name="user"
        list={UserList}
        show={UserShow}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource
        name="event"
        list={EventList}
        show={EventShow}
        edit={EventEdit}
        create={EventCreate}
      />
    </Admin>
  );
};
