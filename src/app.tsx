import { Admin, Resource } from "react-admin";

import { DummyList, UserList } from "./operations/dummy";
import { dataProvider } from "./providers";
import { UserShow } from "./operations/user/user-show";
import { UserEdit } from "./operations/user/user-edit";
import { UserCreate } from "./operations/user/user-create";
import { EventList } from "./operations/event/event-list";
import { EventShow } from "./operations/event/event-show";
import { EventCreate } from "./operations/event/event-create";

export const App = () => {
  return (
    <Admin title="Tapakila Admin" dataProvider={dataProvider}>
      <Resource name="dummy" list={<DummyList />} />
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
        edit={UserEdit}
        create={EventCreate}
      />
    </Admin>
  );
};
