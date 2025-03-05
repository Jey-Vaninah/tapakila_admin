import { Admin, Resource } from "react-admin"

import { DummyList, UserList } from "./operations/dummy"
import { dataProvider } from "./providers"

export const App = () => {
  return (
    <Admin
      title="Tapakila Admin"
      dataProvider={dataProvider}
    >
      <Resource name="dummy" list={<DummyList />} />
      <Resource name="user" list={<UserList />} />
    </Admin>
  )
}
